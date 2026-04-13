# 🚀 Setup e Deployment - Meal Planner

## ✅ Cosa è stato fatto

✅ Codice React completo
✅ 20 ricette pre-caricate
✅ Repository GitHub creato (`martinaosculati/meal-planner`)
✅ Primo commit pushato

## 🔧 Prossimi Passi

### 1️⃣ **Clona il Repo Localmente** (Mac)

```bash
cd ~/Dev  # o dove preferisci
git clone https://github.com/martinaosculati/meal-planner.git
cd meal-planner
```

### 2️⃣ **Installa le Dipendenze**

```bash
npm install
```

Questo installerà:
- React 18.2.0
- jsPDF 2.5.1
- html2canvas 1.4.1

### 3️⃣ **Avvia Localmente**

```bash
npm start
```

L'app si aprirà automaticamente su **http://localhost:3000**

### 4️⃣ **Deploy su Vercel**

#### Opzione A: Manuale via Browser (Consigliato)

1. Vai su **vercel.com**
2. Accedi con GitHub
3. Click **"New Project"**
4. Seleziona il repository `meal-planner`
5. Click **"Deploy"**

Vercel farà il resto automaticamente! 🎉

#### Opzione B: Con Vercel CLI

```bash
npm i -g vercel  # Installa Vercel CLI
vercel           # Deploya al primo run
```

## 📋 Checklist di Verifica

Una volta deployato, controlla:

- [ ] URL pubblico funziona (es. `meal-planner-chi7.vercel.app`)
- [ ] Pianificatore settimanale carica bene
- [ ] Select ricette funziona
- [ ] Scambio ricette funziona
- [ ] Export PDF scarica il file
- [ ] Copy to clipboard funziona
- [ ] Form aggiunta ricette funziona
- [ ] localStorage persiste i dati

## 🔑 Come Usare l'App

### Tab 1: 📅 Pianificatore
1. Ogni giorno della settimana ha una ricetta
2. Usa il dropdown per **cambiare ricetta**
3. Clicca **"🔄 Scambia"** su un giorno
4. Clicca **"✓ Scambia con [giorno]"** su un altro
5. Clicca **"Fuori stasera"** per i giorni in cui non cucini

### Tab 2: 🛒 Lista della Spesa
1. Vedi tutti gli ingredienti necessari
2. Raggruppati per categoria automaticamente
3. Clicca per **spuntare** mentre fai la spesa
4. **Scarica PDF** per portarla con te
5. **Copia negli appunti** per incollare dove vuoi
6. **Ripristina** per deselezionare tutto

### Tab 3: 📖 Ricette
1. Vedi tutte le ricette disponibili
2. Clicca **"➕ Aggiungi Nuova Ricetta"**
3. Compila il form:
   - Nome ricetta
   - Ingredienti (nome, quantità, unità)
   - Tempo di preparazione
   - Difficoltà (facile/media/difficile)
   - Calorie
   - Note opzionali
4. Le ricette custom vengono salvate in localStorage

## 💾 Persistenza Dati

L'app salva automaticamente in **localStorage** del browser:
- `recipes` - Tutte le ricette
- `weeklyPlan` - Assegnazione ricette ai giorni
- `eatingOut` - Giorni in cui mangi fuori

**Nota**: Se cancelli il cache browser, i dati si perdono. Futuri update potrebbero aggiungere:
- Sync con Google Drive
- Backup su cloud
- Export/Import

## 🎨 Personalizzazione

### Cambiar colori
Modifica in `src/App.css`:
```css
/* Cambio colori primary da blu/viola a altri */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Aggiungere più ricette
Modifica `src/data/recipes.js` e aggiungi nella lista `initialRecipes`

### Aggiungere categorie ingredienti
Modifica `src/components/ShoppingList.js`, sezione `groupIngredientsByCategory()`

## 🐛 Troubleshooting

### "npm: command not found"
Node.js non è installato. Scarica da **nodejs.org**

### App non si avvia
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Errore PDF export
Controlla che jsPDF sia installato:
```bash
npm install jspdf html2canvas
```

### Dati non si salvano
Controlla che localStorage sia abilitato nel browser

## 📱 Su Mobile

L'app è **responsive**:
- Desktop: Layout completo
- Tablet: Layout adattato
- Mobile: Stack verticale

Provalo su iPhone/Android!

## 🚀 Deploy Vercel - Workflow Continuo

Una volta su Vercel:
1. Ogni `git push` nel main farà deploy automatico
2. Avrai un'URL pubblica sempre disponibile
3. I tuoi amici/famiglia potranno usarla

Esempio:
```bash
# Fai una modifica
git add .
git commit -m "Feature: aggiunto nuovo filtro"
git push

# Vercel deploy automatico! ✨
```

## 📞 Supporto

Se hai problemi:
1. Controlla il README.md
2. Apri la console browser (F12) per errori
3. Controlla il build log di Vercel

---

**Pronito a deployare?** 🚀 Vai a **vercel.com** e crea il progetto!
