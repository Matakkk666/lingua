/* ============================================================
   AES Course Data — Free English Course (A1 + A2)
   12 lessons across 4 units, each with:
   - Reading section (text + vocabulary)
   - Video section (animated slides)
   - Quiz pool (10 questions, 5 shown per attempt)
   ============================================================ */
(function (global) {
  'use strict';

  const FREE_COURSE = {
    id: 'c-free',
    title: 'English Starter (Free)',
    tagline: 'A free English course with reading, video lessons, quizzes, and an AI assistant. A1 and A2 levels included.',
    levels: [
      /* ===================== A1 ===================== */
      {
        id: 'A1',
        title: 'Beginner (A1)',
        desc: 'Start from zero. Learn greetings, the alphabet, numbers, the verb "to be", and how to talk about yourself.',
        units: [
          {
            id: 'a1-u1', title: 'First Words', desc: 'Greetings, alphabet, and numbers.',
            lessons: [
              {
                id: 'a1-l1', title: 'Hello! Greetings', scenario: 'introductions',
                reading: {
                  title: 'How to Greet People in English',
                  text: 'In English, greetings depend on the time of day and how formal the situation is. "Hello" works everywhere — at work, with friends, or with strangers. "Hi" is more casual and perfect for friends. In the morning, you can say "Good morning." In the afternoon, say "Good afternoon." In the evening, "Good evening" is appropriate. When you meet someone for the first time, it is polite to say "Nice to meet you." When you leave, you can say "Goodbye" or the more casual "Bye." A common way to ask about someone\u2019s day is "How are you?" A typical answer is "I\u2019m fine, thanks" or "I\u2019m good, thanks."',
                  vocab: [
                    { word: 'Hello / Hi', trans: 'Formal / casual greeting' },
                    { word: 'Good morning', trans: 'Before 12 p.m.' },
                    { word: 'Good afternoon', trans: '12 p.m. to ~5 p.m.' },
                    { word: 'Good evening', trans: 'After 5 p.m.' },
                    { word: 'Nice to meet you', trans: 'First meeting' },
                    { word: 'How are you?', trans: 'Wellbeing question' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '👋', title: 'Hello!', text: 'The most universal greeting. Use it anywhere, anytime.' },
                    { emoji: '🌅', title: 'Good morning', text: 'Use before noon. "Good morning, everyone!"' },
                    { emoji: '☀️', title: 'Good afternoon', text: 'Use from noon until about 5 p.m.' },
                    { emoji: '🌙', title: 'Good evening', text: 'Use after 5 p.m. "Good evening! How was your day?"' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'What do you say when you meet someone for the FIRST time?', options: ['Nice to meet you', 'See you later', 'Goodbye', 'Thank you'], answer: 0, explain: '"Nice to meet you" is the standard phrase for first meetings.' },
                    { q: 'When do you say "Good morning"?', options: ['After 5 p.m.', 'Before noon', 'At night', 'Anytime'], answer: 1, explain: '"Good morning" is used before noon (12 p.m.).' },
                    { q: 'What is a casual way to say "Hello"?', options: ['Greetings', 'Hi', 'Salutations', 'Good day'], answer: 1, explain: '"Hi" is the casual version of "Hello."' },
                    { q: 'Someone asks "How are you?" What is a good answer?', options: ['I am 25', 'I\u2019m fine, thanks', 'Yes, I do', 'My name is John'], answer: 1, explain: '"I\u2019m fine, thanks" is a standard polite response.' },
                    { q: 'What do you say when you LEAVE?', options: ['Hello', 'Goodbye', 'Nice to meet you', 'How are you?'], answer: 1, explain: '"Goodbye" (or "Bye") is what you say when leaving.' },
                    { q: 'What is more formal: "Hi" or "Hello"?', options: ['Hi', 'Hello', 'Both are the same', 'Neither'], answer: 1, explain: '"Hello" is more formal than "Hi."' },
                    { q: 'When do you say "Good evening"?', options: ['Before noon', 'After 5 p.m.', 'At 3 a.m.', 'Only on weekends'], answer: 1, explain: '"Good evening" is used after 5 p.m.' },
                    { q: 'Complete: "___! My name is Maria."', options: ['Goodbye', 'Hello', 'See you', 'Thanks'], answer: 1, explain: '"Hello" is the correct greeting to introduce yourself.' },
                    { q: 'What does "How are you?" mean?', options: ['What is your name?', 'How old are you?', 'How are you feeling?', 'Where are you from?'], answer: 2, explain: '"How are you?" asks about the person\u2019s wellbeing.' },
                    { q: 'Choose the correct order: "___ to ___ you!"', options: ['Nice / meet', 'Good / see', 'Hello / know', 'Hi / call'], answer: 0, explain: 'The phrase is "Nice to meet you!"' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "Good ___! How are you?" (before noon)', answer: 'morning', explain: '«Good morning» используют до полудня.' },
                    { type: 'choice', question: 'Choose the casual greeting:', options: ['Hello', 'Hi', 'Greetings', 'Salutations'], answer: 1, explain: '«Hi» — неформальный вариант «Hello».' },
                    { type: 'translate', question: 'Translate to English: "Приятно познакомиться!"', answer: 'Nice to meet you', explain: 'Так говорят при первой встрече.' },
                    { type: 'order', question: 'Put in order to make a greeting:', words: ['meet', 'Nice', 'you', 'to'], answer: 'Nice to meet you', explain: 'Правильный порядок: «Nice to meet you».' },
                    { type: 'correct', question: 'Find and correct: "How are you? — I am 25."', answer: 'How are you? — I\'m fine, thanks.', explain: 'На вопрос «How are you?» отвечают о самочувствии, а не о возрасте.' }
                  ]
                }
              },
              {
                id: 'a1-l2', title: 'The Alphabet & Spelling', scenario: 'introductions',
                reading: {
                  title: 'The English Alphabet',
                  text: 'The English alphabet has 26 letters: A, B, C, D, ... Z. Knowing how to spell your name and email is very important. Some letters sound similar: B and V, M and N, or C and G. When someone asks "How do you spell that?" you say each letter: "M-A-R-I-A." For double letters, say "double": "L-I-S-A, but with double L" = "L-L-I-S-A." In English-speaking countries, people often use words to make letters clear: "A for Apple, B for Banana." This is called the phonetic alphabet. It helps when talking on the phone.',
                  vocab: [
                    { word: 'How do you spell that?', trans: 'Asking someone to spell' },
                    { word: 'A for Apple', trans: 'Phonetic clarification' },
                    { word: 'Double L', trans: 'Two L\u2019s in a row' },
                    { word: 'Capital letter', trans: 'Uppercase (A, B, C)' },
                    { word: 'Small letter', trans: 'Lowercase (a, b, c)' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '🔤', title: '26 Letters', text: 'The English alphabet goes from A to Z. Let\u2019s learn them!' },
                    { emoji: '🗣️', title: 'Similar sounds', text: 'B and V sound similar. M and N too. Practice makes perfect!' },
                    { emoji: '📞', title: 'On the phone', text: 'Say "A for Apple, B for Banana" to be clear.' },
                    { emoji: '✍️', title: 'Double letters', text: 'For "Kelly" say: K-E-Double L-Y.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '27'], answer: 2, explain: 'The English alphabet has 26 letters, from A to Z.' },
                    { q: 'How do you spell "BOOK"?', options: ['B-O-K', 'B-O-O-K', 'B-U-K', 'B-O-C-K'], answer: 1, explain: 'BOOK = B-O-O-K.' },
                    { q: 'Someone says "Double L." What does it mean?', options: ['Two L\u2019s in a row', 'A big L', 'A small L', 'The letter W'], answer: 0, explain: '"Double L" means two L\u2019s: LL.' },
                    { q: 'What does "A for Apple" help with?', options: ['Counting', 'Making spelling clear', 'Cooking', 'Time'], answer: 1, explain: 'Phonetic spelling makes letters clear on the phone.' },
                    { q: 'Which two letters sound similar?', options: ['A and Z', 'B and V', 'C and Q', 'D and P'], answer: 1, explain: 'B and V sound similar, especially on the phone.' },
                    { q: 'How do you ask someone to spell their name?', options: ['What is your name?', 'How do you spell that?', 'Where are you from?', 'How old are you?'], answer: 1, explain: '"How do you spell that?" asks for spelling.' },
                    { q: 'What is a "capital letter"?', options: ['A small letter', 'An uppercase letter', 'A number', 'A punctuation mark'], answer: 1, explain: 'A capital letter is uppercase (A, B, C).' },
                    { q: 'How do you spell "SCHOOL"?', options: ['S-C-O-O-L', 'S-H-O-L', 'S-C-H-O-O-L', 'S-K-O-L'], answer: 2, explain: 'SCHOOL = S-C-H-O-O-L.' },
                    { q: 'Complete: "B for ___"', options: ['Banana', 'Cat', 'Dog', 'Elephant'], answer: 0, explain: '"B for Banana" is the standard phonetic example.' },
                    { q: 'What does "spell" mean?', options: ['To write a story', 'To say the letters of a word', 'To count numbers', 'To read aloud'], answer: 1, explain: 'To "spell" is to say each letter of a word.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "How do you ___ that?" (asking to spell)', answer: 'spell', explain: '«How do you spell that?» — просьба продиктовать по буквам.' },
                    { type: 'choice', question: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '27'], answer: 2, explain: 'В английском алфавите 26 букв, от A до Z.' },
                    { type: 'translate', question: 'Translate to English: "Как пишется ваше имя?"', answer: 'How do you spell your name?', explain: 'Стандартный вопрос о написании имени.' },
                    { type: 'order', question: 'Put in order (phonetic alphabet):', words: ['Banana', 'B', 'for'], answer: 'B for Banana', explain: '«B for Banana» — пример фонетического алфавита.' },
                    { type: 'correct', question: 'Find and correct: "SCHOOL is spelled S-K-O-L."', answer: 'SCHOOL is spelled S-C-H-O-O-L.', explain: 'Правильное написание: S-C-H-O-O-L.' }
                  ]
                }
              },
              {
                id: 'a1-l3', title: 'Numbers 1–20', scenario: 'numbers',
                reading: {
                  title: 'Counting in English',
                  text: 'Numbers are everywhere: prices, ages, phone numbers, and times. Let\u2019s start with 1 to 20. One, two, three, four, five, six, seven, eight, nine, ten. Then: eleven (11) and twelve (12) are irregular. From 13 to 19, we add "-teen": thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Note that "fifteen" (15) and "fifty" (50) sound similar — be careful! "Eight" has a silent "h" when counting. For numbers like 21, we say "twenty-one" with a hyphen. To ask about prices, say "How much is it?" or "How much does it cost?"',
                  vocab: [
                    { word: 'One, two, three...', trans: '1, 2, 3...' },
                    { word: 'Eleven, twelve', trans: '11, 12 (irregular)' },
                    { word: 'Thirteen to nineteen', trans: '13–19 (add -teen)' },
                    { word: 'How much is it?', trans: 'Asking the price' },
                    { word: 'How old are you?', trans: 'Asking about age' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '1️⃣', title: '1 to 10', text: 'One, two, three, four, five, six, seven, eight, nine, ten.' },
                    { emoji: '🔢', title: '11 and 12', text: 'Eleven and twelve are irregular — memorize them!' },
                    { emoji: '➕', title: '-teen numbers', text: '13–19: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.' },
                    { emoji: '💰', title: 'Asking prices', text: '"How much is it?" — essential for shopping!' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'How do you write the number 15?', options: ['Fifty', 'Five', 'Fifteen', 'Fiveteen'], answer: 2, explain: '15 = "fifteen." Note: "fifty" = 50.' },
                    { q: 'What is "eleven"?', options: ['10', '11', '12', '13'], answer: 1, explain: 'Eleven = 11.' },
                    { q: 'How do you ask the price of something?', options: ['How old is it?', 'How much is it?', 'Where is it?', 'What is it?'], answer: 1, explain: '"How much is it?" asks about price.' },
                    { q: 'Which is correct for 13?', options: ['Threeteen', 'Thirteen', 'Thirteenth', 'Thirteens'], answer: 1, explain: '13 = "thirteen."' },
                    { q: 'What is 8 in English?', options: ['Eight', 'Ate', 'Eightth', 'Eighth'], answer: 0, explain: '8 = "eight." The "h" is silent when counting.' },
                    { q: 'How do you write 19?', options: ['Nineteen', 'Ninteen', 'Nine-teen', 'Nineteenth'], answer: 0, explain: '19 = "nineteen."' },
                    { q: 'What is "twelve"?', options: ['10', '11', '12', '20'], answer: 2, explain: 'Twelve = 12.' },
                    { q: 'How do you ask someone\u2019s age?', options: ['How are you?', 'How old are you?', 'How much are you?', 'How many are you?'], answer: 1, explain: '"How old are you?" asks about age.' },
                    { q: 'Which number comes after 9?', options: ['Eight', 'Ten', 'Eleven', 'Seven'], answer: 1, explain: 'After 9 comes 10 (ten).' },
                    { q: 'What is "twenty-one"?', options: ['12', '21', '20+1=21', 'Both B and C'], answer: 3, explain: 'Twenty-one = 21. It uses a hyphen.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "How ___ is it?" (asking the price)', answer: 'much', explain: '«How much is it?» — вопрос о цене.' },
                    { type: 'choice', question: 'What is the number 15 in words?', options: ['Fifty', 'Five', 'Fifteen', 'Fiveteen'], answer: 2, explain: '15 = «fifteen». Обратите внимание: «fifty» = 50.' },
                    { type: 'translate', question: 'Translate to English: "Сколько тебе лет?"', answer: 'How old are you?', explain: '«How old are you?» — вопрос о возрасте.' },
                    { type: 'order', question: 'Put the number words in order (11, 12, 13):', words: ['twelve', 'eleven', 'thirteen'], answer: 'eleven twelve thirteen', explain: '11 = eleven, 12 = twelve, 13 = thirteen.' },
                    { type: 'correct', question: 'Find and correct: "19 is spelled ninteen."', answer: '19 is spelled nineteen.', explain: 'Правильное написание: nineteen.' }
                  ]
                }
              }
            ]
          },
          {
            id: 'a1-u2', title: 'About Me', desc: 'The verb "to be", countries, and family.',
            lessons: [
              {
                id: 'a1-l4', title: 'I Am, You Are (Verb "To Be")', scenario: 'aboutyou',
                reading: {
                  title: 'The Most Important Verb: "To Be"',
                  text: 'The verb "to be" is the most common verb in English. It connects a subject to a description. In the present: I am, You are, He is, She is, It is, We are, They are. In conversation, we use contractions: I\u2019m, You\u2019re, He\u2019s, She\u2019s, It\u2019s, We\u2019re, They\u2019re. For the negative, add "not": I am not (I\u2019m not), You are not (You aren\u2019t). For questions, put the verb first: Am I? Are you? Is he? Common mistakes: don\u2019t say "I agree" — say "I agree" (it\u2019s a verb, not "I am agree"). Don\u2019t say "I have 25 years" — say "I am 25 years old."',
                  vocab: [
                    { word: 'I am (I\u2019m)', trans: 'First person singular' },
                    { word: 'You are (You\u2019re)', trans: 'Second person' },
                    { word: 'He/She/It is', trans: 'Third person singular' },
                    { word: 'We/They are', trans: 'Plural' },
                    { word: 'I am not (I\u2019m not)', trans: 'Negative' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '✨', title: 'The verb "to be"', text: 'I am, You are, He is, She is, It is, We are, They are.' },
                    { emoji: '🔗', title: 'Contractions', text: 'I\u2019m, You\u2019re, He\u2019s, She\u2019s, It\u2019s, We\u2019re, They\u2019re.' },
                    { emoji: '🚫', title: 'Negative', text: 'I am not = I\u2019m not. You are not = You aren\u2019t.' },
                    { emoji: '❓', title: 'Questions', text: 'Put the verb first: Am I? Are you? Is he?' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'Complete: "She ___ a doctor."', options: ['am', 'is', 'are', 'be'], answer: 1, explain: 'She uses "is": She is a doctor.' },
                    { q: 'What is the contraction of "I am"?', options: ['I\u2019m', 'Im', 'Iam', 'I\u2019am'], answer: 0, explain: '"I am" contracts to "I\u2019m."' },
                    { q: 'Complete: "They ___ happy."', options: ['am', 'is', 'are', 'be'], answer: 2, explain: 'They uses "are": They are happy.' },
                    { q: 'How do you make the negative of "He is"?', options: ['He not is', 'He isn\u2019t', 'He don\u2019t is', 'He no is'], answer: 1, explain: 'He is not = He isn\u2019t.' },
                    { q: 'Which is correct?', options: ['I agree', 'I am agree', 'I do agree', 'I being agree'], answer: 0, explain: '"Agree" is a verb. Say "I agree," not "I am agree."' },
                    { q: 'Complete the question: "___ you a student?"', options: ['Am', 'Is', 'Are', 'Be'], answer: 2, explain: 'Questions put the verb first: "Are you a student?"' },
                    { q: 'What is the contraction of "It is"?', options: ['Its', 'It\u2019s', 'It is\u2019', 'It s'], answer: 1, explain: '"It is" contracts to "It\u2019s."' },
                    { q: 'Complete: "I ___ 25 years old."', options: ['am', 'is', 'are', 'have'], answer: 0, explain: 'Use "am" with "I": I am 25 years old.' },
                    { q: 'Which is WRONG?', options: ['She is tall', 'He is happy', 'They is here', 'We are ready'], answer: 2, explain: '"They is" is wrong. It should be "They are."' },
                    { q: 'Complete: "We ___ from Spain."', options: ['am', 'is', 'are', 'be'], answer: 2, explain: 'We uses "are": We are from Spain.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "She ___ a doctor."', answer: 'is', explain: 'С he/she/it используем «is».' },
                    { type: 'choice', question: 'What is the contraction of "They are"?', options: ['They\'re', 'Their', 'There', 'They\'m'], answer: 0, explain: '«They are» сокращается до «They\'re».' },
                    { type: 'translate', question: 'Translate to English: "Мы из Испании."', answer: 'We are from Spain.', explain: 'С «we» используем «are»: We are from Spain.' },
                    { type: 'order', question: 'Put in order to make a question:', words: ['student', 'Are', 'a', 'you'], answer: 'Are you a student', explain: 'В вопросе глагол ставится первым: «Are you a student?»' },
                    { type: 'correct', question: 'Find and correct: "They is here."', answer: 'They are here.', explain: 'С «they» нужно использовать «are», а не «is».' }
                  ]
                }
              },
              {
                id: 'a1-l5', title: 'Countries & Nationalities', scenario: 'introductions',
                reading: {
                  title: 'Where Are You From?',
                  text: 'To talk about where you are from, use "to be from" + country: "I\u2019m from Brazil." For nationality, use the adjective form: "I\u2019m Brazilian." Note the patterns: many nationalities end in "-an" (Italy → Italian, America → American) or "-ese" (Japan → Japanese, China → Chinese). Some are irregular (France → French, Spain → Spanish). To ask where someone is from, say "Where are you from?" or "Where do you come from?" Both are correct. To talk about where you live now, use "live in": "I live in Berlin." Remember: countries are capitalized, but nationalities are also capitalized in English!',
                  vocab: [
                    { word: 'I\u2019m from Brazil', trans: 'Country of origin' },
                    { word: 'I\u2019m Brazilian', trans: 'Nationality' },
                    { word: 'Where are you from?', trans: 'Asking origin' },
                    { word: 'I live in...', trans: 'Current residence' },
                    { word: 'I come from...', trans: 'Another way to say origin' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '🌍', title: 'Countries', text: 'Italy, Japan, Brazil, Spain, France, Germany, Russia...' },
                    { emoji: '🇧🇷', title: 'Nationalities', text: 'Italian, Japanese, Brazilian, Spanish, French...' },
                    { emoji: '🗣️', title: 'Asking', text: '"Where are you from?" — the standard question.' },
                    { emoji: '🏠', title: 'Living', text: '"I live in..." — where you are now.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'What is the nationality of someone from Italy?', options: ['Italyan', 'Italian', 'Italic', 'Italyish'], answer: 1, explain: 'Italy → Italian.' },
                    { q: 'How do you ask where someone is from?', options: ['What is your name?', 'Where are you from?', 'How old are you?', 'How are you?'], answer: 1, explain: '"Where are you from?" asks about origin.' },
                    { q: 'Complete: "I ___ from Japan."', options: ['am', 'is', 'are', 'be'], answer: 0, explain: '"I am from Japan." Use "am" with "I."' },
                    { q: 'What is the nationality of someone from France?', options: ['Francish', 'Francean', 'French', 'Francic'], answer: 2, explain: 'France → French (irregular).' },
                    { q: 'Complete: "I live ___ Berlin."', options: ['from', 'in', 'at', 'on'], answer: 1, explain: 'Use "live in" + city/country: "I live in Berlin."' },
                    { q: 'What is the nationality of someone from China?', options: ['Chinese', 'Chinaish', 'Chinan', 'Chinesian'], answer: 0, explain: 'China → Chinese.' },
                    { q: 'Which is correct?', options: ['I\u2019m from brazil', 'I\u2019m from Brazil', 'I\u2019m from BRAZIL', 'i\u2019m from Brazil'], answer: 1, explain: 'Countries are capitalized: "Brazil."' },
                    { q: 'What is the nationality of someone from Spain?', options: ['Spainish', 'Spanish', 'Spainard', 'Spainan'], answer: 1, explain: 'Spain → Spanish.' },
                    { q: 'Complete: "She ___ from Canada."', options: ['am', 'is', 'are', 'be'], answer: 1, explain: 'Use "is" with she: "She is from Canada."' },
                    { q: 'What pattern do many nationalities follow?', options: ['-ish', '-an', '-ous', '-ful'], answer: 1, explain: 'Many end in "-an": American, Italian, Mexican.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "I live ___ Berlin."', answer: 'in', explain: '«Live in» используется с городами и странами.' },
                    { type: 'choice', question: 'What is the nationality of someone from Japan?', options: ['Japanish', 'Japanese', 'Japanan', 'Japanese'], answer: 1, explain: 'Япония → Japanese (окончание -ese).' },
                    { type: 'translate', question: 'Translate to English: "Я из Бразилии."', answer: 'I am from Brazil.', explain: '«I am from» + страна: I am from Brazil.' },
                    { type: 'order', question: 'Put in order to make a question:', words: ['from', 'Where', 'you', 'are'], answer: 'Where are you from', explain: 'Правильный порядок: «Where are you from?»' },
                    { type: 'correct', question: 'Find and correct: "I\'m from brazil."', answer: 'I\'m from Brazil.', explain: 'Названия стран всегда пишутся с большой буквы.' }
                  ]
                }
              },
              {
                id: 'a1-l6', title: 'My Family', scenario: 'aboutyou',
                reading: {
                  title: 'Talking About Your Family',
                  text: 'Family vocabulary is essential for everyday conversation. Your mother and father are your parents. Your brother and sister are your siblings. Your grandmother and grandfather are your grandparents. If you have children, you have a son (boy) or a daughter (girl). Your husband or wife is your spouse. A boyfriend or girlfriend is someone you are dating. Use possessive adjectives before family words: "my mother," "his brother," "her sister," "our parents," "their children." To ask about family, you can say "Do you have any siblings?" or "How many people are in your family?" An "only child" is someone with no brothers or sisters.',
                  vocab: [
                    { word: 'Mother / Father', trans: 'Mom / Dad' },
                    { word: 'Brother / Sister', trans: 'Siblings' },
                    { word: 'Grandmother / Grandfather', trans: 'Grandparents' },
                    { word: 'Son / Daughter', trans: 'Children' },
                    { word: 'Husband / Wife', trans: 'Married partners' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '👨‍👩‍👧‍👦', title: 'The family', text: 'Mother, father, brother, sister — the core family.' },
                    { emoji: '👴👵', title: 'Grandparents', text: 'Grandmother and grandfather — mom and dad\u2019s parents.' },
                    { emoji: '👶', title: 'Children', text: 'Son (boy) and daughter (girl).' },
                    { emoji: '💍', title: 'Partners', text: 'Husband, wife, boyfriend, girlfriend.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'What do you call your mother\u2019s mother?', options: ['Aunt', 'Grandmother', 'Sister', 'Cousin'], answer: 1, explain: 'Your mother\u2019s mother is your grandmother.' },
                    { q: 'What is the word for a male child?', options: ['Daughter', 'Son', 'Nephew', 'Brother'], answer: 1, explain: 'A male child is a son.' },
                    { q: 'Complete: "My father\u2019s brother is my ___."', options: ['Cousin', 'Uncle', 'Grandfather', 'Nephew'], answer: 1, explain: 'Your father\u2019s brother is your uncle.' },
                    { q: 'What are "siblings"?', options: ['Parents', 'Brothers and sisters', 'Grandparents', 'Children'], answer: 1, explain: 'Siblings = brothers and sisters.' },
                    { q: 'What do you call a married man?', options: ['Boyfriend', 'Husband', 'Partner', 'Fiance'], answer: 1, explain: 'A married man is a husband.' },
                    { q: 'What is an "only child"?', options: ['An only son', 'Someone with no siblings', 'The youngest child', 'The oldest child'], answer: 1, explain: 'An only child has no brothers or sisters.' },
                    { q: 'Complete: "Her sister is my ___."', options: ['Aunt', 'Cousin', 'Mother', 'Sister'], answer: 3, explain: 'If it\u2019s her sister, it\u2019s also your sister.' },
                    { q: 'What do you call your daughter\u2019s child?', options: ['Niece', 'Nephew', 'Grandchild', 'Cousin'], answer: 2, explain: 'Your child\u2019s child is your grandchild.' },
                    { q: 'Which is correct?', options: ['I brother', 'My brother', 'Me brother', 'Mine brother'], answer: 1, explain: 'Use the possessive "my": "my brother."' },
                    { q: 'How do you ask about siblings?', options: ['How are your siblings?', 'Do you have any siblings?', 'What is your sibling?', 'Where is your sibling?'], answer: 1, explain: '"Do you have any siblings?" is the standard question.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "My father\'s brother is my ___."', answer: 'uncle', explain: 'Брат отца или матери — это дядя (uncle).' },
                    { type: 'choice', question: 'What are "siblings"?', options: ['Parents', 'Brothers and sisters', 'Grandparents', 'Children'], answer: 1, explain: '«Siblings» — это братья и сёстры.' },
                    { type: 'translate', question: 'Translate to English: "У меня есть сестра."', answer: 'I have a sister.', explain: '«I have a sister» — у меня есть сестра.' },
                    { type: 'order', question: 'Put in order:', words: ['brother', 'My', 'is', 'tall'], answer: 'My brother is tall', explain: 'Правильный порядок: «My brother is tall».' },
                    { type: 'correct', question: 'Find and correct: "I brother is tall."', answer: 'My brother is tall.', explain: 'Нужно использовать притяжательное местоимение «my», а не «I».' }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* ===================== A2 ===================== */
      {
        id: 'A2',
        title: 'Elementary (A2)',
        desc: 'Build on your foundation. Learn time, daily routines, past simple, ordering food, directions, and weather.',
        units: [
          {
            id: 'a2-u3', title: 'Daily Life', desc: 'Time, routines, and the calendar.',
            lessons: [
              {
                id: 'a2-l7', title: 'What Time Is It?', scenario: 'numbers',
                reading: {
                  title: 'Telling the Time',
                  text: 'There are two common ways to tell the time in English. The digital way: "It\u2019s three thirty" (3:30) or "It\u2019s seven fifteen" (7:15). The traditional way uses "past" and "to": "It\u2019s half past three" (3:30), "It\u2019s a quarter past seven" (7:15), or "It\u2019s a quarter to five" (4:45). For times like 6:10, say "ten past six." For 6:50, say "ten to seven." Use "a.m." for morning (before noon) and "p.m." for afternoon and evening. "12 p.m." is noon. To ask the time, say "What time is it?" or "Do you have the time?" Use prepositions: "at" for clock times ("at 3 o\u2019clock"), "on" for days ("on Monday"), "in" for months ("in May").',
                  vocab: [
                    { word: 'What time is it?', trans: 'Asking the time' },
                    { word: 'Half past three', trans: '3:30' },
                    { word: 'A quarter to five', trans: '4:45' },
                    { word: 'a.m. / p.m.', trans: 'Morning / afternoon-evening' },
                    { word: 'At 3 o\u2019clock', trans: 'Specific time' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '⏰', title: 'Digital time', text: '"It\u2019s three thirty." Simple and clear.' },
                    { emoji: '🕐', title: 'Past and to', text: '"Half past three." "A quarter to five." Traditional English.' },
                    { emoji: '🌅', title: 'a.m. and p.m.', text: 'a.m. = morning. p.m. = afternoon/evening. 12 p.m. = noon.' },
                    { emoji: '📅', title: 'Time prepositions', text: 'at + clock time. on + days. in + months/years.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'How do you say 3:30 traditionally?', options: ['Three thirty', 'Half past three', 'Three half', 'Thirty past three'], answer: 1, explain: '3:30 = "half past three" in traditional English.' },
                    { q: 'What does "a.m." mean?', options: ['Afternoon', 'Before noon', 'Evening', 'Night'], answer: 1, explain: 'a.m. = ante meridiem (before noon, morning).' },
                    { q: 'How do you say 4:45?', options: ['A quarter past five', 'A quarter to five', 'Four forty-five', 'Both B and C'], answer: 3, explain: '4:45 = "a quarter to five" or "four forty-five."' },
                    { q: 'What is 12 p.m.?', options: ['Midnight', 'Noon', 'Morning', 'Evening'], answer: 1, explain: '12 p.m. = noon (midday).' },
                    { q: 'Complete: "The meeting is ___ 3 o\u2019clock."', options: ['in', 'on', 'at', 'to'], answer: 2, explain: 'Use "at" with clock times: "at 3 o\u2019clock."' },
                    { q: 'Complete: "I was born ___ May."', options: ['at', 'on', 'in', 'to'], answer: 2, explain: 'Use "in" with months: "in May."' },
                    { q: 'How do you say 6:10?', options: ['Ten past six', 'Six ten past', 'Ten to six', 'Six and ten'], answer: 0, explain: '6:10 = "ten past six."' },
                    { q: 'How do you ask the time?', options: ['What is time?', 'What time is it?', 'How much time?', 'Which time?'], answer: 1, explain: '"What time is it?" is the standard question.' },
                    { q: 'Complete: "See you ___ Monday."', options: ['at', 'on', 'in', 'to'], answer: 1, explain: 'Use "on" with days: "on Monday."' },
                    { q: 'What is 7:15 in traditional English?', options: ['A quarter past seven', 'Seven fifteen', 'A quarter to eight', 'Both A and B'], answer: 3, explain: '7:15 = "a quarter past seven" or "seven fifteen."' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "It\'s half ___ three." (3:30)', answer: 'past', explain: '3:30 традиционно — «half past three».' },
                    { type: 'choice', question: 'What does "a.m." mean?', options: ['Afternoon', 'Before noon', 'Evening', 'Night'], answer: 1, explain: 'a.m. — это время до полудня (утро).' },
                    { type: 'translate', question: 'Translate to English: "Который час?"', answer: 'What time is it?', explain: 'Стандартный вопрос о времени — «What time is it?»' },
                    { type: 'order', question: 'Put in order (3:30 traditional):', words: ['past', 'half', 'three'], answer: 'half past three', explain: 'Правильный порядок: «half past three».' },
                    { type: 'correct', question: 'Find and correct: "The meeting is in 3 o\'clock."', answer: 'The meeting is at 3 o\'clock.', explain: 'С-clock times используем предлог «at», а не «in».' }
                  ]
                }
              },
              {
                id: 'a2-l8', title: 'My Daily Routine', scenario: 'aboutyou',
                reading: {
                  title: 'Present Simple for Daily Routines',
                  text: 'Use the present simple to talk about habits and daily routines. The form is simple: I work, you work, we work, they work. But for he/she/it, add -s: he works, she works. For negatives, use "don\u2019t" or "doesn\u2019t": I don\u2019t work on Sundays. She doesn\u2019t drink coffee. For questions, use "Do" or "Does": Do you like tea? Does she speak English? Common routine phrases: "I get up at 7," "I have breakfast," "I go to work," "I come home at 6," "I go to bed at 11." Adverbs of frequency go before the main verb: "I always eat breakfast," "She usually wakes up early," "They sometimes go out."',
                  vocab: [
                    { word: 'I get up at 7', trans: 'Wake up' },
                    { word: 'I have breakfast', trans: 'Morning meal' },
                    { word: 'I go to work', trans: 'Commute' },
                    { word: 'I come home', trans: 'Return' },
                    { word: 'always / usually / sometimes', trans: 'Frequency adverbs' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '⏰', title: 'Morning', text: '"I get up at 7. I have breakfast. I go to work."' },
                    { emoji: '💼', title: 'Daytime', text: '"I work from 9 to 5. I have lunch at noon."' },
                    { emoji: '🏠', title: 'Evening', text: '"I come home at 6. I have dinner. I relax."' },
                    { emoji: '🌙', title: 'Night', text: '"I go to bed at 11. I sleep 8 hours."' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'Complete: "She ___ coffee every morning."', options: ['drink', 'drinks', 'drinking', 'drank'], answer: 1, explain: 'Add -s for he/she/it: "She drinks coffee."' },
                    { q: 'How do you make the negative of "I work"?', options: ['I no work', 'I don\u2019t work', 'I not work', 'I am not work'], answer: 1, explain: 'Use "don\u2019t": "I don\u2019t work."' },
                    { q: 'Complete the question: "___ you like tea?"', options: ['Are', 'Do', 'Is', 'Does'], answer: 1, explain: 'Use "Do" with "you": "Do you like tea?"' },
                    { q: 'Complete: "He ___ to work by bus."', options: ['go', 'goes', 'going', 'gone'], answer: 1, explain: 'Add -es for he: "He goes to work."' },
                    { q: 'Where do frequency adverbs go?', options: ['After the verb', 'Before the main verb', 'At the end', 'At the beginning'], answer: 1, explain: 'Adverbs go before the main verb: "I always eat breakfast."' },
                    { q: 'Complete: "She doesn\u2019t ___ meat."', options: ['eats', 'eat', 'eating', 'ate'], answer: 1, explain: 'After "doesn\u2019t," use the base verb: "doesn\u2019t eat."' },
                    { q: 'What tense describes habits and routines?', options: ['Past simple', 'Present simple', 'Future', 'Present continuous'], answer: 1, explain: 'Present simple is for habits and routines.' },
                    { q: 'Complete: "I ___ up at 7 every day."', options: ['get', 'gets', 'getting', 'got'], answer: 0, explain: '"I get up" — no -s with "I."' },
                    { q: 'Which is correct?', options: ['He work hard', 'He works hard', 'He working hard', 'He is work hard'], answer: 1, explain: 'Add -s: "He works hard."' },
                    { q: 'Complete: "___ she speak English?"', options: ['Do', 'Does', 'Is', 'Are'], answer: 1, explain: 'Use "Does" with she: "Does she speak English?"' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "She ___ coffee every morning."', answer: 'drinks', explain: 'С he/she/it добавляем -s: «She drinks coffee».' },
                    { type: 'choice', question: 'How do you make the negative of "I work"?', options: ['I no work', 'I don\'t work', 'I not work', 'I am not work'], answer: 1, explain: 'Отрицание: «I don\'t work».' },
                    { type: 'translate', question: 'Translate to English: "Я встаю в 7."', answer: 'I get up at 7.', explain: '«I get up at 7» — я встаю в 7.' },
                    { type: 'order', question: 'Put in order:', words: ['breakfast', 'always', 'I', 'eat'], answer: 'I always eat breakfast', explain: 'Наречие частотности ставится перед основным глаголом: «I always eat breakfast».' },
                    { type: 'correct', question: 'Find and correct: "He work hard."', answer: 'He works hard.', explain: 'С he нужно добавить -s: «He works hard».' }
                  ]
                }
              },
              {
                id: 'a2-l9', title: 'Days, Months & Dates', scenario: 'smalltalk',
                reading: {
                  title: 'The Calendar in English',
                  text: 'In English, days of the week and months are always capitalized. The days are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. The weekend is Saturday and Sunday in most English-speaking countries. The months are: January, February, March, April, May, June, July, August, September, October, November, December. To say a date, use ordinal numbers: "the first of May" (British) or "May first" (American). Ordinals: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th). To ask the date, say "What\u2019s the date today?" or "What date is it?" "Last week" = the week before. "Next week" = the week after.',
                  vocab: [
                    { word: 'Monday–Sunday', trans: 'Days of the week' },
                    { word: 'January–December', trans: 'Months' },
                    { word: 'The 5th of March', trans: 'British date format' },
                    { word: 'March 5th', trans: 'American date format' },
                    { word: 'Last week / Next week', trans: 'Relative time' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '📅', title: '7 Days', text: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.' },
                    { emoji: '🗓️', title: '12 Months', text: 'January to December — always capitalized!' },
                    { emoji: '🔢', title: 'Ordinal dates', text: '1st, 2nd, 3rd, 4th, 5th... the 5th of March.' },
                    { emoji: '⏮️', title: 'Relative time', text: 'Last week = before. Next week = after. Tomorrow = the day after today.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'Which days are the weekend in most English-speaking countries?', options: ['Friday and Saturday', 'Saturday and Sunday', 'Sunday and Monday', 'Friday and Sunday'], answer: 1, explain: 'The weekend is Saturday and Sunday.' },
                    { q: 'What is the 3rd day of the week?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 2, explain: 'Monday (1st), Tuesday (2nd), Wednesday (3rd).' },
                    { q: 'How do you write the date "March 5" in British English?', options: ['March 5', 'The 5th of March', '5 March', 'Both B and C'], answer: 3, explain: 'British: "the 5th of March" or "5 March."' },
                    { q: 'Which is correct about capitalization?', options: ['monday', 'Monday', 'MONDAY', 'monDay'], answer: 1, explain: 'Days are capitalized: "Monday."' },
                    { q: 'What is the ordinal for "3"?', options: ['Three', 'Third', 'Threeth', 'Threest'], answer: 1, explain: '3rd = "third."' },
                    { q: 'What does "next week" mean?', options: ['The week before', 'The week after', 'This week', 'Last week'], answer: 1, explain: '"Next week" = the week after this one.' },
                    { q: 'How many months are in a year?', options: ['10', '11', '12', '13'], answer: 2, explain: 'There are 12 months in a year.' },
                    { q: 'What is the 1st month?', options: ['February', 'January', 'March', 'April'], answer: 1, explain: 'January is the first month.' },
                    { q: 'How do you ask the date?', options: ['What day is it?', 'What\u2019s the date today?', 'How is the date?', 'Which date?'], answer: 1, explain: '"What\u2019s the date today?" is the standard question.' },
                    { q: 'What is the ordinal for "1"?', options: ['One', 'First', 'Oneth', 'Onest'], answer: 1, explain: '1st = "first."' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "What\'s the ___ today?" (asking the date)', answer: 'date', explain: '«What\'s the date today?» — стандартный вопрос о дате.' },
                    { type: 'choice', question: 'Which days are the weekend in most English-speaking countries?', options: ['Friday and Saturday', 'Saturday and Sunday', 'Sunday and Monday', 'Monday and Tuesday'], answer: 1, explain: 'Выходные — это суббота и воскресенье.' },
                    { type: 'translate', question: 'Translate to English: "Сегодня понедельник."', answer: 'Today is Monday.', explain: '«Today is Monday» — сегодня понедельник.' },
                    { type: 'order', question: 'Put the days in order (first three):', words: ['Tuesday', 'Wednesday', 'Monday'], answer: 'Monday Tuesday Wednesday', explain: 'Порядок: Monday (1), Tuesday (2), Wednesday (3).' },
                    { type: 'correct', question: 'Find and correct: "monday is the first day."', answer: 'Monday is the first day.', explain: 'Дни недели всегда пишутся с большой буквы.' }
                  ]
                }
              }
            ]
          },
          {
            id: 'a2-u4', title: 'Out and About', desc: 'Food, directions, and weather.',
            lessons: [
              {
                id: 'a2-l10', title: 'At the Café', scenario: 'cafe',
                reading: {
                  title: 'Ordering Food and Drinks',
                  text: 'When ordering in a café or restaurant, polite phrases are essential. "Can I have a coffee, please?" is casual but polite. "I\u2019d like the soup" is slightly more formal. "Could I get a tea?" is very polite. Always add "please" at the end! The waiter might ask "For here or to go?" (American) or "Eat in or take away?" (British). To ask the price, say "How much is it?" or "How much does it cost?" When you\u2019re finished, ask for the bill: "The bill, please" (British) or "The check, please" (American). To pay, you can say "Can I pay by card?" or "I\u2019ll pay cash." Tip: in English-speaking countries, it\u2019s common to say "thank you" when receiving your order.',
                  vocab: [
                    { word: 'Can I have...?', trans: 'Polite order' },
                    { word: 'I\u2019d like...', trans: 'Another polite order' },
                    { word: 'For here or to go?', trans: 'Eat in or take away' },
                    { word: 'The bill, please', trans: 'Asking for the check' },
                    { word: 'Can I pay by card?', trans: 'Payment question' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '☕', title: 'Ordering', text: '"Can I have a coffee, please?" — always say please!' },
                    { emoji: '🍽️', title: 'Choosing', text: '"I\u2019d like the soup." "Could I get a salad?"' },
                    { emoji: '💰', title: 'Paying', text: '"How much is it?" "Can I pay by card?"' },
                    { emoji: '🧾', title: 'The bill', text: '"The bill, please" (UK) or "The check, please" (US).' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'What is a polite way to order?', options: ['Give me coffee', 'Can I have a coffee, please?', 'Coffee now', 'I want coffee'], answer: 1, explain: '"Can I have a coffee, please?" is polite.' },
                    { q: 'What does "For here or to go?" mean?', options: ['What time?', 'Eat in or take away?', 'Hot or cold?', 'Large or small?'], answer: 1, explain: 'It asks if you\u2019ll eat in the café or take the food with you.' },
                    { q: 'How do you ask for the check in British English?', options: ['The check, please', 'The bill, please', 'Money, please', 'Give me bill'], answer: 1, explain: 'In British English, ask for "the bill."' },
                    { q: 'Complete: "I\u2019d ___ the soup, please."', options: ['like', 'want', 'have', 'get'], answer: 0, explain: '"I\u2019d like the soup" = "I would like the soup."' },
                    { q: 'How do you ask about payment?', options: ['How money?', 'Can I pay by card?', 'What pay?', 'Pay how?'], answer: 1, explain: '"Can I pay by card?" asks about payment method.' },
                    { q: 'What do Americans call the bill?', options: ['Bill', 'Check', 'Receipt', 'Tab'], answer: 1, explain: 'In American English, the bill is called "the check."' },
                    { q: 'What should you always say when ordering?', options: ['Quickly', 'Please', 'Now', 'Thanks'], answer: 1, explain: 'Always add "please" when ordering.' },
                    { q: 'Complete: "How ___ is it?"', options: ['many', 'much', 'cost', 'price'], answer: 1, explain: '"How much is it?" asks the price.' },
                    { q: 'What does "take away" mean?', options: ['Remove food', 'Food to go', 'Eat here', 'Deliver'], answer: 1, explain: '"Take away" = food to go (not eating in).' },
                    { q: 'Which is the MOST polite?', options: ['Give me a tea', 'I want tea', 'Could I get a tea, please?', 'Tea'], answer: 2, explain: '"Could I get a tea, please?" is the most polite option.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "Can I have a coffee, ___?"', answer: 'please', explain: 'Всегда добавляйте «please» при заказе.' },
                    { type: 'choice', question: 'How do you ask for the check in British English?', options: ['The check, please', 'The bill, please', 'Money, please', 'Give me bill'], answer: 1, explain: 'В британском английском счёт называют «the bill».' },
                    { type: 'translate', question: 'Translate to English: "Можно кофе, пожалуйста?"', answer: 'Can I have a coffee, please?', explain: '«Can I have a coffee, please?» — вежливый заказ.' },
                    { type: 'order', question: 'Put in order:', words: ['soup', 'like', 'I\'d', 'the'], answer: 'I\'d like the soup', explain: '«I\'d like the soup» = я хотел бы суп.' },
                    { type: 'correct', question: 'Find and correct: "Give me a coffee."', answer: 'Can I have a coffee, please?', explain: '«Give me» — грубо. Лучше: «Can I have a coffee, please?»' }
                  ]
                }
              },
              {
                id: 'a2-l11', title: 'Where Is It? (Directions)', scenario: 'directions',
                reading: {
                  title: 'Asking for and Giving Directions',
                  text: 'When you need directions, start politely: "Excuse me, where is the station?" or "Excuse me, how do I get to the museum?" Common direction phrases: "Go straight ahead," "Turn left," "Turn right," "Take the first/second street on the left." Prepositions of place are key: "next to" (beside), "across from" (opposite), "between" (in the middle of two things), "behind" (at the back), "in front of" (ahead), "on the corner of" (at the intersection). To ask about distance, say "Is it far from here?" or "How long does it take to get there?" The answer might be "It\u2019s about 5 minutes on foot" or "It\u2019s a 10-minute walk." Remember: "Excuse me" is the polite way to approach a stranger.',
                  vocab: [
                    { word: 'Excuse me, where is...?', trans: 'Polite direction question' },
                    { word: 'Go straight ahead', trans: 'Continue forward' },
                    { word: 'Turn left / right', trans: 'Change direction' },
                    { word: 'Next to / across from', trans: 'Position words' },
                    { word: 'Is it far?', trans: 'Asking distance' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '🧭', title: 'Asking', text: '"Excuse me, where is the station?" — always start politely!' },
                    { emoji: '➡️', title: 'Directions', text: '"Go straight ahead." "Turn left." "Turn right."' },
                    { emoji: '📍', title: 'Positions', text: 'Next to, across from, between, behind, in front of.' },
                    { emoji: '🚶', title: 'Distance', text: '"Is it far?" — "No, about 5 minutes on foot."' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'How do you politely ask for directions?', options: ['Where is it?', 'Excuse me, where is the station?', 'Tell me where', 'Station where?'], answer: 1, explain: 'Start with "Excuse me" to be polite.' },
                    { q: 'What does "go straight ahead" mean?', options: ['Turn around', 'Continue forward', 'Stop here', 'Go back'], answer: 1, explain: '"Go straight ahead" = continue in the same direction.' },
                    { q: 'Complete: "The bank is ___ the post office."', options: ['next to', 'go', 'turn', 'straight'], answer: 0, explain: '"Next to" means beside.' },
                    { q: 'What does "across from" mean?', options: ['Next to', 'Opposite', 'Behind', 'Between'], answer: 1, explain: '"Across from" = opposite.' },
                    { q: 'How do you ask about distance?', options: ['How long is it?', 'Is it far from here?', 'Where is it far?', 'How distance?'], answer: 1, explain: '"Is it far from here?" asks about distance.' },
                    { q: 'What does "between" mean?', options: ['Beside', 'In the middle of two things', 'Behind', 'In front of'], answer: 1, explain: '"Between" = in the middle of two things.' },
                    { q: 'Complete: "Turn ___ at the second street."', options: ['straight', 'left', 'ahead', 'between'], answer: 1, explain: '"Turn left" or "turn right" at a street.' },
                    { q: 'What should you say before asking a stranger?', options: ['Hello there', 'Excuse me', 'Hey you', 'Listen'], answer: 1, explain: '"Excuse me" is the polite way to approach a stranger.' },
                    { q: 'Complete: "It\u2019s a 10-minute ___."', options: ['drive', 'walk', 'Both A and B', 'run'], answer: 2, explain: 'Both "a 10-minute drive" and "a 10-minute walk" are correct.' },
                    { q: 'What does "on the corner of" mean?', options: ['In the middle', 'At the intersection', 'Behind something', 'Far away'], answer: 1, explain: '"On the corner of" = at the intersection of two streets.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "___ me, where is the station?"', answer: 'Excuse', explain: '«Excuse me» — вежливое обращение к незнакомцу.' },
                    { type: 'choice', question: 'What does "across from" mean?', options: ['Next to', 'Opposite', 'Behind', 'Between'], answer: 1, explain: '«Across from» означает напротив.' },
                    { type: 'translate', question: 'Translate to English: "Извините, как пройти к музею?"', answer: 'Excuse me, how do I get to the museum?', explain: '«How do I get to...?» — как пройти к...?' },
                    { type: 'order', question: 'Put in order:', words: ['ahead', 'Go', 'straight'], answer: 'Go straight ahead', explain: '«Go straight ahead» — идите прямо.' },
                    { type: 'correct', question: 'Find and correct: "The bank is go the post office."', answer: 'The bank is next to the post office.', explain: 'Нужен предлог места: «next to» (рядом с).' }
                  ]
                }
              },
              {
                id: 'a2-l12', title: 'Weather & Small Talk', scenario: 'smalltalk',
                reading: {
                  title: 'Talking About the Weather',
                  text: 'Small talk is essential in English-speaking cultures. The weather is the #1 small talk topic! Common phrases: "Lovely weather today, isn\u2019t it?" "It\u2019s a bit cold." "It\u2019s raining again." "The sun is finally out." Idioms: "It\u2019s raining cats and dogs" = heavy rain. "Under the weather" = feeling sick. Other small talk topics: weekend plans ("What are you up to this weekend?"), compliments ("I love your jacket!"), and food ("Have you tried the new café?"). Common small talk responses: "No worries" (no problem), "Have a good one!" (friendly goodbye), "Sounds great!" (enthusiastic agreement), "I know, right?" (agreeing strongly). Small talk isn\u2019t about deep conversation — it\u2019s about being friendly and making a connection.',
                  vocab: [
                    { word: 'Lovely weather today', trans: 'Weather comment' },
                    { word: 'It\u2019s raining cats and dogs', trans: 'Idiom: heavy rain' },
                    { word: 'What are you up to?', trans: 'Asking about plans' },
                    { word: 'No worries', trans: 'No problem' },
                    { word: 'Have a good one!', trans: 'Friendly goodbye' }
                  ]
                },
                video: {
                  slides: [
                    { emoji: '☀️', title: 'Weather chat', text: '"Lovely weather today!" — the #1 small talk topic.' },
                    { emoji: '🌧️', title: 'Rain idioms', text: '"It\u2019s raining cats and dogs" = heavy rain.' },
                    { emoji: '💬', title: 'Plans', text: '"What are you up to this weekend?" — asking about plans.' },
                    { emoji: '👋', title: 'Goodbyes', text: '"Have a good one!" "No worries." Friendly and casual.' }
                  ]
                },
                quiz: {
                  pool: [
                    { q: 'What does "raining cats and dogs" mean?', options: ['Animals falling', 'Heavy rain', 'Light rain', 'No rain'], answer: 1, explain: 'It\u2019s an idiom meaning heavy rain.' },
                    { q: 'What is the #1 small talk topic in English?', options: ['Politics', 'The weather', 'Money', 'Age'], answer: 1, explain: 'The weather is the most common small talk topic.' },
                    { q: 'What does "What are you up to?" mean?', options: ['Where are you?', 'What are you doing?', 'How old are you?', 'Are you okay?'], answer: 1, explain: 'It asks about your current activity or plans.' },
                    { q: 'What does "No worries" mean?', options: ['I\u2019m worried', 'No problem', 'Don\u2019t think', 'Goodbye'], answer: 1, explain: '"No worries" = "no problem" or "it\u2019s okay."' },
                    { q: 'Complete: "___ weather today, isn\u2019t it?"', options: ['Bad', 'Lovely', 'Terrible', 'Horrible'], answer: 1, explain: '"Lovely weather today, isn\u2019t it?" is a classic small talk line.' },
                    { q: 'What does "under the weather" mean?', options: ['Outside', 'Feeling sick', 'In the rain', 'Cold'], answer: 1, explain: '"Under the weather" = feeling unwell/sick.' },
                    { q: 'What does "Have a good one!" mean?', options: ['Have a good day', 'Have one item', 'Goodbye forever', 'Take one'], answer: 0, explain: '"Have a good one!" = "Have a good day!" (friendly goodbye).' },
                    { q: 'Is small talk about deep conversation?', options: ['Yes', 'No, it\u2019s about being friendly', 'Only about politics', 'Only about money'], answer: 1, explain: 'Small talk is about being friendly, not deep conversation.' },
                    { q: 'Complete: "The sun is finally ___!"', options: ['in', 'out', 'on', 'up'], answer: 1, explain: '"The sun is out" means the sun is shining.' },
                    { q: 'What is a good small talk compliment?', options: ['You look tired', 'I love your jacket!', 'How much did that cost?', 'Are you sick?'], answer: 1, explain: 'Compliments like "I love your jacket!" are great small talk.' }
                  ],
                  showCount: 5, passThreshold: 0.5
                },
                homework: {
                  exercises: [
                    { type: 'fill-blank', question: 'Complete: "It\'s raining cats and ___."', answer: 'dogs', explain: '«Raining cats and dogs» — идиома, означающая сильный дождь.' },
                    { type: 'choice', question: 'What is the #1 small talk topic in English?', options: ['Politics', 'The weather', 'Money', 'Age'], answer: 1, explain: 'Погода — самая популярная тема для small talk.' },
                    { type: 'translate', question: 'Translate to English: "Какая сегодня прекрасная погода!"', answer: 'Lovely weather today!', explain: '«Lovely weather today!» — классическая фраза для small talk.' },
                    { type: 'order', question: 'Put in order:', words: ['worries', 'No'], answer: 'No worries', explain: '«No worries» = «без проблем».' },
                    { type: 'correct', question: 'Find and correct: "Have a good one! means Have one item."', answer: 'Have a good one! means Have a good day.', explain: '«Have a good one!» означает «хорошего дня!» (дружеское прощание).' }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData.FREE_COURSE = FREE_COURSE;
})(window);
