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
    id: 'direct-singular', number: 1, title: 'Přímá zájmena I', description: 'Mi, ti, lo a la',
    questions: [
      q('1-1', 'Přímá zájmena', 'Marco vede Anna ogni mattina.', 'Nahraď „Anna“ zájmenem. Mluvčí je Anna.', ['Marco mi vede ogni mattina.', 'Marco ti vede ogni mattina.', 'Marco la vede ogni mattina.'], 0, 'Mluvčí mluví o sobě, proto Anna v 1. osobě → mi.'),
      q('1-2', 'Přímá zájmena', 'Compro la rivista in stazione.', 'Nahraď „la rivista“ zájmenem.', ['La compro in stazione.', 'Le compro in stazione.', 'Lo compro in stazione.'], 0, 'La rivista je ženský rod jednotného čísla → la.'),
      q('1-3', 'Přímá zájmena', 'Laura conosce Paolo da molto tempo.', 'Nahraď „Paolo“ zájmenem. Ty jsi Paolo.', ['Laura lo conosce da molto tempo.', 'Laura mi conosce da molto tempo.', 'Laura ti conosce da molto tempo.'], 2, 'Adresátem je Paolo, proto 2. osoba jednotného čísla → ti.'),
      q('1-4', 'Přímá zájmena', 'Anna prepara la cena alle sette.', 'Nahraď „la cena“ zájmenem.', ['Anna lo prepara alle sette.', 'Anna la prepara alle sette.', 'Anna le prepara alle sette.'], 1, 'La cena je ženský rod jednotného čísla → la.'),
      q('1-5', 'Přímá zájmena', 'Cerchiamo il dizionario.', 'Nahraď „il dizionario“ zájmenem.', ['Lo cerchiamo.', 'Gli cerchiamo.', 'Li cerchiamo.'], 0, 'Il dizionario je mužský rod jednotného čísla → lo.'),
      q('1-6', 'Přímá zájmena', 'Invitate Francesca alla festa?', 'Nahraď „Francesca“ zájmenem. Mluvčí je Francesca.', ['Mi invitate alla festa?', 'La invitate alla festa?', 'Ti invitate alla festa?'], 0, 'Mluvčí je Francesca, proto použije 1. osobu → mi.'),
      q('1-7', 'Přímá zájmena', 'Luca apre la finestra.', 'Nahraď „la finestra“ zájmenem.', ['Luca le apre.', 'Luca la apre.', 'Luca lo apre.'], 1, 'La finestra je ženský rod jednotného čísla → la.'),
      q('1-8', 'Přímá zájmena', 'Ascolto il professore con attenzione.', 'Nahraď „il professore“ zájmenem.', ['Lo ascolto con attenzione.', 'Gli ascolto con attenzione.', 'La ascolto con attenzione.'], 0, 'Ascoltare má přímý předmět; il professore → lo.'),
      q('1-9', 'Přímá zájmena', 'Sara chiama sua madre ogni sera.', 'Nahraď „sua madre“ zájmenem. Ty jsi její matka.', ['Sara la chiama ogni sera.', 'Sara mi chiama ogni sera.', 'Sara ti chiama ogni sera.'], 2, 'Adresát je matka, o které se mluví, proto použijeme ti.'),
      q('1-10', 'Přímá zájmena', 'Prendo il treno delle otto.', 'Nahraď „il treno delle otto“ zájmenem.', ['Gli prendo.', 'Lo prendo.', 'La prendo.'], 1, 'Il treno delle otto je mužský rod jednotného čísla → lo.'),
    ],
  },
  {
    id: 'direct-plural', number: 2, title: 'Přímá zájmena II', description: 'Ci, vi, li a le',
    questions: [
      q('2-1', 'Přímá zájmena', 'Leggo i giornali al bar.', 'Nahraď „i giornali“ zájmenem.', ['Li leggo al bar.', 'Gli leggo al bar.', 'Le leggo al bar.'], 0, 'I giornali je mužský rod množného čísla → li.'),
      q('2-2', 'Přímá zájmena', 'Marta lava le camicie.', 'Nahraď „le camicie“ zájmenem.', ['Marta li lava.', 'Marta le lava.', 'Marta la lava.'], 1, 'Le camicie je ženský rod množného čísla → le.'),
      q('2-3', 'Přímá zájmena', 'Luca aspetta Paolo e Andrea davanti al cinema.', 'Nahraď „Paolo e Andrea“ zájmenem. Mluvčí je Paolo.', ['Luca li aspetta davanti al cinema.', 'Luca ci aspetta davanti al cinema.', 'Luca vi aspetta davanti al cinema.'], 1, 'Mluvčí patří do skupiny Paolo a Andrea, proto 1. osoba množného čísla → ci.'),
      q('2-4', 'Přímá zájmena', 'Compri le mele al mercato?', 'Nahraď „le mele“ zájmenem.', ['Le compri al mercato?', 'Li compri al mercato?', 'La compri al mercato?'], 0, 'Le mele je ženský rod množného čísla → le.'),
      q('2-5', 'Přímá zájmena', 'Laura vede Marco e Davide sabato.', 'Nahraď „Marco e Davide“ zájmenem. Ty jsi Marco.', ['Laura li vede sabato.', 'Laura ci vede sabato.', 'Laura vi vede sabato.'], 2, 'Adresát patří do skupiny Marco a Davide, proto 2. osoba množného čísla → vi.'),
      q('2-6', 'Přímá zájmena', 'Il cuoco prepara le verdure.', 'Nahraď „le verdure“ zájmenem.', ['Il cuoco li prepara.', 'Il cuoco la prepara.', 'Il cuoco le prepara.'], 2, 'Le verdure je ženský rod množného čísla → le.'),
      q('2-7', 'Přímá zájmena', 'Portate i documenti in ufficio.', 'Nahraď „i documenti“ zájmenem.', ['Li portate in ufficio.', 'Gli portate in ufficio.', 'Le portate in ufficio.'], 0, 'I documenti je mužský rod množného čísla → li.'),
      q('2-8', 'Přímá zájmena', 'Carlo conosce Anna e Lucia molto bene.', 'Nahraď „Anna e Lucia“ zájmenem. Mluvčí je Anna.', ['Carlo le conosce molto bene.', 'Carlo ci conosce molto bene.', 'Carlo vi conosce molto bene.'], 1, 'Mluvčí patří do jmenované skupiny, proto použije ci.'),
      q('2-9', 'Přímá zájmena', 'Mettiamo i bicchieri sul tavolo.', 'Nahraď „i bicchieri“ zájmenem.', ['Gli mettiamo sul tavolo.', 'Le mettiamo sul tavolo.', 'Li mettiamo sul tavolo.'], 2, 'I bicchieri je mužský rod množného čísla → li.'),
      q('2-10', 'Přímá zájmena', 'Chiara invita le colleghe a cena.', 'Nahraď „le colleghe“ zájmenem. Ty jsi jedna z kolegyň.', ['Chiara le invita a cena.', 'Chiara ci invita a cena.', 'Chiara vi invita a cena.'], 2, 'Adresát patří mezi kolegyně, proto použijeme vi.'),
    ],
  },
  {
    id: 'direct-review', number: 3, title: 'Přímá zájmena III', description: 'Všechny osoby dohromady',
    questions: [
      q('3-1', 'Přímá zájmena', 'Bevo il caffè senza zucchero.', 'Nahraď „il caffè“ zájmenem.', ['La bevo senza zucchero.', 'Lo bevo senza zucchero.', 'Gli bevo senza zucchero.'], 1, 'Il caffè je mužský rod jednotného čísla → lo.'),
      q('3-2', 'Přímá zájmena', 'Gianni fotografa le montagne.', 'Nahraď „le montagne“ zájmenem.', ['Gianni le fotografa.', 'Gianni li fotografa.', 'Gianni la fotografa.'], 0, 'Le montagne je ženský rod množného čísla → le.'),
      q('3-3', 'Přímá zájmena', 'Paolo accompagna Elena alla stazione.', 'Nahraď „Elena“ zájmenem. Mluvčí je Elena.', ['Paolo la accompagna alla stazione.', 'Paolo ti accompagna alla stazione.', 'Paolo mi accompagna alla stazione.'], 2, 'Mluvčí je Elena, proto použije mi.'),
      q('3-4', 'Přímá zájmena', 'I bambini guardano i cartoni animati.', 'Nahraď „i cartoni animati“ zájmenem.', ['I bambini gli guardano.', 'I bambini li guardano.', 'I bambini le guardano.'], 1, 'I cartoni animati je mužský rod množného čísla → li.'),
      q('3-5', 'Přímá zájmena', 'Puliamo la cucina dopo pranzo.', 'Nahraď „la cucina“ zájmenem.', ['La puliamo dopo pranzo.', 'Le puliamo dopo pranzo.', 'Lo puliamo dopo pranzo.'], 0, 'La cucina je ženský rod jednotného čísla → la.'),
      q('3-6', 'Přímá zájmena', 'Roberto vende il motorino.', 'Nahraď „il motorino“ zájmenem.', ['Roberto gli vende.', 'Roberto la vende.', 'Roberto lo vende.'], 2, 'Il motorino je mužský rod jednotného čísla → lo.'),
      q('3-7', 'Přímá zájmena', 'I ragazzi salutano le nuove vicine.', 'Nahraď „le nuove vicine“ zájmenem. Ty jsi jedna z nich.', ['I ragazzi le salutano.', 'I ragazzi vi salutano.', 'I ragazzi ci salutano.'], 1, 'Adresát patří mezi nové sousedky, proto použijeme vi.'),
      q('3-8', 'Přímá zájmena', 'Il cane segue Carlo ovunque.', 'Nahraď „Carlo“ zájmenem. Ty jsi Carlo.', ['Il cane lo segue ovunque.', 'Il cane ti segue ovunque.', 'Il cane mi segue ovunque.'], 1, 'Adresát je Carlo, proto použijeme ti.'),
      q('3-9', 'Přímá zájmena', 'Scegliete le scarpe nere?', 'Nahraď „le scarpe nere“ zájmenem.', ['Li scegliete?', 'La scegliete?', 'Le scegliete?'], 2, 'Le scarpe je ženský rod množného čísla → le.'),
      q('3-10', 'Přímá zájmena', 'Il direttore riceve Anna e Marco.', 'Nahraď „Anna e Marco“ zájmenem. Mluvčí je Marco.', ['Il direttore li riceve.', 'Il direttore vi riceve.', 'Il direttore ci riceve.'], 2, 'Mluvčí patří mezi přijímané osoby, proto použije ci.'),
    ],
  },
  {
    id: 'indirect-singular', number: 4, title: 'Nepřímá zájmena I', description: 'Mi, ti, gli a le',
    questions: [
      q('4-1', 'Nepřímá zájmena', 'Giulia telefona a Marco dopo cena.', 'Nahraď „a Marco“ zájmenem. Mluvčí je Marco.', ['Giulia gli telefona dopo cena.', 'Giulia mi telefona dopo cena.', 'Giulia ti telefona dopo cena.'], 1, 'Mluvčí je příjemcem hovoru, proto použije mi.'),
      q('4-2', 'Nepřímá zájmena', 'Luca scrive a Giulia ogni settimana.', 'Nahraď „a Giulia“ zájmenem. Ty jsi Giulia.', ['Luca le scrive ogni settimana.', 'Luca ti scrive ogni settimana.', 'Luca mi scrive ogni settimana.'], 1, 'Adresát je Giulia, proto použijeme ti.'),
      q('4-3', 'Nepřímá zájmena', 'Regaliamo un libro a Paolo.', 'Nahraď „a Paolo“ zájmenem.', ['Lo regaliamo un libro.', 'Le regaliamo un libro.', 'Gli regaliamo un libro.'], 2, 'Příjemce a Paolo je mužského rodu → gli.'),
      q('4-4', 'Nepřímá zájmena', 'Racconti la storia a tua nonna?', 'Nahraď „a tua nonna“ zájmenem.', ['Le racconti la storia?', 'La racconti la storia?', 'Gli racconti la storia?'], 0, 'A tua nonna je nepřímý předmět ženského rodu → le.'),
      q('4-5', 'Nepřímá zájmena', 'Il cameriere porta il menù al cliente.', 'Nahraď „al cliente“ zájmenem.', ['Il cameriere lo porta il menù.', 'Il cameriere gli porta il menù.', 'Il cameriere le porta il menù.'], 1, 'Al cliente označuje mužského příjemce → gli.'),
      q('4-6', 'Nepřímá zájmena', 'Chiediamo un consiglio alla professoressa.', 'Nahraď „alla professoressa“ zájmenem.', ['Gli chiediamo un consiglio.', 'La chiediamo un consiglio.', 'Le chiediamo un consiglio.'], 2, 'Alla professoressa je ženský nepřímý předmět → le.'),
      q('4-7', 'Nepřímá zájmena', 'Mia figlia manda una cartolina a suo padre.', 'Nahraď „a suo padre“ zájmenem. Mluvčí je otec.', ['Mia figlia gli manda una cartolina.', 'Mia figlia mi manda una cartolina.', 'Mia figlia ti manda una cartolina.'], 1, 'Mluvčí je otec a příjemce pohlednice, proto použije mi.'),
      q('4-8', 'Nepřímá zájmena', 'Maria presta la bicicletta a Laura.', 'Nahraď „a Laura“ zájmenem. Ty jsi Laura.', ['Maria le presta la bicicletta.', 'Maria mi presta la bicicletta.', 'Maria ti presta la bicicletta.'], 2, 'Adresát je Laura a příjemce kola, proto použijeme ti.'),
      q('4-9', 'Nepřímá zájmena', 'Spiego il problema a Luca.', 'Nahraď „a Luca“ zájmenem.', ['Lo spiego il problema.', 'Le spiego il problema.', 'Gli spiego il problema.'], 2, 'A Luca je mužský nepřímý předmět → gli.'),
      q('4-10', 'Nepřímá zájmena', 'Offrite un caffè a Sara?', 'Nahraď „a Sara“ zájmenem.', ['Le offrite un caffè?', 'La offrite un caffè?', 'Gli offrite un caffè?'], 0, 'A Sara je ženský nepřímý předmět → le.'),
    ],
  },
  {
    id: 'indirect-verbs', number: 5, title: 'Nepřímá zájmena II', description: 'Mi a ti s různými slovesy',
    questions: [
      q('5-1', 'Nepřímá zájmena', 'Rispondo al direttore subito.', 'Nahraď „al direttore“ zájmenem.', ['Lo rispondo subito.', 'Gli rispondo subito.', 'Le rispondo subito.'], 1, 'Rispondere a qualcuno: al direttore → gli.'),
      q('5-2', 'Nepřímá zájmena', 'La musica piace a Chiara.', 'Nahraď „a Chiara“ zájmenem. Mluvčí je Chiara.', ['Le piace la musica.', 'Mi piace la musica.', 'Ti piace la musica.'], 1, 'Mluvčí je osoba, které se hudba líbí, proto použije mi.'),
      q('5-3', 'Nepřímá zájmena', 'Obbediamo al professore.', 'Nahraď „al professore“ zájmenem.', ['Lo obbediamo.', 'Le obbediamo.', 'Gli obbediamo.'], 2, 'Obbedire a qualcuno: al professore → gli.'),
      q('5-4', 'Nepřímá zájmena', 'Paolo fa una domanda ad Alessandra.', 'Nahraď „ad Alessandra“ zájmenem. Ty jsi Alessandra.', ['Paolo le fa una domanda.', 'Paolo mi fa una domanda.', 'Paolo ti fa una domanda.'], 2, 'Adresát je Alessandra, proto použijeme ti.'),
      q('5-5', 'Nepřímá zájmena', 'Il medico consiglia il riposo a Roberto.', 'Nahraď „a Roberto“ zájmenem.', ['Il medico lo consiglia il riposo.', 'Il medico gli consiglia il riposo.', 'Il medico le consiglia il riposo.'], 1, 'A Roberto označuje osobu, které lékař radí → gli.'),
      q('5-6', 'Nepřímá zájmena', 'Promettiamo puntualità a Elena.', 'Nahraď „a Elena“ zájmenem.', ['Gli promettiamo puntualità.', 'La promettiamo puntualità.', 'Le promettiamo puntualità.'], 2, 'Promettere qualcosa a qualcuno: a Elena → le.'),
      q('5-7', 'Nepřímá zájmena', 'Questo vestito sta bene a Marta.', 'Nahraď „a Marta“ zájmenem. Mluvčí je Marta.', ['Le sta bene questo vestito.', 'Mi sta bene questo vestito.', 'Ti sta bene questo vestito.'], 1, 'Mluvčí je Marta, které šaty sluší, proto použije mi.'),
      q('5-8', 'Nepřímá zájmena', 'Elena insegna l’italiano a Pietro.', 'Nahraď „a Pietro“ zájmenem. Ty jsi Pietro.', ['Elena gli insegna l’italiano.', 'Elena ti insegna l’italiano.', 'Elena mi insegna l’italiano.'], 1, 'Adresát je Pietro, proto použijeme ti.'),
      q('5-9', 'Nepřímá zájmena', 'Augurate buon viaggio a Lucia?', 'Nahraď „a Lucia“ zájmenem.', ['Gli augurate buon viaggio?', 'La augurate buon viaggio?', 'Le augurate buon viaggio?'], 2, 'Augurare qualcosa a qualcuno: a Lucia → le.'),
      q('5-10', 'Nepřímá zájmena', 'Il film sembra interessante a Davide.', 'Nahraď „a Davide“ zájmenem.', ['Gli sembra interessante il film.', 'Lo sembra interessante il film.', 'Le sembra interessante il film.'], 0, 'A Davide je osoba, které film připadá zajímavý → gli.'),
    ],
  },
  {
    id: 'indirect-review', number: 6, title: 'Nepřímá zájmena III', description: 'Ci a vi ve skupinách',
    questions: [
      q('6-1', 'Nepřímá zájmena', 'Il corriere consegna il pacco ad Anna e Marco.', 'Nahraď „ad Anna e Marco“ zájmenem. Mluvčí je Marco.', ['Il corriere gli consegna il pacco.', 'Il corriere ci consegna il pacco.', 'Il corriere vi consegna il pacco.'], 1, 'Mluvčí patří mezi příjemce, proto použije ci.'),
      q('6-2', 'Nepřímá zájmena', 'Il nonno legge la lettera a Sofia e Luca.', 'Nahraď „a Sofia e Luca“ zájmenem. Ty jsi Sofia.', ['Il nonno gli legge la lettera.', 'Il nonno ci legge la lettera.', 'Il nonno vi legge la lettera.'], 2, 'Adresát patří do skupiny příjemců, proto použijeme vi.'),
      q('6-3', 'Nepřímá zájmena', 'Il nonno racconta una fiaba a Matteo e Anna.', 'Nahraď „a Matteo e Anna“ zájmenem. Mluvčí je Anna.', ['Il nonno gli racconta una fiaba.', 'Il nonno vi racconta una fiaba.', 'Il nonno ci racconta una fiaba.'], 2, 'Mluvčí patří mezi posluchače pohádky, proto použije ci.'),
      q('6-4', 'Nepřímá zájmena', 'Prepariamo una sorpresa per Anna.', 'Nahraď „per Anna“ nepřímým zájmenem ve významu příjemce.', ['Le prepariamo una sorpresa.', 'La prepariamo una sorpresa.', 'Gli prepariamo una sorpresa.'], 0, 'Anna je ženský příjemce; v zájmenné podobě použijeme le.'),
      q('6-5', 'Nepřímá zájmena', 'Mostro le fotografie a mio fratello.', 'Nahraď „a mio fratello“ zájmenem.', ['Lo mostro le fotografie.', 'Gli mostro le fotografie.', 'Le mostro le fotografie.'], 1, 'A mio fratello je mužský nepřímý předmět → gli.'),
      q('6-6', 'Nepřímá zájmena', 'Dite la verità alla signora Bianchi?', 'Nahraď „alla signora Bianchi“ zájmenem. Mluvčí je paní Bianchi.', ['Le dite la verità?', 'Mi dite la verità?', 'Ti dite la verità?'], 1, 'Mluvčí je příjemcem sdělení, proto použije mi.'),
      q('6-7', 'Nepřímá zájmena', 'Compro un regalo a Stefano.', 'Nahraď „a Stefano“ zájmenem.', ['Gli compro un regalo.', 'Lo compro un regalo.', 'Le compro un regalo.'], 0, 'A Stefano označuje mužského příjemce → gli.'),
      q('6-8', 'Nepřímá zájmena', 'Paola serve la cena a sua figlia.', 'Nahraď „a sua figlia“ zájmenem.', ['Paola la serve la cena.', 'Paola le serve la cena.', 'Paola gli serve la cena.'], 1, 'A sua figlia je ženský nepřímý předmět → le.'),
      q('6-9', 'Nepřímá zájmena', 'L’allenatore dà un consiglio a Fabio e Marco.', 'Nahraď „a Fabio e Marco“ zájmenem. Ty jsi Fabio.', ['L’allenatore gli dà un consiglio.', 'L’allenatore ci dà un consiglio.', 'L’allenatore vi dà un consiglio.'], 2, 'Adresát patří mezi příjemce rady, proto použijeme vi.'),
      q('6-10', 'Nepřímá zájmena', 'La maestra spiega la regola a Beatrice e Luca.', 'Nahraď „a Beatrice e Luca“ zájmenem. Mluvčí je Beatrice.', ['La maestra ci spiega la regola.', 'La maestra vi spiega la regola.', 'La maestra gli spiega la regola.'], 0, 'Mluvčí patří mezi žáky, kterým učitelka vysvětluje, proto použije ci.'),
    ],
  },
  {
    id: 'combined-singular', number: 7, title: 'Kombinovaná zájmena I', description: 'Me lo, me la, te lo, te la',
    questions: [
      q('7-1', 'Kombinovaná zájmena', 'Laura dà il libro a Marco.', 'Nahraď „il libro“ i „a Marco“. Mluvčí je Marco.', ['Laura me lo dà.', 'Laura mi lo dà.', 'Laura te lo dà.'], 0, 'Mi se před lo mění na me → me lo.'),
      q('7-2', 'Kombinovaná zájmena', 'Porto la borsa a Giulia.', 'Nahraď „la borsa“ i „a Giulia“. Ty jsi Giulia.', ['Te lo porto.', 'Ti la porto.', 'Te la porto.'], 2, 'Ti se před la mění na te → te la.'),
      q('7-3', 'Kombinovaná zájmena', 'Anna presta il computer a Luca.', 'Nahraď „il computer“ i „a Luca“. Mluvčí je Luca.', ['Anna me lo presta.', 'Anna mi lo presta.', 'Anna te lo presta.'], 0, 'Mi + lo → me lo.'),
      q('7-4', 'Kombinovaná zájmena', 'Spiego la situazione ad Anna.', 'Nahraď „la situazione“ i „ad Anna“. Ty jsi Anna.', ['Te la spiego.', 'Ti la spiego.', 'Me la spiego.'], 0, 'Ti + la → te la.'),
      q('7-5', 'Kombinovaná zájmena', 'Il cameriere serve il vino al signor Rossi.', 'Nahraď „il vino“ i „al signor Rossi“. Mluvčí je pan Rossi.', ['Il cameriere glielo serve.', 'Il cameriere me lo serve.', 'Il cameriere mi lo serve.'], 1, 'Mluvčí je příjemce; mi + lo → me lo.'),
      q('7-6', 'Kombinovaná zájmena', 'Paolo racconta la storia a Sara.', 'Nahraď „la storia“ i „a Sara“. Ty jsi Sara.', ['Paolo te lo racconta.', 'Paolo ti la racconta.', 'Paolo te la racconta.'], 2, 'Adresát je Sara; ti + la → te la.'),
      q('7-7', 'Kombinovaná zájmena', 'Elena manda il messaggio a Paolo.', 'Nahraď „il messaggio“ i „a Paolo“. Mluvčí je Paolo.', ['Elena me lo manda.', 'Elena mi lo manda.', 'Elena glielo manda.'], 0, 'Mluvčí je Paolo; mi + lo → me lo.'),
      q('7-8', 'Kombinovaná zájmena', 'Mostriamo la casa a Elena.', 'Nahraď „la casa“ i „a Elena“. Ty jsi Elena.', ['Te lo mostriamo.', 'Te la mostriamo.', 'Ti la mostriamo.'], 1, 'Adresát je Elena; ti + la → te la.'),
      q('7-9', 'Kombinovaná zájmena', 'Regalo il quadro a mio padre.', 'Nahraď „il quadro“ i „a mio padre“.', ['Gliela regalo.', 'Gli lo regalo.', 'Glielo regalo.'], 2, 'Gli + lo → glielo.'),
      q('7-10', 'Kombinovaná zájmena', 'Restituisco la chiave a Marta.', 'Nahraď „la chiave“ i „a Marta“.', ['Gliela restituisco.', 'Glielo restituisco.', 'Le la restituisco.'], 0, 'Le + la → gliela.'),
    ],
  },
  {
    id: 'combined-plural', number: 8, title: 'Kombinovaná zájmena II', description: 'Ce li, ce le, ve li, ve le',
    questions: [
      q('8-1', 'Kombinovaná zájmena', 'Il direttore consegna i documenti ad Anna e Marco.', 'Nahraď „i documenti“ i „ad Anna e Marco“. Mluvčí je Anna.', ['Il direttore ce li consegna.', 'Il direttore ci li consegna.', 'Il direttore ve li consegna.'], 0, 'Ci se před li mění na ce → ce li.'),
      q('8-2', 'Kombinovaná zájmena', 'Porto le chiavi a Laura e Marta.', 'Nahraď „le chiavi“ i „a Laura e Marta“. Ty jsi Laura.', ['Ve li porto.', 'Vi le porto.', 'Ve le porto.'], 2, 'Vi se před le mění na ve → ve le.'),
      q('8-3', 'Kombinovaná zájmena', 'Sara presta i DVD a Matteo e Luca.', 'Nahraď „i DVD“ i „a Matteo e Luca“. Mluvčí je Matteo.', ['Sara ve li presta.', 'Sara ci li presta.', 'Sara ce li presta.'], 2, 'Mluvčí patří mezi příjemce; ci + li → ce li.'),
      q('8-4', 'Kombinovaná zájmena', 'Spedisco le fotografie a Chiara ed Elena.', 'Nahraď „le fotografie“ i „a Chiara ed Elena“. Ty jsi Chiara.', ['Ve le spedisco.', 'Vi le spedisco.', 'Ce le spedisco.'], 0, 'Adresát patří mezi příjemce; vi + le → ve le.'),
      q('8-5', 'Kombinovaná zájmena', 'Il professore spiega i verbi a Roberto e Sara.', 'Nahraď „i verbi“ i „a Roberto e Sara“. Mluvčí je Sara.', ['Il professore ce li spiega.', 'Il professore ci li spiega.', 'Il professore ve li spiega.'], 0, 'Mluvčí patří mezi studenty; ci + li → ce li.'),
      q('8-6', 'Kombinovaná zájmena', 'Paolo racconta le novità a Francesca e Luca.', 'Nahraď „le novità“ i „a Francesca e Luca“. Ty jsi Francesca.', ['Paolo ve le racconta.', 'Paolo vi le racconta.', 'Paolo ce le racconta.'], 0, 'Adresát patří mezi příjemce; vi + le → ve le.'),
      q('8-7', 'Kombinovaná zájmena', 'Anna manda i biglietti a Stefano e Paolo.', 'Nahraď „i biglietti“ i „a Stefano e Paolo“. Mluvčí je Stefano.', ['Anna ce li manda.', 'Anna ci li manda.', 'Anna ve li manda.'], 0, 'Mluvčí patří mezi příjemce; ci + li → ce li.'),
      q('8-8', 'Kombinovaná zájmena', 'La guida mostra le stanze ad Alessandra e Marco.', 'Nahraď „le stanze“ i „ad Alessandra e Marco“. Ty jsi Alessandra.', ['La guida ce le mostra.', 'La guida ve le mostra.', 'La guida vi le mostra.'], 1, 'Adresát patří mezi návštěvníky; vi + le → ve le.'),
      q('8-9', 'Kombinovaná zájmena', 'Regalo i giocattoli a mio nipote.', 'Nahraď „i giocattoli“ i „a mio nipote“.', ['Gliele regalo.', 'Gli li regalo.', 'Glieli regalo.'], 2, 'Gli + li → glieli.'),
      q('8-10', 'Kombinovaná zájmena', 'Restituisco le valigie a Paola.', 'Nahraď „le valigie“ i „a Paola“.', ['Gliele restituisco.', 'Glieli restituisco.', 'Le le restituisco.'], 0, 'Le + le → gliele.'),
    ],
  },
  {
    id: 'combined-review', number: 9, title: 'Kombinovaná zájmena III', description: 'Me, te, ce, ve a glie-',
    questions: [
      q('9-1', 'Kombinovaná zájmena', 'Anna vende la macchina a Giorgio.', 'Nahraď „la macchina“ i „a Giorgio“. Mluvčí je Giorgio.', ['Anna me la vende.', 'Anna mi la vende.', 'Anna gliela vende.'], 0, 'Mluvčí je Giorgio; mi + la → me la.'),
      q('9-2', 'Kombinovaná zájmena', 'Leggo il contratto a Silvia.', 'Nahraď „il contratto“ i „a Silvia“. Ty jsi Silvia.', ['Te lo leggo.', 'Ti lo leggo.', 'Te la leggo.'], 0, 'Adresát je Silvia; ti + lo → te lo.'),
      q('9-3', 'Kombinovaná zájmena', 'Il barista offre le bibite a Carlo e Lucia.', 'Nahraď „le bibite“ i „a Carlo e Lucia“. Mluvčí je Carlo.', ['Il barista ce le offre.', 'Il barista ci le offre.', 'Il barista ve le offre.'], 0, 'Mluvčí patří mezi příjemce; ci + le → ce le.'),
      q('9-4', 'Kombinovaná zájmena', 'Il direttore invia i risultati a Monica e Paolo.', 'Nahraď „i risultati“ i „a Monica e Paolo“. Ty jsi Monica.', ['Il direttore ve li invia.', 'Il direttore vi li invia.', 'Il direttore ce li invia.'], 0, 'Adresát patří mezi příjemce; vi + li → ve li.'),
      q('9-5', 'Kombinovaná zájmena', 'Il padre compra il gelato a Tommaso.', 'Nahraď „il gelato“ i „a Tommaso“. Mluvčí je Tommaso.', ['Il padre glielo compra.', 'Il padre me lo compra.', 'Il padre mi lo compra.'], 1, 'Mluvčí je Tommaso; mi + lo → me lo.'),
      q('9-6', 'Kombinovaná zájmena', 'Marco prepara la colazione a Lucia.', 'Nahraď „la colazione“ i „a Lucia“. Ty jsi Lucia.', ['Marco te lo prepara.', 'Marco ti la prepara.', 'Marco te la prepara.'], 2, 'Adresát je Lucia; ti + la → te la.'),
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
      q('10-2', 'Nepřímá zájmena', 'Elisa telefona a suo zio.', 'Nahraď „a suo zio“ zájmenem. Mluvčí je její strýc.', ['Elisa mi telefona.', 'Elisa gli telefona.', 'Elisa ti telefona.'], 0, 'Mluvčí je strýc, kterému Elisa telefonuje, proto použije mi.'),
      q('10-3', 'Kombinovaná zájmena', 'Diamo la notizia a Valentina.', 'Nahraď „la notizia“ i „a Valentina“. Ty jsi Valentina.', ['Te la diamo.', 'Ti la diamo.', 'Gliela diamo.'], 0, 'Adresát je Valentina; ti + la → te la.'),
      q('10-4', 'Přímá zájmena', 'Il turista visita il museo.', 'Nahraď „il museo“ zájmenem.', ['Il turista lo visita.', 'Il turista gli visita.', 'Il turista la visita.'], 0, 'Il museo je mužský rod jednotného čísla → lo.'),
      q('10-5', 'Nepřímá zájmena', 'Il bambino chiede aiuto alla maestra.', 'Nahraď „alla maestra“ zájmenem. Mluvčí je učitelka.', ['Il bambino le chiede aiuto.', 'Il bambino mi chiede aiuto.', 'Il bambino ti chiede aiuto.'], 1, 'Mluvčí je učitelka, kterou dítě žádá o pomoc, proto použije mi.'),
      q('10-6', 'Kombinovaná zájmena', 'Spedisco i moduli a Francesco.', 'Nahraď „i moduli“ i „a Francesco“. Ty jsi Francesco.', ['Te li spedisco.', 'Ti li spedisco.', 'Glieli spedisco.'], 0, 'Adresát je Francesco; ti + li → te li.'),
      q('10-7', 'Přímá zájmena', 'Luca incontra Marta in centro.', 'Nahraď „Marta“ zájmenem. Mluvčí je Marta.', ['Luca la incontra in centro.', 'Luca mi incontra in centro.', 'Luca ti incontra in centro.'], 1, 'Mluvčí je Marta, proto použije mi.'),
      q('10-8', 'Nepřímá zájmena', 'I nipoti portano dei fiori a nonno Luigi e nonna Rosa.', 'Nahraď „a nonno Luigi e nonna Rosa“ zájmenem. Mluvčí je Luigi.', ['I nipoti gli portano dei fiori.', 'I nipoti vi portano dei fiori.', 'I nipoti ci portano dei fiori.'], 2, 'Mluvčí patří mezi příjemce květin, proto použije ci.'),
      q('10-9', 'Kombinovaná zájmena', 'Mostro le foto a Teresa.', 'Nahraď „le foto“ i „a Teresa“. Ty jsi Teresa.', ['Te le mostro.', 'Ti le mostro.', 'Gliele mostro.'], 0, 'Adresát je Teresa; ti + le → te le.'),
      q('10-10', 'Přímá zájmena', 'Gli studenti ascoltano la lezione.', 'Nahraď „la lezione“ zájmenem.', ['Gli studenti la ascoltano.', 'Gli studenti le ascoltano.', 'Gli studenti lo ascoltano.'], 0, 'La lezione je ženský rod jednotného čísla → la.'),
    ],
  },
];

export const getExerciseSet = (id: string): ExerciseSet | undefined =>
  exerciseSets.find((set) => set.id === id);
