import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Exercise, exerciseSets } from './src/exercises';
import { futureExerciseSets } from './src/futureExercises';
import { presentExerciseSets } from './src/presentExercises';
import { reflexiveExerciseSets } from './src/reflexiveExercises';
import { getExerciseTranslation } from './src/translations';

type Screen = 'home' | 'grammar' | 'pronouns' | 'future' | 'reflexive' | 'present' | 'quiz' | 'result';
type Lesson = 'pronouns' | 'future' | 'reflexive' | 'present';

const lessonSets = {
  pronouns: exerciseSets,
  future: futureExerciseSets,
  reflexive: reflexiveExerciseSets,
  present: presentExerciseSets,
};

const lessonScreens: Record<Lesson, Screen> = {
  pronouns: 'pronouns',
  future: 'future',
  reflexive: 'reflexive',
  present: 'present',
};

const COLORS = {
  ink: '#173B3A',
  muted: '#6B7974',
  cream: '#F7F3EA',
  card: '#FFFCF6',
  green: '#087A5B',
  paleGreen: '#DDEDE5',
  red: '#C64B40',
  paleRed: '#F9E4E0',
  gold: '#F2B84B',
  line: '#DFE2D9',
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [activeSetId, setActiveSetId] = useState(exerciseSets[0]?.id ?? '');
  const [activeLesson, setActiveLesson] = useState<Lesson>('pronouns');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const currentSets = lessonSets[activeLesson];
  const activeSet = currentSets.find((set) => set.id === activeSetId);
  const lessonScreen = lessonScreens[activeLesson];
  const translation = question?.translation ?? (question ? getExerciseTranslation(question.id) : undefined);
  const progress = useMemo(() => `${current + 1} / ${questions.length}`, [current, questions.length]);

  const beginQuiz = (setId: string = activeSetId, lesson: Lesson = activeLesson) => {
    const sets = lessonSets[lesson];
    const selectedSet = sets.find((set) => set.id === setId);
    if (!selectedSet) return;
    setActiveLesson(lesson);
    setActiveSetId(setId);
    setQuestions(selectedSet.questions);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setScreen('quiz');
  };

  const choose = (index: number) => {
    if (selected !== null || !question) return;
    setSelected(index);
    if (index === question.correct) setScore((value) => value + 1);
  };

  const next = () => {
    if (current === questions.length - 1) {
      setScreen('result');
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      {screen === 'home' && (
        <ScrollView contentContainerStyle={styles.page}>
          <View style={styles.brandRow}>
            <View style={styles.flag}><View style={styles.flagGreen} /><View style={styles.flagWhite} /><View style={styles.flagRed} /></View>
            <Text style={styles.eyebrow}>ITALŠTINA KAŽDÝ DEN</Text>
          </View>
          <Text style={styles.hero}>Impara.{`\n`}Prova. <Text style={styles.heroAccent}>Parla.</Text></Text>
          <Text style={styles.lead}>Krátká cvičení, díky kterým italská gramatika konečně zapadne na své místo.</Text>
          <Text style={styles.sectionLabel}>VYBER SI TÉMA</Text>
          <Pressable accessibilityRole="button" onPress={() => setScreen('grammar')} style={({ pressed }) => [styles.mainTile, pressed && styles.pressed]}>
            <View style={styles.tileIcon}><Text style={styles.tileIconText}>Aa</Text></View>
            <View style={styles.tileCopy}>
              <Text style={styles.tileTitle}>GRAMATIKA</Text>
              <Text style={styles.tileSubtitle}>Pravidla, příklady a procvičování</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </Pressable>
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonTitle}>Další lekce připravujeme</Text>
            <Text style={styles.comingSoonText}>Slovíčka, poslech a konverzace přibudou postupně.</Text>
          </View>
        </ScrollView>
      )}

      {screen === 'grammar' && (
        <ScrollView contentContainerStyle={styles.page}>
          <BackButton onPress={() => setScreen('home')} />
          <Text style={styles.eyebrow}>PŘEHLED LEKCÍ</Text>
          <Text style={styles.heading}>Gramatika</Text>
          <Text style={styles.lead}>Vyber si gramatické téma a postupuj jednotlivými cvičeními.</Text>
          <Pressable accessibilityRole="button" onPress={() => setScreen('pronouns')} style={({ pressed }) => [styles.lessonTile, pressed && styles.pressed]}>
            <View style={styles.lessonTop}>
              <View style={styles.badge}><Text style={styles.badgeText}>A1–A2</Text></View>
              <Text style={styles.questionCount}>10 CVIČENÍ · 100 VĚT</Text>
            </View>
            <Text style={styles.lessonTitle}>Zájmena přímá{`\n`}a nepřímá</Text>
            <Text style={styles.lessonText}>mi, ti, ci, vi • lo, la, li, le • me lo, te la, ce li, ve le…</Text>
            <View style={styles.startRow}><Text style={styles.startText}>Otevřít lekci</Text><Text style={styles.startArrow}>→</Text></View>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => setScreen('future')} style={({ pressed }) => [styles.lessonTile, styles.secondLessonTile, pressed && styles.pressed]}>
            <View style={styles.lessonTop}>
              <View style={styles.badge}><Text style={styles.badgeText}>A2</Text></View>
              <Text style={styles.questionCount}>10 CVIČENÍ · 100 VĚT</Text>
            </View>
            <Text style={styles.lessonTitle}>Budoucí čas</Text>
            <Text style={styles.lessonText}>parlerò, prenderai, partiremo • sarò, avrò, andrò…</Text>
            <View style={styles.startRow}><Text style={styles.startText}>Otevřít lekci</Text><Text style={styles.startArrow}>→</Text></View>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => setScreen('reflexive')} style={({ pressed }) => [styles.lessonTile, styles.secondLessonTile, pressed && styles.pressed]}>
            <View style={styles.lessonTop}>
              <View style={styles.badge}><Text style={styles.badgeText}>A1–A2</Text></View>
              <Text style={styles.questionCount}>5 CVIČENÍ · 50 VĚT</Text>
            </View>
            <Text style={styles.lessonTitle}>Zvratná slovesa</Text>
            <Text style={styles.lessonText}>mi alzo, ti lavi, ci vediamo • alzati • devo svegliarmi</Text>
            <View style={styles.startRow}><Text style={styles.startText}>Otevřít lekci</Text><Text style={styles.startArrow}>→</Text></View>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => setScreen('present')} style={({ pressed }) => [styles.lessonTile, styles.secondLessonTile, pressed && styles.pressed]}>
            <View style={styles.lessonTop}>
              <View style={styles.badge}><Text style={styles.badgeText}>A1</Text></View>
              <Text style={styles.questionCount}>6 CVIČENÍ · 60 VĚT</Text>
            </View>
            <Text style={styles.lessonTitle}>Přítomný čas{`\n`}pravidelných sloves</Text>
            <Text style={styles.lessonText}>-are • -ere • -ire • slovesa s vložkou -isc-</Text>
            <View style={styles.startRow}><Text style={styles.startText}>Otevřít lekci</Text><Text style={styles.startArrow}>→</Text></View>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'pronouns' && (
        <ScrollView contentContainerStyle={styles.page}>
          <BackButton onPress={() => setScreen('grammar')} />
          <Text style={styles.eyebrow}>GRAMATIKA · A1–A2</Text>
          <Text style={styles.heading}>Zájmena přímá{`\n`}a nepřímá</Text>
          <Text style={styles.lead}>Deset pevných cvičení po deseti větách. Začni přímými zájmeny a postupně přejdi ke kombinacím.</Text>

          <View style={styles.ruleCard}>
            <Text style={styles.ruleTitle}>Rychlý přehled</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>Přímá:</Text> mi, ti, lo, la, ci, vi, li, le</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>Nepřímá:</Text> mi, ti, gli, le, ci, vi</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>Kombinovaná:</Text> me, te, ce, ve + lo/la/li/le; glielo…</Text>
          </View>

          <Text style={styles.sectionLabel}>VYBER CVIČENÍ</Text>
          <View style={styles.exerciseList}>
            {exerciseSets.map((set) => (
              <Pressable key={set.id} accessibilityRole="button" onPress={() => beginQuiz(set.id, 'pronouns')} style={({ pressed }) => [styles.exerciseTile, pressed && styles.pressed]}>
                <View style={styles.exerciseNumber}><Text style={styles.exerciseNumberText}>{set.number}</Text></View>
                <View style={styles.exerciseCopy}>
                  <Text style={styles.exerciseTitle}>{set.title}</Text>
                  <Text style={styles.exerciseDescription}>{set.description}</Text>
                </View>
                <View style={styles.exerciseMeta}>
                  <Text style={styles.exerciseCount}>10 VĚT</Text>
                  <Text style={styles.exerciseArrow}>›</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}

      {screen === 'future' && (
        <ScrollView contentContainerStyle={styles.page}>
          <BackButton onPress={() => setScreen('grammar')} />
          <Text style={styles.eyebrow}>GRAMATIKA · A2</Text>
          <Text style={styles.heading}>Budoucí čas</Text>
          <Text style={styles.lead}>Deset pevných cvičení po deseti větách. Nejprve si upevni pravidelná slovesa, potom nepravidelné kmeny.</Text>

          <View style={styles.ruleCard}>
            <Text style={styles.ruleTitle}>KONCOVKY FUTURO SEMPLICE</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>io</Text> -ò  ·  <Text style={styles.ruleStrong}>tu</Text> -ai  ·  <Text style={styles.ruleStrong}>lui/lei</Text> -à</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>noi</Text> -emo  ·  <Text style={styles.ruleStrong}>voi</Text> -ete  ·  <Text style={styles.ruleStrong}>loro</Text> -anno</Text>
            <Text style={styles.ruleLine}>U sloves na <Text style={styles.ruleStrong}>-are</Text> se a mění na e: parlare → parler-.</Text>
          </View>

          <Text style={styles.sectionLabel}>VYBER CVIČENÍ</Text>
          <View style={styles.exerciseList}>
            {futureExerciseSets.map((set) => (
              <Pressable key={set.id} accessibilityRole="button" onPress={() => beginQuiz(set.id, 'future')} style={({ pressed }) => [styles.exerciseTile, set.stemReminder && styles.exerciseTileWithReminder, pressed && styles.pressed]}>
                <View style={styles.exerciseNumber}><Text style={styles.exerciseNumberText}>{set.number}</Text></View>
                <View style={styles.exerciseCopy}>
                  <Text style={styles.exerciseTitle}>{set.title}</Text>
                  <Text style={styles.exerciseDescription}>{set.description}</Text>
                  {set.stemReminder && <Text style={styles.exerciseStems}>{set.stemReminder}</Text>}
                </View>
                <View style={styles.exerciseMeta}>
                  <Text style={styles.exerciseCount}>10 VĚT</Text>
                  <Text style={styles.exerciseArrow}>›</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}

      {screen === 'reflexive' && (
        <ScrollView contentContainerStyle={styles.page}>
          <BackButton onPress={() => setScreen('grammar')} />
          <Text style={styles.eyebrow}>GRAMATIKA · A1–A2</Text>
          <Text style={styles.heading}>Zvratná slovesa</Text>
          <Text style={styles.lead}>Pět pevných cvičení po deseti větách: přítomný čas, slovosled, infinitiv, rozkazovací způsob i vzájemné děje.</Text>

          <View style={styles.ruleCard}>
            <Text style={styles.ruleTitle}>ZÁJMENA A SLOVOSLED</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>io</Text> mi · <Text style={styles.ruleStrong}>tu</Text> ti · <Text style={styles.ruleStrong}>lui/lei</Text> si · <Text style={styles.ruleStrong}>noi</Text> ci · <Text style={styles.ruleStrong}>voi</Text> vi · <Text style={styles.ruleStrong}>loro</Text> si</Text>
            <Text style={styles.ruleLine}>Před určitým slovesem: <Text style={styles.ruleStrong}>mi alzo</Text>, non si veste.</Text>
            <Text style={styles.ruleLine}>S infinitivem: <Text style={styles.ruleStrong}>mi devo alzare = devo alzarmi</Text>.</Text>
            <Text style={styles.ruleLine}>Kladný rozkaz: <Text style={styles.ruleStrong}>alzati, alzatevi</Text>. Záporný pro tu: <Text style={styles.ruleStrong}>non alzarti</Text>.</Text>
          </View>

          <Text style={styles.sectionLabel}>VYBER CVIČENÍ</Text>
          <View style={styles.exerciseList}>
            {reflexiveExerciseSets.map((set) => (
              <Pressable key={set.id} accessibilityRole="button" onPress={() => beginQuiz(set.id, 'reflexive')} style={({ pressed }) => [styles.exerciseTile, styles.exerciseTileWithReminder, pressed && styles.pressed]}>
                <View style={styles.exerciseNumber}><Text style={styles.exerciseNumberText}>{set.number}</Text></View>
                <View style={styles.exerciseCopy}>
                  <Text style={styles.exerciseTitle}>{set.title}</Text>
                  <Text style={styles.exerciseDescription}>{set.description}</Text>
                  {set.stemReminder && <Text style={styles.exerciseStems}>{set.stemReminder}</Text>}
                </View>
                <View style={styles.exerciseMeta}><Text style={styles.exerciseCount}>10 VĚT</Text><Text style={styles.exerciseArrow}>›</Text></View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}

      {screen === 'present' && (
        <ScrollView contentContainerStyle={styles.page}>
          <BackButton onPress={() => setScreen('grammar')} />
          <Text style={styles.eyebrow}>GRAMATIKA · A1</Text>
          <Text style={styles.heading}>Přítomný čas{`\n`}pravidelných sloves</Text>
          <Text style={styles.lead}>Šest pevných cvičení po deseti větách. Každá slovesná třída má dvě samostatná cvičení.</Text>

          <View style={styles.ruleCard}>
            <Text style={styles.ruleTitle}>KONCOVKY PRESENTE</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>-are:</Text> -o, -i, -a, -iamo, -ate, -ano</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>-ere:</Text> -o, -i, -e, -iamo, -ete, -ono</Text>
            <Text style={styles.ruleLine}><Text style={styles.ruleStrong}>-ire:</Text> -o, -i, -e, -iamo, -ite, -ono</Text>
            <Text style={styles.ruleLine}>Některá slovesa na -ire vkládají <Text style={styles.ruleStrong}>-isc-</Text> u io, tu, lui/lei a loro: finisco, finisci, finisce, finiscono.</Text>
          </View>

          <Text style={styles.sectionLabel}>VYBER CVIČENÍ</Text>
          <View style={styles.exerciseList}>
            {presentExerciseSets.map((set) => (
              <Pressable key={set.id} accessibilityRole="button" onPress={() => beginQuiz(set.id, 'present')} style={({ pressed }) => [styles.exerciseTile, styles.exerciseTileWithReminder, pressed && styles.pressed]}>
                <View style={styles.exerciseNumber}><Text style={styles.exerciseNumberText}>{set.number}</Text></View>
                <View style={styles.exerciseCopy}>
                  <Text style={styles.exerciseTitle}>{set.title}</Text>
                  <Text style={styles.exerciseDescription}>{set.description}</Text>
                  {set.stemReminder && <Text style={styles.exerciseStems}>{set.stemReminder}</Text>}
                </View>
                <View style={styles.exerciseMeta}><Text style={styles.exerciseCount}>10 VĚT</Text><Text style={styles.exerciseArrow}>›</Text></View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}

      {screen === 'quiz' && question && (
        <ScrollView contentContainerStyle={styles.quizPage}>
          <View style={styles.quizHeader}>
            <Pressable accessibilityLabel="Ukončit cvičení" onPress={() => setScreen(lessonScreen)} style={styles.close}><Text style={styles.closeText}>×</Text></Pressable>
            <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${((current + 1) / questions.length) * 100}%` }]} /></View>
            <Text style={styles.progressText}>{progress}</Text>
          </View>
          <Text style={styles.kind}>CVIČENÍ {activeSet?.number} · {question.kind.toUpperCase()}</Text>
          <Text style={styles.prompt}>{
            question.kind === 'Budoucí čas'
              ? 'Doplň správný tvar slovesa v budoucím čase.'
              : question.kind === 'Zvratná slovesa'
                ? 'Vyber správný tvar zvratného slovesa.'
                : question.kind === 'Přítomný čas'
                  ? 'Doplň správný tvar slovesa v přítomném čase.'
                  : 'Nahraď vyznačenou část správným zájmenem.'
          }</Text>
          {current === 0 && activeSet?.stemReminder && (
            <View style={styles.stemReminderCard}>
              <Text style={styles.stemReminderLabel}>{activeSet.reminderTitle ?? 'NEPRAVIDELNÉ KMENY'}</Text>
              <Text style={styles.stemReminderText}>{activeSet.stemReminder}</Text>
            </View>
          )}
          <View style={styles.sentenceCard}>
            <Text style={styles.sentence}>{question.sentence}</Text>
            {translation && (
              <View style={styles.translationRow}>
                <Text style={styles.translationLabel}>CZ</Text>
                <Text style={styles.translationText}>{translation}</Text>
              </View>
            )}
            <Text style={styles.task}>{question.task}</Text>
          </View>
          <View style={styles.options}>
            {question.options.map((option, index) => {
              const isChosen = selected === index;
              const isCorrect = selected !== null && index === question.correct;
              const isWrong = isChosen && index !== question.correct;
              return (
                <Pressable key={option} accessibilityRole="button" disabled={selected !== null} onPress={() => choose(index)} style={[styles.option, isCorrect && styles.correctOption, isWrong && styles.wrongOption]}>
                  <View style={[styles.optionLetter, isCorrect && styles.correctLetter, isWrong && styles.wrongLetter]}><Text style={[styles.optionLetterText, (isCorrect || isWrong) && styles.whiteText]}>{String.fromCharCode(65 + index)}</Text></View>
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              );
            })}
          </View>
          {selected !== null && (
            <View style={[styles.feedback, selected === question.correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
              <Text style={styles.feedbackTitle}>{selected === question.correct ? 'Perfetto!' : 'Ještě ne.'}</Text>
              <Text style={styles.feedbackText}>{question.explanation}</Text>
              <Pressable accessibilityRole="button" onPress={next} style={styles.nextButton}><Text style={styles.nextButtonText}>{current === questions.length - 1 ? 'Zobrazit výsledek' : 'Další otázka'}  →</Text></Pressable>
            </View>
          )}
        </ScrollView>
      )}

      {screen === 'result' && (
        <View style={[styles.page, styles.resultPage]}>
          <Text style={styles.resultEmoji}>{score >= 8 ? '🏆' : score >= 5 ? '👏' : '🌱'}</Text>
          <Text style={styles.eyebrow}>CVIČENÍ DOKONČENO</Text>
          <Text style={styles.resultScore}>{score} / 10</Text>
          <Text style={styles.heading}>{score >= 8 ? 'Ottimo lavoro!' : score >= 5 ? 'Dobrá práce!' : 'Každý pokus se počítá.'}</Text>
          <Text style={styles.lead}>Správně jsi odpověděl/a na {score} z 10 otázek.</Text>
          <Pressable accessibilityRole="button" onPress={() => beginQuiz()} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Procvičit znovu</Text></Pressable>
          {activeSet && activeSet.number < currentSets.length && (
            <Pressable accessibilityRole="button" onPress={() => beginQuiz(currentSets[activeSet.number]?.id ?? activeSetId)} style={styles.nextSetButton}><Text style={styles.nextSetButtonText}>Pokračovat cvičením {activeSet.number + 1}  →</Text></Pressable>
          )}
          <Pressable accessibilityRole="button" onPress={() => setScreen(lessonScreen)} style={styles.secondaryButton}><Text style={styles.secondaryButtonText}>Zpět na seznam cvičení</Text></Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

function BackButton({ onPress }: { onPress: () => void }) {
  return <Pressable accessibilityRole="button" accessibilityLabel="Zpět" onPress={onPress} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  page: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 28, paddingBottom: 40 },
  quizPage: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 18, paddingBottom: 28 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 52 },
  flag: { width: 34, height: 22, flexDirection: 'row', overflow: 'hidden', borderRadius: 4 },
  flagGreen: { flex: 1, backgroundColor: '#16865B' }, flagWhite: { flex: 1, backgroundColor: '#FFF' }, flagRed: { flex: 1, backgroundColor: '#CE3F4D' },
  eyebrow: { color: COLORS.green, fontSize: 12, fontWeight: '800', letterSpacing: 1.8 },
  hero: { color: COLORS.ink, fontSize: 51, lineHeight: 55, fontWeight: '800', letterSpacing: -2.3 },
  heroAccent: { color: COLORS.green, fontStyle: 'italic' },
  lead: { color: COLORS.muted, fontSize: 17, lineHeight: 25, marginTop: 18, maxWidth: 460 },
  sectionLabel: { color: COLORS.muted, fontSize: 11, fontWeight: '800', letterSpacing: 1.6, marginTop: 52, marginBottom: 14 },
  mainTile: { backgroundColor: COLORS.green, borderRadius: 24, minHeight: 122, padding: 20, flexDirection: 'row', alignItems: 'center', shadowColor: COLORS.green, shadowOpacity: 0.16, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 4 },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
  tileIcon: { width: 58, height: 58, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.16)', alignItems: 'center', justifyContent: 'center' },
  tileIconText: { color: '#FFF', fontSize: 23, fontWeight: '800' }, tileCopy: { flex: 1, marginLeft: 16 },
  tileTitle: { color: '#FFF', fontSize: 19, fontWeight: '800', letterSpacing: 0.4 }, tileSubtitle: { color: '#D7EEE6', marginTop: 7, fontSize: 13, lineHeight: 18 }, arrow: { color: '#FFF', fontSize: 36, fontWeight: '300' },
  comingSoon: { marginTop: 18, padding: 20, borderWidth: 1, borderColor: COLORS.line, borderRadius: 20 },
  comingSoonTitle: { color: COLORS.ink, fontWeight: '700', fontSize: 15 }, comingSoonText: { color: COLORS.muted, fontSize: 13, lineHeight: 19, marginTop: 6 },
  back: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.card, alignItems: 'center', justifyContent: 'center', marginBottom: 38, borderWidth: 1, borderColor: COLORS.line },
  backText: { color: COLORS.ink, fontSize: 34, lineHeight: 37 }, heading: { color: COLORS.ink, fontSize: 40, fontWeight: '800', letterSpacing: -1.4, marginTop: 7 },
  lessonTile: { backgroundColor: COLORS.card, borderRadius: 26, padding: 24, marginTop: 36, borderWidth: 1, borderColor: COLORS.line, shadowColor: '#29443D', shadowOpacity: 0.08, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 3 },
  secondLessonTile: { marginTop: 16 },
  lessonTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, badge: { backgroundColor: COLORS.paleGreen, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6 }, badgeText: { color: COLORS.green, fontSize: 11, fontWeight: '800' },
  questionCount: { color: COLORS.muted, fontSize: 10, fontWeight: '800', letterSpacing: 1.2 }, lessonTitle: { color: COLORS.ink, fontSize: 28, lineHeight: 33, fontWeight: '800', marginTop: 28 }, lessonText: { color: COLORS.muted, fontSize: 14, marginTop: 10 },
  startRow: { borderTopWidth: 1, borderTopColor: COLORS.line, marginTop: 28, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }, startText: { color: COLORS.green, fontWeight: '800', fontSize: 15 }, startArrow: { color: COLORS.green, fontSize: 20 },
  ruleCard: { backgroundColor: COLORS.ink, borderRadius: 22, padding: 22, marginTop: 30 }, ruleTitle: { color: COLORS.gold, fontSize: 11, fontWeight: '800', letterSpacing: 1.4, marginBottom: 12 }, ruleLine: { color: '#E7F0EC', fontSize: 14, lineHeight: 24 }, ruleStrong: { color: '#FFF', fontWeight: '800' },
  exerciseList: { gap: 12 }, exerciseTile: { backgroundColor: COLORS.card, borderRadius: 19, minHeight: 82, padding: 13, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.line }, exerciseTileWithReminder: { minHeight: 100 },
  exerciseNumber: { width: 48, height: 48, borderRadius: 15, backgroundColor: COLORS.paleGreen, alignItems: 'center', justifyContent: 'center' }, exerciseNumberText: { color: COLORS.green, fontSize: 18, fontWeight: '900' },
  exerciseCopy: { flex: 1, marginLeft: 13 }, exerciseTitle: { color: COLORS.ink, fontSize: 15, fontWeight: '800' }, exerciseDescription: { color: COLORS.muted, fontSize: 12, marginTop: 5 }, exerciseStems: { color: COLORS.green, fontSize: 10, lineHeight: 15, fontWeight: '700', marginTop: 6 },
  exerciseMeta: { alignItems: 'flex-end', marginLeft: 8 }, exerciseCount: { color: COLORS.muted, fontSize: 9, fontWeight: '800', letterSpacing: 0.8 }, exerciseArrow: { color: COLORS.green, fontSize: 28, lineHeight: 31 },
  quizHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 34 }, close: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }, closeText: { color: COLORS.muted, fontSize: 30 },
  progressTrack: { flex: 1, height: 7, backgroundColor: '#E0E3DA', borderRadius: 8, overflow: 'hidden' }, progressFill: { height: '100%', backgroundColor: COLORS.green, borderRadius: 8 }, progressText: { color: COLORS.muted, fontSize: 12, fontWeight: '700' },
  kind: { color: COLORS.green, fontSize: 11, fontWeight: '800', letterSpacing: 1.3 }, prompt: { color: COLORS.ink, fontSize: 25, lineHeight: 32, fontWeight: '800', marginTop: 10 },
  stemReminderCard: { backgroundColor: COLORS.paleGreen, borderRadius: 16, padding: 16, marginTop: 18, borderWidth: 1, borderColor: '#BCD9CA' }, stemReminderLabel: { color: COLORS.green, fontSize: 10, fontWeight: '900', letterSpacing: 1.2 }, stemReminderText: { color: COLORS.ink, fontSize: 14, lineHeight: 21, fontWeight: '700', marginTop: 6 },
  sentenceCard: { backgroundColor: COLORS.card, borderRadius: 20, padding: 22, marginTop: 24, borderLeftWidth: 4, borderLeftColor: COLORS.gold }, sentence: { color: COLORS.ink, fontSize: 20, lineHeight: 29, fontStyle: 'italic', fontWeight: '600' },
  translationRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 9, marginTop: 14, paddingTop: 13, borderTopWidth: 1, borderTopColor: COLORS.line }, translationLabel: { color: COLORS.green, fontSize: 10, lineHeight: 20, fontWeight: '900', letterSpacing: 1 }, translationText: { flex: 1, color: COLORS.muted, fontSize: 14, lineHeight: 20 },
  task: { color: COLORS.muted, fontSize: 13, marginTop: 11 },
  options: { gap: 12, marginTop: 22 }, option: { minHeight: 66, backgroundColor: COLORS.card, borderRadius: 18, borderWidth: 1.5, borderColor: COLORS.line, flexDirection: 'row', alignItems: 'center', padding: 12 },
  optionLetter: { width: 38, height: 38, borderRadius: 12, backgroundColor: COLORS.cream, alignItems: 'center', justifyContent: 'center', marginRight: 13 }, optionLetterText: { color: COLORS.ink, fontWeight: '800' }, optionText: { flex: 1, color: COLORS.ink, fontSize: 15, lineHeight: 21, fontWeight: '600' },
  correctOption: { borderColor: COLORS.green, backgroundColor: COLORS.paleGreen }, wrongOption: { borderColor: COLORS.red, backgroundColor: COLORS.paleRed }, correctLetter: { backgroundColor: COLORS.green }, wrongLetter: { backgroundColor: COLORS.red }, whiteText: { color: '#FFF' },
  feedback: { marginTop: 20, borderRadius: 20, padding: 18 }, feedbackCorrect: { backgroundColor: COLORS.paleGreen }, feedbackWrong: { backgroundColor: COLORS.paleRed }, feedbackTitle: { color: COLORS.ink, fontSize: 18, fontWeight: '800' }, feedbackText: { color: COLORS.ink, fontSize: 14, lineHeight: 20, marginTop: 6 },
  nextButton: { backgroundColor: COLORS.ink, borderRadius: 14, paddingVertical: 15, alignItems: 'center', marginTop: 16 }, nextButtonText: { color: '#FFF', fontWeight: '800', fontSize: 15 },
  resultPage: { alignItems: 'center', justifyContent: 'center' }, resultEmoji: { fontSize: 60, marginBottom: 22 }, resultScore: { color: COLORS.green, fontSize: 64, fontWeight: '900', letterSpacing: -3, marginTop: 14 },
  primaryButton: { backgroundColor: COLORS.green, borderRadius: 16, paddingVertical: 17, width: '100%', alignItems: 'center', marginTop: 38 }, primaryButtonText: { color: '#FFF', fontWeight: '800', fontSize: 16 }, secondaryButton: { paddingVertical: 17, width: '100%', alignItems: 'center', marginTop: 8 }, secondaryButtonText: { color: COLORS.green, fontWeight: '800', fontSize: 15 },
  nextSetButton: { backgroundColor: COLORS.ink, borderRadius: 16, paddingVertical: 17, width: '100%', alignItems: 'center', marginTop: 10 }, nextSetButtonText: { color: '#FFF', fontWeight: '800', fontSize: 15 },
});
