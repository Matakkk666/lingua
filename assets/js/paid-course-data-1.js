/* ============================================================
   AES Paid Course 1: AI-разговор с нуля (A1-A2)
   6 lessons × ~55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-start',
    title: 'AI-разговор с нуля',
    price: 1000,
    oldPrice: 1990,
    level: 'A1–A2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'mint',
    art: ['#D6EBDC', '#BFE3CE'],
    tagline: 'Начните говорить с первого урока. 6 пошаговых модулей с теорией, практикой и домашними заданиями.',
    lessons: [
      {
        id: 'pcs-l1',
        topic: 'Приветствия и знакомство',
        objective: 'Научиться уверенно приветствовать людей, представляться и вести базовую беседу.',
        estimatedTime: '55 минут',
        reading: {
          title: 'How to Greet People and Introduce Yourself',
          text: 'In English, greetings depend on the time of day and the level of formality. The most universal greeting is "Hello" — it works in every situation. "Hi" is a more relaxed, informal version for friends.\n\nWhen greeting someone in the morning (before 12:00 PM), say "Good morning." From noon until about 5:00 PM, use "Good afternoon." After 5:00 PM, "Good evening" is appropriate. "Good night" is NOT a greeting — it is used when leaving or going to sleep.\n\nWhen you meet someone for the first time, say "Nice to meet you." Follow with your name: "Hi, my name is Maria. Nice to meet you!" The other person will respond with "Nice to meet you too."\n\nTo ask someone\'s name: "What is your name?" or "What\'s your name?" To ask where someone is from: "Where are you from?" The answer uses "to be from": "I am from Russia" or "I\'m from Brazil."\n\nA very common conversation starter is "How are you?" This is a polite question, not a deep inquiry. Standard responses: "I\'m fine, thanks," "I\'m good," "Pretty good," or "Not bad." Always ask back: "And you?" or "How about you?"\n\nWhen leaving, say "Goodbye" (formal) or "Bye" (casual). Other friendly goodbyes: "See you later," "Take care," "Have a good day."\n\nRemember: in English-speaking cultures, smiling and eye contact during greetings is very important. It shows confidence and friendliness!',
          vocab: [
            { word: 'Hello / Hi', trans: 'Универсальное / неформальное' },
            { word: 'Good morning / afternoon / evening', trans: 'По времени суток' },
            { word: 'Nice to meet you', trans: 'При первом знакомстве' },
            { word: 'What is your name?', trans: 'Как вас зовут?' },
            { word: 'Where are you from?', trans: 'Откуда вы?' },
            { word: 'How are you?', trans: 'Как дела?' },
            { word: 'See you later', trans: 'Увидимся позже' },
            { word: 'Take care', trans: 'Береги себя' }
          ]
        },
        video: { slides: [
          { emoji: '👋', title: 'Hello!', text: 'Самое универсальное приветствие. Подходит для любой ситуации.' },
          { emoji: '☀️', title: 'Good morning', text: 'Используется до полудня (12:00 PM).' },
          { emoji: '🌤️', title: 'Good afternoon', text: 'С 12:00 до ~17:00.' },
          { emoji: '🌆', title: 'Good evening', text: 'После 17:00. Не путать с "Good night" — это прощание!' },
          { emoji: '🤝', title: 'Nice to meet you', text: 'При первом знакомстве. Ответ: "Nice to meet you too."' },
          { emoji: '❓', title: 'What is your name?', text: 'Самый простой способ спросить имя.' },
          { emoji: '🌍', title: 'Where are you from?', text: 'Спросить откуда человек. Ответ: "I\'m from..."' },
          { emoji: '👋', title: 'Goodbye / Bye', text: 'Прощание. "Bye" — неформальное, "Goodbye" — формальное.' }
        ]},
        quiz: { pool: [
          { q: 'What do you say when meeting someone for the FIRST time?', options: ['Nice to meet you', 'See you later', 'Goodbye', 'Thank you'], answer: 0, explain: '"Nice to meet you" — для первого знакомства.' },
          { q: 'When do you say "Good morning"?', options: ['After 5pm', 'Before noon', 'At night', 'Anytime'], answer: 1, explain: '"Good morning" — до полудня.' },
          { q: 'What is a casual way to say "Hello"?', options: ['Greetings', 'Hi', 'Salutations', 'Good day'], answer: 1, explain: '"Hi" — неформальный вариант.' },
          { q: 'Someone asks "How are you?" What is a good answer?', options: ['I am 25', "I'm fine, thanks", 'Yes, I do', 'My name is John'], answer: 1, explain: '"I\'m fine, thanks" — стандартный ответ.' },
          { q: 'What do you say when you LEAVE?', options: ['Hello', 'Goodbye', 'Nice to meet you', 'How are you?'], answer: 1, explain: '"Goodbye" — при прощании.' },
          { q: 'What is more formal: "Hi" or "Hello"?', options: ['Hi', 'Hello', 'Both same', 'Neither'], answer: 1, explain: '"Hello" более формально.' },
          { q: 'When do you say "Good evening"?', options: ['Before noon', 'After 5pm', 'At 3am', 'Only weekends'], answer: 1, explain: '"Good evening" — после 5 вечера.' },
          { q: 'Complete: "___! My name is Maria."', options: ['Goodbye', 'Hello', 'See you', 'Thanks'], answer: 1, explain: '"Hello" — правильное приветствие.' },
          { q: 'What does "How are you?" mean?', options: ['Как тебя зовут?', 'Сколько тебе лет?', 'Как дела?', 'Откуда ты?'], answer: 2, explain: '"How are you?" = Как дела?' },
          { q: 'Complete: "___ to ___ you!"', options: ['Nice / meet', 'Good / see', 'Hello / know', 'Hi / call'], answer: 0, explain: '"Nice to meet you!"' },
          { q: 'What is "Good night" used for?', options: ['A greeting in the evening', 'Saying goodbye before sleep', 'A question', 'A thank you'], answer: 1, explain: '"Good night" — прощание перед сном.' },
          { q: 'How do you ask where someone is from?', options: ['What is your name?', 'Where are you from?', 'How old are you?', 'How are you?'], answer: 1, explain: '"Where are you from?"' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Good ___! How are you?" (before noon)', answer: 'morning', explain: 'До полудня — "Good morning".' },
          { type: 'fill-blank', question: 'Complete: "Hi! My ___ is Alex."', answer: 'name', explain: '"My name is..." — представление.' },
          { type: 'choice', question: 'Choose the correct greeting for 9 PM:', options: ['Good morning', 'Good evening', 'Good afternoon', 'Good night'], answer: 3, explain: 'Перед сном — "Good night".' },
          { type: 'translate', question: 'Переведите: "Приятно познакомиться!"', answer: 'Nice to meet you', explain: 'Стандартная фраза при знакомстве.' },
          { type: 'order', question: 'Put the words in order:', words: ['from', 'I', 'am', 'Russia'], answer: 'I am from Russia', explain: 'Подлежащее + глагол + предлог + страна.' },
          { type: 'correct', question: 'Find and correct: "She are from Brazil."', answer: 'She is from Brazil', explain: 'С "she" используем "is".' }
        ]}
      },
      {
        id: 'pcs-l2',
        topic: 'Числа, время и деньги',
        objective: 'Освоить числа от 1 до 1000, называть время и говорить о ценах.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Numbers, Time, and Money in English',
          text: 'Numbers are the foundation of daily communication — from telling time to shopping, from giving your phone number to discussing prices.\n\n**Counting 1-20:** One, two, three, four, five, six, seven, eight, nine, ten. Then: eleven (11) and twelve (12) are irregular. From 13 to 19, add "-teen": thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Be careful: "fifteen" (15) and "fifty" (50) sound similar!\n\n**Tens (20-90):** Twenty, thirty, forty (no "u"!), fifty, sixty, seventy, eighty, ninety. For 21, use a hyphen: twenty-one. 100 = "one hundred." 1000 = "one thousand."\n\n**Telling Time:** Digital: "It\'s three thirty" (3:30). Traditional: "It\'s half past three" (3:30). Others: "a quarter past seven" (7:15), "a quarter to five" (4:45).\n\nUse "a.m." for morning (before noon) and "p.m." for afternoon/evening. 12 p.m. = noon. To ask the time: "What time is it?"\n\n**Money:** To ask about price: "How much is it?" or "How much does it cost?" $5 = "five dollars," $12.50 = "twelve fifty."\n\n**Prepositions:** "at" for clock times ("at 3 o\'clock"), "on" for days ("on Monday"), "in" for months ("in May").\n\nPractice numbers every day — they appear in everything!',
          vocab: [
            { word: 'One to ten', trans: 'Базовые числа' },
            { word: 'Eleven, twelve', trans: '11, 12 (неправильные)' },
            { word: '-teen (13-19)', trans: 'Добавляем -teen' },
            { word: 'Twenty, thirty...', trans: 'Десятки' },
            { word: 'What time is it?', trans: 'Который час?' },
            { word: 'Half past three', trans: '3:30' },
            { word: 'a.m. / p.m.', trans: 'До полудня / после' },
            { word: 'How much is it?', trans: 'Сколько стоит?' }
          ]
        },
        video: { slides: [
          { emoji: '1️⃣', title: '1 to 10', text: 'One, two, three, four, five, six, seven, eight, nine, ten.' },
          { emoji: '🔢', title: '11 and 12', text: 'Eleven and twelve — irregular! Memorize them.' },
          { emoji: '➕', title: '-teen numbers', text: '13-19: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.' },
          { emoji: '🔟', title: 'Tens', text: 'Twenty, thirty, forty (no "u"!), fifty, sixty, seventy, eighty, ninety.' },
          { emoji: '⏰', title: 'Telling time', text: '"It\'s half past three" (3:30). "A quarter to five" (4:45).' },
          { emoji: '🌅', title: 'a.m. and p.m.', text: 'a.m. = утро. p.m. = день/вечер. 12 p.m. = noon.' },
          { emoji: '💰', title: 'Asking prices', text: '"How much is it?" — главный вопрос при покупках!' },
          { emoji: '📅', title: 'Prepositions', text: 'at + время, on + дни, in + месяцы/годы.' }
        ]},
        quiz: { pool: [
          { q: 'How do you write 15?', options: ['Fifty', 'Five', 'Fifteen', 'Fiveteen'], answer: 2, explain: '15 = "fifteen". 50 = "fifty".' },
          { q: 'What is "eleven"?', options: ['10', '11', '12', '13'], answer: 1, explain: 'Eleven = 11.' },
          { q: 'How do you ask the price?', options: ['How old is it?', 'How much is it?', 'Where is it?', 'What is it?'], answer: 1, explain: '"How much is it?"' },
          { q: 'How do you say 3:30 traditionally?', options: ['Three thirty', 'Half past three', 'Three half', 'Thirty past three'], answer: 1, explain: '3:30 = "half past three".' },
          { q: 'What does "a.m." mean?', options: ['Afternoon', 'Before noon', 'Evening', 'Night'], answer: 1, explain: 'a.m. = до полудня.' },
          { q: 'How do you say 4:45?', options: ['A quarter past five', 'A quarter to five', 'Four forty-five', 'Both B and C'], answer: 3, explain: '4:45 = "a quarter to five" или "four forty-five".' },
          { q: 'What is 12 p.m.?', options: ['Midnight', 'Noon', 'Morning', 'Evening'], answer: 1, explain: '12 p.m. = полдень (noon).' },
          { q: 'Complete: "The meeting is ___ 3 o\'clock."', options: ['in', 'on', 'at', 'to'], answer: 2, explain: '"at" со временем.' },
          { q: 'How do you write 21?', options: ['Twenty one', 'Twenty-one', 'Two one', 'Twentyfirst'], answer: 1, explain: 'Через дефис: twenty-one.' },
          { q: 'What is "forty"?', options: ['14', '40', '4', '400'], answer: 1, explain: 'Forty = 40. Нет буквы "u"!' },
          { q: 'Complete: "I was born ___ May."', options: ['at', 'on', 'in', 'to'], answer: 2, explain: '"in" с месяцами.' },
          { q: 'Complete: "See you ___ Monday."', options: ['at', 'on', 'in', 'to'], answer: 1, explain: '"on" с днями.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Write the number: "Twenty-___" = 21', answer: 'one', explain: '21 = twenty-one.' },
          { type: 'fill-blank', question: 'Complete: "It\'s half ___ three." (3:30)', answer: 'past', explain: '3:30 = "half past three".' },
          { type: 'choice', question: 'Which is correct for 4:45?', options: ['A quarter past five', 'A quarter to five', 'Half past four', 'Four to five'], answer: 1, explain: '4:45 = "a quarter to five".' },
          { type: 'translate', question: 'Переведите: "Сколько это стоит?"', answer: 'How much does it cost', explain: 'Можно также: "How much is it?"' },
          { type: 'order', question: 'Put in order:', words: ['is', 'it', 'How', 'much'], answer: 'How much is it', explain: 'Вопрос: How much is it?' },
          { type: 'correct', question: 'Find and correct: "The meeting is in 3 o\'clock."', answer: 'The meeting is at 3', explain: 'Со временем — "at", не "in".' }
        ]}
      },
      {
        id: 'pcs-l3',
        topic: 'Повседневная рутина и Present Simple',
        objective: 'Рассказывать о своих ежедневных делах, используя Present Simple.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Daily Routines and the Present Simple Tense',
          text: 'The Present Simple is the most important tense in English. We use it for habits, routines, facts, and things that are generally true.\n\n**Form:** For I, you, we, they — use the base verb: "I work," "you study." For he, she, it — add -s or -es: "he works," "she studies."\n\n**Spelling:** Most verbs add -s (work → works). Verbs ending in -ch, -sh, -ss, -x, -o add -es (watch → watches, go → goes). Consonant + y changes to -ies (study → studies).\n\n**Negative:** Use "don\'t" for I/you/we/they. Use "doesn\'t" for he/she/it. "I don\'t drink coffee." "She doesn\'t smoke." After "doesn\'t," the verb goes back to base form: "He doesn\'t work" (NOT "works").\n\n**Questions:** "Do you like tea?" "Does she speak English?" After "does," the verb is base form: "Does he work?" (NOT "works").\n\n**Frequency adverbs:** always, usually, often, sometimes, rarely, never. These go BEFORE the main verb: "I always eat breakfast." But AFTER "to be": "I am always happy."\n\n**Common routine:** "I get up at 7," "I have breakfast," "I go to work," "I come home at 6," "I go to bed at 11."\n\nPractice: write your daily routine in English using Present Simple!',
          vocab: [
            { word: 'I work / He works', trans: 'Present Simple — основная форма' },
            { word: 'don\'t / doesn\'t', trans: 'Отрицание' },
            { word: 'Do / Does', trans: 'Вопросы' },
            { word: 'always / usually / never', trans: 'Наречия частоты' },
            { word: 'get up', trans: 'Вставать' },
            { word: 'have breakfast', trans: 'Завтракать' },
            { word: 'go to work', trans: 'Идти на работу' },
            { word: 'go to bed', trans: 'Ложиться спать' }
          ]
        },
        video: { slides: [
          { emoji: '🔁', title: 'Present Simple', text: 'Для привычек, рутины и фактов.' },
          { emoji: '👤', title: 'I/you/we/they', text: 'Базовая форма: I work, you study, we eat.' },
          { emoji: '👨', title: 'he/she/it + -s', text: 'Добавляем -s: he works, she studies, it rains.' },
          { emoji: '✏️', title: 'Spelling', text: '-ch/-sh/-ss/-x/-o → -es: watches, goes. consonant+y → -ies: studies.' },
          { emoji: '🚫', title: 'Negative', text: 'don\'t / doesn\'t. После doesn\'t глагол без -s!' },
          { emoji: '❓', title: 'Questions', text: 'Do you...? Does she...? После does глагол без -s!' },
          { emoji: '📊', title: 'Frequency adverbs', text: 'always, usually, often, sometimes, never — перед глаголом.' },
          { emoji: '⏰', title: 'Daily routine', text: 'get up, have breakfast, go to work, come home, go to bed.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: "She ___ coffee every morning."', options: ['drink', 'drinks', 'drinking', 'drank'], answer: 1, explain: 'Добавляем -s: She drinks.' },
          { q: 'How do you make the negative of "I work"?', options: ['I no work', "I don't work", 'I not work', 'I am not work'], answer: 1, explain: '"don\'t": I don\'t work.' },
          { q: 'Complete: "___ you like tea?"', options: ['Are', 'Do', 'Is', 'Does'], answer: 1, explain: '"Do" с "you".' },
          { q: 'Complete: "He ___ to work by bus."', options: ['go', 'goes', 'going', 'gone'], answer: 1, explain: '"goes" для he.' },
          { q: 'Where do frequency adverbs go?', options: ['After the verb', 'Before the main verb', 'At the end', 'At the beginning'], answer: 1, explain: 'Перед глаголом: I always eat.' },
          { q: 'Complete: "She doesn\'t ___ meat."', options: ['eats', 'eat', 'eating', 'ate'], answer: 1, explain: 'После doesn\'t — базовая форма.' },
          { q: 'What tense describes habits?', options: ['Past simple', 'Present simple', 'Future', 'Present continuous'], answer: 1, explain: 'Present Simple — для привычек.' },
          { q: 'Complete: "I ___ up at 7 every day."', options: ['get', 'gets', 'getting', 'got'], answer: 0, explain: 'С "I" — базовая форма.' },
          { q: 'Which is correct?', options: ['He work hard', 'He works hard', 'He working hard', 'He is work hard'], answer: 1, explain: 'Добавляем -s: works.' },
          { q: 'Complete: "___ she speak English?"', options: ['Do', 'Does', 'Is', 'Are'], answer: 1, explain: '"Does" с she.' },
          { q: 'Complete: "They ___ in London."', options: ['live', 'lives', 'living', 'lived'], answer: 0, explain: 'С "they" — базовая форма.' },
          { q: 'Choose: "My father ___ TV every evening."', options: ['watch', 'watches', 'watching', 'watchs'], answer: 1, explain: 'watch → watches.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "She ___ (study) English every day."', answer: 'studies', explain: 'consonant+y → -ies.' },
          { type: 'fill-blank', question: 'Complete: "They ___ (not/work) on Sundays." (two words)', answer: "don't work", explain: 'Отрицание с "they": don\'t work.' },
          { type: 'choice', question: 'Choose the correct sentence:', options: ["He don't smoke", "He doesn't smokes", "He doesn't smoke", "He not smoke"], answer: 2, explain: 'doesn\'t + базовая форма.' },
          { type: 'translate', question: 'Переведите: "Я всегда завтракаю в 7."', answer: 'I always have breakfast at 7', explain: 'always перед глаголом.' },
          { type: 'order', question: 'Put in order:', words: ['usually', 'she', 'early', 'wakes', 'up'], answer: 'she usually wakes up early', explain: 'Подлежащее + наречие + глагол.' },
          { type: 'correct', question: 'Find and correct: "Does he works here?"', answer: 'Does he work here', explain: 'После "Does" — базовая форма!' }
        ]}
      },
      {
        id: 'pcs-l4',
        topic: 'Еда и заказ в ресторане',
        objective: 'Уверенно заказывать еду и напитки в кафе и ресторанах.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Ordering Food and Drinks in English',
          text: 'Eating out is one of the most common situations where you need English. Knowing how to order food politely is essential.\n\n**Polite Ordering:** The key word is "please." Never say "Give me..." or "I want..." — it sounds rude. Instead use:\n\n- "Can I have a coffee, please?" (casual but polite)\n- "I\'d like the soup, please." (slightly more formal)\n- "Could I get a tea, please?" (very polite)\n\n**At the Restaurant:**\n- The waiter will greet you: "Table for two?"\n- They\'ll ask: "Are you ready to order?"\n- They might ask: "Would you like anything to drink?"\n- During the meal: "Is everything OK?"\n- At the end: "Would you like the check?"\n\n**Key Questions:**\n- "What do you recommend?"\n- "Does this contain nuts?"\n- "Is it spicy?"\n- "Can I pay by card?"\n\n**For here or to go?** In fast food: "For here or to go?" (US) or "Eat in or take away?" (UK). "For here" = eat at the restaurant. "To go" = take with you.\n\n**The Bill:** UK: "The bill, please." US: "The check, please." Tipping: 15-20% in the US, 10-12.5% in the UK.\n\nRemember: always say "please" and "thank you!"',
          vocab: [
            { word: 'Can I have...?', trans: 'Можно мне...?' },
            { word: 'I\'d like...', trans: 'Я бы хотел...' },
            { word: 'For here or to go?', trans: 'Здесь или с собой?' },
            { word: 'The bill / check', trans: 'Счёт (UK / US)' },
            { word: 'starter / main course / dessert', trans: 'Закуска / основное / десерт' },
            { word: 'Can I pay by card?', trans: 'Можно картой?' },
            { word: 'What do you recommend?', trans: 'Что посоветуете?' },
            { word: 'Is it spicy?', trans: 'Это острое?' }
          ]
        },
        video: { slides: [
          { emoji: '🍽️', title: 'Ordering', text: '"Can I have a coffee, please?" — всегда говорите please!' },
          { emoji: '📝', title: 'Ready to order?', text: 'Официант спросит: "Are you ready to order?"' },
          { emoji: '🍲', title: 'Choosing', text: '"I\'d like the soup." "Could I get a salad?"' },
          { emoji: '❓', title: 'Questions', text: '"What do you recommend?" "Is it spicy?"' },
          { emoji: '🥤', title: 'Drinks', text: '"Would you like anything to drink?"' },
          { emoji: '🏠', title: 'For here or to go?', text: 'US: "For here or to go?" UK: "Eat in or take away?"' },
          { emoji: '💰', title: 'Paying', text: '"Can I pay by card?" "How much is it?"' },
          { emoji: '🧾', title: 'The bill', text: 'UK: "The bill, please." US: "The check, please." Чаевые: 15-20%.' }
        ]},
        quiz: { pool: [
          { q: 'What is a polite way to order?', options: ['Give me coffee', 'Can I have a coffee, please?', 'Coffee now', 'I want coffee'], answer: 1, explain: '"Can I have...?" — вежливо.' },
          { q: 'What does "For here or to go?" mean?', options: ['What time?', 'Eat in or take away?', 'Hot or cold?', 'Large or small?'], answer: 1, explain: 'Здесь или с собой?' },
          { q: 'How do you ask for the check in British English?', options: ['The check, please', 'The bill, please', 'Money, please', 'Give me bill'], answer: 1, explain: 'UK: "The bill, please".' },
          { q: 'Complete: "I\'d ___ the soup, please."', options: ['like', 'want', 'have', 'get'], answer: 0, explain: '"I\'d like" = "I would like".' },
          { q: 'How do you ask about payment?', options: ['How money?', 'Can I pay by card?', 'What pay?', 'Pay how?'], answer: 1, explain: '"Can I pay by card?"' },
          { q: 'What do Americans call the bill?', options: ['Bill', 'Check', 'Receipt', 'Tab'], answer: 1, explain: 'US: "the check".' },
          { q: 'What should you always say when ordering?', options: ['Quickly', 'Please', 'Now', 'Thanks'], answer: 1, explain: 'Всегда добавляйте "please".' },
          { q: 'Complete: "How ___ is it?"', options: ['many', 'much', 'cost', 'price'], answer: 1, explain: '"How much is it?"' },
          { q: 'What does "take away" mean?', options: ['Remove food', 'Food to go', 'Eat here', 'Deliver'], answer: 1, explain: '"Take away" = с собой.' },
          { q: 'Which is the MOST polite?', options: ['Give me a tea', 'I want tea', 'Could I get a tea, please?', 'Tea'], answer: 2, explain: '"Could I get...?" — самый вежливый.' },
          { q: 'What is a "starter"?', options: ['Main dish', 'First course', 'Dessert', 'Drink'], answer: 1, explain: 'Starter = закуска.' },
          { q: 'Standard tipping in the US?', options: ['5%', '10%', '15-20%', 'No tip'], answer: 2, explain: 'В США 15-20%.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Can I ___ a coffee, please?"', answer: 'have', explain: '"Can I have..."' },
          { type: 'fill-blank', question: 'Complete: "The ___, please." (UK — счёт)', answer: 'bill', explain: 'UK: "the bill".' },
          { type: 'choice', question: 'Choose the most polite phrase:', options: ['Give me a tea', 'I want tea', 'Could I get a tea, please?', 'Tea now'], answer: 2, explain: '"Could I get...?" — самый вежливый.' },
          { type: 'translate', question: 'Переведите: "Можно оплатить картой?"', answer: 'Can I pay by card', explain: 'Стандартный вопрос.' },
          { type: 'order', question: 'Put in order:', words: ['like', "I'd", 'soup', 'the', 'please'], answer: "I'd like the soup please", explain: 'I\'d like the soup, please.' },
          { type: 'correct', question: 'Find and correct: "Give me a coffee."', answer: 'Can I have a coffee please', explain: '"Give me" — грубо. Используйте "Can I have...?"' }
        ]}
      },
      {
        id: 'pcs-l5',
        topic: 'Направления и транспорт',
        objective: 'Спрашивать и давать направления, ориентироваться в городе.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Asking for and Giving Directions',
          text: 'When you\'re in a new city, knowing how to ask for and understand directions is essential.\n\n**Starting Polite:** Always begin with "Excuse me." Then ask:\n- "Excuse me, where is the station?"\n- "Excuse me, how do I get to the museum?"\n- "Excuse me, is there a pharmacy near here?"\n\n**Direction Words:**\n- "Go straight ahead" — continue forward\n- "Turn left" / "Turn right" — change direction\n- "Take the first/second street on the left"\n- "Go past the bank" — continue beyond\n\n**Prepositions of Place:**\n- "next to" / "beside" — рядом\n- "across from" / "opposite" — напротив\n- "between" — между\n- "behind" — позади\n- "in front of" — перед\n- "on the corner of" — на углу\n\n**Distance and Time:**\n- "Is it far?" / "Is it far from here?"\n- "It\'s about 5 minutes on foot"\n- "It\'s a 10-minute walk"\n- "It\'s not far" / "It\'s quite close"\n\n**Transport:**\n- Bus, train, taxi, subway (US) / underground (UK)\n- "How do I get to...?" — как добраться\n- UK: "single" (one-way) / "return" (round-trip)\n- "Departure" / "Arrival"\n- "How long does it take?" — сколько занимает\n\nRemember: it\'s always OK to ask for directions!',
          vocab: [
            { word: 'Excuse me, where is...?', trans: 'Извините, где...?' },
            { word: 'Go straight ahead', trans: 'Идите прямо' },
            { word: 'Turn left / right', trans: 'Поверните налево / направо' },
            { word: 'next to / across from', trans: 'Рядом / напротив' },
            { word: 'Is it far?', trans: 'Это далеко?' },
            { word: 'How do I get to...?', trans: 'Как добраться до...?' },
            { word: 'single / return', trans: 'В одну сторону / туда-обратно' },
            { word: 'How long does it take?', trans: 'Сколько времени занимает?' }
          ]
        },
        video: { slides: [
          { emoji: '🧭', title: 'Starting polite', text: '"Excuse me, where is the station?" — всегда с "Excuse me".' },
          { emoji: '⬆️', title: 'Go straight', text: '"Go straight ahead" = идите прямо.' },
          { emoji: '⬅️', title: 'Turn left / right', text: '"Turn left at the second street."' },
          { emoji: '📍', title: 'Prepositions', text: 'next to, across from, between, behind, in front of.' },
          { emoji: '🚶', title: 'Distance', text: '"Is it far?" — "No, about 5 minutes on foot."' },
          { emoji: '🚌', title: 'Transport', text: 'Bus, train, taxi, subway. "How do I get to...?"' },
          { emoji: '🎫', title: 'Tickets', text: 'UK: single / return. US: one-way / round-trip.' },
          { emoji: '⏱️', title: 'Duration', text: '"How long does it take?" — "About 20 minutes by bus."' }
        ]},
        quiz: { pool: [
          { q: 'How do you politely ask for directions?', options: ['Where is it?', 'Excuse me, where is the station?', 'Tell me where', 'Station where?'], answer: 1, explain: 'Начинайте с "Excuse me".' },
          { q: 'What does "go straight ahead" mean?', options: ['Turn around', 'Continue forward', 'Stop here', 'Go back'], answer: 1, explain: '"Go straight ahead" = вперёд.' },
          { q: 'Complete: "The bank is ___ the post office."', options: ['next to', 'go', 'turn', 'straight'], answer: 0, explain: '"Next to" = рядом.' },
          { q: 'What does "across from" mean?', options: ['Next to', 'Opposite', 'Behind', 'Between'], answer: 1, explain: '"Across from" = напротив.' },
          { q: 'How do you ask about distance?', options: ['How long is it?', 'Is it far from here?', 'Where is it far?', 'How distance?'], answer: 1, explain: '"Is it far from here?"' },
          { q: 'What does "between" mean?', options: ['Beside', 'In the middle of two things', 'Behind', 'In front of'], answer: 1, explain: '"Between" = между.' },
          { q: 'Complete: "Turn ___ at the second street."', options: ['straight', 'left', 'ahead', 'between'], answer: 1, explain: '"Turn left/right".' },
          { q: 'What should you say before asking a stranger?', options: ['Hello there', 'Excuse me', 'Hey you', 'Listen'], answer: 1, explain: '"Excuse me".' },
          { q: 'British English for "one-way ticket"?', options: ['Single', 'Return', 'One-way', 'Round-trip'], answer: 0, explain: 'UK: "single".' },
          { q: 'Complete: "How ___ does it take?"', options: ['much', 'long', 'far', 'time'], answer: 1, explain: '"How long does it take?"' },
          { q: 'US word for "underground"?', options: ['Metro', 'Subway', 'Tube', 'Tram'], answer: 1, explain: 'US: "subway".' },
          { q: 'What does "return ticket" mean in UK?', options: ['One-way', 'Round-trip', 'Free', 'Canceled'], answer: 1, explain: 'UK: "return" = туда-обратно.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ me, where is the station?"', answer: 'Excuse', explain: '"Excuse me".' },
          { type: 'fill-blank', question: 'Complete: "Go ___ ahead and turn left."', answer: 'straight', explain: '"Go straight ahead".' },
          { type: 'choice', question: 'What does "across from" mean?', options: ['Next to', 'Opposite', 'Behind', 'Between'], answer: 1, explain: '"Across from" = напротив.' },
          { type: 'translate', question: 'Переведите: "Это далеко отсюда?"', answer: 'Is it far from here', explain: 'Вопрос о расстоянии.' },
          { type: 'order', question: 'Put in order:', words: ['the', 'is', 'bank', 'where'], answer: 'where is the bank', explain: 'Where is the bank?' },
          { type: 'correct', question: 'Find and correct: "Turn left the second street."', answer: 'Turn left at the second street', explain: 'Нужен предлог "at".' }
        ]}
      },
      {
        id: 'pcs-l6',
        topic: 'Past Simple и рассказы о прошлом',
        objective: 'Рассказывать о прошлых событиях, используя Past Simple.',
        estimatedTime: '55 минут',
        reading: {
          title: 'The Past Simple Tense — Telling Stories',
          text: 'The Past Simple describes completed actions in the past. It\'s the tense you need to tell stories and describe what happened.\n\n**Regular Verbs:** Add -ed: work → worked, play → played, live → lived, study → studied.\n- Verbs ending in -e: add -d (live → lived)\n- Consonant + y: change y to i, add -ed (study → studied)\n- Vowel + y: just add -ed (play → played)\n- CVC: double the consonant (stop → stopped)\n\n**Irregular Verbs:** Must memorize! go → went, have → had, do → did, make → made, see → saw, eat → ate, take → took, buy → bought, find → found, tell → told.\n\n**Negative:** Use "didn\'t" + base form for ALL subjects: "I didn\'t go," "She didn\'t eat." Note: no -ed after "didn\'t" — always base form!\n\n**Questions:** "Did" + subject + base form: "Did you go?" "Did she eat?" Again, base form after "did."\n\n**Wh- Questions:** "Where did you go?" "What did you do?" "When did she arrive?"\n\n**Time Expressions:** yesterday, last week/month/year, two days ago, in 2020.\n\n**To Be in Past:** was/were. I/he/she/it → was. You/we/they → were. "I was happy." "They were tired."\n\n**Telling a Story:** "Last weekend, I went to the park. I met my friends. We played football. It was a great day!"\n\nPractice: write about your last weekend using Past Simple!',
          vocab: [
            { word: 'worked / played / lived', trans: 'Правильные глаголы (+-ed)' },
            { word: 'went / had / did / made', trans: 'Неправильные глаголы' },
            { word: 'didn\'t + base verb', trans: 'Отрицание' },
            { word: 'Did + subject + base verb?', trans: 'Вопрос' },
            { word: 'was / were', trans: 'Past формы "to be"' },
            { word: 'yesterday / last week', trans: 'Маркеры прошлого' },
            { word: 'I went to the park', trans: 'Я ходил в парк' },
            { word: 'What did you do?', trans: 'Что ты делал?' }
          ]
        },
        video: { slides: [
          { emoji: '⏪', title: 'Past Simple', text: 'Завершённые действия в прошлом. Для историй.' },
          { emoji: '✏️', title: 'Regular verbs', text: 'work → worked, live → lived, study → studied, stop → stopped.' },
          { emoji: '⚡', title: 'Irregular verbs', text: 'go → went, have → had, do → did, see → saw, eat → ate. Учить!' },
          { emoji: '🚫', title: 'Negative', text: 'didn\'t + базовая форма: "I didn\'t go." Без -ed!' },
          { emoji: '❓', title: 'Questions', text: 'Did you go? Did she eat? Базовая форма после "did"!' },
          { emoji: '📅', title: 'Time markers', text: 'yesterday, last week, two days ago, in 2020.' },
          { emoji: '👤', title: 'was / were', text: 'I/he/she/it → was. You/we/they → were.' },
          { emoji: '📖', title: 'Storytelling', text: 'Last weekend I went to the park. I met friends. It was great!' }
        ]},
        quiz: { pool: [
          { q: 'Complete: "Yesterday I ___ to the cinema."', options: ['go', 'goed', 'went', 'gone'], answer: 2, explain: 'go → went.' },
          { q: 'Complete: "She ___ TV when I called."', options: ['watch', 'watched', 'watching', 'watches'], answer: 1, explain: 'watch → watched.' },
          { q: 'Past form of "have"?', options: ['haved', 'had', 'has', 'having'], answer: 1, explain: 'have → had.' },
          { q: 'Complete: "I ___ not go to work yesterday."', options: ['did', 'do', 'was', 'had'], answer: 0, explain: 'didn\'t = did not.' },
          { q: 'Complete: "___ you have breakfast?"', options: ['Did', 'Do', 'Was', 'Had'], answer: 0, explain: 'Did you have...?' },
          { q: 'What is the past of "study"?', options: ['studyed', 'studied', 'studyd', 'studys'], answer: 1, explain: 'consonant+y → -ied.' },
          { q: 'Complete: "They ___ happy yesterday."', options: ['was', 'were', 'is', 'are'], answer: 1, explain: 'С "they" — were.' },
          { q: 'Past of "go"?', options: ['goed', 'went', 'gone', 'going'], answer: 1, explain: 'go → went.' },
          { q: 'Complete: "She didn\'t ___ meat."', options: ['ate', 'eat', 'eats', 'eating'], answer: 1, explain: 'После didn\'t — базовая форма.' },
          { q: 'Past of "see"?', options: ['seed', 'saw', 'seen', 'seeing'], answer: 1, explain: 'see → saw.' },
          { q: 'Complete: "What ___ you do last weekend?"', options: ['did', 'do', 'were', 'had'], answer: 0, explain: 'What did you do?' },
          { q: 'Past of "stop"?', options: ['stoped', 'stopped', 'stoppped', 'stopt'], answer: 1, explain: 'CVC → double: stopped.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Past form: "go" → ___', answer: 'went', explain: 'go → went.' },
          { type: 'fill-blank', question: 'Complete: "I didn\'t ___ to school yesterday."', answer: 'go', explain: 'После didn\'t — базовая форма.' },
          { type: 'choice', question: 'Choose the correct past form:', options: ['studyed', 'studied', 'studyd', 'studys'], answer: 1, explain: 'consonant+y → -ied.' },
          { type: 'translate', question: 'Переведите: "Вчера я ходил в парк."', answer: 'Yesterday I went to the park', explain: 'go → went.' },
          { type: 'order', question: 'Put in order:', words: ['did', 'what', 'do', 'you', 'yesterday'], answer: 'what did you do yesterday', explain: 'Wh- + did + subject + verb.' },
          { type: 'correct', question: 'Find and correct: "Did she went home?"', answer: 'Did she go home', explain: 'После "Did" — базовая форма!' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_1 = COURSE;
})(window);
