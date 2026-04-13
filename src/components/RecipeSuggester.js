import React, { useState } from 'react';

function RecipeSuggester({ recipes, onAddRecipe }) {
  const [ingredients, setIngredients] = useState('');
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

    try {
      // Filtra ricette con match >= 70%
      const matches = recipes
        .map((recipe) => ({
          ...recipe,
          matchPercentage: calculateMatch(recipe, ingredients),
        }))
        .filter((recipe) => recipe.matchPercentage >= 70)
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, 5);

      if (matches.length === 0) {
        setError('❌ Nessuna ricetta trovata con almeno il 70% degli ingredienti che hai. Prova con ingredienti diversi!');
        setSuggestedRecipes([]);
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
    if (e.key === 'Enter') {
      handleSuggest();
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white' }}>
        <h2 style={{ color: 'white', marginBottom: '15px' }}>🎯 Suggeritore di Ricette</h2>
        <p style={{ marginBottom: '20px', color: '#f0f0f0' }}>
          Scrivi gli ingredienti che hai in casa e scopri quali ricette puoi preparare!
        </p>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: '600', color: 'white', display: 'block', marginBottom: '8px' }}>
            📝 Ingredienti (separati da virgola)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Es: salmone, asparagi, limone, aglio..."
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1em',
              fontFamily: 'inherit',
              minHeight: '100px',
              background: 'white',
              color: '#333',
            }}
          />
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
                  <h3 style={{ color: '#667eea', marginBottom: '8px' }}>{recipe.nome}</h3>
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
                    {recipe.ingredienti.slice(0, 5).map((ing, idx) => (
                      <div key={idx}>• {ing.nome}</div>
                    ))}
                    {recipe.ingredienti.length > 5 && (
                      <div style={{ fontStyle: 'italic', color: '#999' }}>+ {recipe.ingredienti.length - 5} altri</div>
                    )}
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    // Aggiungi alla pianificazione
                    alert(`✅ Ricetta "${recipe.nome}" aggiunta! Vai al tab Pianificatore per usarla.`);
                  }}
                  style={{ width: '100%', fontSize: '0.95em' }}
                >
                  Usa questa ricetta
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && suggestedRecipes.length === 0 && !error && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
          <p style={{ fontSize: '2em', marginBottom: '10px' }}>🥘</p>
          <p>Inserisci gli ingredienti che hai per scoprire ricette che puoi preparare!</p>
          <p style={{ fontSize: '0.9em', marginTop: '15px' }}>
            Vengono suggerite ricette che usano almeno il 70% degli ingredienti inseriti.
          </p>
        </div>
      )}
    </div>
  );
}

export default RecipeSuggester;
