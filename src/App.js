import React, { useState, useEffect } from 'react';
import './App.css';
import { initialRecipes } from './data/recipes';
import WeeklyPlanner from './components/WeeklyPlanner';
import ShoppingList from './components/ShoppingList';
import RecipeForm from './components/RecipeForm';
import RecipeSuggester from './components/RecipeSuggester';

function App() {
  const [activeTab, setActiveTab] = useState('planner');
  const [recipes, setRecipes] = useState([]);
  const [weeklyPlan, setWeeklyPlan] = useState({});
  const [eatingOut, setEatingOut] = useState({});
  const [servings, setServings] = useState(2); // Numero persone

  const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
  const meals = ['pranzo', 'cena'];

  // Carica dati da localStorage
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    const savedPlan = localStorage.getItem('weeklyPlan');
    const savedEatingOut = localStorage.getItem('eatingOut');
    const savedServings = localStorage.getItem('servings');

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
      const daysOfWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
      daysOfWeek.forEach((day) => {
        meals.forEach((meal) => {
          const randomRecipe = initialRecipes[Math.floor(Math.random() * initialRecipes.length)];
          initialPlan[`${day}-${meal}`] = randomRecipe.id;
        });
      });
      setWeeklyPlan(initialPlan);
    }

    if (savedEatingOut) {
      setEatingOut(JSON.parse(savedEatingOut));
    }

    if (savedServings) {
      setServings(parseInt(savedServings));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    localStorage.setItem('servings', servings.toString());
  }, [servings]);

  const addRecipe = (newRecipe) => {
    const recipe = {
      ...newRecipe,
      id: Date.now().toString(),
    };
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (day, meal, recipeId) => {
    setWeeklyPlan({
      ...weeklyPlan,
      [`${day}-${meal}`]: recipeId,
    });
  };

  const toggleEatingOut = (day, meal) => {
    const key = `${day}-${meal}`;
    setEatingOut({
      ...eatingOut,
      [key]: !eatingOut[key],
    });
  };

  const getRecipeById = (id) => {
    return recipes.find((r) => r.id === id);
  };

  const getShoppingListIngredients = () => {
    const ingredients = {};

    days.forEach((day) => {
      meals.forEach((meal) => {
        const key = `${day}-${meal}`;
        if (!eatingOut[key]) {
          const recipeId = weeklyPlan[key];
          const recipe = getRecipeById(recipeId);
          if (recipe) {
            recipe.ingredienti.forEach((ing) => {
              const ingredientKey = `${ing.nome}|${ing.unita}`;
              const scaledQuantity = ing.quantita * (servings / 2); // 2 è la porzione di default
              if (ingredients[ingredientKey]) {
                ingredients[ingredientKey].quantita += scaledQuantity;
              } else {
                ingredients[ingredientKey] = {
                  nome: ing.nome,
                  quantita: scaledQuantity,
                  unita: ing.unita,
                };
              }
            });
          }
        }
      });
    });

    return ingredients;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🥗 Meal Planner Pro</h1>
        <p>Pianifica pranzi e cene, genera lista della spesa, scopri ricette dai tuoi ingredienti</p>
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
          className={`tab-button ${activeTab === 'suggester' ? 'active' : ''}`}
          onClick={() => setActiveTab('suggester')}
        >
          🎯 Suggeritore
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
          meals={meals}
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
          meals={meals}
          eatingOut={eatingOut}
          getRecipeById={getRecipeById}
          servings={servings}
          onServingsChange={setServings}
        />
      )}

      {activeTab === 'suggester' && (
        <RecipeSuggester
          recipes={recipes}
          onAddRecipe={addRecipe}
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

