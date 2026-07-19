export type ExerciseKind = 'Přímá zájmena' | 'Nepřímá zájmena' | 'Kombinovaná zájmena';

export type Exercise = {
  id: string;
  kind: ExerciseKind;
  sentence: string;
  task: string;
  options: [string, string, string];
  correct: number;
  explanation: string;
};

export type ExerciseSet = {
  id: string;
  number: number;
  title: string;
  description: string;
  questions: Exercise[];
};

const q = (
  id: string,
  kind: ExerciseKind,
  sentence: string,
  task: string,
  options: [string, string, string],
  correct: number,
  explanation: string,
): Exercise => ({ id, kind, sentence, task, options, correct, explanation });

export const exerciseSets: ExerciseSet[] = [
  {
    id: 'direct-singular', number: 1, title: 'Přímá zájmena I', description: 'Jednotné číslo: lo a la',
    questions: [
      q('1-1', 'Přímá zájmena', 'Vedo Marco ogni mattina.', 'Nahraď „Marco“ zájmenem.', ['Gli vedo ogni mattina.', 'Lo vedo ogni mattina.', 'La vedo ogni mattina.'], 1, 'Marco je přímý předmět mužského rodu v jednotném čísle → lo.'),
      q('1-2', 'Přímá zájmena', 'Compro la rivista in stazione.', 'Nahraď „la rivista“ zájmenem.', ['La compro in stazione.', 'Le compro in stazione.', 'Lo compro in stazione.'], 0, 'La rivista je ženský rod jednotného čísla → la.'),
      q('1-3', 'Přímá zájmena', 'Conosci Paolo da molto tempo?', 'Nahraď „Paolo“ zájmenem.', ['Le conosci da molto tempo?', 'La conosci da molto tempo?', 'Lo conosci da molto tempo?'], 2, 'Paolo je přímý předmět mužského rodu → lo.'),
      q('1-4', 'Přímá zájmena', 'Anna prepara la cena alle sette.', 'Nahraď „la cena“ zájmenem.', ['Anna lo prepara alle sette.', 'Anna la prepara alle sette.', 'Anna le prepara alle sette.'], 1, 'La cena je ženský rod jednotného čísla → la.'),
      q('1-5', 'Přímá zájmena', 'Cerchiamo il dizionario.', 'Nahraď „il dizionario“ zájmenem.', ['Lo cerchiamo.', 'Gli cerchiamo.', 'Li cerchiamo.'], 0, 'Il dizionario je mužský rod jednotného čísla → lo.'),
      q('1-6', 'Přímá zájmena', 'Invitate Francesca alla festa?', 'Nahraď „Francesca“ zájmenem.', ['Lo invitate alla festa?', 'Le invitate alla festa?', 'La invitate alla festa?'], 2, 'Francesca je přímý předmět ženského rodu → la.'),
      q('1-7', 'Přímá zájmena', 'Luca apre la finestra.', 'Nahraď „la finestra“ zájmenem.', ['Luca le apre.', 'Luca la apre.', 'Luca lo apre.'], 1, 'La finestra je ženský rod jednotného čísla → la.'),
      q('1-8', 'Přímá zájmena', 'Ascolto il professore con attenzione.', 'Nahraď „il professore“ zájmenem.', ['Lo ascolto con attenzione.', 'Gli ascolto con attenzione.', 'La ascolto con attenzione.'], 0, 'Ascoltare má přímý předmět; il professore → lo.'),
      q('1-9', 'Přímá zájmena', 'Sara chiama sua madre ogni sera.', 'Nahraď „sua madre“ zájmenem.', ['Sara le chiama ogni sera.', 'Sara lo chiama ogni sera.', 'Sara la chiama ogni sera.'], 2, 'Sua madre je přímý předmět ženského rodu → la.'),
      q('1-10', 'Přímá zájmena', 'Prendo il treno delle otto.', 'Nahraď „il treno delle otto“ zájmenem.', ['Gli prendo.', 'Lo prendo.', 'La prendo.'], 1, 'Il treno delle otto je mužský rod jednotného čísla → lo.'),
    ],
  },
  {
    id: 'direct-plural', number: 2, title: 'Přímá zájmena II', description: 'Množné číslo: li a le',
    questions: [
      q('2-1', 'Přímá zájmena', 'Leggo i giornali al bar.', 'Nahraď „i giornali“ zájmenem.', ['Li leggo al bar.', 'Gli leggo al bar.', 'Le leggo al bar.'], 0, 'I giornali je mužský rod množného čísla → li.'),
      q('2-2', 'Přímá zájmena', 'Marta lava le camicie.', 'Nahraď „le camicie“ zájmenem.', ['Marta li lava.', 'Marta le lava.', 'Marta la lava.'], 1, 'Le camicie je ženský rod množného čísla → le.'),
      q('2-3', 'Přímá zájmena', 'Aspettiamo Paolo e Andrea davanti al cinema.', 'Nahraď „Paolo e Andrea“ zájmenem.', ['Le aspettiamo davanti al cinema.', 'Gli aspettiamo davanti al cinema.', 'Li aspettiamo davanti al cinema.'], 2, 'Dvě mužské osoby jako přímý předmět → li.'),
      q('2-4', 'Přímá zájmena', 'Compri le mele al mercato?', 'Nahraď „le mele“ zájmenem.', ['Le compri al mercato?', 'Li compri al mercato?', 'La compri al mercato?'], 0, 'Le mele je ženský rod množného čísla → le.'),
      q('2-5', 'Přímá zájmena', 'Vediamo i nostri amici sabato.', 'Nahraď „i nostri amici“ zájmenem.', ['Gli vediamo sabato.', 'Li vediamo sabato.', 'Le vediamo sabato.'], 1, 'I nostri amici je mužský rod množného čísla → li.'),
      q('2-6', 'Přímá zájmena', 'Il cuoco prepara le verdure.', 'Nahraď „le verdure“ zájmenem.', ['Il cuoco li prepara.', 'Il cuoco la prepara.', 'Il cuoco le prepara.'], 2, 'Le verdure je ženský rod množného čísla → le.'),
      q('2-7', 'Přímá zájmena', 'Portate i documenti in ufficio.', 'Nahraď „i documenti“ zájmenem.', ['Li portate in ufficio.', 'Gli portate in ufficio.', 'Le portate in ufficio.'], 0, 'I documenti je mužský rod množného čísla → li.'),
      q('2-8', 'Přímá zájmena', 'Conosco Anna e Lucia molto bene.', 'Nahraď „Anna e Lucia“ zájmenem.', ['Li conosco molto bene.', 'Le conosco molto bene.', 'Gli conosco molto bene.'], 1, 'Dvě ženské osoby jako přímý předmět → le.'),
      q('2-9', 'Přímá zájmena', 'Mettiamo i bicchieri sul tavolo.', 'Nahraď „i bicchieri“ zájmenem.', ['Gli mettiamo sul tavolo.', 'Le mettiamo sul tavolo.', 'Li mettiamo sul tavolo.'], 2, 'I bicchieri je mužský rod množného čísla → li.'),
      q('2-10', 'Přímá zájmena', 'Chiara invita le colleghe a cena.', 'Nahraď „le colleghe“ zájmenem.', ['Chiara le invita a cena.', 'Chiara li invita a cena.', 'Chiara gli invita a cena.'], 0, 'Le colleghe je ženský rod množného čísla → le.'),
    ],
  },
  {
    id: 'direct-review', number: 3, title: 'Přímá zájmena III', description: 'Lo, la, li a le dohromady',
    questions: [
      q('3-1', 'Přímá zájmena', 'Bevo il caffè senza zucchero.', 'Nahraď „il caffè“ zájmenem.', ['La bevo senza zucchero.', 'Lo bevo senza zucchero.', 'Gli bevo senza zucchero.'], 1, 'Il caffè je mužský rod jednotného čísla → lo.'),
      q('3-2', 'Přímá zájmena', 'Gianni fotografa le montagne.', 'Nahraď „le montagne“ zájmenem.', ['Gianni le fotografa.', 'Gianni li fotografa.', 'Gianni la fotografa.'], 0, 'Le montagne je ženský rod množného čísla → le.'),
      q('3-3', 'Přímá zájmena', 'Accompagno Elena alla stazione.', 'Nahraď „Elena“ zájmenem.', ['Le accompagno alla stazione.', 'Lo accompagno alla stazione.', 'La accompagno alla stazione.'], 2, 'Elena je přímý předmět ženského rodu → la.'),
      q('3-4', 'Přímá zájmena', 'I bambini guardano i cartoni animati.', 'Nahraď „i cartoni animati“ zájmenem.', ['I bambini gli guardano.', 'I bambini li guardano.', 'I bambini le guardano.'], 1, 'I cartoni animati je mužský rod množného čísla → li.'),
      q('3-5', 'Přímá zájmena', 'Puliamo la cucina dopo pranzo.', 'Nahraď „la cucina“ zájmenem.', ['La puliamo dopo pranzo.', 'Le puliamo dopo pranzo.', 'Lo puliamo dopo pranzo.'], 0, 'La cucina je ženský rod jednotného čísla → la.'),
      q('3-6', 'Přímá zájmena', 'Roberto vende il motorino.', 'Nahraď „il motorino“ zájmenem.', ['Roberto gli vende.', 'Roberto la vende.', 'Roberto lo vende.'], 2, 'Il motorino je mužský rod jednotného čísla → lo.'),
      q('3-7', 'Přímá zájmena', 'Salutiamo le nostre vicine.', 'Nahraď „le nostre vicine“ zájmenem.', ['Li salutiamo.', 'Le salutiamo.', 'Gli salutiamo.'], 1, 'Le nostre vicine je ženský rod množného čísla → le.'),
      q('3-8', 'Přímá zájmena', 'Il cane segue Carlo ovunque.', 'Nahraď „Carlo“ zájmenem.', ['Il cane lo segue ovunque.', 'Il cane gli segue ovunque.', 'Il cane la segue ovunque.'], 0, 'Seguire má přímý předmět; Carlo → lo.'),
      q('3-9', 'Přímá zájmena', 'Scegliete le scarpe nere?', 'Nahraď „le scarpe nere“ zájmenem.', ['Li scegliete?', 'La scegliete?', 'Le scegliete?'], 2, 'Le scarpe je ženský rod množného čísla → le.'),
      q('3-10', 'Přímá zájmena', 'Il direttore riceve i clienti.', 'Nahraď „i clienti“ zájmenem.', ['Il direttore gli riceve.', 'Il direttore li riceve.', 'Il direttore le riceve.'], 1, 'I clienti jsou přímý předmět mužského rodu v množném čísle → li.'),
    ],
  },
  {
    id: 'indirect-singular', number: 4, title: 'Nepřímá zájmena I', description: 'Příjemce: gli a le',
    questions: [
      q('4-1', 'Nepřímá zájmena', 'Telefono a Marco dopo cena.', 'Nahraď „a Marco“ zájmenem.', ['Lo telefono dopo cena.', 'Gli telefono dopo cena.', 'Le telefono dopo cena.'], 1, 'Telefonare a qualcuno vyžaduje nepřímý předmět; a Marco → gli.'),
      q('4-2', 'Nepřímá zájmena', 'Scrivo a Giulia ogni settimana.', 'Nahraď „a Giulia“ zájmenem.', ['Le scrivo ogni settimana.', 'La scrivo ogni settimana.', 'Gli scrivo ogni settimana.'], 0, 'A Giulia je nepřímý předmět ženského rodu → le.'),
      q('4-3', 'Nepřímá zájmena', 'Regaliamo un libro a Paolo.', 'Nahraď „a Paolo“ zájmenem.', ['Lo regaliamo un libro.', 'Le regaliamo un libro.', 'Gli regaliamo un libro.'], 2, 'Příjemce a Paolo je mužského rodu → gli.'),
      q('4-4', 'Nepřímá zájmena', 'Racconti la storia a tua nonna?', 'Nahraď „a tua nonna“ zájmenem.', ['Le racconti la storia?', 'La racconti la storia?', 'Gli racconti la storia?'], 0, 'A tua nonna je nepřímý předmět ženského rodu → le.'),
      q('4-5', 'Nepřímá zájmena', 'Il cameriere porta il menù al cliente.', 'Nahraď „al cliente“ zájmenem.', ['Il cameriere lo porta il menù.', 'Il cameriere gli porta il menù.', 'Il cameriere le porta il menù.'], 1, 'Al cliente označuje mužského příjemce → gli.'),
      q('4-6', 'Nepřímá zájmena', 'Chiediamo un consiglio alla professoressa.', 'Nahraď „alla professoressa“ zájmenem.', ['Gli chiediamo un consiglio.', 'La chiediamo un consiglio.', 'Le chiediamo un consiglio.'], 2, 'Alla professoressa je ženský nepřímý předmět → le.'),
      q('4-7', 'Nepřímá zájmena', 'Mando una cartolina a mio padre.', 'Nahraď „a mio padre“ zájmenem.', ['Gli mando una cartolina.', 'Lo mando una cartolina.', 'Le mando una cartolina.'], 0, 'A mio padre je mužský nepřímý předmět → gli.'),
      q('4-8', 'Nepřímá zájmena', 'Maria presta la bicicletta a Laura.', 'Nahraď „a Laura“ zájmenem.', ['Maria la presta la bicicletta.', 'Maria le presta la bicicletta.', 'Maria gli presta la bicicletta.'], 1, 'A Laura je ženský nepřímý předmět → le.'),
      q('4-9', 'Nepřímá zájmena', 'Spiego il problema a Luca.', 'Nahraď „a Luca“ zájmenem.', ['Lo spiego il problema.', 'Le spiego il problema.', 'Gli spiego il problema.'], 2, 'A Luca je mužský nepřímý předmět → gli.'),
      q('4-10', 'Nepřímá zájmena', 'Offrite un caffè a Sara?', 'Nahraď „a Sara“ zájmenem.', ['Le offrite un caffè?', 'La offrite un caffè?', 'Gli offrite un caffè?'], 0, 'A Sara je ženský nepřímý předmět → le.'),
    ],
  },
  {
    id: 'indirect-verbs', number: 5, title: 'Nepřímá zájmena II', description: 'Slovesa s předložkou a',
    questions: [
      q('5-1', 'Nepřímá zájmena', 'Rispondo al direttore subito.', 'Nahraď „al direttore“ zájmenem.', ['Lo rispondo subito.', 'Gli rispondo subito.', 'Le rispondo subito.'], 1, 'Rispondere a qualcuno: al direttore → gli.'),
      q('5-2', 'Nepřímá zájmena', 'La musica piace a Chiara.', 'Nahraď „a Chiara“ zájmenem.', ['Le piace la musica.', 'La piace la musica.', 'Gli piace la musica.'], 0, 'Osoba, které se něco líbí, je nepřímý předmět; a Chiara → le.'),
      q('5-3', 'Nepřímá zájmena', 'Obbediamo al professore.', 'Nahraď „al professore“ zájmenem.', ['Lo obbediamo.', 'Le obbediamo.', 'Gli obbediamo.'], 2, 'Obbedire a qualcuno: al professore → gli.'),
      q('5-4', 'Nepřímá zájmena', 'Faccio una domanda ad Alessandra.', 'Nahraď „ad Alessandra“ zájmenem.', ['Le faccio una domanda.', 'La faccio una domanda.', 'Gli faccio una domanda.'], 0, 'Ad Alessandra je ženský nepřímý předmět → le.'),
      q('5-5', 'Nepřímá zájmena', 'Il medico consiglia il riposo a Roberto.', 'Nahraď „a Roberto“ zájmenem.', ['Il medico lo consiglia il riposo.', 'Il medico gli consiglia il riposo.', 'Il medico le consiglia il riposo.'], 1, 'A Roberto označuje osobu, které lékař radí → gli.'),
      q('5-6', 'Nepřímá zájmena', 'Promettiamo puntualità a Elena.', 'Nahraď „a Elena“ zájmenem.', ['Gli promettiamo puntualità.', 'La promettiamo puntualità.', 'Le promettiamo puntualità.'], 2, 'Promettere qualcosa a qualcuno: a Elena → le.'),
      q('5-7', 'Nepřímá zájmena', 'Questo vestito sta bene a Marta.', 'Nahraď „a Marta“ zájmenem.', ['Le sta bene questo vestito.', 'La sta bene questo vestito.', 'Gli sta bene questo vestito.'], 0, 'Stare bene a qualcuno: a Marta → le.'),
      q('5-8', 'Nepřímá zájmena', 'Insegno l’italiano a Pietro.', 'Nahraď „a Pietro“ zájmenem.', ['Lo insegno l’italiano.', 'Gli insegno l’italiano.', 'Le insegno l’italiano.'], 1, 'A Pietro je mužský nepřímý předmět → gli.'),
      q('5-9', 'Nepřímá zájmena', 'Augurate buon viaggio a Lucia?', 'Nahraď „a Lucia“ zájmenem.', ['Gli augurate buon viaggio?', 'La augurate buon viaggio?', 'Le augurate buon viaggio?'], 2, 'Augurare qualcosa a qualcuno: a Lucia → le.'),
      q('5-10', 'Nepřímá zájmena', 'Il film sembra interessante a Davide.', 'Nahraď „a Davide“ zájmenem.', ['Gli sembra interessante il film.', 'Lo sembra interessante il film.', 'Le sembra interessante il film.'], 0, 'A Davide je osoba, které film připadá zajímavý → gli.'),
    ],
  },
  {
    id: 'indirect-review', number: 6, title: 'Nepřímá zájmena III', description: 'Gli a le v různých větách',
    questions: [
      q('6-1', 'Nepřímá zájmena', 'Consegno il pacco al signor Bianchi.', 'Nahraď „al signor Bianchi“ zájmenem.', ['Lo consegno il pacco.', 'Gli consegno il pacco.', 'Le consegno il pacco.'], 1, 'Al signor Bianchi je mužský nepřímý předmět → gli.'),
      q('6-2', 'Nepřímá zájmena', 'Leggo la lettera a Sofia.', 'Nahraď „a Sofia“ zájmenem.', ['Le leggo la lettera.', 'La leggo la lettera.', 'Gli leggo la lettera.'], 0, 'A Sofia označuje ženského příjemce → le.'),
      q('6-3', 'Nepřímá zájmena', 'Il nonno racconta una fiaba a Matteo.', 'Nahraď „a Matteo“ zájmenem.', ['Il nonno lo racconta una fiaba.', 'Il nonno le racconta una fiaba.', 'Il nonno gli racconta una fiaba.'], 2, 'A Matteo je mužský nepřímý předmět → gli.'),
      q('6-4', 'Nepřímá zájmena', 'Prepariamo una sorpresa per Anna.', 'Nahraď „per Anna“ nepřímým zájmenem ve významu příjemce.', ['Le prepariamo una sorpresa.', 'La prepariamo una sorpresa.', 'Gli prepariamo una sorpresa.'], 0, 'Anna je ženský příjemce; v zájmenné podobě použijeme le.'),
      q('6-5', 'Nepřímá zájmena', 'Mostro le fotografie a mio fratello.', 'Nahraď „a mio fratello“ zájmenem.', ['Lo mostro le fotografie.', 'Gli mostro le fotografie.', 'Le mostro le fotografie.'], 1, 'A mio fratello je mužský nepřímý předmět → gli.'),
      q('6-6', 'Nepřímá zájmena', 'Dite la verità alla signora?', 'Nahraď „alla signora“ zájmenem.', ['Gli dite la verità?', 'La dite la verità?', 'Le dite la verità?'], 2, 'Alla signora je ženský nepřímý předmět → le.'),
      q('6-7', 'Nepřímá zájmena', 'Compro un regalo a Stefano.', 'Nahraď „a Stefano“ zájmenem.', ['Gli compro un regalo.', 'Lo compro un regalo.', 'Le compro un regalo.'], 0, 'A Stefano označuje mužského příjemce → gli.'),
      q('6-8', 'Nepřímá zájmena', 'Paola serve la cena a sua figlia.', 'Nahraď „a sua figlia“ zájmenem.', ['Paola la serve la cena.', 'Paola le serve la cena.', 'Paola gli serve la cena.'], 1, 'A sua figlia je ženský nepřímý předmět → le.'),
      q('6-9', 'Nepřímá zájmena', 'L’allenatore dà un consiglio a Fabio.', 'Nahraď „a Fabio“ zájmenem.', ['L’allenatore lo dà un consiglio.', 'L’allenatore le dà un consiglio.', 'L’allenatore gli dà un consiglio.'], 2, 'A Fabio je mužský nepřímý předmět → gli.'),
      q('6-10', 'Nepřímá zájmena', 'La maestra spiega la regola a Beatrice.', 'Nahraď „a Beatrice“ zájmenem.', ['La maestra le spiega la regola.', 'La maestra la spiega la regola.', 'La maestra gli spiega la regola.'], 0, 'A Beatrice je ženský nepřímý předmět → le.'),
    ],
  },
  {
    id: 'combined-singular', number: 7, title: 'Kombinovaná zájmena I', description: 'Glielo a gliela',
    questions: [
      q('7-1', 'Kombinovaná zájmena', 'Do il libro a Marco.', 'Nahraď „il libro“ i „a Marco“.', ['Gli lo do.', 'Glielo do.', 'Gliela do.'], 1, 'Gli + lo se spojí do tvaru glielo.'),
      q('7-2', 'Kombinovaná zájmena', 'Porto la borsa a Giulia.', 'Nahraď „la borsa“ i „a Giulia“.', ['Gliela porto.', 'Glielo porto.', 'Le la porto.'], 0, 'Le + la se spojí do tvaru gliela.'),
      q('7-3', 'Kombinovaná zájmena', 'Prestiamo il computer a Luca.', 'Nahraď „il computer“ i „a Luca“.', ['Gliela prestiamo.', 'Gli lo prestiamo.', 'Glielo prestiamo.'], 2, 'Gli + lo → glielo.'),
      q('7-4', 'Kombinovaná zájmena', 'Spiego la situazione ad Anna.', 'Nahraď „la situazione“ i „ad Anna“.', ['Gliela spiego.', 'Glielo spiego.', 'Le la spiego.'], 0, 'Le + la → gliela.'),
      q('7-5', 'Kombinovaná zájmena', 'Il cameriere serve il vino al cliente.', 'Nahraď „il vino“ i „al cliente“.', ['Il cameriere gli lo serve.', 'Il cameriere glielo serve.', 'Il cameriere gliela serve.'], 1, 'Gli + lo → glielo.'),
      q('7-6', 'Kombinovaná zájmena', 'Raccontate la storia a Sara?', 'Nahraď „la storia“ i „a Sara“.', ['Glielo raccontate?', 'Le la raccontate?', 'Gliela raccontate?'], 2, 'Le + la → gliela.'),
      q('7-7', 'Kombinovaná zájmena', 'Mando il messaggio a Paolo.', 'Nahraď „il messaggio“ i „a Paolo“.', ['Glielo mando.', 'Gliela mando.', 'Gli lo mando.'], 0, 'Gli + lo → glielo.'),
      q('7-8', 'Kombinovaná zájmena', 'Mostriamo la casa a Elena.', 'Nahraď „la casa“ i „a Elena“.', ['Glielo mostriamo.', 'Gliela mostriamo.', 'Le la mostriamo.'], 1, 'Le + la → gliela.'),
      q('7-9', 'Kombinovaná zájmena', 'Regalo il quadro a mio padre.', 'Nahraď „il quadro“ i „a mio padre“.', ['Gliela regalo.', 'Gli lo regalo.', 'Glielo regalo.'], 2, 'Gli + lo → glielo.'),
      q('7-10', 'Kombinovaná zájmena', 'Restituisco la chiave a Marta.', 'Nahraď „la chiave“ i „a Marta“.', ['Gliela restituisco.', 'Glielo restituisco.', 'Le la restituisco.'], 0, 'Le + la → gliela.'),
    ],
  },
  {
    id: 'combined-plural', number: 8, title: 'Kombinovaná zájmena II', description: 'Glieli a gliele',
    questions: [
      q('8-1', 'Kombinovaná zájmena', 'Consegno i documenti al direttore.', 'Nahraď „i documenti“ i „al direttore“.', ['Gli li consegno.', 'Glieli consegno.', 'Gliele consegno.'], 1, 'Gli + li se spojí do tvaru glieli.'),
      q('8-2', 'Kombinovaná zájmena', 'Porto le chiavi a Laura.', 'Nahraď „le chiavi“ i „a Laura“.', ['Gliele porto.', 'Glieli porto.', 'Le le porto.'], 0, 'Le + le se spojí do tvaru gliele.'),
      q('8-3', 'Kombinovaná zájmena', 'Prestiamo i DVD a Matteo.', 'Nahraď „i DVD“ i „a Matteo“.', ['Gliele prestiamo.', 'Gli li prestiamo.', 'Glieli prestiamo.'], 2, 'Gli + li → glieli.'),
      q('8-4', 'Kombinovaná zájmena', 'Spedisco le fotografie a Chiara.', 'Nahraď „le fotografie“ i „a Chiara“.', ['Gliele spedisco.', 'Glieli spedisco.', 'Le le spedisco.'], 0, 'Le + le → gliele.'),
      q('8-5', 'Kombinovaná zájmena', 'Il professore spiega i verbi a Roberto.', 'Nahraď „i verbi“ i „a Roberto“.', ['Il professore gli li spiega.', 'Il professore glieli spiega.', 'Il professore gliele spiega.'], 1, 'Gli + li → glieli.'),
      q('8-6', 'Kombinovaná zájmena', 'Raccontate le novità a Francesca?', 'Nahraď „le novità“ i „a Francesca“.', ['Glieli raccontate?', 'Le le raccontate?', 'Gliele raccontate?'], 2, 'Le + le → gliele.'),
      q('8-7', 'Kombinovaná zájmena', 'Mando i biglietti a Stefano.', 'Nahraď „i biglietti“ i „a Stefano“.', ['Glieli mando.', 'Gliele mando.', 'Gli li mando.'], 0, 'Gli + li → glieli.'),
      q('8-8', 'Kombinovaná zájmena', 'Mostriamo le stanze ad Alessandra.', 'Nahraď „le stanze“ i „ad Alessandra“.', ['Glieli mostriamo.', 'Gliele mostriamo.', 'Le le mostriamo.'], 1, 'Le + le → gliele.'),
      q('8-9', 'Kombinovaná zájmena', 'Regalo i giocattoli a mio nipote.', 'Nahraď „i giocattoli“ i „a mio nipote“.', ['Gliele regalo.', 'Gli li regalo.', 'Glieli regalo.'], 2, 'Gli + li → glieli.'),
      q('8-10', 'Kombinovaná zájmena', 'Restituisco le valigie a Paola.', 'Nahraď „le valigie“ i „a Paola“.', ['Gliele restituisco.', 'Glieli restituisco.', 'Le le restituisco.'], 0, 'Le + le → gliele.'),
    ],
  },
  {
    id: 'combined-review', number: 9, title: 'Kombinovaná zájmena III', description: 'Všechny čtyři kombinace',
    questions: [
      q('9-1', 'Kombinovaná zájmena', 'Vendo la macchina a Giorgio.', 'Nahraď „la macchina“ i „a Giorgio“.', ['Gli la vendo.', 'Gliela vendo.', 'Glielo vendo.'], 1, 'Gli + la → gliela.'),
      q('9-2', 'Kombinovaná zájmena', 'Leggo il contratto a Silvia.', 'Nahraď „il contratto“ i „a Silvia“.', ['Glielo leggo.', 'Gliela leggo.', 'Le lo leggo.'], 0, 'Le + lo → glielo.'),
      q('9-3', 'Kombinovaná zájmena', 'Offriamo le bibite a Carlo.', 'Nahraď „le bibite“ i „a Carlo“.', ['Glieli offriamo.', 'Gli le offriamo.', 'Gliele offriamo.'], 2, 'Gli + le → gliele.'),
      q('9-4', 'Kombinovaná zájmena', 'Invio i risultati a Monica.', 'Nahraď „i risultati“ i „a Monica“.', ['Glieli invio.', 'Gliele invio.', 'Le li invio.'], 0, 'Le + li → glieli.'),
      q('9-5', 'Kombinovaná zájmena', 'Il padre compra il gelato a Tommaso.', 'Nahraď „il gelato“ i „a Tommaso“.', ['Il padre gli lo compra.', 'Il padre glielo compra.', 'Il padre gliela compra.'], 1, 'Gli + lo → glielo.'),
      q('9-6', 'Kombinovaná zájmena', 'Preparate la colazione a Lucia?', 'Nahraď „la colazione“ i „a Lucia“.', ['Glielo preparate?', 'Le la preparate?', 'Gliela preparate?'], 2, 'Le + la → gliela.'),
      q('9-7', 'Kombinovaná zájmena', 'Porto i quaderni allo studente.', 'Nahraď „i quaderni“ i „allo studente“.', ['Glieli porto.', 'Gliele porto.', 'Gli li porto.'], 0, 'Gli + li → glieli.'),
      q('9-8', 'Kombinovaná zájmena', 'Cuciniamo le lasagne per Maria.', 'Nahraď „le lasagne“ i „per Maria“ ve významu příjemce.', ['Glieli cuciniamo.', 'Gliele cuciniamo.', 'Le le cuciniamo.'], 1, 'Maria je příjemce a le lasagne nahrazuje le → gliele.'),
      q('9-9', 'Kombinovaná zájmena', 'Spiego il percorso a mia sorella.', 'Nahraď „il percorso“ i „a mia sorella“.', ['Gliela spiego.', 'Le lo spiego.', 'Glielo spiego.'], 2, 'Le + lo → glielo.'),
      q('9-10', 'Kombinovaná zájmena', 'La guida mostra la chiesa a Filippo.', 'Nahraď „la chiesa“ i „a Filippo“.', ['La guida gliela mostra.', 'La guida glielo mostra.', 'La guida gli la mostra.'], 0, 'Gli + la → gliela.'),
    ],
  },
  {
    id: 'full-review', number: 10, title: 'Závěrečné opakování', description: 'Přímá, nepřímá i kombinovaná',
    questions: [
      q('10-1', 'Přímá zájmena', 'Compriamo le arance al mercato.', 'Nahraď „le arance“ zájmenem.', ['Li compriamo al mercato.', 'Le compriamo al mercato.', 'La compriamo al mercato.'], 1, 'Le arance je ženský rod množného čísla → le.'),
      q('10-2', 'Nepřímá zájmena', 'Elisa telefona a suo zio.', 'Nahraď „a suo zio“ zájmenem.', ['Elisa gli telefona.', 'Elisa lo telefona.', 'Elisa le telefona.'], 0, 'Telefonare a qualcuno: a suo zio → gli.'),
      q('10-3', 'Kombinovaná zájmena', 'Diamo la notizia a Valentina.', 'Nahraď „la notizia“ i „a Valentina“.', ['Glielo diamo.', 'Le la diamo.', 'Gliela diamo.'], 2, 'Le + la → gliela.'),
      q('10-4', 'Přímá zájmena', 'Il turista visita il museo.', 'Nahraď „il museo“ zájmenem.', ['Il turista lo visita.', 'Il turista gli visita.', 'Il turista la visita.'], 0, 'Il museo je mužský rod jednotného čísla → lo.'),
      q('10-5', 'Nepřímá zájmena', 'Il bambino chiede aiuto alla maestra.', 'Nahraď „alla maestra“ zájmenem.', ['Il bambino la chiede aiuto.', 'Il bambino le chiede aiuto.', 'Il bambino gli chiede aiuto.'], 1, 'Alla maestra je ženský nepřímý předmět → le.'),
      q('10-6', 'Kombinovaná zájmena', 'Spedisco i moduli a Francesco.', 'Nahraď „i moduli“ i „a Francesco“.', ['Gliele spedisco.', 'Gli li spedisco.', 'Glieli spedisco.'], 2, 'Gli + li → glieli.'),
      q('10-7', 'Přímá zájmena', 'Incontro Marta in centro.', 'Nahraď „Marta“ zájmenem.', ['La incontro in centro.', 'Le incontro in centro.', 'Lo incontro in centro.'], 0, 'Marta je přímý předmět ženského rodu → la.'),
      q('10-8', 'Nepřímá zájmena', 'Portiamo dei fiori a nonno Luigi.', 'Nahraď „a nonno Luigi“ zájmenem.', ['Lo portiamo dei fiori.', 'Gli portiamo dei fiori.', 'Le portiamo dei fiori.'], 1, 'A nonno Luigi je mužský nepřímý předmět → gli.'),
      q('10-9', 'Kombinovaná zájmena', 'Mostro le foto a Teresa.', 'Nahraď „le foto“ i „a Teresa“.', ['Glieli mostro.', 'Le le mostro.', 'Gliele mostro.'], 2, 'Le + le → gliele.'),
      q('10-10', 'Přímá zájmena', 'Gli studenti ascoltano la lezione.', 'Nahraď „la lezione“ zájmenem.', ['Gli studenti la ascoltano.', 'Gli studenti le ascoltano.', 'Gli studenti lo ascoltano.'], 0, 'La lezione je ženský rod jednotného čísla → la.'),
    ],
  },
];

export const getExerciseSet = (id: string): ExerciseSet | undefined =>
  exerciseSets.find((set) => set.id === id);
