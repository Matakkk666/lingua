/* ============================================================
   AES French Course 1: Free (A1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'fr-free', title: 'Francais Debutant (Free)',
    price: 0, oldPrice: 0, level: 'A1',
    duration: '5.5+ heures', totalLessons: 6,
    accent: 'lavender', art: ['#E5DAF0', '#CDBCE6'],
    tagline: 'Free French course for beginners. 6 modules with theory, video, quizzes, and homework.',
    lessons: [
      {
        id: 'frf-l1', topic: 'Greetings and introductions',
        objective: 'Apprendre a saluer et se presenter en francais.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Greetings and Introductions in French',
          text: 'In French, greetings depend on the time of day and formality. "Bonjour" is the most common greeting, used during the day. "Bonsoir" is used in the evening. "Salut" is informal, used with friends.\n\nTo introduce yourself: "Je m\'appelle..." (My name is...). To ask someone\'s name: "Comment vous appelez-vous?" (formal) or "Comment tu t\'appelles?" (informal).\n\nTo ask how someone is: "Comment allez-vous?" (formal) or "Comment ca va?" (informal). Common responses: "Tres bien, merci" (Very well, thanks), "Ca va" (OK), "Pas mal" (Not bad).\n\nWhen leaving: "Au revoir" (goodbye), "A bientot" (see you soon), "A demain" (see you tomorrow), "Bonne nuit" (good night - before sleep).\n\n"Enchante" means "Nice to meet you" (for men), "Enchantee" (for women).\n\nRemember: French has formal (vous) and informal (tu) forms. Use "vous" with strangers, elders, and in professional settings. Use "tu" with friends, family, and children.',
          textRu: 'Во французском языке приветствия зависят от времени суток и степени официальности. «Bonjour» — самое распространённое приветствие, используется днём. «Bonsoir» используется вечером. «Salut» — неформальное приветствие, используется с друзьями.\n\nЧтобы представиться: «Je m\'appelle...» (Меня зовут...). Чтобы спросить имя собеседника: «Comment vous appelez-vous?» (формально) или «Comment tu t\'appelles?» (неформально).\n\nЧтобы спросить, как дела: «Comment allez-vous?» (формально) или «Comment ca va?» (неформально). Распространённые ответы: «Tres bien, merci» (Очень хорошо, спасибо), «Ca va» (Нормально), «Pas mal» (Неплохо).\n\nПри прощании: «Au revoir» (до свидания), «A bientot» (до скорой встречи), «A demain» (до завтра), «Bonne nuit» (спокойной ночи — перед сном).\n\n«Enchante» означает «Приятно познакомиться» (для мужчин), «Enchantee» (для женщин).\n\nЗапомните: во французском языке есть формальная (vous) и неформальная (tu) формы. Используйте «vous» с незнакомцами, старшими и в официальной обстановке. Используйте «tu» с друзьями, семьёй и детьми.',
          vocab: [
            { word: 'Bonjour', trans: 'Добрый день' },
            { word: 'Bonsoir', trans: 'Добрый вечер' },
            { word: 'Salut', trans: 'Привет (неформально)' },
            { word: 'Je m\'appelle...', trans: 'Меня зовут...' },
            { word: 'Comment allez-vous?', trans: 'Как дела? (формально)' },
            { word: 'Ca va?', trans: 'Как дела? (неформально)' },
            { word: 'Au revoir', trans: 'До свидания' },
            { word: 'Enchante(e)', trans: 'Приятно познакомиться' }
          ]
        },
        video: { slides: [
          { emoji: 'Bonjour', title: 'Bonjour!', text: 'Most common daytime greeting in French.' },
          { emoji: 'Bonsoir', title: 'Bonsoir', text: 'Used in the evening.' },
          { emoji: 'Salut', title: 'Salut', text: 'Informal greeting for friends.' },
          { emoji: 'appelle', title: 'Je m\'appelle...', text: 'My name is... Use to introduce yourself.' },
          { emoji: 'vous', title: 'Comment vous appelez-vous?', text: 'Formal: What is your name?' },
          { emoji: 'tu', title: 'Comment tu t\'appelles?', text: 'Informal: What is your name?' },
          { emoji: 'va', title: 'Comment ca va?', text: 'Informal: How are you?' },
          { emoji: 'revoir', title: 'Au revoir', text: 'Goodbye. Also: A bientot (see you soon).' }
        ]},
        quiz: { pool: [
          { q: 'What do you say in the morning in French?', options: ['Bonsoir', 'Bonjour', 'Salut', 'Bonne nuit'], answer: 1, explain: 'Bonjour = Добрый день (днём).' },
          { q: 'How do you say "My name is" in French?', options: ['Je suis', 'Je m\'appelle', 'Mon nom', 'Moi'], answer: 1, explain: 'Je m\'appelle = Меня зовут.' },
          { q: 'Formal way to ask "How are you"?', options: ['Ca va?', 'Comment ca va?', 'Comment allez-vous?', 'Tu vas?'], answer: 2, explain: 'Comment allez-vous? = формально.' },
          { q: 'Informal greeting in French?', options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'], answer: 2, explain: 'Salut = неформальное приветствие.' },
          { q: 'What does "Enchante" mean?', options: ['Goodbye', 'Thank you', 'Nice to meet you', 'Sorry'], answer: 2, explain: 'Enchante = Приятно познакомиться.' },
          { q: 'How do you say goodbye in French?', options: ['Bonjour', 'Au revoir', 'Salut', 'Merci'], answer: 1, explain: 'Au revoir = До свидания.' },
          { q: 'What does "A bientot" mean?', options: ['Goodbye forever', 'See you soon', 'Good night', 'Hello'], answer: 1, explain: 'A bientot = Увидимся скоро.' },
          { q: 'When do you use "vous"?', options: ['With friends', 'With strangers/formal', 'With family', 'With children'], answer: 1, explain: 'vous = формальная форма.' },
          { q: 'How to ask someone\'s name informally?', options: ['Comment vous appelez-vous?', 'Comment tu t\'appelles?', 'Quel est ton nom?', 'Tu es qui?'], answer: 1, explain: 'Comment tu t\'appelles? = неформально.' },
          { q: 'What does "Bonne nuit" mean?', options: ['Good evening', 'Good night', 'Goodbye', 'Good morning'], answer: 1, explain: 'Bonne nuit = спокойной ночи (перед сном).' },
          { q: 'How to say "See you tomorrow"?', options: ['A bientot', 'A demain', 'Au revoir', 'Salut'], answer: 1, explain: 'A demain = до завтра.' },
          { q: 'What does "Pas mal" mean?', options: ['Bad', 'Not bad', 'Very good', 'OK'], answer: 1, explain: 'Pas mal = Неплохо.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ m\'appelle Marie."', answer: 'Je', explain: 'Je m\'appelle = Меня зовут.' },
          { type: 'fill-blank', question: 'Complete: "___ soir!" (good evening)', answer: 'Bon', explain: 'Bonsoir = Добрый вечер.' },
          { type: 'choice', question: 'Informal greeting:', options: ['Bonjour', 'Salut', 'Au revoir', 'Bonsoir'], answer: 1, explain: 'Salut = неформально.' },
          { type: 'translate', question: 'Переведите: "Меня зовут Пьер."', answer: "Je m'appelle Pierre", explain: 'Je m\'appelle + имя.' },
          { type: 'order', question: 'Put in order:', words: ['vous', 'allez', 'Comment'], answer: 'Comment allez-vous', explain: 'Comment allez-vous?' },
          { type: 'correct', question: 'Find and correct: "Tu m\'appelle Jean."', answer: "Je m'appelle Jean", explain: 'Je m\'appelle, не Tu m\'appelle.' }
        ]}
      },
      {
        id: 'frf-l2', topic: 'Numbers 1-100 in French',
        objective: 'Master French numbers from 1 to 100.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Counting in French',
          text: 'French numbers can be tricky, especially between 70 and 99. Let\'s learn them step by step.\n\n1-10: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.\n11-16: onze, douze, treize, quatorze, quinze, seize.\n17-19: dix-sept, dix-huit, dix-neuf (ten-seven, ten-eight, ten-nine).\n20-60: vingt (20), trente (30), quarante (40), cinquante (50), soixante (60).\n21-29: vingt et un (21), vingt-deux (22), etc. Note "et" in 21 only.\n70-79: soixante-dix (60+10), soixante et onze (71), soixante-douze (72=60+12), etc.\n80-89: quatre-vingts (4x20), quatre-vingt-un (81), etc.\n90-99: quatre-vingt-dix (4x20+10), quatre-vingt-onze (91), etc.\n100: cent.\n\nTo ask "how much": "Combien ca coute?" (How much does it cost?)\n\nPhone numbers in French are read in pairs: 17 45 28 91 = dix-sept, quarante-cinq, vingt-huit, quatre-vingt-onze.\n\nPractice counting everyday objects around you!',
          textRu: 'Французские числительные могут быть непростыми, особенно от 70 до 99. Давайте выучим их шаг за шагом.\n\n1-10: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.\n11-16: onze, douze, treize, quatorze, quinze, seize.\n17-19: dix-sept, dix-huit, dix-neuf (десять-семь, десять-восемь, десять-девять).\n20-60: vingt (20), trente (30), quarante (40), cinquante (50), soixante (60).\n21-29: vingt et un (21), vingt-deux (22) и т.д. Обратите внимание: «et» используется только для 21.\n70-79: soixante-dix (60+10), soixante et onze (71), soixante-douze (72=60+12) и т.д.\n80-89: quatre-vingts (4x20), quatre-vingt-un (81) и т.д.\n90-99: quatre-vingt-dix (4x20+10), quatre-vingt-onze (91) и т.д.\n100: cent.\n\nЧтобы спросить «сколько»: «Combien ca coute?» (Сколько это стоит?)\n\nНомера телефонов во французском языке читаются парами: 17 45 28 91 = dix-sept, quarante-cinq, vingt-huit, quatre-vingt-onze.\n\nТренируйтесь считать предметы вокруг себя каждый день!',
          vocab: [
            { word: 'un, deux, trois', trans: '1, 2, 3' },
            { word: 'dix', trans: '10' },
            { word: 'vingt', trans: '20' },
            { word: 'cent', trans: '100' },
            { word: 'soixante-dix', trans: '70 (60+10)' },
            { word: 'quatre-vingts', trans: '80 (4x20)' },
            { word: 'Combien?', trans: 'Сколько?' },
            { word: 'Combien ca coute?', trans: 'Сколько это стоит?' }
          ]
        },
        video: { slides: [
          { emoji: '1-10', title: '1 to 10', text: 'un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.' },
          { emoji: '11-16', title: '11 to 16', text: 'onze, douze, treize, quatorze, quinze, seize.' },
          { emoji: '17-19', title: '17 to 19', text: 'dix-sept, dix-huit, dix-neuf (ten + number).' },
          { emoji: '20-60', title: 'Tens', text: 'vingt, trente, quarante, cinquante, soixante.' },
          { emoji: '70', title: '70 is special', text: 'soixante-dix = 60+10. 71 = soixante et onze.' },
          { emoji: '80', title: '80 is special', text: 'quatre-vingts = 4x20.' },
          { emoji: '90', title: '90 is special', text: 'quatre-vingt-dix = 4x20+10.' },
          { emoji: '100', title: '100', text: 'cent. 200 = deux cents.' }
        ]},
        quiz: { pool: [
          { q: 'How do you say "5" in French?', options: ['trois', 'cinq', 'six', 'sept'], answer: 1, explain: 'cinq = 5.' },
          { q: 'What is "dix"?', options: ['5', '10', '20', '100'], answer: 1, explain: 'dix = 10.' },
          { q: 'How do you say 20?', options: ['dix', 'vingt', 'trente', 'cent'], answer: 1, explain: 'vingt = 20.' },
          { q: 'What is "soixante-dix"?', options: ['60', '70', '80', '90'], answer: 1, explain: 'soixante-dix = 70 (60+10).' },
          { q: 'What is "quatre-vingts"?', options: ['80', '90', '100', '40'], answer: 0, explain: 'quatre-vingts = 80 (4x20).' },
          { q: 'How do you say 100?', options: ['mille', 'cent', 'dix', 'vingt'], answer: 1, explain: 'cent = 100.' },
          { q: 'How do you ask the price?', options: ['Comment?', 'Combien ca coute?', 'Ou?', 'Quand?'], answer: 1, explain: 'Combien ca coute? = Сколько стоит?' },
          { q: 'What is "douze"?', options: ['10', '11', '12', '13'], answer: 2, explain: 'douze = 12.' },
          { q: 'How do you say 17?', options: ['dix-sept', 'sept-dix', 'dix-seize', 'septante'], answer: 0, explain: 'dix-sept = 17 (10+7).' },
          { q: 'What is "quarante"?', options: ['30', '40', '50', '60'], answer: 1, explain: 'quarante = 40.' },
          { q: 'How do you say 21?', options: ['vingt-un', 'vingt et un', 'un-vingt', 'vingt-deux'], answer: 1, explain: '21 = vingt et un (with "et").' },
          { q: 'What is "quatre-vingt-dix"?', options: ['80', '90', '100', '70'], answer: 1, explain: 'quatre-vingt-dix = 90 (4x20+10).' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___" = 10', answer: 'dix', explain: 'dix = 10.' },
          { type: 'fill-blank', question: 'Complete: "___" = 100', answer: 'cent', explain: 'cent = 100.' },
          { type: 'choice', question: 'What is "soixante-dix"?', options: ['60', '70', '80', '90'], answer: 1, explain: 'soixante-dix = 70.' },
          { type: 'translate', question: 'Переведите: "Сколько это стоит?"', answer: 'Combien ca coute', explain: 'Combien ca coute?' },
          { type: 'order', question: 'Put in order:', words: ['vingt', 'et', 'un'], answer: 'vingt et un', explain: '21 = vingt et un.' },
          { type: 'correct', question: 'Find and correct: "20 = vingt-un"', answer: '20 = vingt', explain: 'vingt = 20. vingt et un = 21.' }
        ]}
      },
      {
        id: 'frf-l3', topic: 'Articles and gender (le/la/les)',
        objective: 'Understand French noun genders and articles.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Articles and Gender in French',
          text: 'Every French noun has a gender: masculine or feminine. There is no neutral gender in French. The article tells you the gender.\n\n**Definite articles (the):**\n- le = masculine singular (le livre = the book)\n- la = feminine singular (la table = the table)\n- l\' = before a vowel (l\'ami = the friend, l\'eau = the water)\n- les = plural (les livres = the books)\n\n**Indefinite articles (a/an):**\n- un = masculine (un livre = a book)\n- une = feminine (une table = a table)\n- des = plural (des livres = some books)\n\n**Partitive articles (some):**\n- du = masculine (du pain = some bread)\n- de la = feminine (de la eau = some water)\n- de l\' = before a vowel (de l\'argent = some money)\n- des = plural (des fruits = some fruits)\n\n**Tips for gender:**\n- Words ending in -tion, -te, -ette are usually feminine\n- Words ending in -ment, -eau, -isme are usually masculine\n- Days, months, languages, colors are masculine\n- But ultimately, you must memorize the gender with each noun\n\n**Elision:** Before a vowel or silent h, "le" and "la" become "l\'": l\'ami, l\'homme, l\'eau.\n\nPractice: always learn a noun WITH its article (le livre, not just "livre").',
          textRu: 'У каждого французского существительного есть род: мужской или женский. Среднего рода во французском языке нет. Артикль указывает на род.\n\n**Определённые артикли (the):**\n- le = мужской род, единственное число (le livre = книга)\n- la = женский род, единственное число (la table = стол)\n- l\' = перед гласной (l\'ami = друг, l\'eau = вода)\n- les = множественное число (les livres = книги)\n\n**Неопределённые артикли (a/an):**\n- un = мужской род (un livre = книга)\n- une = женский род (une table = стол)\n- des = множественное число (des livres = книги)\n\n**Частичные артикли (some):**\n- du = мужской род (du pain = хлеб)\n- de la = женский род (de la eau = вода)\n- de l\' = перед гласной (de l\'argent = деньги)\n- des = множественное число (des fruits = фрукты)\n\n**Советы по роду:**\n- Слова на -tion, -te, -ette обычно женского рода\n- Слова на -ment, -eau, -isme обычно мужского рода\n- Дни недели, месяцы, языки и цвета — мужского рода\n- Но в конечном счёте род каждого существительного нужно запоминать\n\n**Элизия:** Перед гласной или немой h «le» и «la» превращаются в «l\'»: l\'ami, l\'homme, l\'eau.\n\nПрактика: всегда учите существительное вместе с его артиклем (le livre, а не просто «livre»).',
          vocab: [
            { word: 'le (m.)', trans: 'Определённый артикль м.р.' },
            { word: 'la (f.)', trans: 'Определённый артикль ж.р.' },
            { word: 'les (pl.)', trans: 'Определённый артикль мн.ч.' },
            { word: 'un (m.)', trans: 'Неопределённый артикль м.р.' },
            { word: 'une (f.)', trans: 'Неопределённый артикль ж.р.' },
            { word: 'du / de la', trans: 'Частичный артикль' },
            { word: 'l\' (voyelle)', trans: 'Перед гласной' },
            { word: 'masculin / feminin', trans: 'Мужской / женский род' }
          ]
        },
        video: { slides: [
          { emoji: 'le', title: 'le (m.)', text: 'le livre = the book (masculine).' },
          { emoji: 'la', title: 'la (f.)', text: 'la table = the table (feminine).' },
          { emoji: 'l\'', title: 'l\' (vowel)', text: 'l\'ami = the friend. Before vowels, le/la become l\'.' },
          { emoji: 'les', title: 'les (pl.)', text: 'les livres = the books. Same for both genders.' },
          { emoji: 'un', title: 'un (m.)', text: 'un livre = a book.' },
          { emoji: 'une', title: 'une (f.)', text: 'une table = a table.' },
          { emoji: 'du', title: 'du / de la', text: 'du pain = some bread. de la eau = some water.' },
          { emoji: '?', title: 'Gender tips', text: '-tion=f, -eau=m, -ette=f. Learn nouns WITH articles!' }
        ]},
        quiz: { pool: [
          { q: 'Which article for masculine singular?', options: ['la', 'le', 'les', 'une'], answer: 1, explain: 'le = masculine.' },
          { q: 'Which article for feminine singular?', options: ['le', 'la', 'les', 'un'], answer: 1, explain: 'la = feminine.' },
          { q: 'How to say "the friend" (before vowel)?', options: ['le ami', 'la ami', 'l\'ami', 'les ami'], answer: 2, explain: 'l\' before a vowel.' },
          { q: 'Which is feminine?', options: ['le livre', 'la table', 'un stylo', 'le sac'], answer: 1, explain: 'la table = feminine.' },
          { q: 'How to say "a book"?', options: ['la livre', 'un livre', 'une livre', 'les livre'], answer: 1, explain: 'un livre (masculine).' },
          { q: 'How to say "some bread"?', options: ['le pain', 'un pain', 'du pain', 'des pain'], answer: 2, explain: 'du pain = partitive.' },
          { q: 'Which is plural?', options: ['le', 'la', 'un', 'les'], answer: 3, explain: 'les = plural.' },
          { q: 'Before a vowel, le/la become:', options: ['lu', 'l\'', 'li', 'lo'], answer: 1, explain: 'l\' = elision.' },
          { q: 'Words ending in -tion are usually:', options: ['masculine', 'feminine', 'plural', 'neutral'], answer: 1, explain: '-tion is feminine: la nation.' },
          { q: 'Words ending in -eau are usually:', options: ['masculine', 'feminine', 'plural', 'neutral'], answer: 0, explain: '-eau is masculine: le bateau.' },
          { q: 'How to say "some water"?', options: ['du eau', 'de l\'eau', 'la eau', 'un eau'], answer: 1, explain: 'de l\'eau (partitive + vowel).' },
          { q: 'Which is correct?', options: ['la ami', 'l\'ami', 'le ami', 'les ami'], answer: 1, explain: 'l\'ami (elision before vowel).' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ table" (feminine)', answer: 'la', explain: 'la table = ж.р.' },
          { type: 'fill-blank', question: 'Complete: "___ livre" (masculine)', answer: 'le', explain: 'le livre = м.р.' },
          { type: 'choice', question: 'How to say "the friend" before a vowel?', options: ['le ami', 'la ami', "l'ami", 'les ami'], answer: 2, explain: 'l\' before vowel.' },
          { type: 'translate', question: 'Переведите: "немного хлеба"', answer: 'du pain', explain: 'du pain = частичный артикль.' },
          { type: 'order', question: 'Put in order:', words: ['livre', 'un'], answer: 'un livre', explain: 'un livre = книга.' },
          { type: 'correct', question: 'Find and correct: "la ami"', answer: "l'ami", explain: 'Перед гласной: l\'ami.' }
        ]}
      },
      {
        id: 'frf-l4', topic: 'Etre and Avoir verbs',
        objective: 'Master the two most important French verbs: etre and avoir.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Etre and Avoir: The Two Most Important Verbs',
          text: '"Etre" (to be) and "avoir" (to have) are the most important verbs in French. They are irregular and must be memorized.\n\n**Etre (to be):**\n- je suis (I am)\n- tu es (you are - informal)\n- il/elle est (he/she is)\n- nous sommes (we are)\n- vous etes (you are - formal/plural)\n- ils/elles sont (they are)\n\n**Avoir (to have):**\n- j\'ai (I have)\n- tu as (you have)\n- il/elle a (he/she has)\n- nous avons (we have)\n- vous avez (you have)\n- ils/elles ont (they have)\n\n**Common uses of etre:**\n- To describe: "Je suis etudiant" (I am a student)\n- Location: "Paris est en France" (Paris is in France)\n- With adjectives: "Elle est belle" (She is beautiful)\n\n**Common uses of avoir:**\n- Possession: "J\'ai un livre" (I have a book)\n- Age: "J\'ai 25 ans" (I am 25 years old - NOT "je suis 25")\n- With expressions: "J\'ai faim" (I am hungry - literally "I have hunger"), "J\'ai soif" (I am thirsty), "J\'ai froid" (I am cold)\n\n**Important:** In French, age uses "avoir" not "etre": "J\'ai 20 ans" (NOT "Je suis 20 ans"). And many expressions that use "to be" in English use "avoir" in French.\n\nPractice conjugating these verbs every day until they become automatic!',
          textRu: '«Etre» (быть) и «avoir» (иметь) — самые важные глаголы во французском языке. Они неправильные, и их нужно запомнить.\n\n**Etre (быть):**\n- je suis (я есть)\n- tu es (ты есть — неформально)\n- il/elle est (он/она есть)\n- nous sommes (мы есть)\n- vous etes (вы есть — формально/множественное число)\n- ils/elles sont (они есть)\n\n**Avoir (иметь):**\n- j\'ai (я имею)\n- tu as (ты имеешь)\n- il/elle a (он/она имеет)\n- nous avons (мы имеем)\n- vous avez (вы имеете)\n- ils/elles ont (они имеют)\n\n**Основные случаи употребления etre:**\n- Для описания: «Je suis etudiant» (Я студент)\n- Местонахождение: «Paris est en France» (Париж находится во Франции)\n- С прилагательными: «Elle est belle» (Она красивая)\n\n**Основные случаи употребления avoir:**\n- Принадлежность: «J\'ai un livre» (У меня есть книга)\n- Возраст: «J\'ai 25 ans» (Мне 25 лет — а НЕ «je suis 25»)\n- С выражениями: «J\'ai faim» (Я голоден — буквально «имею голод»), «J\'ai soif» (Я хочу пить), «J\'ai froid» (Мне холодно)\n\n**Важно:** Во французском языке для возраста используется «avoir», а не «etre»: «J\'ai 20 ans» (а НЕ «Je suis 20 ans»). Многие выражения, в которых в английском используется «to be», во французском требуют «avoir».\n\nТренируйтесь спрягать эти глаголы каждый день, пока они не станут автоматическими!',
          vocab: [
            { word: 'je suis', trans: 'Я есть' },
            { word: 'tu es', trans: 'Ты есть' },
            { word: 'il/elle est', trans: 'Он/она есть' },
            { word: 'j\'ai', trans: 'Я имею' },
            { word: 'tu as', trans: 'Ты имеешь' },
            { word: 'il/elle a', trans: 'Он/она имеет' },
            { word: 'J\'ai faim', trans: 'Я голоден (имею голод)' },
            { word: 'J\'ai 20 ans', trans: 'Мне 20 лет' }
          ]
        },
        video: { slides: [
          { emoji: 'etre', title: 'Etre (to be)', text: 'je suis, tu es, il est, nous sommes, vous etes, ils sont.' },
          { emoji: 'avoir', title: 'Avoir (to have)', text: 'j\'ai, tu as, il a, nous avons, vous avez, ils ont.' },
          { emoji: 'suis', title: 'je suis', text: 'I am. "Je suis etudiant." = I am a student.' },
          { emoji: 'ai', title: 'j\'ai', text: 'I have. "J\'ai un livre." = I have a book.' },
          { emoji: 'ans', title: 'Age with avoir', text: '"J\'ai 25 ans" NOT "Je suis 25 ans"!' },
          { emoji: 'faim', title: 'J\'ai faim', text: 'I am hungry = I have hunger. French uses avoir for many expressions.' },
          { emoji: 'soif', title: 'J\'ai soif', text: 'I am thirsty = I have thirst.' },
          { emoji: '!', title: 'Irregular!', text: 'Both etre and avoir are irregular. Memorize them!' }
        ]},
        quiz: { pool: [
          { q: 'Complete: "Je ___ etudiant."', options: ['ai', 'suis', 'as', 'est'], answer: 1, explain: 'je suis = I am.' },
          { q: 'Complete: "J\'___ un livre."', options: ['suis', 'ai', 'es', 'a'], answer: 1, explain: 'j\'ai = I have.' },
          { q: 'How to say "I am 20 years old"?', options: ['Je suis 20 ans', 'J\'ai 20 ans', 'Je avoir 20', 'Je 20 ans'], answer: 1, explain: 'Age uses avoir: J\'ai 20 ans.' },
          { q: 'Complete: "Elle ___ belle."', options: ['ai', 'as', 'est', 'sont'], answer: 2, explain: 'elle est = she is.' },
          { q: 'Complete: "Nous ___ francais."', options: ['ai', 'sommes', 'sont', 'avez'], answer: 1, explain: 'nous sommes = we are.' },
          { q: 'How to say "I am hungry"?', options: ['Je suis faim', 'J\'ai faim', 'Je faim', 'J\'ai faime'], answer: 1, explain: 'J\'ai faim (avoir expression).' },
          { q: 'Complete: "Vous ___ ici."', options: ['etes', 'sont', 'ai', 'as'], answer: 0, explain: 'vous etes = you are.' },
          { q: 'Complete: "Ils ___ un chien."', options: ['sont', 'ont', 'ont', 'etes'], answer: 1, explain: 'ils ont = they have.' },
          { q: 'Which means "I am cold"?', options: ['Je suis froid', 'J\'ai froid', 'Je froid', 'Je ai froid'], answer: 1, explain: 'J\'ai froid (avoir expression).' },
          { q: 'Complete: "Tu ___ mon ami."', options: ['ai', 'es', 'as', 'est'], answer: 1, explain: 'tu es = you are.' },
          { q: 'Complete: "Nous ___ deux chiens."', options: ['sommes', 'avons', 'etes', 'sont'], answer: 1, explain: 'nous avons = we have.' },
          { q: 'Which is WRONG?', options: ['Je suis ici', 'J\'ai 20 ans', 'Je suis faim', 'J\'ai un livre'], answer: 2, explain: 'Wrong: Je suis faim. Correct: J\'ai faim.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Je ___ francais."', answer: 'suis', explain: 'je suis = I am.' },
          { type: 'fill-blank', question: 'Complete: "J\'___ 25 ans."', answer: 'ai', explain: 'j\'ai for age.' },
          { type: 'choice', question: 'How to say "I am hungry"?', options: ['Je suis faim', "J'ai faim", 'Je faim', "J'ai faime"], answer: 1, explain: 'J\'ai faim.' },
          { type: 'translate', question: 'Переведите: "Мне 20 лет."', answer: "J'ai 20 ans", explain: 'Age uses avoir.' },
          { type: 'order', question: 'Put in order:', words: ['etudiant', 'je', 'suis'], answer: 'je suis etudiant', explain: 'je suis + profession.' },
          { type: 'correct', question: 'Find and correct: "Je suis 20 ans."', answer: "J'ai 20 ans", explain: 'Age uses avoir, not etre.' }
        ]}
      },
      {
        id: 'frf-l5', topic: 'Days, months and dates',
        objective: 'Learn days of the week, months, and how to say dates in French.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Days, Months, and Dates in French',
          text: 'In French, days and months are NOT capitalized (unlike English). They are all lowercase.\n\n**Days of the week:**\nlundi (Monday), mardi (Tuesday), mercredi (Wednesday), jeudi (Thursday), vendredi (Friday), samedi (Saturday), dimanche (Sunday).\n\nNote: French days are not capitalized unless at the start of a sentence.\n\n**Months:**\njanvier (January), fevrier (February), mars (March), avril (April), mai (May), juin (June), juillet (July), aout (August), septembre (September), octobre (October), novembre (November), decembre (December).\n\n**Saying the date:**\n"le 14 juillet" = July 14th (French National Day). The format is: le + day + month.\n"C\'est quand?" = When is it?\n"le lundi 15 janvier" = on Monday, January 15th.\n\n**Prepositions:**\n- "lundi" = on Monday (no preposition needed!)\n- "le lundi" = on Mondays (every Monday)\n- "en janvier" = in January\n- "en 2024" = in 2024\n\n**Useful phrases:**\n- "Quel jour sommes-nous?" = What day is it?\n- "Aujourd\'hui" = today\n- "Demain" = tomorrow\n- "Hier" = yesterday\n- "Apres-demain" = the day after tomorrow\n\n**Numbers for dates:**\n"le premier" = the 1st (only day 1 uses "premier")\n"le deux" = the 2nd, "le trois" = the 3rd, etc.\n\nPractice: say today\'s date in French every morning!',
          textRu: 'Во французском языке дни недели и месяцы НЕ пишутся с большой буквы (в отличие от английского). Они всегда пишутся строчными буквами.\n\n**Дни недели:**\nlundi (понедельник), mardi (вторник), mercredi (среда), jeudi (четверг), vendredi (пятница), samedi (суббота), dimanche (воскресенье).\n\nПримечание: дни недели во французском языке пишутся с большой буквы только в начале предложения.\n\n**Месяцы:**\njanvier (январь), fevrier (февраль), mars (март), avril (апрель), mai (май), juin (июнь), juillet (июль), aout (август), septembre (сентябрь), octobre (октябрь), novembre (ноябрь), decembre (декабрь).\n\n**Как назвать дату:**\n«le 14 juillet» = 14 июля (Национальный праздник Франции). Формат: le + день + месяц.\n«C\'est quand?» = Когда?\n«le lundi 15 janvier» = в понедельник, 15 января.\n\n**Предлоги:**\n- «lundi» = в понедельник (предлог не нужен!)\n- «le lundi» = по понедельникам (каждый понедельник)\n- «en janvier» = в январе\n- «en 2024» = в 2024 году\n\n**Полезные фразы:**\n- «Quel jour sommes-nous?» = Какой сегодня день?\n- «Aujourd\'hui» = сегодня\n- «Demain» = завтра\n- «Hier» = вчера\n- «Apres-demain» = послезавтра\n\n**Числительные для дат:**\n«le premier» = 1-е (только для 1-го числа используется «premier»)\n«le deux» = 2-е, «le trois» = 3-е и т.д.\n\nПрактика: каждое утро называйте сегодняшнюю дату по-французски!',
          vocab: [
            { word: 'lundi', trans: 'Понедельник' },
            { word: 'mardi', trans: 'Вторник' },
            { word: 'janvier', trans: 'Январь' },
            { word: 'juillet', trans: 'Июль' },
            { word: "Aujourd'hui", trans: 'Сегодня' },
            { word: 'Demain', trans: 'Завтра' },
            { word: 'Hier', trans: 'Вчера' },
            { word: 'Quel jour sommes-nous?', trans: 'Какой сегодня день?' }
          ]
        },
        video: { slides: [
          { emoji: 'lundi', title: 'Days', text: 'lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.' },
          { emoji: 'lower', title: 'Not capitalized!', text: 'Days and months are lowercase in French.' },
          { emoji: 'janvier', title: 'Months', text: 'janvier, fevrier, mars, avril, mai, juin...' },
          { emoji: '14/7', title: 'Dates', text: 'le 14 juillet = July 14th. Format: le + day + month.' },
          { emoji: 'premier', title: 'le premier', text: 'Only day 1 is "premier": le premier mai.' },
          { emoji: 'en', title: 'en janvier', text: 'in January. Use "en" with months and years.' },
          { emoji: 'le', title: 'le lundi', text: 'on Mondays = every Monday. "lundi" = on Monday (once).' },
          { emoji: 'jour', title: 'Quel jour?', text: '"Quel jour sommes-nous?" = What day is it?' }
        ]},
        quiz: { pool: [
          { q: 'How do you say "Monday" in French?', options: ['mardi', 'lundi', 'dimanche', 'vendredi'], answer: 1, explain: 'lundi = Monday.' },
          { q: 'Are days capitalized in French?', options: ['Yes, always', 'No, only at sentence start', 'Sometimes', 'Only months'], answer: 1, explain: 'Days are lowercase in French.' },
          { q: 'How do you say "January"?', options: ['fevrier', 'janvier', 'mars', 'decembre'], answer: 1, explain: 'janvier = January.' },
          { q: 'How to say "July 14th"?', options: ['le juillet 14', 'le 14 juillet', '14 juillet', 'juillet le 14'], answer: 1, explain: 'le + day + month.' },
          { q: 'How to say "today"?', options: ['Demain', "Aujourd'hui", 'Hier', 'Apres'], answer: 1, explain: 'Aujourd\'hui = today.' },
          { q: 'How to say "tomorrow"?', options: ['Hier', "Aujourd'hui", 'Demain', 'Apres'], answer: 2, explain: 'Demain = tomorrow.' },
          { q: 'How to say "in January"?', options: ['sur janvier', 'en janvier', 'au janvier', 'le janvier'], answer: 1, explain: 'en + month.' },
          { q: 'What is "le premier"?', options: ['The first day of the month', 'The first of anything', 'Monday', 'January'], answer: 0, explain: 'le premier = the 1st of a month.' },
          { q: 'How to say "What day is it?"', options: ['Quel jour?', 'Quel jour sommes-nous?', 'Quel date?', 'Jour?'], answer: 1, explain: 'Quel jour sommes-nous?' },
          { q: 'What does "Hier" mean?', options: ['Today', 'Tomorrow', 'Yesterday', 'Never'], answer: 2, explain: 'Hier = yesterday.' },
          { q: 'How to say "on Mondays" (every Monday)?', options: ['lundi', 'le lundi', 'en lundi', 'du lundi'], answer: 1, explain: 'le lundi = on Mondays (recurring).' },
          { q: 'What is "samedi"?', options: ['Monday', 'Friday', 'Saturday', 'Sunday'], answer: 2, explain: 'samedi = Saturday.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___" = Monday', answer: 'lundi', explain: 'lundi = Monday.' },
          { type: 'fill-blank', question: 'Complete: "___" = today', answer: "Aujourd'hui", explain: 'Aujourd\'hui = today.' },
          { type: 'choice', question: 'How to say "in March"?', options: ['sur mars', 'en mars', 'le mars', 'au mars'], answer: 1, explain: 'en + month.' },
          { type: 'translate', question: 'Переведите: "Какой сегодня день?"', answer: 'Quel jour sommes-nous', explain: 'Quel jour sommes-nous?' },
          { type: 'order', question: 'Put in order:', words: ['14', 'le', 'juillet'], answer: 'le 14 juillet', explain: 'le + day + month.' },
          { type: 'correct', question: 'Find and correct: "Lundi" (at start of sentence: "Lundi je vais...")', answer: 'Lundi', explain: 'Actually correct at sentence start! Days are only lowercase mid-sentence.' }
        ]}
      },
      {
        id: 'frf-l6', topic: 'Food and ordering in a cafe',
        objective: 'Order food and drinks in a French cafe or restaurant.',
        estimatedTime: '55 minutes',
        reading: {
          title: 'Ordering Food in a French Cafe',
          text: 'French cuisine is world-famous, and ordering in French is an essential skill. Whether you\'re at a Parisian cafe or a restaurant in Lyon, these phrases will help you.\n\n**Polite ordering:**\n- "Je voudrais..." = I would like... (polite)\n- "Je vais prendre..." = I\'ll have... (common in restaurants)\n- "Est-ce que je peux avoir..." = Can I have...?\n- "Un cafe, s\'il vous plait." = A coffee, please.\n\nAlways add "s\'il vous plait" (please) or "s\'il te plait" (informal).\n\n**Common cafe items:**\n- un cafe (espresso), un creme (coffee with milk), un the (tea)\n- un croissant, un pain au chocolat\n- une baguette, un sandwich\n- de l\'eau (water), un jus d\'orange (orange juice)\n- un vin rouge (red wine), une bierre (beer)\n\n**At the restaurant:**\n- "La carte, s\'il vous plait." = The menu, please.\n- "Qu\'est-ce que vous recommandez?" = What do you recommend?\n- "L\'addition, s\'il vous plait." = The bill, please.\n\n**Meals:**\n- le petit-dejeuner (breakfast)\n- le dejeuner (lunch)\n- le diner (dinner)\n- l\'entree (starter), le plat principal (main course), le dessert (dessert)\n\n**Useful phrases:**\n- "C\'est delicieux!" = It\'s delicious!\n- "Je n\'aime pas ca." = I don\'t like that.\n- "Avez-vous des options vegetariennes?" = Do you have vegetarian options?\n\n**Tipping:** Service is included in France (15%), but you can leave small change (arrondi) for good service.\n\nPractice: imagine ordering your favorite meal in French!',
          textRu: 'Французская кухня всемирно известна, и умение сделать заказ по-французски — необходимый навык. Будь вы в парижском кафе или в ресторане Лиона, эти фразы вам помогут.\n\n**Вежливый заказ:**\n- «Je voudrais...» = Я бы хотел... (вежливо)\n- «Je vais prendre...» = Я возьму... (часто используется в ресторанах)\n- «Est-ce que je peux avoir...» = Могу я получить...?\n- «Un cafe, s\'il vous plait.» = Кофе, пожалуйста.\n\nВсегда добавляйте «s\'il vous plait» (пожалуйста, формально) или «s\'il te plait» (неформально).\n\n**Распространённые позиции в кафе:**\n- un cafe (эспрессо), un creme (кофе с молоком), un the (чай)\n- un croissant, un pain au chocolat\n- une baguette, un sandwich\n- de l\'eau (вода), un jus d\'orange (апельсиновый сок)\n- un vin rouge (красное вино), une bierre (пиво)\n\n**В ресторане:**\n- «La carte, s\'il vous plait.» = Меню, пожалуйста.\n- «Qu\'est-ce que vous recommandez?» = Что вы посоветуете?\n- «L\'addition, s\'il vous plait.» = Счёт, пожалуйста.\n\n**Приёмы пищи:**\n- le petit-dejeuner (завтрак)\n- le dejeuner (обед)\n- le diner (ужин)\n- l\'entree (закуска), le plat principal (основное блюдо), le dessert (десерт)\n\n**Полезные фразы:**\n- «C\'est delicieux!» = Это вкусно!\n- «Je n\'aime pas ca.» = Мне это не нравится.\n- «Avez-vous des options vegetariennes?» = У вас есть вегетарианские блюда?\n\n**Чаевые:** Во Франции сервис уже включён в счёт (15%), но можно оставить мелкую сдачу (arrondi) за хорошее обслуживание.\n\nПрактика: представьте, что делаете заказ своего любимого блюда по-французски!',
          vocab: [
            { word: 'Je voudrais...', trans: 'Я бы хотел...' },
            { word: 's\'il vous plait', trans: 'пожалуйста (формально)' },
            { word: 'un cafe', trans: 'кофе (эспрессо)' },
            { word: 'un croissant', trans: 'круассан' },
            { word: 'L\'addition, s\'il vous plait', trans: 'Счёт, пожалуйста' },
            { word: 'Qu\'est-ce que vous recommandez?', trans: 'Что вы посоветуете?' },
            { word: 'le dejeuner', trans: 'обед' },
            { word: 'C\'est delicieux!', trans: 'Это вкусно!' }
          ]
        },
        video: { slides: [
          { emoji: 'cafe', title: 'Je voudrais...', text: 'I would like... Polite way to order.' },
          { emoji: 'svp', title: 's\'il vous plait', text: 'please (formal). s\'il te plait = informal.' },
          { emoji: 'coffee', title: 'un cafe', text: 'espresso. un creme = coffee with milk.' },
          { emoji: 'croissant', title: 'un croissant', text: 'Classic French breakfast pastry.' },
          { emoji: 'menu', title: 'La carte', text: '"La carte, s\'il vous plait." = The menu, please.' },
          { emoji: 'reco', title: 'Recommendations', text: '"Qu\'est-ce que vous recommandez?" = What do you recommend?' },
          { emoji: 'bill', title: 'L\'addition', text: '"L\'addition, s\'il vous plait." = The bill, please.' },
          { emoji: 'yum', title: 'C\'est delicieux!', text: 'It\'s delicious! Always compliment the chef.' }
        ]},
        quiz: { pool: [
          { q: 'Polite way to order in French?', options: ['Donnez-moi', 'Je voudrais...', 'Je veux', 'Moi'], answer: 1, explain: 'Je voudrais = I would like.' },
          { q: 'How to say "please" (formal)?', options: ['de rien', "s'il vous plait", 'merci', 'voila'], answer: 1, explain: 's\'il vous plait.' },
          { q: 'How to ask for the bill?', options: ['L\'argent', 'L\'addition, s\'il vous plait', 'Le prix', 'Combien'], answer: 1, explain: 'L\'addition = the bill.' },
          { q: 'What is "un cafe" in France?', options: ['Latte', 'Espresso', 'Tea', 'Juice'], answer: 1, explain: 'un cafe = espresso (small strong coffee).' },
          { q: 'How to ask for the menu?', options: ['La nourriture', 'La carte, s\'il vous plait', 'Le menu', 'Quoi?'], answer: 1, explain: 'La carte = the menu.' },
          { q: 'How to ask for a recommendation?', options: ['C\'est quoi?', 'Qu\'est-ce que vous recommandez?', 'Donnez-moi', 'Quel?'], answer: 1, explain: 'Qu\'est-ce que vous recommandez?' },
          { q: 'What is "le dejeuner"?', options: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'], answer: 1, explain: 'le dejeuner = lunch.' },
          { q: 'How to say "It\'s delicious"?', options: ['C\'est bon', 'C\'est delicieux!', 'J\'aime', 'Bien'], answer: 1, explain: 'C\'est delicieux!' },
          { q: 'What is "un croissant"?', options: ['A drink', 'A pastry', 'A sandwich', 'A meal'], answer: 1, explain: 'un croissant = pastry.' },
          { q: 'How to say "I don\'t like that"?', options: ['Je n\'aime pas ca', 'Pas bon', 'Non', 'Je deteste'], answer: 0, explain: 'Je n\'aime pas ca.' },
          { q: 'What is "le petit-dejeuner"?', options: ['Lunch', 'Breakfast', 'Dinner', 'Snack'], answer: 1, explain: 'le petit-dejeuner = breakfast.' },
          { q: 'How to say "Can I have a tea?"', options: ['Je veux the', 'Est-ce que je peux avoir un the?', 'Donnez the', 'The maintenant'], answer: 1, explain: 'Est-ce que je peux avoir un the?' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Je ___ un cafe, s\'il vous plait."', answer: 'voudrais', explain: 'Je voudrais = I would like.' },
          { type: 'fill-blank', question: 'Complete: "L\'___, s\'il vous plait." (the bill)', answer: 'addition', explain: 'L\'addition = the bill.' },
          { type: 'choice', question: 'How to ask for the menu?', options: ['La nourriture', 'La carte, s\'il vous plait', 'Le menu', 'Quoi?'], answer: 1, explain: 'La carte = menu.' },
          { type: 'translate', question: 'Переведите: "Я бы хотел кофе."', answer: 'Je voudrais un cafe', explain: 'Je voudrais + un cafe.' },
          { type: 'order', question: 'Put in order:', words: ['vous', 'plait', 's\'il'], answer: "s'il vous plait", explain: 's\'il vous plait.' },
          { type: 'correct', question: 'Find and correct: "Donnez-moi un cafe."', answer: 'Je voudrais un cafe, s\'il vous plait', explain: 'Donnez-moi is rude. Use Je voudrais + s\'il vous plait.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._french_course_1 = COURSE;
})(window);
