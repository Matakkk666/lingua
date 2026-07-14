/* ============================================================
   AES Paid Course 7: Лаборатория акцента (B1-B2)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-accent',
    title: 'Лаборатория акцента',
    price: 1500, oldPrice: 2990,
    level: 'B1-B2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'dustyPink',
    art: ['#F0E2EA', '#E2C7D6'],
    tagline: 'Улучшите произношение с фонетическим анализом. 6 модулей.',
    lessons: [
      {
        id: 'pca-l1', topic: 'Vowel sounds and phonetics',
        objective: 'Различать английские гласные звуки и использовать фонетические символы.',
        estimatedTime: '55 минут',
        reading: {
          title: 'English Vowel Sounds and Phonetic Symbols',
          text: 'English has a rich vowel system with around 20 vowel sounds, but only 5 vowel letters (a, e, i, o, u). This is why pronunciation can be tricky. Learning the phonetic symbols helps you use a dictionary and pronounce words correctly.\n\n**Short vowels:**\n- /ae/ as in "cat" - open, short sound\n- /e/ as in "beg" - short, relaxed\n- /I/ as in "sit" - short, lax\n- /Q/ as in "hot" - short, rounded (British) or open (American)\n- /V/ as in "cup" - short, open\n\n**Long vowels:**\n- /i:/ as in "sheep" - long, tense (compare with "ship" /I/)\n- /A:/ as in "car" - long, open\n- /O:/ as in "door" - long, rounded\n- /u:/ as in "fool" - long, rounded (compare with "full" /U/)\n- /3:/ as in "bird" - long, central\n\n**Minimal pairs:**\nMinimal pairs are words that differ by only one sound. They are excellent for training your ear:\n- sheep /i:/ vs ship /I/\n- bed /e/ vs bad /ae/\n- full /U/ vs fool /u:/\n- cot /Q/ vs caught /O:/\n- cap /ae/ vs cup /V/\n\n**Diphthongs (two sounds in one):**\n- /eI/ as in "day" (a + I)\n- /aI/ as in "my" (a + I)\n- /OI/ as in "boy" (O + I)\n- /aU/ as in "now" (a + U)\n- /@U/ as in "go" (@ + U)\n- /I@/ as in "here" (I + @)\n- /e@/ as in "hair" (e + @)\n- /U@/ as in "tour" (U + @)\n\n**Why phonetic symbols matter:**\nThe same letter can represent different sounds: "a" in "cat" /ae/, "father" /A:/, "cake" /eI/, "about" /@/. The phonetic transcription tells you exactly how to say a word. When you learn a new word, always check its phonetic transcription in a dictionary.\n\nPractice: Read minimal pairs aloud and record yourself. Can you hear the difference between "sheep" and "ship"?',
          textRu: 'В английском богата система гласных — около 20 гласных звуков, но всего 5 гласных букв (a, e, i, o, u). Именно поэтому произношение может быть сложным. Изучение фонетических символов помогает пользоваться словарём и правильно произносить слова.\n\n**Краткие гласные:**\n- /ae/ как в "cat" — открытый, краткий звук\n- /e/ как в "beg" — краткий, расслабленный\n- /I/ как в "sit" — краткий, нелабиализованный\n- /Q/ как в "hot" — краткий, округлённый (британский) или открытый (американский)\n- /V/ как в "cup" — краткий, открытый\n\n**Долгие гласные:**\n- /i:/ как в "sheep" — долгий, напряжённый (сравните с "ship" /I/)\n- /A:/ как в "car" — долгий, открытый\n- /O:/ как в "door" — долгий, округлённый\n- /u:/ как в "fool" — долгий, округлённый (сравните с "full" /U/)\n- /3:/ как в "bird" — долгий, центральный\n\n**Минимальные пары:**\nМинимальные пары — это слова, отличающиеся только одним звуком. Они отлично подходят для тренировки слуха:\n- sheep /i:/ vs ship /I/\n- bed /e/ vs bad /ae/\n- full /U/ vs fool /u:/\n- cot /Q/ vs caught /O:/\n- cap /ae/ vs cup /V/\n\n**Дифтонги (два звука в одном):**\n- /eI/ как в "day" (a + I)\n- /aI/ как в "my" (a + I)\n- /OI/ как в "boy" (O + I)\n- /aU/ как в "now" (a + U)\n- /@U/ как в "go" (@ + U)\n- /I@/ как в "here" (I + @)\n- /e@/ как в "hair" (e + @)\n- /U@/ как в "tour" (U + @)\n\n**Почему важны фонетические символы:**\nОдна и та же буква может обозначать разные звуки: "a" в "cat" /ae/, "father" /A:/, "cake" /eI/, "about" /@/. Фонетическая транскрипция точно говорит, как произносить слово. Когда учите новое слово, всегда проверяйте его фонетическую транскрипцию в словаре.\n\nПрактика: Прочитайте минимальные пары вслух и запишите себя. Слышите ли вы разницу между "sheep" и "ship"?',
          vocab: [
            { word: '/i:/ vs /I/', trans: 'Долгий vs краткий (sheep vs ship)' },
            { word: '/ae/ vs /e/', trans: 'Открытый vs закрытый (bad vs bed)' },
            { word: '/u:/ vs /U/', trans: 'Долгий vs краткий (fool vs full)' },
            { word: '/Q/ vs /O:/', trans: 'Краткий vs долгий (hot vs door)' },
            { word: '/V/', trans: 'Краткий открытый (cup, but, love)' },
            { word: 'diphthong', trans: 'Дифтонг (двойной гласный)' },
            { word: 'minimal pairs', trans: 'Минимальные пары (отличаются одним звуком)' },
            { word: 'phonetic symbol', trans: 'Фонетический символ' }
          ]
        },
        video: { slides: [
          { emoji: ' vowels', title: 'Vowel system', text: '20 гласных звуков, 5 букв. Фонетика помогает.' },
          { emoji: ' cat', title: 'Short /ae/', text: 'cat, bad, map - открытый краткий звук.' },
          { emoji: ' beg', title: 'Short /e/', text: 'beg, bed, pen - краткий закрытый.' },
          { emoji: ' sit', title: 'Short /I/', text: 'sit, ship, big - краткий, расслабленный.' },
          { emoji: ' sheep', title: 'Long /i:/', text: 'sheep, see, green - долгий, напряжённый.' },
          { emoji: ' pair', title: 'Minimal pairs', text: 'sheep/ship, bed/bad, full/fool - тренируйте ухо!' },
          { emoji: ' day', title: 'Diphthongs', text: 'day /eI/, my /aI/, boy /OI/, now /aU/, go /@U/.' },
          { emoji: ' dict', title: 'Use dictionary', text: 'Всегда проверяйте транскрипцию новых слов.' }
        ]},
        quiz: { pool: [
          { q: 'Which word has the /i:/ sound?', options: ['ship', 'sheep', 'sit', 'big'], answer: 1, explain: 'sheep = /Si:p/, долгий гласный.' },
          { q: 'Which word has the short /I/ sound?', options: ['see', 'sheep', 'sit', 'green'], answer: 2, explain: 'sit = /sIt/, краткий гласный.' },
          { q: 'Which pair is a minimal pair?', options: ['cat/dog', 'sheep/ship', 'big/large', 'good/well'], answer: 1, explain: 'sheep/ship отличаются одним звуком.' },
          { q: 'Which word has the /ae/ sound?', options: ['bed', 'bad', 'bed', 'bead'], answer: 1, explain: 'bad = /baed/, открытый краткий.' },
          { q: 'Which word has the /e/ sound?', options: ['cat', 'bed', 'cup', 'door'], answer: 1, explain: 'bed = /bed/, краткий закрытый.' },
          { q: 'Which word has the /u:/ sound?', options: ['full', 'fool', 'foot', 'book'], answer: 1, explain: 'fool = /fu:l/, долгий.' },
          { q: 'Which word has the /U/ sound?', options: ['fool', 'food', 'full', 'moon'], answer: 2, explain: 'full = /fUl/, краткий.' },
          { q: 'How many vowel letters are in English?', options: ['3', '5', '7', '20'], answer: 1, explain: '5 букв (a, e, i, o, u), но ~20 звуков.' },
          { q: 'What is a diphthong?', options: ['One sound', 'Two sounds in one', 'A consonant', 'A silent letter'], answer: 1, explain: 'Дифтонг = двойной гласный звук.' },
          { q: 'Which word has the /eI/ diphthong?', options: ['day', 'sit', 'cup', 'hot'], answer: 0, explain: 'day = /deI/.' },
          { q: 'Which word has the /aI/ diphthong?', options: ['bed', 'my', 'cat', 'door'], answer: 1, explain: 'my = /maI/.' },
          { q: 'Why use phonetic symbols?', options: ['They are pretty', 'They show exact pronunciation', 'They are shorter', 'They are required'], answer: 1, explain: 'Точная запись произношения.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Fill in the sound: "sh__p" (/i:/) = long vowel', answer: 'ee', explain: 'sheep = /Si:p/, долгий гласный.' },
          { type: 'fill-blank', question: 'Fill in the sound: "sh__p" (/I/) = short vowel', answer: 'i', explain: 'ship = /SIp/, краткий гласный.' },
          { type: 'choice', question: 'Which is a minimal pair?', options: ['cat/dog', 'sheep/ship', 'big/small', 'good/bad'], answer: 1, explain: 'Отличаются одним звуком.' },
          { type: 'translate', question: 'Переведите и произнесите: "Долгий гласный звук"', answer: 'long vowel sound', explain: 'long vowel = долгий гласный.' },
          { type: 'order', question: 'Put in order (short vowel word):', words: ['sit', 'I', 'here', 'down'], answer: 'I sit down here', explain: 'sit = /sIt/.' },
          { type: 'correct', question: 'Find and correct the phonetic error: "sheep" is pronounced /SIp/.', answer: 'sheep is pronounced /Si:p/', explain: 'sheep = долгий /i:/, не краткий /I/.' }
        ]}
      },
      {
        id: 'pca-l2', topic: 'Consonants and difficult sounds',
        objective: 'Произносить трудные согласные звуки английского языка.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Difficult Consonants: th, v/w, l/r, and Silent Letters',
          text: 'English consonants can be challenging, especially sounds that do not exist in your native language. Let us look at the most difficult ones.\n\n**The "th" sounds:**\nEnglish has two "th" sounds:\n1. Voiceless /T/ as in "think", "three", "bath" - put your tongue between your teeth and blow air out.\n2. Voiced /D/ as in "this", "that", "the", "mother" - same position, but use your voice.\n\nCommon mistake: replacing /T/ with /s/ or /t/ ("sink" instead of "think"), and /D/ with /z/ or /d/ ("dis" instead of "this").\n\n**v vs w:**\n- /v/ is voiced: "very", "love", "river" - touch your top teeth to your bottom lip.\n- /w/ is a glide: "where", "water", "window" - round your lips.\n\nCommon mistake: saying "wery" instead of "very", or "verry" instead of "where".\n\n**l vs r:**\n- /l/ as in "light", "love", "feel" - tongue touches behind your top front teeth.\n- /r/ as in "right", "red", "car" - tongue curls back, does not touch.\n\nThese are difficult for many learners, especially speakers of Asian languages. Practice: "red lorry, yellow lorry".\n\n**Final consonants:**\nEnglish words often end with consonants. Do not drop them!\n- "cat" not "ca"\n- "hand" not "han"\n- "stop" not "sto"\n\nFinal consonants are important for meaning: "cat" vs "cap", "bed" vs "bet".\n\n**Silent letters:**\nMany English words have letters you do not pronounce:\n- knife /naif/ - silent "k"\n- write /raIt/ - silent "w"\n- hour /aU@/ - silent "h"\n- lamb /laem/ - silent "b"\n- know /n@U/ - silent "k"\n- listen /lIs(@)n/ - silent "t"\n- wrong /rQŋ/ - silent "w"\n- psychology /saIkQl@dZi/ - silent "p"\n\nPractice these sounds slowly, then speed up. Record yourself and compare with a native speaker!',
          textRu: 'Английские согласные могут быть сложными, особенно звуки, которых нет в вашем родном языке. Рассмотрим самые трудные.\n\n**Звуки "th":**\nВ английском два звука "th":\n1. Глухой /T/ как в "think", "three", "bath" — поместите язык между зубами и выдохните воздух.\n2. Звонкий /D/ как в "this", "that", "the", "mother" — то же положение, но с голосом.\n\nЧастая ошибка: замена /T/ на /s/ или /t/ ("sink" вместо "think") и /D/ на /z/ или /d/ ("dis" вместо "this").\n\n**v vs w:**\n- /v/ звонкий: "very", "love", "river" — коснитесь верхними зубами нижней губы.\n- /w/ скользящий: "where", "water", "window" — округлите губы.\n\nЧастая ошибка: произношение "wery" вместо "very" или "verry" вместо "where".\n\n**l vs r:**\n- /l/ как в "light", "love", "feel" — кончик языка касается за верхними передними зубами.\n- /r/ как в "right", "red", "car" — язык загибается назад, не касается.\n\nЭти звуки трудны для многих изучающих, особенно носителей азиатских языков. Практика: "red lorry, yellow lorry".\n\n**Конечные согласные:**\nАнглийские слова часто заканчиваются согласными. Не глотайте их!\n- "cat", а не "ca"\n- "hand", а не "han"\n- "stop", а не "sto"\n\nКонечные согласные важны для смысла: "cat" vs "cap", "bed" vs "bet".\n\n**Немые буквы:**\nВо многих английских словах есть буквы, которые не произносятся:\n- knife /naif/ — немая "k"\n- write /raIt/ — немая "w"\n- hour /aU@/ — немая "h"\n- lamb /laem/ — немая "b"\n- know /n@U/ — немая "k"\n- listen /lIs(@)n/ — немая "t"\n- wrong /rQŋ/ — немая "w"\n- psychology /saIkQl@dZi/ — немая "p"\n\nПрактикуйте эти звуки медленно, затем ускоряйтесь. Записывайте себя и сравнивайте с носителем языка!',
          vocab: [
            { word: '/T/ (voiceless th)', trans: 'Глухой th: think, three, bath' },
            { word: '/D/ (voiced th)', trans: 'Звонкий th: this, that, mother' },
            { word: '/v/ vs /w/', trans: 'very vs where - губы к зубам vs округлить губы' },
            { word: '/l/ vs /r/', trans: 'light vs right - кончик языка' },
            { word: 'final consonant', trans: 'Конечный согласный (не глотать!)' },
            { word: 'silent letter', trans: 'Немая буква (knife, write, hour)' },
            { word: 'voiceless / voiced', trans: 'Глухой / звонкий' },
            { word: 'tongue position', trans: 'Положение языка' }
          ]
        },
        video: { slides: [
          { emoji: ' th', title: 'The "th" sounds', text: '/T/ think (глухой), /D/ this (звонкий). Язык между зубами.' },
          { emoji: ' think', title: 'Voiceless /T/', text: 'think, three, bath, mouth - без голоса.' },
          { emoji: ' this', title: 'Voiced /D/', text: 'this, that, the, mother - с голосом.' },
          { emoji: ' v', title: '/v/ vs /w/', text: '/v/ very - зубы к губе. /w/ where - округлить губы.' },
          { emoji: ' l', title: '/l/ vs /r/', text: '/l/ light - язык к зубам. /r/ right - язык назад.' },
          { emoji: ' end', title: 'Final consonants', text: 'Не глотайте конечные: cat, hand, stop!' },
          { emoji: ' silent', title: 'Silent letters', text: 'knife (k), write (w), hour (h), lamb (b).' },
          { emoji: ' record', title: 'Practice & record', text: 'Говорите медленно, ускоряйтесь, записывайте себя.' }
        ]},
        quiz: { pool: [
          { q: 'How many "th" sounds are there in English?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Voiceless /T/ и voiced /D/.' },
          { q: 'Which word has the voiceless /T/?', options: ['this', 'that', 'think', 'the'], answer: 2, explain: 'think = /TINk/, глухой.' },
          { q: 'Which word has the voiced /D/?', options: ['think', 'three', 'this', 'bath'], answer: 2, explain: 'this = /DIs/, звонкий.' },
          { q: 'How is "knife" pronounced?', options: ['/naif/', '/knaif/', '/nife/', '/kife/'], answer: 0, explain: 'k - немая буква.' },
          { q: 'Which letter is silent in "write"?', options: ['r', 'i', 't', 'e'], answer: 0, explain: 'w - немая: /raIt/.' },
          { q: 'Which letter is silent in "hour"?', options: ['o', 'u', 'r', 'h'], answer: 3, explain: 'h - немая: /aU@/.' },
          { q: 'Which letter is silent in "lamb"?', options: ['l', 'a', 'm', 'b'], answer: 3, explain: 'b - немая: /laem/.' },
          { q: 'What is the difference between /v/ and /w/?', options: ['Volume', 'Lip position', 'Tongue length', 'Nothing'], answer: 1, explain: '/v/ - зубы к губе, /w/ - округлить губы.' },
          { q: 'Which is correct for /r/?', options: ['Tongue touches teeth', 'Tongue curls back', 'Lips are closed', 'Teeth are closed'], answer: 1, explain: '/r/ - язык заворачивается назад.' },
          { q: 'Which word has a silent "k"?', options: ['know', 'now', 'knee', 'Both know and knee'], answer: 3, explain: 'know /n@U/, knee /ni:/ - k немая.' },
          { q: 'Which is a common mistake for /T/?', options: ['/s/ for /T/', '/f/ for /T/', '/t/ for /T/', 'All of the above'], answer: 3, explain: 'Часто заменяют на s, f или t.' },
          { q: 'What should you do with final consonants?', options: ['Drop them', 'Pronounce them', 'Whisper them', 'Soften them'], answer: 1, explain: 'Конечные согласные важны для смысла.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Fill in the silent letter: "__nife" (silent k)', answer: 'k', explain: 'knife = /naif/, k немая.' },
          { type: 'fill-blank', question: 'Fill in the silent letter: "__rite" (silent w)', answer: 'w', explain: 'write = /raIt/, w немая.' },
          { type: 'choice', question: 'Which word has the voiced /D/?', options: ['think', 'three', 'mother', 'bath'], answer: 2, explain: 'mother = /mVD@/, звонкий th.' },
          { type: 'translate', question: 'Переведите: "Немая буква"', answer: 'silent letter', explain: 'silent letter = немая буква.' },
          { type: 'order', question: 'Put in order (tongue position):', words: ['teeth', 'your', 'between', 'tongue', 'Put'], answer: 'Put your tongue between teeth', explain: 'Позиция для th.' },
          { type: 'correct', question: 'Find and correct: "think" is pronounced /sInk/.', answer: 'think is pronounced /TINk/', explain: 'th = /T/, не /s/.' }
        ]}
      },
      {
        id: 'pca-l3', topic: 'Word stress and syllables',
        objective: 'Правильно ставить ударение в словах и считать слоги.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Word Stress and Syllables',
          text: 'Word stress is one of the most important aspects of English pronunciation. Putting stress on the wrong syllable can make you very hard to understand, even if your grammar and vocabulary are perfect.\n\n**What is a syllable?**\nA syllable is a unit of sound in a word. Every syllable has one vowel sound.\n- "cat" = 1 syllable\n- "apple" = 2 syllables (ap-ple)\n- "banana" = 3 syllables (ba-na-na)\n- "education" = 4 syllables (e-du-ca-tion)\n\n**What is word stress?**\nIn English words with 2+ syllables, one syllable is stronger: louder, longer, and higher in pitch.\n- "PHOtograph" - stress on 1st syllable\n- "phoTOgraphy" - stress on 2nd syllable\n- "photoGRAPHic" - stress on 3rd syllable\n\n**Word stress rules:**\n\n1. **Two-syllable nouns and adjectives:** usually stress the first syllable.\n- "TAble", "HAPpy", "WATER", "English"\n\n2. **Two-syllable verbs:** usually stress the second syllable.\n- "beGIN", "reLAX", "deCIDE", "inVITE"\n\n3. **Suffixes that keep the stress on themselves:**\n- "-tion" / "-sion": inforMAtion, deciSION\n- "-ic": ecoNOMic, phoTOgraphic\n- "-al": inDUStrial, meDICal\n- "-ity": responSIBility, elecTRIcity\n- "-ive": atTRACtive, effecTIVE\n\n4. **Shifting stress:** Some words change stress depending on their function:\n- "PREsent" (noun) vs "preSENT" (verb)\n- "REcord" (noun) vs "reCORD" (verb)\n- "OBject" (noun) vs "obJECT" (verb)\n- "PROduce" (noun) vs "proDUCE" (verb)\n\n5. **Compound words:**\n- Compound nouns: stress the first part - "BLACKboard", "POSTman", "BOOKshop"\n- Compound adjectives: stress the second part - "good-LOOKing", "bad-TEMpered"\n\n**Why stress matters:**\nWrong stress can change meaning: "PREsent" (gift) vs "preSENT" (to show). It also affects rhythm - English is a stress-timed language, meaning stressed syllables come at regular intervals.\n\nPractice: When you learn a new word, always learn its stress pattern. Mark it in your notes!',
          textRu: 'Ударение в слове — один из важнейших аспектов английского произношения. Ударение не на том слоге может сделать вас очень непонятным, даже если ваша грамматика и словарный запас безупречны.\n\n**Что такое слог?**\nСлог — это единица звука в слове. Каждый слог содержит один гласный звук.\n- "cat" = 1 слог\n- "apple" = 2 слога (ap-ple)\n- "banana" = 3 слога (ba-na-na)\n- "education" = 4 слога (e-du-ca-tion)\n\n**Что такое ударение в слове?**\nВ английских словах из 2+ слогов один слог сильнее: громче, длиннее и выше по тону.\n- "PHOtograph" — ударение на 1-й слог\n- "phoTOgraphy" — ударение на 2-й слог\n- "photoGRAPHic" — ударение на 3-й слог\n\n**Правила ударения:**\n\n1. **Двухсложные существительные и прилагательные:** обычно ударение на первый слог.\n- "TAble", "HAPpy", "WATER", "English"\n\n2. **Двухсложные глаголы:** обычно ударение на второй слог.\n- "beGIN", "reLAX", "deCIDE", "inVITE"\n\n3. **Суффиксы, перетягивающие ударение на себя:**\n- "-tion" / "-sion": inforMAtion, deciSION\n- "-ic": ecoNOMic, phoTOgraphic\n- "-al": inDUStrial, meDICal\n- "-ity": responSIBility, elecTRIcity\n- "-ive": atTRACtive, effecTIVE\n\n4. **Подвижное ударение:** Некоторые слова меняют ударение в зависимости от функции:\n- "PREsent" (существительное) vs "preSENT" (глагол)\n- "REcord" (существительное) vs "reCORD" (глагол)\n- "OBject" (существительное) vs "obJECT" (глагол)\n- "PROduce" (существительное) vs "proDUCE" (глагол)\n\n5. **Сложные слова:**\n- Сложные существительные: ударение на первую часть — "BLACKboard", "POSTman", "BOOKshop"\n- Сложные прилагательные: ударение на вторую часть — "good-LOOKing", "bad-TEMpered"\n\n**Почему ударение важно:**\nНеправильное ударение может изменить смысл: "PREsent" (подарок) vs "preSENT" (показывать). Оно также влияет на ритм — английский является языком с тактовым ударением, то есть ударные слоги идут через равные интервалы.\n\nПрактика: Когда учите новое слово, всегда запоминайте его ударение. Отмечайте его в своих записях!',
          vocab: [
            { word: 'syllable', trans: 'Слог (единица звука)' },
            { word: 'word stress', trans: 'Ударение в слове' },
            { word: 'stressed / unstressed', trans: 'Ударный / безударный' },
            { word: 'first syllable stress', trans: 'Ударение на первый слог (существительные)' },
            { word: 'second syllable stress', trans: 'Ударение на второй слог (глаголы)' },
            { word: '-tion / -sion', trans: 'Суффикс: ударение на себя' },
            { word: 'shifting stress', trans: 'Подвижное ударение (PREsent vs preSENT)' },
            { word: 'compound word', trans: 'Сложное слово (blackboard)' }
          ]
        },
        video: { slides: [
          { emoji: ' syl', title: 'Syllables', text: 'cat=1, apple=2, banana=3. Один гласный = один слог.' },
          { emoji: ' stress', title: 'Word stress', text: 'Один слог сильнее: громче, длиннее, выше.' },
          { emoji: ' PHOTO', title: 'Stress shift', text: 'PHOtograph, phoTOgraphy, photoGRAPHic - ударение меняется!' },
          { emoji: ' TAble', title: 'Nouns: 1st', text: 'Двухсложные существительные: TAble, WATER, HAPpy.' },
          { emoji: ' beGIN', title: 'Verbs: 2nd', text: 'Двухсложные глаголы: beGIN, reLAX, deCIDE.' },
          { emoji: ' -tion', title: 'Suffix stress', text: '-tion, -ic, -al, -ity: inforMAtion, ecoNOMic.' },
          { emoji: ' PREsent', title: 'Noun vs verb', text: 'PREsent (сущ.) vs preSENT (глагол) - смысл меняется!' },
          { emoji: ' BLACK', title: 'Compound words', text: 'Сложные сущ.: BLACKboard. Прилаг.: good-LOOKing.' }
        ]},
        quiz: { pool: [
          { q: 'How many syllables in "banana"?', options: ['2', '3', '4', '1'], answer: 1, explain: 'ba-na-na = 3 слога.' },
          { q: 'How many syllables in "apple"?', options: ['1', '2', '3', '4'], answer: 1, explain: 'ap-ple = 2 слога.' },
          { q: 'Where is the stress in "photograph"?', options: ['1st syllable', '2nd syllable', '3rd syllable', 'No stress'], answer: 0, explain: 'PHOtograph - ударение на 1-й.' },
          { q: 'Where is the stress in "photography"?', options: ['1st syllable', '2nd syllable', '3rd syllable', 'No stress'], answer: 1, explain: 'phoTOgraphy - ударение на 2-й.' },
          { q: 'Two-syllable nouns usually stress:', options: ['1st syllable', '2nd syllable', 'Both', 'Neither'], answer: 0, explain: 'TAble, WATER - 1-й слог.' },
          { q: 'Two-syllable verbs usually stress:', options: ['1st syllable', '2nd syllable', 'Both', 'Neither'], answer: 1, explain: 'beGIN, reLAX - 2-й слог.' },
          { q: 'Where is the stress in "information"?', options: ['1st', '2nd', '3rd', '4th'], answer: 2, explain: 'inforMAtion - суффикс -tion.' },
          { q: 'Which suffix takes the stress?', options: ['-tion', '-ed', '-s', '-ing'], answer: 0, explain: '-tion/-sion: inforMAtion.' },
          { q: '"REcord" (noun) vs "reCORD" (verb). This is:', options: ['Wrong', 'Shifting stress', 'A mistake', 'Regional'], answer: 1, explain: 'Подвижное ударение меняет функцию слова.' },
          { q: 'Where is the stress in "blackboard"?', options: ['black', 'board', 'Both', 'Neither'], answer: 0, explain: 'Сложные существительные: BLACKboard.' },
          { q: 'Where is the stress in "good-looking"?', options: ['good', 'looking', 'Both equally', 'Neither'], answer: 1, explain: 'Сложные прилагательные: good-LOOKing.' },
          { q: 'Which word has stress on the 2nd syllable?', options: ['TAble', 'beGIN', 'HAPpy', 'English'], answer: 1, explain: 'beGIN - глагол, ударение на 2-й.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'How many syllables in "education"? (number)', answer: '4', explain: 'e-du-ca-tion = 4 слога.' },
          { type: 'fill-blank', question: 'Stress position in "begin"? (1st or 2nd)', answer: '2nd', explain: 'beGIN - ударение на 2-й слог.' },
          { type: 'choice', question: 'Where is the stress in "photographic"?', options: ['1st syllable', '2nd syllable', '3rd syllable', 'No stress'], answer: 2, explain: 'photoGRAPHic - суффикс -ic.' },
          { type: 'translate', question: 'Переведите: "Ударение в слове"', answer: 'word stress', explain: 'word stress = ударение в слове.' },
          { type: 'order', question: 'Put in order (stress pattern):', words: ['photograph', 'PHO', 'The', 'is', 'in', 'first', 'syllable'], answer: 'The stress in photograph is PHO first syllable', explain: 'PHOtograph - 1-й слог.' },
          { type: 'correct', question: 'Find and correct: "inforMAtion" has stress on the 2nd syllable.', answer: 'inforMAtion has stress on the 3rd syllable', explain: 'inforMAtion - суффикс -tion, ударение на 3-й.' }
        ]}
      },
      {
        id: 'pca-l4', topic: 'Sentence stress and rhythm',
        objective: 'Использовать правильное ударение в предложениях и естественный ритм.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Sentence Stress and Rhythm',
          text: 'In English, not every word in a sentence is stressed. Some words are strong (stressed) and some are weak (reduced). This creates the natural rhythm of English.\n\n**Content words (STRESSED):**\nContent words carry the main meaning. They are stressed: louder, longer, and higher.\n- Nouns: "I bought a BOOK."\n- Main verbs: "She WORKS hard."\n- Adjectives: "It is a BEAUTIFUL day."\n- Adverbs: "He runs QUICKLY."\n- Question words: "WHERE are you going?"\n- Demonstratives: "THIS is mine."\n\n**Function words (UNSTRESSED):**\nFunction words carry grammatical meaning. They are usually unstressed and reduced.\n- Pronouns: "I told HER." (but stressed at end: "It is HER.")\n- Prepositions: "I am AT home."\n- Articles: "THE boy."\n- Auxiliary verbs: "I am GOING." (but stressed in negatives: "I am NOT.")\n- Conjunctions: "apples AND oranges."\n- Modal verbs: "You CAN do it."\n\n**Weak forms:**\nFunction words often have weak (reduced) forms in connected speech:\n- "can" /kaen/ -> /k@n/: "I can swim" = /aI k@n swIm/\n- "from" /frQm/ -> /fr@m/: "from London" = /fr@m lVnd@n/\n- "to" /tu:/ -> /t@/: "go to school" = /g@U t@ sku:l/\n- "of" /Qv/ -> /@v/: "cup of tea" = /kVp @v ti:/\n- "and" /aend/ -> /@n/: "bread and butter"\n- "are" /A:/ -> /@/: "you are" = /ju: @/\n- "was" /wQz/ -> /w@z/: "he was" = /hi: w@z/\n\n**Rhythm and timing:**\nEnglish is a stress-timed language. This means stressed syllables come at roughly regular intervals, no matter how many unstressed syllables are between them.\n\nCompare:\n- "CAT" (1 stress, 1 syllable)\n- "The CAT" (1 stress, 2 syllables)\n- "The CAT is here" (1 stress, 4 syllables)\n\nAll three take about the same time to say! The unstressed syllables are squeezed together.\n\n**Why this matters:**\nIf you stress every word equally, you sound robotic and unnatural. If you reduce function words and stress content words, you sound fluent and native-like.\n\nPractice: Read a paragraph and mark the stressed words. Then read it aloud, stressing only those words!',
          textRu: 'В английском не каждое слово в предложении ударно. Одни слова сильные (ударные), другие слабые (редуцированные). Это создаёт естественный ритм английского языка.\n\n**Знаменательные слова (УДАРНЫЕ):**\nЗнаменательные слова несут основной смысл. Они ударные: громче, длиннее и выше.\n- Существительные: "I bought a BOOK."\n- Основные глаголы: "She WORKS hard."\n- Прилагательные: "It is a BEAUTIFUL day."\n- Наречия: "He runs QUICKLY."\n- Вопросительные слова: "WHERE are you going?"\n- Указательные: "THIS is mine."\n\n**Служебные слова (БЕЗУДАРНЫЕ):**\nСлужебные слова несут грамматическое значение. Обычно они безударные и редуцированные.\n- Местоимения: "I told HER." (но ударны в конце: "It is HER.")\n- Предлоги: "I am AT home."\n- Артикли: "THE boy."\n- Вспомогательные глаголы: "I am GOING." (но ударны в отрицаниях: "I am NOT.")\n- Союзы: "apples AND oranges."\n- Модальные глаголы: "You CAN do it."\n\n**Слабые формы:**\nСлужебные слова часто имеют слабые (редуцированные) формы в связной речи:\n- "can" /kaen/ -> /k@n/: "I can swim" = /aI k@n swIm/\n- "from" /frQm/ -> /fr@m/: "from London" = /fr@m lVnd@n/\n- "to" /tu:/ -> /t@/: "go to school" = /g@U t@ sku:l/\n- "of" /Qv/ -> /@v/: "cup of tea" = /kVp @v ti:/\n- "and" /aend/ -> /@n/: "bread and butter"\n- "are" /A:/ -> /@/: "you are" = /ju: @/\n- "was" /wQz/ -> /w@z/: "he was" = /hi: w@z/\n\n**Ритм и тайминг:**\nАнглийский — язык с тактовым ударением. Это означает, что ударные слоги идут примерно через равные интервалы, независимо от того, сколько безударных слогов между ними.\n\nСравните:\n- "CAT" (1 ударение, 1 слог)\n- "The CAT" (1 ударение, 2 слога)\n- "The CAT is here" (1 ударение, 4 слога)\n\nВсе три занимают примерно одинаковое время! Безударные слоги сжимаются.\n\n**Почему это важно:**\nЕсли вы делаете ударение на каждом слове одинаково, вы звучите роботизированно и неестественно. Если редуцируете служебные слова и ударяете знаменательные, вы звучите бегло и как носитель.\n\nПрактика: Прочитайте абзац и отметьте ударные слова. Затем прочитайте вслух, делая ударение только на этих словах!',
          vocab: [
            { word: 'content word', trans: 'Знаменательное слово (ударное)' },
            { word: 'function word', trans: 'Служебное слово (безударное)' },
            { word: 'weak form', trans: 'Слабая (редуцированная) форма' },
            { word: 'stress-timed', trans: 'Тактовый язык (ударения через равные интервалы)' },
            { word: 'reduction', trans: 'Редукция (ослабление гласных)' },
            { word: 'schwa /@/', trans: 'Нейтральный гласный звук (about, sofa)' },
            { word: 'rhythm', trans: 'Ритм речи' },
            { word: 'stressed / unstressed', trans: 'Ударный / безударный' }
          ]
        },
        video: { slides: [
          { emoji: ' WORD', title: 'Content words', text: 'Существительные, глаголы, прилагательные, наречия - ударные.' },
          { emoji: ' the', title: 'Function words', text: 'Артикли, предлоги, местоимения, вспом. глаголы - безударные.' },
          { emoji: ' schwa', title: 'Schwa /@/', text: 'Нейтральный звук в безударных слогах: about, sofa, doctor.' },
          { emoji: ' can', title: 'Weak forms', text: 'can -> /k@n/, to -> /t@/, of -> /@v/, from -> /fr@m/.' },
          { emoji: ' rhythm', title: 'Stress-timed', text: 'Ударные слоги через равные интервалы. Безударные сжимаются.' },
          { emoji: ' CAT', title: 'Equal timing', text: '"CAT" = "The CAT is here" - примерно одинаковое время!' },
          { emoji: ' NOT', title: 'Exceptions', text: 'Функциональные слова ударны в конце или в отрицании: "It is HER", "I am NOT."' },
          { emoji: ' read', title: 'Practice', text: 'Отметьте ударные слова в тексте и читайте только их громко.' }
        ]},
        quiz: { pool: [
          { q: 'Which type of word is usually stressed?', options: ['Articles', 'Nouns', 'Prepositions', 'Pronouns'], answer: 1, explain: 'Существительные - знаменательные слова.' },
          { q: 'Which type of word is usually unstressed?', options: ['Nouns', 'Verbs', 'Articles', 'Adjectives'], answer: 2, explain: 'Артикли - служебные слова.' },
          { q: 'What is the schwa sound?', options: ['/i:/', '/@/', '/ae/', '/u:/'], answer: 1, explain: 'schwa /@/ - нейтральный гласный.' },
          { q: 'Which word has a schwa?', options: ['sheep', 'about', 'see', 'green'], answer: 1, explain: 'about = /@baUt/, первый слог.' },
          { q: 'What is the weak form of "can"?', options: ['/kaen/', '/k@n/', '/ka:n/', '/kEn/'], answer: 1, explain: 'can -> /k@n/ в безударной позиции.' },
          { q: 'English is what type of language?', options: ['Syllable-timed', 'Stress-timed', 'Tone language', 'Mora-timed'], answer: 1, explain: 'Ударения через равные интервалы.' },
          { q: 'Which word is unstressed in "I am AT home"?', options: ['I', 'am', 'AT', 'home'], answer: 2, explain: 'Предлог "at" обычно безударен.' },
          { q: 'Which word is stressed in "I bought a BOOK"?', options: ['I', 'bought', 'a', 'BOOK'], answer: 3, explain: 'Существительное "book" - ударное.' },
          { q: 'When is a function word stressed?', options: ['Never', 'At end of sentence or in negatives', 'Always', 'Only in questions'], answer: 1, explain: '"It is HER." / "I am NOT."' },
          { q: 'What is the weak form of "to"?', options: ['/tu:/', '/t@/', '/ta/', '/ti:/'], answer: 1, explain: 'to -> /t@/ в безударной позиции.' },
          { q: 'Which is NOT a content word?', options: ['table', 'quickly', 'the', 'run'], answer: 2, explain: 'the - артикль, служебное слово.' },
          { q: 'Which is NOT a function word?', options: ['of', 'beautiful', 'and', 'is'], answer: 1, explain: 'beautiful - прилагательное, знаменательное.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Which sound is the schwa? (phonetic symbol)', answer: '@', explain: 'schwa /@/ - нейтральный гласный.' },
          { type: 'fill-blank', question: 'In "I CAN swim", the weak form of "can" is: /k__n/', answer: '@', explain: 'can -> /k@n/.' },
          { type: 'choice', question: 'Which word is stressed in "She WORKS hard"?', options: ['She', 'WORKS', 'hard', 'Both WORKS and hard'], answer: 3, explain: 'WORKS и hard - знаменательные, ударные.' },
          { type: 'translate', question: 'Переведите: "Знаменательное слово"', answer: 'content word', explain: 'content word = знаменательное слово.' },
          { type: 'order', question: 'Put in order (stress-timed):', words: ['through', 'intervals', 'come', 'Stressed', 'equal', 'syllables'], answer: 'Stressed syllables come through equal intervals', explain: 'Английский - stress-timed язык.' },
          { type: 'correct', question: 'Find and correct: "I AM at HOME." (mark correct stress)', answer: 'I am at HOME', explain: 'am и at - безударные, HOME - ударное.' }
        ]}
      },
      {
        id: 'pca-l5', topic: 'Intonation and meaning',
        objective: 'Использовать интонацию для передачи значения и эмоций.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Intonation and Meaning',
          text: 'Intonation is the rise and fall of your voice pitch when you speak. It is incredibly important because the same words can have completely different meanings depending on your intonation.\n\n**Rising intonation (pitch goes UP):**\n- Yes/No questions: "Do you like coffee?" (rising at end)\n- Uncertainty or doubt: "Really?" "Are you sure?"\n- Lists (except the last item): "I bought apples, oranges, and bananas." (rise, rise, fall)\n- Politeness and friendliness: "Would you like some tea?"\n\n**Falling intonation (pitch goes DOWN):**\n- Statements: "I live in London." (falling at end)\n- Commands: "Sit down." "Close the door."\n- Wh-questions: "Where do you live?" "What is your name?"\n- Exclamations: "What a beautiful day!"\n\n**Fall-rise intonation:**\nThis pattern conveys uncertainty, hesitation, or implication:\n- "I think so..." (not 100% sure)\n- "Well..." (hesitating)\n- "It is... interesting." (implying it is not really)\n\n**Rise-fall intonation:**\nThis conveys surprise, finality, or strong emotion:\n- "Really!" (surprised)\n- "I do not believe it!"\n\n**Intonation in tag questions:**\nTag questions have two possible intonations:\n1. Rising (not sure, asking): "It is a nice day, isn\'t it?" (I think so, but I want to check)\n2. Falling (expecting agreement): "It is a beautiful day, isn\'t it?" (I am sure you agree)\n\n**Intonation changes meaning:**\nThe sentence "You are coming" can mean very different things:\n- Falling: "You are coming." (statement, certain)\n- Rising: "You are coming?" (surprised question)\n- Fall-rise: "You are coming..." (but I am not sure / but something else)\n\n**Why intonation matters:**\n- Without correct intonation, you may sound rude, bored, or unsure.\n- "Thank you" with falling intonation sounds sincere; with flat intonation it sounds robotic; with rising it sounds questioning.\n- Intonation helps listeners understand whether you are asking, telling, or expressing emotion.\n\nPractice: Say "You are kidding" with different intonations - as a question, as a statement, as surprise. Notice how the meaning changes!',
          textRu: 'Интонация — это повышение и понижение высоты голоса при речи. Она невероятно важна, потому что одни и те же слова могут иметь совершенно разные значения в зависимости от интонации.\n\n**Восходящая интонация (тон ВВЕРХ):**\n- Вопросы да/нет: "Do you like coffee?" (повышение в конце)\n- Неуверенность или сомнение: "Really?" "Are you sure?"\n- Списки (кроме последнего элемента): "I bought apples, oranges, and bananas." (повышение, повышение, понижение)\n- Вежливость и дружелюбие: "Would you like some tea?"\n\n**Нисходящая интонация (тон ВНИЗ):**\n- Утверждения: "I live in London." (понижение в конце)\n- Команды: "Sit down." "Close the door."\n- Специальные вопросы (wh-): "Where do you live?" "What is your name?"\n- Восклицания: "What a beautiful day!"\n\n**Восходяще-нисходящая интонация:**\nЭта модель передаёт неуверенность, колебание или подтекст:\n- "I think so..." (не на 100% уверен)\n- "Well..." (колебание)\n- "It is... interesting." (подразумевая, что это не так)\n\n**Нисходяще-восходящая интонация:**\nПередаёт удивление, окончательность или сильную эмоцию:\n- "Really!" (удивлён)\n- "I do not believe it!"\n\n**Интонация в разделительных вопросах:**\nРазделительные вопросы (tag questions) имеют две возможные интонации:\n1. Восходящая (не уверен, спрашиваю): "It is a nice day, isn\'t it?" (я так думаю, но хочу проверить)\n2. Нисходящая (ожидаю согласия): "It is a beautiful day, isn\'t it?" (я уверен, вы согласны)\n\n**Интонация меняет смысл:**\nПредложение "You are coming" может означать совершенно разное:\n- Нисходящая: "You are coming." (утверждение, уверен)\n- Восходящая: "You are coming?" (удивлённый вопрос)\n- Восходяще-нисходящая: "You are coming..." (но я не уверен / но что-то ещё)\n\n**Почему интонация важна:**\n- Без правильной интонации вы можете звучать грубо, скучающе или неуверенно.\n- "Thank you" с нисходящей интонацией звучит искренне; с монотонной — роботизированно; с восходящей — как вопрос.\n- Интонация помогает слушателям понять, спрашиваете ли вы, рассказываете или выражаете эмоцию.\n\nПрактика: Скажите "You are kidding" с разной интонацией — как вопрос, как утверждение, как удивление. Обратите внимание, как меняется смысл!',
          vocab: [
            { word: 'rising intonation', trans: 'Восходящая интонация (вопросы, неуверенность)' },
            { word: 'falling intonation', trans: 'Нисходящая интонация (утверждения, команды)' },
            { word: 'fall-rise', trans: 'Восходяще-нисходящая (неуверенность, вежливость)' },
            { word: 'pitch', trans: 'Высота тона голоса' },
            { word: 'tag question', trans: 'Разделительный вопрос (...isn\'t it?)' },
            { word: 'wh-question', trans: 'Специальный вопрос (what, where, why)' },
            { word: 'yes/no question', trans: 'Общий вопрос (да/нет)' },
            { word: 'statement', trans: 'Утверждение' }
          ]
        },
        video: { slides: [
          { emoji: ' UP', title: 'Rising', text: 'Yes/No вопросы, списки (кроме последнего), неуверенность, вежливость.' },
          { emoji: ' DOWN', title: 'Falling', text: 'Утверждения, команды, wh-вопросы, восклицания.' },
          { emoji: ' down-up', title: 'Fall-rise', text: 'Неуверенность, колебание: "I think so..."' },
          { emoji: ' tag', title: 'Tag questions', text: 'Rising = не уверен. Falling = ожидаю согласия.' },
          { emoji: ' pitch', title: 'Pitch', text: 'Высота голоса. Рост = вопрос, падение = утверждение.' },
          { emoji: ' list', title: 'Lists', text: 'apples (rise), oranges (rise), bananas (fall).' },
          { emoji: ' meaning', title: 'Meaning changes', text: '"You are coming." vs "You are coming?" - смысл от интонации!' },
          { emoji: ' feel', title: 'Emotion', text: 'Интонация передаёт эмоцию: искренность, скуку, удивление.' }
        ]},
        quiz: { pool: [
          { q: 'Which intonation is used for Yes/No questions?', options: ['Falling', 'Rising', 'Flat', 'Fall-rise'], answer: 1, explain: 'Yes/No вопросы - восходящая интонация.' },
          { q: 'Which intonation is used for statements?', options: ['Rising', 'Falling', 'Flat', 'Rise-fall'], answer: 1, explain: 'Утверждения - нисходящая.' },
          { q: 'Which intonation is used for wh-questions?', options: ['Rising', 'Falling', 'Flat', 'Rise-fall'], answer: 1, explain: 'Where, what, why - нисходящая.' },
          { q: 'Which intonation is used for commands?', options: ['Rising', 'Falling', 'Flat', 'Fall-rise'], answer: 1, explain: 'Команды - нисходящая: "Sit down."' },
          { q: 'In a list, which item has falling intonation?', options: ['First', 'Middle', 'Last', 'All'], answer: 2, explain: 'Последний элемент - нисходящая.' },
          { q: 'What does fall-rise intonation convey?', options: ['Certainty', 'Uncertainty', 'Anger', 'Boredom'], answer: 1, explain: 'Fall-rise = неуверенность, колебание.' },
          { q: 'Tag question with rising intonation means:', options: ['I am sure', 'I am not sure, asking', 'I am angry', 'I am bored'], answer: 1, explain: 'Rising = не уверен, проверяю.' },
          { q: 'Tag question with falling intonation means:', options: ['I am not sure', 'I expect agreement', 'I am asking', 'I am surprised'], answer: 1, explain: 'Falling = ожидаю согласия.' },
          { q: '"You are coming?" (rising) means:', options: ['A statement', 'A surprised question', 'A command', 'A list'], answer: 1, explain: 'Rising = вопрос, удивление.' },
          { q: 'What is pitch?', options: ['Volume', 'Voice height', 'Speed', 'Clarity'], answer: 1, explain: 'Pitch = высота тона голоса.' },
          { q: 'Which question type uses rising intonation?', options: ['Where do you live?', 'What is your name?', 'Do you like tea?', 'Why are you here?'], answer: 2, explain: 'Yes/No вопрос - восходящая.' },
          { q: 'Why does intonation matter?', options: ['It does not', 'It changes meaning', 'It is decorative', 'It is required'], answer: 1, explain: 'Интонация меняет смысл.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Which intonation for "Do you like tea?" (rising or falling)?', answer: 'rising', explain: 'Yes/No вопрос - восходящая.' },
          { type: 'fill-blank', question: 'Which intonation for "Sit down." (rising or falling)?', answer: 'falling', explain: 'Команда - нисходящая.' },
          { type: 'choice', question: 'What does fall-rise intonation convey?', options: ['Certainty', 'Uncertainty', 'Anger', 'Joy'], answer: 1, explain: 'Fall-rise = неуверенность.' },
          { type: 'translate', question: 'Переведите: "Восходящая интонация"', answer: 'rising intonation', explain: 'rising intonation = восходящая.' },
          { type: 'order', question: 'Put in order (tag question rule):', words: ['rising', 'means', 'not', 'sure', 'I', 'am'], answer: 'rising means I am not sure', explain: 'Rising = не уверен.' },
          { type: 'correct', question: 'Find and correct: "Where do you live?" uses rising intonation.', answer: 'Where do you live uses falling intonation', explain: 'Wh-вопросы - нисходящая интонация.' }
        ]}
      },
      {
        id: 'pca-l6', topic: 'Connected speech and fluency',
        objective: 'Использовать связную речь для естественного звучания.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Connected Speech and Fluency',
          text: 'When native speakers talk, they do not pronounce every word separately. Words flow together, sounds change, and some sounds disappear. This is called connected speech, and it is what makes you sound natural and fluent.\n\n**Linking (words join together):**\nWhen a word ends with a consonant and the next begins with a vowel, they link together:\n- "an apple" -> /@ naepl/ (sounds like one word)\n- "pick it up" -> /pI kI tVp/\n- "look at this" -> /lU k@t DIs/\n\nWhen a word ends with a vowel and the next begins with a vowel, a linking sound (/w/ or /j/) appears:\n- "go out" -> /g@U waUt/ (linking /w/)\n- "see it" -> /si: jIt/ (linking /j/)\n\n**Elision (sounds disappear):**\nIn fast speech, some sounds are dropped:\n- "next day" -> /neks deI/ (the "t" disappears)\n- "last time" -> /la:s taIm/ (the "t" disappears)\n- "give me" -> /gImi:/ (the "v" disappears -> "gimme")\n- "most people" -> /m@Us pi:pl/ (the "t" disappears)\n\n**Assimilation (sounds change):**\nSounds change to become more like neighboring sounds:\n- "would you" -> /wUdZu:/ (d + y = j sound)\n- "did you" -> /dIdZu:/ -> "didja"\n- "want to" -> /wQn@/ -> "wanna"\n- "going to" -> /g@n@/ -> "gonna"\n- "got to" -> /gQt@/ -> "gotta"\n- "don\'t you" -> /d@UntSu:/ -> "dontcha"\n\n**Contractions in speech:**\nNative speakers use contractions constantly:\n- "I am" -> "I\'m"\n- "you are" -> "you\'re"\n- "do not" -> "don\'t"\n- "cannot" -> "can\'t"\n- "I will" -> "I\'ll"\n- "she has" -> "she\'s"\n- "they have" -> "they\'ve"\n- "I would" -> "I\'d"\n\n**Reduction of function words:**\nFunction words become very short and weak:\n- "I want to go" -> /aI wQn@ g@U/ ("to" almost disappears)\n- "What do you want?" -> /wQ dZ@ wQnt/ ("do you" becomes "d\'ya")\n- "Give it to me" -> /gIvIt@mi:/ (everything links together)\n\n**Tips for natural speech:**\n1. Do not pronounce every word separately - let them flow together.\n2. Use contractions always: say "I\'m" not "I am", "don\'t" not "do not" (in casual speech).\n3. Practice with tongue twisters and fast speech exercises.\n4. Listen to native speakers and imitate their linking and rhythm.\n5. Record yourself reading a paragraph and compare with a native speaker.\n6. Start slow, then speed up - accuracy first, then fluency.\n7. Focus on smoothness, not on perfect individual sounds.\n\nConnected speech is what separates intermediate speakers from fluent ones. Master it, and you will sound like a native!',
          textRu: 'Когда носители языка говорят, они не произносят каждое слово отдельно. Слова сливаются, звуки меняются, а некоторые звуки исчезают. Это называется связной речью, и именно она делает вашу речь естественной и беглой.\n\n**Слияние (слова соединяются):**\nКогда слово заканчивается согласной, а следующее начинается с гласной, они сливаются:\n- "an apple" -> /@ naepl/ (звучит как одно слово)\n- "pick it up" -> /pI kI tVp/\n- "look at this" -> /lU k@t DIs/\n\nКогда слово заканчивается гласной, а следующее начинается с гласной, появляется соединительный звук (/w/ или /j/):\n- "go out" -> /g@U waUt/ (соединительный /w/)\n- "see it" -> /si: jIt/ (соединительный /j/)\n\n**Элизия (звуки исчезают):**\nВ быстрой речи некоторые звуки выпадают:\n- "next day" -> /neks deI/ (буква "t" выпадает)\n- "last time" -> /la:s taIm/ (буква "t" выпадает)\n- "give me" -> /gImi:/ (буква "v" выпадает -> "gimme")\n- "most people" -> /m@Us pi:pl/ (буква "t" выпадает)\n\n**Ассимиляция (звуки меняются):**\nЗвуки меняются, становясь более похожими на соседние:\n- "would you" -> /wUdZu:/ (d + y = звук j)\n- "did you" -> /dIdZu:/ -> "didja"\n- "want to" -> /wQn@/ -> "wanna"\n- "going to" -> /g@n@/ -> "gonna"\n- "got to" -> /gQt@/ -> "gotta"\n- "don\'t you" -> /d@UntSu:/ -> "dontcha"\n\n**Стяжения в речи:**\nНосители языка постоянно используют стяжения:\n- "I am" -> "I\'m"\n- "you are" -> "you\'re"\n- "do not" -> "don\'t"\n- "cannot" -> "can\'t"\n- "I will" -> "I\'ll"\n- "she has" -> "she\'s"\n- "they have" -> "they\'ve"\n- "I would" -> "I\'d"\n\n**Редукция служебных слов:**\nСлужебные слова становятся очень короткими и слабыми:\n- "I want to go" -> /aI wQn@ g@U/ ("to" почти исчезает)\n- "What do you want?" -> /wQ dZ@ wQnt/ ("do you" превращается в "d\'ya")\n- "Give it to me" -> /gIvIt@mi:/ (всё сливается вместе)\n\n**Советы для естественной речи:**\n1. Не произносите каждое слово отдельно — пусть они сливаются.\n2. Всегда используйте стяжения: говорите "I\'m" вместо "I am", "don\'t" вместо "do not" (в разговорной речи).\n3. Практикуйтесь со скороговорками и упражнениями на быструю речь.\n4. Слушайте носителей и имитируйте их слияния и ритм.\n5. Записывайте себя при чтении абзаца и сравнивайте с носителем.\n6. Начните медленно, затем ускоряйтесь — сначала точность, потом беглость.\n7. Сосредоточьтесь на плавности, а не на идеальном произношении отдельных звуков.\n\nСвязная речь — это то, что отличает изучающих среднего уровня от беглых. Овладейте ею, и вы будете звучать как носитель!',
          vocab: [
            { word: 'linking', trans: 'Слияние (an apple -> @ naepl)' },
            { word: 'elision', trans: 'Выпадение звуков (next day -> neks deI)' },
            { word: 'assimilation', trans: 'Ассимиляция (would you -> wUdZu:)' },
            { word: 'contraction', trans: 'Стяжение (I am -> I\'m)' },
            { word: 'reduction', trans: 'Редукция (to -> t@)' },
            { word: 'connected speech', trans: 'Связная речь' },
            { word: 'gonna / wanna', trans: 'Разговорные формы (going to / want to)' },
            { word: 'fluency', trans: 'Беглость речи' }
          ]
        },
        video: { slides: [
          { emoji: ' link', title: 'Linking', text: 'Согласная + гласная = слияние: "an apple" -> /@ naepl/.' },
          { emoji: ' elide', title: 'Elision', text: 'Звуки выпадают: "next day" -> /neks deI/.' },
          { emoji: ' assim', title: 'Assimilation', text: 'Звуки меняются: "would you" -> /wUdZu:/.' },
          { emoji: ' I\'m', title: 'Contractions', text: 'I am -> I\'m, do not -> don\'t, cannot -> can\'t.' },
          { emoji: ' wanna', title: 'Reductions', text: 'want to -> wanna, going to -> gonna, got to -> gotta.' },
          { emoji: ' flow', title: 'Connected speech', text: 'Слова сливаются. Не произносите каждое отдельно!' },
          { emoji: ' imitate', title: 'Imitate native', text: 'Слушайте и копируйте ритм и слияния носителей.' },
          { emoji: ' fluent', title: 'Fluency tips', text: 'Точность сначала, потом скорость. Записывайте себя.' }
        ]},
        quiz: { pool: [
          { q: 'What is linking?', options: ['Dropping sounds', 'Joining words', 'Changing sounds', 'Stressing words'], answer: 1, explain: 'Linking = слияние слов.' },
          { q: 'How does "an apple" sound when linked?', options: ['/aen aepl/', '/@ naepl/', '/aen aepl/', '/a naepl/'], answer: 1, explain: 'Согласная + гласная = одно слово.' },
          { q: 'What is elision?', options: ['Joining words', 'Sounds disappearing', 'Changing sounds', 'Adding sounds'], answer: 1, explain: 'Elision = выпадение звуков.' },
          { q: 'How does "next day" sound with elision?', options: ['/nekst deI/', '/neks deI/', '/neksT deI/', '/nek deI/'], answer: 1, explain: 'Буква "t" выпадает.' },
          { q: 'What is assimilation?', options: ['Sounds joining', 'Sounds disappearing', 'Sounds changing', 'Sounds adding'], answer: 2, explain: 'Assimilation = звуки меняются.' },
          { q: 'How does "would you" assimilate?', options: ['/wUd ju:/', '/wUdZu:/', '/wUdSu:/', '/wUlu:/'], answer: 1, explain: 'd + y = /dZ/ (j sound).' },
          { q: 'What is the contraction of "I am"?', options: ['I\'ve', 'I\'m', 'I\'d', 'I\'ll'], answer: 1, explain: 'I am -> I\'m.' },
          { q: 'What is "going to" in casual speech?', options: ['gotta', 'gonna', 'wanna', 'gotta'], answer: 1, explain: 'going to -> gonna.' },
          { q: 'What is "want to" in casual speech?', options: ['gonna', 'wanna', 'gotta', 'hafta'], answer: 1, explain: 'want to -> wanna.' },
          { q: 'What is the reduction of "to" in "go to school"?', options: ['/tu:/', '/t@/', '/ta/', '/toU/'], answer: 1, explain: 'to -> /t@/ (слабая форма).' },
          { q: 'Which is a contraction?', options: ['gonna', 'wanna', 'don\'t', 'gotta'], answer: 2, explain: 'don\'t = do not (стяжение).' },
          { q: 'What should you do for natural speech?', options: ['Pronounce each word separately', 'Let words flow together', 'Speak very slowly', 'Stress every word'], answer: 1, explain: 'Связная речь = слова сливаются.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Fill in: "going to" in casual speech = g____', answer: 'onna', explain: 'going to -> gonna.' },
          { type: 'fill-blank', question: 'Fill in: "want to" in casual speech = w____', answer: 'anna', explain: 'want to -> wanna.' },
          { type: 'choice', question: 'What is the contraction of "do not"?', options: ['don\'t', 'doesn\'t', 'didn\'t', 'isn\'t'], answer: 0, explain: 'do not -> don\'t.' },
          { type: 'translate', question: 'Переведите: "Связная речь"', answer: 'connected speech', explain: 'connected speech = связная речь.' },
          { type: 'order', question: 'Put in order (linking rule):', words: ['together', 'join', 'and', 'consonant', 'vowel', 'Words'], answer: 'Words consonant and vowel join together', explain: 'Linking: согласная + гласная = слияние.' },
          { type: 'correct', question: 'Find and correct: In natural speech, "I am" becomes "I am".', answer: 'In natural speech I am becomes I\'m', explain: 'I am -> I\'m (стяжение).' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_7 = COURSE;
})(window);
