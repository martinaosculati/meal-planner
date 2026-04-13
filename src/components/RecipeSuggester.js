import React, { useState, useRef, useEffect } from 'react';

function RecipeSuggester({ recipes, onAddRecipe }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: 'Ciao! 👋 Sono il tuo assistente culinario intelligente. Dimmi quali ingredienti hai a casa, che tipo di ricetta ti piacerebbe, o semplicemente descrivimi quello che vuoi cucinare e io ti suggerirò le ricette perfette! 🍳',
    },
  ]);
  const [input, setInput] = useState('');
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, suggestedRecipes]);

  const findMatchingRecipes = (userQuery) => {
    const queryLower = userQuery.toLowerCase();
    const queryWords = queryLower.split(/[\s,]+/).filter((w) => w.length > 2);

    const matches = recipes
      .map((recipe) => {
        let score = 0;
        let ingredientMatches = 0;

        // Ingredienti match - controlla sia ingredienti specifici che generici
        recipe.ingredienti.forEach((ing) => {
          const ingNameLower = ing.nome.toLowerCase();
          queryWords.forEach((word) => {
            if (ingNameLower.includes(word) || word.includes(ingNameLower)) {
              score += 5;
              ingredientMatches += 1;
            }
          });
        });

        // Se nessun ingrediente corrisponde ma la query è un tipo di ricetta, riduci il peso
        if (ingredientMatches === 0 && queryWords.length > 0) {
          // Controlla solo se la ricetta è esplicitamente di quel tipo
          if (queryLower.includes('pesce') && recipe.tipo === 'pesce') score += 3;
          else if (queryLower.includes('legumi') && recipe.tipo === 'legumi') score += 3;
          else if (queryLower.includes('carne') && recipe.tipo === 'carne') score += 3;
          else if (queryLower.includes('formaggio') && recipe.tipo === 'formaggi') score += 3;
          else if ((queryLower.includes('verdura') || queryLower.includes('verdure')) && recipe.tipo === 'vegetariano')
            score += 3;
          else {
            // Se nessun match, dai solo un piccolo bonus casuale
            score = 0;
          }
        }

        // Preferenze
        if (queryLower.includes('leggero') && recipe.kcal < 350) score += 3;
        if (queryLower.includes('veloce') && recipe.tempo < 25) score += 3;
        if (queryLower.includes('rapido') && recipe.tempo < 25) score += 3;
        if (queryLower.includes('facile') && recipe.difficolta === 'facile') score += 2;
        if (queryLower.includes('forno') && recipe.istruzioni.toLowerCase().includes('forno')) score += 2;
        if (queryLower.includes('padella') && recipe.istruzioni.toLowerCase().includes('padella')) score += 2;
        if (queryLower.includes('semplice') && recipe.difficolta === 'facile') score += 1;

        // Bonus per parole chiave
        if (queryLower.includes('light') && recipe.kcal < 350) score += 2;
        if (queryLower.includes('sano') && recipe.tipo !== 'carne') score += 1;

        return { ...recipe, matchScore: score };
      })
      .filter((r) => r.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);

    return matches;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Aggiungi messaggio utente
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Trova ricette matching
    const matches = findMatchingRecipes(input);
    setSuggestedRecipes(matches);

    // Genera risposta assistente
    let assistantText = '';

    if (matches.length === 0) {
      assistantText =
        "Hmm, non ho trovato ricette esatte con quello che hai descritto 😅 Prova a dirmi un ingrediente specifico o un tipo di ricetta (pesce, legumi, verdure, carne, ecc.) e ti aiuterò a trovare qualcosa di delizioso!";
    } else if (matches.length === 1) {
      const recipe = matches[0];
      assistantText = `Perfetto! Ho trovato la ricetta giusta per te: **${recipe.nome}** 🎉 È ${recipe.difficolta}, pronta in ${recipe.tempo} minuti e ha ${recipe.kcal} kcal. Vuoi aggiungerla al tuo pianificatore?`;
    } else {
      const names = matches.map((r) => `**${r.nome}**`).join(', ');
      assistantText = `Bellissimo! Ho trovato ${matches.length} ricette che potrebbero piacerti: ${names}. Guarda le opzioni qui sotto e scegli quella che preferisci! 👇`;
    }

    const assistantMessage = {
      id: messages.length + 2,
      type: 'assistant',
      text: assistantText,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setInput('');
  };

  const handleAddRecipe = (recipe) => {
    onAddRecipe(recipe);
    alert(`✅ Ricetta "${recipe.nome}" aggiunta al pianificatore! Vai al tab Pianificatore per usarla.`);
    setSuggestedRecipes([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderBottom: '2px solid rgba(255,255,255,0.2)',
          color: 'white',
        }}
      >
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5em' }}>🤖 Assistente Culinario Intelligente</h2>
        <p style={{ margin: 0, color: '#f0f0f0', fontSize: '0.95em' }}>Dimmi cosa vuoi cucinare e ti suggerirò le ricette perfette!</p>
      </div>

      {/* Chat Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: msg.type === 'user' ? '#51cf66' : 'rgba(255,255,255,0.95)',
                color: msg.type === 'user' ? 'white' : '#333',
                lineHeight: '1.5',
                wordWrap: 'break-word',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Ricette Suggerite */}
        {suggestedRecipes.length > 0 && (
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {suggestedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  background: 'white',
                  padding: '14px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #667eea',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: '1.05em', marginBottom: '8px' }}>
                  ✅ {recipe.nome}
                </div>
                <div style={{ fontSize: '0.85em', color: '#666', display: 'flex', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span>⏱️ {recipe.tempo} min</span>
                  <span>🔥 {recipe.kcal} kcal</span>
                  <span>📊 {recipe.difficolta}</span>
                </div>
                <button
                  onClick={() => handleAddRecipe(recipe)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '0.9em',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  ➕ Aggiungi al Pianificatore
                </button>
              </div>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '20px', borderTop: '2px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Dimmi quali ingredienti hai o cosa vuoi cucinare... (Shift+Enter per andare a capo)"
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.95em',
              fontFamily: 'inherit',
              minHeight: '50px',
              resize: 'vertical',
              maxHeight: '120px',
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            style={{
              padding: '12px 20px',
              alignSelf: 'flex-end',
              fontSize: '1.2em',
              minWidth: '60px',
              background: !input.trim() ? '#ccc' : '#51cf66',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: !input.trim() ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => {
              if (input.trim()) e.target.style.background = '#40c057';
            }}
            onMouseLeave={(e) => {
              if (input.trim()) e.target.style.background = '#51cf66';
            }}
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeSuggester;
