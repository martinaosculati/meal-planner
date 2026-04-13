# 🥗 Meal Planner

Un'app web per pianificare i pasti settimanali e generare automaticamente la lista della spesa.

## ✨ Features

- **📅 Pianificatore Settimanale** (Lunedì-Domenica): Assegna ricette ai giorni della settimana
- **🔄 Scambio Ricette**: Scambia facilmente le ricette tra due giorni diversi
- **🍽️ Mangia Fuori**: Seleziona i giorni in cui mangi fuori per escluderli dal calcolo
- **🛒 Lista della Spesa Automatica**: Genera automaticamente la lista degli ingredienti
  - Raggruppa per categorie (Pesce, Verdure, Spezie, ecc.)
  - Somma automaticamente le quantità degli ingredienti uguali
  - Spuntabile mentre fai la spesa
- **📊 Riepilogo Nutrizionale**: Visualizza le calorie totali e medie per pasto
- **📄 Export PDF**: Scarica la lista della spesa in PDF
- **📋 Copia negli Appunti**: Copia la lista negli appunti per condividerla
- **📖 Ricette Custom**: Aggiungi le tue ricette personalizzate
- **💾 Persistenza Locale**: I tuoi dati sono salvati nel browser (localStorage)

## 🥘 Ricette Pre-Caricate

L'app include 20 ricette pescatariane sane:
- Pesce: Branzino, Salmone, Merluzzo, Orata, Trota, Spigola, Pesce Spada, Sgombro, Cozze, Polpo
- Verdure: Minestrone, Cavolfiore, Insalata varia
- Alternative: Pasta di verdure, Quinoa, Melanzane alla Parmigiana

Tutte senza riso, ricche di verdure e con informazioni su tempo, difficoltà e calorie.

## 🚀 Come Usare

### Installazione

```bash
# Clona il repository
git clone https://github.com/martinaosculati/meal-planner.git
cd meal-planner

# Installa le dipendenze
npm install

# Avvia l'app in sviluppo
npm start
```

L'app si apre automaticamente su http://localhost:3000

### Build per Produzione

```bash
npm run build
```

## 📱 Come Funziona

### 1. Pianificazione (Tab "Pianificatore")
- Visualizza i 7 giorni della settimana
- Ogni giorno ha una ricetta assegnata
- Seleziona "Mangia fuori" per i giorni in cui non cucini
- Usa il menu a tendina per cambiare ricetta
- Usa "Scambia" per scambiare ricette tra giorni

### 2. Lista della Spesa (Tab "Lista della Spesa")
- Visualizza tutti gli ingredienti necessari (escluso i giorni "fuori")
- Raggruppa per categoria automaticamente
- Clicca su un ingrediente per spuntarlo
- Esporta in PDF o copia negli appunti

### 3. Ricette (Tab "Ricette")
- Visualizza tutte le ricette disponibili
- Aggiungi nuove ricette personalizzate
- Compila nome, ingredienti, tempo, difficoltà, calorie

## 🛠️ Stack Tecnologico

- **React** 18.2.0 - UI Framework
- **jsPDF** 2.5.1 - Export PDF
- **html2canvas** 1.4.1 - Cattura HTML per PDF
- **localStorage** - Persistenza dati nel browser

## 📦 Struttura del Progetto

```
meal-planner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WeeklyPlanner.js    # Pianificazione settimanale
│   │   ├── ShoppingList.js     # Lista della spesa
│   │   └── RecipeForm.js       # Form ricette
│   ├── data/
│   │   └── recipes.js          # Ricette pre-caricate
│   ├── App.js                  # Componente principale
│   ├── App.css                 # Stili
│   └── index.js
├── package.json
└── .gitignore
```

## 🎨 Design

- Tema moderno con gradiente viola (#667eea → #764ba2)
- Responsive su desktop, tablet e mobile
- Card interattive con hover effects
- Icone emoji per miglior UX

## 💾 Dati Persistenti

L'app salva automaticamente in localStorage:
- `recipes` - Tutte le ricette (default + custom)
- `weeklyPlan` - Assegnazione ricette ai giorni
- `eatingOut` - Giorni in cui mangi fuori

**Nota**: I dati sono salvati nel browser. Cancellare il cache/cookies li elimina.

## 🔄 Funzionalità Avanzate

### Scambio Ricette
1. Clicca "🔄 Scambia" su un giorno
2. La riga diventa gialla (modalità scambio attiva)
3. Clicca "✓ Scambia con [giorno]" su un altro giorno
4. Le ricette vengono scambiate

### Export Lista della Spesa
- **PDF**: Scarica un file PDF formattato
- **Appunti**: Copia il testo per incollare dove vuoi
- **Spunta**: Clicca gli ingredienti mentre fai la spesa

## 📊 Riepilogo Nutrizionale

L'app calcola automaticamente:
- Numero di pasti da cucinare (escludendo i giorni "fuori")
- Calorie totali della settimana
- Media calorie per pasto

## 🐛 Known Issues

Nessuno al momento!

## 🚀 Prossime Funzionalità (Roadmap)

- [ ] Sincronizzazione cloud (Google Drive, iCloud)
- [ ] App mobile native (React Native)
- [ ] Integrazione con app di shopping (Carrefour, Coop)
- [ ] Piani nutrizionali personalizzati
- [ ] Ricette con foto e video tutorial
- [ ] Condivisione liste con familiari
- [ ] Integrazione con API ricette (Spoonacular, ecc.)

## 📝 License

MIT

## 👨‍💻 Autore

Martina Osculati

---

**Buon appetito!** 🍽️✨
