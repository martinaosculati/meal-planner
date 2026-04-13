export const initialRecipes = [
  // PESCE (7 ricette)
  {
    id: '1',
    nome: 'Branzino al forno con verdure',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Branzino', quantita: 400, unita: 'g' },
      { nome: 'Zucchine', quantita: 250, unita: 'g' },
      { nome: 'Pomodori ciliegini', quantita: 200, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 420,
    istruzioni: `1. Preriscalda il forno a 200°C per 10 minuti.
2. Taglia le zucchine a rondelle e i pomodori a metà.
3. Pulisci il branzino, salalo e pepalo sia dentro che fuori.
4. Disponi le verdure in una teglia, posiziona il branzino sopra.
5. Condisci con olio d'oliva e fette di limone.
6. Inforna per 20-25 minuti fino a quando il pesce è cotto.
7. Servi caldo con un filo di olio d'oliva crudo.`,
    note: 'Pesce bianco magro, ricco di omega-3. Perfetto per una cena leggera.',
  },
  {
    id: '2',
    nome: 'Salmone al cartoccio con asparagi',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Salmone fresco', quantita: 400, unita: 'g' },
      { nome: 'Asparagi', quantita: 300, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Erbe aromatiche', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 480,
    istruzioni: `1. Preriscalda il forno a 190°C.
2. Prepara un foglio di carta forno quadrato (circa 40x40 cm).
3. Posiziona gli asparagi al centro del foglio.
4. Posiziona il salmone sopra gli asparagi.
5. Aggiungi fette di limone e erbe aromatiche.
6. Drizza con olio d'oliva, sale e pepe.
7. Chiudi il cartoccio ripiegando i bordi del foglio.
8. Cuoci al forno per 20 minuti.
9. Apri il cartoccio (attenzione al vapore!) e servi.`,
    note: 'Ricco di omega-3 e proteine. Il cartoccio mantiene l\'umidità della carne.',
  },
  {
    id: '3',
    nome: 'Merluzzo in umido con melanzane',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Merluzzo', quantita: 400, unita: 'g' },
      { nome: 'Melanzane', quantita: 300, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 250, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'media',
    kcal: 350,
    istruzioni: `1. Taglia le melanzane a cubetti e salale leggermente. Lascia riposare 10 minuti.
2. Risciacqua le melanzane e asciugale con carta assorbente.
3. Soffriggi cipolla e aglio tritati in olio d'oliva.
4. Aggiungi le melanzane e cuoci per 5 minuti.
5. Versa i pomodori pelati e cuoci per 10 minuti.
6. Posiziona il merluzzo sopra il sugo.
7. Copri e cuoci per altri 15 minuti a fuoco medio-basso.
8. Assaggia e aggiusta di sale.`,
    note: 'Pesce magro e leggero. Le melanzane assorbono bene i sapori.',
  },
  {
    id: '4',
    nome: 'Gamberoni al limone con spinaci',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Gamberoni', quantita: 350, unita: 'g' },
      { nome: 'Spinaci freschi', quantita: 300, unita: 'g' },
      { nome: 'Aglio', quantita: 15, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 20,
    difficolta: 'facile',
    kcal: 320,
    istruzioni: `1. Sciacqua i gamberoni e asciugali.
2. In una padella grande, soffriggi l'aglio tritato in olio d'oliva.
3. Aggiungi gli spinaci e cuoci fino ad appassire (3-4 minuti).
4. Trasferisci gli spinaci in un piatto.
5. Nella stessa padella, aggiungi i gamberoni con un po' d'olio.
6. Cuoci a fuoco medio-alto per 2-3 minuti per lato.
7. Aggiungi il succo di limone e mescola.
8. Rimetti gli spinaci in padella e mescola tutto.`,
    note: 'Proteico e povero di grassi. Gli spinaci forniscono ferro e vitamine.',
  },
  {
    id: '5',
    nome: 'Trota al forno con verdure miste',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Trota', quantita: 400, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Zucchine', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 400,
    istruzioni: `1. Preriscalda il forno a 200°C.
2. Taglia tutte le verdure a bastoncini.
3. Disponi le verdure su una teglia, condisci con olio e sale.
4. Inforna per 10 minuti per ammorbidirle leggermente.
5. Pulisci la trota, salala e pepala dentro e fuori.
6. Posiziona la trota sopra le verdure.
7. Aggiungi fette di limone sia dentro che fuori il pesce.
8. Inforna per altri 20 minuti fino a cottura.`,
    note: 'Pesce di acqua dolce ricco di omega-3. Delicato e digeribile.',
  },
  {
    id: '6',
    nome: 'Orata al forno con pomodori',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Orata', quantita: 400, unita: 'g' },
      { nome: 'Pomodori', quantita: 300, unita: 'g' },
      { nome: 'Cipolla rossa', quantita: 80, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Preriscalda il forno a 200°C.
2. Taglia i pomodori a fette spesse e la cipolla a rondelle.
3. Disponi pomodori e cipolla su una teglia.
4. Salala leggermente e aggiungi metà del basilico.
5. Pulisci l'orata e salala e pepala dentro e fuori.
6. Posiziona l'orata sopra le verdure.
7. Versa olio d'oliva e remaining basilico sopra il pesce.
8. Inforna per 25-30 minuti.`,
    note: 'Pesce delicato e magro. I pomodori aggiungono dolcezza naturale.',
  },
  {
    id: '7',
    nome: 'Polpo alla piastra con verdure',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Polpo', quantita: 400, unita: 'g' },
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Peperoni', quantita: 200, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
    ],
    tempo: 40,
    difficolta: 'media',
    kcal: 380,
    istruzioni: `1. Pulisci il polpo e cuocilo in acqua bollente salata per 30-40 minuti.
2. Scarica il polpo e lascialo raffreddare leggermente.
3. Taglia il polpo in pezzi.
4. Taglia le verdure a strisce.
5. Scalda una piastra o padella antiaderente.
6. Cuoci le verdure prima, poi mettile da parte.
7. Sulla stessa piastra, cuoci il polpo fino ad ottenere una leggera crosta.
8. Ritira tutto, condisci con olio d'oliva, aglio tritato e succo di limone.`,
    note: 'Proteico e ricco di minerali. Ha bisogno di cottura lenta per ammorbidirsi.',
  },

  // CARNI BIANCHE (4 ricette)
  {
    id: '8',
    nome: 'Petto di pollo ai ferri con verdure',
    tipo: 'carne',
    ingredienti: [
      { nome: 'Petto di pollo', quantita: 400, unita: 'g' },
      { nome: 'Zucchine', quantita: 250, unita: 'g' },
      { nome: 'Peperoni', quantita: 200, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
      { nome: 'Rosmarino fresco', quantita: 5, unita: 'g' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Scalda una piastra o padella antiaderente a fuoco medio-alto.
2. Taglia il petto di pollo a fettine di circa 1 cm.
3. Sala, pepala e condisci con olio d'oliva e rosmarino.
4. Cuoci il pollo sulla piastra 4-5 minuti per lato.
5. Nel frattempo, taglia le verdure a strisce.
6. Quando il pollo è pronto, cuoci le verdure sulla stessa piastra.
7. Cuoci le verdure 5-6 minuti mescolando.
8. Servi il pollo con le verdure e una spruzzata di limone fresco.`,
    note: 'Carne bianca magra, ricca di proteine. Perfetta per chi vuole stare leggero.',
  },
  {
    id: '9',
    nome: 'Tacchino ripieno di ricotta e spinaci',
    tipo: 'carne',
    ingredienti: [
      { nome: 'Tacchino (petto)', quantita: 400, unita: 'g' },
      { nome: 'Ricotta', quantita: 150, unita: 'g' },
      { nome: 'Spinaci freschi', quantita: 200, unita: 'g' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'media',
    kcal: 420,
    istruzioni: `1. Preriscalda il forno a 190°C.
2. Trita gli spinaci e il prezzemolo. Soffriggi l'aglio in poco olio.
3. Aggiungi gli spinaci e cuoci fino ad appassire.
4. In una ciotola, mescola ricotta, spinaci, parmigiano e sale.
5. Fai una tasca nel petto di tacchino e riempila di ricotta-spinaci.
6. Chiudi con stuzzicadenti se necessario.
7. Disponi il tacchino in una teglia con olio e cuoci in forno 25-30 minuti.
8. Servi il tacchino con le verdure di contorno.`,
    note: 'Carne molto magra. Il ripieno aggiunge gusto senza calorie eccessive.',
  },
  {
    id: '10',
    nome: 'Pollo con limone e erbe aromatiche',
    tipo: 'carne',
    ingredienti: [
      { nome: 'Pollo (petto)', quantita: 400, unita: 'g' },
      { nome: 'Limone', quantita: 2, unita: 'pz' },
      { nome: 'Rosmarino', quantita: 5, unita: 'g' },
      { nome: 'Timo', quantita: 5, unita: 'g' },
      { nome: 'Aglio', quantita: 15, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Prepara una marinata con succo di limone, olio, aglio tritato e erbe.
2. Immergi il pollo nella marinata e lascia riposare 15-20 minuti.
3. Scalda una padella antiaderente a fuoco medio.
4. Cuoci il pollo 6-7 minuti per lato fino a doratura.
5. Versa un po' di marinata rimasta nella padella.
6. Abbassa il fuoco e cuoci per altri 5 minuti.
7. Servi il pollo con la salsa di cottura e limone fresco.`,
    note: 'Leggero e profumato. Le erbe aromatiche danno molto gusto senza calorie.',
  },
  {
    id: '11',
    nome: 'Tacchino al curry con verdure',
    tipo: 'carne',
    ingredienti: [
      { nome: 'Tacchino (macinato)', quantita: 350, unita: 'g' },
      { nome: 'Curry in polvere', quantita: 10, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Piselli', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Cocco leggero', quantita: 100, unita: 'ml' },
      { nome: 'Olio d\'oliva', quantita: 15, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'media',
    kcal: 400,
    istruzioni: `1. Soffriggi cipolla tritata in olio d'oliva.
2. Aggiungi il tacchino macinato e rosola bene.
3. Aggiungi il curry e cuoci 1 minuto per sprigionare i profumi.
4. Taglia le carote a cubetti e aggiungile.
5. Cuoci per 5 minuti, poi aggiungi i piselli.
6. Versa il latte di cocco e abbassa il fuoco.
7. Cuoci per 10-15 minuti fino a cottura delle verdure.
8. Assaggia e aggiusta di sale.`,
    note: 'Piatto esotico e leggero. Il curry stimola il metabolismo.',
  },

  // LEGUMI (5 ricette)
  {
    id: '12',
    nome: 'Pasta e lenticchie (Pasta e ceci light)',
    tipo: 'legumi',
    ingredienti: [
      { nome: 'Pasta integrale', quantita: 80, unita: 'g' },
      { nome: 'Lenticchie rosse', quantita: 150, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 200, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Carota', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
      { nome: 'Brodo vegetale', quantita: 300, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Soffriggi cipolla e carota tritati in olio d'oliva.
2. Aggiungi le lenticchie rosse (non hanno bisogno di ammollo).
3. Versa il brodo vegetale e i pomodori pelati.
4. Cuoci per 20 minuti a fuoco medio-basso.
5. Aggiungi l'acqua per la pasta e porta a ebollizione.
6. Aggiungi la pasta quando il brodo ribolle.
7. Cuoci fino al punto desiderato (al dente consigliato).
8. Servi con un filo di olio d'oliva e erbe aromatiche.`,
    note: 'Piatto completo. Le lenticchie danno proteine e fibre senza grassi.',
  },
  {
    id: '13',
    nome: 'Insalata di ceci e verdure fresche',
    tipo: 'legumi',
    ingredienti: [
      { nome: 'Ceci cotti', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 250, unita: 'g' },
      { nome: 'Cetriolo', quantita: 150, unita: 'g' },
      { nome: 'Cipolla rossa', quantita: 80, unita: 'g' },
      { nome: 'Prezzemolo fresco', quantita: 20, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 15,
    difficolta: 'facile',
    kcal: 320,
    istruzioni: `1. Sciacqua i ceci cotti e scolali bene.
2. Taglia i pomodori a cubetti e il cetriolo a rondelle.
3. Trita la cipolla rossa finemente.
4. In una ciotola grande, mescola ceci, pomodori, cetriolo, cipolla e prezzemolo.
5. Prepara il dressing con succo di limone e olio d'oliva.
6. Versa il dressing sull'insalata e mescola bene.
7. Lascia riposare 10 minuti per permettere ai sapori di mescolarsi.
8. Servi freddo o a temperatura ambiente.`,
    note: 'Piatto veloce e nutriente. Perfetto come pranzo leggero.',
  },
  {
    id: '14',
    nome: 'Minestra di fagioli e verdure',
    tipo: 'legumi',
    ingredienti: [
      { nome: 'Fagioli rossi cotti', quantita: 200, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Sedano', quantita: 100, unita: 'g' },
      { nome: 'Spinaci freschi', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Brodo vegetale', quantita: 500, unita: 'ml' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 280,
    istruzioni: `1. Soffriggi cipolla, carote e sedano tritati in olio d'oliva.
2. Versa il brodo vegetale e porta a ebollizione.
3. Aggiungi i fagioli cotti.
4. Cuoci per 10 minuti.
5. Aggiungi gli spinaci freschi e cuoci altri 5 minuti.
6. Assaggia e aggiusta di sale e pepe.
7. Servi la minestra calda con un filo di olio d'oliva crudo.`,
    note: 'Minestra calda e confortante. I fagioli danno sazietà duratura.',
  },
  {
    id: '15',
    nome: 'Lenticchie nere con riso integrale',
    tipo: 'legumi',
    ingredienti: [
      { nome: 'Lenticchie nere', quantita: 150, unita: 'g' },
      { nome: 'Riso integrale', quantita: 80, unita: 'g' },
      { nome: 'Carote', quantita: 100, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Brodo vegetale', quantita: 400, unita: 'ml' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 40,
    difficolta: 'media',
    kcal: 400,
    istruzioni: `1. Soffriggi cipolla, carota e aglio tritati in olio d'oliva.
2. Aggiungi le lenticchie nere (lasciale a bagno 30 minuti prima).
3. Versa il brodo e porta a ebollizione.
4. Cuoci le lenticchie per 15-20 minuti.
5. Aggiungi il riso integrale quando le lenticchie sono quasi cotte.
6. Cuoci il riso secondo il tempo sulla confezione (circa 20 minuti).
7. Mescola bene e assaggia.
8. Servi il piatto caldo.`,
    note: 'Piatto completo e nutriente. Senza riso bianco ma con integrali.',
  },
  {
    id: '16',
    nome: 'Pasta ai ceci con aglio e prezzemolo',
    tipo: 'legumi',
    ingredienti: [
      { nome: 'Pasta integrale', quantita: 80, unita: 'g' },
      { nome: 'Ceci cotti', quantita: 200, unita: 'g' },
      { nome: 'Aglio', quantita: 20, unita: 'g' },
      { nome: 'Prezzemolo fresco', quantita: 20, unita: 'g' },
      { nome: 'Peperoncino', quantita: 2, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Brodo vegetale', quantita: 200, unita: 'ml' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 400,
    istruzioni: `1. Porta a ebollizione il brodo vegetale.
2. Aggiungi la pasta e cuoci secondo le indicazioni.
3. Nel frattempo, soffriggi aglio tritato e peperoncino in olio d'oliva.
4. Aggiungi i ceci cotti e scaldali bene.
5. Quando la pasta è cotta, scola e aggiungi al soffritto.
6. Mescola bene, aggiungendo un po' di brodo di cottura se necessario.
7. Finisci con prezzemolo fresco tritato.
8. Servi caldo.`,
    note: 'Piatto semplice e gustoso. I ceci rendono la pasta più nutriente.',
  },

  // FORMAGGI LEGGERI (3 ricette)
  {
    id: '17',
    nome: 'Mozzarella e pomodoro con basil ico',
    tipo: 'formaggi',
    ingredienti: [
      { nome: 'Mozzarella light', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 300, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 15, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Aceto balsamico', quantita: 15, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
    ],
    tempo: 10,
    difficolta: 'facile',
    kcal: 320,
    istruzioni: `1. Taglia i pomodori a fettine spesse.
2. Taglia la mozzarella light a fettine.
3. Disponi alternate le fettine di pomodoro e mozzarella su un piatto.
4. Cospargere con foglie di basilico fresco.
5. Condisci con olio d'oliva, aceto balsamico, sale e pepe.
6. Lascia riposare 5 minuti prima di servire.
7. Servi a temperatura ambiente.`,
    note: 'Piatto classico e leggero. La mozzarella light riduce le calorie.',
  },
  {
    id: '18',
    nome: 'Ricotta e verdure grigliate',
    tipo: 'formaggi',
    ingredienti: [
      { nome: 'Ricotta light', quantita: 250, unita: 'g' },
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Melanzane', quantita: 200, unita: 'g' },
      { nome: 'Peperoni rossi', quantita: 150, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Prezzemolo', quantita: 15, unita: 'g' },
    ],
    tempo: 30,
    difficolta: 'media',
    kcal: 350,
    istruzioni: `1. Taglia zucchine, melanzane e peperoni a strisce lunghe.
2. Spennella le verdure con olio e condisci con sale e pepe.
3. Scalda una piastra o griglia a fuoco medio-alto.
4. Cuoci le verdure 4-5 minuti per lato fino a che siano tenere.
5. Disponi le verdure grigliate su un piatto.
6. In una ciotola, mescola ricotta light con prezzemolo tritato.
7. Posiziona cucchiate di ricotta sulle verdure grigliate.
8. Servi tiepido o a temperatura ambiente.`,
    note: 'Piatto colorato e leggero. La ricotta light è ricca di proteine.',
  },
  {
    id: '19',
    nome: 'Insalata con ricotta e nocciole',
    tipo: 'formaggi',
    ingredienti: [
      { nome: 'Ricotta light', quantita: 200, unita: 'g' },
      { nome: 'Lattuga mista', quantita: 250, unita: 'g' },
      { nome: 'Noci/Nocciole', quantita: 40, unita: 'g' },
      { nome: 'Mirtilli', quantita: 80, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 15,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Lava e asciuga la lattuga.
2. Disponi la lattuga su un piatto da portata.
3. Aggiungi la ricotta light in mucchietti.
4. Spargi i mirtilli freschi.
5. Trita grossolanamente le noci e spargile sopra.
6. Prepara il dressing con succo di limone e olio d'oliva.
7. Versa il dressing sull'insalata.
8. Servi subito.`,
    note: 'Insalata dolce e nutriente. Le noci danno croccantezza.',
  },

  // VEGETARIANO VARIO (3 ricette)
  {
    id: '20',
    nome: 'Cavolfiore al forno con spezie',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Cavolfiore', quantita: 500, unita: 'g' },
      { nome: 'Curcuma', quantita: 3, unita: 'g' },
      { nome: 'Paprika', quantita: 3, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
    ],
    tempo: 35,
    difficolta: 'facile',
    kcal: 200,
    istruzioni: `1. Preriscalda il forno a 220°C.
2. Dividi il cavolfiore in cimette.
3. In una ciotola, mescola olio d'oliva, curcuma, paprika, sale e pepe.
4. Aggiungi le cimette di cavolfiore e mescola bene.
5. Disponi su una teglia e inforna.
6. Cuoci per 30-35 minuti, mescolando a metà cottura.
7. Il cavolfiore dovrebbe essere croccante fuori e morbido dentro.
8. Condisci con limone fresco e servi.`,
    note: 'Ricco di vitamine e fibre. Basso di calorie. Le spezie aumentano i benefici.',
  },
  {
    id: '21',
    nome: 'Verdure al forno miste',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Melanzane', quantita: 200, unita: 'g' },
      { nome: 'Peperoni', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
    ],
    tempo: 40,
    difficolta: 'facile',
    kcal: 250,
    istruzioni: `1. Preriscalda il forno a 200°C.
2. Taglia tutte le verdure in cubetti o strisce.
3. Distribuisci le verdure su una teglia.
4. Versa olio d'oliva, aglio tritato, sale e pepe.
5. Mescola bene per coprire tutte le verdure.
6. Inforna per 35-40 minuti, mescolando a metà cottura.
7. Le verdure dovrebbero essere tenere e leggermente dorate.
8. Servi caldo.`,
    note: 'Piatto colorato e nutriente. Perfetto come contorno o piatto unico.',
  },
  {
    id: '22',
    nome: 'Tortino di verdure',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Uova', quantita: 3, unita: 'pz' },
      { nome: 'Spinaci freschi', quantita: 200, unita: 'g' },
      { nome: 'Broccoli', quantita: 150, unita: 'g' },
      { nome: 'Ricotta light', quantita: 100, unita: 'g' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 15, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
    ],
    tempo: 35,
    difficolta: 'media',
    kcal: 320,
    istruzioni: `1. Preriscalda il forno a 180°C.
2. Cuoci gli spinaci e i broccoli leggermente in acqua salata. Scola bene.
3. Trita finemente spinaci e broccoli.
4. In una ciotola, sbatti le uova.
5. Aggiungi verdure tritate, ricotta, parmigiano, sale e pepe.
6. Mescola bene.
7. Versa in una teglia unta e inforna.
8. Cuoci per 25-30 minuti fino a che il tortino è solidificato.`,
    note: 'Tortino proteico e nutriente. Perfetto sia caldo che freddo.',
  },

  // RICETTE NUOVE - COMBINAZIONI COMUNI (5 ricette)
  {
    id: '23',
    nome: 'Zucchine e feta al forno',
    tipo: 'formaggi',
    ingredienti: [
      { nome: 'Zucchine', quantita: 400, unita: 'g' },
      { nome: 'Feta', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 200, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Origano', quantita: 5, unita: 'g' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 320,
    istruzioni: `1. Preriscalda il forno a 200°C.
2. Taglia le zucchine a rondelle e i pomodori a cubetti.
3. Trita la cipolla finemente.
4. In una teglia, disponi zucchine, pomodori e cipolla.
5. Condisci con olio d'oliva, sale, pepe e origano.
6. Inforna per 15 minuti.
7. Aggiungi la feta sbriciolata sopra.
8. Inforna per altri 10-15 minuti fino a doratura.`,
    note: 'Classico abbinamento greco. La feta si scioglie leggermente con il calore.',
  },

  {
    id: '24',
    nome: 'Pollo con pomodori e basilico',
    tipo: 'carne',
    ingredienti: [
      { nome: 'Pollo (petto)', quantita: 400, unita: 'g' },
      { nome: 'Pomodori', quantita: 300, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Aglio', quantita: 15, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 15, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Taglia il pollo a pezzetti medi.
2. Soffriggi cipolla e aglio in olio d'oliva.
3. Aggiungi il pollo e rosola bene.
4. Taglia i pomodori a cubetti e aggiungili.
5. Cuoci a fuoco medio per 15 minuti.
6. Aggiungi il basilico fresco.
7. Assaggia e aggiusta di sale.
8. Servi caldo.`,
    note: 'Piatto semplice e profumato. Perfetto con pasta o riso.',
  },

  {
    id: '25',
    nome: 'Peperoni ripieni di ricotta e verdure',
    tipo: 'formaggi',
    ingredienti: [
      { nome: 'Peperoni rossi', quantita: 400, unita: 'g' },
      { nome: 'Ricotta light', quantita: 250, unita: 'g' },
      { nome: 'Spinaci freschi', quantita: 150, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 200, unita: 'g' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 40,
    difficolta: 'media',
    kcal: 340,
    istruzioni: `1. Preriscalda il forno a 190°C.
2. Taglia il "coperchio" dei peperoni e rimuovi i semi.
3. Cuoci gli spinaci leggermente e trita.
4. Mescola ricotta, spinaci e parmigiano.
5. Riempi i peperoni del mix.
6. Disponi i peperoni in una teglia con olio.
7. Versa i pomodori pelati intorno.
8. Inforna per 35-40 minuti.`,
    note: 'Piatto colorato e nutritivo. Perfetto per una cena completa.',
  },

  {
    id: '26',
    nome: 'Spaghetti integrali con aglio, olio e peperoncino',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Pasta integrale', quantita: 80, unita: 'g' },
      { nome: 'Aglio', quantita: 30, unita: 'g' },
      { nome: 'Peperoncino', quantita: 3, unita: 'pz' },
      { nome: 'Prezzemolo fresco', quantita: 20, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 40, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
    ],
    tempo: 15,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Porta a ebollizione una pentola d'acqua salata.
2. Cuoci la pasta integrale secondo le istruzioni.
3. Nel frattempo, trita l'aglio e il peperoncino.
4. Scalda l'olio in una padella grande.
5. Aggiungi aglio e peperoncino, cuoci 1 minuto.
6. Scola la pasta e aggiungila alla padella.
7. Mescola bene per coprire d'olio.
8. Finisci con prezzemolo fresco.`,
    note: 'Classico italiano semplice e veloce. Perfetto per una cena veloce.',
  },

  {
    id: '27',
    nome: 'Melanzane alla parmigiana light',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Melanzane', quantita: 500, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 300, unita: 'g' },
      { nome: 'Ricotta light', quantita: 200, unita: 'g' },
      { nome: 'Mozzarella light', quantita: 150, unita: 'g' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 45,
    difficolta: 'media',
    kcal: 320,
    istruzioni: `1. Preriscalda il forno a 190°C.
2. Taglia le melanzane a fette spesse.
3. Disponi su una teglia, salala leggermente.
4. Cuoci al forno per 15 minuti.
5. In una ciotola, mescola ricotta, mozzarella e parmigiano.
6. In un'altra teglia, versa un po' di pomodori.
7. Strato: melanzane, ricotta, pomodori. Ripeti.
8. Finisci con mozzarella e parmigiano.
9. Inforna per 25-30 minuti.`,
    note: 'Versione light della parmigiana classica con ricotta.',
  },
];
