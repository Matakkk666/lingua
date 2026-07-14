/* ============================================================
   AES Paid German Course 3: Deutsche Grammatik Pro (A2-B1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'de-grammar',
    title: 'Deutsche Grammatik Pro',
    price: 1000, oldPrice: 1990,
    level: 'A2-B1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'lavender',
    art: ['#E5DAF0', '#CDBCE6'],
    tagline: 'Master German grammar. 6 modules with exercises.',
    lessons: [
      {
        id: 'deg-l1', topic: 'Kasus: Nominativ, Akkusativ, Dativ',
        objective: 'Die deutschen Falle (Kasus) verstehen und richtig anwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Kasus: Nominativ, Akkusativ und Dativ',
          text: 'Im Deutschen gibt es vier Kasus (Falle): Nominativ, Akkusativ, Dativ und Genitiv. Fur Anfanger sind die wichtigsten drei: Nominativ, Akkusativ und Dativ.\n\n**Nominativ (кто? что?):**\nDer Nominativ ist der Grundfall. Er wird fur das Subjekt des Satzes verwendet.\n- Der Mann liest ein Buch. (Мужчина читает книгу.)\n- Die Frau ist Lehrerin. (Женщина — учительница.)\n- Das Kind spielt. (Ребёнок играет.)\n\nFragen: Wer? (кто?) oder Was? (что?)\n\n**Akkusativ (кого? что?):**\nDer Akkusativ wird fur das direkte Objekt verwendet. Bei maskulinen Artikeln andert sich der Artikel: der -> den.\n\nArtikel im Akkusativ:\n- der -> den (м.р.): Ich sehe den Mann. (Я вижу мужчину.)\n- die -> die (ж.р.): Ich sehe die Frau. (Я вижу женщину.)\n- das -> das (ср.р.): Ich sehe das Kind. (Я вижу ребёнка.)\n- die -> die (мн.ч.): Ich sehe die Kinder. (Я вижу детей.)\n\nFragen: Wen? (кого?) oder Was? (что?)\n\nWichtig: Nur der maskuline Artikel andert sich im Akkusativ! Feminin, Neutral und Plural bleiben gleich.\n\n**Dativ (кому? чему?):**\nDer Dativ wird fur das indirekte Objekt verwendet. Alle Artikel andern sich.\n\nArtikel im Dativ:\n- der -> dem (м.р.): Ich gebe dem Mann ein Buch. (Я даю мужчине книгу.)\n- die -> der (ж.р.): Ich gebe der Frau ein Buch. (Я даю женщине книгу.)\n- das -> dem (ср.р.): Ich gebe dem Kind ein Buch. (Я даю ребёнку книгу.)\n- die -> den (мн.ч.): Ich gebe den Kindern Bucher. (Я даю детям книги.)\n\nFragen: Wem? (кому?)\n\n**Pra positionalen mit Dativ:**\nViele Pra positionen verlangen den Dativ:\n- aus (из): aus dem Haus\n- bei (у): bei der Frau\n- mit (с): mit dem Auto\n- nach (в/после): nach Hause\n- seit (с тех пор): seit einem Jahr\n- von (от): von dem Mann\n- zu (к): zu dem Arzt (zum Arzt)\n\n**Pra positionen mit Akkusativ:**\n- durch (через): durch den Park\n- fur (для): fur den Mann\n- ohne (без): ohne das Buch\n- um (вокруг): um das Haus\n- gegen (против): gegen den Plan\n\n**Wechselpra positionen (Akkusativ + Dativ):**\nDiese Pra positionen brauchen Akkusativ (Wohin?) und Dativ (Wo?):\n- in (в): in den Raum (А) / in dem Raum (D)\n- auf (на): auf den Tisch (А) / auf dem Tisch (D)\n- an (на/у): an die Wand (А) / an der Wand (D)\n- unter (под): unter den Tisch (А) / unter dem Tisch (D)\n- vor (перед): vor das Haus (А) / vor dem Haus (D)\n- hinter (за): hinter das Haus (А) / hinter dem Haus (D)\n- neben (рядом): neben den Tisch (А) / neben dem Tisch (D)\n- uber (над): uber den Tisch (А) / uber dem Tisch (D)\n\nWohin? = Akkusativ (направление). Wo? = Dativ (место).',
          vocab: [
            { word: 'Nominativ (Wer? Was?)', trans: 'Именительный (кто? что?) — подлежащее' },
            { word: 'Akkusativ (Wen? Was?)', trans: 'Винительный (кого? что?) — прямое доп.' },
            { word: 'Dativ (Wem?)', trans: 'Дательный (кому?) — косв. доп.' },
            { word: 'der -> den (Akkusativ)', trans: 'м.р. артикль меняется в Akkusativ' },
            { word: 'der -> dem / die -> der (Dativ)', trans: 'Все артикли меняются в Dativ' },
            { word: 'in / auf / an (Wechsel)', trans: 'in/an/auf + Akk (куда?) / + Dat (где?)' },
            { word: 'mit / bei / aus (Dativ)', trans: 'Предлоги всегда с Dativ' },
            { word: 'fur / ohne / durch (Akkusativ)', trans: 'Предлоги всегда с Akkusativ' }
          ]
        },
        video: { slides: [
          { emoji: 'nom', title: 'Nominativ', text: 'Subjekt. Wer? Was? der Mann, die Frau, das Kind.' },
          { emoji: 'akk', title: 'Akkusativ', text: 'Direktes Objekt. Wen? Was? Nur der->den andert sich.' },
          { emoji: 'dat', title: 'Dativ', text: 'Indirektes Objekt. Wem? der->dem, die->der, das->dem.' },
          { emoji: 'akk-m', title: 'Akkusativ maskulin', text: 'der -> den. Ich sehe den Mann. Nur maskulin!' },
          { emoji: 'dat-all', title: 'Dativ alle', text: 'der->dem, die->der, das->dem, die->den. Alle andern sich.' },
          { emoji: 'mit', title: 'Pra+p mit Dativ', text: 'mit, bei, aus, seit, nach, von, zu. Immer Dativ.' },
          { emoji: 'wechsel', title: 'Wechselpra+p', text: 'in, auf, an, unter, vor. Wohin?+Akk, Wo?+Dat.' },
          { emoji: 'wohin', title: 'Wohin? vs Wo?', text: 'Wohin? = Akkusativ (движение). Wo? = Dativ (место).' }
        ]},
        quiz: { pool: [
          { q: 'Erganze: Ich sehe ___ Mann. (Akkusativ)', options: ['der', 'den', 'dem', 'des'], answer: 1, explain: 'Akkusativ maskulin: der -> den.' },
          { q: 'Erganze: Ich gebe ___ Frau ein Buch. (Dativ)', options: ['die', 'der', 'dem', 'den'], answer: 1, explain: 'Dativ feminin: die -> der.' },
          { q: 'Erganze: Ich sehe ___ Kind. (Akkusativ)', options: ['der', 'den', 'das', 'dem'], answer: 2, explain: 'Akkusativ neutral: das bleibt das.' },
          { q: 'Erganze: Ich gebe ___ Kind ein Buch. (Dativ)', options: ['das', 'der', 'dem', 'den'], answer: 2, explain: 'Dativ neutral: das -> dem.' },
          { q: 'Welcher Kasus fur das Subjekt?', options: ['Akkusativ', 'Dativ', 'Nominativ', 'Genitiv'], answer: 2, explain: 'Subjekt = Nominativ.' },
          { q: 'Erganze: Ich fahre ___ Auto. (mit + Dativ)', options: ['der', 'den', 'dem', 'das'], answer: 2, explain: 'mit + Dativ: dem Auto (das->dem).' },
          { q: 'Erganze: Das Geschenk ist ___ Mann. (fur + Akk)', options: ['fur der', 'fur den', 'fur dem', 'fur des'], answer: 1, explain: 'fur + Akkusativ: fur den Mann.' },
          { q: 'Wohin? Ich gehe ___ Schule. (in + Akk)', options: ['in der', 'in die', 'in den', 'in dem'], answer: 1, explain: 'Wohin? = Akkusativ. in die Schule (die->die).' },
          { q: 'Wo? Ich bin ___ Schule. (in + Dat)', options: ['in die', 'in der', 'in den', 'in das'], answer: 1, explain: 'Wo? = Dativ. in der Schule (die->der).' },
          { q: 'Erganze: Das Buch liegt ___ Tisch. (auf + Dat)', options: ['auf den', 'auf dem', 'auf der', 'auf das'], answer: 1, explain: 'Wo? = Dativ. auf dem Tisch (der->dem).' },
          { q: 'Erganze: Ich lege das Buch ___ Tisch. (auf + Akk)', options: ['auf dem', 'auf den', 'auf der', 'auf das'], answer: 1, explain: 'Wohin? = Akkusativ. auf den Tisch (der->den).' },
          { q: 'Erganze: Ich komme ___ Russland. (aus + Dat)', options: ['aus der', 'aus den', 'aus dem', 'aus des'], answer: 2, explain: 'aus + Dativ: aus Russland (Neutral->dem, aber Lander ohne Artikel).' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich sehe ___ Mann. (Akkusativ)', answer: 'den', explain: 'Akkusativ maskulin: der -> den.' },
          { type: 'fill-blank', question: 'Erganze: Ich gebe ___ Kind ein Buch. (Dativ)', answer: 'dem', explain: 'Dativ neutral: das -> dem.' },
          { type: 'choice', question: 'Welche Pra+p braucht immer Akkusativ?', options: ['mit', 'bei', 'fur', 'aus'], answer: 2, explain: 'fur + Akkusativ (mit, bei, aus + Dativ).' },
          { type: 'translate', question: 'Переведите: "Я даю мужчине книгу."', answer: 'Ich gebe dem Mann ein Buch', explain: 'Dativ: dem Mann (der->dem).' },
          { type: 'order', question: 'Ordne die Worter:', words: ['den', 'sehe', 'Ich', 'Mann'], answer: 'Ich sehe den Mann', explain: 'Akkusativ: der -> den.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich sehe der Mann."', answer: 'Ich sehe den Mann', explain: 'Akkusativ maskulin: der -> den.' }
        ]}
      },
      {
        id: 'deg-l2', topic: 'Artikel und Genus',
        objective: 'Das Genus der Substantive und die Artikel in allen Kasus beherrschen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Artikel und Genus im Deutschen',
          text: 'Im Deutschen hat jedes Substantiv ein festes Genus: maskulin (der), feminin (die) oder neutral (das). Das Genus ist oft unlogisch und muss mit jedem Wort gelernt werden.\n\n**Bestimmte Artikel in allen Kasus:**\n\nMaskulin (der):\n- Nominativ: der (der Mann)\n- Akkusativ: den (den Mann)\n- Dativ: dem (dem Mann)\n- Genitiv: des (des Mannes)\n\nFeminin (die):\n- Nominativ: die (die Frau)\n- Akkusativ: die (die Frau)\n- Dativ: der (der Frau)\n- Genitiv: der (der Frau)\n\nNeutral (das):\n- Nominativ: das (das Kind)\n- Akkusativ: das (das Kind)\n- Dativ: dem (dem Kind)\n- Genitiv: des (des Kindes)\n\nPlural (die):\n- Nominativ: die (die Kinder)\n- Akkusativ: die (die Kinder)\n- Dativ: den (den Kindern) — mit Endung -n!\n- Genitiv: der (der Kinder)\n\n**Unbestimmte Artikel:**\n- ein (m. Nom.): ein Mann\n- einen (m. Akk.): einen Mann\n- einem (m. Dat.): einem Mann\n- eines (m. Gen.): eines Mannes\n\n- eine (f. Nom.): eine Frau\n- eine (f. Akk.): eine Frau\n- einer (f. Dat.): einer Frau\n- einer (f. Gen.): einer Frau\n\n- ein (n. Nom.): ein Kind\n- ein (n. Akk.): ein Kind\n- einem (n. Dat.): einem Kind\n- eines (n. Gen.): eines Kindes\n\n**Genus-Regeln (Tipps):**\n\nMaskulin (der):\n- Worter auf -ismus: der Tourismus, der Kapitalismus\n- Worter auf -er (Personen/Berufe): der Lehrer, der Arzt\n- Tage, Monate, Jahreszeiten: der Montag, der Mai\n- Himmelsrichtungen: der Norden, der Suden\n\nFeminin (die):\n- Worter auf -ung: die Zeitung, die Wohnung\n- Worter auf -heit: die Gesundheit, die Freiheit\n- Worter auf -keit: die Moglichkeit, die Schwierigkeit\n- Worter auf -schaft: die Freundschaft\n- Worter auf -ion: die Information, die Nation\n- Worter auf -tat: die Universitat, die Qualitat\n- Die meisten Blumen und Baume: die Rose, die Eiche\n\nNeutral (das):\n- Worter auf -chen: das Madchen, das Brudchen\n- Worter auf -lein: das Hauslein\n- Worter auf -um: das Museum, das Zentrum\n- Infinitive als Substantiv: das Schwimmen, das Lernen\n- Die meisten Fremdsprachen: das Englisch, das Deutsch\n\n**Wichtige Ausnahmen:**\n- die Sonne (солнце — ж.р.)\n- der Mond (луна — м.р.)\n- das Madchen (девочка — ср.р., denn -chen ist immer neutral)\n- das Ende (конец — ср.р.)\n- die Hand (рука — ж.р.)',
          vocab: [
            { word: 'der / die / das (Nom.)', trans: 'Опред. артикль м. / ж. / ср. (Им. п.)' },
            { word: 'den / die / das (Akk.)', trans: 'Опред. артикль в Akkusativ' },
            { word: 'dem / der / dem (Dat.)', trans: 'Опред. артикль в Dativ' },
            { word: 'ein / eine / ein (Nom.)', trans: 'Неопред. артикль м. / ж. / ср.' },
            { word: '-ung / -heit / -keit = die', trans: 'Суффиксы ж.р.: -ung, -heit, -keit' },
            { word: '-ismus / -er = der', trans: 'Суффиксы м.р.: -ismus, -er (профессии)' },
            { word: '-chen / -lein = das', trans: 'Суффиксы ср.р.: -chen, -lein' },
            { word: 'Plural Dat. + -n', trans: 'Dativ мн.ч. добавляет -n: den Kindern' }
          ]
        },
        video: { slides: [
          { emoji: 'm-nom', title: 'der (Nom)', text: 'der Mann. Nominativ maskulin.' },
          { emoji: 'm-akk', title: 'den (Akk)', text: 'den Mann. Akkusativ maskulin — nur maskulin andert sich!' },
          { emoji: 'm-dat', title: 'dem (Dat)', text: 'dem Mann. Dativ maskulin.' },
          { emoji: 'f-dat', title: 'der (Dat feminin!)', text: 'der Frau. Dativ feminin: die -> der!' },
          { emoji: 'ung', title: '-ung = die', text: 'die Zeitung. -ung, -heit, -keit, -ion = feminin.' },
          { emoji: 'ismus', title: '-ismus = der', text: 'der Tourismus. -ismus, -er (Berufe) = maskulin.' },
          { emoji: 'chen', title: '-chen = das', text: 'das Madchen. -chen, -lein, -um = neutral.' },
          { emoji: 'pl-n', title: 'Plural Dat. + -n', text: 'den Kindern. Dativ Plural bekommt -n.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze (Akkusativ): Ich sehe ___ Mann.', options: ['der', 'den', 'dem', 'des'], answer: 1, explain: 'Akk. maskulin: der -> den.' },
          { q: 'Erganze (Dativ feminin): Ich gebe ___ Frau ein Buch.', options: ['die', 'der', 'dem', 'den'], answer: 1, explain: 'Dat. feminin: die -> der.' },
          { q: 'Welches Genus hat "-ung"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: '-ung = feminin: die Zeitung.' },
          { q: 'Welches Genus hat "-chen"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 2, explain: '-chen = neutral: das Madchen.' },
          { q: 'Erganze (unbest. Akk. m.): Ich habe ___ Hund.', options: ['ein', 'einen', 'einem', 'eines'], answer: 1, explain: 'Akk. maskulin unbest.: einen Hund.' },
          { q: 'Erganze (Dativ Plural): Ich gebe ___ Kindern Bucher.', options: ['die', 'den', 'dem', 'der'], answer: 1, explain: 'Dat. Plural: den (+ -n).' },
          { q: 'Welches Genus hat "-ismus"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 0, explain: '-ismus = maskulin: der Tourismus.' },
          { q: 'Erganze (Dativ neutral): Ich gebe ___ Kind ein Buch.', options: ['das', 'der', 'dem', 'den'], answer: 2, explain: 'Dat. neutral: das -> dem.' },
          { q: 'Welches Genus hat "Sonne"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: 'die Sonne — ж.р. (исключение).' },
          { q: 'Erganze (unbest. Dat. m.): Ich gebe ___ Mann ein Buch.', options: ['ein', 'einen', 'einem', 'einer'], answer: 2, explain: 'Dat. maskulin unbest.: einem Mann.' },
          { q: 'Welches Genus hat "-ion"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: '-ion = feminin: die Information.' },
          { q: 'Erganze (Genitiv m.): Das Auto ___ Mannes ist neu.', options: ['der', 'den', 'dem', 'des'], answer: 3, explain: 'Gen. maskulin: des Mannes.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze (Akk.): Ich sehe ___ Mann.', answer: 'den', explain: 'Akk. maskulin: der -> den.' },
          { type: 'fill-blank', question: 'Erganze (Dat. feminin): Ich gebe ___ Frau ein Buch.', answer: 'der', explain: 'Dat. feminin: die -> der.' },
          { type: 'choice', question: 'Welches Genus hat "-heit"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: '-heit = feminin: die Gesundheit.' },
          { type: 'translate', question: 'Переведите: "девочка" (с артиклем).', answer: 'das Madchen', explain: '-chen = ср.р.: das Madchen.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['den', 'sehe', 'Ich', 'Hund'], answer: 'Ich sehe den Hund', explain: 'Akk. maskulin: der -> den.' },
          { type: 'correct', question: 'Finde und korrigiere: "die Madchen"', answer: 'das Madchen', explain: '-chen = ср.р.: das Madchen.' }
        ]}
      },
      {
        id: 'deg-l3', topic: 'Modalverben',
        objective: 'Die deutschen Modalverben konjugieren und in Satzen verwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Modalverben im Deutschen',
          text: 'Modalverben drucken Moglichkeit, Notwendigkeit, Wunsch, Erlaubnis oder Fahigkeit aus. Im Deutschen gibt es sechs wichtige Modalverben.\n\n**Die sechs Modalverben:**\n1. mussen (долженствовать, быть обязанным) — necessity\n2. konnen (мочь, уметь) — ability/possibility\n3. wollen (хотеть) — desire\n4. sollen (быть должным по поручению) — obligation/request\n5. durfen (иметь разрешение) — permission\n6. mochten (хотеть бы) — polite desire\n\n**Konjugation der Modalverben (Prasens):**\n\nmussen (долженствовать):\nich muss, du musst, er/sie/es muss, wir mussen, ihr musst, sie/Sie mussen.\n\nkonnen (мочь):\nich kann, du kannst, er/sie/es kann, wir konnen, ihr konnt, sie/Sie konnen.\n\nwollen (хотеть):\nich will, du willst, er/sie/es will, wir wollen, ihr wollt, sie/Sie wollen.\n\nsollen (быть должным):\nich soll, du sollst, er/sie/es soll, wir sollen, ihr sollt, sie/Sie sollen.\n\ndurfen (иметь разрешение):\nich darf, du darfst, er/sie/es darf, wir durfen, ihr durft, sie/Sie durfen.\n\nmochten (хотеть бы — zeitform von mochten):\nich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten.\n\n**Besonderheiten der Modalverben:**\n1. Die 1. und 3. Person Singular haben keine -t Endung: ich muss (nicht: ich mosse), er kann (nicht: er kannt).\n2. Modalverben brauchen immer einen Infinitiv am Satzende: Ich muss arbeiten. (Я должен работать.)\n3. Der Infinitiv steht am Ende des Satzes: Ich kann heute nicht kommen. (Я не могу прийти сегодня.)\n\n**Verwendung:**\n- mussen: Ich muss arbeiten. (Я должен работать.)\n- konnen: Ich kann schwimmen. (Я умею плавать.)\n- wollen: Ich will lernen. (Я хочу учиться.)\n- sollen: Ich soll das machen. (Мне поручили это сделать.)\n- durfen: Hier darf man rauchen. (Здесь можно курить.)\n- mochten: Ich mochte einen Kaffee. (Я хотел бы кофе.)\n\n**Unterschied mussen vs sollen:**\n- mussen = внутренняя обязанность: Ich muss essen. (Я должен есть — мне это необходимо.)\n- sollen = внешнее поручение: Der Arzt sagt, ich soll ruhig bleiben. (Врач сказал, я должен сохранять спокойствие.)\n\n**Unterschied wollen vs mochten:**\n- wollen = прямое желание: Ich will gehen. (Я хочу уйти.)\n- mochten = вежливое желание: Ich mochte einen Tee. (Я хотел бы чай.)\n\nUbung: Bilden Sie Satze mit jedem Modalverb!',
          vocab: [
            { word: 'mussen (ich muss, du musst)', trans: 'должен (необходимость)' },
            { word: 'konnen (ich kann, du kannst)', trans: 'мочь, уметь (способность)' },
            { word: 'wollen (ich will, du willst)', trans: 'хотеть (прямое желание)' },
            { word: 'sollen (ich soll, du sollst)', trans: 'быть должным (поручение)' },
            { word: 'durfen (ich darf, du darfst)', trans: 'иметь разрешение (можно)' },
            { word: 'mochten (ich mochte)', trans: 'хотеть бы (вежливое желание)' },
            { word: 'Infinitiv am Ende', trans: 'Инфинитив в конце предложения' },
            { word: 'mussen vs sollen', trans: 'внутренняя необходимость vs внешнее поручение' }
          ]
        },
        video: { slides: [
          { emoji: 'mussen', title: 'mussen', text: 'ich muss, du musst, er muss. Должен (необходимость).' },
          { emoji: 'konnen', title: 'konnen', text: 'ich kann, du kannst, er kann. Мочь, уметь.' },
          { emoji: 'wollen', title: 'wollen', text: 'ich will, du willst, er will. Хотеть.' },
          { emoji: 'sollen', title: 'sollen', text: 'ich soll, du sollst, er soll. Быть должным (поручение).' },
          { emoji: 'durfen', title: 'durfen', text: 'ich darf, du darfst, er darf. Иметь разрешение.' },
          { emoji: 'mochte', title: 'mochten', text: 'ich mochte. Хотеть бы (вежливо).' },
          { emoji: 'inf', title: 'Infinitiv am Ende', text: 'Modalverb + Infinitiv am Ende. Ich muss arbeiten.' },
          { emoji: 'vs', title: 'mussen vs sollen', text: 'mussen = внутренняя необходимость. sollen = внешнее поручение.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze: Ich ___ arbeiten. (должен)', options: ['kann', 'muss', 'will', 'darf'], answer: 1, explain: 'mussen: ich muss = должен.' },
          { q: 'Erganze: Ich ___ schwimmen. (умею)', options: ['muss', 'kann', 'will', 'soll'], answer: 1, explain: 'konnen: ich kann = умею.' },
          { q: 'Erganze: Ich ___ einen Kaffee. (хотел бы)', options: ['will', 'mochte', 'muss', 'kann'], answer: 1, explain: 'mochten: ich mochte = хотел бы.' },
          { q: 'Erganze: Hier ___ man rauchen. (разрешено)', options: ['muss', 'kann', 'darf', 'soll'], answer: 2, explain: 'durfen: darf = разрешено.' },
          { q: 'Erganze: Der Arzt sagt, ich ___ ruhig bleiben. (поручение)', options: ['muss', 'soll', 'will', 'kann'], answer: 1, explain: 'sollen: soll = поручение врача.' },
          { q: 'Wo steht der Infinitiv bei Modalverben?', options: ['Am Anfang', 'In der Mitte', 'Am Ende', 'Uberall'], answer: 2, explain: 'Infinitiv am Satzende: Ich muss arbeiten.' },
          { q: 'Erganze: Du ___ lernen. (должен)', options: ['muss', 'musst', 'mussen', 'musse'], answer: 1, explain: 'mussen 2. Person: du musst.' },
          { q: 'Erganze: Er ___ gut kochen. (умеет)', options: ['kannst', 'kann', 'konnen', 'kanne'], answer: 1, explain: 'konnen 3. Person: er kann.' },
          { q: 'Erganze: Wir ___ gehen. (хотим)', options: ['will', 'wollen', 'willst', 'wollt'], answer: 1, explain: 'wollen 1. Person Plural: wir wollen.' },
          { q: 'Erganze: ___ ich hier parken? (можно ли?)', options: ['Muss', 'Kann', 'Darf', 'Soll'], answer: 2, explain: 'durfen als Frage: Darf ich? = можно ли?' },
          { q: 'Erganze: Ich ___ einen Tee bestellen. (хотел бы)', options: ['will', 'mochte', 'muss', 'kann'], answer: 1, explain: 'mochten = вежливое желание.' },
          { q: 'Was bedeutet "mussen"?', options: ['Хотеть', 'Должен (необходимость)', 'Уметь', 'Разрешено'], answer: 1, explain: 'mussen = внутренняя необходимость.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich ___ arbeiten. (должен)', answer: 'muss', explain: 'mussen: ich muss.' },
          { type: 'fill-blank', question: 'Erganze: Ich ___ schwimmen. (умею)', answer: 'kann', explain: 'konnen: ich kann.' },
          { type: 'choice', question: 'Erganze: Ich ___ einen Kaffee. (хотел бы)', options: ['will', 'mochte', 'muss', 'kann'], answer: 1, explain: 'mochten = вежливое желание.' },
          { type: 'translate', question: 'Переведите: "Я должен работать."', answer: 'Ich muss arbeiten', explain: 'mussen + Infinitiv am Ende.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['muss', 'Ich', 'arbeiten'], answer: 'Ich muss arbeiten', explain: 'Modalverb + Infinitiv am Ende.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich mussen arbeiten."', answer: 'Ich muss arbeiten', explain: '1. Person Singular: ich muss (без -en).' }
        ]}
      },
      {
        id: 'deg-l4', topic: 'Vergangenheit: Perfekt und Prateritum',
        objective: 'Die Vergangenheitsformen Perfekt und Prateritum bilden und verwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Perfekt und Prateritum im Deutschen',
          text: 'Im Deutschen gibt es zwei wichtige Vergangenheitsformen: das Perfekt und das Prateritum. Das Perfekt wird hauptsachlich in der gesprochenen Sprache verwendet, das Prateritum in der geschriebenen Sprache.\n\n**Perfekt:**\nDas Perfekt wird gebildet mit: Hilfsverb (haben/sein) + Partizip II.\n\n- Ich habe gesprochen. (Я говорил.)\n- Sie hat gegessen. (Она поела.)\n- Wir sind gekommen. (Мы пришли.)\n- Er ist gegangen. (Он ушёл.)\n\n**Hilfsverb haben oder sein?**\n- haben: die meisten Verben (spielen, essen, trinken, lesen...)\n- sein: Verben der Bewegung (gehen, kommen, fahren, fliegen, rennen) und Verben der Zustandsanderung (werden, bleiben, einschlafen)\n\n**Partizip II Bildung:**\nRegelmassige Verben: ge- + Stamm + -t\n- spielen -> gespielt\n- machen -> gemacht\n- lernen -> gelernt\n\nUnregelmasige Verben: ge- + Stamm + -en\n- sprechen -> gesprochen\n- essen -> gegessen\n- trinken -> getrunken\n- sehen -> gesehen\n- schreiben -> geschrieben\n- finden -> gefunden\n\nVerben mit untrennbaren Vorsilben (be-, ver-, er-, ent-, zer-): kein ge-\n- besuchen -> besucht\n- verstehen -> verstanden\n- erzahlen -> erzahlt\n\nVerben auf -ieren: kein ge-\n- studieren -> studiert\n- probieren -> probiert\n\n**Prateritum:**\nDas Prateritum ist die einfache Vergangenheit, hauptsachlich in geschrieben Texten.\n\nRegelmassige Verben: Stamm + -te, -test, -te, -ten, -tet, -ten.\n- ich machte, du machtest, er machte, wir machten, ihr machtet, sie machten.\n\nUnregelmasige Verben haben Vokalwechsel:\n- sein: ich war, du warst, er war, wir waren...\n- haben: ich hatte, du hattest, er hatte...\n- gehen: ich ging, du gingst, er ging...\n- kommen: ich kam, du kamst, er kam...\n- sprechen: ich sprach, du sprachst, er sprach...\n- sehen: ich sah, du sahst, er sah...\n\n**Wann Perfekt, wann Prateritum?**\n- Perfekt: gesprochene Sprache, Gesprache, informelle Texte\n- Prateritum: geschriebene Sprache, Bucher, Zeitungen, formelle Texte\n\nBeispiel:\n- Gesprochen: Ich habe gestern einen Film gesehen.\n- Geschrieben: Gestern sah ich einen Film.\n\nBeide bedeuten das Gleiche, aber der Kontext bestimmt die Form.',
          vocab: [
            { word: 'ich habe gesprochen', trans: 'я говорил (Perfekt)' },
            { word: 'ich sprach', trans: 'я говорил (Prateritum)' },
            { word: 'haben / sein + Partizip II', trans: 'Образование Perfekt' },
            { word: 'ge- + Stamm + -t', trans: 'Образование Partizip II (регулярные)' },
            { word: 'sein (Bewegung)', trans: 'sein для глаголов движения: gehen, kommen' },
          { word: 'war / hatte / ging / kam', trans: 'Prateritum непр.: был / имел / шёл / пришёл' },
            { word: 'Perfekt = gesprochen', trans: 'Perfekt = разговорная форма' },
            { word: 'Prateritum = geschrieben', trans: 'Prateritum = письменная форма' }
          ]
        },
        video: { slides: [
          { emoji: 'perf', title: 'Perfekt', text: 'haben/sein + Partizip II. Ich habe gesprochen.' },
          { emoji: 'prat', title: 'Prateritum', text: 'Einfache Vergangenheit. Ich sprach. Geschriebene Sprache.' },
          { emoji: 'ge-t', title: 'Partizip II regelmasig', text: 'ge- + Stamm + -t. spielen -> gespielt.' },
          { emoji: 'ge-en', title: 'Partizip II unregelmasig', text: 'ge- + Stamm + -en. sprechen -> gesprochen.' },
          { emoji: 'haben', title: 'haben vs sein', text: 'haben: die meisten. sein: Bewegung (gehen) + Zustand (werden).' },
          { emoji: 'be', title: 'Ohne ge-', text: 'be-, ver-, er-, ent-: kein ge-. besuchen -> besucht.' },
          { emoji: 'war', title: 'Prateritum unreg.', text: 'war, hatte, ging, kam, sprach, sah.' },
          { emoji: 'vs', title: 'Perf. vs Prat.', text: 'Perfekt = gesprochen. Prateritum = geschrieben.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze (Perfekt): Ich ___ gespielt.', options: ['bin', 'habe', 'war', 'hatte'], answer: 1, explain: 'spielen -> haben: Ich habe gespielt.' },
          { q: 'Erganze (Perfekt): Ich ___ gegangen.', options: ['habe', 'bin', 'war', 'hatte'], answer: 1, explain: 'gehen -> sein: Ich bin gegangen.' },
          { q: 'Wie bildet man Partizip II von "spielen"?', options: ['gespielen', 'gespielt', 'gespielt', 'gespielt'], answer: 1, explain: 'ge- + spiel + -t = gespielt.' },
          { q: 'Wie bildet man Partizip II von "sprechen"?', options: ['gesprechen', 'gesprochen', 'gesprecht', 'gesprocht'], answer: 1, explain: 'ge- + sprech + -en = gesprochen (unreg.).' },
          { q: 'Welches Hilfsverb fur "gehen"?', options: ['haben', 'sein', 'beide', 'keines'], answer: 1, explain: 'gehen = Bewegung -> sein.' },
          { q: 'Welches Hilfsverb fur "essen"?', options: ['haben', 'sein', 'beide', 'keines'], answer: 0, explain: 'essen -> haben (kein Bewegung).' },
          { q: 'Erganze (Prateritum "sein"): Ich ___ krank.', options: ['war', 'hatte', 'wurde', 'blieb'], answer: 0, explain: 'sein Prateritum: ich war.' },
          { q: 'Erganze (Prateritum "haben"): Ich ___ Hunger.', options: ['war', 'hatte', 'wurde', 'blieb'], answer: 1, explain: 'haben Prateritum: ich hatte.' },
          { q: 'Wie lautet Partizip II von "besuchen"?', options: ['gebesucht', 'besucht', 'besuchen', 'besuchte'], answer: 1, explain: 'be- = untrennbar: kein ge-. besucht.' },
          { q: 'Wie lautet Partizip II von "studieren"?', options: ['gestudiert', 'studiert', 'studieren', 'studieret'], answer: 1, explain: '-ieren: kein ge-. studiert.' },
          { q: 'Erganze (Prateritum "gehen"): Ich ___ nach Hause.', options: ['ging', 'ginge', 'gegangen', 'gingen'], answer: 0, explain: 'gehen Prateritum: ich ging.' },
          { q: 'Wann verwendet man Perfekt?', options: ['In Buchern', 'In Gesprachen', 'Nie', 'Immer'], answer: 1, explain: 'Perfekt = gesprochene Sprache.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich ___ Pizza gegessen. (Perfekt)', answer: 'habe', explain: 'haben + Partizip II.' },
          { type: 'fill-blank', question: 'Erganze: Ich ___ nach Hause gegangen. (Perfekt)', answer: 'bin', explain: 'gehen -> sein.' },
          { type: 'choice', question: 'Wie lautet Partizip II von "sprechen"?', options: ['gesprechen', 'gesprochen', 'gesprecht', 'gesproch'], answer: 1, explain: 'Unregelmasig: gesprochen.' },
          { type: 'translate', question: 'Переведите: "Я говорил с ним."', answer: 'Ich habe mit ihm gesprochen', explain: 'Perfekt: haben + gesprochen.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['gespielt', 'habe', 'Ich'], answer: 'Ich habe gespielt', explain: 'Perfekt.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich bin gespielt."', answer: 'Ich habe gespielt', explain: 'spielen -> haben, nicht sein.' }
        ]}
      },
      {
        id: 'deg-l5', topic: 'Wortstellung im Satz',
        objective: 'Die Grundregeln der deutschen Wortstellung beherrschen und anwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Wortstellung im Deutschen',
          text: 'Die deutsche Wortstellung hat klare Regeln. Die wichtigste Regel ist: das Verb steht in Aussagesatzen an Position 2.\n\n**Hauptsatz (Aussagesatz):**\nDas konjugierte Verb steht an Position 2.\n- Ich gehe heute ins Kino. (Я иду сегодня в кино.)\n- Heute gehe ich ins Kino. (Сегодня я иду в кино.)\n- Ins Kino gehe ich heute. (В кино я иду сегодня.)\n\nIn allen drei Satzen steht das Verb (gehe) an Position 2! Das erste Element kann variieren.\n\n**Position 2-Regel:**\nPosition 1 kann sein: Subjekt, Zeitangabe, Ort, Objekt, etc.\nPosition 2 ist immer das konjugierte Verb.\n- Gestern habe ich einen Film gesehen. (Вчера я посмотрел фильм.)\n- Am Montag fahre ich nach Berlin. (В понедельник я еду в Берлин.)\n\n**TeKaMoLo-Regel:**\nWenn es mehrere Angaben gibt, gilt die Reihenfolge: Temporal (wann) - Kausal (warum) - Modal (wie) - Lokal (wohin).\n\n- Ich fahre morgen (Temporal) wegen einer Konferenz (Kausal) mit dem Zug (Modal) nach Berlin (Lokal).\n\nVereinfacht: Zeit vor Ort.\n- Ich gehe heute (Zeit) ins Kino (Ort). (nicht: Ich gehe ins Kino heute.)\n\n**Dativ vor Akkusativ:**\nWenn es zwei Objekte gibt, steht das Dativ-Objekt vor dem Akkusativ-Objekt.\n- Ich gebe dem Mann (Dat) das Buch (Akk). (Я даю мужчине книгу.)\n- Ich schicke der Frau (Dat) eine Email (Akk). (Я отправляю женщине email.)\n\nAber: Wenn das Akkusativ-Objekt ein Pronomen ist, steht es vor dem Dativ.\n- Ich gebe es (Akk-Pron.) dem Mann (Dat). (Я даю его мужчине.)\n\n**Nebensatz:**\nIm Nebensatz steht das konjugierte Verb am Ende.\n- Ich denke, dass er heute kommt. (Я думаю, что он сегодня придёт.)\n- Ich weiss nicht, ob er Zeit hat. (Я не знаю, есть ли у него время.)\n- Weil ich krank bin, bleibe ich zu Hause. (Потому что я болен, я остаюсь дома.)\n\n**Fragesatze:**\nEntscheidungsfrage (Ja/Nein): Verb an Position 1.\n- Kommst du heute? (Ты придёшь сегодня?)\n- Hast du Zeit? (У тебя есть время?)\n\nW-Frage: Fragewort an Position 1, Verb an Position 2.\n- Wann kommst du? (Когда ты придёшь?)\n- Wo wohnst du? (Где ты живёшь?)\n- Was machst du? (Что ты делаешь?)\n\n**Konjunktionen und Wortstellung:**\n- Und, aber, oder, denn: kein Wortstellungswechsel (Position 2 bleibt).\n  Ich komme, aber ich habe wenig Zeit.\n- Weil, dass, ob: Verb ans Ende (Nebensatz).\n  Ich komme nicht, weil ich krank bin.\n\nUbung: Bilden Sie eigene Satze und achten Sie auf die Wortstellung!',
          vocab: [
            { word: 'Verb an Position 2', trans: 'Глагол на 2-й позиции (в утвердительных)' },
            { word: 'TeKaMoLo', trans: 'Порядок: Время - Причина - Образ - Место' },
            { word: 'Zeit vor Ort', trans: 'Временное обстоятельство перед местом' },
            { word: 'Dativ vor Akkusativ', trans: 'Дательный перед винительным (существительные)' },
            { word: 'Pronomen Akk vor Dat', trans: 'Местоимение-вин. перед дат. (es vor dem Mann)' },
            { word: 'Verb am Ende (Nebensatz)', trans: 'Глагол в конце (в придаточном предложении)' },
            { word: 'weil / dass / ob', trans: 'Союзы: потому что / что / ли (глагол в конец)' },
            { word: 'und / aber / oder / denn', trans: 'Союзы: глагол остаётся на 2-й позиции' }
          ]
        },
        video: { slides: [
          { emoji: 'pos2', title: 'Position 2', text: 'Verb immer an Position 2. Ich gehe heute ins Kino.' },
          { emoji: 'tekamolo', title: 'TeKaMoLo', text: 'Temporal-Kausal-Modal-Lokal. Zeit vor Ort.' },
          { emoji: 'dat-akk', title: 'Dat vor Akk', text: 'Ich gebe dem Mann das Buch. Dativ vor Akkusativ.' },
          { emoji: 'pron', title: 'Pron. Akk vor Dat', text: 'Ich gebe es dem Mann. Pronomen Akk vor Dativ.' },
          { emoji: 'neben', title: 'Nebensatz', text: 'Verb am Ende: Ich denke, dass er kommt.' },
          { emoji: 'weil', title: 'weil / dass / ob', text: 'Verb ans Ende: weil ich krank bin.' },
          { emoji: 'aber', title: 'und / aber / oder', text: 'Position 2 bleibt: Ich komme, aber ich habe Zeit.' },
          { emoji: 'frage', title: 'Fragen', text: 'Ja/Nein: Verb Pos.1. W-Frage: W-Wort Pos.1 + Verb Pos.2.' }
        ]},
        quiz: { pool: [
          { q: 'Wo steht das Verb im Hauptsatz?', options: ['Position 1', 'Position 2', 'Am Ende', 'Uberall'], answer: 1, explain: 'Verb an Position 2 im Hauptsatz.' },
          { q: 'Erganze: Heute ___ ich ins Kino.', options: ['gehe', 'ich', 'Kino', 'heute'], answer: 0, explain: 'Position 2 = Verb: gehe.' },
          { q: 'Was gilt fur Zeit und Ort?', options: ['Ort vor Zeit', 'Zeit vor Ort', 'Beliebig', 'Nur Zeit'], answer: 1, explain: 'Zeit vor Ort: Ich gehe heute ins Kino.' },
          { q: 'Erganze: Ich gebe ___ Mann das Buch. (Dativ)', options: ['den', 'dem', 'der', 'des'], answer: 1, explain: 'Dativ maskulin: dem Mann. Dativ vor Akk.' },
          { q: 'Erganze: Ich gebe ___ dem Mann. (Akk. Pronomen)', options: ['das Buch', 'es', 'den Mann', 'er'], answer: 1, explain: 'Pronomen Akk vor Dativ: es vor dem Mann.' },
          { q: 'Wo steht das Verb im Nebensatz?', options: ['Position 1', 'Position 2', 'Am Ende', 'In der Mitte'], answer: 2, explain: 'Im Nebensatz steht das Verb am Ende.' },
          { q: 'Erganze: Ich denke, dass er heute ___.', options: ['kommt', 'kommen', 'kommen wird', 'gekommen'], answer: 0, explain: 'Nebensatz: Verb am Ende. kommt.' },
          { q: 'Erganze: Ich komme nicht, weil ich ___ krank.', options: ['bin', 'ist', 'sind', 'bist'], answer: 0, explain: 'weil + Nebensatz: Verb am Ende. bin.' },
          { q: 'Welche Konjunktion andert die Wortstellung NICHT?', options: ['weil', 'dass', 'aber', 'ob'], answer: 2, explain: 'und, aber, oder, denn: Position 2 bleibt.' },
          { q: 'Erganze: Ich komme, ___ ich habe wenig Zeit.', options: ['weil', 'dass', 'aber', 'ob'], answer: 2, explain: 'aber: Position 2 bleibt.' },
          { q: 'Wie fragt man (W-Frage)?', options: ['Kommst du?', 'Wann kommst du?', 'Du kommst?', 'Komm?'], answer: 1, explain: 'W-Frage: W-Wort + Verb Pos.2.' },
          { q: 'Erganze: ___ du heute Zeit? (Ja/Nein-Frage)', options: ['Wann', 'Hast', 'Du', 'Weil'], answer: 1, explain: 'Ja/Nein-Frage: Verb an Pos.1. Hast du...?' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Heute ___ ich ins Kino. (Verb Pos.2)', answer: 'gehe', explain: 'Verb an Position 2.' },
          { type: 'fill-blank', question: 'Erganze: Ich denke, dass er heute ___. (Nebensatz)', answer: 'kommt', explain: 'Nebensatz: Verb am Ende.' },
          { type: 'choice', question: 'Welche Konjunktion andert die Wortstellung?', options: ['und', 'aber', 'weil', 'oder'], answer: 2, explain: 'weil: Verb ans Ende (Nebensatz).' },
          { type: 'translate', question: 'Переведите: "Я не приду, потому что я болен."', answer: 'Ich komme nicht, weil ich krank bin', explain: 'weil + Nebensatz: Verb am Ende.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Kino', 'ins', 'heute', 'gehe', 'Ich'], answer: 'Ich gehe heute ins Kino', explain: 'Pos.2 = Verb. Zeit vor Ort.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich gehe ins Kino heute."', answer: 'Ich gehe heute ins Kino', explain: 'Zeit vor Ort: heute vor ins Kino.' }
        ]}
      },
      {
        id: 'deg-l6', topic: 'Adjektivendungen',
        objective: 'Die deutschen Adjektivendungen mit und ohne Artikel richtig verwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Adjektivendungen im Deutschen',
          text: 'Die Adjektivendungen im Deutschen sind eines der komplexesten Themen. Die Endung hangt vom Genus, Kasus, Artikel und Numerus ab.\n\n**Drei Typen der Adjektivdeklination:**\n\n1. Nach bestimmten Artikeln (der, die, das)\n2. Nach unbestimmten Artikeln (ein, eine, ein)\n3. Ohne Artikel (Nullartikel)\n\n**1. Nach bestimmten Artikeln:**\nDie Endung ist meistens -e oder -en.\n\nNominativ:\n- der gute Mann (м.р.)\n- die gute Frau (ж.р.)\n- das gute Kind (ср.р.)\n- die guten Kinder (мн.ч.)\n\nAkkusativ:\n- den guten Mann (м.р.)\n- die gute Frau (ж.р.)\n- das gute Kind (ср.р.)\n- die guten Kinder (мн.ч.)\n\nDativ:\n- dem guten Mann (м.р.)\n- der guten Frau (ж.р.)\n- dem guten Kind (ср.р.)\n- den guten Kindern (мн.ч.)\n\nRegel: Im Nominativ (alle) und Akkusativ (f., n.) ist die Endung -e. In allen anderen Fallen ist sie -en.\n\n**2. Nach unbestimmten Artikeln (ein, eine):**\nDie Endung zeigt das Genus/Kasus, da der Artikel es nicht immer zeigt.\n\nNominativ:\n- ein guter Mann (м.р.): -er\n- eine gute Frau (ж.р.): -e\n- ein gutes Kind (ср.р.): -es\n\nAkkusativ:\n- einen guten Mann (м.р.): -en\n- eine gute Frau (ж.р.): -e\n- ein gutes Kind (ср.р.): -es\n\nDativ:\n- einem guten Mann (м.р.): -en\n- einer guten Frau (ж.р.): -en\n- einem guten Kind (ср.р.): -en\n\n**3. Ohne Artikel (Nullartikel):**\nDie Endung muss das Genus/Kasus komplett anzeigen.\n\nNominativ:\n- guter Mann (м.р.): -er\n- gute Frau (ж.р.): -e\n- gutes Kind (ср.р.): -es\n- gute Kinder (мн.ч.): -e\n\nAkkusativ:\n- guten Mann (м.р.): -en\n- gute Frau (ж.р.): -e\n- gutes Kind (ср.р.): -es\n- gute Kinder (мн.ч.): -e\n\nDativ:\n- gutem Mann (м.р.): -em\n- guter Frau (ж.р.): -er\n- gutem Kind (ср.р.): -em\n- guten Kindern (мн.ч.): -en\n\n**Tipps zum Lernen:**\n1. Lernen Sie zuerst die Endungen nach bestimmten Artikeln (einfachsten).\n2. Merken Sie: -e im Nom./Akk.(f.,n.), -en sonst.\n3. Bei unbestimmten Artikeln: ahnlich wie Nullartikel, aber der Artikel zeigt manchmal das Genus.\n4. Ohne Artikel: die Endung zeigt alles (-er, -e, -es, -em).\n\nDie wichtigsten Endungen sind -e, -en, -er, -es, -em. Mit Ubung werden sie automatisch.',
          vocab: [
            { word: 'der gute Mann / die gute Frau', trans: 'хороший мужчина / хорошая женщина (после определённого)' },
            { word: 'ein guter Mann / eine gute Frau', trans: 'хороший мужчина / женщина (после неопределённого)' },
            { word: 'guter Mann / gute Frau (ohne)', trans: 'хороший мужчина / женщина (без артикля)' },
            { word: '-e / -en (nach bestimmtem)', trans: '-e (Nom/Akk f,n) / -en (sonst) после определённого' },
            { word: '-er / -es (unbest. Nom)', trans: '-er (м.р.) / -es (ср.р.) после неопр. в Nom.' },
            { word: '-em / -er (Dat. ohne Artikel)', trans: '-em (м.р./ср.р.) / -er (ж.р.) в Dativ без артикля' },
            { word: 'der gute Mann vs ein guter Mann', trans: 'После опред. = -e, после неопр. = -er' },
            { word: 'Pos.2 = -en (Dativ alle)', trans: 'Dativ: immer -en nach bestimmtem Artikel' }
          ]
        },
        video: { slides: [
          { emoji: 'best', title: 'Nach bestimmtem Artikel', text: 'der gute Mann, die gute Frau. -e (Nom/Akk f,n), -en (sonst).' },
          { emoji: 'unbest', title: 'Nach unbestimmtem Artikel', text: 'ein guter Mann, eine gute Frau. Endung zeigt Genus.' },
          { emoji: 'null', title: 'Ohne Artikel', text: 'guter Mann, gute Frau. Endung zeigt alles.' },
          { emoji: 'nom', title: 'Nominativ', text: 'der gute Mann (best.), ein guter Mann (unbest.)' },
          { emoji: 'akk', title: 'Akkusativ', text: 'den guten Mann (best.), einen guten Mann (unbest.)' },
          { emoji: 'dat', title: 'Dativ', text: 'dem guten Mann (best.), einem guten Mann (unbest.). Immer -en nach best.' },
          { emoji: 'e-en', title: 'Regel: -e / -en', text: 'Nach bestem Artikel: -e (Nom/Akk f,n), -en (sonst).' },
          { emoji: 'tip', title: 'Tipp', text: 'Lernen Sie zuerst die Endungen nach bestem Artikel.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze: der ___ Mann (Nom. m., nach best.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 1, explain: 'Nach best. Artikel Nom. m.: -e. der gute Mann.' },
          { q: 'Erganze: ein ___ Mann (Nom. m., nach unbest.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 0, explain: 'Nach unbest. Nom. m.: -er. ein guter Mann.' },
          { q: 'Erganze: den ___ Mann (Akk. m., nach best.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 2, explain: 'Nach best. Akk. m.: -en. den guten Mann.' },
          { q: 'Erganze: eine ___ Frau (Nom. f., nach unbest.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 1, explain: 'Nach unbest. Nom. f.: -e. eine gute Frau.' },
          { q: 'Erganze: das ___ Kind (Nom. n., nach best.)', options: ['guter', 'gute', 'gutes', 'gutem'], answer: 2, explain: 'Nach best. Nom. n.: -e. das gute Kind.' },
          { q: 'Erganze: ein ___ Kind (Nom. n., nach unbest.)', options: ['guter', 'gute', 'gutes', 'gutem'], answer: 2, explain: 'Nach unbest. Nom. n.: -es. ein gutes Kind.' },
          { q: 'Erganze: dem ___ Mann (Dat. m., nach best.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 2, explain: 'Nach best. Dat.: -en. dem guten Mann.' },
          { q: 'Erganze: guter ___ (Nom. m., ohne Artikel)', options: ['Mann', 'Manner', 'gute', 'guter'], answer: 0, explain: 'Ohne Artikel Nom. m.: guter Mann (-er).' },
          { q: 'Erganze: Ich sehe einen ___ Film. (Akk. m., unbest.)', options: ['interessanter', 'interessante', 'interessanten', 'interessantem'], answer: 2, explain: 'Nach unbest. Akk. m.: -en. einen interessanten Film.' },
          { q: 'Erganze: die ___ Kinder (Nom. Pl., nach best.)', options: ['guter', 'gute', 'guten', 'gutem'], answer: 1, explain: 'Nach best. Nom. Pl.: -e. die guten Kinder.' },
          { q: 'Erganze: Das ist ein ___ Buch. (Nom. n., unbest.)', options: ['guter', 'gute', 'gutes', 'gutem'], answer: 2, explain: 'Nach unbest. Nom. n.: -es. ein gutes Buch.' },
          { q: 'Welche Endung nach bestem Artikel im Dativ?', options: ['-e', '-er', '-en', '-em'], answer: 2, explain: 'Nach best. Artikel Dativ: immer -en.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: der ___ Mann (Nom. m., best.).', answer: 'gute', explain: 'Nach best. Nom. m.: -e.' },
          { type: 'fill-blank', question: 'Erganze: ein ___ Mann (Nom. m., unbest.).', answer: 'guter', explain: 'Nach unbest. Nom. m.: -er.' },
          { type: 'choice', question: 'Erganze: den ___ Mann (Akk. m., best.).', options: ['guter', 'gute', 'guten', 'gutem'], answer: 2, explain: 'Nach best. Akk. m.: -en.' },
          { type: 'translate', question: 'Переведите: "хороший мужчина" (с опред. артиклем, Nom.)', answer: 'der gute Mann', explain: 'Nach best. Nom. m.: -e.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['gute', 'der', 'Frau'], answer: 'der gute Frau', explain: 'Nach best. Nom. f.: -e. (Но правильно: die gute Frau — ж.р.!)' },
          { type: 'correct', question: 'Finde und korrigiere: "der guter Mann"', answer: 'der gute Mann', explain: 'Nach bestem Artikel: -e, nicht -er.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._german_course_3 = COURSE;
})(window);
