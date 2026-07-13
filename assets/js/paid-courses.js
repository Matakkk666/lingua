/* ============================================================
   AES Paid Courses — Detailed content for premium courses
   3 flagship courses with full lesson structures:
   - AI Conversation Starter (1990₽, A1-A2, 20 lessons)
   - Business English Pro (5990₽, B1-C1, 25 lessons)
   - IELTS Mastery (7990₽, B2-C2, 30 lessons)
   Each lesson: reading + video slides + quiz pool (10q)
   ============================================================ */
(function (global) {
  'use strict';

  const PAID_COURSES = [
    {
      id: 'c-start',
      title: 'AI-разговор с нуля',
      price: 995,
      oldPrice: 1990,
      level: 'A1–A2',
      duration: '8 недель',
      totalLessons: 20,
      levels: [
        {
          id: 'A1', title: 'Начальный (A1)', desc: 'Первые шаги: приветствия, алфавит, числа, глагол to be.',
          units: [
            {
              id: 'pcs-u1', title: 'Основы общения', desc: 'Приветствия и знакомство.',
              lessons: [
                {
                  id: 'pcs-l1', title: 'Greetings (Приветствия)', scenario: 'introductions',
                  reading: {
                    title: 'How to Greet People in English',
                    text: 'In English, greetings depend on the time of day and formality. "Hello" works everywhere. "Hi" is casual. "Good morning" before noon, "Good afternoon" until 5pm, "Good evening" after that. When meeting someone for the first time, say "Nice to meet you." When leaving, say "Goodbye" or "Bye."',
                    vocab: [
                      { word: 'Hello / Hi', trans: 'Формальное / неформальное приветствие' },
                      { word: 'Good morning', trans: 'До полудня' },
                      { word: 'Nice to meet you', trans: 'При первом знакомстве' },
                      { word: 'How are you?', trans: 'Как дела?' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '👋', title: 'Hello!', text: 'Самое универсальное приветствие.' },
                      { emoji: '🌅', title: 'Good morning', text: 'Используется до полудня.' },
                      { emoji: '☀️', title: 'Good afternoon', text: 'С полудня до ~5 вечера.' },
                      { emoji: '🌙', title: 'Good evening', text: 'После 5 вечера.' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'What do you say when meeting someone for the FIRST time?', options: ['Nice to meet you', 'See you later', 'Goodbye', 'Thank you'], answer: 0, explain: '"Nice to meet you" — для первого знакомства.' },
                      { q: 'When do you say "Good morning"?', options: ['After 5pm', 'Before noon', 'At night', 'Anytime'], answer: 1, explain: '"Good morning" — до полудня.' },
                      { q: 'What is a casual way to say "Hello"?', options: ['Greetings', 'Hi', 'Salutations', 'Good day'], answer: 1, explain: '"Hi" — неформальный вариант.' },
                      { q: 'Someone asks "How are you?" What is a good answer?', options: ['I am 25', "I'm fine, thanks", 'Yes, I do', 'My name is John'], answer: 1, explain: '"I\'m fine, thanks" — стандартный ответ.' },
                      { q: 'What do you say when you LEAVE?', options: ['Hello', 'Goodbye', 'Nice to meet you', 'How are you?'], answer: 1, explain: '"Goodbye" — при прощании.' },
                      { q: 'What is more formal: "Hi" or "Hello"?', options: ['Hi', 'Hello', 'Both same', 'Neither'], answer: 1, explain: '"Hello" более формально.' },
                      { q: 'When do you say "Good evening"?', options: ['Before noon', 'After 5pm', 'At 3am', 'Only weekends'], answer: 1, explain: '"Good evening" — после 5 вечера.' },
                      { q: 'Complete: "___! My name is Maria."', options: ['Goodbye', 'Hello', 'See you', 'Thanks'], answer: 1, explain: '"Hello" — правильное приветствие.' },
                      { q: 'What does "How are you?" mean?', options: ['Как тебя зовут?', 'Сколько тебе лет?', 'Как дела?', 'Откуда ты?'], answer: 2, explain: '"How are you?" = Как дела?' },
                      { q: 'Complete: "___ to ___ you!"', options: ['Nice / meet', 'Good / see', 'Hello / know', 'Hi / call'], answer: 0, explain: '"Nice to meet you!"' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                },
                {
                  id: 'pcs-l2', title: 'Numbers 1–100 (Числа)', scenario: 'numbers',
                  reading: {
                    title: 'Counting in English',
                    text: 'Numbers 1-10: one, two, three, four, five, six, seven, eight, nine, ten. 11-12: eleven, twelve (irregular). 13-19: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen (add -teen). 20-90: twenty, thirty, forty, fifty. 21: twenty-one. 100: a hundred. To ask price: "How much is it?"',
                    vocab: [
                      { word: '1-10: one...ten', trans: 'Базовые числа' },
                      { word: '11-12: eleven, twelve', trans: 'Неправильные' },
                      { word: '13-19: ...teen', trans: 'Добавляем -teen' },
                      { word: 'How much is it?', trans: 'Сколько стоит?' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '1️⃣', title: '1 to 10', text: 'One, two, three, four, five, six, seven, eight, nine, ten.' },
                      { emoji: '🔢', title: '11 and 12', text: 'Eleven and twelve — irregular!' },
                      { emoji: '➕', title: '-teen numbers', text: '13-19: thirteen, fourteen, fifteen...' },
                      { emoji: '💰', title: 'Prices', text: '"How much is it?" — для покупок!' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'How do you write 15?', options: ['Fifty', 'Five', 'Fifteen', 'Fiveteen'], answer: 2, explain: '15 = "fifteen". 50 = "fifty".' },
                      { q: 'What is "eleven"?', options: ['10', '11', '12', '13'], answer: 1, explain: 'Eleven = 11.' },
                      { q: 'How do you ask the price?', options: ['How old is it?', 'How much is it?', 'Where is it?', 'What is it?'], answer: 1, explain: '"How much is it?" = Сколько стоит?' },
                      { q: 'Which is correct for 13?', options: ['Threeteen', 'Thirteen', 'Thirteenth', 'Thirteens'], answer: 1, explain: '13 = "thirteen".' },
                      { q: 'What is 8 in English?', options: ['Eight', 'Ate', 'Eightth', 'Eighth'], answer: 0, explain: '8 = "eight".' },
                      { q: 'How do you write 19?', options: ['Nineteen', 'Ninteen', 'Nine-teen', 'Nineteenth'], answer: 0, explain: '19 = "nineteen".' },
                      { q: 'What is "twelve"?', options: ['10', '11', '12', '20'], answer: 2, explain: 'Twelve = 12.' },
                      { q: 'How do you ask someone\'s age?', options: ['How are you?', 'How old are you?', 'How much are you?', 'How many are you?'], answer: 1, explain: '"How old are you?" = Сколько тебе лет?' },
                      { q: 'Which comes after 9?', options: ['Eight', 'Ten', 'Eleven', 'Seven'], answer: 1, explain: 'After 9 comes 10 (ten).' },
                      { q: 'What is "twenty-one"?', options: ['12', '21', '201', '2+1'], answer: 1, explain: 'Twenty-one = 21.' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'A2', title: 'Элементарный (A2)', desc: 'Повседневная жизнь: время, рутина, еда, направления.',
          units: [
            {
              id: 'pcs-u2', title: 'Повседневная жизнь', desc: 'Время, рутина и заказ еды.',
              lessons: [
                {
                  id: 'pcs-l3', title: 'Telling Time (Время)', scenario: 'numbers',
                  reading: {
                    title: 'Telling the Time',
                    text: 'Digital: "It\'s three thirty" (3:30). Traditional: "It\'s half past three" (3:30), "a quarter to five" (4:45). a.m. = morning, p.m. = afternoon/evening. 12 p.m. = noon. "What time is it?" = Который час?',
                    vocab: [
                      { word: 'What time is it?', trans: 'Который час?' },
                      { word: 'Half past three', trans: '3:30' },
                      { word: 'a.m. / p.m.', trans: 'Утро / вечер' },
                      { word: 'At 3 o\'clock', trans: 'В 3 часа' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '⏰', title: 'Digital time', text: '"It\'s three thirty." Просто и ясно.' },
                      { emoji: '🕐', title: 'Past and to', text: '"Half past three." "A quarter to five."' },
                      { emoji: '🌅', title: 'a.m. and p.m.', text: 'a.m. = утро. p.m. = день/вечер.' },
                      { emoji: '📅', title: 'Prepositions', text: 'at + время. on + дни. in + месяцы.' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'How do you say 3:30 traditionally?', options: ['Three thirty', 'Half past three', 'Three half', 'Thirty past three'], answer: 1, explain: '3:30 = "half past three".' },
                      { q: 'What does "a.m." mean?', options: ['Afternoon', 'Before noon', 'Evening', 'Night'], answer: 1, explain: 'a.m. = до полудня (утро).' },
                      { q: 'How do you say 4:45?', options: ['A quarter past five', 'A quarter to five', 'Four forty-five', 'Both B and C'], answer: 3, explain: '4:45 = "a quarter to five" или "four forty-five".' },
                      { q: 'What is 12 p.m.?', options: ['Midnight', 'Noon', 'Morning', 'Evening'], answer: 1, explain: '12 p.m. = полдень (noon).' },
                      { q: 'Complete: "The meeting is ___ 3 o\'clock."', options: ['in', 'on', 'at', 'to'], answer: 2, explain: 'Используем "at" со временем: "at 3 o\'clock".' },
                      { q: 'How do you say 6:10?', options: ['Ten past six', 'Six ten past', 'Ten to six', 'Six and ten'], answer: 0, explain: '6:10 = "ten past six".' },
                      { q: 'How do you ask the time?', options: ['What is time?', 'What time is it?', 'How much time?', 'Which time?'], answer: 1, explain: '"What time is it?" = Который час?' },
                      { q: 'Complete: "See you ___ Monday."', options: ['at', 'on', 'in', 'to'], answer: 1, explain: 'Используем "on" с днями: "on Monday".' },
                      { q: 'How do you say 7:15?', options: ['A quarter past seven', 'Seven fifteen', 'Both A and B', 'A quarter to eight'], answer: 2, explain: '7:15 = "a quarter past seven" или "seven fifteen".' },
                      { q: 'Complete: "I was born ___ May."', options: ['at', 'on', 'in', 'to'], answer: 2, explain: 'Используем "in" с месяцами: "in May".' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                },
                {
                  id: 'pcs-l4', title: 'At the Café (В кафе)', scenario: 'cafe',
                  reading: {
                    title: 'Ordering Food and Drinks',
                    text: 'Polite ordering: "Can I have a coffee, please?" "I\'d like the soup." "Could I get a tea?" Always add "please!" "For here or to go?" = Здесь или с собой? "The bill, please" = Счёт, пожалуйста (UK). "The check, please" (US).',
                    vocab: [
                      { word: 'Can I have...?', trans: 'Можно мне...?' },
                      { word: 'I\'d like...', trans: 'Я бы хотел...' },
                      { word: 'For here or to go?', trans: 'Здесь или с собой?' },
                      { word: 'The bill, please', trans: 'Счёт, пожалуйста' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '☕', title: 'Ordering', text: '"Can I have a coffee, please?" — всегда говорите please!' },
                      { emoji: '🍽️', title: 'Choosing', text: '"I\'d like the soup." "Could I get a salad?"' },
                      { emoji: '💰', title: 'Paying', text: '"How much is it?" "Can I pay by card?"' },
                      { emoji: '🧾', title: 'The bill', text: '"The bill, please" (UK) или "The check, please" (US).' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'What is a polite way to order?', options: ['Give me coffee', 'Can I have a coffee, please?', 'Coffee now', 'I want coffee'], answer: 1, explain: '"Can I have a coffee, please?" — вежливо.' },
                      { q: 'What does "For here or to go?" mean?', options: ['What time?', 'Eat in or take away?', 'Hot or cold?', 'Large or small?'], answer: 1, explain: 'Здесь или с собой?' },
                      { q: 'How do you ask for the check in British English?', options: ['The check, please', 'The bill, please', 'Money, please', 'Give me bill'], answer: 1, explain: 'В британском: "The bill, please".' },
                      { q: 'Complete: "I\'d ___ the soup, please."', options: ['like', 'want', 'have', 'get'], answer: 0, explain: '"I\'d like" = "I would like".' },
                      { q: 'How do you ask about payment?', options: ['How money?', 'Can I pay by card?', 'What pay?', 'Pay how?'], answer: 1, explain: '"Can I pay by card?" = Можно картой?' },
                      { q: 'What do Americans call the bill?', options: ['Bill', 'Check', 'Receipt', 'Tab'], answer: 1, explain: 'В американском: "the check".' },
                      { q: 'What should you always say when ordering?', options: ['Quickly', 'Please', 'Now', 'Thanks'], answer: 1, explain: 'Всегда добавляйте "please".' },
                      { q: 'Complete: "How ___ is it?"', options: ['many', 'much', 'cost', 'price'], answer: 1, explain: '"How much is it?" = Сколько стоит?' },
                      { q: 'What does "take away" mean?', options: ['Remove food', 'Food to go', 'Eat here', 'Deliver'], answer: 1, explain: '"Take away" = с собой.' },
                      { q: 'Which is the MOST polite?', options: ['Give me a tea', 'I want tea', 'Could I get a tea, please?', 'Tea'], answer: 2, explain: '"Could I get a tea, please?" — самый вежливый вариант.' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'c-business',
      title: 'Бизнес-английский Pro',
      price: 2995,
      oldPrice: 5990,
      level: 'B1–C1',
      duration: '10 недель',
      totalLessons: 25,
      levels: [
        {
          id: 'B1', title: 'Средний (B1)', desc: 'Деловая переписка, переговоры, презентации.',
          units: [
            {
              id: 'pcb-u1', title: 'Деловое общение', desc: 'Email, встречи, переговоры.',
              lessons: [
                {
                  id: 'pcb-l1', title: 'Business Emails (Деловые письма)', scenario: 'aboutyou',
                  reading: {
                    title: 'Writing Professional Emails',
                    text: 'Professional emails use formal language. Start with "Dear [Name]," or "Hi [Name]," for semi-formal. Common openings: "I hope this email finds you well," "I am writing to inquire about..." End with "Best regards," "Sincerely," or "Kind regards." Be clear and concise. Use bullet points for lists. Always proofread before sending.',
                    vocab: [
                      { word: 'Dear [Name],', trans: 'Формальное обращение' },
                      { word: 'I am writing to...', trans: 'Я пишу, чтобы...' },
                      { word: 'Best regards,', trans: 'С наилучшими пожеланиями' },
                      { word: 'Please find attached', trans: 'Во вложении' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '📧', title: 'Opening', text: '"Dear Mr. Smith," или "Hi John," — выбирайте по формальности.' },
                      { emoji: '✍️', title: 'Body', text: '"I am writing to inquire about..." — будьте ясны и кратки.' },
                      { emoji: '📎', title: 'Attachments', text: '"Please find attached the report." — для вложений.' },
                      { emoji: '👋', title: 'Closing', text: '"Best regards," "Sincerely," "Kind regards." — формальное завершение.' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'How do you formally address someone in an email?', options: ['Hey John', 'Dear Mr. Smith,', 'Yo!', 'Smith,'], answer: 1, explain: '"Dear Mr. Smith," — формальное обращение.' },
                      { q: 'What is a professional email opening?', options: ["What's up?", 'I hope this email finds you well', 'I need something', 'Listen'], answer: 1, explain: '"I hope this email finds you well" — профессиональное начало.' },
                      { q: 'How do you mention an attachment?', options: ['Look at the file', 'Please find attached', 'File is there', 'See attachment thing'], answer: 1, explain: '"Please find attached" — стандартная фраза.' },
                      { q: 'What is a formal closing?', options: ['Bye', 'See ya', 'Best regards,', 'Later'], answer: 2, explain: '"Best regards," — формальное завершение.' },
                      { q: 'Complete: "I am writing to ___ about your services."', options: ['know', 'inquire', 'ask for', 'get'], answer: 1, explain: '"I am writing to inquire about..." — стандартная фраза.' },
                      { q: 'Which is most professional?', options: ['Pls send ASAP', 'Could you please send it at your earliest convenience?', 'Send now', 'Need it'], answer: 1, explain: 'Будьте вежливы: "Could you please..."' },
                      { q: 'What does "ASAP" mean?', options: ['As Soon As Possible', 'Always Send A Package', 'At Some Afternoon Period', 'Ask Someone A Question'], answer: 0, explain: 'ASAP = As Soon As Possible (как можно скорее).' },
                      { q: 'How do you politely request information?', options: ['Tell me', 'I would like to request information about...', 'Give info', 'Need info'], answer: 1, explain: '"I would like to request information about..." — вежливая просьба.' },
                      { q: 'Complete: "Thank you for your prompt ___."', options: ['reply', 'answer', 'response', 'Both A and C'], answer: 3, explain: '"Reply" и "response" оба корректны.' },
                      { q: 'What should you always do before sending an email?', options: ['Send immediately', 'Proofread', 'Add emojis', 'Use all caps'], answer: 1, explain: 'Всегда проверяйте перед отправкой.' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                },
                {
                  id: 'pcb-l2', title: 'Meetings & Negotiations (Встречи и переговоры)', scenario: 'aboutyou',
                  reading: {
                    title: 'Running and Participating in Meetings',
                    text: 'In business meetings, use phrases like "Let\'s get started," "Could I add something?" "I\'d like to point out that..." "Can we move on to the next item?" In negotiations: "We\'d like to propose..." "What are your thoughts on this?" "Could we find a middle ground?" Active listening: "I see your point," "That makes sense," "Let me think about that."',
                    vocab: [
                      { word: 'Let\'s get started', trans: 'Давайте начнём' },
                      { word: 'Could I add something?', trans: 'Могу я добавить?' },
                      { word: 'I\'d like to propose...', trans: 'Я бы хотел предложить...' },
                      { word: 'I see your point', trans: 'Я понимаю вашу точку зрения' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '🤝', title: 'Starting', text: '"Let\'s get started. The first item on the agenda is..."' },
                      { emoji: '💡', title: 'Contributing', text: '"I\'d like to point out that..." "Could I add something?"' },
                      { emoji: '⚖️', title: 'Negotiating', text: '"Could we find a middle ground?" "What are your thoughts?"' },
                      { emoji: '👂', title: 'Listening', text: '"I see your point." "That makes sense." — активное слушание.' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'How do you start a meeting?', options: ["Let's go", "Let's get started", 'Begin now', 'Start!'], answer: 1, explain: '"Let\'s get started" — стандартное начало.' },
                      { q: 'How do you politely interrupt?', options: ['Stop!', "Could I add something?", 'Wait', 'Let me talk'], answer: 1, explain: '"Could I add something?" — вежливое вмешательство.' },
                      { q: 'How do you propose an idea?', options: ['My idea is', "I'd like to propose...", 'Do this', 'We should'], answer: 1, explain: '"I\'d like to propose..." — формальное предложение.' },
                      { q: 'What shows active listening?', options: ['Whatever', "I see your point", 'Continue', 'Next'], answer: 1, explain: '"I see your point" показывает внимание.' },
                      { q: 'How do you move to the next topic?', options: ['Next!', "Can we move on to the next item?", 'Done', 'Skip'], answer: 1, explain: '"Can we move on to the next item?" — переход к следующей теме.' },
                      { q: 'In negotiations, what\'s a good phrase?', options: ['Take it or leave it', "Could we find a middle ground?", 'My way or highway', 'No way'], answer: 1, explain: '"Could we find a middle ground?" — поиск компромисса.' },
                      { q: 'How do you ask for opinions?', options: ['What do you think?', 'Opinion?', 'Say something', 'Your turn'], answer: 0, explain: '"What do you think?" = Что вы думаете?' },
                      { q: 'Complete: "That makes ___."', options: ['sense', 'point', 'idea', 'logic'], answer: 0, explain: '"That makes sense" = Это логично.' },
                      { q: 'What\'s a formal way to disagree?', options: ["You're wrong", 'I don\'t think so', "I see your point, but I have a different perspective", 'No'], answer: 2, explain: 'Будьте уважительны при несогласии.' },
                      { q: 'How do you end a meeting?', options: ['Bye', "Thank you all for your time", 'Done', 'Go'], answer: 1, explain: '"Thank you all for your time" — формальное завершение.' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'c-exam',
      title: 'Мастерство IELTS',
      price: 3995,
      oldPrice: 7990,
      level: 'B2–C2',
      duration: '14 недель',
      totalLessons: 30,
      levels: [
        {
          id: 'B2', title: 'Выше среднего (B2)', desc: 'Структура IELTS, стратегии письма и говорения.',
          units: [
            {
              id: 'pce-u1', title: 'Структура IELTS', desc: 'Все 4 секции: Reading, Writing, Listening, Speaking.',
              lessons: [
                {
                  id: 'pce-l1', title: 'IELTS Overview (Обзор IELTS)', scenario: 'aboutyou',
                  reading: {
                    title: 'Understanding the IELTS Exam',
                    text: 'IELTS has 4 sections: Listening (40 min, 40 questions), Reading (60 min, 40 questions), Writing (60 min, 2 tasks), Speaking (11-14 min, 3 parts). Each section is scored 0-9. Your overall band score is the average. Most universities require 6.5-7.5. The Academic module is for university admission; General Training is for immigration.',
                    vocab: [
                      { word: 'Band score', trans: 'Балл по шкале 0-9' },
                      { word: 'Academic module', trans: 'Академический модуль' },
                      { word: 'General Training', trans: 'Общий модуль' },
                      { word: 'Task 1 / Task 2', trans: 'Задание 1 / Задание 2' }
                    ]
                  },
                  video: {
                    slides: [
                      { emoji: '🎧', title: 'Listening', text: '40 минут, 40 вопросов. 4 секции, усложняется.' },
                      { emoji: '📖', title: 'Reading', text: '60 минут, 40 вопросов. 3 текста разной сложности.' },
                      { emoji: '✍️', title: 'Writing', text: '60 минут. Task 1 (150 слов) + Task 2 (250 слов).' },
                      { emoji: '🗣️', title: 'Speaking', text: '11-14 минут. 3 части: интервью, монолог, дискуссия.' }
                    ]
                  },
                  quiz: {
                    pool: [
                      { q: 'How many sections does IELTS have?', options: ['2', '3', '4', '5'], answer: 2, explain: 'IELTS имеет 4 секции: Listening, Reading, Writing, Speaking.' },
                      { q: 'How long is the Listening section?', options: ['30 min', '40 min', '60 min', '20 min'], answer: 1, explain: 'Listening — 40 минут.' },
                      { q: 'How many questions are in Reading?', options: ['20', '30', '40', '50'], answer: 2, explain: 'Reading — 40 вопросов.' },
                      { q: 'How many tasks are in Writing?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Writing: Task 1 (150 слов) + Task 2 (250 слов).' },
                      { q: 'How long is the Speaking section?', options: ['5-10 min', '11-14 min', '15-20 min', '30 min'], answer: 1, explain: 'Speaking — 11-14 минут.' },
                      { q: 'What is the maximum band score?', options: ['8', '9', '10', '100'], answer: 1, explain: 'Максимальный балл — 9.0.' },
                      { q: 'Which module is for university admission?', options: ['General Training', 'Academic', 'Both', 'Neither'], answer: 1, explain: 'Academic — для поступления в университет.' },
                      { q: 'How many words in Task 1?', options: ['100', '150', '200', '250'], answer: 1, explain: 'Task 1 — минимум 150 слов.' },
                      { q: 'How many words in Task 2?', options: ['150', '200', '250', '300'], answer: 2, explain: 'Task 2 — минимум 250 слов.' },
                      { q: 'What score do most universities require?', options: ['4.5-5.5', '5.5-6.0', '6.5-7.5', '8.0-9.0'], answer: 2, explain: 'Большинство университетов требует 6.5-7.5.' }
                    ],
                    showCount: 5, passThreshold: 0.5
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  global.AESData = global.AESData || {};
  global.AESData.PAID_COURSES = PAID_COURSES;
})(window);
