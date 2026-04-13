export default async function handler(req, res) {
  // Accetta solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API Error:', errorData);
      return res.status(response.status).json({
        error: 'Failed to get response from Claude API',
        details: errorData,
      });
    }

    const data = await response.json();
    const assistantText = data.content[0].text;

    return res.status(200).json({
      message: assistantText,
    });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    });
  }
}
