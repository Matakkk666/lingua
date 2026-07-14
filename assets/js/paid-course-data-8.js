/* ============================================================
   AES Paid Course 8: Студия креативного письма (B2-C1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-creative',
    title: 'Студия креативного письма',
    price: 2000, oldPrice: 3990,
    level: 'B2-C1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'cream',
    art: ['#F4E7D8', '#EAD0A8'],
    tagline: 'Пишите лучшие истории на английском. 6 модулей.',
    lessons: [
      {
        id: 'pcc-l1', topic: 'Story structure and plot',
        objective: 'Строить сюжет по классической структуре истории.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Story Structure and Plot: Building Your Narrative',
          text: 'Every great story follows a structure. The most famous is the story arc, which consists of five key stages.\n\n**The Story Arc:**\n1. Exposition: the beginning. We meet the characters, the setting, and the ordinary world. "Anna lived in a small village by the sea."\n2. Rising Action: events build tension. Problems appear, goals form, conflicts grow. "One day, a stranger arrived with a map."\n3. Climax: the turning point, the moment of highest tension. The hero faces their greatest challenge. "Anna confronted the stranger on the cliff."\n4. Falling Action: the aftermath of the climax. Loose ends begin to tie up. "The stranger explained his story, and Anna understood."\n5. Resolution: the new normal. The story closes. "Anna returned to the village, changed forever."\n\n**The Three-Act Structure:**\nAct I (Setup): introduce the world, the hero, and the inciting incident - the event that starts the story.\nAct II (Confrontation): the hero struggles, faces obstacles, and grows.\nAct III (Resolution): the final confrontation and the new balance.\n\n**Inciting Incident:** This is the spark. Without it, there is no story. In "Harry Potter," it is the letter from Hogwarts. In "The Hunger Games," it is Prim being chosen.\n\n**Character-Driven vs Plot-Driven:**\n- Character-driven: the story moves because of who the characters are and the choices they make (e.g., "Pride and Prejudice").\n- Plot-driven: the story moves because of external events and action (e.g., a thriller or adventure).\n\n**Pacing:** Pacing is how fast or slow the story feels. Short sentences speed up the action. Long, descriptive sentences slow it down. Use pacing to control emotion - fast in the climax, slow in quiet moments.\n\nRemember: structure is not a cage. It is a map. Use it to guide your reader, but let your story breathe.',
          vocab: [
            { word: 'exposition', trans: 'Экспозиция (вступление)' },
            { word: 'rising action', trans: 'Развитие действия' },
            { word: 'climax', trans: 'Кульминация' },
            { word: 'falling action', trans: 'Спад действия' },
            { word: 'resolution', trans: 'Развязка' },
            { word: 'inciting incident', trans: 'Завязка (отправная точка)' },
            { word: 'character-driven', trans: 'Персонаже-ориентированный' },
            { word: 'pacing', trans: 'Темп повествования' }
          ]
        },
        video: { slides: [
          { emoji: ' arc', title: 'Story Arc', text: '5 stages: exposition, rising action, climax, falling action, resolution.' },
          { emoji: ' start', title: 'Exposition', text: 'Beginning: characters, setting, ordinary world.' },
          { emoji: ' up', title: 'Rising Action', text: 'Tension builds. Problems, goals, conflicts grow.' },
          { emoji: ' peak', title: 'Climax', text: 'Turning point, highest tension, greatest challenge.' },
          { emoji: ' down', title: 'Falling Action', text: 'Aftermath of the climax. Loose ends tie up.' },
          { emoji: ' spark', title: 'Inciting Incident', text: 'The event that starts the story. The spark.' },
          { emoji: ' person', title: 'Character vs Plot', text: 'Character-driven: choices move story. Plot-driven: events move story.' },
          { emoji: ' speed', title: 'Pacing', text: 'Short sentences = fast. Long sentences = slow. Control emotion.' }
        ]},
        quiz: { pool: [
          { q: 'Which stage comes first in the story arc?', options: ['Climax', 'Exposition', 'Resolution', 'Falling action'], answer: 1, explain: 'Exposition - вступление, начало.' },
          { q: 'What is the climax?', options: ['The beginning', 'The turning point', 'The ending', 'The setting'], answer: 1, explain: 'Climax - кульминация, высшая точка напряжения.' },
          { q: 'What is an inciting incident?', options: ['The ending', 'The event that starts the story', 'A character description', 'The setting'], answer: 1, explain: 'Inciting incident - завязка, отправная точка.' },
          { q: 'In a character-driven story, what moves the plot?', options: ['External events', 'Character choices', 'The weather', 'The setting'], answer: 1, explain: 'Character-driven: выбор персонажей двигает сюжет.' },
          { q: 'In a plot-driven story, what moves the plot?', options: ['Character feelings', 'External events', 'The narrator', 'The theme'], answer: 1, explain: 'Plot-driven: внешние события двигают сюжет.' },
          { q: 'Short sentences create what pacing?', options: ['Slow', 'Fast', 'No effect', 'Confusing'], answer: 1, explain: 'Короткие предложения ускоряют темп.' },
          { q: 'Which stage follows the climax?', options: ['Exposition', 'Rising action', 'Falling action', 'Inciting incident'], answer: 2, explain: 'Falling action - спад после кульминации.' },
          { q: 'The three-act structure: Act I is...', options: ['Confrontation', 'Resolution', 'Setup', 'Climax'], answer: 2, explain: 'Act I = Setup, завязка мира.' },
          { q: 'The three-act structure: Act II is...', options: ['Setup', 'Confrontation', 'Resolution', 'Exposition'], answer: 1, explain: 'Act II = Confrontation, борьба и препятствия.' },
          { q: 'The three-act structure: Act III is...', options: ['Resolution', 'Setup', 'Confrontation', 'Inciting incident'], answer: 0, explain: 'Act III = Resolution, финал.' },
          { q: 'Long, descriptive sentences create what pacing?', options: ['Fast', 'Slow', 'Chaotic', 'None'], answer: 1, explain: 'Длинные предложения замедляют темп.' },
          { q: 'The resolution is also called...', options: ['The climax', 'The new normal', 'The inciting incident', 'The exposition'], answer: 1, explain: 'Resolution - развязка, новое равновесие.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "The ___ is the turning point of the story."', answer: 'climax', explain: 'Climax - кульминация.' },
          { type: 'fill-blank', question: 'Complete: "The ___ incident starts the story."', answer: 'inciting', explain: 'Inciting incident - завязка.' },
          { type: 'choice', question: 'Which comes after the climax?', options: ['Exposition', 'Rising action', 'Falling action', 'Inciting incident'], answer: 2, explain: 'Falling action - спад действия.' },
          { type: 'translate', question: 'Переведите: "Экспозиция знакомит нас с персонажами и местом."', answer: 'The exposition introduces us to the characters and the setting', explain: 'Exposition - вступление.' },
          { type: 'order', question: 'Put in order:', words: ['action', 'Rising', 'tension', 'builds'], answer: 'Rising action builds tension', explain: 'Rising action - развитие действия.' },
          { type: 'correct', question: 'Find and correct: "Short sentences make the story slow."', answer: 'Short sentences make the story fast', explain: 'Короткие предложения ускоряют темп.' }
        ]}
      },
      {
        id: 'pcc-l2', topic: 'Character development',
        objective: 'Создавать живых и убедительных персонажей.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Character Development: Creating Believable People',
          text: 'Characters are the heart of your story. Readers come for the plot, but they stay for the characters. A believable character feels like a real person - complex, flawed, and changing.\n\n**The Elements of a Character:**\n1. Physical description: not just hair and eye color. Show distinctive features: a scar, a habit, the way they walk. "He had the hands of a pianist, long and always moving."\n2. Personality: are they kind, cruel, anxious, brave? Give them traits, but avoid stereotypes.\n3. Motivation: what does the character want? This is the engine of the story. A character without desire is flat. "She wanted to prove her father wrong."\n4. Flaws: perfect characters are boring. Give them weaknesses: pride, fear, dishonesty, jealousy. Flaws create conflict and growth.\n5. Character arc: how does the character change? The best arcs show transformation. A coward becomes brave. A selfish person learns to care.\n\n**Show, Don\'t Tell:**\nDon\'t write "John was angry." Instead, show it: "John slammed the door so hard the windows shook." Showing lets the reader feel the emotion instead of being told.\n\n**Dialogue as Characterization:**\nHow a character speaks reveals who they are. A nervous character uses short, hesitant sentences. A confident character speaks in long, flowing lines. Word choice, rhythm, and even silence tell the reader about personality.\n\n**Protagonist vs Antagonist:**\n- Protagonist: the main character, the one the reader roots for. Their goal drives the story.\n- Antagonist: the force or character who opposes the protagonist. A great antagonist is not purely evil - they have their own goals and reasons.\n\n**Tips for Character Development:**\n- Write a character profile: name, age, background, fears, desires, secrets.\n- Ask: what is the worst thing that could happen to this character? Then make it happen.\n- Let your characters surprise you. If they feel real, they will make their own choices.\n\nGreat characters live in the reader\'s mind long after the story ends.',
          vocab: [
            { word: 'physical description', trans: 'Внешнее описание' },
            { word: 'personality', trans: 'Характер, личность' },
            { word: 'motivation', trans: 'Мотивация, желание' },
            { word: 'flaw', trans: 'Недостаток, слабость' },
            { word: 'character arc', trans: 'Арка персонажа (развитие)' },
            { word: 'show, don\'t tell', trans: 'Показывай, а не рассказывай' },
            { word: 'protagonist', trans: 'Главный герой' },
            { word: 'antagonist', trans: 'Антагонист (противник)' }
          ]
        },
        video: { slides: [
          { emoji: ' heart', title: 'Characters', text: 'The heart of the story. Readers stay for the characters.' },
          { emoji: ' look', title: 'Physical', text: 'Distinctive features, habits, the way they move.' },
          { emoji: ' mind', title: 'Personality', text: 'Traits, but avoid stereotypes.' },
          { emoji: ' want', title: 'Motivation', text: 'What does the character want? The engine of the story.' },
          { emoji: ' crack', title: 'Flaws', text: 'Perfect = boring. Weaknesses create conflict and growth.' },
          { emoji: ' change', title: 'Character Arc', text: 'How does the character change? Transformation.' },
          { emoji: ' show', title: 'Show, Don\'t Tell', text: '"He slammed the door" not "He was angry."' },
          { emoji: ' vs', title: 'Protagonist vs Antagonist', text: 'Hero vs the force that opposes them. Antagonist has own goals.' }
        ]},
        quiz: { pool: [
          { q: 'What is a character\'s motivation?', options: ['Their appearance', 'What they want', 'Their name', 'Their flaw'], answer: 1, explain: 'Motivation - желание, двигатель истории.' },
          { q: 'Why are flaws important?', options: ['They make characters perfect', 'They create conflict and growth', 'They are unnecessary', 'They slow the story'], answer: 1, explain: 'Flaws создают конфликт и развитие.' },
          { q: 'What is "show, don\'t tell"?', options: ['Explain emotions directly', 'Reveal emotions through action', 'Avoid description', 'Use only dialogue'], answer: 1, explain: 'Показывать эмоции через действия, а не называть их.' },
          { q: 'Who is the protagonist?', options: ['The villain', 'The main character', 'The setting', 'The narrator'], answer: 1, explain: 'Protagonist - главный герой.' },
          { q: 'Who is the antagonist?', options: ['The hero', 'The force opposing the hero', 'The reader', 'The author'], answer: 1, explain: 'Antagonist - противник главного героя.' },
          { q: 'A character arc shows...', options: ['How the character looks', 'How the character changes', 'The character\'s name', 'The setting'], answer: 1, explain: 'Character arc - развитие/трансформация персонажа.' },
          { q: 'Which is "show, don\'t tell"?', options: ['She was sad', 'She wiped a tear and looked away', 'She is a sad person', 'Sadness filled her'], answer: 1, explain: 'Показываем действие, а не называем эмоцию.' },
          { q: 'Why should an antagonist have their own goals?', options: ['To be purely evil', 'To feel real and complex', 'To be boring', 'To be weak'], answer: 1, explain: 'Хороший антагонист - сложный, со своими целями.' },
          { q: 'What reveals personality through speech?', options: ['Description', 'Dialogue', 'Setting', 'Pacing'], answer: 1, explain: 'Диалог раскрывает характер.' },
          { q: 'A character without desire is...', options: ['Exciting', 'Flat', 'Evil', 'Brave'], answer: 1, explain: 'Без мотивации персонаж плоский.' },
          { q: 'What is the worst thing to do to a character?', options: ['Make them happy', 'Give them what they want', 'Make the worst thing happen', 'Ignore them'], answer: 2, explain: 'Худшее создаёт конфликт и развитие.' },
          { q: 'Physical description should focus on...', options: ['Only eye color', 'Distinctive features and habits', 'Clothing brands', 'Nothing'], answer: 1, explain: 'Особенности и привычки делают персонажа живым.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Perfect characters are ___, give them flaws."', answer: 'boring', explain: 'Идеальные персонажи скучны.' },
          { type: 'fill-blank', question: 'Complete: "The ___ is the main character of the story."', answer: 'protagonist', explain: 'Protagonist - главный герой.' },
          { type: 'choice', question: 'Which is an example of "show, don\'t tell"?', options: ['He was angry', 'He was a man', 'He clenched his fists and glared', 'He felt mad'], answer: 2, explain: 'Показываем действие, а не называем эмоцию.' },
          { type: 'translate', question: 'Переведите: "Её мотивация двигает всю историю."', answer: 'Her motivation drives the whole story', explain: 'Motivation - двигатель сюжета.' },
          { type: 'order', question: 'Put in order:', words: ['door', 'slammed', 'the', 'He'], answer: 'He slammed the door', explain: 'Показываем гнев через действие.' },
          { type: 'correct', question: 'Find and correct: "John was angry and that was it."', answer: 'John slammed the door so hard the windows shook', explain: 'Показывай, а не рассказывай.' }
        ]}
      },
      {
        id: 'pcc-l3', topic: 'Setting and atmosphere',
        objective: 'Создавать живые миры и атмосферу через детали.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Setting and Atmosphere: Building Vivid Worlds',
          text: 'Setting is where and when your story happens. Atmosphere is how it feels. Together, they transport the reader into your world. A great setting is not a backdrop - it is alive, and it affects everything.\n\n**The Three Elements of Setting:**\n1. Time: when does the story take place? Past, present, future? Morning or midnight? A single day or a decade?\n2. Place: where does it happen? A city, a forest, a spaceship, a kitchen? Be specific - "a cramped kitchen smelling of old coffee" beats "a kitchen."\n3. Mood: what feeling does the setting create? A forest can be peaceful or terrifying, depending on how you describe it.\n\n**Sensory Details:**\nThe key to vivid writing is engaging the senses. Don\'t just describe what things look like - use all five senses.\n- Sight: what do you see? Colors, light, movement. "The streetlamp cast a yellow pool on the wet cobblestones."\n- Sound: what do you hear? "A distant dog barked, then fell silent."\n- Smell: what does it smell like? Smell is the strongest sense for memory. "The air tasted of salt and seaweed."\n- Touch: what does it feel like? "The wind cut through her thin coat like a knife."\n- Taste: what can you taste? "The coffee was bitter and too hot."\n\n**World-Building:**\nIn fantasy or science fiction, you create entire worlds. But even in realistic fiction, you build a world. Rules, history, culture, and geography all matter. The reader should feel the world exists beyond the page.\n\n**Atmosphere Through Word Choice:**\nThe words you choose create the mood. Compare:\n- "The house stood on the hill, old and quiet." (calm, neutral)\n- "The house crouched on the hill, dark and watching." (ominous, threatening)\nSame house, different atmosphere. Choose verbs, adjectives, and metaphors that match the mood you want.\n\n**Tips:**\n- Don\'t describe everything at once. Reveal the setting through action.\n- Let the setting affect the characters. Rain changes a mood. A small room creates tension.\n- Use specific, concrete details, not vague generalities.\n\nSetting is the stage where your story breathes.',
          vocab: [
            { word: 'setting', trans: 'Место и время действия' },
            { word: 'atmosphere', trans: 'Атмосфера, настроение' },
            { word: 'mood', trans: 'Настроение, тональность' },
            { word: 'sensory details', trans: 'Сенсорные детали' },
            { word: 'world-building', trans: 'Построение мира' },
            { word: 'sight', trans: 'Зрение (что видно)' },
            { word: 'sound', trans: 'Звук (что слышно)' },
            { word: 'smell', trans: 'Запах' }
          ]
        },
        video: { slides: [
          { emoji: ' world', title: 'Setting', text: 'Where and when. Not a backdrop - alive and affecting.' },
          { emoji: ' clock', title: 'Time', text: 'Past, present, future. Morning or midnight.' },
          { emoji: ' place', title: 'Place', text: 'Be specific: "a cramped kitchen smelling of old coffee."' },
          { emoji: ' mood', title: 'Mood', text: 'Feeling the setting creates. Same forest: peaceful or terrifying.' },
          { emoji: ' eye', title: 'Sensory: Sight', text: 'Colors, light, movement. "The streetlamp cast a yellow pool."' },
          { emoji: ' ear', title: 'Sensory: Sound', text: '"A distant dog barked, then fell silent."' },
          { emoji: ' nose', title: 'Sensory: Smell', text: 'Strongest for memory. "The air tasted of salt and seaweed."' },
          { emoji: ' words', title: 'Word Choice = Mood', text: '"stood" (calm) vs "crouched" (ominous). Same house, different feeling.' }
        ]},
        quiz: { pool: [
          { q: 'What is setting?', options: ['The plot', 'Where and when the story happens', 'The characters', 'The dialogue'], answer: 1, explain: 'Setting - место и время действия.' },
          { q: 'What is atmosphere?', options: ['The plot', 'How the setting feels', 'The climax', 'The characters'], answer: 1, explain: 'Atmosphere - настроение, ощущение.' },
          { q: 'Which is a sensory detail of smell?', options: ['A yellow light', 'A distant bark', 'The taste of salt', 'A cold wind'], answer: 2, explain: 'Smell - запах. "Taste of salt" связан с запахом/вкусом.' },
          { q: 'Which sense is strongest for memory?', options: ['Sight', 'Smell', 'Touch', 'Hearing'], answer: 1, explain: 'Запах сильнее всего связан с памятью.' },
          { q: 'Which sentence creates an ominous mood?', options: ['The house stood quietly', 'The house crouched, dark and watching', 'The house was nice', 'The house was big'], answer: 1, explain: '"Crouched, dark and watching" - зловеще.' },
          { q: 'What is world-building?', options: ['Writing dialogue', 'Creating the rules, history, and culture of a world', 'Editing', 'Pacing'], answer: 1, explain: 'World-building - построение мира.' },
          { q: 'Which is a better setting description?', options: ['A kitchen', 'A cramped kitchen smelling of old coffee', 'A room', 'A place'], answer: 1, explain: 'Конкретные детали лучше общих.' },
          { q: 'Which is a sensory detail of sound?', options: ['A yellow pool of light', 'A distant dog barking', 'Bitter coffee', 'A cold wind'], answer: 1, explain: 'Sound - звук. "Dog barking" - звук.' },
          { q: 'Which is a sensory detail of touch?', options: ['A cold wind cutting through a coat', 'A yellow light', 'A bitter taste', 'A barking dog'], answer: 0, explain: 'Touch - осязание. "Cold wind" - касание.' },
          { q: 'How should you reveal setting?', options: ['All at once', 'Through action', 'Never', 'Only in dialogue'], answer: 1, explain: 'Раскрывайте сеттинг через действие.' },
          { q: 'What changes the mood of a setting?', options: ['Nothing', 'Word choice', 'The font', 'The page number'], answer: 1, explain: 'Выбор слов создаёт настроение.' },
          { q: 'A forest can be peaceful or terrifying depending on...', options: ['The reader', 'How you describe it', 'The length', 'The title'], answer: 1, explain: 'Настроение зависит от описания.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "The ___ is where and when the story happens."', answer: 'setting', explain: 'Setting - место и время.' },
          { type: 'fill-blank', question: 'Complete: "___ is the strongest sense for memory."', answer: 'Smell', explain: 'Запах сильнее всего связан с памятью.' },
          { type: 'choice', question: 'Which creates an ominous mood?', options: ['The house stood quietly', 'The house crouched, dark and watching', 'The house was old', 'The house was fine'], answer: 1, explain: 'Слова "crouched, dark, watching" создают зловещее настроение.' },
          { type: 'translate', question: 'Переведите: "Атмосфера зависит от выбора слов."', answer: 'Atmosphere depends on word choice', explain: 'Word choice - выбор слов.' },
          { type: 'order', question: 'Put in order:', words: ['dog', 'A', 'barked', 'distant'], answer: 'A distant dog barked', explain: 'Сенсорная деталь звука.' },
          { type: 'correct', question: 'Find and correct: "The kitchen was a place."', answer: 'The cramped kitchen smelled of old coffee', explain: 'Добавьте конкретные сенсорные детали.' }
        ]}
      },
      {
        id: 'pcc-l4', topic: 'Point of view and narrative voice',
        objective: 'Выбирать правильную точку зрения для истории.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Point of View and Narrative Voice: Who Tells the Story?',
          text: 'Point of view (POV) is the perspective from which a story is told. The choice of POV changes everything - what the reader knows, how they feel, and how close they are to the characters. Choose carefully.\n\n**First Person (I):**\nThe narrator is a character in the story. "I walked into the room and saw her for the first time."\n- Strengths: intimate, immediate, strong voice. The reader lives inside the narrator\'s head.\n- Weaknesses: limited to what the narrator knows. The narrator can lie or be mistaken.\n\n**Second Person (You):**\nThe narrator speaks directly to the reader, making "you" the character. "You walk into the room. You see her. Your heart stops."\n- Strengths: immersive, powerful, unusual. Common in interactive fiction and some literary works.\n- Weaknesses: hard to sustain over a long story. Can feel gimmicky.\n\n**Third Person Limited (he/she):**\nThe narrator follows one character, knowing only their thoughts and feelings. "She walked into the room. Her heart was racing, though she tried to hide it."\n- Strengths: flexible, focuses on one character\'s inner world while allowing some distance.\n- Weaknesses: limited to one perspective at a time.\n\n**Third Person Omniscient:**\nThe narrator knows everything - all characters\' thoughts, past, and future. "She walked into the room, nervous. Across the table, he was already planning his escape."\n- Strengths: god-like perspective, can show everything.\n- Weaknesses: can feel distant. Hard to create deep intimacy.\n\n**Choosing the Right POV:**\n- Ask: whose story is this? The POV should belong to the character with the most at stake.\n- First person for intimacy and voice.\n- Third limited for flexibility with one character\'s depth.\n- Omniscient for sprawling, multi-character epics.\n\n**The Unreliable Narrator:**\nAn unreliable narrator is one whose credibility is compromised. They may lie, misunderstand, or be mentally unstable. The reader must figure out the truth. Famous examples include "The Tell-Tale Heart" by Poe and "Gone Girl." This technique creates suspense and makes the reader an active participant.\n\nPOV is the lens through which the reader sees your world. Choose it with purpose.',
          vocab: [
            { word: 'point of view (POV)', trans: 'Точка зрения' },
            { word: 'first person (I)', trans: 'Первое лицо' },
            { word: 'second person (you)', trans: 'Второе лицо' },
            { word: 'third person limited', trans: 'Третье лицо ограниченное' },
            { word: 'third person omniscient', trans: 'Третье лицо всезнающее' },
            { word: 'narrator', trans: 'Рассказчик' },
            { word: 'unreliable narrator', trans: 'Ненадёжный рассказчик' },
            { word: 'credibility', trans: 'Достоверность' }
          ]
        },
        video: { slides: [
          { emoji: ' eye', title: 'Point of View', text: 'The perspective from which the story is told. Changes everything.' },
          { emoji: ' I', title: 'First Person (I)', text: 'Intimate, strong voice. Limited to what narrator knows.' },
          { emoji: ' you', title: 'Second Person (you)', text: 'Immersive, makes reader the character. Hard to sustain.' },
          { emoji: ' she', title: 'Third Person Limited', text: 'Follows one character. Knows only their thoughts.' },
          { emoji: ' all', title: 'Third Person Omniscient', text: 'Knows everything - all thoughts, past, future.' },
          { emoji: ' choose', title: 'Choosing POV', text: 'Whose story is this? POV belongs to who has most at stake.' },
          { emoji: ' mask', title: 'Unreliable Narrator', text: 'Narrator lies, misunderstands. Reader must find the truth.' },
          { emoji: ' lens', title: 'POV is a Lens', text: 'Choose it with purpose. It shapes the whole story.' }
        ]},
        quiz: { pool: [
          { q: 'Which POV uses "I"?', options: ['First person', 'Second person', 'Third limited', 'Omniscient'], answer: 0, explain: 'First person - "I".' },
          { q: 'Which POV uses "you"?', options: ['First person', 'Second person', 'Third limited', 'Omniscient'], answer: 1, explain: 'Second person - "you".' },
          { q: 'Which POV knows only one character\'s thoughts?', options: ['First person', 'Third person limited', 'Omniscient', 'Second person'], answer: 1, explain: 'Third limited - следует за одним персонажем.' },
          { q: 'Which POV knows everything about all characters?', options: ['First person', 'Third limited', 'Third person omniscient', 'Second person'], answer: 2, explain: 'Omniscient - всезнающий рассказчик.' },
          { q: 'What is an unreliable narrator?', options: ['A narrator who is always honest', 'A narrator whose credibility is compromised', 'A narrator who is dead', 'A narrator with no name'], answer: 1, explain: 'Ненадёжный рассказчик может лгать или ошибаться.' },
          { q: 'First person is best for...', options: ['Sprawling epics', 'Intimacy and voice', 'Showing all thoughts', 'Avoiding emotion'], answer: 1, explain: 'First person - близость и сильный голос.' },
          { q: 'Third person omniscient can feel...', options: ['Very intimate', 'Distant', 'Gimmicky', 'Unreliable'], answer: 1, explain: 'Omniscient может ощущаться отстранённым.' },
          { q: 'Second person is common in...', options: ['Romance novels', 'Interactive fiction', 'Biographies', 'News articles'], answer: 1, explain: 'Second person часто в интерактивной литературе.' },
          { q: 'Whose POV should you choose?', options: ['A random character', 'The character with the most at stake', 'The villain always', 'The narrator'], answer: 1, explain: 'POV - у того, кому больше всего зависит.' },
          { q: 'Which is a first person sentence?', options: ['She walked in', 'You walk in', 'I walked into the room', 'They walked in'], answer: 2, explain: '"I walked" - first person.' },
          { q: 'Which is a second person sentence?', options: ['I see her', 'You see her', 'She sees him', 'He sees her'], answer: 1, explain: '"You see" - second person.' },
          { q: 'An unreliable narrator creates...', options: ['Boredom', 'Suspense and active reading', 'Clarity', 'No effect'], answer: 1, explain: 'Читатель должен сам искать правду - это создаёт саспенс.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "___ person uses \'I\'."', answer: 'First', explain: 'First person - "I".' },
          { type: 'fill-blank', question: 'Complete: "A narrator who lies is called ___."', answer: 'unreliable', explain: 'Unreliable narrator - ненадёжный рассказчик.' },
          { type: 'choice', question: 'Which POV knows all characters\' thoughts?', options: ['First person', 'Third limited', 'Third person omniscient', 'Second person'], answer: 2, explain: 'Omniscient - всезнающий.' },
          { type: 'translate', question: 'Переведите: "Точка зрения меняет всё."', answer: 'Point of view changes everything', explain: 'POV - точка зрения.' },
          { type: 'order', question: 'Put in order:', words: ['room', 'walked', 'I', 'the', 'into'], answer: 'I walked into the room', explain: 'First person POV.' },
          { type: 'correct', question: 'Find and correct: "Third person limited knows all thoughts."', answer: 'Third person limited knows one character thoughts', explain: 'Limited = только один персонаж.' }
        ]}
      },
      {
        id: 'pcc-l5', topic: 'Dialogue and subtext',
        objective: 'Писать живые диалоги с подтекстом.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Dialogue and Subtext: What Characters Say and Don\'t Say',
          text: 'Dialogue is how characters speak to each other. Good dialogue sounds natural, reveals character, and moves the story forward. Great dialogue also has subtext - the meaning beneath the words.\n\n**Writing Natural Dialogue:**\nReal conversation is messy. People use contractions ("don\'t," "can\'t," "I\'ll"), interrupt each other, and don\'t speak in complete sentences. Good dialogue mimics this.\n- Use contractions: "I don\'t know" not "I do not know."\n- Allow interruptions: "I thought you were--" "I was."\n- Use dialect and accent carefully: it adds flavor but can be hard to read. Don\'t overdo it.\n- Let characters have different voices. A teenager and an old professor should not sound the same.\n\n**Dialogue Tags:**\nDialogue tags tell the reader who is speaking.\n- "said" - the invisible tag. Use it most. It disappears, letting the dialogue shine.\n- "exclaimed," "whispered," "shouted," "muttered" - use these when the volume or tone matters.\n- Avoid overusing creative tags like "ejaculated," "vociferated," or "opined." They distract.\n- Action beats can replace tags: "She slammed her cup down. \'I\'m done.\'" This shows who speaks and adds movement.\n\n**Subtext:**\nSubtext is what the character means but does not say. It is the meaning beneath the surface.\n- A character says "Fine" but means "I\'m furious."\n- A character says "I\'m not hungry" but means "I\'m upset and don\'t want to talk."\nSubtext makes dialogue layered and realistic. People rarely say exactly what they mean. They hint, dodge, and deflect.\n\n**Conflict in Dialogue:**\nThe best dialogue has tension. Characters disagree, negotiate, or fight - even subtly. Two characters agreeing about everything is boring. Give them different goals and let them clash.\n\n**Tips:**\n- Read your dialogue aloud. If it sounds unnatural, rewrite it.\n- Cut the small talk. Skip "Hello, how are you?" unless it reveals character.\n- Let silence speak. A pause can be more powerful than words.\n- Every line of dialogue should do at least one job: reveal character, advance plot, or create tension.\n\nDialogue is action. Make every word count.',
          vocab: [
            { word: 'contraction', trans: 'Стяжение (don\'t, can\'t)' },
            { word: 'interruption', trans: 'Перебивание' },
            { word: 'dialect', trans: 'Диалект' },
            { word: 'dialogue tag', trans: 'Авторская ремарка (said, whispered)' },
            { word: 'action beat', trans: 'Действие вместо ремарки' },
            { word: 'subtext', trans: 'Подтекст' },
            { word: 'conflict', trans: 'Конфликт, столкновение' },
            { word: 'small talk', trans: 'Светская беседа' }
          ]
        },
        video: { slides: [
          { emoji: ' talk', title: 'Natural Dialogue', text: 'Contractions, interruptions, incomplete sentences. Real speech is messy.' },
          { emoji: ' short', title: 'Contractions', text: '"I don\'t know" not "I do not know." Use them!' },
          { emoji: ' cut', title: 'Interruptions', text: '"I thought you were--" "I was." Adds realism.' },
          { emoji: ' said', title: 'Dialogue Tags', text: '"said" is invisible - use it most. Avoid fancy tags.' },
          { emoji: ' beat', title: 'Action Beats', text: '"She slammed her cup. \'I\'m done.\'" Replaces tags, adds movement.' },
          { emoji: ' under', title: 'Subtext', text: 'What characters mean but don\'t say. "Fine" = "I\'m furious."' },
          { emoji: ' clash', title: 'Conflict', text: 'Characters disagree. Tension makes dialogue alive.' },
          { emoji: ' read', title: 'Read Aloud', text: 'If it sounds unnatural, rewrite it. Cut small talk.' }
        ]},
        quiz: { pool: [
          { q: 'What is a contraction?', options: ['A long word', 'A shortened form like don\'t', 'A dialogue tag', 'A type of character'], answer: 1, explain: 'Contraction - стяжение (don\'t, can\'t).' },
          { q: 'Which dialogue tag should you use most?', options: ['exclaimed', 'vociferated', 'said', 'ejaculated'], answer: 2, explain: '"said" невидим, используйте его чаще всего.' },
          { q: 'What is subtext?', options: ['What characters say', 'The meaning beneath the words', 'A dialogue tag', 'A setting'], answer: 1, explain: 'Subtext - подтекст, скрытый смысл.' },
          { q: 'When a character says "Fine" but means "I\'m furious," that is...', options: ['Conflict', 'Subtext', 'A tag', 'Small talk'], answer: 1, explain: 'Скрытое значение - это подтекст.' },
          { q: 'What makes dialogue boring?', options: ['Conflict', 'Characters agreeing about everything', 'Contractions', 'Interruptions'], answer: 1, explain: 'Полное согласие делает диалог скучным.' },
          { q: 'What is an action beat?', options: ['A dialogue tag', 'An action that replaces a tag', 'A contraction', 'A character flaw'], answer: 1, explain: 'Action beat - действие вместо ремарки.' },
          { q: 'What should you cut from dialogue?', options: ['Conflict', 'Small talk', 'Contractions', 'Interruptions'], answer: 1, explain: 'Small talk - светская беседа, её лучше сократить.' },
          { q: 'How can you test if dialogue sounds natural?', options: ['Read it aloud', 'Count the words', 'Check grammar', 'Add more tags'], answer: 0, explain: 'Читайте вслух - если звучит неестественно, перепишите.' },
          { q: 'Why use dialect carefully?', options: ['It is always bad', 'It adds flavor but can be hard to read', 'It is required', 'It replaces tags'], answer: 1, explain: 'Диалект добавляет вкус, но усложняет чтение.' },
          { q: 'What should every line of dialogue do?', options: ['Be long', 'Reveal character, advance plot, or create tension', 'Contain a tag', 'Be a question'], answer: 1, explain: 'Каждая реплика должна работать.' },
          { q: 'Which is a natural dialogue line?', options: ['I do not know', 'I don\'t know', 'I am not knowing', 'I know not'], answer: 1, explain: 'Contractions делают речь естественной.' },
          { q: 'What can be more powerful than words?', options: ['A tag', 'Silence or a pause', 'A contraction', 'A description'], answer: 1, explain: 'Пауза может быть мощнее слов.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Use ___ for natural speech: don\'t, can\'t, I\'ll."', answer: 'contractions', explain: 'Contractions - стяжения.' },
          { type: 'fill-blank', question: 'Complete: "___ is the meaning beneath the words."', answer: 'Subtext', explain: 'Subtext - подтекст.' },
          { type: 'choice', question: 'Which tag should you use most?', options: ['exclaimed', 'said', 'vociferated', 'opined'], answer: 1, explain: '"said" невидим и не отвлекает.' },
          { type: 'translate', question: 'Переведите: "Люди редко говорят прямо то, что имеют в виду."', answer: 'People rarely say exactly what they mean', explain: 'Subtext - скрытый смысл.' },
          { type: 'order', question: 'Put in order:', words: ['done', 'I', 'am'], answer: 'I am done', explain: 'Простой естественный диалог.' },
          { type: 'correct', question: 'Find and correct: "I do not know," she vociferated.', answer: 'I don\'t know, she said', explain: 'Contractions + "said" вместо модных тегов.' }
        ]}
      },
      {
        id: 'pcc-l6', topic: 'Editing and polishing',
        objective: 'Самостоятельно редактировать и улучшать тексты.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Editing and Polishing: From First Draft to Finished Story',
          text: 'Writing is rewriting. Your first draft is you telling yourself the story. The real work begins when you edit. Good editing transforms a rough draft into a polished, powerful piece.\n\n**The Editing Process:**\n1. First draft: write without judging. Get the story down. Don\'t edit as you go - just write.\n2. Revision (big picture): look at structure, plot, character arcs, pacing. Does the story work? Cut scenes that don\'t serve it. Add what\'s missing.\n3. Polishing (line editing): focus on sentences, word choice, rhythm. This is where you make the prose sing.\n4. Proofreading: fix typos, grammar, and punctuation. The final check.\n\n**Common Mistakes to Fix:**\n- Adverb overuse: instead of "she said angrily," show the anger. "She slammed her fist on the table." Adverbs often signal weak verbs. Use strong verbs instead.\n- Passive voice: "The window was broken by the boy" is weaker than "The boy broke the window." Active voice is usually stronger and clearer.\n- Purple prose: overly ornate, flowery writing that draws attention to itself. "The golden orb of celestial fire descended upon the verdant meadow" should be "The sun set over the field." Clarity beats decoration.\n- Cliches: "dead as a doornail," "avoid like the plague." Find fresh ways to say things.\n\n**Cutting Unnecessary Words:**\nMost drafts can be cut by 10-20%. Look for:\n- Redundancies: "past history," "unexpected surprise," "free gift."\n- Filler words: "very," "really," "just," "quite," "actually." Often, removing them makes the sentence stronger.\n- Weak phrases: "began to" or "started to" - usually you can just state the action. "He began to run" becomes "He ran."\n\n**Show vs Tell Checklist:**\n- Telling: "John was nervous." Showing: "John\'s hand trembled as he reached for the cup."\n- Search for emotion words (sad, angry, happy) and ask: can I show this instead?\n- Telling has its place - for transitions and summary - but showing creates immersion.\n\n**Tips for Self-Editing:**\n- Put the draft away for a day or two before editing. Fresh eyes see more.\n- Read aloud. Your ear catches what your eye misses.\n- Cut anything that doesn\'t serve the story.\n- Save your cuts - you might use them elsewhere.\n- Don\'t edit and create at the same time. They use different parts of the brain.\n\nEditing is where good writing becomes great writing. Embrace it.',
          vocab: [
            { word: 'first draft', trans: 'Первый черновик' },
            { word: 'revision', trans: 'Редактура (крупный план)' },
            { word: 'polishing', trans: 'Полировка (построчная редактура)' },
            { word: 'adverb overuse', trans: 'Избыток наречий' },
            { word: 'passive voice', trans: 'Пассивный залог' },
            { word: 'purple prose', trans: 'Вычурная, цветистая проза' },
            { word: 'cliche', trans: 'Клише, штамп' },
            { word: 'filler word', trans: 'Слово-заполнитель (very, really)' }
          ]
        },
        video: { slides: [
          { emoji: ' write', title: 'First Draft', text: 'Write without judging. Get the story down. Don\'t edit as you go.' },
          { emoji: ' big', title: 'Revision', text: 'Big picture: structure, plot, character arcs, pacing. Cut and add.' },
          { emoji: ' shine', title: 'Polishing', text: 'Line editing: sentences, word choice, rhythm. Make prose sing.' },
          { emoji: ' check', title: 'Proofreading', text: 'Final check: typos, grammar, punctuation.' },
          { emoji: ' verb', title: 'Adverb Overuse', text: '"said angrily" -> "slammed her fist." Use strong verbs.' },
          { emoji: ' passive', title: 'Passive Voice', text: '"Window was broken by boy" -> "Boy broke window." Active is stronger.' },
          { emoji: ' purple', title: 'Purple Prose', text: 'Too ornate. "Celestial fire" -> "The sun." Clarity beats decoration.' },
          { emoji: ' cut', title: 'Cut Unnecessary Words', text: 'Redundancies, fillers (very, really), "began to." Cut 10-20%.' }
        ]},
        quiz: { pool: [
          { q: 'What is the first step of editing?', options: ['Polishing', 'Writing the first draft', 'Proofreading', 'Cutting words'], answer: 1, explain: 'Сначала пишем черновик, потом редактируем.' },
          { q: 'What does revision focus on?', options: ['Typos', 'Big picture: structure, plot, arcs', 'Word choice', 'Punctuation'], answer: 1, explain: 'Revision - крупный план: структура, сюжет.' },
          { q: 'What does polishing focus on?', options: ['Plot structure', 'Sentences, word choice, rhythm', 'Characters', 'Theme'], answer: 1, explain: 'Polishing - построчная редактура.' },
          { q: 'Which is a strong verb replacement for "said angrily"?', options: ['said softly', 'shouted', 'whispered', 'spoke'], answer: 1, explain: '"Shouted" сильнее, чем "said angrily".' },
          { q: 'Which is active voice?', options: ['The window was broken', 'The boy broke the window', 'The window got broken', 'Breaking happened'], answer: 1, explain: 'Active: подлежащее действует.' },
          { q: 'What is purple prose?', options: ['Clear writing', 'Overly ornate, flowery writing', 'Short sentences', 'Dialogue'], answer: 1, explain: 'Purple prose - вычурная, цветистая проза.' },
          { q: 'Which is a filler word to cut?', options: ['ran', 'very', 'shouted', 'window'], answer: 1, explain: '"very" - слово-заполнитель.' },
          { q: 'What is a cliche?', options: ['A fresh metaphor', 'An overused phrase', 'A strong verb', 'Active voice'], answer: 1, explain: 'Cliche - клише, затёртый штамп.' },
          { q: 'Which is showing, not telling?', options: ['John was nervous', 'John\'s hand trembled', 'John felt scared', 'John is anxious'], answer: 1, explain: 'Показываем действие, а не называем эмоцию.' },
          { q: 'How much can most drafts be cut?', options: ['0%', '10-20%', '50%', '100%'], answer: 1, explain: 'Большинство черновиков можно сократить на 10-20%.' },
          { q: 'What should you do before editing?', options: ['Edit immediately', 'Put the draft away for a day or two', 'Publish it', 'Delete it'], answer: 1, explain: 'Свежий взгляд видит больше.' },
          { q: 'What catches mistakes your eye misses?', options: ['Reading silently', 'Reading aloud', 'Counting words', 'Adding tags'], answer: 1, explain: 'Чтение вслух помогает заметить ошибки.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Writing is ___."', answer: 'rewriting', explain: 'Настоящая работа - в редактуре.' },
          { type: 'fill-blank', question: 'Complete: "___ voice is usually stronger than passive."', answer: 'Active', explain: 'Active voice сильнее.' },
          { type: 'choice', question: 'Which is purple prose?', options: ['The sun set', 'The golden orb of celestial fire descended', 'The boy ran', 'She shouted'], answer: 1, explain: 'Вычурная, цветистая проза.' },
          { type: 'translate', question: 'Переведите: "Черновик можно сократить на 20 процентов."', answer: 'The draft can be cut by 20 percent', explain: 'Cut - сокращать.' },
          { type: 'order', question: 'Put in order:', words: ['window', 'The', 'broke', 'boy', 'the'], answer: 'The boy broke the window', explain: 'Active voice.' },
          { type: 'correct', question: 'Find and correct: "The window was broken by the boy."', answer: 'The boy broke the window', explain: 'Active voice сильнее пассивного.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_8 = COURSE;
})(window);
