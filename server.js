const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { userMessage, recipes } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: 'userMessage is required' });
    }

    // Crea il contesto ricette
    const recipesContext = (recipes || [])
      .map(
        (r) =>
          `- ${r.nome} (${r.kcal} kcal, ${r.tempo} min, ${r.difficolta}): ${r.ingredienti
            .map((i) => i.nome)
            .join(', ')}`
      )
      .join('\n');

    const systemPrompt = `Sei un assistente culinario entusiasta e creativo. L'utente ti dice quali ingredienti ha o cosa vuole cucinare.
      
Sulla base di quello che dice, suggerisci ricette dal database disponibile:
${recipesContext}

Se le ricette disponibili corrispondono a quello che chiede, consiglia quella più adatta spiegando perché è perfetta.
Se nessuna corrisponde esattamente, suggerisci comunque quella più vicina o proponi una variazione creativa.

Rispondi in italiano, in modo conversazionale e amichevole. Sii breve (2-3 righe max) e termina sempre con una domanda simpatica.
Se hai suggerito una ricetta, scrivi il nome esatto della ricetta tra PARENTESI QUADRE alla fine, tipo: [Nome Ricetta Esatta].`;

    // Chiama Claude API
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
      },
    });

    const assistantText = response.data.content[0].text;

    res.json({ message: assistantText });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
