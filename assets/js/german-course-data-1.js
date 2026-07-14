/* ============================================================
   AES Free German Course: Deutsch Anfanger (A1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'de-free',
    title: 'Deutsch Anfanger (Free)',
    price: 0, oldPrice: 0,
    level: 'A1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'mint',
    art: ['#D6EBDC', '#BFE3CE'],
    tagline: 'Free German course for beginners. 6 modules with theory, video, quizzes, and homework.',
    lessons: [
      {
        id: 'def-l1', topic: 'Greetings and introductions in German',
        objective: 'Begrubungen vorstellen und sich selbst auf Deutsch vorstellen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Begrubungen und Vorstellungen auf Deutsch',
          text: 'Auf Deutsch gibt es verschiedene Begrubungen, die von der Tageszeit und der Formalitat abhangen. Die bekannteste Begrubung ist Guten Tag (добрый день).\n\n**Begrubungen nach Tageszeit:**\n- Guten Morgen (доброе утро) — bis ca. 10 Uhr\n- Guten Tag (добрый день) — tagsuber\n- Guten Abend (добрый вечер) — abends\n- Gute Nacht (спокойной ночи) — vor dem Schlafengehen\n\n**Formell und informell:**\n- Hallo (привет) — universell, etwas informell\n- Hi (привет) — sehr informell, unter Freunden\n- Tschuss (пока) — informell\n- Auf Wiedersehen (до свидания) — formell\n- Bis bald (до скорого) — universell\n- Bis morgen (до завтра)\n\n**Sich vorstellen:**\n- Ich heisse... (Меня зовут...)\n- Mein Name ist... (Моё имя...)\n- Wie heissen Sie? (Как Вас зовут? — формально)\n- Wie heisst du? (Как тебя зовут? — неформально)\n\n**Nach der Herkunft fragen:**\n- Woher kommen Sie? (Откуда Вы?)\n- Woher kommst du? (Откуда ты?)\n- Ich komme aus Russland. (Я из России.)\n- Ich komme aus Deutschland. (Я из Германии.)\n\n**Nach dem Befinden fragen:**\n- Wie geht es Ihnen? (Как у Вас дела? — формально)\n- Wie geht es dir? (Как у тебя дела? — неформально)\n- Antworten: Gut, danke! (Хорошо, спасибо!), Es geht. (Нормально.), Nicht so gut. (Не очень.)\n\n**Formell vs informell (Sie vs du):**\nAuf Deutsch gibt es zwei Anredeformen: Sie (формально) und du (неформально). Man verwendet Sie bei Fremden, im Beruf und beipersonen, die man nicht gut kennt. Man verwendet du bei Freunden, Familie und Kindern.\n\n**Nett kennenlernen:**\n- Freut mich! (Приятно познакомиться!)\n- Angenehm! (Очень приятно!)\n- Schoen, Sie kennenzulernen. (Рад познакомиться.)\n\nUbung: Begruben Sie jemanden morgens, nachmittags und abends!',
          textRu: 'В немецком языке есть различные приветствия, которые зависят от времени суток и формальности. Самое известное приветствие — Guten Tag (добрый день).\n\n**Приветствия по времени суток:**\n- Guten Morgen (доброе утро) — примерно до 10 часов\n- Guten Tag (добрый день) — в течение дня\n- Guten Abend (добрый вечер) — вечером\n- Gute Nacht (спокойной ночи) — перед сном\n\n**Формально и неформально:**\n- Hallo (привет) — универсально, несколько неформально\n- Hi (привет) — очень неформально, между друзьями\n- Tschuss (пока) — неформально\n- Auf Wiedersehen (до свидания) — формально\n- Bis bald (до скорого) — универсально\n- Bis morgen (до завтра)\n\n**Представиться:**\n- Ich heisse... (Меня зовут...)\n- Mein Name ist... (Моё имя...)\n- Wie heissen Sie? (Как Вас зовут? — формально)\n- Wie heisst du? (Как тебя зовут? — неформально)\n\n**Спросить о происхождении:**\n- Woher kommen Sie? (Откуда Вы?)\n- Woher kommst du? (Откуда ты?)\n- Ich komme aus Russland. (Я из России.)\n- Ich komme aus Deutschland. (Я из Германии.)\n\n**Спросить о делах:**\n- Wie geht es Ihnen? (Как у Вас дела? — формально)\n- Wie geht es dir? (Как у тебя дела? — неформально)\n- Ответы: Gut, danke! (Хорошо, спасибо!), Es geht. (Нормально.), Nicht so gut. (Не очень.)\n\n**Формально vs неформально (Sie vs du):**\nВ немецком языке есть две формы обращения: Sie (формально) и du (неформально). Sie используется с незнакомцами, на работе и с людьми, которых вы плохо знаете. Du используется с друзьями, семьёй и детьми.\n\n**Приятно познакомиться:**\n- Freut mich! (Приятно познакомиться!)\n- Angenehm! (Очень приятно!)\n- Schoen, Sie kennenzulernen. (Рад познакомиться.)\n\nУпражнение: Поприветствуйте кого-нибудь утром, днём и вечером!',
          vocab: [
            { word: 'Guten Morgen / Tag / Abend', trans: 'Доброе утро / день / вечер' },
            { word: 'Hallo / Tschuss', trans: 'Привет / Пока (неформально)' },
            { word: 'Ich heisse...', trans: 'Меня зовут...' },
            { word: 'Wie heissen Sie?', trans: 'Как Вас зовут? (формально)' },
            { word: 'Woher kommen Sie?', trans: 'Откуда Вы?' },
            { word: 'Wie geht es Ihnen?', trans: 'Как у Вас дела?' },
            { word: 'Freut mich!', trans: 'Приятно познакомиться!' },
            { word: 'Auf Wiedersehen', trans: 'До свидания (формально)' }
          ]
        },
        video: { slides: [
          { emoji: 'morgen', title: 'Guten Morgen', text: 'Доброе утро. До ~10 часов.' },
          { emoji: 'tag', title: 'Guten Tag', text: 'Добрый день. Универсальное формальное приветствие.' },
          { emoji: 'abend', title: 'Guten Abend', text: 'Добрый вечер.' },
          { emoji: 'hallo', title: 'Hallo / Tschuss', text: 'Привет / Пока — неформально.' },
          { emoji: 'heisse', title: 'Ich heisse...', text: 'Меня зовут... Для представления себя.' },
          { emoji: 'sie', title: 'Wie heissen Sie?', text: 'Как Вас зовут? — формально. du — неформально.' },
          { emoji: 'woher', title: 'Woher kommen Sie?', text: 'Откуда Вы? Ich komme aus...' },
          { emoji: 'freut', title: 'Freut mich!', text: 'Приятно познакомиться!' }
        ]},
        quiz: { pool: [
          { q: 'Wie sagt man "доброе утро" auf Deutsch?', options: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'], answer: 1, explain: 'Guten Morgen = доброе утро.' },
          { q: 'Wie sagt man "до свидания" formell?', options: ['Tschuss', 'Auf Wiedersehen', 'Hallo', 'Bis bald'], answer: 1, explain: 'Auf Wiedersehen = формальное прощание.' },
          { q: 'Erganze: Ich ___ Maria.', options: ['heisse', 'komme', 'bin', 'habe'], answer: 0, explain: 'Ich heisse = Меня зовут.' },
          { q: 'Wie fragt man formell "Как Вас зовут?"', options: ['Wie heisst du?', 'Wie heissen Sie?', 'Wer bist du?', 'Wie geht es?'], answer: 1, explain: 'Wie heissen Sie? = формально.' },
          { q: 'Wie fragt man "Откуда Вы?"', options: ['Wo wohnen Sie?', 'Woher kommen Sie?', 'Wer sind Sie?', 'Wie geht es?'], answer: 1, explain: 'Woher kommen Sie? = Откуда Вы?' },
          { q: 'Erganze: Ich komme ___ Russland.', options: ['aus', 'in', 'nach', 'von'], answer: 0, explain: 'kommen aus = быть из.' },
          { q: 'Was bedeutet "Freut mich"?', options: ['До свидания', 'Приятно познакомиться', 'Спасибо', 'Извините'], answer: 1, explain: 'Freut mich = приятно познакомиться.' },
          { q: 'Wie fragt man formell "Как дела?"', options: ['Wie geht es Ihnen?', 'Wie geht es dir?', 'Was machst du?', 'Wie heisst du?'], answer: 0, explain: 'Wie geht es Ihnen? = формально.' },
          { q: 'Wie antwortet man auf "Wie geht es dir?" (хорошо)', options: ['Schlecht', 'Gut, danke!', 'Tschuss', 'Freut mich'], answer: 1, explain: 'Gut, danke! = Хорошо, спасибо!' },
          { q: 'Erganze: Bis ___! (до завтра)', options: ['bald', 'morgen', 'spater', 'heute'], answer: 1, explain: 'Bis morgen = до завтра.' },
          { q: 'Wann sagt man "Gute Nacht"?', options: ['Morgens', 'Tagsuber', 'Abends vor dem Schlafengehen', 'Immer'], answer: 2, explain: 'Gute Nacht = перед сном.' },
          { q: 'Wie sagt man "привет" informell?', options: ['Auf Wiedersehen', 'Guten Tag', 'Hallo', 'Guten Morgen'], answer: 2, explain: 'Hallo = неформальное приветствие.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: ___ Morgen! Wie geht es Ihnen?', answer: 'Guten', explain: 'Guten Morgen = доброе утро.' },
          { type: 'fill-blank', question: 'Erganze: Hallo! Ich ___ Anna.', answer: 'heisse', explain: 'Ich heisse = Меня зовут.' },
          { type: 'choice', question: 'Wie sagt man "до свидания" formell?', options: ['Tschuss', 'Auf Wiedersehen', 'Hallo', 'Bis bald'], answer: 1, explain: 'Auf Wiedersehen = формально.' },
          { type: 'translate', question: 'Переведите: "Привет! Меня зовут Питер."', answer: 'Hallo, ich heisse Peter', explain: 'Hallo + Ich heisse + имя.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['komme', 'Ich', 'Russland', 'aus'], answer: 'Ich komme aus Russland', explain: 'Подлежащее + kommen + aus + страна.' },
          { type: 'correct', question: 'Finde und korrigiere: "Du heisse Hans."', answer: 'Du heisst Hans', explain: '2 л.: du heisst (с -t).' }
        ]}
      },
      {
        id: 'def-l2', topic: 'Numbers 1-100 in German',
        objective: 'Die Zahlen von 1 bis 100 auf Deutsch lernen und im Alltag verwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Zahlen von 1 bis 100 auf Deutsch',
          text: 'Zahlen sind die Grundlage der taglichen Kommunikation — Preise, Telefonnummern, Alter, Adressen. Auf Deutsch sind die Zahlen logisch und regelmassig aufgebaut.\n\n**Zahlen 1-10:**\neins (1), zwei (2), drei (3), vier (4), funf (5), sechs (6), sieben (7), acht (8), neun (9), zehn (10).\n\n**Zahlen 11-20:**\nelf (11), zwolf (12), dreizehn (13), vierzehn (14), funfzehn (15), sechzehn (16), siebzehn (17), achtzehn (18), neunzehn (19), zwanzig (20).\n\nDie Zahlen 13-19 werden gebildet mit: Zahl + zehn (drei + zehn = dreizehn).\n\n**Zehner (20-100):**\nzwanzig (20), dreissig (30), vierzig (40), funfzig (50), sechzig (60), siebzig (70), achtzig (80), neunzig (90), hundert (100).\n\n**Zahlen 21-99:**\nAuf Deutsch sagt man die Einerstelle zuerst, dann die Zehnerstelle, verbunden mit und.\n- 21 = einundzwanzig (ein + und + zwanzig)\n- 34 = vierunddreissig (vier + und + dreissig)\n- 99 = neunundneunzig (neun + und + neunzig)\n\nDiese Struktur (Einer + und + Zehner) ist eine der wichtigsten Regeln der deutschen Zahlen.\n\n**Praktische Verwendung:**\n- Alter: Ich bin funfundzwanzig Jahre alt. (Мне 25 лет.)\n- Preis: Das kostet zehn Euro. (Это стоит 10 евро.)\n- Telefonnummer: Meine Nummer ist null, eins, funf... (Мой номер 0, 1, 5...)\n- Uhrzeit: Es ist acht Uhr. (Сейчас 8 часов.)\n\n**Nach dem Preis fragen:**\n- Wie viel kostet das? (Сколько это стоит?)\n- Was kostet das? (Сколько стоит?)\n\n**Besonderheiten:**\n- eins wird zu ein vor Substantiven: ein Buch (не eins Buch)\n- In Telefonnummern sagt man oft zwo statt zwei (для ясности)\n- Million = eine Million, aber 2+ = zwei Millionen\n\nUbung: Zahle von 1 bis 20 und uben Sie die Zahlen 21-99!',
          textRu: 'Числа — основа повседневного общения: цены, номера телефонов, возраст, адреса. В немецком языке числа строятся логично и регулярно.\n\n**Числа 1-10:**\neins (1), zwei (2), drei (3), vier (4), funf (5), sechs (6), sieben (7), acht (8), neun (9), zehn (10).\n\n**Числа 11-20:**\nelf (11), zwolf (12), dreizehn (13), vierzehn (14), funfzehn (15), sechzehn (16), siebzehn (17), achtzehn (18), neunzehn (19), zwanzig (20).\n\nЧисла 13-19 образуются так: число + zehn (drei + zehn = dreizehn).\n\n**Десятки (20-100):**\nzwanzig (20), dreissig (30), vierzig (40), funfzig (50), sechzig (60), siebzig (70), achtzig (80), neunzig (90), hundert (100).\n\n**Числа 21-99:**\nВ немецком языке сначала называют единицы, затем десятки, соединяя их союзом und.\n- 21 = einundzwanzig (ein + und + zwanzig)\n- 34 = vierunddreissig (vier + und + dreissig)\n- 99 = neunundneunzig (neun + und + neunzig)\n\nЭта структура (единицы + und + десятки) — одно из важнейших правил немецких чисел.\n\n**Практическое использование:**\n- Возраст: Ich bin funfundzwanzig Jahre alt. (Мне 25 лет.)\n- Цена: Das kostet zehn Euro. (Это стоит 10 евро.)\n- Номер телефона: Meine Nummer ist null, eins, funf... (Мой номер 0, 1, 5...)\n- Время: Es ist acht Uhr. (Сейчас 8 часов.)\n\n**Спросить о цене:**\n- Wie viel kostet das? (Сколько это стоит?)\n- Was kostet das? (Сколько стоит?)\n\n**Особенности:**\n- eins превращается в ein перед существительными: ein Buch (не eins Buch)\n- В номерах телефонов часто говорят zwo вместо zwei (для ясности)\n- Million = eine Million, но 2+ = zwei Millionen\n\nУпражнение: Посчитайте от 1 до 20 и потренируйте числа 21-99!',
          vocab: [
            { word: 'eins, zwei, drei...', trans: '1, 2, 3...' },
            { word: 'zehn / elf / zwolf', trans: '10 / 11 / 12' },
            { word: 'zwanzig / dreissig', trans: '20 / 30' },
            { word: 'hundert', trans: '100' },
            { word: 'einundzwanzig', trans: '21 (ein+und+zwanzig)' },
            { word: 'Wie viel kostet das?', trans: 'Сколько это стоит?' },
            { word: 'Ich bin ... Jahre alt', trans: 'Мне ... лет' },
            { word: 'zwo (statt zwei)', trans: 'два (в номерах телефонов)' }
          ]
        },
        video: { slides: [
          { emoji: '1-10', title: '1 bis 10', text: 'eins, zwei, drei, vier, funf, sechs, sieben, acht, neun, zehn.' },
          { emoji: '11', title: '11 und 12', text: 'elf (11), zwolf (12). Unregelmasig.' },
          { emoji: '13-19', title: '13 bis 19', text: 'drei+zehn = dreizehn. Zahl + zehn.' },
          { emoji: '20-90', title: 'Zehner', text: 'zwanzig, dreissig, vierzig... neunzig.' },
          { emoji: 'und', title: 'Einer + und + Zehner', text: '21 = einundzwanzig. Einer zuerst!' },
          { emoji: '100', title: 'hundert', text: '100 = hundert. 200 = zweihundert.' },
          { emoji: 'preis', title: 'Wie viel?', text: 'Wie viel kostet das? = Сколько стоит?' },
          { emoji: 'alter', title: 'Alter', text: 'Ich bin 25 Jahre alt = Мне 25 лет.' }
        ]},
        quiz: { pool: [
          { q: 'Wie sagt man "5" auf Deutsch?', options: ['drei', 'funf', 'sechs', 'sieben'], answer: 1, explain: 'funf = 5.' },
          { q: 'Was bedeutet "zehn"?', options: ['5', '10', '20', '100'], answer: 1, explain: 'zehn = 10.' },
          { q: 'Wie sagt man "20" auf Deutsch?', options: ['zehn', 'zwanzig', 'dreissig', 'hundert'], answer: 1, explain: 'zwanzig = 20.' },
          { q: 'Was bedeutet "elf"?', options: ['10', '11', '12', '13'], answer: 1, explain: 'elf = 11.' },
          { q: 'Wie sagt man "21" auf Deutsch?', options: ['zwanzigeins', 'einundzwanzig', 'einzwanzig', 'zwanzig und eins'], answer: 1, explain: 'einundzwanzig = ein+und+zwanzig.' },
          { q: 'Wie sagt man "100" auf Deutsch?', options: ['tausend', 'hundert', 'zehn', 'zwanzig'], answer: 1, explain: 'hundert = 100.' },
          { q: 'Wie fragt man nach dem Preis?', options: ['Wie heisst du?', 'Wie viel kostet das?', 'Woher kommst du?', 'Wie alt?'], answer: 1, explain: 'Wie viel kostet das? = Сколько стоит?' },
          { q: 'Was bedeutet "zwolf"?', options: ['10', '11', '12', '13'], answer: 2, explain: 'zwolf = 12.' },
          { q: 'Wie sagt man "34" auf Deutsch?', options: ['vierunddreissig', 'dreissigvier', 'dreivier', 'vierdreissig'], answer: 0, explain: 'vier+und+dreissig = vierunddreissig.' },
          { q: 'Was bedeutet "neunzig"?', options: ['19', '90', '9', '99'], answer: 1, explain: 'neunzig = 90.' },
          { q: 'Erganze: Ich bin 25 Jahre ___.', options: ['jung', 'alt', 'gross', 'klein'], answer: 1, explain: 'Jahre alt = лет (возраст).' },
          { q: 'Wie sagt man "99" auf Deutsch?', options: ['neunzigneun', 'neunundneunzig', 'neunneunzig', 'neunundneun'], answer: 1, explain: 'neun+und+neunzig = neunundneunzig.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: ___ = 10', answer: 'zehn', explain: 'zehn = 10.' },
          { type: 'fill-blank', question: 'Erganze: ___ = 100', answer: 'hundert', explain: 'hundert = 100.' },
          { type: 'choice', question: 'Wie sagt man "21" auf Deutsch?', options: ['zwanzigeins', 'einundzwanzig', 'einzwanzig', 'zwanzig eins'], answer: 1, explain: 'einundzwanzig = ein+und+zwanzig.' },
          { type: 'translate', question: 'Переведите: "Сколько это стоит?"', answer: 'Wie viel kostet das', explain: 'Wie viel kostet das?' },
          { type: 'order', question: 'Ordne die Worter:', words: ['und', 'zwanzig', 'ein'], answer: 'einundzwanzig', explain: '21 = einundzwanzig.' },
          { type: 'correct', question: 'Finde und korrigiere: "21 = zwanzigeins"', answer: '21 = einundzwanzig', explain: 'Einer + und + Zehner.' }
        ]}
      },
      {
        id: 'def-l3', topic: 'Articles der / die / das',
        objective: 'Die deutschen Artikel der, die, das und das Genus der Substantive verstehen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Artikel und Genus im Deutschen',
          text: 'Auf Deutsch hat jedes Substantiv ein Genus: maskulin (der), feminin (die) oder neutral (das). Es gibt kein logisches System — man muss das Genus mit jedem Wort lernen.\n\n**Bestimmte Artikel (определённые):**\n- der (м.р.): der Tisch (стол), der Mann (мужчина), der Wagen (машина)\n- die (ж.р.): die Frau (женщина), die Lampe (лампа), die Sonne (солнце)\n- das (ср.р.): das Buch (книга), das Kind (ребёнок), das Haus (дом)\n- die (мн.ч.): die Tische, die Frauen, die Bucher\n\nIm Plural sind alle Artikel "die", egal welches Genus.\n\n**Unbestimmte Artikel (неопределённые):**\n- ein (м.р.): ein Tisch, ein Mann\n- eine (ж.р.): eine Frau, eine Lampe\n- ein (ср.р.): ein Buch, ein Kind\n- (мн.ч.: kein Artikel, aber "keine" в отрицании)\n\n**Tipps fur das Genus:**\nEs gibt einige Regelmassigkeiten, aber viele Ausnahmen:\n\nMaskulin (der):\n- Worter auf -ismus: der Tourismus, der Kapitalismus\n- Worter auf -er (Personen/Berufe): der Lehrer, der Arzt\n- Tage, Monate, Jahreszeiten: der Montag, der Mai, der Winter\n\nFeminin (die):\n- Worter auf -ung: die Zeitung, die Wohnung\n- Worter auf -heit/keit: die Gesundheit, die Freiheit\n- Worter auf -schaft: die Freundschaft, die Wirtschaft\n- Worter auf -ion: die Information, die Nation\n\nNeutral (das):\n- Verkleinerungen auf -chen/-lein: das Madchen, das Hauslein\n- Worter auf -um: das Museum, das Zentrum\n- Die meisten Infinitive als Substantiv: das Schwimmen, das Lernen\n\n**Wichtige Ausnahmen:**\n- die Sonne (солнце — ж.р.)\n- der Mond (луна — м.р.)\n- das Madchen (девочка — ср.р., weil -chen immer neutral ist)\n- das Wasser (вода — ср.р.)\n\n**Personalpronomen:**\n- der -> er (он)\n- die -> sie (она)\n- das -> es (оно)\n- die (Pl.) -> sie (они)\n\nUbung: Lernen Sie jedes Substantiv immer mit seinem Artikel: der Tisch, nicht nur Tisch!',
          textRu: 'В немецком языке у каждого существительного есть род: мужской (der), женский (die) или средний (das). Логической системы нет — род нужно учить вместе с каждым словом.\n\n**Определённые артикли:**\n- der (м.р.): der Tisch (стол), der Mann (мужчина), der Wagen (машина)\n- die (ж.р.): die Frau (женщина), die Lampe (лампа), die Sonne (солнце)\n- das (ср.р.): das Buch (книга), das Kind (ребёнок), das Haus (дом)\n- die (мн.ч.): die Tische, die Frauen, die Bucher\n\nВо множественном числе все артикли — "die", независимо от рода.\n\n**Неопределённые артикли:**\n- ein (м.р.): ein Tisch, ein Mann\n- eine (ж.р.): eine Frau, eine Lampe\n- ein (ср.р.): ein Buch, ein Kind\n- (мн.ч.: нет артикля, но "keine" в отрицании)\n\n**Советы по роду:**\nЕсть некоторые закономерности, но много исключений:\n\nМужской (der):\n- Слова на -ismus: der Tourismus, der Kapitalismus\n- Слова на -er (лица/профессии): der Lehrer, der Arzt\n- Дни, месяцы, времена года: der Montag, der Mai, der Winter\n\nЖенский (die):\n- Слова на -ung: die Zeitung, die Wohnung\n- Слова на -heit/keit: die Gesundheit, die Freiheit\n- Слова на -schaft: die Freundschaft, die Wirtschaft\n- Слова на -ion: die Information, die Nation\n\nСредний (das):\n- Уменьшительные на -chen/-lein: das Madchen, das Hauslein\n- Слова на -um: das Museum, das Zentrum\n- Большинство инфинитивов как существительных: das Schwimmen, das Lernen\n\n**Важные исключения:**\n- die Sonne (солнце — ж.р.)\n- der Mond (луна — м.р.)\n- das Madchen (девочка — ср.р., потому что -chen всегда среднего рода)\n- das Wasser (вода — ср.р.)\n\n**Личные местоимения:**\n- der -> er (он)\n- die -> sie (она)\n- das -> es (оно)\n- die (мн.ч.) -> sie (они)\n\nУпражнение: Учитесь каждое существительное всегда с его артиклем: der Tisch, а не просто Tisch!',
          vocab: [
            { word: 'der (m.)', trans: 'Определённый артикль м.р.' },
            { word: 'die (f.)', trans: 'Определённый артикль ж.р. / мн.ч.' },
            { word: 'das (n.)', trans: 'Определённый артикль ср.р.' },
            { word: 'ein / eine', trans: 'Неопределённый артикль м./ср. / ж.' },
            { word: 'der Tisch / die Lampe', trans: 'стол (м.р.) / лампа (ж.р.)' },
            { word: 'das Buch / das Madchen', trans: 'книга / девочка (ср.р.)' },
            { word: '-ung = die / -ismus = der', trans: 'Суффиксы: -ung = ж.р. / -ismus = м.р.' },
            { word: 'er / sie / es', trans: 'он / она / оно (личные местоимения)' }
          ]
        },
        video: { slides: [
          { emoji: 'der', title: 'der (m.)', text: 'der Tisch, der Mann. Мужской род.' },
          { emoji: 'die', title: 'die (f.)', text: 'die Frau, die Lampe. Женский род. Также мн.ч.' },
          { emoji: 'das', title: 'das (n.)', text: 'das Buch, das Kind. Средний род.' },
          { emoji: 'ein', title: 'ein / eine', text: 'ein (м./ср.), eine (ж.). Неопределённые.' },
          { emoji: 'pl', title: 'Plural = die', text: 'Все мн.ч. — die: die Bucher, die Frauen.' },
          { emoji: 'ung', title: '-ung = die', text: 'die Zeitung, die Wohnung. -ung всегда ж.р.' },
          { emoji: 'chen', title: '-chen = das', text: 'das Madchen. -chen/-lein всегда ср.р.' },
          { emoji: 'tipp', title: 'Tipp', text: 'Учите слово с артиклем: der Tisch, не просто Tisch.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze: ___ Tisch (м.р.)', options: ['die', 'das', 'der', 'ein'], answer: 2, explain: 'der Tisch — мужской род.' },
          { q: 'Erganze: ___ Frau (ж.р.)', options: ['der', 'die', 'das', 'den'], answer: 1, explain: 'die Frau — женский род.' },
          { q: 'Erganze: ___ Buch (ср.р.)', options: ['der', 'die', 'das', 'dem'], answer: 2, explain: 'das Buch — средний род.' },
          { q: 'Welcher Artikel fur Plural?', options: ['der', 'die', 'das', 'den'], answer: 1, explain: 'die — для всех мн.ч.' },
          { q: 'Erganze: ___ Zeitung (-ung = ж.р.)', options: ['der', 'die', 'das', 'ein'], answer: 1, explain: '-ung всегда ж.р.: die Zeitung.' },
          { q: 'Erganze: ___ Madchen (-chen)', options: ['der', 'die', 'das', 'den'], answer: 2, explain: '-chen всегда ср.р.: das Madchen.' },
          { q: 'Erganze: ___ Mann (м.р.)', options: ['die', 'das', 'der', 'dem'], answer: 2, explain: 'der Mann — мужской род.' },
          { q: 'Welches Pronomen fur "der Tisch"?', options: ['er', 'sie', 'es', 'sie'], answer: 0, explain: 'der -> er (он).' },
          { q: 'Welches Pronomen fur "das Buch"?', options: ['er', 'sie', 'es', 'sie'], answer: 2, explain: 'das -> es (оно).' },
          { q: 'Erganze: ein ___ Buch (ср.р.)', options: ['der', 'die', 'das', 'ein'], answer: 3, explain: 'ein Buch (ср.р., неопред.).' },
          { q: 'Erganze: eine ___ Lampe (ж.р.)', options: ['der', 'die', 'das', 'eine'], answer: 3, explain: 'eine Lampe (ж.р., неопред.).' },
          { q: 'Welches Genus hat "Sonne"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: 'die Sonne — ж.р. (исключение).' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: ___ Mann (м.р.)', answer: 'der', explain: 'der Mann — м.р.' },
          { type: 'fill-blank', question: 'Erganze: ___ Haus (ср.р.)', answer: 'das', explain: 'das Haus — ср.р.' },
          { type: 'choice', question: 'Welches Genus hat "-ung"?', options: ['Maskulin', 'Feminin', 'Neutral', 'Plural'], answer: 1, explain: '-ung всегда ж.р.: die Zeitung.' },
          { type: 'translate', question: 'Переведите: "книга" (с артиклем).', answer: 'das Buch', explain: 'Buch — ср.р., артикль das.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Bucher', 'die', 'sind', 'hier'], answer: 'die Bucher sind hier', explain: 'die — для мн.ч.' },
          { type: 'correct', question: 'Finde und korrigiere: "die Madchen"', answer: 'das Madchen', explain: '-chen = ср.р.: das Madchen.' }
        ]}
      },
      {
        id: 'def-l4', topic: 'Sein und Haben verbs',
        objective: 'Die wichtigsten deutschen Verben "sein" und "haben" konjugieren und verwenden.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Sein und Haben: Die Wichtigsten Verben',
          text: 'Die Verben "sein" (быть) und "haben" (иметь) sind die wichtigsten Verben im Deutschen. Sie sind unregelmasig und mussen auswendig gelernt werden.\n\n**Sein (быть):**\n- ich bin (я есть)\n- du bist (ты есть)\n- er/sie/es ist (он/она/оно есть)\n- wir sind (мы есть)\n- ihr seid (вы есть — мн.ч. неформально)\n- sie/Sie sind (они/Вы есть)\n\n**Haben (иметь):**\n- ich habe (я имею)\n- du hast (ты имеешь)\n- er/sie/es hat (он/она/оно имеет)\n- wir haben (мы имеем)\n- ihr habt (вы имеете — мн.ч. неформально)\n- sie/Sie haben (они/Вы имеют)\n\n**Verwendung von "sein":**\n1. Beschreibung: Ich bin Student. (Я студент.)\n2. Herkunft: Ich bin aus Russland. (Я из России.)\n3. Ort: Wir sind zu Hause. (Мы дома.)\n4. Eigenschaft: Das Buch ist interessant. (Книга интересная.)\n5. Alter: Ich bin 25 Jahre alt. (Мне 25 лет — с "sein", nicht "haben"!)\n\n**Verwendung von "haben":**\n1. Besitz: Ich habe ein Auto. (У меня есть машина.)\n2. Ausdrucks:\n   - Hunger haben: Ich habe Hunger. (Я голоден.)\n   - Durst haben: Ich habe Durst. (Я хочу пить.)\n   - Angst haben: Ich habe Angst. (Я боюсь.)\n   - Zeit haben: Ich habe Zeit. (У меня есть время.)\n   - Recht haben: Du hast Recht. (Ты прав.)\n3. Vergangenheit: Ich habe gegessen. (Я поел.)\n\n**Wichtiger Unterschied zum Russischen:**\nIm Deutschen sagt man das Alter mit "sein", nicht mit "haben":\n- Ich bin 25 Jahre alt. (НЕ: Ich habe 25 Jahre.)\n\nAber viele Ausdrucke, die im Russischen "sein" verwenden, brauchen im Deutschen "haben":\n- Ich habe Hunger. (Я голоден. — букв.: Я имею голод.)\n- Ich habe Angst. (Я боюсь. — букв.: Я имею страх.)\n\n**Fragen mit sein und haben:**\n- Bist du Student? (Ты студент?)\n- Hast du ein Auto? (У тебя есть машина?)\n- Wo bist du? (Где ты?)\n- Was hast du? (Что у тебя есть?)\n\nUbung: Konjugieren Sie "sein" und "haben" jeden Tag, bis es automatisch geht!',
          textRu: 'Глаголы "sein" (быть) и "haben" (иметь) — самые важные глаголы в немецком языке. Они неправильные и их нужно выучить наизусть.\n\n**Sein (быть):**\n- ich bin (я есть)\n- du bist (ты есть)\n- er/sie/es ist (он/она/оно есть)\n- wir sind (мы есть)\n- ihr seid (вы есть — мн.ч. неформально)\n- sie/Sie sind (они/Вы есть)\n\n**Haben (иметь):**\n- ich habe (я имею)\n- du hast (ты имеешь)\n- er/sie/es hat (он/она/оно имеет)\n- wir haben (мы имеем)\n- ihr habt (вы имеете — мн.ч. неформально)\n- sie/Sie haben (они/Вы имеют)\n\n**Использование "sein":**\n1. Описание: Ich bin Student. (Я студент.)\n2. Происхождение: Ich bin aus Russland. (Я из России.)\n3. Место: Wir sind zu Hause. (Мы дома.)\n4. Свойство: Das Buch ist interessant. (Книга интересная.)\n5. Возраст: Ich bin 25 Jahre alt. (Мне 25 лет — с "sein", не "haben"!)\n\n**Использование "haben":**\n1. Владение: Ich habe ein Auto. (У меня есть машина.)\n2. Выражения:\n   - Hunger haben: Ich habe Hunger. (Я голоден.)\n   - Durst haben: Ich habe Durst. (Я хочу пить.)\n   - Angst haben: Ich habe Angst. (Я боюсь.)\n   - Zeit haben: Ich habe Zeit. (У меня есть время.)\n   - Recht haben: Du hast Recht. (Ты прав.)\n3. Прошедшее время: Ich habe gegessen. (Я поел.)\n\n**Важное отличие от русского:**\nВ немецком языке возраст говорят с "sein", а не с "haben":\n- Ich bin 25 Jahre alt. (НЕ: Ich habe 25 Jahre.)\n\nНо многие выражения, которые в русском используют "быть", в немецком требуют "haben":\n- Ich habe Hunger. (Я голоден. — букв.: Я имею голод.)\n- Ich habe Angst. (Я боюсь. — букв.: Я имею страх.)\n\n**Вопросы с sein и haben:**\n- Bist du Student? (Ты студент?)\n- Hast du ein Auto? (У тебя есть машина?)\n- Wo bist du? (Где ты?)\n- Was hast du? (Что у тебя есть?)\n\nУпражнение: Спрягайте "sein" и "haben" каждый день, пока это не станет автоматическим!',
          vocab: [
            { word: 'ich bin / du bist', trans: 'я есть / ты есть (sein)' },
            { word: 'er ist / sie ist / es ist', trans: 'он/она/оно есть (sein)' },
            { word: 'wir sind / ihr seid', trans: 'мы есть / вы есть (sein)' },
            { word: 'ich habe / du hast', trans: 'я имею / ты имеешь (haben)' },
            { word: 'er hat / sie hat', trans: 'он имеет / она имеет (haben)' },
            { word: 'Ich habe Hunger / Durst', trans: 'Я голоден / хочу пить' },
            { word: 'Ich bin ... Jahre alt', trans: 'Мне ... лет (с sein, nicht haben)' },
            { word: 'Du hast Recht', trans: 'Ты прав (букв.: имеешь право)' }
          ]
        },
        video: { slides: [
          { emoji: 'sein', title: 'sein (sein)', text: 'ich bin, du bist, er ist, wir sind, ihr seid, sie sind.' },
          { emoji: 'haben', title: 'haben (haben)', text: 'ich habe, du hast, er hat, wir haben, ihr habt, sie haben.' },
          { emoji: 'bin', title: 'ich bin', text: 'Я есть. Ich bin Student. = Я студент.' },
          { emoji: 'habe', title: 'ich habe', text: 'Я имею. Ich habe ein Auto. = У меня машина.' },
          { emoji: 'alter', title: 'Alter = sein', text: 'Ich bin 25 Jahre alt. НЕ "habe 25"!' },
          { emoji: 'hunger', title: 'Hunger haben', text: 'Ich habe Hunger = Я голоден. Нем. использует haben.' },
          { emoji: 'durst', title: 'Durst haben', text: 'Ich habe Durst = Я хочу пить.' },
          { emoji: 'recht', title: 'Recht haben', text: 'Du hast Recht = Ты прав.' }
        ]},
        quiz: { pool: [
          { q: 'Erganze: Ich ___ Student.', options: ['habe', 'bin', 'hast', 'bist'], answer: 1, explain: 'ich bin = I am.' },
          { q: 'Erganze: Ich ___ ein Auto.', options: ['bin', 'habe', 'bist', 'ist'], answer: 1, explain: 'ich habe = I have.' },
          { q: 'Wie sagt man "Мне 20 лет"?', options: ['Ich habe 20 Jahre', 'Ich bin 20 Jahre alt', 'Ich 20 Jahre', 'Ich bin 20'], answer: 1, explain: 'Возраст с sein: Ich bin ... Jahre alt.' },
          { q: 'Erganze: Du ___ mein Freund.', options: ['habe', 'bin', 'bist', 'hast'], answer: 2, explain: 'du bist = you are.' },
          { q: 'Erganze: Wir ___ aus Russland.', options: ['haben', 'sind', 'seid', 'bin'], answer: 1, explain: 'wir sind = we are.' },
          { q: 'Wie sagt man "Я голоден"?', options: ['Ich bin Hunger', 'Ich habe Hunger', 'Ich Hunger', 'Ich habe hungrig'], answer: 1, explain: 'Ich habe Hunger (haben Ausdruck).' },
          { q: 'Erganze: Er ___ ein Buch.', options: ['sind', 'hat', 'habe', 'ist'], answer: 1, explain: 'er hat = he has.' },
          { q: 'Erganze: Sie ___ Lehrerin. (она)', options: ['habe', 'ist', 'hat', 'bin'], answer: 1, explain: 'sie ist = she is.' },
          { q: 'Wie sagt man "Я боюсь"?', options: ['Ich bin Angst', 'Ich habe Angst', 'Ich Angst', 'Ich bin bang'], answer: 1, explain: 'Ich habe Angst (haben Ausdruck).' },
          { q: 'Erganze: Ihr ___ hier. (вы мн.ч.)', options: ['sind', 'seid', 'habe', 'ist'], answer: 1, explain: 'ihr seid = you (plural) are.' },
          { q: 'Erganze: Du ___ Recht. (ты прав)', options: ['bist', 'hast', 'bin', 'hat'], answer: 1, explain: 'Du hast Recht = Ты прав.' },
          { q: 'Was ist falsch?', options: ['Ich bin Student', 'Ich habe 20 Jahre', 'Ich habe Hunger', 'Ich habe ein Auto'], answer: 1, explain: 'Falsch: Ich habe 20 Jahre. Richtig: Ich bin 20 Jahre alt.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich ___ Student.', answer: 'bin', explain: 'ich bin = I am.' },
          { type: 'fill-blank', question: 'Erganze: Ich ___ Hunger.', answer: 'habe', explain: 'Ich habe Hunger = Я голоден.' },
          { type: 'choice', question: 'Wie sagt man "Мне 25 лет"?', options: ['Ich habe 25 Jahre', 'Ich bin 25 Jahre alt', 'Ich 25', 'Ich bin 25'], answer: 1, explain: 'Возраст с sein.' },
          { type: 'translate', question: 'Переведите: "У меня есть машина."', answer: 'Ich habe ein Auto', explain: 'haben = иметь.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['alt', 'Jahre', '25', 'bin', 'Ich'], answer: 'Ich bin 25 Jahre alt', explain: 'Возраст: sein + Jahre alt.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich habe 20 Jahre alt."', answer: 'Ich bin 20 Jahre alt', explain: 'Возраст использует sein, nicht haben.' }
        ]}
      },
      {
        id: 'def-l5', topic: 'Days, months and time',
        objective: 'Wochentage, Monate und Uhrzeiten auf Deutsch lernen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Tage, Monate und Uhrzeit auf Deutsch',
          text: 'Auf Deutsch sind Tage und Monate, anders als im Englischen, nicht gross geschrieben — nein, eigentlich werden alle Substantive im Deutschen gross geschrieben! Das ist eine wichtige Regel.\n\n**Wochentage:**\nMontag (понедельник), Dienstag (вторник), Mittwoch (среда), Donnerstag (четверг), Freitag (пятница), Samstag (суббота), Sonntag (воскресенье).\n\nIn Deutschland beginnt die Woche am Montag.\n\n**Monate:**\nJanuar (январь), Februar (февраль), Marz (март), April (апрель), Mai (май), Juni (июнь), Juli (июль), August (август), September (сентябрь), Oktober (октябрь), November (ноябрь), Dezember (декабрь).\n\n**Uhrzeit (Время):**\nAuf Deutsch gibt es verschiedene Arten, die Uhrzeit zu sagen.\n\nFormell (offiziell):\n- Es ist acht Uhr. (8:00)\n- Es ist acht Uhr dreissig. (8:30)\n- Es ist vierzehn Uhr. (14:00 / 2 часа дня)\n\nInformell:\n- Es ist halb neun. (8:30 — halb vor der kommenden Stunde!)\n- Es ist Viertel nach acht. (8:15)\n- Es ist Viertel vor neun. (8:45)\n\nAchtung: "halb neun" = 8:30, nicht 9:30! Auf Deutsch bedeutet "halb" eine halbe Stunde vor der kommenden Stunde.\n\n**Prapositionen der Zeit:**\n- am + Tag: am Montag, am Freitag (в понедельник)\n- um + Uhrzeit: um acht Uhr (в 8 часов)\n- im + Monat/Jahreszeit: im Marz, im Sommer (в марте, летом)\n- im + Jahr: im Jahr 2024 (в 2024 году)\n- von ... bis ...: von Montag bis Freitag (с понедельника по пятницу)\n\n**Nach der Zeit fragen:**\n- Wie spat ist es? (Который час?)\n- Um wie viel Uhr? (В котором часу?)\n- Wann? (Когда?)\n\n**Jahreszeiten:**\nder Fruhling (весна), der Sommer (лето), der Herbst (осень), der Winter (зима).\n\nUbung: Sagen Sie jeden Morgen den aktuellen Wochentag und das Datum auf Deutsch!',
          textRu: 'В немецком языке дни недели и месяцы, в отличие от английского, не пишутся с большой буквы — нет, на самом деле все существительные в немецком пишутся с большой буквы! Это важное правило.\n\n**Дни недели:**\nMontag (понедельник), Dienstag (вторник), Mittwoch (среда), Donnerstag (четверг), Freitag (пятница), Samstag (суббота), Sonntag (воскресенье).\n\nВ Германии неделя начинается с понедельника.\n\n**Месяцы:**\nJanuar (январь), Februar (февраль), Marz (март), April (апрель), Mai (май), Juni (июнь), Juli (июль), August (август), September (сентябрь), Oktober (октябрь), November (ноябрь), Dezember (декабрь).\n\n**Время:**\nВ немецком языке есть разные способы назвать время.\n\nФормально (официально):\n- Es ist acht Uhr. (8:00)\n- Es ist acht Uhr dreissig. (8:30)\n- Es ist vierzehn Uhr. (14:00 / 2 часа дня)\n\nНеформально:\n- Es ist halb neun. (8:30 — половина перед наступающим часом!)\n- Es ist Viertel nach acht. (8:15)\n- Es ist Viertel vor neun. (8:45)\n\nВнимание: "halb neun" = 8:30, а не 9:30! В немецком языке "halb" означает полчаса до наступающего часа.\n\n**Предлоги времени:**\n- am + день: am Montag, am Freitag (в понедельник)\n- um + время: um acht Uhr (в 8 часов)\n- im + месяц/время года: im Marz, im Sommer (в марте, летом)\n- im + год: im Jahr 2024 (в 2024 году)\n- von ... bis ...: von Montag bis Freitag (с понедельника по пятницу)\n\n**Спросить о времени:**\n- Wie spat ist es? (Который час?)\n- Um wie viel Uhr? (В котором часу?)\n- Wann? (Когда?)\n\n**Времена года:**\nder Fruhling (весна), der Sommer (лето), der Herbst (осень), der Winter (зима).\n\nУпражнение: Называйте каждое утро текущий день недели и дату на немецком!',
          vocab: [
            { word: 'Montag, Dienstag, Mittwoch', trans: 'Понедельник, вторник, среда' },
            { word: 'Donnerstag, Freitag', trans: 'Четверг, пятница' },
            { word: 'Samstag, Sonntag', trans: 'Суббота, воскресенье' },
            { word: 'Januar, Februar, Marz', trans: 'Январь, февраль, март' },
            { word: 'Es ist acht Uhr', trans: 'Сейчас 8 часов' },
            { word: 'halb neun (= 8:30)', trans: 'половина девятого (8:30, не 9:30!)' },
            { word: 'am Montag / um acht Uhr', trans: 'в понедельник / в 8 часов' },
            { word: 'Wie spat ist es?', trans: 'Который час?' }
          ]
        },
        video: { slides: [
          { emoji: 'tage', title: 'Wochentage', text: 'Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.' },
          { emoji: 'monate', title: 'Monate', text: 'Januar, Februar... Dezember. Все с большой буквы.' },
          { emoji: 'uhr', title: 'Es ist ... Uhr', text: 'Es ist acht Uhr = 8:00. Formell.' },
          { emoji: 'halb', title: 'halb neun', text: 'halb neun = 8:30. Halbe Stunde vor der kommenden Stunde!' },
          { emoji: 'viertel', title: 'Viertel', text: 'Viertel nach acht (8:15). Viertel vor neun (8:45).' },
          { emoji: 'am', title: 'am + Tag', text: 'am Montag = в понедельник. am + Wochentag.' },
          { emoji: 'um', title: 'um + Uhrzeit', text: 'um acht Uhr = в 8 часов. um + Uhrzeit.' },
          { emoji: ' spat', title: 'Wie spat?', text: 'Wie spat ist es? = Который час?' }
        ]},
        quiz: { pool: [
          { q: 'Wie sagt man "понедельник" auf Deutsch?', options: ['Dienstag', 'Montag', 'Sonntag', 'Freitag'], answer: 1, explain: 'Montag = понедельник.' },
          { q: 'Wie sagt man "пятница" auf Deutsch?', options: ['Donnerstag', 'Montag', 'Freitag', 'Mittwoch'], answer: 2, explain: 'Freitag = пятница.' },
          { q: 'Wie sagt man "январь" auf Deutsch?', options: ['Februar', 'Januar', 'Marz', 'April'], answer: 1, explain: 'Januar = январь.' },
          { q: 'Erganze: Es ist acht ___. (8:00)', options: ['Zeit', 'Uhr', 'Stunde', 'Minute'], answer: 1, explain: 'Es ist acht Uhr = 8:00.' },
          { q: 'Was bedeutet "halb neun"?', options: ['9:30', '8:30', '9:00', '8:00'], answer: 1, explain: 'halb neun = 8:30 (полчаса до 9).' },
          { q: 'Erganze: ___ Montag gehe ich arbeiten.', options: ['Um', 'Am', 'Im', 'Von'], answer: 1, explain: 'am + Wochentag: am Montag.' },
          { q: 'Erganze: ___ acht Uhr beginne ich.', options: ['Am', 'Im', 'Um', 'Von'], answer: 2, explain: 'um + Uhrzeit: um acht Uhr.' },
          { q: 'Wie fragt man "Который час?"', options: ['Wie heisst du?', 'Wie spat ist es?', 'Was ist das?', 'Wo bist du?'], answer: 1, explain: 'Wie spat ist es? = Который час?' },
          { q: 'Erganze: ___ Marz habe ich Geburtstag.', options: ['Am', 'Im', 'Um', 'Von'], answer: 1, explain: 'im + Monat: im Marz.' },
          { q: 'Was bedeutet "Viertel nach acht"?', options: ['8:15', '8:45', '8:30', '8:00'], answer: 0, explain: 'Viertel nach acht = 8:15.' },
          { q: 'Wie sagt man "воскресенье"?', options: ['Samstag', 'Sonntag', 'Montag', 'Freitag'], answer: 1, explain: 'Sonntag = воскресенье.' },
          { q: 'Was ist "der Fruhling"?', options: ['Лето', 'Весна', 'Осень', 'Зима'], answer: 1, explain: 'der Fruhling = весна.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: ___ = понедельник', answer: 'Montag', explain: 'Montag = понедельник.' },
          { type: 'fill-blank', question: 'Erganze: Es ist ___ Uhr. (8:00)', answer: 'acht', explain: 'acht Uhr = 8:00.' },
          { type: 'choice', question: 'Was bedeutet "halb neun"?', options: ['9:30', '8:30', '9:00', '8:00'], answer: 1, explain: 'halb neun = 8:30.' },
          { type: 'translate', question: 'Переведите: "Который час?"', answer: 'Wie spat ist es', explain: 'Wie spat ist es?' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Uhr', 'acht', 'Es', 'ist'], answer: 'Es ist acht Uhr', explain: '8:00.' },
          { type: 'correct', question: 'Finde und korrigiere: "halb neun = 9:30"', answer: 'halb neun = 8:30', explain: 'halb = полчаса ДО следующего часа.' }
        ]}
      },
      {
        id: 'def-l6', topic: 'Food and ordering in a restaurant',
        objective: 'Im Restaurant auf Deutsch bestellen und nach dem Preis fragen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Essen und Bestellen im Restaurant auf Deutsch',
          text: 'Im Restaurant auf Deutsch zu bestellen ist eine der nutzlichsten Fahigkeiten beim Reisen in ein deutschsprachiges Land. Mit einigen grundlegenden Phrasen konnen Sie selbstbewusst essen gehen.\n\n**Grundlegende Phrasen:**\n- Ich mochte... (Я хотел бы...)\n- Ich hatte gern... (Я бы хотел...)\n- Ich nehme... (Я возьму...)\n- Bitte. (Пожалуйста.)\n- Danke. (Спасибо.)\n\n**Im Restaurant:**\n- Einen Tisch fur zwei, bitte. (Столик на двоих, пожалуйста.)\n- Die Speisekarte, bitte. (Меню, пожалуйста.)\n- Was empfehlen Sie? (Что вы порекомендуете?)\n- Ich mochte zahlen, bitte. (Я хотел бы заплатить.)\n\n**Frage nach der Speisekarte:**\n- Haben Sie eine Speisekarte? (У вас есть меню?)\n- Was gibt es heute? (Что есть сегодня?)\n\n**Frage nach Inhalt:**\n- Was ist in diesem Gericht? (Что в этом блюде?)\n- Ist das scharf? (Это острое?)\n- Haben Sie vegetarische Gerichte? (У вас есть вегетарианские блюда?)\n\n**Trinken und Speisen:**\n- das Wasser (вода), der Kaffee (кофе), der Tee (чай)\n- das Bier (пиво), der Wein (вино), der Saft (сок)\n- das Brot (хлеб), die Suppe (суп), der Salat (салат)\n- das Fleisch (мясо), der Fisch (рыба), das Huhn (курица)\n- die Kartoffeln (картофель), der Reis (рис)\n- der Kuchen (торт), das Eis (мороженое)\n\n**Bezahlen:**\n- Was kostet das? (Сколько это стоит?)\n- Ich zahle mit Karte. (Я плачу картой.)\n- Stimmt so. (Сдачи не надо.)\n- Haben Sie Kleingeld? (У вас есть мелочь?)\n\n**Trinkgeld:**\nIn Deutschland ist ein Trinkgeld von 5-10% ublich. Man rundet oft den Betrag auf.\n\n**Gesprach im Restaurant:**\nKellner: Guten Tag! Was darf es sein?\nDu: Guten Tag. Ich mochte einen Kaffee und ein Brot, bitte.\nKellner: Sehr gern. Sonst noch etwas?\nDu: Nein, danke. Was kostet das?\nKellner: Das macht funf Euro.\nDu: Hier, bitte. Stimmt so.\nKellner: Danke schon!\n\nUbung: Bestellen Sie Ihr Lieblingsessen auf Deutsch!',
          textRu: 'Заказывать в ресторане на немецком — один из самых полезных навыков при поездке в немецкоязычную страну. С несколькими базовыми фразами вы можете уверенно ходить в рестораны.\n\n**Базовые фразы:**\n- Ich mochte... (Я хотел бы...)\n- Ich hatte gern... (Я бы хотел...)\n- Ich nehme... (Я возьму...)\n- Bitte. (Пожалуйста.)\n- Danke. (Спасибо.)\n\n**В ресторане:**\n- Einen Tisch fur zwei, bitte. (Столик на двоих, пожалуйста.)\n- Die Speisekarte, bitte. (Меню, пожалуйста.)\n- Was empfehlen Sie? (Что вы порекомендуете?)\n- Ich mochte zahlen, bitte. (Я хотел бы заплатить.)\n\n**Спросить о меню:**\n- Haben Sie eine Speisekarte? (У вас есть меню?)\n- Was gibt es heute? (Что есть сегодня?)\n\n**Спросить о составе:**\n- Was ist in diesem Gericht? (Что в этом блюде?)\n- Ist das scharf? (Это острое?)\n- Haben Sie vegetarische Gerichte? (У вас есть вегетарианские блюда?)\n\n**Напитки и блюда:**\n- das Wasser (вода), der Kaffee (кофе), der Tee (чай)\n- das Bier (пиво), der Wein (вино), der Saft (сок)\n- das Brot (хлеб), die Suppe (суп), der Salat (салат)\n- das Fleisch (мясо), der Fisch (рыба), das Huhn (курица)\n- die Kartoffeln (картофель), der Reis (рис)\n- der Kuchen (торт), das Eis (мороженое)\n\n**Оплата:**\n- Was kostet das? (Сколько это стоит?)\n- Ich zahle mit Karte. (Я плачу картой.)\n- Stimmt so. (Сдачи не надо.)\n- Haben Sie Kleingeld? (У вас есть мелочь?)\n\n**Чаевые:**\nВ Германии принято оставлять чаевые 5-10%. Часто сумму просто округляют.\n\n**Разговор в ресторане:**\nОфициант: Guten Tag! Was darf es sein?\nВы: Guten Tag. Ich mochte einen Kaffee und ein Brot, bitte.\nОфициант: Sehr gern. Sonst noch etwas?\nВы: Nein, danke. Was kostet das?\nОфициант: Das macht funf Euro.\nВы: Hier, bitte. Stimmt so.\nОфициант: Danke schon!\n\nУпражнение: Закажите своё любимое блюдо на немецком!',
          vocab: [
            { word: 'Ich mochte... / Ich hatte gern...', trans: 'Я хотел бы... (вежливо)' },
            { word: 'Die Speisekarte, bitte', trans: 'Меню, пожалуйста' },
            { word: 'Was empfehlen Sie?', trans: 'Что порекомендуете?' },
            { word: 'Was kostet das?', trans: 'Сколько это стоит?' },
            { word: 'das Wasser / der Kaffee / der Tee', trans: 'вода / кофе / чай' },
            { word: 'das Brot / die Suppe / der Salat', trans: 'хлеб / суп / салат' },
            { word: 'Stimmt so.', trans: 'Сдачи не надо (оставьте)' },
            { word: 'Was darf es sein?', trans: 'Что желаете? (официант)' }
          ]
        },
        video: { slides: [
          { emoji: 'mochte', title: 'Ich mochte...', text: 'Я хотел бы. Вежливый способ заказа.' },
          { emoji: 'karte', title: 'Die Speisekarte', text: 'Меню. Die Speisekarte, bitte.' },
          { emoji: 'empf', title: 'Was empfehlen Sie?', text: 'Что порекомендуете? Полезный вопрос.' },
          { emoji: 'trink', title: 'Trinken', text: 'Wasser, Kaffee, Tee, Bier, Wein, Saft.' },
          { emoji: 'essen', title: 'Speisen', text: 'Brot, Suppe, Salat, Fleisch, Fisch, Huhn.' },
          { emoji: 'preis', title: 'Was kostet das?', text: 'Сколько стоит?' },
          { emoji: 'zahlung', title: 'Zahlen', text: 'Ich mochte zahlen, bitte. / Stimmt so.' },
          { emoji: 'kellner', title: 'Gesprach', text: 'Was darf es sein? = Что желаете? (официант).' }
        ]},
        quiz: { pool: [
          { q: 'Wie bestellt man hoeflich?', options: ['Ich will', 'Ich mochte...', 'Gib mir', 'Ich nehme schon'], answer: 1, explain: 'Ich mochte... = Я хотел бы.' },
          { q: 'Wie bittet man um die Speisekarte?', options: ['Was gibt es?', 'Die Speisekarte, bitte', 'Essen!', 'Wo ist das?'], answer: 1, explain: 'Die Speisekarte, bitte = Меню, пожалуйста.' },
          { q: 'Wie fragt man nach dem Preis?', options: ['Was ist das?', 'Was kostet das?', 'Wo ist das?', 'Wie viel?'], answer: 1, explain: 'Was kostet das? = Сколько стоит?' },
          { q: 'Erganze: Ich ___ einen Kaffee, bitte.', options: ['mochte', 'kostet', 'geht', 'habe'], answer: 0, explain: 'Ich mochte = Я хотел бы.' },
          { q: 'Wie fragt man nach einer Empfehlung?', options: ['Was ist das?', 'Was empfehlen Sie?', 'Was gibt es?', 'Wo?'], answer: 1, explain: 'Was empfehlen Sie? = Что порекомендуете?' },
          { q: 'Was bedeutet "das Brot"?', options: ['Суп', 'Хлеб', 'Мясо', 'Рыба'], answer: 1, explain: 'das Brot = хлеб.' },
          { q: 'Erganze: Einen Tisch ___ zwei, bitte.', options: ['mit', 'fur', 'und', 'von'], answer: 1, explain: 'fur zwei = на двоих.' },
          { q: 'Was bedeutet "Stimmt so"?', options: ['Очень вкусно', 'Сдачи не надо', 'Сколько стоит', 'Спасибо'], answer: 1, explain: 'Stimmt so = Сдачи не надо.' },
          { q: 'Was ist "der Kaffee"?', options: ['Чай', 'Кофе', 'Сок', 'Пиво'], answer: 1, explain: 'der Kaffee = кофе.' },
          { q: 'Wie fragt der Kellner "Что желаете?"', options: ['Was mochtest du?', 'Was darf es sein?', 'Was kostet das?', 'Was ist das?'], answer: 1, explain: 'Was darf es sein? = Что желаете?' },
          { q: 'Was bedeutet "der Fisch"?', options: ['Мясо', 'Рыба', 'Курица', 'Суп'], answer: 1, explain: 'der Fisch = рыба.' },
          { q: 'Erganze: Ich zahle mit ___.', options: ['Geld', 'Karte', 'Munchen', 'Essen'], answer: 1, explain: 'mit Karte = картой.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich ___ einen Kaffee, bitte.', answer: 'mochte', explain: 'Ich mochte = Я хотел бы.' },
          { type: 'fill-blank', question: 'Erganze: Die ___, bitte. (меню)', answer: 'Speisekarte', explain: 'die Speisekarte = меню.' },
          { type: 'choice', question: 'Wie fragt man nach dem Preis?', options: ['Was ist das?', 'Was kostet das?', 'Wo ist das?', 'Wie heisst das?'], answer: 1, explain: 'Was kostet das? = Сколько стоит?' },
          { type: 'translate', question: 'Переведите: "Я хотел бы кофе."', answer: 'Ich mochte einen Kaffee', explain: 'Ich mochte + einen Kaffee.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['bitte', 'Speisekarte', 'Die'], answer: 'Die Speisekarte bitte', explain: 'Die Speisekarte, bitte.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich will Kaffee."', answer: 'Ich mochte einen Kaffee, bitte', explain: 'Ich will — грубо. Используйте Ich mochte + bitte.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._german_course_1 = COURSE;
})(window);
