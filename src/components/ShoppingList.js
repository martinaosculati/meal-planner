import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ShoppingList({
  ingredients,
  weeklyPlan,
  days,
  eatingOut,
  getRecipeById,
}) {
  const [checkedItems, setCheckedItems] = useState({});

  const groupIngredientsByCategory = () => {
    const categories = {
      'Pesce e Frutti di Mare': [],
      'Verdure': [],
      'Frutta': [],
      'Latticini': [],
      'Oli e Condimenti': [],
      'Spezie e Aromi': [],
      'Altro': [],
    };

    const categoryKeywords = {
      'Pesce e Frutti di Mare': ['pesce', 'salmone', 'branzino', 'merluzzo', 'orata', 'trota', 'sgombro', 'tonno', 'gamberoni', 'polpo', 'cozze', 'spigola'],
      'Verdure': ['zucchine', 'pomodori', 'carote', 'sedano', 'cipolla', 'aglio', 'melanzane', 'asparagi', 'broccoli', 'spinaci', 'lattuga', 'cavolo', 'peperoni', 'cetriolo', 'cavolfiore'],
      'Frutta': ['limone', 'mela', 'banana', 'arancia'],
      'Latticini': ['mozzarella', 'parmigiano', 'ricotta', 'burro'],
      'Oli e Condimenti': ['olio', 'sale', 'aceto', 'vino'],
      'Spezie e Aromi': ['basilico', 'prezzemolo', 'rosmarino', 'erbe', 'spezie', 'curcuma', 'paprika', 'peperoncino'],
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

    pdf.save('lista-spesa.pdf');
  };

  const copyToClipboard = () => {
    const text = Object.keys(ingredients)
      .map((key) => {
        const ing = ingredients[key];
        return `${ing.nome} - ${ing.quantita} ${ing.unita}`;
      })
      .join('\n');

    navigator.clipboard.writeText(text);
    alert('✅ Lista copiata negli appunti!');
  };

  const categories = groupIngredientsByCategory();
  const totalItems = Object.keys(ingredients).length;

  return (
    <div className="shopping-list">
      <div style={{ marginBottom: '30px' }}>
        <h2>🛒 Lista della Spesa</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>
          Totale ingredienti: <strong>{totalItems}</strong> | Pasti pianificati: <strong>{days.filter((d) => !eatingOut[d]).length}</strong>
        </p>
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
                      {ing.quantita} {ing.unita}
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
