import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ShoppingList({
  ingredients,
  servings,
  onServingsChange,
  days,
  meals,
  eatingOut,
  getRecipeById,
  weeklyPlan,
}) {
  const [checkedItems, setCheckedItems] = useState({});

  const groupIngredientsByCategory = () => {
    const categories = {
      'Pesce e Frutti di Mare': [],
      'Verdure': [],
      'Frutta': [],
      'Latticini e Uova': [],
      'Oli e Condimenti': [],
      'Spezie e Aromi': [],
      'Pasta e Cereali': [],
      'Altro': [],
    };

    const categoryKeywords = {
      'Pesce e Frutti di Mare': ['pesce', 'salmone', 'branzino', 'merluzzo', 'orata', 'trota', 'sgombro', 'tonno', 'gamberoni', 'polpo', 'cozze', 'spigola'],
      'Verdure': ['zucchine', 'pomodori', 'carote', 'sedano', 'cipolla', 'aglio', 'melanzane', 'asparagi', 'broccoli', 'spinaci', 'lattuga', 'cavolo', 'peperoni', 'cetriolo', 'cavolfiore'],
      'Frutta': ['limone', 'mela', 'banana', 'arancia', 'limoni'],
      'Latticini e Uova': ['mozzarella', 'parmigiano', 'ricotta', 'burro', 'latte', 'uova'],
      'Oli e Condimenti': ['olio', 'sale', 'aceto', 'vino'],
      'Spezie e Aromi': ['basilico', 'prezzemolo', 'rosmarino', 'erbe', 'spezie', 'curcuma', 'paprika', 'peperoncino'],
      'Pasta e Cereali': ['pasta', 'riso', 'orzo', 'quinoa', 'lenticchie'],
    };

    Object.keys(ingredients).forEach((key) => {
      const ing = ingredients[key];
      let category = 'Altro';

      for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some((kw) => ing.nome.toLowerCase().includes(kw))) {
          category = cat;
          break;
        }
      }

      categories[category].push(ing);
    });

    return categories;
  };

  const handleCheckItem = (key) => {
    setCheckedItems({
      ...checkedItems,
      [key]: !checkedItems[key],
    });
  };

  const exportToPDF = async () => {
    const element = document.getElementById('shopping-list-content');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= 297;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297;
    }

    pdf.save(`lista-spesa-${servings}persone.pdf`);
  };

  const copyToClipboard = () => {
    const text = Object.keys(ingredients)
      .map((key) => {
        const ing = ingredients[key];
        return `${ing.nome} - ${ing.quantita.toFixed(1)} ${ing.unita}`;
      })
      .join('\n');

    navigator.clipboard.writeText(text);
    alert('✅ Lista copiata negli appunti!');
  };

  const categories = groupIngredientsByCategory();
  const totalItems = Object.keys(ingredients).length;

  // Conteggio pasti pianificati
  const mealsPlanCount = days.reduce(
    (sum, day) =>
      sum + meals.filter((meal) => !eatingOut[`${day}-${meal}`]).length,
    0
  );

  return (
    <div className="shopping-list">
      <div style={{ marginBottom: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ color: '#667eea', marginBottom: '20px' }}>🛒 Lista della Spesa</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: '600', color: '#333', display: 'block', marginBottom: '12px' }}>
            👥 Numero di persone
          </label>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="range"
              min="1"
              max="8"
              value={servings}
              onChange={(e) => onServingsChange(parseInt(e.target.value))}
              style={{ flex: 1 }}
            />
            <div style={{
              background: '#667eea',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '6px',
              fontWeight: 'bold',
              minWidth: '60px',
              textAlign: 'center',
            }}>
              {servings}
            </div>
          </div>
          <p style={{ color: '#666', fontSize: '0.9em', marginTop: '8px' }}>
            Quantità ingredienti adattate per {servings} persone
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'white', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.85em' }}>Ingredienti totali</div>
            <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>{totalItems}</div>
          </div>
          <div style={{ background: 'white', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
            <div style={{ color: '#999', fontSize: '0.85em' }}>Pasti pianificati</div>
            <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>{mealsPlanCount}</div>
          </div>
        </div>
      </div>

      <div id="shopping-list-content" style={{ marginBottom: '30px' }}>
        {Object.entries(categories).map(([category, items]) => {
          if (items.length === 0) return null;

          return (
            <div key={category} className="ingredient-category">
              <div className="category-title">{category}</div>
              {items.map((ing, idx) => {
                const key = `${ing.nome}|${ing.unita}`;
                const isChecked = checkedItems[key];

                return (
                  <div
                    key={idx}
                    className="ingredient-item"
                    style={{
                      opacity: isChecked ? 0.6 : 1,
                      textDecoration: isChecked ? 'line-through' : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleCheckItem(key)}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked || false}
                      onChange={() => handleCheckItem(key)}
                      style={{ marginRight: '15px', cursor: 'pointer' }}
                    />
                    <span className="ingredient-name">{ing.nome}</span>
                    <span className="ingredient-quantity">
                      {ing.quantita.toFixed(1)} {ing.unita}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {totalItems > 0 && (
        <div className="export-options">
          <button className="btn btn-primary" onClick={exportToPDF}>
            📄 Scarica PDF
          </button>
          <button className="btn btn-success" onClick={copyToClipboard}>
            📋 Copia negli appunti
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCheckedItems({})}
          >
            ↻ Ripristina
          </button>
        </div>
      )}

      {totalItems === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          <p>📭 Nessun ingrediente da acquistare</p>
          <p style={{ fontSize: '0.9em' }}>Pianifica alcuni pasti o rimuovi i giorni in cui mangi fuori</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
