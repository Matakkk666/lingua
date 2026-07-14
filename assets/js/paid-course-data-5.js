/* ============================================================
   AES Paid Course 5: Маленькие голоса (Kids 6-12)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-kids',
    title: 'Маленькие голоса',
    price: 1250, oldPrice: 2490,
    level: 'Kids 6-12',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'cream',
    art: ['#FBF1DD', '#F3E2B8'],
    tagline: 'Весёлый английский для любопытных детей 6-12 лет. 6 модулей.',
    lessons: [
      {
        id: 'pck-l1', topic: 'Colors and Animals',
        objective: 'Назвать цвета и животных по-английски.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Colors and Animals',
          text: 'Welcome to the world of colors and animals! In this lesson, you will learn to name colors and animals in English. It is fun and easy!\n\nColors:\nThere are many colors around us. The main colors are: red, blue, green, yellow, orange, purple, pink, brown, black, and white.\n\n- The apple is red.\n- The sky is blue.\n- The grass is green.\n- The sun is yellow.\n- An orange is orange!\n- Grapes are purple.\n- Flowers can be pink.\n- A bear is brown.\n- The night is black.\n- Snow is white.\n\nAnimals:\nLet\'s learn the names of some animals! Animals are our friends. Here are common animals: dog, cat, bird, fish, elephant, lion, monkey, bear, rabbit, and frog.\n\n- A dog says "woof!"\n- A cat says "meow!"\n- A bird can fly.\n- A fish can swim.\n- An elephant is big.\n- A lion is strong.\n- A monkey likes bananas.\n- A bear is brown.\n- A rabbit has long ears.\n- A frog can jump.\n\nSimple sentences:\nWe can make sentences with colors and animals. Look:\n\n- The cat is black.\n- The dog is brown.\n- I like dogs.\n- I like cats.\n- The elephant is big.\n- The bird is small.\n- The frog is green.\n- The rabbit is white.\n\nHow to say what you like:\n"I like dogs." = Я люблю собак.\n"I don\'t like cats." = Я не люблю кошек.\n\nPractice:\nLook around you. What colors do you see? What animals do you like? Try to say it in English! "I see a red apple." "I like dogs."\n\nHave fun learning English!',
          textRu: 'Добро пожаловать в мир цветов и животных! На этом уроке вы научитесь называть цвета и животных по-английски. Это весело и просто!\n\nЦвета:\nВокруг нас много цветов. Основные цвета: red (красный), blue (синий), green (зелёный), yellow (жёлтый), orange (оранжевый), purple (фиолетовый), pink (розовый), brown (коричневый), black (чёрный) и white (белый).\n\n- Яблоко красное (red).\n- Небо синее (blue).\n- Трава зелёная (green).\n- Солнце жёлтое (yellow).\n- Апельсин оранжевый (orange)!\n- Виноград фиолетовый (purple).\n- Цветы могут быть розовыми (pink).\n- Медведь коричневый (brown).\n- Ночь чёрная (black).\n- Снег белый (white).\n\nЖивотные:\nДавайте выучим названия некоторых животных! Животные — наши друзья. Вот распространённые животные: dog (собака), cat (кошка), bird (птица), fish (рыба), elephant (слон), lion (лев), monkey (обезьяна), bear (медведь), rabbit (кролик) и frog (лягушка).\n\n- Собака говорит "woof!"\n- Кошка говорит "meow!"\n- Птица умеет летать.\n- Рыба умеет плавать.\n- Слон большой.\n- Лев сильный.\n- Обезьяна любит бананы.\n- Медведь коричневый.\n- У кролика длинные уши.\n- Лягушка умеет прыгать.\n\nПростые предложения:\nМы можем составлять предложения с цветами и животными. Смотрите:\n\n- Кошка чёрная (The cat is black).\n- Собака коричневая (The dog is brown).\n- Я люблю собак (I like dogs).\n- Я люблю кошек (I like cats).\n- Слон большой (The elephant is big).\n- Птица маленькая (The bird is small).\n- Лягушка зелёная (The frog is green).\n- Кролик белый (The rabbit is white).\n\nКак сказать, что вам нравится:\n"I like dogs." = Я люблю собак.\n"I don\'t like cats." = Я не люблю кошек.\n\nПрактика:\nОглянитесь вокруг. Какие цвета вы видите? Какие животные вам нравятся? Попробуйте сказать по-английски! "I see a red apple." "I like dogs."\n\nУчите английский с удовольствием!',
          vocab: [
            { word: 'red', trans: 'Красный' },
            { word: 'blue', trans: 'Синий' },
            { word: 'green', trans: 'Зелёный' },
            { word: 'yellow', trans: 'Жёлтый' },
            { word: 'dog', trans: 'Собака' },
            { word: 'cat', trans: 'Кошка' },
            { word: 'elephant', trans: 'Слон' },
            { word: 'bird', trans: 'Птица' }
          ]
        },
        video: { slides: [
          { emoji: ' colors', title: 'Colors', text: 'red, blue, green, yellow, orange, purple, pink, brown, black, white.' },
          { emoji: ' red', title: 'Red', text: 'The apple is red. Красный.' },
          { emoji: ' blue', title: 'Blue', text: 'The sky is blue. Синий.' },
          { emoji: ' dog', title: 'Dog', text: 'A dog says "woof!" Собака.' },
          { emoji: ' cat', title: 'Cat', text: 'A cat says "meow!" Кошка.' },
          { emoji: ' elephant', title: 'Elephant', text: 'An elephant is big. Слон.' },
          { emoji: ' like', title: 'I like...', text: '"I like dogs!" Мне нравятся собаки.' },
          { emoji: ' practice', title: 'Practice', text: 'What colors and animals do you like?' }
        ]},
        quiz: { pool: [
          { q: 'What color is the apple?', options: ['Blue', 'Red', 'Green', 'Black'], answer: 1, explain: 'Яблоко красное - red.' },
          { q: 'What color is the sky?', options: ['Red', 'Green', 'Blue', 'Brown'], answer: 2, explain: 'Небо синее - blue.' },
          { q: 'What color is the sun?', options: ['Yellow', 'Black', 'Purple', 'Pink'], answer: 0, explain: 'Солнце жёлтое - yellow.' },
          { q: 'Which animal says "woof"?', options: ['Cat', 'Dog', 'Bird', 'Fish'], answer: 1, explain: 'Собака говорит "woof!"' },
          { q: 'Which animal says "meow"?', options: ['Dog', 'Cat', 'Lion', 'Frog'], answer: 1, explain: 'Кошка говорит "meow!"' },
          { q: 'Which animal is big?', options: ['Bird', 'Rabbit', 'Elephant', 'Frog'], answer: 2, explain: 'Слон большой - elephant.' },
          { q: 'Which animal can fly?', options: ['Fish', 'Dog', 'Bird', 'Bear'], answer: 2, explain: 'Птица умеет летать - bird.' },
          { q: 'Which animal can swim?', options: ['Fish', 'Cat', 'Monkey', 'Rabbit'], answer: 0, explain: 'Рыба умеет плавать - fish.' },
          { q: 'Complete: "The cat ___ black."', options: ['is', 'are', 'am', 'can'], answer: 0, explain: 'The cat is black.' },
          { q: 'Complete: "I ___ dogs."', options: ['like', 'likes', 'liking', 'liked'], answer: 0, explain: 'I like dogs.' },
          { q: 'What color is snow?', options: ['Black', 'Brown', 'White', 'Green'], answer: 2, explain: 'Снег белый - white.' },
          { q: 'What color is grass?', options: ['Green', 'Red', 'Blue', 'Pink'], answer: 0, explain: 'Трава зелёная - green.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "The apple is ___ (красный)."', answer: 'red', explain: 'Красный - red.' },
          { type: 'fill-blank', question: 'Complete: "A ___ says woof!"', answer: 'dog', explain: 'Собака говорит woof.' },
          { type: 'choice', question: 'What color is the sky?', options: ['Red', 'Blue', 'Green', 'Black'], answer: 1, explain: 'Небо синее - blue.' },
          { type: 'translate', question: 'Переведите: "Мне нравятся собаки."', answer: 'I like dogs', explain: 'I like dogs.' },
          { type: 'order', question: 'Put in order:', words: ['black', 'cat', 'is', 'The'], answer: 'The cat is black', explain: 'The cat is black.' },
          { type: 'correct', question: 'Find and correct: "The dog are brown."', answer: 'The dog is brown', explain: 'С единственным числом - is.' }
        ]}
      },
      {
        id: 'pck-l2', topic: 'My Body and Clothes',
        objective: 'Назвать части тела и одежду по-английски.',
        estimatedTime: '55 минут',
        reading: {
          title: 'My Body and Clothes',
          text: 'Let\'s learn about our body and clothes! In this lesson, you will name body parts and clothes in English.\n\nBody parts:\nWe have many body parts. Here are the main ones: head, eyes, nose, mouth, ears, hands, legs, feet, arms, and fingers.\n\n- This is my head.\n- I have two eyes.\n- I smell with my nose.\n- I eat with my mouth.\n- I hear with my ears.\n- I hold things with my hands.\n- I walk with my legs.\n- I stand on my feet.\n- I hug with my arms.\n- I count with my fingers.\n\nWe say "I have" to talk about body parts:\n- I have two eyes.\n- I have two ears.\n- I have ten fingers.\n- I have one nose.\n\nClothes:\nWe wear clothes every day. Here are common clothes: shirt, pants, dress, shoes, hat, socks, and jacket.\n\n- I wear a shirt.\n- I wear pants.\n- She wears a dress.\n- I put on my shoes.\n- I wear a hat on my head.\n- I wear socks on my feet.\n- I wear a jacket when it is cold.\n\nHow to say what someone is wearing:\n"I am wearing a red shirt." = На мне красная рубашка.\n"She is wearing a blue dress." = На ней синее платье.\n"He is wearing black shoes." = На нём чёрные ботинки.\n\nPractice:\nPoint to your body parts and say their names in English! Look at your clothes and say: "I am wearing a (color) shirt."\n\nGreat job!',
          textRu: 'Давайте узнаем о нашем теле и одежде! На этом уроке вы научитесь называть части тела и одежду по-английски.\n\nЧасти тела:\nУ нас много частей тела. Вот основные: head (голова), eyes (глаза), nose (нос), mouth (рот), ears (уши), hands (руки), legs (ноги), feet (ступни), arms (руки от плеча) и fingers (пальцы).\n\n- Это моя голова (This is my head).\n- У меня два глаза (I have two eyes).\n- Я нюхаю носом (I smell with my nose).\n- Я ем ртом (I eat with my mouth).\n- Я слышу ушами (I hear with my ears).\n- Я держу вещи руками (I hold things with my hands).\n- Я хожу ногами (I walk with my legs).\n- Я стою на ногах (I stand on my feet).\n- Я обнимаю руками (I hug with my arms).\n- Я считаю пальцами (I count with my fingers).\n\nМы говорим "I have" (у меня есть), рассказывая о частях тела:\n- У меня два глаза (I have two eyes).\n- У меня два уха (I have two ears).\n- У меня десять пальцев (I have ten fingers).\n- У меня один нос (I have one nose).\n\nОдежда:\nМы носим одежду каждый день. Вот распространённая одежда: shirt (рубашка), pants (штаны), dress (платье), shoes (обувь), hat (шляпа), socks (носки) и jacket (куртка).\n\n- Я ношу рубашку (I wear a shirt).\n- Я ношу штаны (I wear pants).\n- Она носит платье (She wears a dress).\n- Я надеваю обувь (I put on my shoes).\n- Я ношу шляпу на голове (I wear a hat on my head).\n- Я ношу носки на ногах (I wear socks on my feet).\n- Я ношу куртку, когда холодно (I wear a jacket when it is cold).\n\nКак сказать, кто что носит:\n"I am wearing a red shirt." = На мне красная рубашка.\n"She is wearing a blue dress." = На ней синее платье.\n"He is wearing black shoes." = На нём чёрные ботинки.\n\nПрактика:\nПокажите на части тела и назовите их по-английски! Посмотрите на свою одежду и скажите: "I am wearing a (цвет) shirt."\n\nОтличная работа!',
          vocab: [
            { word: 'head', trans: 'Голова' },
            { word: 'eyes', trans: 'Глаза' },
            { word: 'hands', trans: 'Руки (кисти)' },
            { word: 'legs', trans: 'Ноги' },
            { word: 'shirt', trans: 'Рубашка' },
            { word: 'pants', trans: 'Штаны' },
            { word: 'dress', trans: 'Платье' },
            { word: 'shoes', trans: 'Обувь' }
          ]
        },
        video: { slides: [
          { emoji: ' body', title: 'Body parts', text: 'head, eyes, nose, mouth, ears, hands, legs, feet, arms, fingers.' },
          { emoji: ' head', title: 'Head', text: 'This is my head. Голова.' },
          { emoji: ' eyes', title: 'Eyes', text: 'I have two eyes. Глаза.' },
          { emoji: ' hands', title: 'Hands', text: 'I hold things with my hands. Руки.' },
          { emoji: ' shirt', title: 'Shirt', text: 'I wear a shirt. Рубашка.' },
          { emoji: ' dress', title: 'Dress', text: 'She wears a dress. Платье.' },
          { emoji: ' shoes', title: 'Shoes', text: 'I put on my shoes. Обувь.' },
          { emoji: ' wear', title: 'I am wearing...', text: '"I am wearing a red shirt." Что на тебе надето.' }
        ]},
        quiz: { pool: [
          { q: 'What do you see with?', options: ['Nose', 'Eyes', 'Ears', 'Mouth'], answer: 1, explain: 'Глазами видим - eyes.' },
          { q: 'What do you hear with?', options: ['Eyes', 'Nose', 'Ears', 'Hands'], answer: 2, explain: 'Ушами слышим - ears.' },
          { q: 'What do you eat with?', options: ['Mouth', 'Feet', 'Hands', 'Head'], answer: 0, explain: 'Ртом едим - mouth.' },
          { q: 'What do you walk with?', options: ['Arms', 'Legs', 'Eyes', 'Ears'], answer: 1, explain: 'Ногами ходим - legs.' },
          { q: 'What do you wear on your head?', options: ['Shoes', 'Hat', 'Socks', 'Pants'], answer: 1, explain: 'На голову - hat (шляпа).' },
          { q: 'What do you wear on your feet?', options: ['Socks', 'Shirt', 'Dress', 'Hat'], answer: 0, explain: 'На ноги - socks (носки).' },
          { q: 'Complete: "I ___ two eyes."', options: ['have', 'has', 'am', 'is'], answer: 0, explain: 'I have two eyes.' },
          { q: 'Complete: "She ___ a blue dress."', options: ['wear', 'wears', 'wearing', 'is wear'], answer: 1, explain: 'She wears a dress.' },
          { q: 'Complete: "I am ___ a red shirt."', options: ['wear', 'wears', 'wearing', 'wore'], answer: 2, explain: 'I am wearing - сейчас надето.' },
          { q: 'How many fingers do you have?', options: ['Five', 'Eight', 'Ten', 'Two'], answer: 2, explain: 'Десять пальцев - ten fingers.' },
          { q: 'What do you wear when it is cold?', options: ['Hat', 'Jacket', 'Socks', 'Shirt'], answer: 1, explain: 'В холод - jacket (куртка).' },
          { q: 'Complete: "I stand on my ___."', options: ['hands', 'feet', 'head', 'ears'], answer: 1, explain: 'Стою на ногах - feet.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I ___ two eyes."', answer: 'have', explain: 'I have two eyes.' },
          { type: 'fill-blank', question: 'Complete: "She is wearing a blue ___ (платье)."', answer: 'dress', explain: 'Платье - dress.' },
          { type: 'choice', question: 'What do you hear with?', options: ['Eyes', 'Ears', 'Nose', 'Mouth'], answer: 1, explain: 'Ушами слышим - ears.' },
          { type: 'translate', question: 'Переведите: "На мне красная рубашка."', answer: 'I am wearing a red shirt', explain: 'I am wearing - сейчас надето.' },
          { type: 'order', question: 'Put in order:', words: ['two', 'I', 'have', 'eyes'], answer: 'I have two eyes', explain: 'I have two eyes.' },
          { type: 'correct', question: 'Find and correct: "She wear a dress."', answer: 'She wears a dress', explain: 'С she добавляем -s: wears.' }
        ]}
      },
      {
        id: 'pck-l3', topic: 'Food and Likes/Dislikes',
        objective: 'Говорить о еде и о том, что нравится и не нравится.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Food and Likes/Dislikes',
          text: 'In this lesson, you will learn food words and how to say what you like and don\'t like. Yummy!\n\nFood words:\nHere are common food words: apple, banana, bread, milk, cheese, chicken, rice, water, cake, and ice cream.\n\n- An apple is red or green.\n- A banana is yellow.\n- I eat bread for breakfast.\n- I drink milk.\n- Cheese is yellow and tasty.\n- I eat chicken for lunch.\n- Rice is white.\n- I drink water every day.\n- Cake is sweet.\n- Ice cream is cold and sweet.\n\nHow to say what you like:\n"I like apples." = Я люблю яблоки.\n"I like bananas." = Я люблю бананы.\n"I like ice cream." = Я люблю мороженое.\n\nHow to say what you don\'t like:\n"I don\'t like fish." = Я не люблю рыбу.\n"I don\'t like cheese." = Я не люблю сыр.\n"I don\'t like milk." = Я не люблю молоко.\n\nHow to ask questions:\n"Do you like pizza?" = Ты любишь пиццу?\n"Yes, I do." = Да, люблю.\n"No, I don\'t." = Нет, не люблю.\n\n"Do you like cake?"\n"Yes, I do!"\n"Do you like rice?"\n"No, I don\'t."\n\nImportant words:\n- like = любить / нравиться\n- don\'t like = не любить\n- love = очень любить\n- yummy = вкусно\n- sweet = сладкий\n- cold = холодный\n\nPractice:\nWhat food do you like? What food don\'t you like? Ask your friend: "Do you like apples?" Answer: "Yes, I do!" or "No, I don\'t."\n\nEnjoy your food and enjoy English!',
          textRu: 'На этом уроке вы выучите слова о еде и научитесь говорить, что вам нравится и что не нравится. Вкусно!\n\nСлова о еде:\nВот распространённые слова о еде: apple (яблоко), banana (банан), bread (хлеб), milk (молоко), cheese (сыр), chicken (курица), rice (рис), water (вода), cake (торт) и ice cream (мороженое).\n\n- Яблоко красное или зелёное.\n- Банан жёлтый.\n- Я ем хлеб на завтрак.\n- Я пью молоко.\n- Сыр жёлтый и вкусный.\n- Я ем курицу на обед.\n- Рис белый.\n- Я пью воду каждый день.\n- Торт сладкий.\n- Мороженое холодное и сладкое.\n\nКак сказать, что вам нравится:\n"I like apples." = Я люблю яблоки.\n"I like bananas." = Я люблю бананы.\n"I like ice cream." = Я люблю мороженое.\n\nКак сказать, что вам не нравится:\n"I don\'t like fish." = Я не люблю рыбу.\n"I don\'t like cheese." = Я не люблю сыр.\n"I don\'t like milk." = Я не люблю молоко.\n\nКак задавать вопросы:\n"Do you like pizza?" = Ты любишь пиццу?\n"Yes, I do." = Да, люблю.\n"No, I don\'t." = Нет, не люблю.\n\n"Do you like cake?"\n"Yes, I do!"\n"Do you like rice?"\n"No, I don\'t."\n\nВажные слова:\n- like = любить / нравиться\n- don\'t like = не любить\n- love = очень любить\n- yummy = вкусно\n- sweet = сладкий\n- cold = холодный\n\nПрактика:\nКакая еда вам нравится? Какая еда вам не нравится? Спросите друга: "Do you like apples?" Ответьте: "Yes, I do!" или "No, I don\'t."\n\nНаслаждайтесь едой и учите английский!',
          vocab: [
            { word: 'apple', trans: 'Яблоко' },
            { word: 'banana', trans: 'Банан' },
            { word: 'bread', trans: 'Хлеб' },
            { word: 'milk', trans: 'Молоко' },
            { word: 'cake', trans: 'Торт' },
            { word: 'ice cream', trans: 'Мороженое' },
            { word: 'I like', trans: 'Я люблю / мне нравится' },
            { word: 'I don\'t like', trans: 'Я не люблю' }
          ]
        },
        video: { slides: [
          { emoji: ' food', title: 'Food words', text: 'apple, banana, bread, milk, cheese, chicken, rice, water, cake, ice cream.' },
          { emoji: ' apple', title: 'Apple', text: 'An apple is red or green. Яблоко.' },
          { emoji: ' banana', title: 'Banana', text: 'A banana is yellow. Банан.' },
          { emoji: ' cake', title: 'Cake', text: 'Cake is sweet. Торт.' },
          { emoji: ' like', title: 'I like...', text: '"I like apples!" Мне нравятся яблоки.' },
          { emoji: ' dislike', title: 'I don\'t like...', text: '"I don\'t like fish." Не люблю рыбу.' },
          { emoji: ' question', title: 'Do you like...?', text: '"Do you like pizza?" Ты любишь пиццу?' },
          { emoji: ' answer', title: 'Yes, I do / No, I don\'t', text: 'Ответы на вопрос о еде.' }
        ]},
        quiz: { pool: [
          { q: 'What is yellow and sweet?', options: ['Apple', 'Banana', 'Milk', 'Bread'], answer: 1, explain: 'Банан жёлтый - banana.' },
          { q: 'What is cold and sweet?', options: ['Cake', 'Bread', 'Ice cream', 'Rice'], answer: 2, explain: 'Мороженое холодное и сладкое - ice cream.' },
          { q: 'What do you drink every day?', options: ['Cake', 'Water', 'Bread', 'Cheese'], answer: 1, explain: 'Воду пьём каждый день - water.' },
          { q: 'Complete: "I ___ apples."', options: ['like', 'likes', 'liking', 'liked'], answer: 0, explain: 'I like apples.' },
          { q: 'Complete: "I ___ like fish."', options: ['don\'t', 'doesn\'t', 'not', 'no'], answer: 0, explain: 'I don\'t like fish.' },
          { q: 'How do you answer "Do you like cake?" (yes)', options: ['Yes, I am', 'Yes, I do', 'Yes, I like', 'Yes, I does'], answer: 1, explain: 'Yes, I do.' },
          { q: 'How do you answer "Do you like rice?" (no)', options: ['No, I don\'t', 'No, I not', 'No, I am not', 'No, I doesn\'t'], answer: 0, explain: 'No, I don\'t.' },
          { q: 'Complete: "___ you like pizza?"', options: ['Do', 'Does', 'Are', 'Is'], answer: 0, explain: 'Do you like...?' },
          { q: 'What is white?', options: ['Banana', 'Rice', 'Apple', 'Cheese'], answer: 1, explain: 'Рис белый - rice.' },
          { q: 'What do you drink in the morning?', options: ['Cake', 'Milk', 'Bread', 'Chicken'], answer: 1, explain: 'Молоко пьём утром - milk.' },
          { q: 'Complete: "She ___ cheese."', options: ['like', 'likes', 'liking', 'liked'], answer: 1, explain: 'She likes cheese (добавляем -s).' },
          { q: 'What is sweet?', options: ['Bread', 'Rice', 'Cake', 'Water'], answer: 2, explain: 'Торт сладкий - cake.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I ___ apples." (люблю)', answer: 'like', explain: 'I like apples.' },
          { type: 'fill-blank', question: 'Complete: "I ___ like fish." (не люблю)', answer: 'don\'t', explain: 'I don\'t like fish.' },
          { type: 'choice', question: 'How do you answer "Do you like cake?" (yes)', options: ['Yes, I am', 'Yes, I do', 'Yes, I does', 'Yes, I like'], answer: 1, explain: 'Yes, I do.' },
          { type: 'translate', question: 'Переведите: "Я люблю мороженое."', answer: 'I like ice cream', explain: 'I like ice cream.' },
          { type: 'order', question: 'Put in order:', words: ['like', 'I', 'bananas'], answer: 'I like bananas', explain: 'I like bananas.' },
          { type: 'correct', question: 'Find and correct: "I no like fish."', answer: 'I don\'t like fish', explain: 'Отрицание: don\'t like.' }
        ]}
      },
      {
        id: 'pck-l4', topic: 'My Day and Toys',
        objective: 'Рассказать о своём дне и любимых игрушках.',
        estimatedTime: '55 минут',
        reading: {
          title: 'My Day and Toys',
          text: 'In this lesson, you will learn to talk about your day and your toys. Let\'s go!\n\nMy day:\nEvery day we do many things. Here are daily activities: get up, brush teeth, go to school, play, eat lunch, do homework, watch TV, and go to bed.\n\n- I get up at 7 o\'clock.\n- I brush my teeth in the morning.\n- I go to school at 8.\n- I play with my friends.\n- I eat lunch at 12.\n- I do my homework after school.\n- I watch TV in the evening.\n- I go to bed at 9.\n\nWe use the Present Simple to talk about daily activities:\n"I play with my ball."\n"She goes to school."\n\nToys:\nWe all love toys! Here are common toys: ball, doll, car, puzzle, blocks, and teddy bear.\n\n- I have a ball. I play with my ball.\n- She has a doll. She plays with her doll.\n- He has a toy car. He plays with his car.\n- I like puzzles. I do a puzzle.\n- We play with blocks.\n- I love my teddy bear.\n\nHow to talk about your day:\n"I get up at 7." = Я встаю в 7.\n"I go to school." = Я хожу в школу.\n"I play with my ball." = Я играю с мячом.\n"I watch TV." = Я смотрю телевизор.\n\nImportant words:\n- play = играть\n- toy = игрушка\n- my = мой / моя\n- his = его\n- her = её\n\nPractice:\nTell us about your day! What do you do in the morning? What do you do in the evening? What is your favorite toy? "I play with my teddy bear."\n\nHave a great day!',
          textRu: 'На этом уроке вы научитесь рассказывать о своём дне и своих игрушках. Поехали!\n\nМой день:\nКаждый день мы делаем много вещей. Вот ежедневные занятия: get up (вставать), brush teeth (чистить зубы), go to school (ходить в школу), play (играть), eat lunch (обедать), do homework (делать домашнее задание), watch TV (смотреть телевизор) и go to bed (ложиться спать).\n\n- Я встаю в 7 часов (I get up at 7 o\'clock).\n- Я чищу зубы утром (I brush my teeth in the morning).\n- Я хожу в школу в 8 (I go to school at 8).\n- Я играю с друзьями (I play with my friends).\n- Я обедаю в 12 (I eat lunch at 12).\n- Я делаю домашнее задание после школы (I do my homework after school).\n- Я смотрю телевизор вечером (I watch TV in the evening).\n- Я ложусь спать в 9 (I go to bed at 9).\n\nМы используем Present Simple для рассказа о ежедневных занятиях:\n"I play with my ball."\n"She goes to school."\n\nИгрушки:\nМы все любим игрушки! Вот распространённые игрушки: ball (мяч), doll (кукла), car (машинка), puzzle (пазл), blocks (кубики) и teddy bear (плюшевый мишка).\n\n- У меня есть мяч (I have a ball). Я играю с мячом (I play with my ball).\n- У неё есть кукла (She has a doll). Она играет с куклой (She plays with her doll).\n- У него есть машинка (He has a toy car). Он играет с машинкой (He plays with his car).\n- Я люблю пазлы (I like puzzles). Я собираю пазл (I do a puzzle).\n- Мы играем с кубиками (We play with blocks).\n- Я люблю своего плюшевого мишку (I love my teddy bear).\n\nКак рассказать о своём дне:\n"I get up at 7." = Я встаю в 7.\n"I go to school." = Я хожу в школу.\n"I play with my ball." = Я играю с мячом.\n"I watch TV." = Я смотрю телевизор.\n\nВажные слова:\n- play = играть\n- toy = игрушка\n- my = мой / моя\n- his = его\n- her = её\n\nПрактика:\nРасскажите о своём дне! Что вы делаете утром? Что вы делаете вечером? Какая ваша любимая игрушка? "I play with my teddy bear."\n\nХорошего дня!',
          vocab: [
            { word: 'get up', trans: 'Вставать' },
            { word: 'go to school', trans: 'Ходить в школу' },
            { word: 'play', trans: 'Играть' },
            { word: 'do homework', trans: 'Делать домашнее задание' },
            { word: 'watch TV', trans: 'Смотреть телевизор' },
            { word: 'go to bed', trans: 'Ложиться спать' },
            { word: 'ball', trans: 'Мяч' },
            { word: 'teddy bear', trans: 'Плюшевый мишка' }
          ]
        },
        video: { slides: [
          { emoji: ' day', title: 'My day', text: 'get up, brush teeth, go to school, play, eat lunch, do homework, watch TV, go to bed.' },
          { emoji: ' morning', title: 'Get up', text: 'I get up at 7. Вставать.' },
          { emoji: ' school', title: 'Go to school', text: 'I go to school at 8. Ходить в школу.' },
          { emoji: ' homework', title: 'Do homework', text: 'I do my homework after school.' },
          { emoji: ' toys', title: 'Toys', text: 'ball, doll, car, puzzle, blocks, teddy bear.' },
          { emoji: ' ball', title: 'Ball', text: 'I play with my ball. Мяч.' },
          { emoji: ' teddy', title: 'Teddy bear', text: 'I love my teddy bear. Плюшевый мишка.' },
          { emoji: ' play', title: 'Present Simple', text: '"I play with my ball." Настоящее простое время.' }
        ]},
        quiz: { pool: [
          { q: 'What do you do in the morning?', options: ['Go to bed', 'Get up', 'Watch TV', 'Eat lunch'], answer: 1, explain: 'Утром встаём - get up.' },
          { q: 'What do you do at night?', options: ['Get up', 'Go to school', 'Go to bed', 'Play'], answer: 2, explain: 'Ночью ложимся спать - go to bed.' },
          { q: 'Complete: "I ___ to school at 8."', options: ['go', 'goes', 'going', 'went'], answer: 0, explain: 'I go to school.' },
          { q: 'Complete: "I ___ my homework after school."', options: ['do', 'does', 'doing', 'done'], answer: 0, explain: 'I do my homework.' },
          { q: 'What toy do you kick?', options: ['Doll', 'Ball', 'Puzzle', 'Blocks'], answer: 1, explain: 'Мяч - ball.' },
          { q: 'What is soft and cuddly?', options: ['Car', 'Puzzle', 'Teddy bear', 'Blocks'], answer: 2, explain: 'Плюшевый мишка - teddy bear.' },
          { q: 'Complete: "I play ___ my ball."', options: ['with', 'on', 'in', 'at'], answer: 0, explain: 'play with my ball.' },
          { q: 'Complete: "She ___ with her doll."', options: ['play', 'plays', 'playing', 'played'], answer: 1, explain: 'She plays (добавляем -s).' },
          { q: 'What do you do in the evening?', options: ['Watch TV', 'Get up', 'Brush teeth', 'Go to school'], answer: 0, explain: 'Вечером смотрим телевизор - watch TV.' },
          { q: 'Complete: "I ___ TV in the evening."', options: ['watch', 'watches', 'watching', 'watched'], answer: 0, explain: 'I watch TV.' },
          { q: 'What do you use to brush your teeth?', options: ['Ball', 'Toothbrush', 'Doll', 'Car'], answer: 1, explain: 'Зубная щётка - toothbrush.' },
          { q: 'Complete: "I ___ lunch at 12."', options: ['eat', 'eats', 'eating', 'ate'], answer: 0, explain: 'I eat lunch.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I ___ up at 7 o\'clock."', answer: 'get', explain: 'get up = вставать.' },
          { type: 'fill-blank', question: 'Complete: "I play ___ my ball."', answer: 'with', explain: 'play with my ball.' },
          { type: 'choice', question: 'What do you do at night?', options: ['Get up', 'Go to bed', 'Go to school', 'Play'], answer: 1, explain: 'Ночью ложимся спать - go to bed.' },
          { type: 'translate', question: 'Переведите: "Я играю с мячом."', answer: 'I play with my ball', explain: 'I play with my ball.' },
          { type: 'order', question: 'Put in order:', words: ['school', 'I', 'go', 'to'], answer: 'I go to school', explain: 'I go to school.' },
          { type: 'correct', question: 'Find and correct: "She play with her doll."', answer: 'She plays with her doll', explain: 'С she добавляем -s: plays.' }
        ]}
      },
      {
        id: 'pck-l5', topic: 'Weather and Seasons',
        objective: 'Говорить о погоде и временах года.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Weather and Seasons',
          text: 'In this lesson, you will learn to talk about the weather and the four seasons. Let\'s look outside!\n\nWeather:\nThe weather can be different every day. Here are weather words: sunny, rainy, cloudy, windy, snowy, hot, and cold.\n\n- It is sunny today.\n- It is rainy. Take an umbrella!\n- It is cloudy. The sky is grey.\n- It is windy. Hold your hat!\n- It is snowy. Let\'s make a snowman!\n- It is hot in summer.\n- It is cold in winter.\n\nWe say: "It is (weather)." For example: "It is sunny." "It is rainy."\n\nSeasons:\nThere are four seasons in a year: spring, summer, autumn, and winter.\n\nSpring:\nSpring is warm. Flowers grow in spring. Trees are green. "I like spring because flowers are beautiful."\n\nSummer:\nSummer is hot. The sun shines. We can swim. "I like summer because I can swim."\n\nAutumn:\nAutumn is cool. Leaves fall from trees. They are yellow and red. "I like autumn because leaves are colorful."\n\nWinter:\nWinter is cold. It snows in winter. We can play in the snow. "I like winter because I can play in the snow."\n\nHow to talk about weather:\n"It is sunny today." = Сегодня солнечно.\n"It is rainy." = Дождливо.\n"It is cold." = Холодно.\n\nHow to say why you like a season:\n"I like summer because I can swim." = Я люблю лето, потому что могу плавать.\n"I like winter because I can play in the snow." = Я люблю зиму, потому что могу играть в снегу.\n\nPractice:\nLook outside! What is the weather like today? What is your favorite season? Why do you like it? Say: "I like (season) because..."\n\nEnjoy every season!',
          textRu: 'На этом уроке вы научитесь говорить о погоде и четырёх временах года. Давайте посмотрим в окно!\n\nПогода:\nПогода может быть разной каждый день. Вот слова о погоде: sunny (солнечно), rainy (дождливо), cloudy (облачно), windy (ветрено), snowy (снежно), hot (жарко) и cold (холодно).\n\n- Сегодня солнечно (It is sunny today).\n- Дождливо (It is rainy). Возьми зонт!\n- Облачно (It is cloudy). Небо серое.\n- Ветрено (It is windy). Держите шляпу!\n- Снежно (It is snowy). Давайте сделаем снеговика!\n- Жарко летом (It is hot in summer).\n- Холодно зимой (It is cold in winter).\n\nМы говорим: "It is (погода)." Например: "It is sunny." "It is rainy."\n\nВремена года:\nВ году четыре времени: spring (весна), summer (лето), autumn (осень) и winter (зима).\n\nВесна:\nВесна тёплая. Цветы растут весной. Деревья зелёные. "I like spring because flowers are beautiful."\n\nЛето:\nЛето жаркое. Солнце светит. Можно плавать. "I like summer because I can swim."\n\nОсень:\nОсень прохладная. Листья падают с деревьев. Они жёлтые и красные. "I like autumn because leaves are colorful."\n\nЗима:\nЗима холодная. Зимой идёт снег. Можно играть в снегу. "I like winter because I can play in the snow."\n\nКак говорить о погоде:\n"It is sunny today." = Сегодня солнечно.\n"It is rainy." = Дождливо.\n"It is cold." = Холодно.\n\nКак сказать, почему вам нравится время года:\n"I like summer because I can swim." = Я люблю лето, потому что могу плавать.\n"I like winter because I can play in the snow." = Я люблю зиму, потому что могу играть в снегу.\n\nПрактика:\nПосмотрите в окно! Какая сегодня погода? Какое ваше любимое время года? Почему оно вам нравится? Скажите: "I like (время года) because..."\n\nНаслаждайтесь каждым временем года!',
          vocab: [
            { word: 'sunny', trans: 'Солнечно' },
            { word: 'rainy', trans: 'Дождливо' },
            { word: 'cloudy', trans: 'Облачно' },
            { word: 'windy', trans: 'Ветрено' },
            { word: 'snowy', trans: 'Снежно' },
            { word: 'spring', trans: 'Весна' },
            { word: 'summer', trans: 'Лето' },
            { word: 'winter', trans: 'Зима' }
          ]
        },
        video: { slides: [
          { emoji: ' weather', title: 'Weather', text: 'sunny, rainy, cloudy, windy, snowy, hot, cold.' },
          { emoji: ' sun', title: 'Sunny', text: '"It is sunny today." Солнечно.' },
          { emoji: ' rain', title: 'Rainy', text: '"It is rainy." Дождливо. Возьми зонт!' },
          { emoji: ' snow', title: 'Snowy', text: '"It is snowy." Снежно. Сделаем снеговика!' },
          { emoji: ' seasons', title: 'Seasons', text: 'spring, summer, autumn, winter.' },
          { emoji: ' summer', title: 'Summer', text: 'Hot. "I like summer because I can swim."' },
          { emoji: ' winter', title: 'Winter', text: 'Cold. "I like winter because I can play in the snow."' },
          { emoji: ' because', title: 'because', text: '"I like summer because..." Говорим, почему нравится.' }
        ]},
        quiz: { pool: [
          { q: 'What weather do you see the sun?', options: ['Rainy', 'Sunny', 'Cloudy', 'Snowy'], answer: 1, explain: 'Солнце - sunny.' },
          { q: 'What weather do you need an umbrella?', options: ['Sunny', 'Rainy', 'Hot', 'Windy'], answer: 1, explain: 'В дождь нужен зонт - rainy.' },
          { q: 'What weather is the sky grey?', options: ['Sunny', 'Cloudy', 'Hot', 'Sunny'], answer: 1, explain: 'Облачно - cloudy.' },
          { q: 'What weather holds your hat?', options: ['Windy', 'Sunny', 'Hot', 'Rainy'], answer: 0, explain: 'Ветрено - windy.' },
          { q: 'Complete: "It ___ sunny today."', options: ['is', 'are', 'am', 'be'], answer: 0, explain: 'It is sunny.' },
          { q: 'Which season is hot?', options: ['Winter', 'Summer', 'Autumn', 'Spring'], answer: 1, explain: 'Лето жаркое - summer.' },
          { q: 'Which season is cold?', options: ['Summer', 'Spring', 'Winter', 'Autumn'], answer: 2, explain: 'Зима холодная - winter.' },
          { q: 'In which season can you swim?', options: ['Winter', 'Summer', 'Autumn', 'Spring'], answer: 1, explain: 'Плавать летом - summer.' },
          { q: 'In which season can you play in the snow?', options: ['Summer', 'Winter', 'Spring', 'Autumn'], answer: 1, explain: 'В снегу играют зимой - winter.' },
          { q: 'Complete: "I like summer ___ I can swim."', options: ['and', 'but', 'because', 'or'], answer: 2, explain: 'because = потому что.' },
          { q: 'What season do flowers grow?', options: ['Winter', 'Spring', 'Summer', 'Autumn'], answer: 1, explain: 'Цветы растут весной - spring.' },
          { q: 'What falls from trees in autumn?', options: ['Snow', 'Leaves', 'Rain', 'Flowers'], answer: 1, explain: 'Листья падают осенью - leaves.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "It is ___ today." (солнечно)', answer: 'sunny', explain: 'Солнечно - sunny.' },
          { type: 'fill-blank', question: 'Complete: "I like summer ___ I can swim."', answer: 'because', explain: 'because = потому что.' },
          { type: 'choice', question: 'Which season is cold?', options: ['Summer', 'Winter', 'Spring', 'Autumn'], answer: 1, explain: 'Зима холодная - winter.' },
          { type: 'translate', question: 'Переведите: "Сегодня дождливо."', answer: 'It is rainy', explain: 'It is rainy.' },
          { type: 'order', question: 'Put in order:', words: ['sunny', 'It', 'is', 'today'], answer: 'It is sunny today', explain: 'It is sunny today.' },
          { type: 'correct', question: 'Find and correct: "It are sunny today."', answer: 'It is sunny today', explain: 'С It используем is.' }
        ]}
      },
      {
        id: 'pck-l6', topic: 'Friends and Feelings',
        objective: 'Говорить о друзьях и о своих чувствах.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Friends and Feelings',
          text: 'In this lesson, you will learn words for feelings and friends. Let\'s talk about how we feel!\n\nFeelings:\nWe all have feelings. Here are common feelings: happy, sad, angry, scared, tired, excited, bored, hungry, and thirsty.\n\n- I am happy when I play.\n- I am sad when it rains.\n- I am angry when my toy breaks.\n- I am scared of the dark.\n- I am tired after school.\n- I am excited on my birthday!\n- I am bored when there is nothing to do.\n- I am hungry. I want to eat.\n- I am thirsty. I want to drink.\n\nWe say: "I am (feeling)." For example: "I am happy." "He is sad."\n\nFriends:\nFriends make us happy! Here are friend words: friend, play, share, help, kind, and funny.\n\n- She is my friend.\n- We play together.\n- I share my toys with my friend.\n- I help my friend.\n- My friend is kind.\n- My friend is funny. He makes me laugh.\n\nHow to talk about your feelings:\n"I am happy." = Я счастлив(а).\n"I am sad." = Мне грустно.\n"He is angry." = Он злится.\n"She is scared." = Она напугана.\n\nHow to talk about friends:\n"She is my friend." = Она моя подруга.\n"He is my friend." = Он мой друг.\n"We play together." = Мы играем вместе.\n"I share with my friend." = Я делюсь с другом.\n\nImportant words:\n- happy = счастливый\n- sad = грустный\n- friend = друг\n- share = делиться\n- help = помогать\n- kind = добрый\n- funny = смешной\n- together = вместе\n\nPractice:\nHow do you feel today? Tell us! "I am (feeling)." Who is your friend? "She is my friend. We play together. She is kind and funny."\n\nBe a good friend and be happy!',
          textRu: 'На этом уроке вы выучите слова о чувствах и друзьях. Давайте поговорим о том, что мы чувствуем!\n\nЧувства:\nУ всех нас есть чувства. Вот распространённые чувства: happy (счастливый), sad (грустный), angry (злой), scared (напуганный), tired (уставший), excited (взволнованный), bored (скучающий), hungry (голодный) и thirsty (хочется пить).\n\n- Я счастлив, когда играю (I am happy when I play).\n- Мне грустно, когда идёт дождь (I am sad when it rains).\n- Я злюсь, когда моя игрушка ломается (I am angry when my toy breaks).\n- Я боюсь темноты (I am scared of the dark).\n- Я устаю после школы (I am tired after school).\n- Я взволнован в свой день рождения! (I am excited on my birthday!)\n- Мне скучно, когда нечего делать (I am bored when there is nothing to do).\n- Я голоден. Я хочу есть (I am hungry. I want to eat).\n- Мне хочется пить. Я хочу пить (I am thirsty. I want to drink).\n\nМы говорим: "I am (чувство)." Например: "I am happy." "He is sad."\n\nДрузья:\nДрузья делают нас счастливыми! Вот слова о друзьях: friend (друг), play (играть), share (делиться), help (помогать), kind (добрый) и funny (смешной).\n\n- Она моя подруга (She is my friend).\n- Мы играем вместе (We play together).\n- Я делюсь игрушками с другом (I share my toys with my friend).\n- Я помогаю другу (I help my friend).\n- Мой друг добрый (My friend is kind).\n- Мой друг смешной. Он заставляет меня смеяться (My friend is funny. He makes me laugh).\n\nКак говорить о своих чувствах:\n"I am happy." = Я счастлив(а).\n"I am sad." = Мне грустно.\n"He is angry." = Он злится.\n"She is scared." = Она напугана.\n\nКак говорить о друзьях:\n"She is my friend." = Она моя подруга.\n"He is my friend." = Он мой друг.\n"We play together." = Мы играем вместе.\n"I share with my friend." = Я делюсь с другом.\n\nВажные слова:\n- happy = счастливый\n- sad = грустный\n- friend = друг\n- share = делиться\n- help = помогать\n- kind = добрый\n- funny = смешной\n- together = вместе\n\nПрактика:\nЧто вы чувствуете сегодня? Расскажите нам! "I am (чувство)." Кто ваш друг? "She is my friend. We play together. She is kind and funny."\n\nБудьте хорошим другом и будьте счастливы!',
          vocab: [
            { word: 'happy', trans: 'Счастливый / радостный' },
            { word: 'sad', trans: 'Грустный' },
            { word: 'angry', trans: 'Злой / сердитый' },
            { word: 'scared', trans: 'Напуганный' },
            { word: 'friend', trans: 'Друг' },
            { word: 'share', trans: 'Делиться' },
            { word: 'kind', trans: 'Добрый' },
            { word: 'funny', trans: 'Смешной' }
          ]
        },
        video: { slides: [
          { emoji: ' feelings', title: 'Feelings', text: 'happy, sad, angry, scared, tired, excited, bored, hungry, thirsty.' },
          { emoji: ' happy', title: 'Happy', text: '"I am happy." Счастливый.' },
          { emoji: ' sad', title: 'Sad', text: '"I am sad." Грустный.' },
          { emoji: ' angry', title: 'Angry', text: '"He is angry." Злой.' },
          { emoji: ' friends', title: 'Friends', text: 'friend, play, share, help, kind, funny.' },
          { emoji: ' friend', title: 'Friend', text: '"She is my friend." Друг.' },
          { emoji: ' share', title: 'Share', text: '"I share my toys." Делиться.' },
          { emoji: ' kind', title: 'Kind & funny', text: '"My friend is kind and funny." Добрый и смешной.' }
        ]},
        quiz: { pool: [
          { q: 'How do you feel when you play?', options: ['Sad', 'Happy', 'Angry', 'Bored'], answer: 1, explain: 'Когда играем, мы счастливы - happy.' },
          { q: 'How do you feel when it rains?', options: ['Happy', 'Excited', 'Sad', 'Hungry'], answer: 2, explain: 'В дождь грустно - sad.' },
          { q: 'How do you feel on your birthday?', options: ['Bored', 'Excited', 'Tired', 'Angry'], answer: 1, explain: 'В день рождения радостно - excited.' },
          { q: 'How do you feel when you want to eat?', options: ['Thirsty', 'Hungry', 'Tired', 'Scared'], answer: 1, explain: 'Хочу есть - hungry.' },
          { q: 'How do you feel when you want to drink?', options: ['Hungry', 'Thirsty', 'Tired', 'Bored'], answer: 1, explain: 'Хочу пить - thirsty.' },
          { q: 'Complete: "I ___ happy."', options: ['am', 'is', 'are', 'be'], answer: 0, explain: 'I am happy.' },
          { q: 'Complete: "She ___ my friend."', options: ['am', 'is', 'are', 'be'], answer: 1, explain: 'She is my friend.' },
          { q: 'Complete: "He ___ sad."', options: ['am', 'is', 'are', 'be'], answer: 1, explain: 'He is sad.' },
          { q: 'What do you do with your friend?', options: ['Fight', 'Play', 'Cry', 'Sleep'], answer: 1, explain: 'С другом играем - play.' },
          { q: 'What does a good friend do with toys?', options: ['Hide', 'Share', 'Break', 'Take'], answer: 1, explain: 'Хороший друг делится - share.' },
          { q: 'Complete: "My friend is ___ (добрый)."', options: ['kind', 'funny', 'sad', 'angry'], answer: 0, explain: 'Добрый - kind.' },
          { q: 'Complete: "My friend is ___ (смешной)."', options: ['kind', 'funny', 'sad', 'scared'], answer: 1, explain: 'Смешной - funny.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I ___ happy." (являюсь)', answer: 'am', explain: 'I am happy.' },
          { type: 'fill-blank', question: 'Complete: "She ___ my friend."', answer: 'is', explain: 'She is my friend.' },
          { type: 'choice', question: 'How do you feel when you want to eat?', options: ['Thirsty', 'Hungry', 'Tired', 'Scared'], answer: 1, explain: 'Хочу есть - hungry.' },
          { type: 'translate', question: 'Переведите: "Она моя подруга."', answer: 'She is my friend', explain: 'She is my friend.' },
          { type: 'order', question: 'Put in order:', words: ['friend', 'is', 'She', 'my'], answer: 'She is my friend', explain: 'She is my friend.' },
          { type: 'correct', question: 'Find and correct: "She are my friend."', answer: 'She is my friend', explain: 'С she используем is.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_5 = COURSE;
})(window);
