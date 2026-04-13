export const initialRecipes = [
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
      { nome: 'Pepe', quantita: 2, unita: 'g' },
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
      { nome: 'Sale', quantita: 5, unita: 'g' },
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
      { nome: 'Sale', quantita: 5, unita: 'g' },
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
8. Assaggia e aggiusta di sale.
9. Servi il merluzzo con verdure e sugo.`,
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
      { nome: 'Sale', quantita: 3, unita: 'g' },
      { nome: 'Pepe', quantita: 2, unita: 'g' },
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
8. Rimetti gli spinaci in padella e mescola tutto.
9. Assaggia e aggiusta di sale e pepe.`,
    note: 'Proteico e povero di grassi. Gli spinaci forniscono ferro e vitamine.',
  },
  {
    id: '5',
    nome: 'Pasta di verdure con broccoli',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Pasta integrale', quantita: 80, unita: 'g' },
      { nome: 'Broccoli', quantita: 400, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Peperoncino', quantita: 2, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
      { nome: 'Parmigiano', quantita: 30, unita: 'g' },
    ],
    tempo: 20,
    difficolta: 'facile',
    kcal: 380,
    istruzioni: `1. Porta a ebollizione l'acqua salata in una pentola grande.
2. Dividi i broccoli in cimette e cuocili 5 minuti in acqua salata.
3. Aggiungi la pasta e cuoci secondo le indicazioni sulla confezione.
4. Nel frattempo, soffriggi aglio tritato e peperoncino in olio d'oliva.
5. Scola la pasta con i broccoli, reservando 1 tazza d'acqua di cottura.
6. Trasferisci pasta e broccoli nel soffritto.
7. Aggiungi un po' d'acqua di cottura per creare un'emulsione cremosa.
8. Manteca bene e cospargere con parmigiano grattugiato.`,
    note: 'Senza pesce ma con verdure ricche di fibre. La pasta integrale fornisce energia.',
  },
  {
    id: '6',
    nome: 'Trota al forno con verdure miste',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Trota', quantita: 400, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Zucchine', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
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
8. Inforna per altri 20 minuti fino a cottura.
9. Servi tutto insieme caldo.`,
    note: 'Pesce di acqua dolce ricco di omega-3. Delicato e digeribile.',
  },
  {
    id: '7',
    nome: 'Insalata di verdure con tofu',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Tofu', quantita: 200, unita: 'g' },
      { nome: 'Lattuga mista', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 200, unita: 'g' },
      { nome: 'Cetriolo', quantita: 150, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Aceto di vino', quantita: 15, unita: 'ml' },
      { nome: 'Sale', quantita: 3, unita: 'g' },
    ],
    tempo: 15,
    difficolta: 'facile',
    kcal: 280,
    istruzioni: `1. Lava la lattuga e asciugala accuratamente.
2. Taglia i pomodori a spicchi e il cetriolo a rondelle.
3. Taglia il tofu a cubetti.
4. Disponi la lattuga su un piatto da portata.
5. Aggiungi pomodori, cetriolo e tofu.
6. In una ciotola, mescola olio d'oliva, aceto e sale.
7. Versa il dressing sull'insalata.
8. Mescola delicatamente e servi subito.`,
    note: 'Leggera e rinfrescante. Il tofu fornisce proteine vegetali.',
  },
  {
    id: '8',
    nome: 'Polpo alla piastra con verdure',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Polpo', quantita: 400, unita: 'g' },
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Peperoni', quantita: 200, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
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
  {
    id: '9',
    nome: 'Cavolfiore al forno con spezie',
    tipo: 'vegetariano',
    ingredienti: [
      { nome: 'Cavolfiore', quantita: 500, unita: 'g' },
      { nome: 'Curcuma', quantita: 3, unita: 'g' },
      { nome: 'Paprika', quantita: 3, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
      { nome: 'Pepe', quantita: 2, unita: 'g' },
    ],
    tempo: 35,
    difficolta: 'facile',
    kcal: 200,
    istruzioni: `1. Preriscalda il forno a 220°C.
2. Dividi il cavolfiore in cimette.
3. In una ciotola, mescola olio d'oliva, curcuma, paprika, sale e pepe.
4. Aggiungi le cimette di cavolfiore e mescola bene per ricoprirle.
5. Disponi su una teglia e inforna.
6. Cuoci per 30-35 minuti, mescolando a metà cottura.
7. Il cavolfiore dovrebbe essere croccante fuori e morbido dentro.
8. Condisci con limone fresco prima di servire.`,
    note: 'Ricco di vitamine e fibre. Basso di calorie. Le spezie aumentano i benefici.',
  },
  {
    id: '10',
    nome: 'Orata al forno con pomodori',
    tipo: 'pesce',
    ingredienti: [
      { nome: 'Orata', quantita: 400, unita: 'g' },
      { nome: 'Pomodori', quantita: 300, unita: 'g' },
      { nome: 'Cipolla rossa', quantita: 80, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
      { nome: 'Sale', quantita: 5, unita: 'g' },
      { nome: 'Pepe', quantita: 2, unita: 'g' },
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
7. Versa olio d'oliva e rimaining basilico sopra il pesce.
8. Inforna per 25-30 minuti.
9. Servi l'orata con pomodori e cipolla caramellati.`,
    note: 'Pesce delicato e magro. I pomodori aggiungono dolcezza naturale.',
  },
];

  {
    id: '2',
    nome: 'Salmone al cartoccio con asparagi',
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
    note: 'Ricco di omega-3 e proteine',
  },
  {
    id: '3',
    nome: 'Merluzzo in umido con melanzane',
    ingredienti: [
      { nome: 'Merluzzo', quantita: 400, unita: 'g' },
      { nome: 'Melanzane', quantita: 300, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 250, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'media',
    kcal: 350,
    note: 'Pesce magro e leggero',
  },
  {
    id: '4',
    nome: 'Gamberoni al limone con spinaci',
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
    note: 'Ricco di proteine, povero di grassi',
  },
  {
    id: '5',
    nome: 'Pasta di verdure con broccoli',
    ingredienti: [
      { nome: 'Pasta integrale', quantita: 80, unita: 'g' },
      { nome: 'Broccoli', quantita: 400, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Peperoncino', quantita: 2, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 20,
    difficolta: 'facile',
    kcal: 380,
    note: 'Senza pesce ma con verdure ricche di fibre',
  },
  {
    id: '6',
    nome: 'Trota al forno con verdure miste',
    ingredienti: [
      { nome: 'Trota', quantita: 400, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Zucchine', quantita: 150, unita: 'g' },
      { nome: 'Cipolla', quantita: 80, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 400,
    note: 'Pesce di acqua dolce ricco di omega-3',
  },
  {
    id: '7',
    nome: 'Insalata di verdure con tofu',
    ingredienti: [
      { nome: 'Tofu', quantita: 200, unita: 'g' },
      { nome: 'Lattuga mista', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 200, unita: 'g' },
      { nome: 'Cetriolo', quantita: 150, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 15,
    difficolta: 'facile',
    kcal: 280,
    note: 'Leggera e rinfrescante',
  },
  {
    id: '8',
    nome: 'Polpo alla piastra con verdure',
    ingredienti: [
      { nome: 'Polpo', quantita: 400, unita: 'g' },
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Peperoni', quantita: 200, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 40,
    difficolta: 'media',
    kcal: 380,
    note: 'Proteico e ricco di minerali',
  },
  {
    id: '9',
    nome: 'Cavolfiore al forno con spezie',
    ingredienti: [
      { nome: 'Cavolfiore', quantita: 500, unita: 'g' },
      { nome: 'Curcuma', quantita: 3, unita: 'g' },
      { nome: 'Paprika', quantita: 3, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'facile',
    kcal: 200,
    note: 'Ricco di vitamine, basso di calorie',
  },
  {
    id: '10',
    nome: 'Orata al forno con pomodori',
    ingredienti: [
      { nome: 'Orata', quantita: 400, unita: 'g' },
      { nome: 'Pomodori', quantita: 300, unita: 'g' },
      { nome: 'Cipolla', quantita: 100, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 380,
    note: 'Pesce delicato e magro',
  },
  {
    id: '11',
    nome: 'Pasta di lenticchie con verdure',
    ingredienti: [
      { nome: 'Pasta di lenticchie', quantita: 80, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Sedano', quantita: 100, unita: 'g' },
      { nome: 'Pomodori', quantita: 200, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 400,
    note: 'Ricca di proteine e fibre vegetali',
  },
  {
    id: '12',
    nome: 'Pesce spada alla griglia con limone',
    ingredienti: [
      { nome: 'Pesce spada', quantita: 400, unita: 'g' },
      { nome: 'Limone', quantita: 2, unita: 'pz' },
      { nome: 'Rosmarino fresco', quantita: 10, unita: 'g' },
      { nome: 'Aglio', quantita: 10, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 25,
    difficolta: 'facile',
    kcal: 420,
    note: 'Pesce grasso ricco di omega-3',
  },
  {
    id: '13',
    nome: 'Minestrone di verdure',
    ingredienti: [
      { nome: 'Zucchine', quantita: 150, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Cavolo', quantita: 150, unita: 'g' },
      { nome: 'Pomodori', quantita: 200, unita: 'g' },
      { nome: 'Brodo vegetale', quantita: 500, unita: 'ml' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 40,
    difficolta: 'facile',
    kcal: 220,
    note: 'Perfetto per una cena leggera',
  },
  {
    id: '14',
    nome: 'Cozze al vapore con vino bianco',
    ingredienti: [
      { nome: 'Cozze', quantita: 500, unita: 'g' },
      { nome: 'Vino bianco secco', quantita: 100, unita: 'ml' },
      { nome: 'Aglio', quantita: 15, unita: 'g' },
      { nome: 'Prezzemolo fresco', quantita: 15, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 20, unita: 'ml' },
    ],
    tempo: 20,
    difficolta: 'media',
    kcal: 180,
    note: 'Ricche di ferro e zinco',
  },
  {
    id: '15',
    nome: 'Spigola al sale con verdure',
    ingredienti: [
      { nome: 'Spigola', quantita: 600, unita: 'g' },
      { nome: 'Sale grosso', quantita: 500, unita: 'g' },
      { nome: 'Limone', quantita: 2, unita: 'pz' },
      { nome: 'Zucchine', quantita: 200, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 40,
    difficolta: 'media',
    kcal: 420,
    note: 'Pesce pregiato e delicato',
  },
  {
    id: '16',
    nome: 'Insalata di quinoa con verdure',
    ingredienti: [
      { nome: 'Quinoa', quantita: 80, unita: 'g' },
      { nome: 'Pomodori', quantita: 150, unita: 'g' },
      { nome: 'Cetriolo', quantita: 150, unita: 'g' },
      { nome: 'Peperoni', quantita: 150, unita: 'g' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 380,
    note: 'Senza riso, proteina completa vegetale',
  },
  {
    id: '17',
    nome: 'Sgombro al forno con pomodori',
    ingredienti: [
      { nome: 'Sgombro', quantita: 400, unita: 'g' },
      { nome: 'Pomodori ciliegini', quantita: 250, unita: 'g' },
      { nome: 'Cipolla rossa', quantita: 80, unita: 'g' },
      { nome: 'Olive nere', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 30,
    difficolta: 'facile',
    kcal: 480,
    note: 'Pesce azzurro ricchissimo di omega-3',
  },
  {
    id: '18',
    nome: 'Zuppa di verdure con orzo',
    ingredienti: [
      { nome: 'Orzo perlato', quantita: 80, unita: 'g' },
      { nome: 'Carote', quantita: 150, unita: 'g' },
      { nome: 'Zucchine', quantita: 150, unita: 'g' },
      { nome: 'Sedano', quantita: 100, unita: 'g' },
      { nome: 'Brodo vegetale', quantita: 600, unita: 'ml' },
      { nome: 'Olio d\'oliva', quantita: 25, unita: 'ml' },
    ],
    tempo: 35,
    difficolta: 'facile',
    kcal: 320,
    note: 'Calda e nutriente, senza riso',
  },
  {
    id: '19',
    nome: 'Tonno in scatola con insalata',
    ingredienti: [
      { nome: 'Tonno in scatola', quantita: 160, unita: 'g' },
      { nome: 'Lattuga', quantita: 200, unita: 'g' },
      { nome: 'Pomodori', quantita: 150, unita: 'g' },
      { nome: 'Cipolla rossa', quantita: 50, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 30, unita: 'ml' },
    ],
    tempo: 10,
    difficolta: 'facile',
    kcal: 320,
    note: 'Veloce e pratica',
  },
  {
    id: '20',
    nome: 'Melanzane alla parmigiana',
    ingredienti: [
      { nome: 'Melanzane', quantita: 800, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Mozzarella', quantita: 200, unita: 'g' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g' },
      { nome: 'Olio d\'oliva', quantita: 50, unita: 'ml' },
    ],
    tempo: 60,
    difficolta: 'media',
    kcal: 380,
    note: 'Ricetta classica vegetariana',
  },
];
