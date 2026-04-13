import React, { useState } from 'react';

function WeeklyPlanner({
  days,
  weeklyPlan,
  eatingOut,
  recipes,
  onUpdateRecipe,
  onToggleEatingOut,
  getRecipeById,
}) {
  const [swapMode, setSwapMode] = useState(null);

  const handleSwap = (sourceDay) => {
    if (swapMode === sourceDay) {
      setSwapMode(null);
      return;
    }
    setSwapMode(sourceDay);
  };

  const handleSwapConfirm = (targetDay) => {
    if (swapMode && swapMode !== targetDay) {
      const temp = weeklyPlan[swapMode];
      const newPlan = {
        ...weeklyPlan,
        [swapMode]: weeklyPlan[targetDay],
        [targetDay]: temp,
      };
      // Aggiorna lo stato immediatamente
      Object.keys(newPlan).forEach((day) => {
        onUpdateRecipe(day, newPlan[day]);
      });
      setSwapMode(null);
    }
  };

  const totalCalories = days.reduce((sum, day) => {
    if (eatingOut[day]) return sum;
    const recipe = getRecipeById(weeklyPlan[day]);
    return sum + (recipe?.kcal || 0);
  }, 0);

  const daysWithMeals = days.filter((day) => !eatingOut[day]).length;
  const avgCalories = daysWithMeals > 0 ? Math.round(totalCalories / daysWithMeals) : 0;

  return (
    <div>
      <div style={{ marginBottom: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Riepilogo Nutrizionale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.9em' }}>Pasti questa settimana</div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>{daysWithMeals}</div>
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

      {swapMode && (
        <div style={{ marginBottom: '20px', padding: '15px', background: '#fff3cd', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
          <strong>🔄 Modalità Scambio Attiva</strong>
          <p style={{ margin: '10px 0 0 0', color: '#856404' }}>Clicca su un altro giorno per scambiare le ricette</p>
        </div>
      )}

      <div className="weekdays">
        {days.map((day) => {
          const recipeId = weeklyPlan[day];
          const recipe = getRecipeById(recipeId);
          const isOutToday = eatingOut[day];
          const isSwapSource = swapMode === day;

          return (
            <div
              key={day}
              className={`day-card ${isSwapSource ? 'swap-source' : ''}`}
              style={isSwapSource ? { borderLeft: '5px solid #ffc107', background: '#fffacd' } : {}}
            >
              <h3>{day}</h3>

              {isOutToday ? (
                <>
                  <div className="eat-out-label">🍽️ Mangia fuori</div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => onToggleEatingOut(day)}
                    style={{ marginTop: '15px', width: '100%' }}
                  >
                    Pianifica pasto
                  </button>
                </>
              ) : (
                <>
                  {recipe && (
                    <div className="day-content">
                      <div className="recipe-box">
                        <div className="recipe-name">{recipe.nome}</div>
                        <div className="recipe-details">
                          <div className="recipe-detail-item">
                            <span>⏱️</span>
                            <span>{recipe.tempo} min</span>
                          </div>
                          <div className="recipe-detail-item">
                            <span>🔥</span>
                            <span>{recipe.kcal} kcal</span>
                          </div>
                          <div className="recipe-detail-item">
                            <span>📊</span>
                            <span>{recipe.difficolta}</span>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginTop: '15px' }}>
                        <label htmlFor={`recipe-${day}`} style={{ fontWeight: '600', color: '#333', display: 'block', marginBottom: '8px' }}>
                          Cambia ricetta:
                        </label>
                        <select
                          id={`recipe-${day}`}
                          className="select-recipe"
                          value={recipeId}
                          onChange={(e) => onUpdateRecipe(day, e.target.value)}
                        >
                          {recipes.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.nome}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                        <button
                          className={`btn btn-secondary ${isSwapSource ? 'active' : ''}`}
                          onClick={() => handleSwap(day)}
                          style={{
                            flex: 1,
                            minWidth: '120px',
                            background: isSwapSource ? '#ffc107' : '#f0f0f0',
                            color: isSwapSource ? '#333' : '#333',
                          }}
                        >
                          {isSwapSource ? '✅ Scambio attivo' : '🔄 Scambia'}
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => onToggleEatingOut(day)}
                          style={{ flex: 1, minWidth: '120px' }}
                        >
                          Fuori stasera
                        </button>
                      </div>

                      {swapMode && swapMode !== day && (
                        <button
                          className="btn btn-success"
                          onClick={() => handleSwapConfirm(day)}
                          style={{ width: '100%', marginTop: '15px' }}
                        >
                          ✓ Scambia con {day}
                        </button>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyPlanner;
