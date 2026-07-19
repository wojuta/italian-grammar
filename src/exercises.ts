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

const exercises: Exercise[] = [
  { id: 'd1', kind: 'Přímá zájmena', sentence: 'Vedo Maria ogni mattina.', task: 'Nahraď „Maria“ zájmenem.', options: ['Le vedo ogni mattina.', 'La vedo ogni mattina.', 'Gli vedo ogni mattina.'], correct: 1, explanation: 'Maria je ženský rod jednotného čísla a přímý předmět → la.' },
  { id: 'd2', kind: 'Přímá zájmena', sentence: 'Compro i libri domani.', task: 'Nahraď „i libri“ zájmenem.', options: ['Gli compro domani.', 'Le compro domani.', 'Li compro domani.'], correct: 2, explanation: 'I libri je mužský rod množného čísla → li.' },
  { id: 'd3', kind: 'Přímá zájmena', sentence: 'Inviti Paolo e Luca alla festa?', task: 'Nahraď „Paolo e Luca“ zájmenem.', options: ['Li inviti alla festa?', 'Gli inviti alla festa?', 'Lo inviti alla festa?'], correct: 0, explanation: 'Osoby jsou zde přímý předmět v mužském množném čísle → li.' },
  { id: 'd4', kind: 'Přímá zájmena', sentence: 'Conosciamo Francesca da anni.', task: 'Nahraď „Francesca“ zájmenem.', options: ['Le conosciamo da anni.', 'La conosciamo da anni.', 'Lo conosciamo da anni.'], correct: 1, explanation: 'Francesca je přímý předmět v ženském jednotném čísle → la.' },
  { id: 'd5', kind: 'Přímá zájmena', sentence: 'Mangi la pizza stasera?', task: 'Nahraď „la pizza“ zájmenem.', options: ['La mangi stasera?', 'Le mangi stasera?', 'Gli mangi stasera?'], correct: 0, explanation: 'La pizza je přímý předmět v ženském jednotném čísle → la.' },
  { id: 'i1', kind: 'Nepřímá zájmena', sentence: 'Telefono a Marco dopo cena.', task: 'Nahraď „a Marco“ zájmenem.', options: ['Lo telefono dopo cena.', 'Gli telefono dopo cena.', 'Le telefono dopo cena.'], correct: 1, explanation: 'Telefonare a qualcuno vyžaduje nepřímý předmět; a Marco → gli.' },
  { id: 'i2', kind: 'Nepřímá zájmena', sentence: 'Scriviamo a Giulia ogni settimana.', task: 'Nahraď „a Giulia“ zájmenem.', options: ['Le scriviamo ogni settimana.', 'La scriviamo ogni settimana.', 'Gli scriviamo ogni settimana.'], correct: 0, explanation: 'A Giulia je nepřímý předmět ženského rodu → le.' },
  { id: 'i3', kind: 'Nepřímá zájmena', sentence: 'Regalo un fiore a Paolo.', task: 'Nahraď „a Paolo“ zájmenem.', options: ['Lo regalo un fiore.', 'Le regalo un fiore.', 'Gli regalo un fiore.'], correct: 2, explanation: 'Příjemce a Paolo je nepřímý předmět → gli.' },
  { id: 'i4', kind: 'Nepřímá zájmena', sentence: 'Racconti la verità a tua madre?', task: 'Nahraď „a tua madre“ zájmenem.', options: ['La racconti la verità?', 'Le racconti la verità?', 'Gli racconti la verità?'], correct: 1, explanation: 'A tua madre je nepřímý předmět ženského rodu → le.' },
  { id: 'i5', kind: 'Nepřímá zájmena', sentence: 'Porto un caffè al professore.', task: 'Nahraď „al professore“ zájmenem.', options: ['Gli porto un caffè.', 'Lo porto un caffè.', 'Le porto un caffè.'], correct: 0, explanation: 'Al professore označuje příjemce v mužském rodě → gli.' },
  { id: 'c1', kind: 'Kombinovaná zájmena', sentence: 'Do il libro a Marco.', task: 'Nahraď „il libro“ i „a Marco“.', options: ['Gli lo do.', 'Glielo do.', 'Lo gli do.'], correct: 1, explanation: 'Gli + lo se spojí do jediného tvaru glielo.' },
  { id: 'c2', kind: 'Kombinovaná zájmena', sentence: 'Porto le chiavi a Giulia.', task: 'Nahraď „le chiavi“ i „a Giulia“.', options: ['Gliele porto.', 'Le le porto.', 'Glieli porto.'], correct: 0, explanation: 'Le (Giulia) + le (chiavi) → gliele.' },
  { id: 'c3', kind: 'Kombinovaná zájmena', sentence: 'Spieghiamo la regola agli studenti.', task: 'Nahraď „la regola“ i „agli studenti“.', options: ['Glielo spieghiamo.', 'Gli la spieghiamo.', 'Gliela spieghiamo.'], correct: 2, explanation: 'Gli + la se v kombinaci mění na gliela.' },
  { id: 'c4', kind: 'Kombinovaná zájmena', sentence: 'Mando i documenti ad Anna.', task: 'Nahraď „i documenti“ i „ad Anna“.', options: ['Glieli mando.', 'Gliele mando.', 'Le li mando.'], correct: 0, explanation: 'Le (Anna) + li (documenti) → glieli.' },
  { id: 'c5', kind: 'Kombinovaná zájmena', sentence: 'Prestiamo la macchina a Luca.', task: 'Nahraď „la macchina“ i „a Luca“.', options: ['Gliela prestiamo.', 'Glielo prestiamo.', 'Gli la prestiamo.'], correct: 0, explanation: 'Gli + la se spojí do tvaru gliela.' },
  { id: 'c6', kind: 'Kombinovaná zájmena', sentence: 'Racconto le notizie a Sara.', task: 'Nahraď „le notizie“ i „a Sara“.', options: ['Glieli racconto.', 'Le le racconto.', 'Gliele racconto.'], correct: 2, explanation: 'Le (Sara) + le (notizie) → gliele.' },
];

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j] as T, copy[i] as T];
  }
  return copy;
};

export const generateExerciseSet = (): Exercise[] => {
  const kinds: ExerciseKind[] = ['Přímá zájmena', 'Nepřímá zájmena', 'Kombinovaná zájmena'];
  const guaranteed = kinds.flatMap((kind) => shuffle(exercises.filter((item) => item.kind === kind)).slice(0, 2));
  const remaining = shuffle(exercises.filter((item) => !guaranteed.some((chosen) => chosen.id === item.id))).slice(0, 4);
  return shuffle([...guaranteed, ...remaining]);
};
