/* ============================================================
   AI-Powered English Language School — Shared Data Layer
   Single source of truth for courses, curriculum, testimonials.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------- Course catalog ---------- */
  // `art` = gradient pair used to render the card artwork (no external images).
  const COURSES = [
    {
      id: 'c-start',
      title: 'AI-разговор с нуля',
      tagline: 'Говорите с первого дня. 6 модулей с теорией, видео, тестами и домашними заданиями.',
      level: 'Начальный (A1-A2)',
      category: 'beginner',
      duration: '5.5+ часов',
      lessons: 6,
      price: 1000,
      oldPrice: 1990,
      accent: 'mint',
      art: ['#D6EBDC', '#BFE3CE'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Теория + видео + тесты + практика']
    },
    {
      id: 'c-fluent',
      title: 'Путь к свободной речи',
      tagline: 'Естественная беглость через диалоги и практику. 6 модулей.',
      level: 'Средний (A2-B1)',
      category: 'intermediate',
      duration: '5.5+ часов',
      lessons: 6,
      price: 1750,
      oldPrice: 3490,
      accent: 'lavender',
      art: ['#E5DAF0', '#CDBCE6'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Теория + видео + тесты + практика']
    },
    {
      id: 'c-business',
      title: 'Бизнес-английский Pro',
      tagline: 'Деловая переписка, переговоры, презентации и собеседования. 6 модулей.',
      level: 'Продвинутый (B1-C1)',
      category: 'business',
      duration: '5.5+ часов',
      lessons: 6,
      price: 3000,
      oldPrice: 5990,
      accent: 'dustyPink',
      art: ['#F2DCDC', '#E9C4C4'],
      highlights: ['Email, встречи, презентации', 'Отчёты и собеседования', 'Домашка после каждого урока']
    },
    {
      id: 'c-kids',
      title: 'Маленькие голоса',
      tagline: 'Весёлый английский для любопытных детей 6-12 лет. 6 модулей.',
      level: 'Дети 6-12',
      category: 'kids',
      duration: '5.5+ часов',
      lessons: 6,
      price: 1250,
      oldPrice: 2490,
      accent: 'cream',
      art: ['#FBF1DD', '#F3E2B8'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Игровой формат обучения']
    },
    {
      id: 'c-exam',
      title: 'Мастерство IELTS',
      tagline: 'Подготовка к баллу 7+ с разбором всех секций IELTS. 6 модулей.',
      level: 'Продвинутый (B2-C2)',
      category: 'advanced',
      duration: '5.5+ часов',
      lessons: 6,
      price: 4000,
      oldPrice: 7990,
      accent: 'lavender',
      art: ['#E0E8F2', '#C2D2E8'],
      highlights: ['Все 4 секции: Reading, Listening, Writing, Speaking', 'Стратегии и практика', 'Домашка после каждого урока']
    },
    {
      id: 'c-grammar',
      title: 'Основы грамматики',
      tagline: 'Освойте скелет английского с упражнениями. 6 модулей.',
      level: 'Начальный (A1-A2)',
      category: 'beginner',
      duration: '5.5+ часов',
      lessons: 6,
      price: 750,
      oldPrice: 1490,
      accent: 'mint',
      art: ['#DCEBE3', '#C2DBC9'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Теория + видео + тесты + практика']
    },
    {
      id: 'c-accent',
      title: 'Лаборатория акцента',
      tagline: 'Улучшите произношение с фонетическим анализом. 6 модулей.',
      level: 'Средний (B1-B2)',
      category: 'intermediate',
      duration: '5.5+ часов',
      lessons: 6,
      price: 1500,
      oldPrice: 2990,
      accent: 'dustyPink',
      art: ['#F0E2EA', '#E2C7D6'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Теория + видео + тесты + практика']
    },
    {
      id: 'c-creative',
      title: 'Студия креативного письма',
      tagline: 'Пишите лучшие истории на английском. 6 модулей.',
      level: 'Продвинутый (B2-C1)',
      category: 'advanced',
      duration: '5.5+ часов',
      lessons: 6,
      price: 2000,
      oldPrice: 3990,
      accent: 'cream',
      art: ['#F4E7D8', '#EAD0A8'],
      highlights: ['Пошаговая разблокировка уроков', 'Домашка после каждого урока', 'Теория + видео + тесты + практика']
    }
  ];

  /* ---------- Curriculum stages (home page showcase) ---------- */
  const CURRICULUM = [
    { stage: '01', title: 'Калибровка', desc: '10-минутная AI-оценка определяет ваш уровень грамматики, словаря и разговорной речи — точная отправная точка.', accent: 'lavender' },
    { stage: '02', title: 'Построение', desc: 'Репетитор собирает еженедельный путь из разговоров, упражнений и повторений, адаптируясь после каждого занятия.', accent: 'mint' },
    { stage: '03', title: 'Разговор', desc: 'Говорите естественно: ролевые игры, дебаты, реальные ситуации. Мгновенная мягкая обратная связь.', accent: 'dustyPink' },
    { stage: '04', title: 'Закрепление', desc: 'Интервальное повторение и аналитика прогресса удерживают знания надолго — после окончания урока.', accent: 'cream' }
  ];

  /* ---------- Testimonials ---------- */
  const TESTIMONIALS = [
    { name: 'Амара Окафор', role: 'Дизайнер продуктов, Лагос', quote: 'Я прошла путь от избегания встреч до их проведения. AI-репетитор заметил, что я слишком часто говорю «actually», и отучил за две недели.', accent: 'lavender' },
    { name: 'Диего Мартинес', role: 'Студент магистратуры, Мехико', quote: 'Оценщик письма IELTS сначала показался несправедливым — потом я получил 7.5. Он увидел слабости, о которых учителя не говорили.', accent: 'mint' },
    { name: 'Юки Танака', role: 'Руководитель маркетинга, Осака', quote: 'Пятнадцать минут в день — вот и всё. Серии превратили практику в игру, которую хотелось выигрывать.', accent: 'dustyPink' },
    { name: 'София Романо', role: 'Менеджер отеля, Рим', quote: 'Лаборатория акцента нашла мягкий «th», который я проглатывала. Гости понимают меня с первого раза.', accent: 'cream' },
    { name: 'Лиам О’Салливан', role: 'Фрилансер, Дублин', quote: 'Студия креативного письма — как редактор, который не устаёт. Моё портфолио утроилось в качестве.', accent: 'lavender' }
  ];

  /* ---------- Feature cards (home bento grid) ---------- */
  const FEATURES = [
    { title: 'Репетитор, который слушает', desc: 'Анализ на уровне фонем ловит звуки, с которыми вы реально боретесь — а не общие оценки беглости.', glyph: 'wave', span: 'lg:col-span-2 lg:row-span-2', accent: 'lavender' },
    { title: 'Пути, которые гнутся', desc: 'Каждый урок меняет следующий. Запутались в условных? Встретите их снова — мягко, пока не закрепится.', glyph: 'path', span: '', accent: 'mint' },
    { title: 'Говорите, а не зубрите', desc: '70% времени урока вы говорите. AI — терпеливый партнёр, а не лектор.', glyph: 'chat', span: '', accent: 'dustyPink' },
    { title: 'Прогресс, который видно', desc: 'Тепловые карты, серии и еженедельная аналитика превращают абстрактные усилия в заметный рост.', glyph: 'chart', span: 'lg:col-span-2', accent: 'cream' }
  ];

  /* ---------- Free course (auth-gated, with AI assistant) ---------- */
  const FREE_COURSE = {
    id: 'c-free',
    title: 'English Starter (Free)',
    tagline: 'A free starter course with a built-in AI assistant. 25 lessons across 5 units. Sign in to begin.',
    level: 'Beginner',
    duration: '8 weeks',
    lessons: 25,
    price: 0,
    accent: 'mint',
    units: [
      {
        id: 'u1',
        title: 'First Steps',
        desc: 'Greetings, the alphabet, numbers, and the verb "to be".',
        lessons: [
          {
            id: 'l1', title: 'Greetings & Introductions', scenario: 'introductions',
            objective: 'Learn to introduce yourself and greet people naturally.',
            content: [
              { type: 'text', value: 'In English, greetings depend on the time of day and formality. "Hello" works everywhere, but "Hi" is more casual. "Good morning" is used before noon, "Good afternoon" until about 5 p.m., and "Good evening" after that.' },
              { type: 'grammar', title: 'The verb "to be"', rule: 'I am / You are / He is / She is / It is / We are / They are.\nContractions: I\u2019m, You\u2019re, He\u2019s, She\u2019s, It\u2019s, We\u2019re, They\u2019re.' },
              { type: 'vocab', items: [
                { word: 'Hello / Hi', trans: 'Universal / casual greeting' },
                { word: 'Nice to meet you', trans: 'First-time meeting' },
                { word: 'How are you?', trans: 'Polite wellbeing question' },
                { word: 'I\u2019m fine, thanks', trans: 'Standard response' },
                { word: 'What\u2019s your name?', trans: 'Asking someone\u2019s name' },
                { word: 'My name is\u2026', trans: 'Introducing yourself' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'Hi! My name is Maria. Nice to meet you!' },
                { who: 1, text: 'Hi Maria! I\u2019m Alex. Nice to meet you too. Where are you from?' },
                { who: 0, text: 'I\u2019m from Spain. And you?' },
                { who: 1, text: 'I\u2019m from Canada. Welcome to Lingua!' }
              ]},
              { type: 'tip', value: 'Try saying your introduction out loud: "Hi, my name is ___. Nice to meet you!" Then practice with the AI assistant below.' }
            ]
          },
          {
            id: 'l2', title: 'The Alphabet & Spelling', scenario: 'introductions',
            objective: 'Learn the English alphabet and spell names and words.',
            content: [
              { type: 'text', value: 'The English alphabet has 26 letters. Knowing how to spell your name and email is essential. Letters like B and V, or M and N, sound similar \u2014 practice distinguishing them.' },
              { type: 'vocab', items: [
                { word: 'How do you spell that?', trans: 'Asking someone to spell' },
                { word: 'A for Apple, B for Banana', trans: 'NATO phonetic method' },
                { word: 'Double L', trans: 'When a letter repeats (e.g. "Kelly")' },
                { word: 'Capital letter', trans: 'Uppercase (A, B, C)' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'My email is john.smith@email.com.' },
                { who: 1, text: 'Sorry, how do you spell your last name?' },
                { who: 0, text: 'S-M-I-T-H. Smith.' },
                { who: 1, text: 'Got it! Thank you, John.' }
              ]}
            ]
          },
          {
            id: 'l3', title: 'Numbers 1\u2013100', scenario: 'numbers',
            objective: 'Count from 1 to 100 and use numbers in daily life.',
            content: [
              { type: 'text', value: 'Numbers are the backbone of daily life \u2014 prices, phone numbers, ages, addresses. Start with 1\u201310, then 11\u201320, then tens to 100.' },
              { type: 'vocab', items: [
                { word: '1\u201310: one, two, three\u2026ten', trans: 'Basic counting' },
                { word: '11\u201312: eleven, twelve', trans: 'Irregular numbers' },
                { word: '13\u201319: thirteen, fourteen\u2026', trans: 'Add "-teen"' },
                { word: '20, 30, 40: twenty, thirty, forty', trans: 'Tens' },
                { word: '21: twenty-one', trans: 'Compound numbers use a hyphen' },
                { word: '100: a hundred / one hundred', trans: 'Reaching 100' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'How much is the coffee?' },
                { who: 1, text: 'It\u2019s three dollars.' },
                { who: 0, text: 'And a sandwich?' },
                { who: 1, text: 'Five dollars. So that\u2019s eight dollars total.' }
              ]}
            ]
          },
          {
            id: 'l4', title: 'Personal Pronouns & "To Be"', scenario: 'aboutyou',
            objective: 'Master personal pronouns and the verb "to be" in present.',
            content: [
              { type: 'text', value: 'The verb "to be" is the most common verb in English. It links a subject to a description or identity.' },
              { type: 'grammar', title: 'Present simple of "to be"', rule: 'I am \u2192 I\u2019m\nYou are \u2192 You\u2019re\nHe/She/It is \u2192 He\u2019s/She\u2019s/It\u2019s\nWe/They are \u2192 We\u2019re/They\u2019re\n\nNegative: I am not / I\u2019m not\nQuestion: Am I? Are you? Is he?' },
              { type: 'vocab', items: [
                { word: 'I am a student', trans: 'Profession with "to be"' },
                { word: 'She is happy', trans: 'Emotion with "to be"' },
                { word: 'They are from Italy', trans: 'Nationality' },
                { word: 'It is cold today', trans: 'Weather with "to be"' }
              ]},
              { type: 'tip', value: 'Don\u2019t say "I agree" \u2014 say "I agree" (it\u2019s a verb, not "I am agree"). This is a very common mistake!' }
            ]
          },
          {
            id: 'l5', title: 'Countries & Nationalities', scenario: 'introductions',
            objective: 'Talk about where you are from and your nationality.',
            content: [
              { type: 'text', value: 'When talking about origin, use "to be from" + country. For nationality, use the adjective form (e.g. Spain \u2192 Spanish, Italy \u2192 Italian).' },
              { type: 'vocab', items: [
                { word: 'I\u2019m from Brazil', trans: 'Country of origin' },
                { word: 'I\u2019m Brazilian', trans: 'Nationality adjective' },
                { word: 'He\u2019s from Japan', trans: 'Third person' },
                { word: 'She\u2019s Japanese', trans: 'Nationality' },
                { word: 'Where are you from?', trans: 'Asking about origin' },
                { word: 'I live in Berlin', trans: 'Current residence' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'Where are you from, Alex?' },
                { who: 1, text: 'I\u2019m from Canada. I\u2019m Canadian. And you?' },
                { who: 0, text: 'I\u2019m from Russia. I\u2019m Russian.' },
                { who: 1, text: 'That\u2019s great! I\u2019ve always wanted to visit.' }
              ]}
            ]
          }
        ]
      },
      {
        id: 'u2',
        title: 'Daily Life',
        desc: 'Time, dates, routines, family, and clothing.',
        lessons: [
          {
            id: 'l6', title: 'Telling the Time', scenario: 'numbers',
            objective: 'Ask for and tell the time in English.',
            content: [
              { type: 'text', value: 'There are two common ways to tell time: the digital way (3:30) and the traditional way ("half past three"). Both are important.' },
              { type: 'grammar', title: 'Prepositions of time', rule: 'at + clock time: "at 3 o\u2019clock", "at 5:30"\non + days: "on Monday"\nin + months/years: "in May", "in 2024"' },
              { type: 'vocab', items: [
                { word: 'What time is it?', trans: 'Asking the time' },
                { word: 'It\u2019s half past three', trans: '3:30' },
                { word: 'It\u2019s a quarter to five', trans: '4:45' },
                { word: 'It\u2019s ten past six', trans: '6:10' },
                { word: 'a.m. / p.m.', trans: 'Morning / afternoon-evening' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'Excuse me, what time is it?' },
                { who: 1, text: 'It\u2019s half past two.' },
                { who: 0, text: 'Thank you! And what time does the caf\u00e9 close?' },
                { who: 1, text: 'It closes at 6 p.m.' }
              ]}
            ]
          },
          {
            id: 'l7', title: 'Days, Months & Dates', scenario: 'smalltalk',
            objective: 'Talk about days of the week, months, and dates.',
            content: [
              { type: 'text', value: 'In English, days and months are always capitalized. Dates use ordinal numbers: the 1st, the 2nd, the 3rd, the 4th.' },
              { type: 'vocab', items: [
                { word: 'Monday, Tuesday\u2026Sunday', trans: 'Days of the week' },
                { word: 'January, February\u2026December', trans: 'Months' },
                { word: 'Today is March 5th', trans: 'Saying the date' },
                { word: 'Next week / Last week', trans: 'Relative time' },
                { word: 'The day after tomorrow', trans: 'Two days from now' }
              ]},
              { type: 'tip', value: 'In British English: "the fifth of March". In American English: "March fifth". Both are correct!' }
            ]
          },
          {
            id: 'l8', title: 'Daily Routines (Present Simple)', scenario: 'aboutyou',
            objective: 'Describe your daily routine using the present simple.',
            content: [
              { type: 'text', value: 'Use the present simple for habits and routines. Add -s for he/she/it: "I work" \u2192 "She works".' },
              { type: 'grammar', title: 'Present simple', rule: 'I/You/We/They + verb (I work)\nHe/She/It + verb+s (He works)\n\nNegative: I don\u2019t work / He doesn\u2019t work\nQuestion: Do you work? / Does she work?' },
              { type: 'vocab', items: [
                { word: 'I get up at 7 a.m.', trans: 'Morning routine' },
                { word: 'I have breakfast', trans: 'Eating' },
                { word: 'I go to work', trans: 'Commuting' },
                { word: 'I come home at 6', trans: 'Evening' },
                { word: 'I go to bed at 11', trans: 'Night' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'What time do you usually get up?' },
                { who: 1, text: 'I get up at 6:30. I have coffee and go to work.' },
                { who: 0, text: 'I usually wake up at 7. Do you have breakfast?' },
                { who: 1, text: 'Yes, I always eat toast and an egg.' }
              ]}
            ]
          },
          {
            id: 'l9', title: 'Family & Relationships', scenario: 'aboutyou',
            objective: 'Talk about your family members and relationships.',
            content: [
              { type: 'text', value: 'Family vocabulary is essential for everyday conversation. Possessive adjectives (my, your, his, her, our, their) are used before family nouns.' },
              { type: 'vocab', items: [
                { word: 'Parents: mother, father', trans: 'Mom and dad' },
                { word: 'Siblings: brother, sister', trans: 'Brothers and sisters' },
                { word: 'Grandparents: grandmother, grandfather', trans: 'Grandma and grandpa' },
                { word: 'Children: son, daughter', trans: 'Kids' },
                { word: 'Husband / Wife', trans: 'Married partners' },
                { word: 'Boyfriend / Girlfriend', trans: 'Dating partners' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'Do you have any siblings?' },
                { who: 1, text: 'Yes, I have one brother and one sister. How about you?' },
                { who: 0, text: 'I\u2019m an only child. But I have a big family on my mother\u2019s side.' }
              ]}
            ]
          },
          {
            id: 'l10', title: 'Colors & Clothing', scenario: 'smalltalk',
            objective: 'Describe colors and talk about clothes.',
            content: [
              { type: 'text', value: 'Colors are adjectives and come before the noun in English: "a red shirt" (not "a shirt red").' },
              { type: 'vocab', items: [
                { word: 'Red, blue, green, yellow', trans: 'Basic colors' },
                { word: 'Black, white, grey', trans: 'Neutral colors' },
                { word: 'Shirt, trousers, dress', trans: 'Clothing items' },
                { word: 'Shoes, jacket, hat', trans: 'Accessories' },
                { word: 'What are you wearing?', trans: 'Asking about clothes' }
              ]},
              { type: 'tip', value: 'In British English: "trousers". In American English: "pants". They mean the same thing!' }
            ]
          }
        ]
      },
      {
        id: 'u3',
        title: 'Out & About',
        desc: 'Food, shopping, directions, transport, and weather.',
        lessons: [
          {
            id: 'l11', title: 'Ordering Food in a Caf\u00e9', scenario: 'cafe',
            objective: 'Order food and drinks politely in a caf\u00e9 or restaurant.',
            content: [
              { type: 'text', value: 'When ordering, polite phrases go a long way. "Can I have\u2026" and "I\u2019d like\u2026" are the most common and polite ways to order.' },
              { type: 'grammar', title: 'Polite requests', rule: '"Can I have\u2026?" \u2014 casual but polite\n"I would like\u2026" (I\u2019d like\u2026) \u2014 more formal\n"Could I get\u2026?" \u2014 very polite\n\nAlways add "please" at the end!' },
              { type: 'vocab', items: [
                { word: 'Can I have a coffee?', trans: 'Polite order' },
                { word: 'I\u2019d like the soup', trans: 'Another polite order' },
                { word: 'How much does it cost?', trans: 'Asking price' },
                { word: 'The bill, please', trans: 'Asking for check (UK)' },
                { word: 'For here or to go?', trans: 'Eat in or take away' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Waiter'], lines: [
                { who: 0, text: 'Hello! Can I have a latte and a croissant, please?' },
                { who: 1, text: 'Sure! For here or to go?' },
                { who: 0, text: 'For here, please.' },
                { who: 1, text: 'That\u2019s six dollars. Here\u2019s your order. Enjoy!' }
              ]}
            ]
          },
          {
            id: 'l12', title: 'Shopping & Prices', scenario: 'numbers',
            objective: 'Shop for items and ask about prices.',
            content: [
              { type: 'text', value: 'When shopping, you\u2019ll need to ask about sizes, colors, and prices. "How much is\u2026" and "Do you have\u2026" are key phrases.' },
              { type: 'vocab', items: [
                { word: 'How much is this?', trans: 'Asking price' },
                { word: 'Do you have it in blue?', trans: 'Asking for color' },
                { word: 'What size is this?', trans: 'Asking about size' },
                { word: 'Small, medium, large', trans: 'Sizes' },
                { word: 'Can I pay by card?', trans: 'Payment method' },
                { word: 'It\u2019s on sale', trans: 'Discounted' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Shop assistant'], lines: [
                { who: 0, text: 'Excuse me, how much is this jacket?' },
                { who: 1, text: 'It\u2019s 45 dollars. It\u2019s on sale today.' },
                { who: 0, text: 'Do you have it in medium?' },
                { who: 1, text: 'Let me check\u2026 Yes! Here you go.' }
              ]}
            ]
          },
          {
            id: 'l13', title: 'Asking for Directions', scenario: 'directions',
            objective: 'Ask for and understand directions in a new city.',
            content: [
              { type: 'text', value: 'Key prepositions for location: "next to", "across from", "between", "on the corner", "behind", "in front of".' },
              { type: 'grammar', title: 'Prepositions of place', rule: 'next to = beside\nacross from = opposite\nbetween = in the middle of two things\nbehind = at the back of\nin front of = ahead of' },
              { type: 'vocab', items: [
                { word: 'Excuse me, where is\u2026?', trans: 'Politely asking' },
                { word: 'Turn left / right', trans: 'Direction' },
                { word: 'Go straight ahead', trans: 'Continue forward' },
                { word: 'It\u2019s on the corner', trans: 'Location' },
                { word: 'It\u2019s next to the bank', trans: 'Relative location' },
                { word: 'Is it far from here?', trans: 'Asking distance' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Local'], lines: [
                { who: 0, text: 'Excuse me, where is the nearest station?' },
                { who: 1, text: 'Go straight ahead and turn left at the second street.' },
                { who: 0, text: 'Is it far?' },
                { who: 1, text: 'No, about five minutes on foot.' }
              ]}
            ]
          },
          {
            id: 'l14', title: 'Transportation & Travel', scenario: 'directions',
            objective: 'Talk about transport and travel plans.',
            content: [
              { type: 'text', value: 'From buses to planes, transport vocabulary helps you navigate any city. "How do I get to\u2026" is your best question.' },
              { type: 'vocab', items: [
                { word: 'Bus, train, taxi, plane', trans: 'Transport types' },
                { word: 'How do I get to\u2026?', trans: 'Asking for route' },
                { word: 'A ticket to London', trans: 'Buying a ticket' },
                { word: 'Single / Return', trans: 'One-way / round-trip (UK)' },
                { word: 'Departure / Arrival', trans: 'Leaving / landing' },
                { word: 'How long does it take?', trans: 'Duration question' }
              ]},
              { type: 'tip', value: 'American English: "one-way ticket". British English: "single ticket". "Round-trip" (US) = "return" (UK).' }
            ]
          },
          {
            id: 'l15', title: 'Weather & Small Talk', scenario: 'smalltalk',
            objective: 'Make small talk about the weather \u2014 a classic English conversation topic.',
            content: [
              { type: 'text', value: 'Small talk is essential in English-speaking cultures. Weather, weekend plans, and compliments are great starters. It\u2019s not about deep conversation \u2014 it\u2019s about connection.' },
              { type: 'vocab', items: [
                { word: 'Lovely weather today', trans: 'Positive weather comment' },
                { word: 'It\u2019s raining cats and dogs', trans: 'Idiom: heavy rain' },
                { word: 'What are you up to?', trans: 'Asking about plans' },
                { word: 'Have a good one!', trans: 'Friendly goodbye' },
                { word: 'No worries', trans: 'Casual "no problem"' },
                { word: 'How was your weekend?', trans: 'Monday small talk' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Colleague'], lines: [
                { who: 0, text: 'Morning! How was your weekend?' },
                { who: 1, text: 'Great, thanks! I went hiking. The weather was lovely. You?' },
                { who: 0, text: 'I stayed home and relaxed. It rained all Sunday.' },
                { who: 1, text: 'Ah well, rest is good too! Have a good one!' }
              ]}
            ]
          }
        ]
      },
      {
        id: 'u4',
        title: 'Talking About Yourself',
        desc: 'Jobs, hobbies, past events, descriptions, and future plans.',
        lessons: [
          {
            id: 'l16', title: 'Jobs & Occupations', scenario: 'aboutyou',
            objective: 'Talk about your job and ask others about theirs.',
            content: [
              { type: 'text', value: 'Use "to be" + article + job: "I am a teacher." Use "a/an" before the job title. "An" before vowel sounds.' },
              { type: 'vocab', items: [
                { word: 'I work as a teacher', trans: 'Describing your job' },
                { word: 'I\u2019m a doctor / nurse', trans: 'Medical jobs' },
                { word: 'I\u2019m an engineer', trans: 'Technical job (note "an")' },
                { word: 'What do you do?', trans: 'Asking about work' },
                { word: 'I\u2019m a student', trans: 'Still studying' },
                { word: 'I\u2019m retired', trans: 'No longer working' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'So, what do you do, Alex?' },
                { who: 1, text: 'I\u2019m a software engineer. I work from home. How about you?' },
                { who: 0, text: 'I\u2019m a marketing manager at a small company.' },
                { who: 1, text: 'That sounds interesting! Do you enjoy it?' }
              ]}
            ]
          },
          {
            id: 'l17', title: 'Hobbies & Free Time', scenario: 'aboutyou',
            objective: 'Describe what you like to do in your free time.',
            content: [
              { type: 'text', value: 'Use "I like + -ing" or "I enjoy + -ing" to talk about hobbies. Don\u2019t say "I like to play" (though it\u2019s technically OK, "-ing" is more natural).' },
              { type: 'grammar', title: 'Verbs + -ing', rule: 'After "like", "love", "enjoy", "hate" use -ing:\n"I like reading"\n"She enjoys cooking"\n"They love traveling"\n\nNever: "I enjoy to read" \u2717' },
              { type: 'vocab', items: [
                { word: 'I like reading books', trans: 'Reading hobby' },
                { word: 'I enjoy cooking', trans: 'Cooking hobby' },
                { word: 'I love traveling', trans: 'Travel hobby' },
                { word: 'In my free time, I\u2026', trans: 'Hobby intro' },
                { word: 'I\u2019m into photography', trans: 'Casual hobby phrase' },
                { word: 'I play football / tennis', trans: 'Sports' }
              ]}
            ]
          },
          {
            id: 'l18', title: 'Past Simple \u2014 Telling a Story', scenario: 'smalltalk',
            objective: 'Talk about past events using the past simple tense.',
            content: [
              { type: 'text', value: 'The past simple describes completed actions in the past. Regular verbs add -ed: work \u2192 worked. Irregular verbs change: go \u2192 went, have \u2192 had, see \u2192 saw.' },
              { type: 'grammar', title: 'Past simple', rule: 'Regular: work \u2192 worked, play \u2192 played, live \u2192 lived\nIrregular: go \u2192 went, have \u2192 had, do \u2192 did, see \u2192 saw, eat \u2192 ate\n\nNegative: I didn\u2019t go\nQuestion: Did you go?' },
              { type: 'vocab', items: [
                { word: 'Yesterday I went to the park', trans: 'Past action' },
                { word: 'Last week I saw a movie', trans: 'Last week event' },
                { word: 'I had dinner at 8', trans: 'Past meal' },
                { word: 'What did you do yesterday?', trans: 'Past question' }
              ]},
              { type: 'tip', value: 'Time markers for past simple: yesterday, last week/month/year, ago, in 2020, this morning.' }
            ]
          },
          {
            id: 'l19', title: 'Describing People & Places', scenario: 'aboutyou',
            objective: 'Describe appearance and personality using adjectives.',
            content: [
              { type: 'text', value: 'Adjectives describe nouns. In English, adjectives come before the noun ("a tall man") or after "to be" ("He is tall"). Adjectives don\u2019t change for gender or number.' },
              { type: 'vocab', items: [
                { word: 'Tall, short, slim', trans: 'Appearance' },
                { word: 'Kind, funny, smart', trans: 'Personality' },
                { word: 'Beautiful, handsome', trans: 'Attractive' },
                { word: 'Friendly, shy, confident', trans: 'Social traits' },
                { word: 'It\u2019s a big city', trans: 'Describing places' },
                { word: 'It\u2019s beautiful and quiet', trans: 'Place description' }
              ]}
            ]
          },
          {
            id: 'l20', title: 'Future Plans (Will & Going to)', scenario: 'smalltalk',
            objective: 'Talk about future plans and predictions.',
            content: [
              { type: 'text', value: 'There are two main future forms: "will" for spontaneous decisions and predictions, "going to" for planned intentions.' },
              { type: 'grammar', title: 'Will vs Going to', rule: 'WILL \u2014 spontaneous decisions, predictions:\n"I\u2019ll help you." / "It will rain."\n\nGOING TO \u2014 plans and intentions:\n"I\u2019m going to travel." / "She\u2019s going to study."' },
              { type: 'vocab', items: [
                { word: 'I\u2019ll call you later', trans: 'Spontaneous (will)' },
                { word: 'I\u2019m going to visit Paris', trans: 'Plan (going to)' },
                { word: 'What are you going to do?', trans: 'Asking about plans' },
                { word: 'I think it will be sunny', trans: 'Prediction' }
              ]}
            ]
          }
        ]
      },
      {
        id: 'u5',
        title: 'Building Skills',
        desc: 'Questions, comparisons, modals, and expressing opinions.',
        lessons: [
          {
            id: 'l21', title: 'Asking Questions', scenario: 'aboutyou',
            objective: 'Form questions using Wh- words and auxiliaries.',
            content: [
              { type: 'text', value: 'Questions start with a Wh- word (What, Where, When, Who, Why, How) or an auxiliary (Do, Does, Did, Is, Are, Can, Will).' },
              { type: 'grammar', title: 'Question structure', rule: 'Wh- word + auxiliary + subject + verb?\n\n"What do you do?"\n"Where does she live?"\n"When did they arrive?"\n"How are you?"\n"Why are you learning English?"' },
              { type: 'vocab', items: [
                { word: 'What? Where? When?', trans: 'Basic Wh- words' },
                { word: 'Who? Why? How?', trans: 'More Wh- words' },
                { word: 'How much? How many?', trans: 'Quantity questions' },
                { word: 'How long? How often?', trans: 'Duration / frequency' }
              ]}
            ]
          },
          {
            id: 'l22', title: 'Comparisons', scenario: 'smalltalk',
            objective: 'Compare things using comparative and superlative forms.',
            content: [
              { type: 'text', value: 'Short adjectives add -er / the -est: "big \u2192 bigger \u2192 the biggest". Longer adjectives use "more" / "the most": "beautiful \u2192 more beautiful \u2192 the most beautiful".' },
              { type: 'grammar', title: 'Comparatives & superlatives', rule: 'Short: tall \u2192 taller \u2192 the tallest\nShort (ends in -e): nice \u2192 nicer \u2192 the nicest\nShort (CVC): big \u2192 bigger \u2192 the biggest\nLong: beautiful \u2192 more beautiful \u2192 the most beautiful\nIrregular: good \u2192 better \u2192 the best, bad \u2192 worse \u2192 the worst' },
              { type: 'vocab', items: [
                { word: 'Bigger than', trans: 'Comparative' },
                { word: 'The biggest', trans: 'Superlative' },
                { word: 'More expensive than', trans: 'Long adjective comparison' },
                { word: 'The most beautiful', trans: 'Long adjective superlative' },
                { word: 'As fast as', trans: 'Equality' }
              ]}
            ]
          },
          {
            id: 'l23', title: 'Countable & Uncountable Nouns', scenario: 'cafe',
            objective: 'Use some, any, much, many, a few, a little correctly.',
            content: [
              { type: 'text', value: 'Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot (water, music, information). This affects which quantifiers you use.' },
              { type: 'grammar', title: 'Quantifiers', rule: 'Countable: many, a few, few, How many?\nUncountable: much, a little, little, How much?\nBoth: some, any, a lot of\n\n"Some" in positive, "any" in negative/question:\n"I have some water." / "I don\u2019t have any water."' },
              { type: 'vocab', items: [
                { word: 'Countable: apples, books', trans: 'Can count' },
                { word: 'Uncountable: water, bread', trans: 'Cannot count' },
                { word: 'How many? / How much?', trans: 'Count / mass questions' },
                { word: 'A few / A little', trans: 'Small quantity' }
              ]}
            ]
          },
          {
            id: 'l24', title: 'Modal Verbs (Can, Must, Should)', scenario: 'directions',
            objective: 'Express ability, obligation, and advice with modal verbs.',
            content: [
              { type: 'text', value: 'Modal verbs add meaning to the main verb. They don\u2019t change form (no -s for he/she/it) and are followed by the base verb (no "to").' },
              { type: 'grammar', title: 'Common modals', rule: 'CAN \u2014 ability: "I can swim"\nMUST / HAVE TO \u2014 obligation: "You must wear a seatbelt"\nSHOULD \u2014 advice: "You should see a doctor"\nMIGHT \u2014 possibility: "It might rain"\nCOULD \u2014 past ability / polite request: "Could you help me?"' },
              { type: 'vocab', items: [
                { word: 'I can speak English', trans: 'Ability' },
                { word: 'You should rest', trans: 'Advice' },
                { word: 'I must go now', trans: 'Obligation' },
                { word: 'Could you help me?', trans: 'Polite request' }
              ]}
            ]
          },
          {
            id: 'l25', title: 'Expressing Opinions & Feelings', scenario: 'smalltalk',
            objective: 'Share your opinions and talk about emotions.',
            content: [
              { type: 'text', value: 'In English, it\u2019s common to express opinions openly. Use phrases like "I think\u2026", "In my opinion\u2026", "I feel that\u2026". This is the final lesson \u2014 you\u2019ve come a long way!' },
              { type: 'vocab', items: [
                { word: 'I think that\u2026', trans: 'Expressing opinion' },
                { word: 'In my opinion\u2026', trans: 'Formal opinion' },
                { word: 'I feel happy / sad', trans: 'Emotions' },
                { word: 'I\u2019m excited about\u2026', trans: 'Enthusiasm' },
                { word: 'I agree / I disagree', trans: 'Agreement' },
                { word: 'That\u2019s a good point', trans: 'Acknowledging' }
              ]},
              { type: 'dialogue', speakers: ['You', 'Alex'], lines: [
                { who: 0, text: 'I think learning English is really fun!' },
                { who: 1, text: 'I agree! In my opinion, practice is the key. How do you feel about your progress?' },
                { who: 0, text: 'I feel excited. I can already have small conversations!' },
                { who: 1, text: 'That\u2019s amazing! You should be proud of yourself. Keep going!' }
              ]},
              { type: 'tip', value: 'Congratulations! You\u2019ve completed 25 lessons. Continue practicing with the AI assistant, and consider moving to a paid course for advanced topics!' }
            ]
          }
        ]
      }
    ]
  };

  /* ---------- English Level Test (CEFR) ---------- */
  // Each question has a level tag for scoring: A1, A2, B1, B2, C1, C2
  const LEVEL_TEST = {
    intro: 'Ответьте на 25 случайно выбранных вопросов, чтобы узнать свой точный уровень английского по шкале CEFR. Вопросы перемешиваются каждый раз.',
    questions: [
      // A1 (7 questions)
      { q: 'Choose: "She ___ a teacher."', options: ['am', 'is', 'are', 'be'], answer: 1, level: 'A1' },
      { q: 'Choose: "I ___ coffee every morning."', options: ['drink', 'drinks', 'drinking', 'drank'], answer: 0, level: 'A1' },
      { q: 'Choose: "___ you like tea?"', options: ['Do', 'Does', 'Are', 'Is'], answer: 0, level: 'A1' },
      { q: 'Choose: "My birthday is ___ May."', options: ['in', 'on', 'at', 'to'], answer: 0, level: 'A1' },
      { q: 'Choose: "They ___ happy today."', options: ['am', 'is', 'are', 'be'], answer: 2, level: 'A1' },
      { q: 'Choose: "What ___ your name?"', options: ['am', 'is', 'are', 'be'], answer: 1, level: 'A1' },
      { q: 'Choose: "I ___ from Spain."', options: ['am', 'is', 'are', 'be'], answer: 0, level: 'A1' },
      // A2 (7 questions)
      { q: 'Choose: "Yesterday I ___ to the cinema."', options: ['go', 'goed', 'went', 'gone'], answer: 2, level: 'A2' },
      { q: 'Choose: "There ___ many people at the party."', options: ['was', 'were', 'is', 'be'], answer: 1, level: 'A2' },
      { q: 'Choose: "He is ___ than his brother."', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 1, level: 'A2' },
      { q: 'Choose: "I don\u2019t have ___ money."', options: ['some', 'a', 'any', 'much'], answer: 2, level: 'A2' },
      { q: 'Choose: "She ___ TV when I called."', options: ['watch', 'watched', 'was watching', 'watches'], answer: 2, level: 'A2' },
      { q: 'Choose: "We ___ to school every day."', options: ['go', 'goes', 'going', 'went'], answer: 0, level: 'A2' },
      { q: 'Choose: "Can you ___ me, please?"', options: ['helping', 'to help', 'help', 'helped'], answer: 2, level: 'A2' },
      // B1 (7 questions)
      { q: 'Choose: "If it rains, I ___ at home."', options: ['stay', 'will stay', 'stayed', 'staying'], answer: 1, level: 'B1' },
      { q: 'Choose: "She has lived here ___ 2015."', options: ['for', 'since', 'from', 'in'], answer: 1, level: 'B1' },
      { q: 'Choose: "The book ___ by millions of people."', options: ['read', 'is read', 'reads', 'reading'], answer: 1, level: 'B1' },
      { q: 'Choose: "I wish I ___ taller."', options: ['am', 'was', 'were', 'be'], answer: 2, level: 'B1' },
      { q: 'Choose: "He said he ___ tired."', options: ['is', 'was', 'were', 'be'], answer: 1, level: 'B1' },
      { q: 'Choose: "I enjoy ___ books."', options: ['read', 'to read', 'reading', 'reads'], answer: 2, level: 'B1' },
      { q: 'Choose: "This is the man ___ car was stolen."', options: ['who', 'which', 'whose', 'that'], answer: 2, level: 'B1' },
      // B2 (7 questions)
      { q: 'Choose: "By next year, I ___ here for a decade."', options: ['will live', 'will have lived', 'have lived', 'lived'], answer: 1, level: 'B2' },
      { q: 'Choose: "He apologized ___ being late."', options: ['for', 'about', 'of', 'to'], answer: 0, level: 'B2' },
      { q: 'Choose: "Despite ___ tired, she finished the race."', options: ['being', 'to be', 'is', 'was'], answer: 0, level: 'B2' },
      { q: 'Choose: "She suggested ___ a break."', options: ['take', 'to take', 'taking', 'took'], answer: 2, level: 'B2' },
      { q: 'Choose: "If I ___ you, I would accept the offer."', options: ['am', 'was', 'were', 'had been'], answer: 2, level: 'B2' },
      { q: 'Choose: "The meeting ___ postponed until next week."', options: ['has', 'was', 'is being', 'had'], answer: 1, level: 'B2' },
      { q: 'Choose: "I wish I ___ studied harder."', options: ['have', 'had', 'would have', 'has'], answer: 1, level: 'B2' },
      // C1 (7 questions)
      { q: 'Choose: "Hardly ___ when the phone rang."', options: ['I had arrived', 'had I arrived', 'I arrived', 'did I arrive'], answer: 1, level: 'C1' },
      { q: 'Choose: "The report was so thorough that it left no stone ___."', options: ['unturned', 'untouched', 'unchecked', 'unmarked'], answer: 0, level: 'C1' },
      { q: 'Choose: "Not until I left ___ how much I would miss it."', options: ['I realized', 'did I realize', 'I had realized', 'realized I'], answer: 1, level: 'C1' },
      { q: 'Choose: "She\u2019s always been ___ of the spotlight."', options: ['wary', 'aware', 'fond', 'mindful'], answer: 0, level: 'C1' },
      { q: 'Choose: "Were he ___, he would have called."', options: ['here', 'be here', 'being here', 'to be here'], answer: 0, level: 'C1' },
      { q: 'Choose: "The company is rumored ___ bankruptcy."', options: ['to file', 'filing', 'to be filing', 'file'], answer: 2, level: 'C1' },
      { q: 'Choose: "Little ___ that the answer was right in front of him."', options: ['he knew', 'did he know', 'he had known', 'knew he'], answer: 1, level: 'C1' },
      // C2 (7 questions)
      { q: 'Choose: "Were it not for your help, I ___ completely lost."', options: ['would be', 'will be', 'had been', 'was'], answer: 0, level: 'C2' },
      { q: 'Choose: "The new policy is, ___ , a step in the right direction."', options: ['by and large', 'all in all', 'for all intents and purposes', 'all of the above'], answer: 3, level: 'C2' },
      { q: 'Choose: "He has a penchant ___ making grand gestures."', options: ['for', 'of', 'to', 'with'], answer: 0, level: 'C2' },
      { q: 'Choose: "Scarcely had I sat down ___ the bell rang."', options: ['than', 'when', 'before', 'that'], answer: 1, level: 'C2' },
      { q: 'Choose: "She took it upon ___ to organize everything."', options: ['her', 'herself', 'she', 'hers'], answer: 1, level: 'C2' },
      { q: 'Choose: "Be that as it ___, we must proceed carefully."', options: ['is', 'may', 'were', 'might'], answer: 1, level: 'C2' },
      { q: 'Choose: "So ___ was the performance that the audience was spellbound."', options: ['mesmerizing', 'mesmeric', 'spellbinding', 'all of the above'], answer: 3, level: 'C2' }
    ],
    results: {
      'A1': { title: 'Начальный (A1)', desc: 'Вы только начинаете путь в английском. Начните с нашего бесплатного курса English Starter (A1), затем переходите к AI-разговору с нуля.' },
      'A2': { title: 'Элементарный (A2)', desc: 'Вы справляетесь с базовыми разговорами. Пройдите секцию A2 нашего бесплатного курса, затем попробуйте «Путь к свободной речи».' },
      'B1': { title: 'Средний (B1)', desc: 'Прочный фундамент! «Путь к свободной речи» продвинет вас к уверенным, плавным разговорам.' },
      'B2': { title: 'Выше среднего (B2)', desc: 'Вы довольно уверенно себя чувствуете. «Бизнес-английский Pro» или «Лаборатория акцента» отточат ваше мастерство.' },
      'C1': { title: 'Продвинутый (C1)', desc: 'Впечатляюще! «Мастерство IELTS» или «Студия креативного письма» доведут вас до совершенства.' },
      'C2': { title: 'Владение (C2)', desc: 'Почти как носитель. Бросьте себе вызов со «Студией креативного письма» или «Лабораторией акцента».' }
    }
  };

  // FREE_COURSE is now defined in course-data.js (loaded after this file)
  global.AESData = { COURSES, LEVEL_TEST, CURRICULUM, TESTIMONIALS, FEATURES };
})(window);
