import React, { useState } from 'react';

function RecipeModal({ recipe, isOpen, onClose, servings }) {
  if (!isOpen || !recipe) return null;

  const scaleQuantity = (qty) => (qty * servings / 2).toFixed(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{recipe.nome}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
            <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <div style={{ color: '#999', fontSize: '0.85em' }}>⏱️ Tempo</div>
              <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>{recipe.tempo} min</div>
            </div>
            <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <div style={{ color: '#999', fontSize: '0.85em' }}>🔥 Calorie</div>
              <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>{recipe.kcal}</div>
            </div>
            <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <div style={{ color: '#999', fontSize: '0.85em' }}>📊 Difficoltà</div>
              <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>{recipe.difficolta}</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '12px' }}>📋 Ingredienti (per {servings} persone)</h3>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
            {recipe.ingredienti.map((ing, idx) => (
              <div key={idx} style={{ padding: '8px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#333' }}>{ing.nome}</span>
                <span style={{ fontWeight: 'bold', color: '#667eea' }}>
                  {scaleQuantity(ing.quantita)} {ing.unita}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '12px' }}>👨‍🍳 Istruzioni</h3>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', lineHeight: '1.8', whiteSpace: 'pre-wrap', color: '#333' }}>
            {recipe.istruzioni}
          </div>
        </div>

        {recipe.note && (
          <div style={{ background: '#fff3cd', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #ffc107', color: '#856404', marginBottom: '20px' }}>
            <strong>💡 Nota:</strong> {recipe.note}
          </div>
        )}

        <button className="btn btn-secondary" onClick={onClose} style={{ width: '100%' }}>
          Chiudi
        </button>
      </div>
    </div>
  );
}

function MealCard({ day, meal, recipe, onRecipeClick, onChangeRecipe, onToggleEatingOut, eatingOut, recipes }) {
  const key = `${day}-${meal}`;
  const isOutToday = eatingOut[key];
  const mealLabel = meal === 'pranzo' ? '🍽️ Pranzo' : '🌙 Cena';

  return (
    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '10px' }}>{mealLabel}</div>

      {isOutToday ? (
        <>
          <div style={{ background: '#ff6b6b', color: 'white', padding: '8px 12px', borderRadius: '6px', fontSize: '0.9em', fontWeight: 'bold', marginBottom: '10px', display: 'inline-block' }}>
            🍴 Mangia fuori
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => onToggleEatingOut(day, meal)}
            style={{ width: '100%', marginTop: '10px' }}
          >
            Pianifica pasto
          </button>
        </>
      ) : (
        <>
          {recipe && (
            <>
              <div
                onClick={() => onRecipeClick(recipe)}
                style={{
                  background: '#f5f7fa',
                  padding: '12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  borderLeft: '3px solid #667eea',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '6px' }}>{recipe.nome}</div>
                <div style={{ fontSize: '0.85em', color: '#666', display: 'flex', gap: '12px' }}>
                  <span>⏱️ {recipe.tempo}m</span>
                  <span>🔥 {recipe.kcal}kcal</span>
                </div>
              </div>

              <select
                className="select-recipe"
                value={recipe.id}
                onChange={(e) => onChangeRecipe(day, meal, e.target.value)}
                style={{ marginBottom: '10px', width: '100%', padding: '8px', fontSize: '0.9em' }}
              >
                {recipes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.nome}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-secondary"
                onClick={() => onToggleEatingOut(day, meal)}
                style={{ width: '100%', fontSize: '0.9em' }}
              >
                Mangia fuori
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

function WeeklyPlanner({
  days,
  meals,
  weeklyPlan,
  eatingOut,
  recipes,
  onUpdateRecipe,
  onToggleEatingOut,
  getRecipeById,
}) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const servings = 2;

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const totalCalories = days.reduce((sum, day) => {
    return (
      sum +
      meals.reduce((mealSum, meal) => {
        const key = `${day}-${meal}`;
        if (eatingOut[key]) return mealSum;
        const recipe = getRecipeById(weeklyPlan[key]);
        return mealSum + (recipe?.kcal || 0);
      }, 0)
    );
  }, 0);

  const mealsCount = days.reduce(
    (sum, day) =>
      sum +
      meals.filter((meal) => !eatingOut[`${day}-${meal}`]).length,
    0
  );

  const avgCalories = mealsCount > 0 ? Math.round(totalCalories / mealsCount) : 0;

  return (
    <div>
      <div style={{ marginBottom: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Riepilogo Nutrizionale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Pasti questa settimana</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{mealsCount}</div>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Calorie totali</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{totalCalories}</div>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Media kcal/pasto</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{avgCalories}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {days.map((day) => (
          <div key={day} style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #667eea' }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>{day}</h3>

            {meals.map((meal) => (
              <MealCard
                key={`${day}-${meal}`}
                day={day}
                meal={meal}
                recipe={getRecipeById(weeklyPlan[`${day}-${meal}`])}
                onRecipeClick={handleRecipeClick}
                onChangeRecipe={onUpdateRecipe}
                onToggleEatingOut={onToggleEatingOut}
                eatingOut={eatingOut}
                recipes={recipes}
              />
            ))}
          </div>
        ))}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        servings={servings}
      />
    </div>
  );
}

export default WeeklyPlanner;
