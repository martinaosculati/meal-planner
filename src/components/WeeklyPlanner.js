import React, { useState } from 'react';

function MealCard({ day, meal, recipe, onChangeRecipe, onToggleEatingOut, eatingOut, recipes, mealServings, onMealServingsChange }) {
  const key = `${day}-${meal}`;
  const isOutToday = eatingOut[key];
  const mealLabel = meal === 'pranzo' ? '🍽️ Pranzo' : '🌙 Cena';
  const servings = mealServings[key] || 1;

  const scaleQuantity = (qty) => (qty * servings / 2).toFixed(1);

  return (
    <div style={{ background: 'white', padding: '16px', borderRadius: '10px', border: '2px solid #ddd', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: '1.1em' }}>{mealLabel}</div>
        {!isOutToday && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <label style={{ fontSize: '0.85em', color: '#666', fontWeight: '500' }}>👥</label>
            <select
              value={servings}
              onChange={(e) => onMealServingsChange(key, parseInt(e.target.value))}
              style={{ padding: '6px 10px', borderRadius: '6px', border: '2px solid #667eea', fontSize: '0.9em', cursor: 'pointer', fontWeight: '600', color: '#667eea' }}
            >
              <option value={1}>1 persona</option>
              <option value={2}>2 persone</option>
            </select>
          </div>
        )}
      </div>

      {isOutToday ? (
        <>
          <div style={{ background: '#ff6b6b', color: 'white', padding: '10px 12px', borderRadius: '6px', fontSize: '0.95em', fontWeight: 'bold', marginBottom: '12px', display: 'inline-block' }}>
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
              {/* Nome ricetta e info base */}
              <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f1f8 100%)', padding: '12px', borderRadius: '8px', marginBottom: '12px', borderLeft: '4px solid #667eea' }}>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '1.05em', marginBottom: '6px' }}>{recipe.nome}</div>
                <div style={{ fontSize: '0.85em', color: '#666', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <span>⏱️ {recipe.tempo} min</span>
                  <span>🔥 {recipe.kcal} kcal</span>
                  <span>📊 {recipe.difficolta}</span>
                </div>
              </div>

              {/* Ingredienti */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: '0.95em', marginBottom: '8px' }}>📋 Ingredienti ({servings} {servings === 1 ? 'persona' : 'persone'})</div>
                <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '6px', fontSize: '0.85em' }}>
                  {recipe.ingredienti.map((ing, idx) => (
                    <div key={idx} style={{ padding: '6px 0', borderBottom: idx < recipe.ingredienti.length - 1 ? '1px solid #eee' : 'none', display: 'flex', justifyContent: 'space-between' }}>
                      <span>• {ing.nome}</span>
                      <span style={{ fontWeight: 'bold', color: '#667eea' }}>{scaleQuantity(ing.quantita)} {ing.unita}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Istruzioni - SEMPRE VISIBILI */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: '0.95em', marginBottom: '8px' }}>👨‍🍳 Come Preparare</div>
                <div style={{ background: '#fffbf0', padding: '12px', borderRadius: '6px', fontSize: '0.85em', lineHeight: '1.7', color: '#333', borderLeft: '4px solid #ff8c00' }}>
                  {recipe.istruzioni.split('\n').map((step, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                      <strong style={{ color: '#ff8c00' }}>{step.match(/^\d+/)?.[0]}️⃣</strong> {step.replace(/^\d+\.\s/, '')}
                    </div>
                  ))}
                </div>
              </div>

              {/* Consigli */}
              {recipe.note && (
                <div style={{ background: '#e8f4f8', padding: '10px', borderRadius: '6px', fontSize: '0.85em', color: '#0c5f7a', borderLeft: '4px solid #667eea', marginBottom: '12px' }}>
                  <strong>💡 Consiglio:</strong> {recipe.note}
                </div>
              )}

              {/* Select ricetta */}
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

              {/* Bottone fuori */}
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
  const [mealServings, setMealServings] = useState({});

  const handleMealServingsChange = (key, servings) => {
    setMealServings({
      ...mealServings,
      [key]: servings,
    });
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
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Riepilogo Settimanale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Pasti da cucinare</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{mealsCount}</div>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Calorie totali</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{totalCalories}</div>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Media per pasto</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{avgCalories} kcal</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {days.map((day) => (
          <div key={day} style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #667eea' }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.2em', fontWeight: 'bold' }}>📅 {day}</h3>

            {meals.map((meal) => (
              <MealCard
                key={`${day}-${meal}`}
                day={day}
                meal={meal}
                recipe={getRecipeById(weeklyPlan[`${day}-${meal}`])}
                onChangeRecipe={onUpdateRecipe}
                onToggleEatingOut={onToggleEatingOut}
                eatingOut={eatingOut}
                recipes={recipes}
                mealServings={mealServings}
                onMealServingsChange={handleMealServingsChange}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyPlanner;
