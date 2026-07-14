/* ============================================================
   AES Paid Course 3: Мастерство IELTS (B2-C2)
   6 lessons × ~55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-exam',
    title: 'Мастерство IELTS',
    price: 4000,
    oldPrice: 7990,
    level: 'B2–C2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'lavender',
    art: ['#E0E8F2', '#C2D2E8'],
    tagline: 'Подготовка к баллу 7+ с детальным разбором всех секций IELTS. 6 модулей с стратегиями и практикой.',
    lessons: [
      {
        id: 'pce-l1',
        topic: 'Структура IELTS и стратегии',
        objective: 'Понимать формат экзамена и стратегии подготовки.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Understanding the IELTS Exam Structure',
          text: 'The IELTS (International English Language Testing System) is one of the most widely recognized English proficiency tests in the world. It is accepted by over 11,000 organizations across more than 140 countries.\n\nThe exam has four sections: Listening, Reading, Writing, and Speaking. The total test time is approximately 2 hours and 45 minutes.\n\n**Listening:** This section lasts 40 minutes and contains 40 questions. You will hear four recordings, each played only once. The recordings include conversations and monologues in everyday and academic contexts.\n\n**Reading:** This section lasts 60 minutes and contains 40 questions. There are three passages of increasing difficulty. The texts come from books, journals, magazines, and newspapers.\n\n**Writing:** This section lasts 60 minutes and has two tasks. Task 1 requires you to describe visual information in at least 150 words (20 minutes). Task 2 requires you to write an essay of at least 250 words (40 minutes).\n\n**Speaking:** This section lasts 11-14 minutes and has three parts: an interview, a long turn, and a discussion. It is a face-to-face interview with a certified examiner.\n\n**Scoring:** Each section is scored from 0 to 9. Your overall band score is the average of the four sections, rounded to the nearest half band. For example, if your scores are 7, 6.5, 7, and 7.5, the average is 7.0.\n\n**Academic vs General Training:** The Academic module is for university admission and professional registration. The General Training module is for migration to countries like Australia, Canada, New Zealand, or the UK. Listening and Speaking are identical in both modules. Reading and Writing differ.\n\n**Band Requirements:** Most universities require a band score of 6.0 to 7.5. Top universities often ask for 7.0 or higher. Always check the specific requirements of your target institution.\n\nThe key to success is understanding the format, practicing regularly, and developing targeted strategies for each section.',
          textRu: 'IELTS (International English Language Testing System) — один из самых признанных в мире тестов на знание английского языка. Он принимается более чем 11 000 организаций в более чем 140 странах.\n\nЭкзамен состоит из четырёх секций: Аудирование (Listening), Чтение (Reading), Письмо (Writing) и Говорение (Speaking). Общее время теста — примерно 2 часа 45 минут.\n\n**Аудирование (Listening):** Эта секция длится 40 минут и содержит 40 вопросов. Вы услышите четыре аудиозаписи, каждая проигрывается только один раз. Записи включают диалоги и монологи в повседневных и академических контекстах.\n\n**Чтение (Reading):** Эта секция длится 60 минут и содержит 40 вопросов. Предлагаются три текста возрастающей сложности. Тексты взяты из книг, журналов, газет и других источников.\n\n**Письмо (Writing):** Эта секция длится 60 минут и содержит два задания. Task 1 требует описать визуальную информацию минимум в 150 словах (20 минут). Task 2 требует написать эссе минимум в 250 словах (40 минут).\n\n**Говорение (Speaking):** Эта секция длится 11-14 минут и состоит из трёх частей: интервью, развёрнутый ответ и обсуждение. Это личное собеседование с сертифицированным экзаменатором.\n\n**Оценивание:** Каждая секция оценивается от 0 до 9. Общий балл (overall band score) — это среднее четырёх секций, округлённое до ближайшего половинного балла. Например, если ваши баллы 7, 6.5, 7 и 7.5, среднее — 7.0.\n\n**Academic vs General Training:** Модуль Academic предназначен для поступления в университеты и профессиональной регистрации. Модуль General Training — для миграции в такие страны, как Австралия, Канада, Новая Зеландия или Великобритания. Секции Listening и Speaking одинаковы для обоих модулей. Reading и Writing различаются.\n\n**Требования к баллам:** Большинство университетов требуют балл 6.0–7.5. Топовые университеты часто просят 7.0 или выше. Всегда проверяйте конкретные требования вашего учебного заведения.\n\nКлюч к успеху — понимание формата, регулярная практика и разработка целевых стратегий для каждой секции.',
          vocab: [
            { word: 'IELTS', trans: 'Международный экзамен по английскому' },
            { word: 'Listening / Reading / Writing / Speaking', trans: 'Четыре секции экзамена' },
            { word: 'band score', trans: 'Балл от 0 до 9' },
            { word: 'Academic / General Training', trans: 'Два модуля экзамена' },
            { word: '40 questions', trans: 'Количество вопросов в Listening и Reading' },
            { word: 'overall band score', trans: 'Общий балл (среднее четырёх секций)' },
            { word: 'face-to-face interview', trans: 'Личное собеседование' },
            { word: 'half band', trans: 'Половинный балл (например, 6.5)' }
          ]
        },
        video: { slides: [
          { emoji: '🎓', title: 'IELTS', text: 'Международный экзамен, принимается в 140+ странах.' },
          { emoji: '👂', title: 'Listening', text: '40 минут, 40 вопросов, 4 записи. Прослушивание один раз!' },
          { emoji: '📖', title: 'Reading', text: '60 минут, 40 вопросов, 3 текста возрастающей сложности.' },
          { emoji: '✍️', title: 'Writing', text: '60 минут, 2 задания. Task 1 (150+ слов), Task 2 (250+ слов).' },
          { emoji: '🗣️', title: 'Speaking', text: '11-14 минут, 3 части. Личное интервью с экзаменатором.' },
          { emoji: '📊', title: 'Band score', text: 'Каждая секция оценивается от 0 до 9.' },
          { emoji: '🎯', title: 'Academic vs General', text: 'Academic для учёбы, General для миграции.' },
          { emoji: '🏆', title: 'Overall score', text: 'Средний балл по 4 секциям, округлённый до 0.5.' }
        ]},
        quiz: { pool: [
          { q: 'How many sections does the IELTS exam have?', options: ['3', '4', '5', '6'], answer: 1, explain: 'IELTS имеет 4 секции: Listening, Reading, Writing, Speaking.' },
          { q: 'How long is the Listening section?', options: ['30 minutes', '40 minutes', '60 minutes', '20 minutes'], answer: 1, explain: 'Listening длится 40 минут.' },
          { q: 'How many questions are in the Reading section?', options: ['30', '40', '50', '60'], answer: 1, explain: 'Reading содержит 40 вопросов.' },
          { q: 'How many tasks are in the Writing section?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Writing имеет 2 задания: Task 1 и Task 2.' },
          { q: 'How long does the Speaking section last?', options: ['5-10 minutes', '11-14 minutes', '15-20 minutes', '25-30 minutes'], answer: 1, explain: 'Speaking длится 11-14 минут.' },
          { q: 'What is the maximum band score?', options: ['8', '9', '10', '100'], answer: 1, explain: 'Максимальный балл — 9.' },
          { q: 'Which module is for university admission?', options: ['General Training', 'Academic', 'Both', 'Neither'], answer: 1, explain: 'Academic модуль — для поступления в университет.' },
          { q: 'How is the overall band score calculated?', options: ['Sum of all sections', 'Average of four sections', 'Highest section score', 'Lowest section score'], answer: 1, explain: 'Общий балл — среднее четырёх секций.' },
          { q: 'Which sections are the same for Academic and General?', options: ['Reading and Writing', 'Listening and Speaking', 'Writing and Speaking', 'Reading and Listening'], answer: 1, explain: 'Listening и Speaking одинаковы для обоих модулей.' },
          { q: 'How many recordings are in the Listening section?', options: ['3', '4', '5', '6'], answer: 1, explain: 'В Listening 4 записи.' },
          { q: 'What is the minimum word count for Writing Task 2?', options: ['150 words', '200 words', '250 words', '300 words'], answer: 2, explain: 'Task 2 — минимум 250 слов.' },
          { q: 'How many passages are in the Reading section?', options: ['2', '3', '4', '5'], answer: 1, explain: 'В Reading 3 отрывка.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "IELTS has ___ sections."', answer: '4', explain: 'IELTS имеет 4 секции.' },
          { type: 'fill-blank', question: 'Complete: "The Listening section has ___ questions."', answer: '40', explain: 'Listening и Reading — по 40 вопросов.' },
          { type: 'choice', question: 'Which module is for university admission?', options: ['Academic', 'General Training', 'Both', 'Neither'], answer: 0, explain: 'Academic — для учёбы.' },
          { type: 'translate', question: 'Переведите: "Общий балл"', answer: 'overall band score', explain: 'Среднее по всем секциям.' },
          { type: 'order', question: 'Put the words in order:', words: ['score', 'band', 'overall'], answer: 'overall band score', explain: 'overall band score — общий балл.' },
          { type: 'correct', question: 'Find and correct: "IELTS has 3 sections."', answer: 'IELTS has 4 sections', explain: 'IELTS имеет 4 секции, а не 3.' }
        ]}
      },
      {
        id: 'pce-l2',
        topic: 'Reading Section Mastery',
        objective: 'Освоить стратегии чтения для максимального балла.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Mastering the IELTS Reading Section',
          text: 'The Reading section of IELTS is often considered one of the most challenging parts of the exam. It tests your ability to understand main ideas, find specific information, and follow logical arguments.\n\n**Structure:** The Academic Reading section has three passages with a total of 40 questions. You have 60 minutes to complete all three passages. The General Training Reading has three sections with 40 questions total, but the texts are shorter and less complex.\n\n**Question Types:** The Reading section includes several types of questions. You will encounter multiple choice, True/False/Not Given (T/F/NG), Yes/No/Not Given (based on the writer\'s views), matching headings to paragraphs, matching information, matching sentence endings, sentence completion (gap fill), summary completion, diagram label completion, and short-answer questions.\n\n**Skimming:** This means reading quickly to get the main idea. Read the title, headings, and the first and last sentences of each paragraph. This gives you a general understanding of the text in about 2-3 minutes.\n\n**Scanning:** This means looking for specific information such as names, dates, numbers, or keywords. Move your eyes quickly across the text to find the exact information you need without reading every word.\n\n**Time Management:** This is absolutely crucial! Spend about 20 minutes per passage. Never spend too much time on one single question. If a question is difficult, mark it, move on, and return to it later if time allows.\n\n**Key Strategy:** Always read the questions BEFORE you read the passage. Underline keywords in the questions so you know exactly what to look for. Remember that answers usually appear in order in the text.\n\n**Common Mistakes:** Do not try to read every word carefully. Do not leave blank answers — there is no penalty for wrong answers, so always guess! Do not spend more than 20 minutes on one passage.\n\nPractice with timed exercises regularly to build your speed and accuracy.',
          textRu: 'Секция Reading (Чтение) IELTS часто считается одной из самых сложных частей экзамена. Она проверяет вашу способность понимать главные идеи, находить конкретную информацию и следить за логическими аргументами.\n\n**Структура:** Секция Academic Reading содержит три текста с общим количеством 40 вопросов. У вас есть 60 минут на все три текста. Секция General Training Reading содержит три части с 40 вопросами, но тексты короче и проще.\n\n**Типы вопросов:** Секция Reading включает несколько типов вопросов. Вы встретите multiple choice (выбор ответа), True/False/Not Given (T/F/NG), Yes/No/Not Given (на основе взглядов автора), matching headings to paragraphs (сопоставление заголовков), matching information, matching sentence endings, sentence completion (заполнение пропусков), summary completion, diagram label completion и short-answer questions.\n\n**Skimming (просмотр):** Это означает быстрое чтение для понимания основной идеи. Читайте заголовок, подзаголовки, первое и последнее предложения каждого абзаца. Это даёт общее понимание текста примерно за 2-3 минуты.\n\n**Scanning (поиск):** Это означает поиск конкретной информации — имён, дат, чисел или ключевых слов. Быстро просматривайте текст, чтобы найти нужную информацию, не читая каждое слово.\n\n**Управление временем:** Это абсолютно критично! Тратьте около 20 минут на каждый текст. Никогда не тратьте слишком много времени на один вопрос. Если вопрос сложный, отметьте его, двигайтесь дальше и вернитесь позже, если позволит время.\n\n**Ключевая стратегия:** Всегда читайте вопросы ДО чтения текста. Подчёркивайте ключевые слова в вопросах, чтобы точно знать, что искать. Помните, что ответы обычно идут по порядку в тексте.\n\n**Частые ошибки:** Не пытайтесь читать каждое слово внимательно. Не оставляйте пустые ответы — за неверные ответы нет штрафа, поэтому всегда угадывайте! Не тратьте больше 20 минут на один текст.\n\nПрактикуйтесь с заданиями на время регулярно, чтобы повысить скорость и точность.',
          vocab: [
            { word: 'passage', trans: 'Отрывок текста' },
            { word: 'skimming', trans: 'Быстрое чтение для основной идеи' },
            { word: 'scanning', trans: 'Поиск конкретной информации' },
            { word: 'True / False / Not Given', trans: 'Тип вопроса (верно/неверно/нет данных)' },
            { word: 'matching headings', trans: 'Сопоставление заголовков' },
            { word: 'gap fill / sentence completion', trans: 'Заполнение пропусков' },
            { word: 'keyword', trans: 'Ключевое слово' },
            { word: 'time management', trans: 'Управление временем' }
          ]
        },
        video: { slides: [
          { emoji: '📖', title: 'Reading section', text: '3 отрывка, 40 вопросов, 60 минут.' },
          { emoji: '❓', title: 'Question types', text: 'Multiple choice, T/F/NG, matching, gap fill, short-answer.' },
          { emoji: '⚡', title: 'Skimming', text: 'Быстрое чтение для основной идеи. 2-3 минуты на отрывок.' },
          { emoji: '🔍', title: 'Scanning', text: 'Поиск конкретной информации: имена, даты, числа.' },
          { emoji: '⏱️', title: 'Time management', text: '20 минут на каждый отрывок. Не застревайте!' },
          { emoji: '📝', title: 'Read questions first', text: 'Читайте вопросы ДО текста. Подчёркивайте ключевые слова.' },
          { emoji: '✏️', title: 'Answer in order', text: 'Ответы обычно идут по порядку в тексте.' },
          { emoji: '✅', title: 'No penalty', text: 'За неверные ответы штрафа нет! Всегда угадывайте.' }
        ]},
        quiz: { pool: [
          { q: 'How many passages are in the Academic Reading section?', options: ['2', '3', '4', '5'], answer: 1, explain: 'В Academic Reading 3 отрывка.' },
          { q: 'How many questions are in the Reading section?', options: ['30', '40', '50', '60'], answer: 1, explain: 'Reading содержит 40 вопросов.' },
          { q: 'What does skimming mean?', options: ['Reading every word', 'Reading quickly for the main idea', 'Looking for specific numbers', 'Reading aloud'], answer: 1, explain: 'Skimming — быстрое чтение для основной идеи.' },
          { q: 'What does scanning mean?', options: ['Reading slowly', 'Looking for specific information', 'Writing notes', 'Translating the text'], answer: 1, explain: 'Scanning — поиск конкретной информации.' },
          { q: 'How much time should you spend per passage?', options: ['10 minutes', '15 minutes', 'About 20 minutes', '30 minutes'], answer: 2, explain: 'Около 20 минут на каждый отрывок.' },
          { q: 'What should you read BEFORE the passage?', options: ['The conclusion', 'The questions', 'Other passages', 'The answer sheet'], answer: 1, explain: 'Читайте вопросы ДО текста.' },
          { q: 'Is there a penalty for wrong answers in Reading?', options: ['Yes, minus 1 point', 'No', 'Yes, minus 0.5', 'Only for blank answers'], answer: 1, explain: 'Штрафа за неверные ответы нет.' },
          { q: 'What does T/F/NG stand for?', options: ['True/False/Not Given', 'Text/Form/Number', 'True/Fake/No Guess', 'Task/File/New Grade'], answer: 0, explain: 'T/F/NG = True/False/Not Given.' },
          { q: 'What should you do if a question is difficult?', options: ['Spend 5 minutes on it', 'Move on and return later', 'Skip the whole passage', 'Give up'], answer: 1, explain: 'Отметьте и вернитесь позже.' },
          { q: 'In what order do answers usually appear?', options: ['Random order', 'In reverse order', 'In order in the text', 'Alphabetical order'], answer: 2, explain: 'Ответы обычно идут по порядку в тексте.' },
          { q: 'What should you do with keywords in questions?', options: ['Ignore them', 'Underline them', 'Erase them', 'Translate them'], answer: 1, explain: 'Подчёркивайте ключевые слова в вопросах.' },
          { q: 'What should you NEVER do in the Reading section?', options: ['Guess answers', 'Skim the text', 'Leave blank answers', 'Use scanning'], answer: 2, explain: 'Никогда не оставляйте пустые ответы!' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "The Reading section has ___ passages."', answer: '3', explain: 'В Academic Reading 3 отрывка.' },
          { type: 'fill-blank', question: 'Complete: "Spend about ___ minutes per passage."', answer: '20', explain: 'Около 20 минут на отрывок.' },
          { type: 'choice', question: 'What does skimming mean?', options: ['Reading every word', 'Reading quickly for the main idea', 'Looking for specific numbers', 'Reading aloud'], answer: 1, explain: 'Skimming — быстрое чтение для основной идеи.' },
          { type: 'translate', question: 'Переведите: "Управление временем"', answer: 'time management', explain: 'time management — управление временем.' },
          { type: 'order', question: 'Put the words in order:', words: ['first', 'read', 'questions'], answer: 'read questions first', explain: 'Сначала читайте вопросы.' },
          { type: 'correct', question: 'Find and correct: "There is a penalty for wrong answers."', answer: 'There is no penalty for wrong answers', explain: 'Штрафа за неверные ответы нет.' }
        ]}
      },
      {
        id: 'pce-l3',
        topic: 'Listening Section Mastery',
        objective: 'Развить навыки аудирования для IELTS.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Mastering the IELTS Listening Section',
          text: 'The Listening section of IELTS tests your ability to understand spoken English in various contexts. Unlike Reading, you hear each recording only once — so concentration is absolutely essential!\n\n**Structure:** The Listening section has four parts with a total of 40 questions. The entire section lasts about 40 minutes. For paper-based tests, you get an additional 10 minutes to transfer your answers to the answer sheet.\n\n**Section 1:** A conversation between two people in an everyday social situation, such as booking a hotel or asking for directions. This is generally the easiest section.\n\n**Section 2:** A monologue in an everyday social situation, such as a tour guide speaking or a radio broadcast.\n\n**Section 3:** A conversation between two or more people in an educational or training context, such as a student discussing a project with a tutor.\n\n**Section 4:** A monologue on an academic subject, such as a university lecture. This is the most difficult section.\n\n**Key Strategies:**\n\nFirst, read ahead. Before each recording starts, read the questions carefully. This helps you predict what you will hear and what type of answer you need.\n\nSecond, predict answers. Try to guess whether you need a name, a number, a date, or a noun before the recording begins.\n\nThird, watch for distractors. Speakers often mention something and then correct themselves. Listen for words like "actually," "sorry," "I mean," or "well" — these signal a possible change in the answer.\n\nFourth, spelling matters. Incorrect spelling means a wrong answer, even if you heard the correct word. Practice spelling common names, places, and academic vocabulary.\n\n**Common Accents:** IELTS uses British, American, Australian, and New Zealand accents. Make sure you practice listening to all of them regularly so that no accent surprises you on test day.\n\n**Answer Format:** For paper-based tests, you get 10 minutes at the end to transfer your answers to the answer sheet. For computer-based tests, you type your answers directly — there is no separate transfer time.\n\nRemember: you only hear each recording once. Stay focused from start to finish and never lose concentration!',
          textRu: 'Секция Listening (Аудирование) IELTS проверяет вашу способность понимать устную английскую речь в различных контекстах. В отличие от Reading, вы слышите каждую запись только один раз — поэтому концентрация абсолютно необходима!\n\n**Структура:** Секция Listening состоит из четырёх частей с общим количеством 40 вопросов. Вся секция длится около 40 минут. Для бумажного теста вы получаете дополнительные 10 минут на перенос ответов в бланк.\n\n**Section 1:** Диалог между двумя людьми в повседневной социальной ситуации, например бронирование отеля или спрашивание дороги. Это обычно самая лёгкая часть.\n\n**Section 2:** Монолог в повседневной социальной ситуации, например речь экскурсовода или радиопередача.\n\n**Section 3:** Диалог между двумя или более людьми в образовательном или учебном контексте, например обсуждение студентом проекта с преподавателем.\n\n**Section 4:** Монолог на академическую тему, например университетская лекция. Это самая сложная часть.\n\n**Ключевые стратегии:**\n\nВо-первых, читайте заранее. Перед началом каждой записи внимательно читайте вопросы. Это помогает предугадать, что вы услышите и какой тип ответа нужен.\n\nВо-вторых, предугадывайте ответы. Попробуйте угадать, понадобится ли вам имя, число, дата или существительное до начала записи.\n\nВ-третьих, остерегайтесь ловушек (distractors). Спикеры часто упоминают что-то, а затем исправляются. Слушайте слова вроде "actually," "sorry," "I mean," или "well" — они сигнализируют о возможном изменении ответа.\n\nВ-четвёртых, орфография важна. Неправильное написание означает неверный ответ, даже если вы услышали правильное слово. Практикуйте написание распространённых имён, мест и академической лексики.\n\n**Акценты:** IELTS использует британский, американский, австралийский и новозеландский акценты. Обязательно практикуйтесь в восприятии всех их регулярно, чтобы никакой акцент не удивил вас в день экзамена.\n\n**Формат ответов:** Для бумажного теста вы получаете 10 минут в конце для переноса ответов в бланк. Для компьютерного теста вы вводите ответы напрямую — отдельного времени на перенос нет.\n\nПомните: вы слышите каждую запись только один раз. Сохраняйте концентрацию от начала до конца и никогда не отвлекайтесь!',
          vocab: [
            { word: 'recording', trans: 'Аудиозапись' },
            { word: 'monologue / conversation', trans: 'Монолог / диалог' },
            { word: 'read ahead', trans: 'Читать вопросы заранее' },
            { word: 'predict', trans: 'Предугадывать ответ' },
            { word: 'distractor', trans: 'Отвлекающий ответ (ловушка)' },
            { word: 'spelling', trans: 'Орфография (важна!)' },
            { word: 'transfer answers', trans: 'Перенос ответов (10 минут)' },
            { word: 'accent', trans: 'Акцент (британский, американский и др.)' }
          ]
        },
        video: { slides: [
          { emoji: '🎧', title: 'Listening section', text: '4 части, 40 вопросов, 40 минут. Слушаете один раз!' },
          { emoji: '💬', title: 'Section 1', text: 'Бытовой диалог (отель, направление). Самый лёгкий.' },
          { emoji: '🎤', title: 'Section 2', text: 'Бытовой монолог (гид, радио).' },
          { emoji: '📚', title: 'Section 3', text: 'Образовательный диалог (студент и преподаватель).' },
          { emoji: '🎓', title: 'Section 4', text: 'Академическая лекция. Самый сложный!' },
          { emoji: '👀', title: 'Read ahead', text: 'Читайте вопросы ДО прослушивания. Предугадывайте!' },
          { emoji: '⚠️', title: 'Distractors', text: 'Спикер может исправить себя: "actually," "sorry," "I mean."' },
          { emoji: '✏️', title: 'Spelling', text: 'Неправильное написание = неверный ответ. Практикуйтесь!' }
        ]},
        quiz: { pool: [
          { q: 'How many times do you hear each recording?', options: ['Once', 'Twice', 'Three times', 'Unlimited'], answer: 0, explain: 'Каждую запись слушаете один раз.' },
          { q: 'How many sections are in the Listening test?', options: ['3', '4', '5', '6'], answer: 1, explain: 'В Listening 4 части.' },
          { q: 'Which section is generally the easiest?', options: ['Section 1', 'Section 2', 'Section 3', 'Section 4'], answer: 0, explain: 'Section 1 — самый лёгкий.' },
          { q: 'Which section is a monologue on an academic subject?', options: ['Section 1', 'Section 2', 'Section 3', 'Section 4'], answer: 3, explain: 'Section 4 — академическая лекция, самый сложный.' },
          { q: 'What should you do before each recording?', options: ['Close your eyes', 'Read the questions', 'Write notes', 'Talk to the examiner'], answer: 1, explain: 'Читайте вопросы перед прослушиванием.' },
          { q: 'What is a distractor?', options: ['A correct answer', 'An answer that seems correct but is wrong', 'A type of question', 'A recording device'], answer: 1, explain: 'Distractor — ловушка, ответ кажется верным, но неверен.' },
          { q: 'What happens if you spell a word incorrectly?', options: ['Half credit', 'It is marked wrong', 'The examiner asks again', 'Nothing'], answer: 1, explain: 'Неправильная орфография = неверный ответ.' },
          { q: 'How much transfer time do you get (paper-based)?', options: ['2 minutes', '5 minutes', '10 minutes', '15 minutes'], answer: 2, explain: '10 минут на перенос ответов.' },
          { q: 'Which accents are used in IELTS Listening?', options: ['Only British', 'Only American', 'British, American, Australian, New Zealand', 'Only Australian'], answer: 2, explain: 'Используются британский, американский, австралийский и новозеландский акценты.' },
          { q: 'What is Section 2?', options: ['A conversation', 'A monologue in an everyday situation', 'An academic lecture', 'A group discussion'], answer: 1, explain: 'Section 2 — бытовой монолог.' },
          { q: 'What signals a possible correction by the speaker?', options: ['Loud voice', 'Words like "actually" or "sorry"', 'Silence', 'Background noise'], answer: 1, explain: 'Слова "actually," "sorry," "I mean" сигнализируют исправление.' },
          { q: 'How many questions are in the Listening section?', options: ['30', '40', '50', '60'], answer: 1, explain: 'Listening содержит 40 вопросов.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "You hear each recording ___ time(s)."', answer: 'one', explain: 'Каждую запись слушаете один раз.' },
          { type: 'fill-blank', question: 'Complete: "Section ___ is the most difficult."', answer: '4', explain: 'Section 4 — самая сложная часть.' },
          { type: 'choice', question: 'What should you do before each recording?', options: ['Close your eyes', 'Read the questions', 'Write notes', 'Talk to the examiner'], answer: 1, explain: 'Читайте вопросы перед прослушиванием.' },
          { type: 'translate', question: 'Переведите: "Орфография важна"', answer: 'Spelling matters', explain: 'spelling matters — орфография важна.' },
          { type: 'order', question: 'Put the words in order:', words: ['the', 'read', 'first', 'questions'], answer: 'read the questions first', explain: 'Сначала читайте вопросы.' },
          { type: 'correct', question: 'Find and correct: "You hear each recording twice."', answer: 'You hear each recording once', explain: 'Каждую запись слушаете только один раз.' }
        ]}
      },
      {
        id: 'pce-l4',
        topic: 'Writing Task 1 (Academic)',
        objective: 'Писать сильные описания графиков и диаграмм.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Writing Task 1 (Academic) — Describing Visuals',
          text: 'Writing Task 1 (Academic) requires you to describe visual information in at least 150 words. You have 20 minutes to complete this task. It tests your ability to identify and describe the main features of charts, graphs, tables, maps, or diagrams.\n\n**Types of Visuals:** You may encounter line graphs showing trends over time, bar charts comparing quantities, pie charts showing proportions, tables organizing data, maps showing changes to a place, or process diagrams showing how something works.\n\n**Structure:** A strong Task 1 response has three main parts:\n\nFirst, the Introduction (1-2 sentences). Here you paraphrase the question. Describe what the visual shows without copying the exact wording from the prompt.\n\nSecond, the Overview (2-3 sentences). This is the MOST IMPORTANT part of your response! Identify the main trends, the highest and lowest values, and the most significant features. Do NOT include specific numbers here — focus on the big picture.\n\nThird, the Body Paragraphs (usually 2 paragraphs). Group the data logically and include specific numbers and details to support your overview. Compare and contrast information rather than just listing numbers.\n\n**Key Vocabulary for Trends:**\n- Increased / rose / went up — увеличилось\n- Decreased / fell / declined / dropped — уменьшилось\n- Peaked at — достигло максимума\n- Fluctuated — колебалось\n- Remained stable / stayed constant — оставалось стабильным\n- Doubled / halved — удвоилось / уменьшилось вдвое\n- A sharp rise / a gradual decline — резкий рост / постепенное снижение\n\n**Common Mistakes:** Writing less than 150 words, giving a personal opinion (Task 1 is factual, not opinion-based), copying the question wording exactly, forgetting the overview, and including too many numbers without any comparison or analysis.\n\n**Time Tip:** Spend the first 2-3 minutes understanding the visual and planning your response. Then write for about 15 minutes and leave 2-3 minutes at the end to check your work for grammar and spelling errors.\n\nRemember: the overview is essential for a high score. Always include it and make sure your body paragraphs support it with specific data!',
          textRu: 'Writing Task 1 (Academic) требует описать визуальную информацию минимум в 150 словах. У вас есть 20 минут на выполнение этого задания. Оно проверяет вашу способность определять и описывать главные особенности графиков, диаграмм, таблиц, карт или схем.\n\n**Типы визуальных материалов:** Вы можете встретить линейные графики, показывающие тенденции во времени; столбчатые диаграммы, сравнивающие количества; круговые диаграммы, показывающие пропорции; таблицы, организующие данные; карты, показывающие изменения места; или схемы процессов, показывающие, как что-то работает.\n\n**Структура:** Сильный ответ на Task 1 состоит из трёх главных частей:\n\nВо-первых, Введение (1-2 предложения). Здесь вы перефразируете вопрос. Опишите, что показывает визуальный материал, не копируя точную формулировку из задания.\n\nВо-вторых, Обзор (2-3 предложения). Это САМАЯ ВАЖНАЯ часть вашего ответа! Определите главные тенденции, самые высокие и низкие значения и наиболее значимые особенности. НЕ включайте конкретные числа здесь — сосредоточьтесь на общей картине.\n\nВ-третьих, Основные абзацы (обычно 2 абзаца). Сгруппируйте данные логически и включите конкретные числа и детали, подтверждающие ваш обзор. Сравнивайте и противопоставляйте информацию, а не просто перечисляйте числа.\n\n**Ключевая лексика для тенденций:**\n- Increased / rose / went up — увеличилось\n- Decreased / fell / declined / dropped — уменьшилось\n- Peaked at — достигло максимума\n- Fluctuated — колебалось\n- Remained stable / stayed constant — оставалось стабильным\n- Doubled / halved — удвоилось / уменьшилось вдвое\n- A sharp rise / a gradual decline — резкий рост / постепенное снижение\n\n**Частые ошибки:** Написание менее 150 слов, выражение личного мнения (Task 1 фактологический, а не основанный на мнении), точное копирование формулировки вопроса, забывание обзора и включение слишком большого количества чисел без сравнения или анализа.\n\n**Совет по времени:** Потратьте первые 2-3 минуты на понимание визуального материала и планирование ответа. Затем пишите около 15 минут и оставьте 2-3 минуты в конце на проверку грамматики и орфографии.\n\nПомните: обзор необходим для высокого балла. Всегда включайте его и убедитесь, что ваши основные абзацы подкрепляют его конкретными данными!',
          vocab: [
            { word: 'line graph / bar chart', trans: 'Линейный график / столбчатая диаграмма' },
            { word: 'pie chart / table', trans: 'Круговая диаграмма / таблица' },
            { word: 'overview', trans: 'Обзор (главные тенденции)' },
            { word: 'paraphrase', trans: 'Перефразировать (введение)' },
            { word: 'increased / decreased', trans: 'Увеличилось / уменьшилось' },
            { word: 'peaked / fluctuated', trans: 'Достигло пика / колебалось' },
            { word: 'sharp rise / gradual decline', trans: 'Резкий рост / постепенное снижение' },
            { word: 'remained stable', trans: 'Оставалось стабильным' }
          ]
        },
        video: { slides: [
          { emoji: '📊', title: 'Task 1', text: '150+ слов, 20 минут. Описание графиков и диаграмм.' },
          { emoji: '📈', title: 'Types of visuals', text: 'Line graphs, bar charts, pie charts, tables, maps, processes.' },
          { emoji: '📝', title: 'Structure', text: 'Introduction, Overview, Body paragraphs (3 части).' },
          { emoji: '👁️', title: 'Overview', text: 'САМАЯ важная часть! Главные тенденции без конкретных чисел.' },
          { emoji: '📉', title: 'Increased / decreased', text: 'rose, went up / fell, declined, dropped.' },
          { emoji: '📈', title: 'Peaked / fluctuated', text: 'Достигло максимума / колебалось.' },
          { emoji: '✅', title: 'Remained stable / doubled', text: 'Оставалось стабильным / удвоилось.' },
          { emoji: '⚠️', title: 'No personal opinion', text: 'Task 1 фактологический, не мнение!' }
        ]},
        quiz: { pool: [
          { q: 'How many words must you write in Task 1?', options: ['At least 100', 'At least 150', 'At least 200', 'At least 250'], answer: 1, explain: 'Task 1 — минимум 150 слов.' },
          { q: 'How much time do you have for Task 1?', options: ['10 minutes', '15 minutes', '20 minutes', '30 minutes'], answer: 2, explain: 'На Task 1 даётся 20 минут.' },
          { q: 'What is the most important part of Task 1?', options: ['The introduction', 'The overview', 'The body paragraphs', 'The conclusion'], answer: 1, explain: 'Overview — самая важная часть.' },
          { q: 'Should you give a personal opinion in Task 1?', options: ['Yes, always', 'No, it is factual', 'Only in the overview', 'Only in body paragraphs'], answer: 1, explain: 'Task 1 — фактологический, без мнения.' },
          { q: 'What does "paraphrase" mean?', options: ['Copy exactly', 'Rewrite in different words', 'Delete', 'Translate'], answer: 1, explain: 'Paraphrase — перефразировать своими словами.' },
          { q: 'Which word means "reached the highest point"?', options: ['Fluctuated', 'Peaked', 'Declined', 'Stabilized'], answer: 1, explain: 'Peaked — достигло пика.' },
          { q: 'What does "fluctuated" mean?', options: ['Went up only', 'Went down only', 'Went up and down', 'Stayed the same'], answer: 2, explain: 'Fluctuated — колебалось (вверх и вниз).' },
          { q: 'What should the overview include?', options: ['Specific numbers', 'Main trends, not specific numbers', 'Personal opinion', 'Every detail'], answer: 1, explain: 'В overview — главные тенденции, без конкретных чисел.' },
          { q: 'What does "remained stable" mean?', options: ['Went up', 'Went down', 'Stayed constant', 'Disappeared'], answer: 2, explain: 'Remained stable — оставалось стабильным.' },
          { q: 'How many body paragraphs are recommended?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Обычно 2 абзаца с деталями.' },
          { q: 'What is a common mistake in Task 1?', options: ['Writing the overview', 'Copying the question exactly', 'Using trend vocabulary', 'Paraphrasing'], answer: 1, explain: 'Копирование вопроса — частая ошибка.' },
          { q: 'What does "a sharp rise" mean?', options: ['A slow increase', 'A rapid increase', 'A decrease', 'No change'], answer: 1, explain: 'A sharp rise — резкий рост.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Task 1 requires at least ___ words."', answer: '150', explain: 'Task 1 — минимум 150 слов.' },
          { type: 'fill-blank', question: 'Complete: "The ___ is the most important part."', answer: 'overview', explain: 'Overview — самая важная часть.' },
          { type: 'choice', question: 'Should you include a personal opinion in Task 1?', options: ['Yes, always', 'No, it is factual', 'Only in the overview', 'Only in body paragraphs'], answer: 1, explain: 'Task 1 — фактологический, без личного мнения.' },
          { type: 'translate', question: 'Переведите: "Достигло пика"', answer: 'peaked', explain: 'peaked — достигло пика.' },
          { type: 'order', question: 'Put the words in order:', words: ['an', 'always', 'overview', 'include'], answer: 'always include an overview', explain: 'Всегда включайте overview.' },
          { type: 'correct', question: 'Find and correct: "Task 1 requires at least 100 words."', answer: 'Task 1 requires at least 150 words', explain: 'Минимум 150 слов, а не 100.' }
        ]}
      },
      {
        id: 'pce-l5',
        topic: 'Writing Task 2 (Essay)',
        objective: 'Писать убедительные эссе на 250+ слов.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Writing Task 2 — Crafting a Strong Essay',
          text: 'Writing Task 2 requires you to write an essay of at least 250 words in 40 minutes. This task carries more weight than Task 1 — it contributes twice as much to your overall Writing score. It tests your ability to present a clear, well-organized argument on a given topic.\n\n**Essay Types:**\n\nFirst, Opinion (Agree/Disagree). The question asks "Do you agree or disagree?" You must present your position clearly and support it with reasons and examples.\n\nSecond, Discussion. The question asks "Discuss both views and give your opinion." You must examine both sides of the argument before stating your own position.\n\nThird, Problem-Solution. The question asks about problems and solutions. You must identify problems and propose practical solutions.\n\nFourth, Advantage-Disadvantage. The question asks whether advantages outweigh disadvantages. You must weigh both sides and reach a clear conclusion.\n\n**Structure:** A strong essay has four parts. The Introduction (2-3 sentences) paraphrases the topic and states your thesis. Body Paragraph 1 (5-7 sentences) presents your first main point with a topic sentence, explanation, and example. Body Paragraph 2 (5-7 sentences) presents your second main point similarly. The Conclusion (2-3 sentences) summarizes your main points and restates your position without introducing new ideas.\n\n**Thesis Statement:** This is the most important sentence in your essay. It tells the reader your position clearly. Example: "I completely agree that education should be free for all."\n\n**Linking Words:** Use words like furthermore, moreover, however, nevertheless, in addition, on the other hand, consequently, and therefore to connect your ideas smoothly.\n\n**Common Mistakes:** Writing less than 250 words, having no clear thesis statement, introducing new ideas in the conclusion, using informal language or slang, and not answering the actual question asked.\n\n**Time Tip:** Spend the first 3-5 minutes planning your essay structure and key points. Write for about 30 minutes, then leave 3-5 minutes at the end to review your grammar, spelling, and word count.\n\nPlan your essay for 3-5 minutes before writing. A good plan leads to a better essay and helps you stay on topic!',
          textRu: 'Writing Task 2 требует написать эссе минимум в 250 словах за 40 минут. Это задание имеет больший вес, чем Task 1 — оно вносит в два раза больше в общий балл за Writing. Оно проверяет вашу способность представить чёткий, хорошо организованный аргумент на заданную тему.\n\n**Типы эссе:**\n\nВо-первых, Opinion (Agree/Disagree). Вопрос звучит как "Do you agree or disagree?" Вы должны чётко выразить свою позицию и подкрепить её причинами и примерами.\n\nВо-вторых, Discussion. Вопрос звучит как "Discuss both views and give your opinion." Вы должны рассмотреть обе точки зрения, прежде чем высказать свою.\n\nВ-третьих, Problem-Solution. Вопрос касается проблем и решений. Вы должны определить проблемы и предложить практические решения.\n\nВ-четвёртых, Advantage-Disadvantage. Вопрос звучит о том, перевешивают ли преимущества недостатки. Вы должны взвесить обе стороны и прийти к чёткому выводу.\n\n**Структура:** Сильное эссе состоит из четырёх частей. Введение (2-3 предложения) перефразирует тему и формулирует тезис. Основной абзац 1 (5-7 предложений) представляет вашу первую главную мысль с тематическим предложением, объяснением и примером. Основной абзац 2 (5-7 предложений) аналогично представляет вторую главную мысль. Заключение (2-3 предложения) резюмирует ваши главные мысли и подтверждает вашу позицию, не вводя новых идей.\n\n**Тезис (Thesis Statement):** Это самое важное предложение в эссе. Оно чётко сообщает читателю вашу позицию. Пример: "I completely agree that education should be free for all."\n\n**Слова-связки:** Используйте слова вроде furthermore, moreover, however, nevertheless, in addition, on the other hand, consequently и therefore для плавного соединения идей.\n\n**Частые ошибки:** Написание менее 250 слов, отсутствие чёткого тезиса, введение новых идей в заключении, использование неформального языка или сленга и неответ на заданный вопрос.\n\n**Совет по времени:** Потратьте первые 3-5 минут на планирование структуры эссе и ключевых мыслей. Пишите около 30 минут, затем оставьте 3-5 минут в конце на проверку грамматики, орфографии и количества слов.\n\nПланируйте эссе 3-5 минут перед написанием. Хороший план ведёт к лучшему эссе и помогает не отклоняться от темы!',
          vocab: [
            { word: 'essay', trans: 'Эссе (250+ слов)' },
            { word: 'thesis statement', trans: 'Тезис (главная позиция)' },
            { word: 'opinion / discussion', trans: 'Мнение / обсуждение' },
            { word: 'problem-solution', trans: 'Проблема и решение' },
            { word: 'advantage-disadvantage', trans: 'Преимущества и недостатки' },
            { word: 'body paragraph', trans: 'Абзац с аргументом' },
            { word: 'linking words', trans: 'Слова-связки (furthermore, however)' },
            { word: 'conclusion', trans: 'Заключение' }
          ]
        },
        video: { slides: [
          { emoji: '📝', title: 'Task 2', text: '250+ слов, 40 минут. Эссе. Весит в 2 раза больше Task 1!' },
          { emoji: '📋', title: 'Essay types', text: 'Opinion, Discussion, Problem-Solution, Advantage-Disadvantage.' },
          { emoji: '✏️', title: 'Structure', text: 'Introduction, 2 Body paragraphs, Conclusion.' },
          { emoji: '🎯', title: 'Thesis statement', text: 'Главная позиция. Самое важное предложение!' },
          { emoji: '🔗', title: 'Linking words', text: 'furthermore, moreover, however, nevertheless, therefore.' },
          { emoji: '❌', title: 'No new ideas in conclusion', text: 'Не добавляйте новые идеи в заключение.' },
          { emoji: '📖', title: 'Answer the question', text: 'Отвечайте именно на поставленный вопрос!' },
          { emoji: '🗒️', title: 'Plan first', text: 'Потратьте 3-5 минут на план. Лучший план = лучшее эссе.' }
        ]},
        quiz: { pool: [
          { q: 'How many words must you write in Task 2?', options: ['At least 150', 'At least 200', 'At least 250', 'At least 300'], answer: 2, explain: 'Task 2 — минимум 250 слов.' },
          { q: 'How much time do you have for Task 2?', options: ['20 minutes', '30 minutes', '40 minutes', '60 minutes'], answer: 2, explain: 'На Task 2 даётся 40 минут.' },
          { q: 'How much does Task 2 contribute compared to Task 1?', options: ['Same as Task 1', 'Twice as much', 'Half as much', 'Three times as much'], answer: 1, explain: 'Task 2 весит в 2 раза больше Task 1.' },
          { q: 'What is a thesis statement?', options: ['A linking word', 'Your main position', 'A type of essay', 'The conclusion'], answer: 1, explain: 'Thesis statement — ваша главная позиция.' },
          { q: 'Which essay type asks you to examine both sides?', options: ['Opinion', 'Discussion', 'Problem-Solution', 'Advantage-Disadvantage'], answer: 1, explain: 'Discussion — обсудить обе точки зрения.' },
          { q: 'Where should you state your thesis?', options: ['In the body', 'In the introduction', 'In the conclusion', 'Anywhere'], answer: 1, explain: 'Thesis statement — во введении.' },
          { q: 'What should you NOT do in the conclusion?', options: ['Summarize points', 'Restate position', 'Introduce new ideas', 'Use linking words'], answer: 2, explain: 'В заключении нельзя вводить новые идеи.' },
          { q: 'How long should you plan before writing?', options: ['1 minute', '3-5 minutes', '10 minutes', 'No planning'], answer: 1, explain: '3-5 минут на планирование.' },
          { q: 'What are linking words used for?', options: ['Counting words', 'Connecting ideas', 'Correcting grammar', 'Ending the essay'], answer: 1, explain: 'Linking words связывают идеи.' },
          { q: 'Which essay type asks "Do you agree or disagree?"', options: ['Discussion', 'Opinion', 'Problem-Solution', 'Advantage-Disadvantage'], answer: 1, explain: 'Opinion — согласны или не согласны.' },
          { q: 'What is a common mistake in Task 2?', options: ['Planning the essay', 'Using formal language', 'Using informal language', 'Writing 250+ words'], answer: 2, explain: 'Использование неформального языка — частая ошибка.' },
          { q: 'How many body paragraphs are typical?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Обычно 2 абзаца с аргументами.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Task 2 requires at least ___ words."', answer: '250', explain: 'Task 2 — минимум 250 слов.' },
          { type: 'fill-blank', question: 'Complete: "The ___ states your main position."', answer: 'thesis', explain: 'Thesis statement — главная позиция.' },
          { type: 'choice', question: 'Which essay type asks you to examine both sides?', options: ['Opinion', 'Discussion', 'Problem-Solution', 'Advantage-Disadvantage'], answer: 1, explain: 'Discussion — обе точки зрения.' },
          { type: 'translate', question: 'Переведите: "Заключение"', answer: 'conclusion', explain: 'conclusion — заключение.' },
          { type: 'order', question: 'Put the words in order:', words: ['your', 'always', 'thesis', 'state'], answer: 'always state your thesis', explain: 'Всегда формулируйте тезис.' },
          { type: 'correct', question: 'Find and correct: "Task 2 requires at least 150 words."', answer: 'Task 2 requires at least 250 words', explain: 'Task 2 — минимум 250 слов, а не 150.' }
        ]}
      },
      {
        id: 'pce-l6',
        topic: 'Speaking Section Mastery',
        objective: 'Уверенно говорить на всех трёх частях Speaking.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Mastering the IELTS Speaking Section',
          text: 'The Speaking section of IELTS is a face-to-face interview with a certified examiner. It lasts 11-14 minutes and has three parts. This section tests your ability to communicate effectively in spoken English.\n\n**Part 1: Interview (4-5 minutes)**\nThe examiner asks general questions about yourself, your home, family, work, studies, and other familiar topics. Examples include "Tell me about your hometown" or "What do you like doing in your free time?" Keep your answers to 2-4 sentences. Be natural and friendly.\n\n**Part 2: Long Turn (3-4 minutes)**\nYou receive a task card with a topic and several prompts. You have 1 minute to prepare and make notes, then 1-2 minutes to speak continuously about the topic. Example: "Describe a person who has influenced you." Use the prompts on the card to structure your talk. If you stop before the time is up, the examiner may ask a brief follow-up question.\n\n**Part 3: Discussion (4-5 minutes)**\nThe examiner asks abstract questions related to the Part 2 topic. These questions require deeper thinking and more complex language. Examples include "How has technology changed the way people communicate?" Give extended answers with reasons, examples, and opinions.\n\n**Assessment Criteria:**\n\nFirst, Fluency and Coherence. Can you speak smoothly without too much hesitation? Can you connect your ideas logically?\n\nSecond, Lexical Resource. Can you use a range of vocabulary accurately, including less common words and idiomatic language?\n\nThird, Grammatical Range and Accuracy. Can you use both simple and complex sentence structures correctly?\n\nFourth, Pronunciation. Can you be easily understood? This includes word stress, intonation, and individual sounds.\n\n**Strategies:** Do not memorize answers — examiners can tell! Expand your answers and do not give one-word responses. Use fillers naturally, such as "Well," "Let me think," or "That\'s an interesting question." Correct yourself if needed using phrases like "I mean" or "Sorry, what I meant was." Speak clearly and confidently.\n\nCommon topics include family, work, studies, hometown, hobbies, food, travel, technology, environment, and education. Practice speaking about these every day!',
          textRu: 'Секция Speaking IELTS — это личное собеседование с сертифицированным экзаменатором. Она длится 11-14 минут и состоит из трёх частей. Эта секция проверяет вашу способность эффективно общаться на устном английском.\n\n**Part 1: Интервью (4-5 минут)**\nЭкзаменатор задаёт общие вопросы о вас, вашем доме, семье, работе, учёбе и других знакомых темах. Примеры: "Tell me about your hometown" или "What do you like doing in your free time?" Держите ответы в пределах 2-4 предложений. Будьте естественными и дружелюбными.\n\n**Part 2: Развёрнутый ответ (3-4 минуты)**\nВы получаете карточку с темой и несколькими подсказками. У вас есть 1 минута на подготовку и заметки, затем 1-2 минуты непрерывной речи на эту тему. Пример: "Describe a person who has influenced you." Используйте подсказки на карточке для структурирования ответа. Если вы остановитесь раньше времени, экзаменатор может задать краткий уточняющий вопрос.\n\n**Part 3: Обсуждение (4-5 минут)**\nЭкзаменатор задаёт абстрактные вопросы, связанные с темой Part 2. Эти вопросы требуют более глубокого мышления и более сложного языка. Примеры: "How has technology changed the way people communicate?" Давайте развёрнутые ответы с причинами, примерами и мнениями.\n\n**Критерии оценивания:**\n\nВо-первых, Беглость и связность (Fluency and Coherence). Можете ли вы говорить плавно без слишком больших пауз? Можете ли вы логически связывать свои идеи?\n\nВо-вторых, Словарный запас (Lexical Resource). Можете ли вы использовать разнообразную лексику точно, включая менее распространённые слова и идиоматические выражения?\n\nВ-третьих, Грамматика (Grammatical Range and Accuracy). Можете ли вы правильно использовать как простые, так и сложные структуры предложений?\n\nВ-четвёртых, Произношение (Pronunciation). Можете ли вас легко понять? Это включает ударение в словах, интонацию и отдельные звуки.\n\n**Стратегии:** Не заучивайте ответы — экзаменаторы это замечают! Развёртывайте ответы и не давайте односложных ответов. Используйте слова-заполнители естественно, такие как "Well," "Let me think," или "That\'s an interesting question." Исправляйте себя при необходимости фразами вроде "I mean" или "Sorry, what I meant was." Говорите чётко и уверенно.\n\nРаспространённые темы включают семью, работу, учёбу, родной город, хобби, еду, путешествия, технологии, окружающую среду и образование. Практикуйтесь говорить на эти темы каждый день!',
          vocab: [
            { word: 'face-to-face interview', trans: 'Личное собеседование' },
            { word: 'Part 1: interview', trans: 'Часть 1: интервью (4-5 мин)' },
            { word: 'Part 2: long turn', trans: 'Часть 2: монолог (1-2 мин)' },
            { word: 'Part 3: discussion', trans: 'Часть 3: обсуждение (4-5 мин)' },
            { word: 'fluency and coherence', trans: 'Беглость и связность' },
            { word: 'lexical resource', trans: 'Словарный запас' },
            { word: 'grammatical range and accuracy', trans: 'Грамматика' },
            { word: 'pronunciation', trans: 'Произношение' }
          ]
        },
        video: { slides: [
          { emoji: '🗣️', title: 'Speaking', text: '11-14 минут, 3 части. Личное интервью с экзаменатором.' },
          { emoji: '💬', title: 'Part 1: Interview', text: '4-5 минут. Общие вопросы о себе. Ответы 2-4 предложения.' },
          { emoji: '📝', title: 'Part 2: Long turn', text: 'Карточка с темой. 1 мин подготовка, 1-2 мин говорите.' },
          { emoji: '🤔', title: 'Part 3: Discussion', text: '4-5 минут. Абстрактные вопросы, развёрнутые ответы.' },
          { emoji: '🌊', title: 'Fluency & coherence', text: 'Говорите плавно, связывайте идеи логически.' },
          { emoji: '📚', title: 'Lexical resource', text: 'Используйте разнообразную лексику и идиомы.' },
          { emoji: '✏️', title: 'Grammar & pronunciation', text: 'Сложные структуры + чёткое произношение.' },
          { emoji: '❌', title: "Don't memorize", text: 'Не заучивайте ответы! Экзаменатор заметит.' }
        ]},
        quiz: { pool: [
          { q: 'How long does the Speaking section last?', options: ['5-10 minutes', '11-14 minutes', '15-20 minutes', '25-30 minutes'], answer: 1, explain: 'Speaking длится 11-14 минут.' },
          { q: 'How many parts are in the Speaking section?', options: ['2', '3', '4', '5'], answer: 1, explain: 'Speaking имеет 3 части.' },
          { q: 'How long is Part 1?', options: ['1-2 minutes', '4-5 minutes', '10 minutes', '15 minutes'], answer: 1, explain: 'Part 1 длится 4-5 минут.' },
          { q: 'How long do you speak in Part 2?', options: ['30 seconds', '1-2 minutes', '5 minutes', '10 minutes'], answer: 1, explain: 'В Part 2 говорите 1-2 минуты.' },
          { q: 'How much preparation time do you get in Part 2?', options: ['30 seconds', '1 minute', '2 minutes', '5 minutes'], answer: 1, explain: '1 минута на подготовку в Part 2.' },
          { q: 'What is Part 3 about?', options: ['Personal questions', 'Abstract discussion', 'Reading aloud', 'Describing a picture'], answer: 1, explain: 'Part 3 — абстрактное обсуждение.' },
          { q: 'How many assessment criteria are there?', options: ['2', '3', '4', '5'], answer: 2, explain: '4 критерия оценивания.' },
          { q: 'Which criterion covers vocabulary?', options: ['Fluency', 'Lexical resource', 'Grammar', 'Pronunciation'], answer: 1, explain: 'Lexical resource — словарный запас.' },
          { q: 'Should you memorize answers?', options: ['Yes, always', 'No, examiners can tell', 'Only for Part 1', 'Only for Part 2'], answer: 1, explain: 'Не заучивайте — экзаменатор заметит.' },
          { q: 'What should you do if you make a mistake?', options: ['Stop talking', 'Correct yourself', 'Apologize and leave', 'Ignore it completely'], answer: 1, explain: 'Исправляйте себя: "I mean," "Sorry, what I meant was."' },
          { q: 'Which criterion covers stress and intonation?', options: ['Fluency', 'Lexical resource', 'Grammar', 'Pronunciation'], answer: 3, explain: 'Pronunciation — ударение и интонация.' },
          { q: 'What kind of questions does Part 1 ask?', options: ['Abstract questions', 'General questions about yourself', 'Academic lectures', 'Math problems'], answer: 1, explain: 'Part 1 — общие вопросы о себе.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "The Speaking section has ___ parts."', answer: '3', explain: 'Speaking имеет 3 части.' },
          { type: 'fill-blank', question: 'Complete: "In Part 2, you speak for ___ minutes."', answer: '2', explain: 'В Part 2 говорите 1-2 минуты.' },
          { type: 'choice', question: 'Should you memorize your answers?', options: ['Yes, always', 'No, examiners can tell', 'Only for Part 2', 'Only for Part 3'], answer: 1, explain: 'Не заучивайте ответы.' },
          { type: 'translate', question: 'Переведите: "Беглость и связность"', answer: 'fluency and coherence', explain: 'fluency and coherence — беглость и связность.' },
          { type: 'order', question: 'Put the words in order:', words: ['memorize', 'answers', 'do', 'not'], answer: 'do not memorize answers', explain: 'Не заучивайте ответы.' },
          { type: 'correct', question: 'Find and correct: "Part 2 gives you 5 minutes to prepare."', answer: 'Part 2 gives you 1 minute to prepare', explain: 'В Part 2 даётся 1 минута, а не 5.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_3 = COURSE;
})(window);
