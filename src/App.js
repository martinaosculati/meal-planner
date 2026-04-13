import React, { useState, useEffect } from 'react';
import './App.css';
import { initialRecipes } from './data/recipes';
import WeeklyPlanner from './components/WeeklyPlanner';
import ShoppingList from './components/ShoppingList';
import RecipeForm from './components/RecipeForm';

function App() {
  const [activeTab, setActiveTab] = useState('planner');
  const [recipes, setRecipes] = useState([]);
  const [weeklyPlan, setWeeklyPlan] = useState({});
  const [eatingOut, setEatingOut] = useState({});

  const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

  // Carica dati da localStorage
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    const savedPlan = localStorage.getItem('weeklyPlan');
    const savedEatingOut = localStorage.getItem('eatingOut');

    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    } else {
      setRecipes(initialRecipes);
    }

    if (savedPlan) {
      setWeeklyPlan(JSON.parse(savedPlan));
    } else {
      // Inizializza con ricette casuali
      const initialPlan = {};
      days.forEach((day) => {
        const randomRecipe = initialRecipes[Math.floor(Math.random() * initialRecipes.length)];
        initialPlan[day] = randomRecipe.id;
      });
      setWeeklyPlan(initialPlan);
    }

    if (savedEatingOut) {
      setEatingOut(JSON.parse(savedEatingOut));
    }
  }, []);

  // Salva dati in localStorage
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
  }, [weeklyPlan]);

  useEffect(() => {
    localStorage.setItem('eatingOut', JSON.stringify(eatingOut));
  }, [eatingOut]);

  const addRecipe = (newRecipe) => {
    const recipe = {
      ...newRecipe,
      id: Date.now().toString(),
    };
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (day, recipeId) => {
    setWeeklyPlan({
      ...weeklyPlan,
      [day]: recipeId,
    });
  };

  const toggleEatingOut = (day) => {
    setEatingOut({
      ...eatingOut,
      [day]: !eatingOut[day],
    });
  };

  const getRecipeById = (id) => {
    return recipes.find((r) => r.id === id);
  };

  const getShoppingListIngredients = () => {
    const ingredients = {};

    days.forEach((day) => {
      if (!eatingOut[day]) {
        const recipeId = weeklyPlan[day];
        const recipe = getRecipeById(recipeId);
        if (recipe) {
          recipe.ingredienti.forEach((ing) => {
            const key = `${ing.nome}|${ing.unita}`;
            if (ingredients[key]) {
              ingredients[key].quantita += ing.quantita;
            } else {
              ingredients[key] = { ...ing };
            }
          });
        }
      }
    });

    return ingredients;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🥗 Meal Planner</h1>
        <p>Pianifica i tuoi pasti settimanali e genera la lista della spesa</p>
      </header>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'planner' ? 'active' : ''}`}
          onClick={() => setActiveTab('planner')}
        >
          📅 Pianificatore
        </button>
        <button
          className={`tab-button ${activeTab === 'shopping' ? 'active' : ''}`}
          onClick={() => setActiveTab('shopping')}
        >
          🛒 Lista della Spesa
        </button>
        <button
          className={`tab-button ${activeTab === 'recipes' ? 'active' : ''}`}
          onClick={() => setActiveTab('recipes')}
        >
          📖 Ricette
        </button>
      </div>

      {activeTab === 'planner' && (
        <WeeklyPlanner
          days={days}
          weeklyPlan={weeklyPlan}
          eatingOut={eatingOut}
          recipes={recipes}
          onUpdateRecipe={updateRecipe}
          onToggleEatingOut={toggleEatingOut}
          getRecipeById={getRecipeById}
        />
      )}

      {activeTab === 'shopping' && (
        <ShoppingList
          ingredients={getShoppingListIngredients()}
          weeklyPlan={weeklyPlan}
          days={days}
          eatingOut={eatingOut}
          getRecipeById={getRecipeById}
        />
      )}

      {activeTab === 'recipes' && (
        <RecipeForm
          recipes={recipes}
          onAddRecipe={addRecipe}
        />
      )}
    </div>
  );
}

export default App;
