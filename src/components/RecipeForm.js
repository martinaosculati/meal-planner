import React, { useState } from 'react';

function RecipeForm({ recipes, onAddRecipe }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    ingredienti: [{ nome: '', quantita: '', unita: 'g' }],
    tempo: '',
    difficolta: 'facile',
    kcal: '',
    note: '',
  });

  const unitOptions = ['g', 'kg', 'ml', 'l', 'pz'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredienti = [...formData.ingredienti];
    newIngredienti[index][field] = field === 'quantita' ? parseFloat(value) || '' : value;
    setFormData({
      ...formData,
      ingredienti: newIngredienti,
    });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredienti: [...formData.ingredienti, { nome: '', quantita: '', unita: 'g' }],
    });
  };

  const removeIngredient = (index) => {
    setFormData({
      ...formData,
      ingredienti: formData.ingredienti.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome.trim()) {
      alert('Inserisci il nome della ricetta');
      return;
    }

    if (formData.ingredienti.some((ing) => !ing.nome.trim() || !ing.quantita)) {
      alert('Compila tutti gli ingredienti');
      return;
    }

    const newRecipe = {
      nome: formData.nome,
      ingredienti: formData.ingredienti,
      tempo: parseInt(formData.tempo) || 0,
      difficolta: formData.difficolta,
      kcal: parseInt(formData.kcal) || 0,
      note: formData.note,
    };

    onAddRecipe(newRecipe);

    // Reset form
    setFormData({
      nome: '',
      ingredienti: [{ nome: '', quantita: '', unita: 'g' }],
      tempo: '',
      difficolta: 'facile',
      kcal: '',
      note: '',
    });

    setShowForm(false);
    alert('✅ Ricetta aggiunta con successo!');
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#667eea', marginBottom: '20px' }}>📖 Le Mie Ricette</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Ricette disponibili: <strong>{recipes.length}</strong>
        </p>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
          style={{ width: '100%' }}
        >
          {showForm ? '❌ Annulla' : '➕ Aggiungi Nuova Ricetta'}
        </button>
      </div>

      {showForm && (
        <form className="recipe-form" onSubmit={handleSubmit}>
          <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Nuova Ricetta</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome ricetta</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="es. Salmone al forno"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="tempo">Tempo di preparazione (minuti)</label>
              <input
                id="tempo"
                type="number"
                name="tempo"
                value={formData.tempo}
                onChange={handleInputChange}
                placeholder="30"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="kcal">Calorie</label>
              <input
                id="kcal"
                type="number"
                name="kcal"
                value={formData.kcal}
                onChange={handleInputChange}
                placeholder="400"
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="difficolta">Difficoltà</label>
            <select
              id="difficolta"
              name="difficolta"
              value={formData.difficolta}
              onChange={handleInputChange}
            >
              <option value="facile">Facile</option>
              <option value="media">Media</option>
              <option value="difficile">Difficile</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ingredienti</label>
            {formData.ingredienti.map((ing, index) => (
              <div key={index} className="ingredient-input-group">
                <div className="ingredient-input-row">
                  <input
                    type="text"
                    value={ing.nome}
                    onChange={(e) => handleIngredientChange(index, 'nome', e.target.value)}
                    placeholder="es. Salmone"
                  />
                  <input
                    type="number"
                    value={ing.quantita}
                    onChange={(e) => handleIngredientChange(index, 'quantita', e.target.value)}
                    placeholder="400"
                    min="0"
                    step="0.1"
                  />
                  <select
                    value={ing.unita}
                    onChange={(e) => handleIngredientChange(index, 'unita', e.target.value)}
                  >
                    {unitOptions.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="btn-remove-ingredient"
                    onClick={() => removeIngredient(index)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn-add-ingredient"
              onClick={addIngredient}
            >
              + Aggiungi ingrediente
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              placeholder="Allergie, note di preparazione, ecc."
              rows="3"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-success" style={{ flex: 1 }}>
              ✓ Salva Ricetta
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowForm(false)}
              style={{ flex: 1 }}
            >
              Annulla
            </button>
          </div>
        </form>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Ricette Disponibili</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h4 style={{ color: '#667eea', marginBottom: '12px' }}>{recipe.nome}</h4>
              <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>
                <div>⏱️ {recipe.tempo} min</div>
                <div>🔥 {recipe.kcal} kcal</div>
                <div>📊 {recipe.difficolta}</div>
              </div>
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
                <p style={{ fontSize: '0.85em', color: '#999' }}>
                  Ingredienti: {recipe.ingredienti.length}
                </p>
              </div>
              {recipe.note && (
                <p style={{ fontSize: '0.85em', color: '#999', marginTop: '8px', fontStyle: 'italic' }}>
                  {recipe.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeForm;
