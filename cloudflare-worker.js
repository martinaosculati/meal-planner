export default {
  async fetch(request, env) {
    // Accetta solo POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { userMessage, recipes } = await request.json();

      if (!userMessage) {
        return new Response(JSON.stringify({ error: 'userMessage is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
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
          'x-api-key': env.ANTHROPIC_API_KEY,
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
        return new Response(
          JSON.stringify({
            error: 'Failed to get response from Claude API',
            details: errorData,
          }),
          {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      const data = await response.json();
      const assistantText = data.content[0].text;

      return new Response(JSON.stringify({ message: assistantText }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    } catch (error) {
      console.error('Server Error:', error);
      return new Response(
        JSON.stringify({
          error: 'Internal server error',
          details: error.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  },
};
