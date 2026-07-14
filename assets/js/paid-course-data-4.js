/* ============================================================
   AES Paid Course 4: Путь к свободной речи (A2-B1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-fluent',
    title: 'Путь к свободной речи',
    price: 1750, oldPrice: 3490,
    level: 'A2-B1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'lavender',
    art: ['#E5DAF0', '#CDBCE6'],
    tagline: 'Естественная беглость через диалоги и практику. 6 модулей.',
    lessons: [
      {
        id: 'pcf-l1', topic: 'Present Perfect и жизненный опыт',
        objective: 'Говорить о жизненном опыте с помощью Present Perfect.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Present Perfect: Talking About Life Experience',
          text: 'The Present Perfect tense connects the past with the present. We use it to talk about life experiences, recent actions, and things that started in the past and continue now.\n\n**Form:** have/has + past participle (V3). For regular verbs, add -ed (worked, played). For irregular verbs, use the third form (gone, seen, eaten, written, taken).\n\nI/you/we/they + have (I have visited Paris).\nHe/she/it + has (She has visited Paris).\n\nNegative: have/has not (haven\'t/hasn\'t). "I haven\'t seen that film."\nQuestion: Have you...? Has she...? "Have you ever been to London?"\n\n**Key words:**\n- ever (in questions): "Have you ever eaten sushi?"\n- never (in negative): "I have never been to Japan."\n- already: "I have already finished."\n- yet (in questions/negative): "Have you done it yet?" "Not yet."\n- just (very recent): "He has just left."\n- for (duration): "I have lived here for 5 years."\n- since (starting point): "I have lived here since 2020."\n\n**Present Perfect vs Past Simple:**\nUse Present Perfect when the exact time doesn\'t matter: "I have been to Italy." Use Past Simple for a specific time: "I went to Italy in 2022." Never use Present Perfect with specific past time words (yesterday, last week, in 2020).\n\n**Common mistakes:**\n- "I have seen him yesterday." WRONG! -> "I saw him yesterday."\n- "I have went there." WRONG! -> "I have gone/went there."\n\nPractice: Think of 5 things you have done in your life and 5 things you haven\'t done yet!',
          textRu: 'Время Present Perfect связывает прошлое с настоящим. Мы используем его, чтобы говорить о жизненном опыте, недавних действиях и о том, что началось в прошлом и продолжается сейчас.\n\n**Форма:** have/has + причастие прошедшего времени (V3). Для правильных глаголов добавьте -ed (worked, played). Для неправильных глаголов используйте третью форму (gone, seen, eaten, written, taken).\n\nI/you/we/they + have (I have visited Paris).\nHe/she/it + has (She has visited Paris).\n\nОтрицание: have/has not (haven\'t/hasn\'t). "I haven\'t seen that film."\nВопрос: Have you...? Has she...? "Have you ever been to London?"\n\n**Ключевые слова:**\n- ever (в вопросах): "Have you ever eaten sushi?"\n- never (в отрицаниях): "I have never been to Japan."\n- already: "I have already finished."\n- yet (в вопросах/отрицаниях): "Have you done it yet?" "Not yet."\n- just (очень недавнее): "He has just left."\n- for (продолжительность): "I have lived here for 5 years."\n- since (отправная точка): "I have lived here since 2020."\n\n**Present Perfect vs Past Simple:**\nИспользуйте Present Perfect, когда точное время не имеет значения: "I have been to Italy." Используйте Past Simple для конкретного времени: "I went to Italy in 2022." Никогда не используйте Present Perfect с указанием конкретного времени в прошлом (yesterday, last week, in 2020).\n\n**Частые ошибки:**\n- "I have seen him yesterday." НЕВЕРНО! -> "I saw him yesterday."\n- "I have went there." НЕВЕРНО! -> "I have gone/went there."\n\nПрактика: Вспомните 5 вещей, которые вы сделали в своей жизни, и 5 вещей, которые вы ещё не сделали!',
          vocab: [
            { word: 'have/has + V3', trans: 'Форма Present Perfect' },
            { word: 'ever / never', trans: 'Когда-либо / никогда' },
            { word: 'already / yet', trans: 'Уже / ещё нет' },
            { word: 'just', trans: 'Только что' },
            { word: 'for / since', trans: 'В течение / с (момента)' },
            { word: 'Have you ever...?', trans: 'Вы когда-нибудь...?' },
            { word: 'I have been to', trans: 'Я был в' },
            { word: 'life experience', trans: 'Жизненный опыт' }
          ]
        },
        video: { slides: [
          { emoji: ' present', title: 'Present Perfect', text: 'have/has + V3. Связь прошлого с настоящим.' },
          { emoji: ' gone', title: 'Irregular V3', text: 'go-went-gone, see-saw-seen, eat-ate-eaten, write-wrote-written.' },
          { emoji: ' ever', title: 'ever', text: '"Have you ever been to Paris?" В вопросах.' },
          { emoji: ' never', title: 'never', text: '"I have never eaten sushi." В отрицаниях.' },
          { emoji: ' already', title: 'already / yet', text: 'already в утверд., yet в вопросах и отрицаниях.' },
          { emoji: ' just', title: 'just', text: '"He has just left." Только что.' },
          { emoji: ' for', title: 'for / since', text: 'for + период, since + точка во времени.' },
          { emoji: ' vs', title: 'vs Past Simple', text: 'Present Perfect: время не важно. Past Simple: конкретное время.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: "I ___ been to Italy."', options: ['have', 'has', 'had', 'is'], answer: 0, explain: 'С "I" используем "have".' },
          { q: 'Complete: "She ___ visited Paris."', options: ['have', 'has', 'had', 'is'], answer: 1, explain: 'С "she" используем "has".' },
          { q: 'Choose: "Have you ___ eaten sushi?"', options: ['ever', 'never', 'already', 'yet'], answer: 0, explain: '"ever" в вопросах.' },
          { q: 'Complete: "I have ___ been to Japan."', options: ['ever', 'never', 'already', 'just'], answer: 1, explain: '"never" в отрицаниях.' },
          { q: 'Past participle of "go"?', options: ['went', 'gone', 'goed', 'going'], answer: 1, explain: 'go-went-gone.' },
          { q: 'Past participle of "see"?', options: ['saw', 'seen', 'seed', 'seeing'], answer: 1, explain: 'see-saw-seen.' },
          { q: 'Complete: "I have lived here ___ 5 years."', options: ['for', 'since', 'from', 'in'], answer: 0, explain: 'for + период.' },
          { q: 'Complete: "I have lived here ___ 2020."', options: ['for', 'since', 'from', 'in'], answer: 1, explain: 'since + точка во времени.' },
          { q: 'Which is correct?', options: ['I have seen him yesterday', 'I saw him yesterday', 'Both', 'Neither'], answer: 1, explain: 'С yesterday - Past Simple.' },
          { q: 'Complete: "He has ___ left."', options: ['yet', 'just', 'never', 'ever'], answer: 1, explain: 'just = только что.' },
          { q: 'Complete: "Have you finished ___?"', options: ['yet', 'already', 'just', 'ever'], answer: 0, explain: 'yet в вопросах.' },
          { q: 'Complete: "I haven\'t done it ___."', options: ['yet', 'already', 'just', 'ever'], answer: 0, explain: 'yet в отрицаниях.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I have ___ (see) that movie."', answer: 'seen', explain: 'see-saw-seen.' },
          { type: 'fill-blank', question: 'Complete: "___ you ever been to London?"', answer: 'Have', explain: 'Вопрос с "you" - have.' },
          { type: 'choice', question: 'Choose: "I have lived here ___ 2010."', options: ['for', 'since', 'from', 'in'], answer: 1, explain: 'since + год.' },
          { type: 'translate', question: 'Переведите: "Я никогда не был в Японии."', answer: 'I have never been to Japan', explain: 'never + been to.' },
          { type: 'order', question: 'Put in order:', words: ['been', 'have', 'I', 'to', 'Paris'], answer: 'I have been to Paris', explain: 'I + have + been + to + place.' },
          { type: 'correct', question: 'Find and correct: "I have saw him yesterday."', answer: 'I saw him yesterday', explain: 'С yesterday - Past Simple, не Present Perfect.' }
        ]}
      },
      {
        id: 'pcf-l2', topic: 'Фразовые глаголы в разговоре',
        objective: 'Использовать фразовые глаголы в повседневной речи.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Phrasal Verbs in Everyday English',
          text: 'Phrasal verbs are combinations of a verb + a particle (preposition or adverb). They are extremely common in spoken English and make you sound natural and fluent.\n\n**How they work:** The meaning of a phrasal verb is often different from the individual words. For example, "give up" does not mean "give" + "up" - it means "to quit" or "to stop trying."\n\n**Most common phrasal verbs:**\n- get up: вставать (I get up at 7)\n- give up: сдаваться (Don\'t give up!)\n- look for: искать (I\'m looking for my keys)\n- look forward to: ждать с нетерпением (I look forward to the weekend)\n- put off: откладывать (Don\'t put off until tomorrow what you can do today)\n- take off: взлетать/снимать (The plane takes off at 6 / Take off your coat)\n- turn on/off: включать/выключать (Turn on the lights / Turn off the TV)\n- find out: узнать (I found out the truth)\n- make up: придумывать (He made up a story)\n- bring up: воспитывать/поднимать тему (She was brought up in London)\n\n**Types of phrasal verbs:**\n1. Inseparable: "look for" - "I look for my keys" (not "I look my keys for")\n2. Separable: "turn on" - "Turn on the TV" or "Turn the TV on" (both OK)\n3. Intransitive (no object): "get up" - "I get up at 7"\n\n**Tips for learning:**\n- Learn phrasal verbs in context, not as lists\n- Group them by topic (travel, work, daily life)\n- Practice by writing your own sentences\n- Notice them when watching movies or TV shows\n\nPhrasal verbs are what make English sound natural. Native speakers use them constantly instead of formal Latin-based verbs (e.g., "find out" instead of "discover", "put off" instead of "postpone").',
          textRu: 'Фразовые глаголы — это сочетания глагола + частицы (предлога или наречия). Они крайне распространены в разговорном английском и делают вашу речь естественной и беглой.\n\n**Как они работают:** Значение фразового глагола часто отличается от значений отдельных слов. Например, "give up" не означает "give" + "up" — оно означает "бросить" или "перестать пытаться."\n\n**Самые распространённые фразовые глаголы:**\n- get up: вставать (I get up at 7)\n- give up: сдаваться (Don\'t give up!)\n- look for: искать (I\'m looking for my keys)\n- look forward to: ждать с нетерпением (I look forward to the weekend)\n- put off: откладывать (Don\'t put off until tomorrow what you can do today)\n- take off: взлетать/снимать (The plane takes off at 6 / Take off your coat)\n- turn on/off: включать/выключать (Turn on the lights / Turn off the TV)\n- find out: узнавать (I found out the truth)\n- make up: придумывать (He made up a story)\n- bring up: воспитывать/поднимать тему (She was brought up in London)\n\n**Типы фразовых глаголов:**\n1. Неразделяемые: "look for" — "I look for my keys" (не "I look my keys for")\n2. Разделяемые: "turn on" — "Turn on the TV" или "Turn the TV on" (оба варианта верны)\n3. Непереходные (без дополнения): "get up" — "I get up at 7"\n\n**Советы по изучению:**\n- Учитесь фразовым глаголам в контексте, а не списками\n- Группируйте их по темам (путешествия, работа, повседневная жизнь)\n- Практикуйтесь, составляя собственные предложения\n- Замечайте их при просмотре фильмов или телепередач\n\nФразовые глаголы — это то, что делает английскую речь естественной. Носители языка используют их постоянно вместо формальных глаголов латинского происхождения (например, "find out" вместо "discover", "put off" вместо "postpone").',
          vocab: [
            { word: 'get up', trans: 'Вставать' },
            { word: 'give up', trans: 'Сдаваться' },
            { word: 'look for', trans: 'Искать' },
            { word: 'look forward to', trans: 'Ждать с нетерпением' },
            { word: 'put off', trans: 'Откладывать' },
            { word: 'take off', trans: 'Взлетать / снимать' },
            { word: 'turn on / off', trans: 'Включать / выключать' },
            { word: 'find out', trans: 'Узнавать' }
          ]
        },
        video: { slides: [
          { emoji: '+', title: 'What are they?', text: 'verb + particle. Часто смысл меняется.' },
          { emoji: 'get', title: 'get up', text: 'Вставать: "I get up at 7 AM."' },
          { emoji: 'give', title: 'give up', text: 'Сдаваться: "Don\'t give up!"' },
          { emoji: 'look', title: 'look for', text: 'Искать: "I\'m looking for my keys."' },
          { emoji: 'forward', title: 'look forward to', text: 'Ждать с нетерпением: "I look forward to the weekend."' },
          { emoji: 'off', title: 'put off / take off', text: 'put off = откладывать, take off = взлетать/снимать.' },
          { emoji: 'on', title: 'turn on / off', text: 'Включать/выключать: "Turn on the TV."' },
          { emoji: 'find', title: 'find out', text: 'Узнавать: "I found out the truth."' }
        ]},
        quiz: { pool: [
          { q: 'What does "give up" mean?', options: ['Get', 'Quit', 'Find', 'Take'], answer: 1, explain: 'give up = сдаваться.' },
          { q: 'Complete: "I\'m ___ for my keys."', options: ['looking', 'giving', 'turning', 'taking'], answer: 0, explain: 'look for = искать.' },
          { q: 'What does "take off" mean for a plane?', options: ['Land', 'Depart', 'Stop', 'Turn'], answer: 1, explain: 'take off = взлетать.' },
          { q: 'Complete: "Please ___ off the TV."', options: ['turn', 'put', 'get', 'look'], answer: 0, explain: 'turn off = выключить.' },
          { q: 'What does "put off" mean?', options: ['To do now', 'To delay', 'To remove', 'To find'], answer: 1, explain: 'put off = откладывать.' },
          { q: 'Complete: "I look ___ to the weekend."', options: ['forward', 'for', 'out', 'up'], answer: 0, explain: 'look forward to = ждать с нетерпением.' },
          { q: 'What does "find out" mean?', options: ['To lose', 'To discover', 'To give', 'To turn'], answer: 1, explain: 'find out = узнавать.' },
          { q: 'Complete: "I ___ up at 7 every morning."', options: ['get', 'give', 'put', 'find'], answer: 0, explain: 'get up = вставать.' },
          { q: 'What does "make up" mean?', options: ['To create', 'To destroy', 'To find', 'To lose'], answer: 0, explain: 'make up = придумывать.' },
          { q: 'Complete: "She was ___ up in London."', options: ['brought', 'put', 'given', 'turned'], answer: 0, explain: 'bring up = воспитывать.' },
          { q: 'What does "turn on" mean?', options: ['Activate', 'Deactivate', 'Delay', 'Find'], answer: 0, explain: 'turn on = включать.' },
          { q: 'Which means "to delay"?', options: ['put off', 'take off', 'get up', 'find out'], answer: 0, explain: 'put off = откладывать.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Don\'t ___ up! Keep trying!"', answer: 'give', explain: 'give up = сдаваться.' },
          { type: 'fill-blank', question: 'Complete: "Please turn ___ the lights."', answer: 'on', explain: 'turn on = включить.' },
          { type: 'choice', question: 'What does "look for" mean?', options: ['To find', 'To lose', 'To give', 'To wait'], answer: 0, explain: 'look for = искать.' },
          { type: 'translate', question: 'Переведите: "Я с нетерпением жду выходных."', answer: 'I look forward to the weekend', explain: 'look forward to.' },
          { type: 'order', question: 'Put in order:', words: ['for', 'I', 'looking', 'am', 'keys', 'my'], answer: 'I am looking for my keys', explain: 'look for = искать.' },
          { type: 'correct', question: 'Find and correct: "Find for my keys."', answer: 'Look for my keys', explain: 'look for = искать, не find for.' }
        ]}
      },
      {
        id: 'pcf-l3', topic: 'Идиомы и разговорные выражения',
        objective: 'Понимать и использовать английские идиомы.',
        estimatedTime: '55 минут',
        reading: {
          title: 'English Idioms for Natural Conversation',
          text: 'Idioms are expressions whose meaning cannot be understood from the individual words. They are what make English colorful and natural. Native speakers use them constantly.\n\n**Most common idioms:**\n- "Piece of cake" = very easy (This test was a piece of cake!)\n- "Break a leg" = good luck (Break a leg in your performance!)\n- "Hit the books" = to study hard (I need to hit the books tonight)\n- "Under the weather" = feeling sick (I\'m feeling under the weather today)\n- "Cost an arm and a leg" = very expensive (That car costs an arm and a leg)\n- "Once in a blue moon" = very rarely (I see him once in a blue moon)\n- "Let the cat out of the bag" = reveal a secret (Don\'t let the cat out of the bag!)\n- "On the same page" = in agreement (We\'re on the same page about this)\n- "Spill the beans" = reveal a secret (Who spilled the beans?)\n- "Bite the bullet" = endure something difficult (I had to bite the bullet and tell her)\n- "Cut corners" = do something cheaply/fast (Don\'t cut corners on safety)\n- "Get out of hand" = become uncontrollable (Things are getting out of hand)\n\n**Why learn idioms?**\n1. They make you sound more natural and fluent\n2. They help you understand movies, TV shows, and native speakers\n3. They are fun and memorable\n4. They show cultural understanding\n\n**Tips for learning idioms:**\n- Don\'t try to translate literally - it won\'t make sense\n- Learn the context where each idiom is used\n- Practice by using them in your own sentences\n- Watch English movies and note when idioms appear\n- Learn 2-3 at a time, not 20 at once\n\nIdioms are the spice of English. Start using them today!',
          textRu: 'Идиомы — это выражения, чьё значение нельзя понять из отдельных слов. Именно они делают английский ярким и естественным. Носители языка используют их постоянно.\n\n**Самые распространённые идиомы:**\n- "Piece of cake" = очень легко (This test was a piece of cake!)\n- "Break a leg" = удачи (Break a leg in your performance!)\n- "Hit the books" = усердно учиться (I need to hit the books tonight)\n- "Under the weather" = плохо себя чувствовать (I\'m feeling under the weather today)\n- "Cost an arm and a leg" = очень дорого (That car costs an arm and a leg)\n- "Once in a blue moon" = очень редко (I see him once in a blue moon)\n- "Let the cat out of the bag" = выдать секрет (Don\'t let the cat out of the bag!)\n- "On the same page" = быть согласными (We\'re on the same page about this)\n- "Spill the beans" = выдать секрет (Who spilled the beans?)\n- "Bite the bullet" = терпеть что-то трудное (I had to bite the bullet and tell her)\n- "Cut corners" = делать кое-как/дёшево (Don\'t cut corners on safety)\n- "Get out of hand" = выйти из-под контроля (Things are getting out of hand)\n\n**Зачем учить идиомы?**\n1. Они делают вашу речь более естественной и беглой\n2. Они помогают понимать фильмы, телепередачи и носителей языка\n3. Они увлекательны и легко запоминаются\n4. Они демонстрируют культурное понимание\n\n**Советы по изучению идиом:**\n- Не пытайтесь переводить буквально — это не имеет смысла\n- Учитесь контексту, в котором используется каждая идиома\n- Практикуйтесь, используя их в собственных предложениях\n- Смотрите английские фильмы и замечайте, когда появляются идиомы\n- Учите по 2-3 за раз, а не 20 сразу\n\nИдиомы — это специи английского языка. Начните использовать их уже сегодня!',
          vocab: [
            { word: 'piece of cake', trans: 'Очень легко' },
            { word: 'break a leg', trans: 'Удачи!' },
            { word: 'hit the books', trans: 'Усердно учиться' },
            { word: 'under the weather', trans: 'Плохо себя чувствовать' },
            { word: 'cost an arm and a leg', trans: 'Очень дорого' },
            { word: 'once in a blue moon', trans: 'Очень редко' },
            { word: 'let the cat out of the bag', trans: 'Выдать секрет' },
            { word: 'on the same page', trans: 'Быть согласными' }
          ]
        },
        video: { slides: [
          { emoji: ' cake', title: 'piece of cake', text: 'Очень легко: "This test was a piece of cake!"' },
          { emoji: ' leg', title: 'break a leg', text: 'Удачи! (перед выступлением)' },
          { emoji: ' books', title: 'hit the books', text: 'Усердно учиться: "I need to hit the books."' },
          { emoji: ' weather', title: 'under the weather', text: 'Плохо себя чувствовать: "I\'m under the weather."' },
          { emoji: ' money', title: 'cost an arm and a leg', text: 'Очень дорого.' },
          { emoji: ' moon', title: 'once in a blue moon', text: 'Очень редко.' },
          { emoji: ' cat', title: 'let the cat out of the bag', text: 'Выдать секрет.' },
          { emoji: ' page', title: 'on the same page', text: 'Быть согласными: "We\'re on the same page."' }
        ]},
        quiz: { pool: [
          { q: 'What does "piece of cake" mean?', options: ['Delicious', 'Very easy', 'Expensive', 'Difficult'], answer: 1, explain: 'piece of cake = очень легко.' },
          { q: 'When do you say "break a leg"?', options: ['Before a meal', 'Before a performance', 'When injured', 'When leaving'], answer: 1, explain: 'break a leg = удачи перед выступлением.' },
          { q: 'What does "hit the books" mean?', options: ['To fight', 'To study hard', 'To read for fun', 'To buy books'], answer: 1, explain: 'hit the books = усердно учиться.' },
          { q: 'What does "under the weather" mean?', options: ['Happy', 'Sick', 'Cold', 'Wet'], answer: 1, explain: 'under the weather = плохо себя чувствовать.' },
          { q: 'What does "cost an arm and a leg" mean?', options: ['Very cheap', 'Very expensive', 'Painful', 'Far away'], answer: 1, explain: 'cost an arm and a leg = очень дорого.' },
          { q: 'What does "once in a blue moon" mean?', options: ['Never', 'Very rarely', 'At night', 'Every month'], answer: 1, explain: 'once in a blue moon = очень редко.' },
          { q: 'What does "let the cat out of the bag" mean?', options: ['Release a pet', 'Reveal a secret', 'Go shopping', 'Clean up'], answer: 1, explain: 'let the cat out of the bag = выдать секрет.' },
          { q: 'What does "on the same page" mean?', options: ['Reading together', 'In agreement', 'On the same website', 'On a team'], answer: 1, explain: 'on the same page = быть согласными.' },
          { q: 'What does "spill the beans" mean?', options: ['Cook', 'Reveal a secret', 'Make a mess', 'Eat'], answer: 1, explain: 'spill the beans = выдать секрет.' },
          { q: 'What does "bite the bullet" mean?', options: ['Eat fast', 'Endure difficulty', 'Be brave', 'Fight'], answer: 1, explain: 'bite the bullet = терпеть трудности.' },
          { q: 'What does "cut corners" mean?', options: ['Be precise', 'Do cheaply/fast', 'Turn around', 'Stop'], answer: 1, explain: 'cut corners = делать кое-как.' },
          { q: 'Complete: "This test was a ___ of cake!"', options: ['piece', 'slice', 'bit', 'part'], answer: 0, explain: 'piece of cake.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "This was a piece of ___!"', answer: 'cake', explain: 'piece of cake.' },
          { type: 'fill-blank', question: 'Complete: "I feel under the ___ today."', answer: 'weather', explain: 'under the weather.' },
          { type: 'choice', question: 'What does "break a leg" mean?', options: ['Good luck', 'Be careful', 'Run fast', 'Stop'], answer: 0, explain: 'break a leg = удачи!' },
          { type: 'translate', question: 'Переведите: "Это стоит целое состояние."', answer: 'It costs an arm and a leg', explain: 'cost an arm and a leg.' },
          { type: 'order', question: 'Put in order:', words: ['page', 'the', 'on', 'same', 'We', 'are'], answer: 'We are on the same page', explain: 'on the same page.' },
          { type: 'correct', question: 'Find and correct: "It is a cake of piece."', answer: 'It is a piece of cake', explain: 'Правильно: piece of cake.' }
        ]}
      },
      {
        id: 'pcf-l4', topic: 'Conditional sentences (0, 1, 2 type)',
        objective: 'Использовать условные предложения трёх типов.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Conditional Sentences: Zero, First, and Second Type',
          text: 'Conditional sentences describe "if" situations. They have two parts: the condition (if clause) and the result (main clause). There are different types for different situations.\n\n**Zero Conditional (facts/general truths):**\nStructure: If + Present Simple, Present Simple\n"If you heat water to 100 degrees, it boils."\n"If people eat too much, they gain weight."\nUse: for things that are always true.\n\n**First Conditional (real future situations):**\nStructure: If + Present Simple, will + base verb\n"If it rains tomorrow, I will stay home."\n"If you study hard, you will pass the exam."\nUse: for possible future situations.\n\n**Second Conditional (hypothetical/unreal situations):**\nStructure: If + Past Simple, would + base verb\n"If I had a million dollars, I would buy a house."\n"If I were you, I would study more."\nUse: for unreal or imaginary situations. Note: use "were" for all persons (If I were, If she were).\n\n**Important notes:**\n- The if-clause can come first or second: "If it rains, I\'ll stay" = "I\'ll stay if it rains."\n- Use a comma when the if-clause is first: "If it rains, I\'ll stay." (no comma when second)\n- Never use "will" in the if-clause! "If it will rain" is WRONG.\n\n**Common mistakes:**\n- "If I will have time, I will come." WRONG! -> "If I have time, I will come."\n- "If I was you, I would go." Informal. Better: "If I were you."\n\nPractice: Write one sentence for each type of conditional about your own life!',
          textRu: 'Условные предложения описывают ситуации с «если». Они состоят из двух частей: условия (придаточное предложение с if) и результата (главное предложение). Существуют разные типы для разных ситуаций.\n\n**Zero Conditional (факты/общие истины):**\nСтруктура: If + Present Simple, Present Simple\n"If you heat water to 100 degrees, it boils."\n"If people eat too much, they gain weight."\nИспользование: для того, что всегда верно.\n\n**First Conditional (реальные будущие ситуации):**\nСтруктура: If + Present Simple, will + базовый глагол\n"If it rains tomorrow, I will stay home."\n"If you study hard, you will pass the exam."\nИспользование: для возможных будущих ситуаций.\n\n**Second Conditional (гипотетические/нереальные ситуации):**\nСтруктура: If + Past Simple, would + базовый глагол\n"If I had a million dollars, I would buy a house."\n"If I were you, I would study more."\nИспользование: для нереальных или воображаемых ситуаций. Примечание: используйте "were" для всех лиц (If I were, If she were).\n\n**Важные примечания:**\n- Придаточное с if может стоять первым или вторым: "If it rains, I\'ll stay" = "I\'ll stay if it rains."\n- Используйте запятую, когда придаточное с if стоит первым: "If it rains, I\'ll stay." (без запятой, когда вторым)\n- Никогда не используйте "will" в придаточном с if! "If it will rain" — НЕВЕРНО.\n\n**Частые ошибки:**\n- "If I will have time, I will come." НЕВЕРНО! -> "If I have time, I will come."\n- "If I was you, I would go." Разговорный вариант. Лучше: "If I were you."\n\nПрактика: Напишите по одному предложению для каждого типа условных предложений о своей жизни!',
          vocab: [
            { word: 'If + Present, Present', trans: 'Zero conditional (факт)' },
            { word: 'If + Present, will + base', trans: 'First conditional (реальное будущее)' },
            { word: 'If + Past, would + base', trans: 'Second conditional (гипотетическое)' },
            { word: 'If I were you', trans: 'На твоём месте' },
            { word: 'condition + result', trans: 'Условие + результат' },
            { word: 'hypothetical', trans: 'Гипотетический' },
            { word: 'would', trans: 'Бы (для нереального)' },
            { word: 'if-clause', trans: 'Придаточное условия' }
          ]
        },
        video: { slides: [
          { emoji: '0', title: 'Zero Conditional', text: 'If + Present, Present. Факты: "If you heat ice, it melts."' },
          { emoji: '1', title: 'First Conditional', text: 'If + Present, will. Реальное: "If it rains, I will stay."' },
          { emoji: '2', title: 'Second Conditional', text: 'If + Past, would. Гипотетическое: "If I had money, I would travel."' },
          { emoji: ' were', title: 'If I were you', text: 'В Second Conditional: "were" для всех лиц.' },
          { emoji: ' order', title: 'Clause order', text: 'If first: comma. If second: no comma.' },
          { emoji: ' no', title: 'No "will" in if-clause', text: '"If it will rain" - WRONG! "If it rains" - correct.' },
          { emoji: ' would', title: 'would = hypothetical', text: 'would + base verb: "I would go."' },
          { emoji: ' practice', title: 'Practice all 3', text: 'Write one of each: zero, first, second!' }
        ]},
        quiz: { pool: [
          { q: 'Zero conditional: "If you heat water, it ___."', options: ['boil', 'boils', 'will boil', 'boiled'], answer: 1, explain: 'Zero: Present + Present.' },
          { q: 'First conditional: "If it rains, I ___ stay home."', options: ['will', 'would', 'am', 'had'], answer: 0, explain: 'First: If + Present, will.' },
          { q: 'Second conditional: "If I had money, I ___ buy a car."', options: ['will', 'would', 'have', 'had'], answer: 1, explain: 'Second: If + Past, would.' },
          { q: 'Which is correct?', options: ['If I will have time, I will come', 'If I have time, I will come', 'Both', 'Neither'], answer: 1, explain: 'No "will" in if-clause!' },
          { q: 'Complete: "If I ___ you, I would study more."', options: ['was', 'were', 'am', 'be'], answer: 1, explain: 'Second conditional: "were" for all persons.' },
          { q: 'Zero conditional describes:', options: ['Future', 'Facts', 'Unreal situations', 'Past'], answer: 1, explain: 'Zero = факты.' },
          { q: 'First conditional describes:', options: ['Facts', 'Possible future', 'Unreal situations', 'Past'], answer: 1, explain: 'First = реальное будущее.' },
          { q: 'Second conditional describes:', options: ['Facts', 'Future', 'Hypothetical situations', 'Past'], answer: 2, explain: 'Second = гипотетическое.' },
          { q: 'Complete: "If you ___ ice, it melts."', options: ['heat', 'heated', 'will heat', 'would heat'], answer: 0, explain: 'Zero: Present + Present.' },
          { q: 'Complete: "If she ___ harder, she would pass."', options: ['studies', 'studied', 'will study', 'study'], answer: 1, explain: 'Second: If + Past Simple.' },
          { q: 'Where is the comma needed?', options: ['If it rains I will stay', 'If it rains, I will stay', 'I will stay, if it rains', 'No comma needed'], answer: 1, explain: 'Comma when if-clause is first.' },
          { q: 'Complete: "If I had a million dollars, I ___ travel the world."', options: ['will', 'would', 'have', 'had'], answer: 1, explain: 'Second: would + base verb.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Zero: "If you heat ice, it ___ (melt)."', answer: 'melts', explain: 'Zero: Present + Present.' },
          { type: 'fill-blank', question: 'First: "If it rains, I ___ stay home."', answer: 'will', explain: 'First: will + base.' },
          { type: 'choice', question: 'Second: "If I ___ rich, I would travel."', options: ['am', 'was', 'were', 'be'], answer: 2, explain: 'Second: were для всех лиц.' },
          { type: 'translate', question: 'Переведите: "Если бы я был тобой, я бы учился больше."', answer: 'If I were you, I would study more', explain: 'Second conditional.' },
          { type: 'order', question: 'Put in order:', words: ['it', 'If', 'boils', 'heat', 'you', 'water'], answer: 'If you heat water it boils', explain: 'Zero conditional.' },
          { type: 'correct', question: 'Find and correct: "If it will rain, I will stay home."', answer: 'If it rains, I will stay home', explain: 'No "will" in if-clause.' }
        ]}
      },
      {
        id: 'pcf-l5', topic: 'Modal verbs для вежливости',
        objective: 'Использовать модальные глаголы для вежливых просьб и советов.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Modal Verbs for Politeness, Advice, and Possibility',
          text: 'Modal verbs add meaning to the main verb. They are essential for polite communication, giving advice, and expressing possibility. Modal verbs don\'t change form (no -s for he/she) and are followed by the base verb.\n\n**Requests (from most polite to least):**\n- "Could you help me, please?" (very polite)\n- "Would you help me, please?" (polite)\n- "Can you help me?" (casual)\n- "May I open the window?" (formal permission)\n\n**Permission:**\n- "Can I use your phone?" (casual)\n- "Could I use your phone?" (polite)\n- "May I use your phone?" (formal)\n\n**Advice:**\n- "You should see a doctor." (general advice)\n- "You ought to apologize." (formal advice)\n- "You\'d better leave now." (strong advice, informal)\n\n**Possibility and Deduction:**\n- "It might rain." (possible)\n- "It could rain." (possible)\n- "It must be true." (I\'m sure it\'s true)\n- "It can\'t be true." (I\'m sure it\'s NOT true)\n\n**Ability:**\n- "I can swim." (present ability)\n- "I could swim when I was 5." (past ability)\n\n**Common mistakes:**\n- Don\'t use "to" after modals: "I must to go" WRONG! -> "I must go"\n- Don\'t add -s: "She cans swim" WRONG! -> "She can swim"\n- After modals, use base form: "You should go" (not "goes" or "to go")\n\n**Modal verbs summary:**\ncan (ability), could (polite request/past ability), may (permission/possibility), might (possibility), must (obligation/deduction), should (advice), would (polite request/conditional), ought to (advice), had better (strong advice).\n\nPractice: Write 3 polite requests using different modal verbs!',
          textRu: 'Модальные глаголы добавляют значение основному глаголу. Они необходимы для вежливого общения, давать советы и выражать возможность. Модальные глаголы не меняют форму (без -s для he/she) и после них идёт базовый глагол.\n\n**Просьбы (от самых вежливых к менее вежливым):**\n- "Could you help me, please?" (очень вежливо)\n- "Would you help me, please?" (вежливо)\n- "Can you help me?" (непринуждённо)\n- "May I open the window?" (формальное разрешение)\n\n**Разрешение:**\n- "Can I use your phone?" (непринуждённо)\n- "Could I use your phone?" (вежливо)\n- "May I use your phone?" (формально)\n\n**Совет:**\n- "You should see a doctor." (общий совет)\n- "You ought to apologize." (формальный совет)\n- "You\'d better leave now." (настоятельный совет, неформально)\n\n**Возможность и логический вывод:**\n- "It might rain." (возможно)\n- "It could rain." (возможно)\n- "It must be true." (я уверен, что это правда)\n- "It can\'t be true." (я уверен, что это НЕ правда)\n\n**Способность:**\n- "I can swim." (настоящая способность)\n- "I could swim when I was 5." (прошлая способность)\n\n**Частые ошибки:**\n- Не используйте "to" после модальных глаголов: "I must to go" НЕВЕРНО! -> "I must go"\n- Не добавляйте -s: "She cans swim" НЕВЕРНО! -> "She can swim"\n- После модальных глаголов используйте базовую форму: "You should go" (не "goes" или "to go")\n\n**Сводка модальных глаголов:**\ncan (способность), could (вежливая просьба/прошлая способность), may (разрешение/возможность), might (возможность), must (обязанность/логический вывод), should (совет), would (вежливая просьба/условное наклонение), ought to (совет), had better (настоятельный совет).\n\nПрактика: Напишите 3 вежливые просьбы, используя разные модальные глаголы!',
          vocab: [
            { word: 'Could you...?', trans: 'Можете ли вы...? (вежливо)' },
            { word: 'Would you...?', trans: 'Не могли бы вы...?' },
            { word: 'May I...?', trans: 'Могу ли я...? (формально)' },
            { word: 'should', trans: 'Следует (совет)' },
            { word: 'must', trans: 'Должен (обязанность/уверенность)' },
            { word: 'might / could', trans: 'Может быть (возможность)' },
            { word: 'ought to', trans: 'Следует (формальный совет)' },
            { word: 'had better', trans: 'Лучше бы (сильный совет)' }
          ]
        },
        video: { slides: [
          { emoji: ' please', title: 'Polite requests', text: 'Could you...? Would you...? May I...? - от вежливого к формальному.' },
          { emoji: ' can', title: 'Permission', text: 'Can I...? (casual), Could I...? (polite), May I...? (formal).' },
          { emoji: ' should', title: 'Advice', text: 'should, ought to, had better. "You should rest."' },
          { emoji: ' might', title: 'Possibility', text: 'might, could, may. "It might rain."' },
          { emoji: ' must', title: 'Deduction', text: 'must = уверен, can\'t = невозможно. "He must be tired."' },
          { emoji: ' no', title: 'No "to" after modals', text: '"I must go" не "I must to go"!' },
          { emoji: ' no -s', title: 'No -s for he/she', text: '"She can swim" не "she cans swim"!' },
          { emoji: ' base', title: 'Base verb', text: 'После модальных - базовая форма глагола.' }
        ]},
        quiz: { pool: [
          { q: 'Most polite request:', options: ['Help me', 'Could you help me, please?', 'Can you help?', 'Help!'], answer: 1, explain: 'Could you...? - очень вежливо.' },
          { q: 'Complete: "You ___ see a doctor."', options: ['should', 'must to', 'can to', 'would to'], answer: 0, explain: 'should + base verb.' },
          { q: 'Which is correct?', options: ['She cans swim', 'She can swims', 'She can swim', 'She could swims'], answer: 2, explain: 'No -s after modals!' },
          { q: 'Complete: "It ___ rain later."', options: ['might', 'must to', 'can to', 'should to'], answer: 0, explain: 'might = возможность.' },
          { q: 'Complete: "He ___ be tired after working all day."', options: ['must', 'must to', 'can to', 'should to'], answer: 0, explain: 'must = уверен.' },
          { q: 'Complete: "That ___ be true! It\'s impossible."', options: ['can\'t', 'mustn\'t', 'won\'t', 'don\'t'], answer: 0, explain: 'can\'t = уверен, что нет.' },
          { q: 'Formal permission request:', options: ['Can I?', 'Could I?', 'May I?', 'Give me'], answer: 2, explain: 'May I? - самый формальный.' },
          { q: 'Complete: "You ___ better leave now."', options: ['had', 'should', 'must', 'would'], answer: 0, explain: 'had better = сильный совет.' },
          { q: 'Which is WRONG?', options: ['I must go', 'She can swim', 'I must to go', 'He should rest'], answer: 2, explain: 'No "to" after modals!' },
          { q: 'Complete: "___ I use your phone?" (casual)', options: ['May', 'Could', 'Can', 'Would'], answer: 2, explain: 'Can = casual permission.' },
          { q: 'Complete: "You ___ to apologize."', options: ['should', 'ought', 'must', 'can'], answer: 1, explain: 'ought to = формальный совет.' },
          { q: 'Which means "I\'m sure it\'s true"?', options: ['It might be true', 'It must be true', 'It can\'t be true', 'It could be true'], answer: 1, explain: 'must = уверен.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ you help me, please?" (very polite)', answer: 'Could', explain: 'Could you...? - очень вежливо.' },
          { type: 'fill-blank', question: 'Complete: "You ___ see a doctor." (advice)', answer: 'should', explain: 'should = совет.' },
          { type: 'choice', question: 'Which is correct?', options: ['I must to go', 'She cans swim', 'He can swim', 'We should to go'], answer: 2, explain: 'No "to" and no -s after modals.' },
          { type: 'translate', question: 'Переведите: "Не могли бы вы мне помочь?"', answer: 'Could you help me', explain: 'Could you...? - вежливая просьба.' },
          { type: 'order', question: 'Put in order:', words: ['please', 'could', 'you', 'help', 'me'], answer: 'Could you help me please', explain: 'Polite request.' },
          { type: 'correct', question: 'Find and correct: "I must to go now."', answer: 'I must go now', explain: 'No "to" after modals.' }
        ]}
      },
      {
        id: 'pcf-l6', topic: 'Свободная речь и связующие слова',
        objective: 'Использовать связующие слова для беглой речи.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Fluent Speech: Linking Words and Discourse Markers',
          text: 'Fluency is not just about grammar and vocabulary. It\'s about connecting ideas smoothly, filling pauses naturally, and sounding like a confident speaker. Linking words and discourse markers are the tools that make this happen.\n\n**Linking Words for Contrast:**\n- "however" (formal): "I wanted to go; however, it was raining."\n- "although" + clause: "Although it was raining, I went out."\n- "despite" + noun/V-ing: "Despite the rain, I went out."\n- "nevertheless" (formal): "It was raining; nevertheless, I went."\n- "on the other hand": "The job is hard. On the other hand, it pays well."\n\n**Linking Words for Addition:**\n- "in addition": "She speaks English. In addition, she knows French."\n- "furthermore" (formal): "The food was bad; furthermore, the service was slow."\n- "moreover" (formal): "He is smart; moreover, he is hardworking."\n- "also": "I also want to go."\n\n**Linking Words for Cause/Result:**\n- "therefore" (formal): "It was raining; therefore, I stayed home."\n- "so" (casual): "It was raining, so I stayed home."\n- "because": "I stayed home because it was raining."\n- "as a result": "He didn\'t study; as a result, he failed."\n\n**Discourse Markers (fillers for natural speech):\n- "Well..." (thinking): "Well, I think..." \n- "Actually..." (correcting/surprising): "Actually, I disagree."\n- "I mean..." (clarifying): "I mean, it\'s not that bad."\n- "You know..." (connecting): "You know, it\'s difficult."\n- "Sort of / kind of" (softening): "It\'s kind of expensive."\n- "To be honest..." (honesty): "To be honest, I don\'t like it."\n\n**Tips for Fluency:**\n1. Don\'t translate in your head - think in English\n2. Use discourse markers to buy thinking time\n3. Don\'t be afraid of pauses - use "well" or "let me think"\n4. Practice speaking every day, even to yourself\n5. Focus on communicating, not on perfect grammar\n6. Learn phrases, not just individual words\n7. Listen to native speakers and imitate their rhythm\n\nFluency comes with practice. The more you speak, the more natural these words become!',
          textRu: 'Беглость речи — это не только грамматика и словарный запас. Это умение плавно связывать идеи, естественно заполнять паузы и звучать как уверенный говорящий. Слова-связки и дискурсивные маркеры — это инструменты, которые делают это возможным.\n\n**Слова-связки для противопоставления:**\n- "however" (формально): "I wanted to go; however, it was raining."\n- "although" + придаточное: "Although it was raining, I went out."\n- "despite" + существительное/V-ing: "Despite the rain, I went out."\n- "nevertheless" (формально): "It was raining; nevertheless, I went."\n- "on the other hand": "The job is hard. On the other hand, it pays well."\n\n**Слова-связки для добавления:**\n- "in addition": "She speaks English. In addition, she knows French."\n- "furthermore" (формально): "The food was bad; furthermore, the service was slow."\n- "moreover" (формально): "He is smart; moreover, he is hardworking."\n- "also": "I also want to go."\n\n**Слова-связки для причины/результата:**\n- "therefore" (формально): "It was raining; therefore, I stayed home."\n- "so" (разговорно): "It was raining, so I stayed home."\n- "because": "I stayed home because it was raining."\n- "as a result": "He didn\'t study; as a result, he failed."\n\n**Дискурсивные маркеры (заполнители для естественной речи):**\n- "Well..." (размышление): "Well, I think..."\n- "Actually..." (исправление/удивление): "Actually, I disagree."\n- "I mean..." (уточнение): "I mean, it\'s not that bad."\n- "You know..." (связь с собеседником): "You know, it\'s difficult."\n- "Sort of / kind of" (смягчение): "It\'s kind of expensive."\n- "To be honest..." (честность): "To be honest, I don\'t like it."\n\n**Советы для беглости речи:**\n1. Не переводите в уме — думайте на английском\n2. Используйте дискурсивные маркеры, чтобы выиграть время на размышление\n3. Не бойтесь пауз — используйте "well" или "let me think"\n4. Практикуйтесь в разговоре каждый день, даже с самим собой\n5. Сосредоточьтесь на общении, а не на идеальной грамматике\n6. Учите фразы, а не только отдельные слова\n7. Слушайте носителей языка и подражайте их ритму\n\nБеглость приходит с практикой. Чем больше вы говорите, тем более естественными становятся эти слова!',
          vocab: [
            { word: 'however', trans: 'Однако' },
            { word: 'although', trans: 'Хотя' },
            { word: 'despite', trans: 'Несмотря на' },
            { word: 'in addition', trans: 'Кроме того' },
            { word: 'therefore', trans: 'Поэтому' },
            { word: 'actually', trans: 'На самом деле' },
            { word: 'I mean', trans: 'То есть / Я имею в виду' },
            { word: 'to be honest', trans: 'Честно говоря' }
          ]
        },
        video: { slides: [
          { emoji: ' contrast', title: 'Contrast', text: 'however, although, despite, nevertheless, on the other hand.' },
          { emoji: ' plus', title: 'Addition', text: 'in addition, furthermore, moreover, also.' },
          { emoji: ' result', title: 'Cause/Result', text: 'therefore, so, because, as a result.' },
          { emoji: ' thinking', title: 'Well...', text: 'Discourse markers for thinking: Well, Actually, I mean.' },
          { emoji: ' know', title: 'You know...', text: 'Connecting with listener: You know, To be honest.' },
          { emoji: ' sort', title: 'Sort of...', text: 'Softening: sort of, kind of, a bit.' },
          { emoji: ' practice', title: 'Fluency tips', text: 'Don\'t translate, use fillers, practice daily, focus on communication!' },
          { emoji: ' speak', title: 'Speak!', text: 'The more you speak, the more natural it becomes.' }
        ]},
        quiz: { pool: [
          { q: 'Which word shows contrast?', options: ['also', 'however', 'because', 'moreover'], answer: 1, explain: 'however = однако.' },
          { q: 'Complete: "___ it was raining, I went out."', options: ['Despite', 'Although', 'However', 'Because'], answer: 1, explain: 'Although + clause.' },
          { q: 'Complete: "___ the rain, I went out."', options: ['Although', 'Despite', 'However', 'Because'], answer: 1, explain: 'Despite + noun.' },
          { q: 'Which word adds information?', options: ['however', 'in addition', 'therefore', 'although'], answer: 1, explain: 'in addition = кроме того.' },
          { q: 'Complete: "It was raining; ___, I stayed home."', options: ['although', 'despite', 'therefore', 'moreover'], answer: 2, explain: 'therefore = поэтому.' },
          { q: 'Which is a discourse marker?', options: ['however', 'although', 'actually', 'despite'], answer: 2, explain: 'actually = на самом деле (filler).' },
          { q: 'Complete: "Well, I ___ so."', options: ['think', 'however', 'despite', 'moreover'], answer: 0, explain: 'Well, I think so.' },
          { q: 'Which softens language?', options: ['therefore', 'sort of', 'however', 'moreover'], answer: 1, explain: 'sort of = смягчение.' },
          { q: 'Complete: "To be ___, I don\'t like it."', options: ['honest', 'true', 'clear', 'fair'], answer: 0, explain: 'To be honest = честно говоря.' },
          { q: 'Which shows result?', options: ['moreover', 'however', 'therefore', 'although'], answer: 2, explain: 'therefore = поэтому.' },
          { q: 'Complete: "The food was bad; ___, the service was slow."', options: ['however', 'furthermore', 'although', 'despite'], answer: 1, explain: 'furthermore = кроме того.' },
          { q: 'Which means "I\'m clarifying"?', options: ['I mean', 'however', 'therefore', 'despite'], answer: 0, explain: 'I mean = уточнение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ it was late, I kept working."', answer: 'Although', explain: 'Although + clause.' },
          { type: 'fill-blank', question: 'Complete: "To be ___, I don\'t agree."', answer: 'honest', explain: 'To be honest.' },
          { type: 'choice', question: 'Which shows contrast?', options: ['moreover', 'however', 'therefore', 'also'], answer: 1, explain: 'however = однако.' },
          { type: 'translate', question: 'Переведите: "Несмотря на дождь, я пошёл гулять."', answer: 'Despite the rain, I went out', explain: 'Despite + noun.' },
          { type: 'order', question: 'Put in order:', words: ['raining', 'it', 'was', 'I', 'so', 'home', 'stayed'], answer: 'It was raining so I stayed home', explain: 'so = поэтому.' },
          { type: 'correct', question: 'Find and correct: "Despite it was raining, I went out."', answer: 'Although it was raining, I went out', explain: 'Despite + noun, Although + clause.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_4 = COURSE;
})(window);
