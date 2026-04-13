import React, { useState } from 'react';

function RecipeSuggester({ recipes, onAddRecipe }) {
  const [ingredients, setIngredients] = useState('');
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const calculateMatch = (recipe, userIngredients) => {
    const userIngsLower = userIngredients
      .split(',')
      .map((ing) => ing.trim().toLowerCase())
      .filter((ing) => ing);

    if (userIngsLower.length === 0) return 0;

    const matchedIngredients = recipe.ingredienti.filter((recipeIng) => {
      return userIngsLower.some((userIng) =>
        recipeIng.nome.toLowerCase().includes(userIng) || userIng.includes(recipeIng.nome.toLowerCase())
      );
    }).length;

    return Math.round((matchedIngredients / recipe.ingredienti.length) * 100);
  };

  const handleSuggest = async () => {
    if (!ingredients.trim()) {
      setError('Inserisci almeno un ingrediente');
      return;
    }

    setLoading(true);
    setError('');
    setSuggestedRecipes([]);

    try {
      // Filtra ricette con match >= 70%
      const matches = recipes
        .map((recipe) => ({
          ...recipe,
          matchPercentage: calculateMatch(recipe, ingredients),
        }))
        .filter((recipe) => recipe.matchPercentage >= 70)
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, 3);

      if (matches.length === 0) {
        setError('❌ Nessuna ricetta trovata con almeno il 70% degli ingredienti che hai. Prova con ingredienti diversi!');
        setLoading(false);
        return;
      }

      setSuggestedRecipes(matches);
    } catch (err) {
      setError(`❌ Errore: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSuggest();
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white' }}>
        <h2 style={{ color: 'white', marginBottom: '15px' }}>🎯 Suggeritore di Ricette Intelligente</h2>
        <p style={{ marginBottom: '20px', color: '#f0f0f0', lineHeight: '1.6' }}>
          Scrivi gli ingredienti che hai in casa (separati da virgola) e scopri le migliori ricette che puoi preparare subito!
        </p>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: '600', color: 'white', display: 'block', marginBottom: '8px' }}>
            📝 Ingredienti disponibili
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Es: salmone, asparagi, limone, aglio, olio d'oliva..."
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1em',
              fontFamily: 'inherit',
              minHeight: '80px',
              background: 'white',
              color: '#333',
              resize: 'vertical',
            }}
          />
          <p style={{ fontSize: '0.85em', color: '#f0f0f0', marginTop: '8px' }}>💡 Premi Enter per cercare</p>
        </div>

        <button
          className="btn btn-success"
          onClick={handleSuggest}
          disabled={loading}
          style={{ width: '100%', fontSize: '1.05em', fontWeight: '600' }}
        >
          {loading ? '⏳ Ricerca in corso...' : '🔍 Cerca Ricette'}
        </button>

        {error && (
          <div style={{
            marginTop: '15px',
            background: '#ff6b6b',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '0.95em',
          }}>
            {error}
          </div>
        )}
      </div>

      {suggestedRecipes.length > 0 && (
        <div>
          <h2 style={{ color: '#667eea', marginBottom: '20px' }}>✨ Ricette Suggerite ({suggestedRecipes.length})</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {suggestedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  borderLeft: '5px solid #667eea',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1.1em' }}>{recipe.nome}</h3>
                  <div
                    style={{
                      background: '#51cf66',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85em',
                      fontWeight: 'bold',
                      display: 'inline-block',
                    }}
                  >
                    ✓ {recipe.matchPercentage}% Match
                  </div>
                </div>

                <div style={{ marginBottom: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.9em', color: '#666' }}>
                    <div style={{ color: '#999', fontSize: '0.8em' }}>⏱️ Tempo</div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>{recipe.tempo} min</div>
                  </div>
                  <div style={{ fontSize: '0.9em', color: '#666' }}>
                    <div style={{ color: '#999', fontSize: '0.8em' }}>🔥 Calorie</div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>{recipe.kcal}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#999', fontSize: '0.85em', marginBottom: '6px' }}>📋 Ingredienti necessari:</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '6px', fontSize: '0.85em', color: '#666', maxHeight: '120px', overflowY: 'auto' }}>
                    {recipe.ingredienti.slice(0, 6).map((ing, idx) => (
                      <div key={idx} style={{ paddingBottom: '4px' }}>• {ing.nome}</div>
                    ))}
                    {recipe.ingredienti.length > 6 && (
                      <div style={{ fontStyle: 'italic', color: '#999', marginTop: '4px' }}>+ {recipe.ingredienti.length - 6} altri</div>
                    )}
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => setExpandedRecipe(expandedRecipe === recipe.id ? null : recipe.id)}
                  style={{ width: '100%', fontSize: '0.95em', marginBottom: '10px' }}
                >
                  {expandedRecipe === recipe.id ? '👁️ Nascondi ricetta' : '👨‍🍳 Vedi ricetta'}
                </button>

                {expandedRecipe === recipe.id && (
                  <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #eee', background: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
                    <h4 style={{ color: '#667eea', marginBottom: '10px' }}>📖 Istruzioni:</h4>
                    <div style={{ fontSize: '0.85em', lineHeight: '1.6', color: '#333' }}>
                      {recipe.istruzioni.split('\n').map((step, idx) => (
                        <div key={idx} style={{ marginBottom: '8px' }}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && suggestedRecipes.length === 0 && !error && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
          <p style={{ fontSize: '2em', marginBottom: '10px' }}>🥘</p>
          <p style={{ fontSize: '1.1em', marginBottom: '8px' }}>Inizia a cercare!</p>
          <p style={{ fontSize: '0.9em' }}>
            Scrivi gli ingredienti che hai e scopri le ricette che puoi preparare subito.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '15px', color: '#bbb' }}>
            Vengono suggerite ricette che usano almeno il 70% degli ingredienti inseriti.
          </p>
        </div>
      )}
    </div>
  );
}

export default RecipeSuggester;
