# Italian Grammar

Mobilní aplikace pro postupné procvičování italské gramatiky.

Webová verze: <https://wojuta.github.io/italian-grammar/>

## Spuštění

Vyžaduje Node.js 20 nebo novější.

```bash
npm install
npm start
```

Po spuštění otevřete aplikaci v Expo Go pomocí QR kódu, případně stiskněte `a`, `i` nebo `w` pro Android, iOS či web.

## Aktuální obsah

- domovská obrazovka se vstupem do Gramatiky,
- samostatná lekce „Zájmena přímá a nepřímá“,
- 10 pevných cvičení po 10 otázkách A/B/C se zájmeny,
- 100 vět s přímými, nepřímými i kombinovanými zájmeny ve všech osobách,
- pevné přiřazení vět a jejich pořadí bez náhodného výběru,
- samostatná lekce „Budoucí čas“ s dalšími 10 cvičeními a 100 větami,
- lekce „Podmiňovací způsob“ s 10 cvičeními a 100 větami na condizionale presente,
- pravidelná i nepravidelná slovesa ve všech osobách,
- připomenutí nepravidelných budoucích kmenů před příslušným cvičením,
- lekce „Zvratná slovesa“ s 5 cvičeními a 50 větami včetně infinitivu a imperativu,
- lekce „Přítomný čas pravidelných sloves“ se 6 cvičeními a 60 větami, vždy dvěma pro -are, -ere a -ire,
- přehledy zájmen, koncovek a slovosledu přímo u lekcí,
- český překlad u všech 410 italských vět,
- okamžitá zpětná vazba s vysvětlením,
- závěrečné skóre a možnost cvičení zopakovat.

## Uživatelské účty a Supabase

Aplikace podporuje účty s uživatelským jménem a heslem bez zadávání e-mailu. Přihlášenému uživateli ukládá dokončená cvičení, nejlepší skóre a počet pokusů.

1. Vytvořte projekt v Supabase.
2. V **Authentication → Providers → Email** vypněte požadavek **Confirm email**. Aplikace používá interní technickou e-mailovou adresu odvozenou z uživatelského jména; uživatel ji nezadává ani nevidí.
3. V SQL Editoru spusťte migrace ze složky [`supabase/migrations`](supabase/migrations) v pořadí podle názvu.
4. Zkopírujte `.env.example` jako `.env` a doplňte URL projektu a veřejný anon klíč:

```text
EXPO_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
```

Anon klíč smí být ve webové aplikaci veřejný; přístup k datům omezuje Row Level Security. Nikdy do aplikace nevkládejte `service_role` klíč.

Protože účty nemají skutečný e-mail ani telefon, aplikace neumí automaticky obnovit zapomenuté heslo.
