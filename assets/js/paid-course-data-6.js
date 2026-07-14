/* ============================================================
   AES Paid Course 6: Основы грамматики (A1-A2)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-grammar',
    title: 'Основы грамматики',
    price: 750, oldPrice: 1490,
    level: 'A1-A2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'mint',
    art: ['#DCEBE3', '#C2DBC9'],
    tagline: 'Освойте скелет английского с упражнениями. 6 модулей.',
    lessons: [
      {
        id: 'pcg-l1', topic: 'Articles a/an/the',
        objective: 'Правильно использовать артикли a, an и the.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Articles: A, An, The',
          text: 'Articles are small words that go before nouns. English has three articles: "a", "an", and "the". They seem simple, but many learners make mistakes with them.\n\n**Indefinite articles: a / an**\nWe use "a" before a consonant sound and "an" before a vowel sound. It is about the SOUND, not the letter!\n- a book, a car, a house, a university (sounds like "yoo")\n- an apple, an egg, an hour (the "h" is silent), an umbrella\nWe use "a/an" with singular countable nouns when we mention something for the first time or talk about one of many: "I have a dog."\n\n**Definite article: the**\nWe use "the" when both the speaker and listener know which thing we mean. It can be singular or plural.\n- "Close the door." (you know which door)\n- "The sun is hot." (there is only one sun)\n- "I saw a man and a woman. The man was tall." (second mention)\nWe also use "the" with: oceans (the Atlantic), rivers (the Nile), countries with "states/kingdom" (the UK, the USA), and superlatives (the best).\n\n**Zero article (no article)**\nWe do NOT use an article with:\n- Plural and uncountable nouns for general statements: "Dogs are loyal." "Water is important." (NOT "The dogs are loyal" for general meaning)\n- Names of people and most countries: "John lives in France."\n- Languages and subjects: "I study English and math."\n- Meals: "I have breakfast at 8."\n- Days and months: "See you on Monday."\n\n**Common mistakes:**\n- "I am a teacher." (job - use a/an) - "She is engineer." WRONG! -> "She is an engineer."\n- "I like the music." (general) -> "I like music." (general taste, no article)\n- "The life is beautiful." WRONG! -> "Life is beautiful."\n- "He plays guitar." OK for casual speech, but formally: "He plays the guitar."\n\nPractice: Look around you and say sentences with a, an, the, and zero article!',
          vocab: [
            { word: 'a / an', trans: 'Неопределённый артикль (один из)' },
            { word: 'the', trans: 'Определённый артикль (конкретный)' },
            { word: 'zero article', trans: 'Нулевой артикль (без артикля)' },
            { word: 'consonant sound', trans: 'Согласный звук' },
            { word: 'vowel sound', trans: 'Гласный звук' },
            { word: 'first mention', trans: 'Первое упоминание' },
            { word: 'in general', trans: 'В общем (о чём-то)' },
            { word: 'singular / countable', trans: 'Единственное число / исчисляемое' }
          ]
        },
        video: { slides: [
          { emoji: ' a', title: 'a (consonant sound)', text: 'a book, a car, a university (звук "yoo").' },
          { emoji: ' an', title: 'an (vowel sound)', text: 'an apple, an egg, an hour (немое h).' },
          { emoji: ' the', title: 'the (specific)', text: 'Конкретный предмет: "Close the door."' },
          { emoji: ' zero', title: 'Zero article', text: 'Общие утверждения: "Dogs are loyal."' },
          { emoji: ' jobs', title: 'Jobs', text: '"She is a doctor." Артикль перед профессией.' },
          { emoji: ' names', title: 'Names & countries', text: 'Без артикля: John, France, Monday.' },
          { emoji: ' the', title: 'the + unique', text: 'the sun, the moon, the UK, the USA.' },
          { emoji: ' practice', title: 'Practice', text: 'Найдите предметы вокруг и составьте предложения с a, an, the!' }
        ]},
        quiz: { pool: [
          { q: 'Choose: "I have ___ apple."', options: ['a', 'an', 'the', '-'], answer: 1, explain: 'Перед гласным звуком - an.' },
          { q: 'Choose: "She is ___ engineer."', options: ['a', 'an', 'the', '-'], answer: 1, explain: 'engineer начинается с гласного звука.' },
          { q: 'Choose: "Close ___ door."', options: ['a', 'an', 'the', '-'], answer: 2, explain: 'Конкретная дверь - the.' },
          { q: 'Choose: "___ dogs are loyal."', options: ['A', 'An', 'The', '-'], answer: 3, explain: 'Общее утверждение - нулевой артикль.' },
          { q: 'Choose: "I study ___ English."', options: ['a', 'an', 'the', '-'], answer: 3, explain: 'Языки - без артикля.' },
          { q: 'Choose: "He is ___ university student."', options: ['a', 'an', 'the', '-'], answer: 0, explain: 'university звучит как "yoo" - согласный звук.' },
          { q: 'Choose: "___ sun is hot."', options: ['A', 'An', 'The', '-'], answer: 2, explain: 'Уникальный предмет - the.' },
          { q: 'Choose: "I have breakfast at ___ 8."', options: ['a', 'an', 'the', '-'], answer: 3, explain: 'Приёмы пищи - без артикля.' },
          { q: 'Choose: "___ life is beautiful."', options: ['A', 'An', 'The', '-'], answer: 3, explain: 'Абстрактное существительное в общем смысле - нулевой артикль.' },
          { q: 'Choose: "I saw a man and a woman. ___ man was tall."', options: ['A', 'An', 'The', '-'], answer: 2, explain: 'Второе упоминание - the.' },
          { q: 'Choose: "She lives in ___ USA."', options: ['a', 'an', 'the', '-'], answer: 2, explain: 'the USA, the UK - с "states/kingdom".' },
          { q: 'Choose: "I like ___ music."', options: ['a', 'an', 'the', '-'], answer: 3, explain: 'Вкус в общем - нулевой артикль.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I bought ___ new car."', answer: 'a', explain: 'Согласный звук - a.' },
          { type: 'fill-blank', question: 'Complete: "She is ___ honest person."', answer: 'an', explain: 'honest - немое h, гласный звук.' },
          { type: 'choice', question: 'Choose: "___ water is important for life."', options: ['A', 'An', 'The', '-'], answer: 3, explain: 'Общее утверждение - нулевой артикль.' },
          { type: 'translate', question: 'Переведите: "Я учитель."', answer: 'I am a teacher', explain: 'Перед профессией - a/an.' },
          { type: 'order', question: 'Put in order:', words: ['is', 'an', 'She', 'engineer'], answer: 'She is an engineer', explain: 'an перед гласным звуком.' },
          { type: 'correct', question: 'Find and correct: "The dogs are loyal animals."', answer: 'Dogs are loyal animals', explain: 'Общее утверждение - нулевой артикль.' }
        ]}
      },
      {
        id: 'pcg-l2', topic: 'Plural nouns and demonstratives',
        objective: 'Образовывать множественное число и использовать указательные местоимения.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Plural Nouns and Demonstratives',
          text: 'In English, we form the plural of most nouns by adding -s. But there are many exceptions and irregular forms that you need to learn.\n\n**Regular plurals:**\n1. Most nouns: add -s\n   - book -> books, car -> cars, pen -> pens\n2. Nouns ending in -ch, -sh, -ss, -x, -o: add -es\n   - watch -> watches, bus -> buses, box -> boxes, tomato -> tomatoes\n   - BUT: photo -> photos, piano -> pianos (foreign words)\n3. Nouns ending in consonant + y: change y -> ies\n   - city -> cities, baby -> babies, story -> stories\n   - BUT: boy -> boys, day -> days (vowel + y - just add -s)\n4. Nouns ending in -f / -fe: change to -ves\n   - leaf -> leaves, knife -> knives, wife -> wives\n   - BUT: roof -> roofs, chief -> chiefs\n\n**Irregular plurals (must memorize):**\n- man -> men, woman -> women, child -> children\n- foot -> feet, tooth -> teeth, mouse -> mice\n- person -> people, sheep -> sheep (same!), fish -> fish (same!)\n\n**Uncountable nouns (no plural):**\nwater, milk, money, information, advice, news, furniture - these are always singular: "The news is good." "I need some advice."\n\n**Demonstratives:**\nDemonstratives point to things. They change with distance and number:\n- this (singular, near): "This is my book." (here, in my hand)\n- these (plural, near): "These are my books."\n- that (singular, far): "That is your car." (over there)\n- those (plural, far): "Those are your cars."\n\n**Common mistakes:**\n- "two childs" WRONG! -> "two children"\n- "three womans" WRONG! -> "three women"\n- "I have two mouses" WRONG! -> "I have two mice" (for animals) or "mouses" (only for computer mice)\n- "these book" WRONG! -> "these books" (plural noun with plural demonstrative)\n\nPractice: Point to things around you and use this/these/that/those!',
          vocab: [
            { word: 'plural', trans: 'Множественное число' },
            { word: 'singular', trans: 'Единственное число' },
            { word: 'irregular', trans: 'Неправильный' },
            { word: 'this / these', trans: 'Этот / эти (близко)' },
            { word: 'that / those', trans: 'Тот / те (далеко)' },
            { word: 'uncountable', trans: 'Неисчисляемое' },
            { word: 'man / men', trans: 'Мужчина / мужчины' },
            { word: 'child / children', trans: 'Ребёнок / дети' }
          ]
        },
        video: { slides: [
          { emoji: ' +s', title: 'Regular +s', text: 'book -> books, car -> cars.' },
          { emoji: ' +es', title: '+es (-ch, -sh, -ss, -x)', text: 'watch -> watches, bus -> buses, box -> boxes.' },
          { emoji: ' y', title: 'y -> ies', text: 'city -> cities, baby -> babies. Но boy -> boys.' },
          { emoji: ' men', title: 'Irregular', text: 'man -> men, woman -> women, child -> children.' },
          { emoji: ' feet', title: 'foot/teeth', text: 'foot -> feet, tooth -> teeth, mouse -> mice.' },
          { emoji: ' sheep', title: 'Same plural', text: 'sheep -> sheep, fish -> fish, deer -> deer.' },
          { emoji: ' this', title: 'this / that', text: 'this (близко), that (далеко) - единственное число.' },
          { emoji: ' these', title: 'these / those', text: 'these (близко), those (далеко) - множественное число.' }
        ]},
        quiz: { pool: [
          { q: 'Plural of "book"?', options: ['bookes', 'books', 'bookies', 'book'], answer: 1, explain: 'Регулярное +s.' },
          { q: 'Plural of "box"?', options: ['boxs', 'boxies', 'boxes', 'box'], answer: 2, explain: 'После -x добавляем -es.' },
          { q: 'Plural of "city"?', options: ['citys', 'cities', 'cityes', 'city'], answer: 1, explain: 'Согласный + y -> ies.' },
          { q: 'Plural of "baby"?', options: ['babys', 'babies', 'babyes', 'baby'], answer: 1, explain: 'Согласный + y -> ies.' },
          { q: 'Plural of "man"?', options: ['mans', 'men', 'mens', 'man'], answer: 1, explain: 'man -> men (неправильный).' },
          { q: 'Plural of "child"?', options: ['childs', 'children', 'childes', 'child'], answer: 1, explain: 'child -> children (неправильный).' },
          { q: 'Plural of "foot"?', options: ['foots', 'feet', 'feets', 'foot'], answer: 1, explain: 'foot -> feet (неправильный).' },
          { q: 'Plural of "sheep"?', options: ['sheeps', 'sheep', 'sheepes', 'shep'], answer: 1, explain: 'sheep -> sheep (без изменений).' },
          { q: 'Choose: "___ are my books." (near you)', options: ['This', 'These', 'That', 'Those'], answer: 1, explain: 'Множ. число, близко - these.' },
          { q: 'Choose: "___ is your car." (over there)', options: ['This', 'These', 'That', 'Those'], answer: 2, explain: 'Ед. число, далеко - that.' },
          { q: 'Choose: "___ are nice flowers." (over there)', options: ['This', 'These', 'That', 'Those'], answer: 3, explain: 'Множ. число, далеко - those.' },
          { q: 'Which is uncountable?', options: ['book', 'water', 'car', 'child'], answer: 1, explain: 'water - неисчисляемое.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Plural: "two ___ (box)"', answer: 'boxes', explain: 'После -x добавляем -es.' },
          { type: 'fill-blank', question: 'Plural: "three ___ (child)"', answer: 'children', explain: 'child -> children.' },
          { type: 'choice', question: 'Choose: "___ are my friends." (near you)', options: ['This', 'These', 'That', 'Those'], answer: 1, explain: 'Множ. число, близко - these.' },
          { type: 'translate', question: 'Переведите: "Те машины далеко."', answer: 'Those cars are far', explain: 'those - множ. число, далеко.' },
          { type: 'order', question: 'Put in order:', words: ['my', 'These', 'are', 'books'], answer: 'These are my books', explain: 'these + plural noun.' },
          { type: 'correct', question: 'Find and correct: "I have two childs."', answer: 'I have two children', explain: 'child -> children (неправильный).' }
        ]}
      },
      {
        id: 'pcg-l3', topic: 'Possessives and pronouns',
        objective: 'Использовать притяжательные местоимения и местоимения.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Possessives and Pronouns',
          text: 'Possessives show ownership. English has possessive adjectives, possessive pronouns, and the possessive "s". Object pronouns replace nouns as the object of a sentence.\n\n**Possessive adjectives (before a noun):**\nThese go BEFORE a noun and show who owns it.\n- my, your, his, her, its, our, their\n- "This is my book." "Her car is red." "Our house is big."\nNote: they never change! "his" for a man, "her" for a woman, "its" for a thing or animal.\n\n**Possessive pronouns (replace a noun):**\nThese stand ALONE and replace "adjective + noun".\n- mine, yours, his, hers, ours, theirs\n- "This book is mine." (= my book)\n- "Is that car yours?" (= your car)\n- "The house is theirs." (= their house)\nNote: "his" is the same as adjective and pronoun. There is NO "its" as a pronoun - we say "it" differently.\n\n**Possessive "s" (for people and animals):**\nAdd \'s to a name or noun to show ownership:\n- "John\'s car" (the car that belongs to John)\n- "Mary\'s book"\n- "the dog\'s tail"\n- For plural nouns ending in -s, just add \': "the students\' teacher", "my parents\' house"\n- For irregular plurals, add \'s: "children\'s toys", "men\'s clothes"\n\n**Object pronouns (after a verb or preposition):**\nThese replace nouns as the OBJECT of a sentence.\n- me, you, him, her, it, us, them\n- "I love her." (not "she")\n- "Call me." (not "I")\n- "He gave it to us." (not "we")\n- "I saw them yesterday." (not "they")\n\n**Subject vs Object pronouns:**\nSubject (before verb): I, you, he, she, it, we, they\nObject (after verb/prep): me, you, him, her, it, us, them\n- "She loves him." (she=subject, him=object)\n- "We helped them."\n\n**Common mistakes:**\n- "This is she book." WRONG! -> "This is her book." (possessive adjective)\n- "This book is my." WRONG! -> "This book is mine." (possessive pronoun)\n- "I love she." WRONG! -> "I love her." (object pronoun)\n- "John car" WRONG! -> "John\'s car." (possessive s)\n\nPractice: Look at things around you and say whose they are using possessives!',
          vocab: [
            { word: 'my / mine', trans: 'Мой / мой (перед сущ. / вместо сущ.)' },
            { word: 'your / yours', trans: 'Твой / твой' },
            { word: 'his / her', trans: 'Его / её (прилаг.)' },
            { word: 'our / ours', trans: 'Наш / наш' },
            { word: 'their / theirs', trans: 'Их / их' },
            { word: 'me / him / her', trans: 'Объектные местоимения' },
            { word: 'us / them', trans: 'Нам / их (объектные)' },
            { word: 'John\'s', trans: 'Притяжательный падеж (John\'s car)' }
          ]
        },
        video: { slides: [
          { emoji: ' my', title: 'Possessive adjectives', text: 'my, your, his, her, its, our, their - ПЕРЕД существительным.' },
          { emoji: ' mine', title: 'Possessive pronouns', text: 'mine, yours, his, hers, ours, theirs - ВМЕСТО существительного.' },
          { emoji: ' s', title: 'Possessive s', text: 'John\'s car, Mary\'s book. Множ. на -s: students\'.' },
          { emoji: ' me', title: 'Object pronouns', text: 'me, him, her, us, them - после глагола или предлога.' },
          { emoji: ' vs', title: 'Subject vs Object', text: 'I love her (не she). He gave it to us (не we).' },
          { emoji: ' his', title: 'his = adj & pron', text: '"This is his book." "This book is his." - одинаково.' },
          { emoji: ' its', title: 'its vs it\'s', text: 'its = possessive, it\'s = it is. Не путать!' },
          { emoji: ' practice', title: 'Practice', text: 'Опишите вещи вокруг вас: "This is my... It is mine."' }
        ]},
        quiz: { pool: [
          { q: 'Choose: "This is ___ book."', options: ['my', 'mine', 'me', 'I'], answer: 0, explain: 'Перед существительным - possessive adjective.' },
          { q: 'Choose: "This book is ___."', options: ['my', 'mine', 'me', 'I'], answer: 1, explain: 'Без существительного - possessive pronoun.' },
          { q: 'Choose: "I love ___."', options: ['she', 'her', 'hers', 'his'], answer: 1, explain: 'После глагола - object pronoun.' },
          { q: 'Choose: "He gave it to ___."', options: ['we', 'us', 'our', 'ours'], answer: 1, explain: 'После предлога - object pronoun.' },
          { q: 'Choose: "This is ___ car." (John)', options: ['John', 'Johns', 'John\'s', 'Johns\''], answer: 2, explain: 'Притяжательный падёж - John\'s.' },
          { q: 'Choose: "The ___ teacher is kind."', options: ['students', 'students\'', 'student\'s', 'students\'s'], answer: 1, explain: 'Множ. на -s: только апостроф.' },
          { q: 'Choose: "___ toys are new." (children)', options: ['Childrens', 'Children\'s', 'Childrens\'', 'Children'], answer: 1, explain: 'Неправильный множ.: children\'s.' },
          { q: 'Choose: "Is that car ___?" (your)', options: ['your', 'you', 'yours', 'your\'s'], answer: 2, explain: 'Без существительного - yours.' },
          { q: 'Choose: "She is ___ sister."', options: ['he', 'him', 'his', 'he\'s'], answer: 2, explain: 'Притяжательное прилагательное - his.' },
          { q: 'Choose: "I saw ___ yesterday."', options: ['they', 'them', 'their', 'theirs'], answer: 1, explain: 'После глагола - them (object pronoun).' },
          { q: 'Which is correct?', options: ['I love she', 'I love her', 'I love hers', 'I love hers\''], answer: 1, explain: 'После глагола - her.' },
          { q: 'Choose: "This book is ___."', options: ['my', 'mine', 'me', 'I'], answer: 1, explain: 'Без существительного - mine.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "This is ___ book." (my/mine)', answer: 'my', explain: 'Перед существительным - my.' },
          { type: 'fill-blank', question: 'Complete: "This book is ___." (my/mine)', answer: 'mine', explain: 'Вместо существительного - mine.' },
          { type: 'choice', question: 'Choose: "I gave it to ___."', options: ['he', 'him', 'his', 'he\'s'], answer: 1, explain: 'После предлога - him.' },
          { type: 'translate', question: 'Переведите: "Это машина Джона."', answer: 'This is John\'s car', explain: 'Притяжательный падёж: John\'s.' },
          { type: 'order', question: 'Put in order:', words: ['is', 'hers', 'This', 'book'], answer: 'This book is hers', explain: 'hers - possessive pronoun.' },
          { type: 'correct', question: 'Find and correct: "I love she."', answer: 'I love her', explain: 'После глагола - object pronoun her.' }
        ]}
      },
      {
        id: 'pcg-l4', topic: 'Present Continuous vs Present Simple',
        objective: 'Различать Present Continuous и Present Simple.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Present Continuous vs Present Simple',
          text: 'These two present tenses are very common, but learners often confuse them. The key difference is WHAT you are describing: a temporary action right now, or a habit/routine.\n\n**Present Continuous (happening NOW):**\nForm: am/is/are + verb-ing\n- "I am reading a book now."\n- "She is working at the moment."\n- "They are playing football."\nUse it for: actions happening right now, temporary situations, and changes happening around now.\nKey words: now, right now, at the moment, currently, today, this week.\n\n**Present Simple (habits and routines):**\nForm: base verb (add -s for he/she/it)\n- "I work every day."\n- "She plays tennis on Sundays."\n- "Water boils at 100 degrees."\nUse it for: habits, routines, permanent situations, facts and general truths, schedules.\nKey words: always, usually, often, sometimes, never, every day, on Mondays, twice a week.\n\n**Differences (examples):**\n- "I live in London." (permanent, Present Simple) vs "I am living in London." (temporary)\n- "She works here." (permanent) vs "She is working here this month." (temporary)\n- "He usually drinks coffee." (habit) vs "He is drinking coffee now." (right now)\n\n**Stative verbs (NO continuous form):**\nSome verbs are about STATES, not actions. We do NOT use them with -ing:\n- like, love, hate, want, need, prefer\n- know, understand, remember, believe, think (meaning "believe")\n- see, hear, smell, taste\n- have (meaning "possess"), own, belong\n- be, seem, appear\nExamples:\n- "I know the answer." (NOT "I am knowing")\n- "She wants a coffee." (NOT "She is wanting")\n- "I have a car." (NOT "I am having a car")\n- BUT: "I am having lunch." (here "have" = eat, an action - OK!)\n\n**Common mistakes:**\n- "I am work now." WRONG! -> "I am working now." (continuous = am + Ving)\n- "She work every day." WRONG! -> "She works every day." (-s for she)\n- "I am knowing the answer." WRONG! -> "I know the answer." (stative verb)\n- "He is playing football every Sunday." WRONG! -> "He plays football every Sunday." (habit = Simple)\n\nPractice: Say what you are doing right now and what you usually do every day!',
          vocab: [
            { word: 'am/is/are + Ving', trans: 'Present Continuous (сейчас)' },
            { word: 'V / Vs', trans: 'Present Simple (регулярно)' },
            { word: 'now / at the moment', trans: 'Сейчас / в данный момент' },
            { word: 'usually / every day', trans: 'Обычно / каждый день' },
            { word: 'temporary', trans: 'Временный' },
            { word: 'habit / routine', trans: 'Привычка / рутина' },
            { word: 'stative verbs', trans: 'Глаголы состояния' },
            { word: 'know / like / want', trans: 'Глаголы без -ing' }
          ]
        },
        video: { slides: [
          { emoji: ' now', title: 'Present Continuous', text: 'am/is/are + Ving. Сейчас: "I am reading now."' },
          { emoji: ' day', title: 'Present Simple', text: 'V/Vs. Регулярно: "I read every day."' },
          { emoji: ' vs', title: 'Now vs Habit', text: '"I work here" (постоянно) vs "I am working here" (временно).' },
          { emoji: ' -s', title: 'He/she/it + -s', text: 'Present Simple: "She works." "He plays."' },
          { emoji: ' know', title: 'Stative verbs', text: 'know, like, want, believe - БЕЗ -ing!' },
          { emoji: ' have', title: 'have = possess', text: '"I have a car" не "I am having". Но "I am having lunch" (ем).' },
          { emoji: ' key', title: 'Key words', text: 'now, at the moment (Continuous). always, usually (Simple).' },
          { emoji: ' practice', title: 'Practice', text: 'Что вы делаете сейчас? Что вы делаете каждый день?' }
        ]},
        quiz: { pool: [
          { q: 'Choose: "I ___ a book right now."', options: ['read', 'am reading', 'reads', 'reading'], answer: 1, explain: 'right now = Present Continuous.' },
          { q: 'Choose: "She ___ tennis every Sunday."', options: ['play', 'is playing', 'plays', 'playing'], answer: 2, explain: 'every Sunday = Present Simple, she + -s.' },
          { q: 'Choose: "I ___ the answer."', options: ['am knowing', 'know', 'knows', 'am know'], answer: 1, explain: 'know - stative verb, без -ing.' },
          { q: 'Choose: "He ___ a coffee."', options: ['wants', 'is wanting', 'want', 'wanting'], answer: 0, explain: 'want - stative verb, без -ing.' },
          { q: 'Choose: "They ___ football at the moment."', options: ['play', 'are playing', 'plays', 'playing'], answer: 1, explain: 'at the moment = Present Continuous.' },
          { q: 'Choose: "Water ___ at 100 degrees."', options: ['boils', 'is boiling', 'boil', 'boiling'], answer: 0, explain: 'Факт = Present Simple.' },
          { q: 'Choose: "I ___ in London." (permanent)', options: ['live', 'am living', 'lives', 'living'], answer: 0, explain: 'Постоянно = Present Simple.' },
          { q: 'Choose: "She ___ here this month." (temporary)', options: ['works', 'is working', 'work', 'working'], answer: 1, explain: 'Временно = Present Continuous.' },
          { q: 'Which is correct?', options: ['I am know the answer', 'I know the answer', 'I knowing the answer', 'I am knowing'], answer: 1, explain: 'know - stative, без -ing.' },
          { q: 'Choose: "He usually ___ coffee in the morning."', options: ['drink', 'is drinking', 'drinks', 'drinking'], answer: 2, explain: 'usually = Present Simple, he + -s.' },
          { q: 'Choose: "Be quiet! The baby ___."', options: ['sleeps', 'is sleeping', 'sleep', 'sleeping'], answer: 1, explain: 'Сейчас = Present Continuous.' },
          { q: 'Which is a stative verb?', options: ['run', 'know', 'play', 'eat'], answer: 1, explain: 'know - stative verb.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I ___ (read) a book right now."', answer: 'am reading', explain: 'right now = Present Continuous.' },
          { type: 'fill-blank', question: 'Complete: "She ___ (play) tennis every Sunday."', answer: 'plays', explain: 'every Sunday = Present Simple, she + -s.' },
          { type: 'choice', question: 'Choose: "I ___ the answer."', options: ['am knowing', 'know', 'knows', 'am know'], answer: 1, explain: 'know - stative verb.' },
          { type: 'translate', question: 'Переведите: "Я сейчас работаю."', answer: 'I am working now', explain: 'Сейчас = Present Continuous.' },
          { type: 'order', question: 'Put in order:', words: ['playing', 'are', 'They', 'football', 'now'], answer: 'They are playing football now', explain: 'now = Present Continuous.' },
          { type: 'correct', question: 'Find and correct: "I am know the answer."', answer: 'I know the answer', explain: 'know - stative verb, без -ing.' }
        ]}
      },
      {
        id: 'pcg-l5', topic: 'Comparatives and superlatives',
        objective: 'Сравнивать предметы с помощью comparative и superlative.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Comparatives and Superlatives',
          text: 'When we compare two or more things, we use comparatives and superlatives. The form depends on how long the adjective is.\n\n**Comparative (comparing TWO things):**\n1. Short adjectives (1 syllable): add -er\n   - tall -> taller, fast -> faster, old -> older\n   - big -> bigger (double the consonant after short vowel)\n   - nice -> nicer (just add -r after -e)\n   - hot -> hotter, big -> bigger\n2. Long adjectives (2+ syllables): use "more"\n   - beautiful -> more beautiful, expensive -> more expensive\n   - interesting -> more interesting\n   - BUT: happy -> happier (consonant + y -> ier), busy -> busier\n3. Use "than" to show what you compare with:\n   - "Tom is taller than Bob."\n   - "This book is more interesting than that one."\n\n**Superlative (comparing THREE or more, the TOP one):**\n1. Short adjectives: add "the" + -est\n   - "the tallest", "the fastest", "the oldest"\n   - "the biggest", "the hottest"\n2. Long adjectives: use "the most"\n   - "the most beautiful", "the most expensive"\n   - "the most interesting"\n   - "the happiest" (y -> iest)\n\n**Irregular forms (must memorize):**\n- good -> better -> the best\n- bad -> worse -> the worst\n- far -> farther/further -> the farthest/furthest\n- little -> less -> the least\n- many/much -> more -> the most\n\n**as...as (equality):**\nUse "as + adjective + as" to say two things are equal:\n- "Tom is as tall as Bob." (same height)\n- "This is as good as that."\nUse "not as...as" to say something is less:\n- "This is not as expensive as that one." (= less expensive)\n\n**Common mistakes:**\n- "He is more taller than me." WRONG! -> "He is taller than me." (don\'t use both)\n- "She is the most tall." WRONG! -> "She is the tallest." (short adjective)\n- "This is gooder." WRONG! -> "This is better." (irregular)\n- "He is taller that me." WRONG! -> "He is taller than me." (use "than")\n\nPractice: Compare things around you using comparatives and superlatives!',
          vocab: [
            { word: 'taller than', trans: 'Выше, чем (сравнение)' },
            { word: 'the tallest', trans: 'Самый высокий (превосходная)' },
            { word: 'more expensive', trans: 'Более дорогой' },
            { word: 'the most beautiful', trans: 'Самый красивый' },
            { word: 'better / the best', trans: 'Лучше / лучший (исключение)' },
            { word: 'worse / the worst', trans: 'Хуже / худший (исключение)' },
            { word: 'as...as', trans: 'Такой же... как' },
            { word: 'than', trans: 'Чем (при сравнении)' }
          ]
        },
        video: { slides: [
          { emoji: ' er', title: 'Short + -er', text: 'tall -> taller, fast -> faster. big -> bigger.' },
          { emoji: ' more', title: 'Long: more +', text: 'beautiful -> more beautiful, expensive -> more expensive.' },
          { emoji: ' y', title: 'y -> ier', text: 'happy -> happier, busy -> busier.' },
          { emoji: ' est', title: 'the + -est', text: 'the tallest, the fastest. Short adjectives.' },
          { emoji: ' most', title: 'the most +', text: 'the most beautiful, the most expensive. Long adjectives.' },
          { emoji: ' best', title: 'Irregular', text: 'good -> better -> the best. bad -> worse -> the worst.' },
          { emoji: ' as', title: 'as...as', text: 'as tall as = такой же высокий. not as...as = менее.' },
          { emoji: ' than', title: 'than', text: '"He is taller than me." Сравнение двух.' }
        ]},
        quiz: { pool: [
          { q: 'Comparative of "tall"?', options: ['more tall', 'taller', 'tallest', 'more taller'], answer: 1, explain: 'Короткое прил. + -er.' },
          { q: 'Comparative of "beautiful"?', options: ['beautifuler', 'more beautiful', 'beautifullier', 'most beautiful'], answer: 1, explain: 'Длинное прил. - more +.' },
          { q: 'Comparative of "good"?', options: ['gooder', 'better', 'more good', 'gooder than'], answer: 1, explain: 'good -> better (исключение).' },
          { q: 'Superlative of "tall"?', options: ['taller', 'most tall', 'the tallest', 'more tall'], answer: 2, explain: 'the + -est для коротких.' },
          { q: 'Superlative of "expensive"?', options: ['expensivest', 'the most expensive', 'more expensive', 'expensiveest'], answer: 1, explain: 'the most + для длинных.' },
          { q: 'Superlative of "bad"?', options: ['baddest', 'the worst', 'worse', 'most bad'], answer: 1, explain: 'bad -> the worst (исключение).' },
          { q: 'Complete: "Tom is ___ than Bob."', options: ['tall', 'taller', 'tallest', 'more taller'], answer: 1, explain: 'Сравнение двух - comparative + than.' },
          { q: 'Complete: "She is the ___ in the class."', options: ['taller', 'most tall', 'tallest', 'more tall'], answer: 2, explain: 'Превосходная - the tallest.' },
          { q: 'Complete: "This is as ___ as that."', options: ['good', 'better', 'best', 'more good'], answer: 0, explain: 'as...as + базовая форма.' },
          { q: 'Comparative of "happy"?', options: ['happier', 'more happy', 'happyer', 'most happy'], answer: 0, explain: 'y -> ier.' },
          { q: 'Complete: "This book is ___ interesting than that."', options: ['more', 'most', 'interestinger', 'more much'], answer: 0, explain: 'Длинное прил. - more +.' },
          { q: 'Complete: "He is the ___ student in school."', options: ['better', 'best', 'most good', 'goodest'], answer: 1, explain: 'good -> the best (исключение).' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Comparative: "Tom is ___ than Bob." (tall)', answer: 'taller', explain: 'Короткое прил. + -er + than.' },
          { type: 'fill-blank', question: 'Superlative: "She is the ___ in class." (tall)', answer: 'tallest', explain: 'the + -est.' },
          { type: 'choice', question: 'Comparative of "good"?', options: ['gooder', 'better', 'more good', 'best'], answer: 1, explain: 'good -> better (исключение).' },
          { type: 'translate', question: 'Переведите: "Эта книга интереснее."', answer: 'This book is more interesting', explain: 'Длинное прил. - more +.' },
          { type: 'order', question: 'Put in order:', words: ['than', 'is', 'Tom', 'Bob', 'taller'], answer: 'Tom is taller than Bob', explain: 'comparative + than.' },
          { type: 'correct', question: 'Find and correct: "He is more taller than me."', answer: 'He is taller than me', explain: 'Не используем both more и -er.' }
        ]}
      },
      {
        id: 'pcg-l6', topic: 'Future forms: will vs going to',
        objective: 'Выбирать между will и going to для будущего.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Future Forms: Will vs Going To',
          text: 'English has several ways to talk about the future. The two most common are "will" and "going to". Choosing the right one depends on WHY you are talking about the future.\n\n**Will (decisions, predictions, promises):**\nForm: will + base verb (short: \'ll, negative: won\'t)\nUse "will" for:\n1. Spontaneous decisions (made at the moment of speaking):\n   - "I\'m tired. I\'ll go to bed."\n   - "The phone is ringing. I\'ll answer it."\n2. Predictions based on opinion or belief:\n   - "I think it will rain tomorrow."\n   - "People will live on Mars one day."\n3. Promises and offers:\n   - "I\'ll help you with your homework."\n   - "I\'ll call you later. I promise."\n4. Facts about the future:\n   - "The sun will rise at 6 AM."\n\n**Going to (plans, intentions, evidence):**\nForm: am/is/are + going to + base verb\nUse "going to" for:\n1. Plans and intentions (decided BEFORE speaking):\n   - "I\'m going to study tonight." (I planned it)\n   - "We\'re going to travel next summer."\n2. Predictions based on present evidence (you can see it now):\n   - "Look at those clouds! It\'s going to rain."\n   - "Be careful! You\'re going to fall!"\n\n**Present Continuous (future arrangements):**\nUse Present Continuous for fixed future arrangements (with a time/place):\n- "I\'m meeting John at 5." (we agreed)\n- "She is flying to Paris tomorrow." (ticket bought)\n- "We\'re having dinner tonight."\n\n**Shall (offers and suggestions):**\n"Shall" is used mostly in questions, especially in British English:\n- "Shall I open the window?" (offer)\n- "Shall we go?" (suggestion)\n- "Shall we order pizza?"\n\n**Will vs Going to (key difference):**\n- Decision made NOW: "I\'ll have the salad." (will)\n- Decision made BEFORE: "I\'m going to have the salad." (I planned it before)\n- Opinion prediction: "It will rain." (I think so)\n- Evidence prediction: "It\'s going to rain." (I see dark clouds)\n\n**Common mistakes:**\n- "I will study tonight." (if you planned it) -> "I\'m going to study tonight."\n- "Look! It will rain." WRONG! -> "It\'s going to rain." (evidence)\n- "I\'m going to the phone." (wrong) -> "I\'ll answer the phone." (spontaneous)\n- "She wills come." WRONG! -> "She will come." (no -s after will)\n\nPractice: Think of 3 plans for tomorrow (going to) and 3 spontaneous offers (will)!',
          vocab: [
            { word: 'will + base', trans: 'Будущее (решение сейчас, предсказание)' },
            { word: 'going to + base', trans: 'Будущее (план, намерение)' },
            { word: 'spontaneous', trans: 'Спонтанный (в момент речи)' },
            { word: 'plan / intention', trans: 'План / намерение' },
            { word: 'prediction', trans: 'Предсказание' },
            { word: 'evidence', trans: 'Очевидное доказательство' },
            { word: 'arrangement', trans: 'Договорённость' },
            { word: 'shall I / we', trans: 'Предложение помощи / Действуем?' }
          ]
        },
        video: { slides: [
          { emoji: ' will', title: 'will (now)', text: 'Спонтанное решение: "I\'ll answer it." Предсказание: "It will rain."' },
          { emoji: ' going', title: 'going to (plan)', text: 'План: "I\'m going to study tonight." Намерение.' },
          { emoji: ' clouds', title: 'going to (evidence)', text: '"Look at clouds! It\'s going to rain." Видим доказательство.' },
          { emoji: ' arr', title: 'Present Continuous', text: 'Договорённость: "I\'m meeting John at 5."' },
          { emoji: ' shall', title: 'shall I/we', text: 'Предложение: "Shall I open the window?" "Shall we go?"' },
          { emoji: ' vs', title: 'will vs going to', text: 'Сейчас решаешь = will. Заранее планировал = going to.' },
          { emoji: ' won\'t', title: 'won\'t', text: 'will not = won\'t. "I won\'t be late."' },
          { emoji: ' practice', title: 'Practice', text: '3 плана на завтра (going to) и 3 предложения (will).' }
        ]},
        quiz: { pool: [
          { q: 'Spontaneous decision: "I\'m tired. I ___ go to bed."', options: ['am going to', 'will', 'going', 'shall'], answer: 1, explain: 'Спонтанное решение = will.' },
          { q: 'Plan: "I ___ study tonight." (decided before)', options: ['will', 'am going to', 'going', 'shall'], answer: 1, explain: 'План = going to.' },
          { q: 'Evidence: "Look at clouds! It ___ rain."', options: ['will', 'is going to', 'going', 'shall'], answer: 1, explain: 'Видим доказательство = going to.' },
          { q: 'Opinion: "I think it ___ rain tomorrow."', options: ['will', 'is going to', 'going', 'shall'], answer: 0, explain: 'Мнение = will.' },
          { q: 'Offer: "___ I help you?"', options: ['Will', 'Going', 'Shall', 'Am'], answer: 2, explain: 'Предложение помощи = Shall I...?' },
          { q: 'Arrangement: "I ___ John at 5."', options: ['will meet', 'am meeting', 'meet', 'shall meet'], answer: 1, explain: 'Договорённость = Present Continuous.' },
          { q: 'Promise: "I ___ call you later."', options: ['will', 'am going to', 'shall', 'going'], answer: 0, explain: 'Обещание = will.' },
          { q: 'Negative of "will"?', options: ['don\'t will', 'won\'t', 'willn\'t', 'not will'], answer: 1, explain: 'will not = won\'t.' },
          { q: 'Which is correct?', options: ['She wills come', 'She will come', 'She willing come', 'She will comes'], answer: 1, explain: 'После will - базовая форма, без -s.' },
          { q: 'Suggestion: "___ we go?"', options: ['Will', 'Going', 'Shall', 'Do'], answer: 2, explain: 'Предложение = Shall we...?' },
          { q: 'Plan: "We ___ travel next summer."', options: ['will', 'are going to', 'going', 'shall'], answer: 1, explain: 'План = going to.' },
          { q: 'Spontaneous: "The phone is ringing. I ___ answer it."', options: ['am going to', 'will', 'going', 'shall'], answer: 1, explain: 'Спонтанное = will.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Spontaneous: "I\'m hungry. I ___ make a sandwich."', answer: 'will', explain: 'Спонтанное решение = will.' },
          { type: 'fill-blank', question: 'Plan: "I ___ visit my parents this weekend."', answer: 'am going to', explain: 'План = going to.' },
          { type: 'choice', question: 'Evidence: "Look at clouds! It ___ rain."', options: ['will', 'is going to', 'going', 'shall'], answer: 1, explain: 'Доказательство = going to.' },
          { type: 'translate', question: 'Переведите: "Я помогу тебе." (обещание)', answer: 'I will help you', explain: 'Обещание = will.' },
          { type: 'order', question: 'Put in order:', words: ['to', 'am', 'I', 'study', 'going', 'tonight'], answer: 'I am going to study tonight', explain: 'План = going to.' },
          { type: 'correct', question: 'Find and correct: "Look! It will rain."', answer: 'Look! It is going to rain', explain: 'Видим доказательство = going to.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_6 = COURSE;
})(window);
