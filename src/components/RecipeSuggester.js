import React, { useState, useRef, useEffect } from 'react';

function RecipeSuggester({ recipes, onAddRecipe }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: 'Ciao! 👋 Sono il tuo assistente culinario intelligente. Dimmi quali ingredienti hai a casa, che tipo di ricetta ti piacerebbe, o semplicemente descrivimi quello che vuoi cucinare e io ti suggerirò la ricetta perfetta! 🍳',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestedRecipe, setSuggestedRecipe] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Aggiungi messaggio utente
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setSuggestedRecipe(null);

    try {
      // Chiama il Cloudflare Worker
      const response = await fetch('https://meal-planner-worker.martinaosculati.workers.dev/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: input,
          recipes: recipes,
        }),
      });

      if (!response.ok) {
        throw new Error('Errore dal server');
      }

      const data = await response.json();
      const assistantText = data.message;

      // Estrai il nome della ricetta se presente
      const recipeMatch = assistantText.match(/\[([^\]]+)\]/);
      if (recipeMatch) {
        const recipeName = recipeMatch[1];
        const foundRecipe = recipes.find(
          (r) => r.nome.toLowerCase() === recipeName.toLowerCase()
        );
        if (foundRecipe) {
          setSuggestedRecipe(foundRecipe);
        }
      }

      // Aggiungi risposta assistant
      const assistantMessage = {
        id: messages.length + 2,
        type: 'assistant',
        text: assistantText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        type: 'assistant',
        text: `❌ Errore: ${error.message}. Il server potrebbe non essere disponibile. Riprova!`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecipe = () => {
    if (suggestedRecipe) {
      alert(
        `✅ Ricetta "${suggestedRecipe.nome}" aggiunta al pianificatore! Vai al tab Pianificatore per usarla.`
      );
      setSuggestedRecipe(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderBottom: '2px solid rgba(255,255,255,0.2)', color: 'white' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5em' }}>🤖 Assistente Culinario Intelligente</h2>
        <p style={{ margin: 0, color: '#f0f0f0', fontSize: '0.95em' }}>Dimmi cosa vuoi cucinare e ti suggerirò la ricetta perfetta!</p>
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

        {/* Ricetta Suggerita */}
        {suggestedRecipe && (
          <div
            style={{
              background: 'white',
              padding: '16px',
              borderRadius: '12px',
              marginTop: '12px',
              borderLeft: '4px solid #667eea',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: '1.05em', marginBottom: '8px' }}>
              ✅ {suggestedRecipe.nome}
            </div>
            <div style={{ fontSize: '0.9em', color: '#666', display: 'flex', gap: '15px', marginBottom: '12px' }}>
              <span>⏱️ {suggestedRecipe.tempo} min</span>
              <span>🔥 {suggestedRecipe.kcal} kcal</span>
              <span>📊 {suggestedRecipe.difficolta}</span>
            </div>
            <button
              className="btn btn-success"
              onClick={handleAddRecipe}
              style={{ width: '100%', fontSize: '0.95em' }}
            >
              ➕ Aggiungi al Pianificatore
            </button>
          </div>
        )}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,0.95)', padding: '12px 16px', borderRadius: '12px' }}>
              <span style={{ color: '#667eea', fontWeight: 'bold' }}>⏳ Claude sta pensando...</span>
            </div>
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
            disabled={loading}
          />
          <button
            className="btn btn-success"
            onClick={handleSend}
            disabled={loading || !input.trim()}
            style={{
              padding: '12px 20px',
              alignSelf: 'flex-end',
              fontSize: '1em',
              minWidth: '80px',
              opacity: loading || !input.trim() ? 0.6 : 1,
            }}
          >
            {loading ? '⏳' : '📤'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeSuggester;
