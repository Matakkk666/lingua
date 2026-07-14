/* ============================================================
   AES Free Spanish Course: Espanol Principiante (A1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'es-free',
    title: 'Espanol Principiante (Free)',
    price: 0, oldPrice: 0,
    level: 'A1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'cream',
    art: ['#FBF1DD', '#F3E2B8'],
    tagline: 'Free Spanish course for beginners. 6 modules with theory, video, quizzes, and homework.',
    lessons: [
      {
        id: 'esf-l1', topic: 'Greetings and introductions in Spanish',
        objective: 'Aprender a saludar, presentarse y mantener una conversacion basica en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Saludos y Presentaciones en Espanol',
          text: 'Los saludos en espanol dependen de la hora del dia y del nivel de formalidad. El saludo mas universal es "Hola" — funciona en todas las situaciones. Es simple, amable y siempre correcto.\n\nCuando saludamos por la manana (antes del mediodia), decimos "Buenos dias". Por la tarde, usamos "Buenas tardes". Por la noche, "Buenas noches". Nota: en espanol, "Buenos dias" y "Buenas tardes" tambien se usan como despedida.\n\nPara presentarte, puedes decir "Me llamo" seguido de tu nombre. Por ejemplo: "Hola, me llamo Juan. Mucho gusto." La respuesta habitual es "Mucho gusto" o "Igualmente". Tambien puedes decir "Soy..." (soy Maria, soy Carlos).\n\nPara preguntar el nombre de alguien: "Como te llamas?" (informal) o "Como se llama usted?" (formal). Para preguntar de donde es alguien: "De donde eres?" (informal) o "De donde es usted?" (formal). La respuesta: "Soy de Mexico", "Soy de Espana", "Soy de Argentina".\n\nUna pregunta muy comun es "Como estas?" (informal) o "Como esta usted?" (formal). Es una pregunta cortes, no una pregunta profunda. Respuestas normales: "Bien, gracias", "Muy bien", "Mas o menos", "Regular". Siempre pregunta de vuelta: "Y tu?" o "Y usted?"\n\nAl despedirte, puedes decir "Adios" (formal), "Chau" (informal, comun en Latinoamerica), o "Hasta luego". Otras despedidas amables: "Hasta manana", "Que tengas un buen dia", "Nos vemos", "Hasta pronto".\n\nEn las culturas hispanohablantes, el contacto fisico es comun: un apreteton de manos, un beso en la mejilla (en muchos paises), o un abrazo entre amigos. La sonrisa y el contacto visual son importantes.\n\nRecuerda: en espanol hay dos formas de dirigirse a alguien — "tu" (informal, para amigos y familia) y "usted" (formal, para personas mayores o en situaciones formales). Es importante elegir la forma correcta segun la situacion.\n\nPracticar los saludos es el primer paso para comunicarte en espanol. Cada region tiene sus variaciones, pero "Hola", "Buenos dias" y "Como estas?" te entenderan en cualquier pais hispanohablante. Empieza hoy: saluda a alguien en espanol y presentate. La practica es la clave del exito!',
          textRu: 'Приветствия в испанском зависят от времени суток и уровня формальности. Самое универсальное приветствие — "Hola" — подходит для любых ситуаций. Оно простое, дружелюбное и всегда уместно.\n\nКогда мы здороваемся утром (до полудня), говорим "Buenos dias". Днём используем "Buenas tardes". Вечером — "Buenas noches". Примечание: в испанском "Buenos dias" и "Buenas tardes" также используются при прощании.\n\nЧтобы представиться, можно сказать "Me llamo" и затем своё имя. Например: "Hola, me llamo Juan. Mucho gusto." Обычный ответ — "Mucho gusto" или "Igualmente". Также можно сказать "Soy..." (soy Maria, soy Carlos).\n\nЧтобы спросить имя: "Como te llamas?" (неформально) или "Como se llama usted?" (формально). Чтобы спросить, откуда человек: "De donde eres?" (неформально) или "De donde es usted?" (формально). Ответ: "Soy de Mexico", "Soy de Espana", "Soy de Argentina".\n\nОчень распространённый вопрос — "Como estas?" (неформально) или "Como esta usted?" (формально). Это вежливый вопрос, не глубокий. Обычные ответы: "Bien, gracias", "Muy bien", "Mas o menos", "Regular". Всегда спросите в ответ: "Y tu?" или "Y usted?"\n\nПрощаясь, можно сказать "Adios" (формально), "Chau" (неформально, часто в Латинской Америке) или "Hasta luego". Другие дружелюбные прощания: "Hasta manana", "Que tengas un buen dia", "Nos vemos", "Hasta pronto".\n\nВ испаноязычных культурах физический контакт обычен: рукопожатие, поцелуй в щёку (во многих странах) или объятие между друзьями. Улыбка и зрительный контакт важны.\n\nПомните: в испанском есть две формы обращения — "tu" (неформально, для друзей и семьи) и "usted" (формально, для старших или в формальных ситуациях). Важно выбрать правильную форму в зависимости от ситуации.\n\nПрактиковать приветствия — первый шаг к общению на испанском. Каждый регион имеет свои вариации, но "Hola", "Buenos dias" и "Como estas?" поймут в любой испаноязычной стране. Начните сегодня: поздоровайтесь с кем-нибудь на испанском и представьтесь. Практика — ключ к успеху!',
          vocab: [
            { word: 'Hola', trans: 'Привет / Здравствуй' },
            { word: 'Buenos dias / Buenas tardes', trans: 'Доброе утро / день' },
            { word: 'Me llamo...', trans: 'Меня зовут...' },
            { word: 'Como te llamas?', trans: 'Как тебя зовут?' },
            { word: 'De donde eres?', trans: 'Откуда ты?' },
            { word: 'Como estas?', trans: 'Как дела?' },
            { word: 'Mucho gusto', trans: 'Очень приятно' },
            { word: 'Adios / Hasta luego', trans: 'До свидания / Увидимся' }
          ]
        },
        video: { slides: [
          { emoji: ' hola', title: 'Hola', text: 'Самое универсальное приветствие. Подходит для любой ситуации.' },
          { emoji: ' dias', title: 'Buenos dias', text: 'Доброе утро. Используется до полудня.' },
          { emoji: ' tardes', title: 'Buenas tardes', text: 'Добрый день. С полудня до вечера.' },
          { emoji: ' noches', title: 'Buenas noches', text: 'Добрый вечер/ночь. Также при прощании.' },
          { emoji: ' llamo', title: 'Me llamo...', text: 'Меня зовут... Для представления себя.' },
          { emoji: ' gusto', title: 'Mucho gusto', text: 'Очень приятно. Ответ: "Igualmente".' },
          { emoji: ' como', title: 'Como estas?', text: 'Как дела? (неформально). Формально: "Como esta usted?"' },
          { emoji: ' adios', title: 'Adios / Hasta luego', text: 'До свидания / Увидимся позже.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "___! Me llamo Maria."', options: ['Hola', 'Adios', 'Gracias', 'Bien'], answer: 0, explain: '"Hola" — универсальное приветствие.' },
          { q: 'Cuando dices "Buenos dias"?', options: ['Por la noche', 'Por la manana', 'Por la tarde', 'Siempre'], answer: 1, explain: '"Buenos dias" — до полудня.' },
          { q: 'Completa: "Me ___ Juan."', options: ['llamo', 'llamas', 'llama', 'llamamos'], answer: 0, explain: '"Me llamo" — меня зовут (1 лицо).' },
          { q: 'Como preguntas "Как дела?" (informal)?', options: ['Como te llamas?', 'Como estas?', 'De donde eres?', 'Que es?'], answer: 1, explain: '"Como estas?" — неформально.' },
          { q: 'Completa: "___ gusto!"', options: ['Mucho', 'Poco', 'Bueno', 'Malo'], answer: 0, explain: '"Mucho gusto" — очень приятно.' },
          { q: 'Que respondes a "Como estas?"', options: ['Me llamo Juan', 'Bien, gracias', 'Hasta luego', 'Mucho gusto'], answer: 1, explain: '"Bien, gracias" — стандартный ответ.' },
          { q: 'Completa: "De ___ eres?"', options: ['que', 'donde', 'como', 'cual'], answer: 1, explain: '"De donde eres?" — откуда ты?' },
          { q: 'Cuando dices "Buenas noches"?', options: ['Por la manana', 'Por la tarde', 'Por la noche', 'Nunca'], answer: 2, explain: '"Buenas noches" — вечером/ночью.' },
          { q: 'Completa: "___ luego!"', options: ['Adios', 'Hola', 'Hasta', 'Buenos'], answer: 2, explain: '"Hasta luego" — увидимся позже.' },
          { q: 'Como preguntas "Как тебя зовут?"', options: ['Como estas?', 'Como te llamas?', 'De donde eres?', 'Mucho gusto?'], answer: 1, explain: '"Como te llamas?" — как тебя зовут?' },
          { q: 'Que significa "Igualmente"?', options: ['Gracias', 'Mutuamente', 'Lo siento', 'Por favor'], answer: 1, explain: '"Igualmente" — взаимно/тоже.' },
          { q: 'Completa: "Soy ___ Mexico."', options: ['en', 'de', 'a', 'por'], answer: 1, explain: '"Soy de..." — я из... .' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "___ dias! Como estas?"', answer: 'Buenos', explain: 'До полудня — "Buenos dias".' },
          { type: 'fill-blank', question: 'Completa: "Hola! Me ___ Carlos."', answer: 'llamo', explain: '"Me llamo" — меня зовут.' },
          { type: 'choice', question: 'Como se dice "Добрый вечер" en espanol?', options: ['Buenos dias', 'Buenas tardes', 'Buenas noches', 'Hola'], answer: 2, explain: '"Buenas noches" — добрый вечер/ночь.' },
          { type: 'translate', question: 'Переведите: "Привет! Меня зовут Анна."', answer: 'Hola, me llamo Anna', explain: '"Hola" + "me llamo" + имя.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['soy', 'de', 'Espana', 'Yo'], answer: 'Yo soy de Espana', explain: 'Подлежащее + ser + de + страна.' },
          { type: 'correct', question: 'Encuentra y corrige: "Buenas dia, como estas?"', answer: 'Buenos dias, como estas?', explain: '"Buenos dias" — множественное число, мужской род.' }
        ]}
      },
      {
        id: 'esf-l2', topic: 'Numbers 1-100 in Spanish',
        objective: 'Aprender los numeros del 1 al 100 en espanol y usarlos en la vida diaria.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Los Numeros del 1 al 100 en Espanol',
          text: 'Los numeros son la base de la comunicacion diaria — precios, telefonos, edades, direcciones. En espanol, los numeros son bastante logicos y regulares.\n\n**Numeros 1-10:** uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Estos son los fundamentos. Memorizalos bien porque todos los demas numeros se construyen a partir de ellos.\n\n**Numeros 11-15:** once (11), doce (12), trece (13), catorce (14), quince (15). Estos son irregulares — no siguen un patron fijo.\n\n**Numeros 16-19:** dieciseis, diecisiete, dieciocho, diecinueve. Estos se forman con "dieci" + numero (diez y seis = dieciseis).\n\n**Decenas (20-90):** veinte (20), treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90). Para numeros entre decenas, usa "y": treinta y uno (31), cuarenta y cinco (45), noventa y nueve (99).\n\n**El numero 100:** cien. Para 101-199, usa "ciento": ciento uno (101), ciento dos (102), ciento noventa y nueve (199).\n\n**Usos practicos:**\n- Edad: "Tengo veinticinco anos" (мне 25 лет)\n- Precio: "Cuesta diez euros" (стоит 10 евро)\n- Telefono: "Mi numero es cinco, cinco, uno..." (мой номер 5, 5, 1...)\n- Cantidad: "Quiero tres cafes" (хочу 3 кофе)\n\n**Errores comunes:**\n- "uno" cambia a "un" antes de un sustantivo masculino: "un libro" (не "uno libro")\n- "veintiuno" cambia a "veintiun" antes de un sustantivo masculino: "veintiun anos"\n- "cien" se usa para exactamente 100; "ciento" para 101+\n\nPractica los numeros cada dia. Son una herramienta esencial para viajar, comprar y comunicarte en cualquier pais hispanohablante!',
          textRu: 'Числа — основа повседневного общения: цены, телефоны, возраст, адреса. В испанском числа достаточно логичны и регулярны.\n\n**Числа 1-10:** uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Это основа. Запомните их хорошо, потому что все остальные числа строятся на их основе.\n\n**Числа 11-15:** once (11), doce (12), trece (13), catorce (14), quince (15). Они неправильные — не следуют фиксированному правилу.\n\n**Числа 16-19:** dieciseis, diecisiete, dieciocho, diecinueve. Они образуются из "dieci" + число (diez y seis = dieciseis).\n\n**Десятки (20-90):** veinte (20), treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90). Для чисел между десятками используйте "y": treinta y uno (31), cuarenta y cinco (45), noventa y nueve (99).\n\n**Число 100:** cien. Для 101-199 используйте "ciento": ciento uno (101), ciento dos (102), ciento noventa y nueve (199).\n\n**Практическое использование:**\n- Возраст: "Tengo veinticinco anos" (мне 25 лет)\n- Цена: "Cuesta diez euros" (стоит 10 евро)\n- Телефон: "Mi numero es cinco, cinco, uno..." (мой номер 5, 5, 1...)\n- Количество: "Quiero tres cafes" (хочу 3 кофе)\n\n**Частые ошибки:**\n- "uno" меняется на "un" перед существительным мужского рода: "un libro" (не "uno libro")\n- "veintiuno" меняется на "veintiun" перед существительным мужского рода: "veintiun anos"\n- "cien" используется ровно для 100; "ciento" — для 101+\n\nПрактикуйте числа каждый день. Это необходимый инструмент для путешествий, покупок и общения в любой испаноязычной стране!',
          vocab: [
            { word: 'uno, dos, tres...', trans: 'Один, два, три...' },
            { word: 'diez', trans: 'Десять' },
            { word: 'once, doce, trece', trans: 'Одиннадцать, двенадцать, тринадцать' },
            { word: 'veinte', trans: 'Двадцать' },
            { word: 'treinta y uno', trans: 'Тридцать один' },
            { word: 'cincuenta', trans: 'Пятьдесят' },
            { word: 'cien / ciento', trans: 'Сто / сто+ (101+)' },
            { word: 'Tengo ... anos', trans: 'Мне ... лет' }
          ]
        },
        video: { slides: [
          { emoji: ' 1-10', title: '1-10', text: 'uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.' },
          { emoji: ' 11', title: '11-15', text: 'once, doce, trece, catorce, quince. Irregulares.' },
          { emoji: ' 16', title: '16-19', text: 'dieciseis, diecisiete, dieciocho, diecinueve. dieci + numero.' },
          { emoji: ' 20', title: 'Decenas', text: 'veinte, treinta, cuarenta, cincuenta... noventa.' },
          { emoji: ' y', title: 'y = плюс', text: 'treinta y uno (31), cuarenta y cinco (45).' },
          { emoji: ' 100', title: 'cien / ciento', text: 'cien = 100 exacto. ciento uno = 101.' },
          { emoji: ' edad', title: 'Tengo ... anos', text: 'Tengo veinticinco anos = мне 25 лет.' },
          { emoji: ' un', title: 'un vs uno', text: 'un libro (не uno libro). Antes de sustantivo masculino.' }
        ]},
        quiz: { pool: [
          { q: 'Como se dice "5" en espanol?', options: ['cuatro', 'cinco', 'seis', 'siete'], answer: 1, explain: 'cinco = 5.' },
          { q: 'Como se dice "12" en espanol?', options: ['once', 'doce', 'trece', 'diez'], answer: 1, explain: 'doce = 12.' },
          { q: 'Como se dice "20" en espanol?', options: ['dos', 'veinte', 'doce', 'treinta'], answer: 1, explain: 'veinte = 20.' },
          { q: 'Completa: "treinta ___ uno" (31)', options: ['e', 'y', 'con', 'mas'], answer: 1, explain: 'treinta y uno = 31.' },
          { q: 'Como se dice "50" en espanol?', options: ['cincuenta', 'cuarenta', 'sesenta', 'treinta'], answer: 0, explain: 'cincuenta = 50.' },
          { q: 'Como se dice "100" en espanol?', options: ['mil', 'ciento', 'cien', 'diez'], answer: 2, explain: 'cien = 100 (exacto).' },
          { q: 'Completa: "ciento ___" (101)', options: ['cero', 'uno', 'diez', 'cien'], answer: 1, explain: 'ciento uno = 101.' },
          { q: 'Completa: "Tengo veinticinco ___" (мне 25)', options: ['anos', 'dias', 'meses', 'horas'], answer: 0, explain: 'anos = лет. Tengo veinticinco anos.' },
          { q: 'Como se dice "15" en espanol?', options: ['quince', 'catorce', 'cinco', 'cincuenta'], answer: 0, explain: 'quince = 15.' },
          { q: 'Completa: "___ libro" (одна книга)', options: ['uno', 'un', 'una', 'el'], answer: 1, explain: 'un libro (не uno libro).' },
          { q: 'Como se dice "8" en espanol?', options: ['siete', 'ocho', 'nueve', 'seis'], answer: 1, explain: 'ocho = 8.' },
          { q: 'Como se dice "99" en espanol?', options: ['noventa y nueve', 'nueve y noventa', 'noventa nueve', 'ciento noventa'], answer: 0, explain: 'noventa y nueve = 99.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Tengo treinta ___ anos." (мне 30)', answer: 'y', explain: 'treinta = 30. "Tengo treinta anos" без "y" для decenas exactas.' },
          { type: 'fill-blank', question: 'Como se escribe "7"?: ___', answer: 'siete', explain: 'siete = 7.' },
          { type: 'choice', question: 'Como se dice "40" en espanol?', options: ['cuarenta', 'catorce', 'cuatro', 'ciento'], answer: 0, explain: 'cuarenta = 40.' },
          { type: 'translate', question: 'Переведите: "Мне 25 лет."', answer: 'Tengo veinticinco anos', explain: 'Tengo + numero + anos.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['veinte', 'y', 'uno', 'veintiuno'], answer: 'veintiuno', explain: 'veintiuno = 21 (una palabra).' },
          { type: 'correct', question: 'Encuentra y corrige: "uno libro, por favor."', answer: 'un libro, por favor', explain: 'un (не uno) antes de sustantivo masculino.' }
        ]}
      },
      {
        id: 'esf-l3', topic: 'Articles and gender (el/la/los/las)',
        objective: 'Comprender el genero de los sustantivos en espanol y usar los articulos correctos.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Articulos y Genero en Espanol',
          text: 'En espanol, todos los sustantivos tienen genero: masculino o femenino. No hay genero neutro como en ingles. Esto significa que cada sustantivo es "el" o "la".\n\n**Regla general del genero:**\n- Sustantivos que terminan en "-o" suelen ser masculinos: el libro, el perro, el nino, el agua (excepcion)\n- Sustantivos que terminan en "-a" suelen ser femeninos: la mesa, la casa, la Nina, la puerta\n\n**Excepciones importantes:**\n- Palabras femininas que terminan en "-o": la mano, la radio, la foto\n- Palabras masculinas que terminan en "-a": el problema, el sistema, el mapa, el dia\n- Palabras que terminan en "-cion", "-sion", "-dad", "-tad" son femininas: la cancion, la television, la ciudad, la libertad\n- Palabras que terminan en "-ma", "-pa" (de origen griego) suelen ser masculinas: el tema, el mapa, el planeta\n\n**Articulos definidos (el/la/los/las):**\n- Singular masculino: el (el libro, el coche)\n- Singular femenino: la (la casa, la mesa)\n- Plural masculino: los (los libros, los coches)\n- Plural femenino: las (las casas, las mesas)\n\n**Articulos indefinidos (un/una/unos/unas):**\n- Singular masculino: un (un libro, un perro)\n- Singular femenino: una (una casa, una mesa)\n- Plural masculino: unos (unos libros)\n- Plural femenino: unas (unas casas)\n\n**Regla especial "el" + femenino:**\nCuando un sustantivo femenino empieza con "a" o "ha" tonica, usamos "el" (no "la") en singular: el agua, el arma, el area, el hacha. Pero en plural: las aguas, las armas.\n\n**Como saber el genero?**\n1. Mira la terminacion (-o = masculino, -a = femenino)\n2. Memoriza las excepciones\n3. Aprende el sustantivo con su articulo: "la mano", "el problema"\n\nEl genero es una parte fundamental del espanol. Practica aprendiendo cada palabra nueva con su articulo!',
          textRu: 'В испанском все существительные имеют род: мужской или женский. Нет среднего рода, как в английском. Это значит, что каждое существительное — "el" или "la".\n\n**Общее правило рода:**\n- Существительные на "-o" обычно мужского рода: el libro, el perro, el nino, el agua (исключение)\n- Существительные на "-a" обычно женского рода: la mesa, la casa, la Nina, la puerta\n\n**Важные исключения:**\n- Женские слова на "-o": la mano, la radio, la foto\n- Мужские слова на "-a": el problema, el sistema, el mapa, el dia\n- Слова на "-cion", "-sion", "-dad", "-tad" — женского рода: la cancion, la television, la ciudad, la libertad\n- Слова на "-ma", "-pa" (греческого происхождения) обычно мужского рода: el tema, el mapa, el planeta\n\n**Определённые артикли (el/la/los/las):**\n- Единственное мужской: el (el libro, el coche)\n- Единственное женский: la (la casa, la mesa)\n- Множественное мужской: los (los libros, los coches)\n- Множественное женский: las (las casas, las mesas)\n\n**Неопределённые артикли (un/una/unos/unas):**\n- Единственное мужской: un (un libro, un perro)\n- Единственное женский: una (una casa, una mesa)\n- Множественное мужской: unos (unos libros)\n- Множественное женский: unas (unas casas)\n\n**Особое правило "el" + женский род:**\nКогда существительное женского рода начинается на ударную "a" или "ha", используем "el" (не "la") в единственном числе: el agua, el arma, el area, el hacha. Но во множественном: las aguas, las armas.\n\n**Как определить род?**\n1. Посмотрите на окончание (-o = мужской, -a = женский)\n2. Запомните исключения\n3. Учите существительное с артиклем: "la mano", "el problema"\n\nРод — фундаментальная часть испанского. Практикуйтесь, учите каждое новое слово с артиклем!',
          vocab: [
            { word: 'el / la', trans: 'Артикль определённый м.р. / ж.р.' },
            { word: 'los / las', trans: 'Артикль мн.ч. м.р. / ж.р.' },
            { word: 'un / una', trans: 'Артикль неопределённый м.р. / ж.р.' },
            { word: 'el libro', trans: 'Книга (м.р.)' },
            { word: 'la casa', trans: 'Дом (ж.р.)' },
            { word: 'el problema', trans: 'Проблема (м.р. — исключение)' },
            { word: 'la mano', trans: 'Рука (ж.р. — исключение)' },
            { word: 'el agua', trans: 'Вода (ж.р., но "el")' }
          ]
        },
        video: { slides: [
          { emoji: ' genero', title: 'Genero', text: 'Todos los sustantivos: masculino o femenino. No hay neutro.' },
          { emoji: ' -o', title: 'Terminacion -o', text: 'Suele ser masculino: el libro, el perro.' },
          { emoji: ' -a', title: 'Terminacion -a', text: 'Suele ser femenino: la casa, la mesa.' },
          { emoji: ' exc', title: 'Excepciones', text: 'la mano (ж.р.), el problema (м.р.), el dia (м.р.).' },
          { emoji: ' -cion', title: '-cion/-dad', text: 'Femeninas: la cancion, la ciudad, la libertad.' },
          { emoji: ' el/la', title: 'Articulos', text: 'el/los (м.р.), la/las (ж.р.). un/una (неопр.).' },
          { emoji: ' agua', title: 'el + femenino', text: 'el agua, el arma — ж.р., но "el" перед ударной "a".' },
          { emoji: ' practica', title: 'Practica', text: 'Aprende cada palabra con su articulo: "la mano".' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "___ libro" (м.р.)', options: ['la', 'el', 'un', 'una'], answer: 1, explain: 'el libro — мужской род.' },
          { q: 'Completa: "___ casa" (ж.р.)', options: ['el', 'la', 'un', 'los'], answer: 1, explain: 'la casa — женский род.' },
          { q: 'Completa: "___ problema"', options: ['la', 'el', 'las', 'una'], answer: 1, explain: 'el problema — м.р. (исключение, -ma griego).' },
          { q: 'Completa: "___ mano"', options: ['el', 'la', 'un', 'los'], answer: 1, explain: 'la mano — ж.р. (исключение).' },
          { q: 'Que genero tiene "dia"?', options: ['Masculino', 'Femenino', 'Neutro', 'Ambos'], answer: 0, explain: 'el dia — м.р. (исключение).' },
          { q: 'Completa: "___ agua"', options: ['la', 'el', 'una', 'las'], answer: 1, explain: 'el agua — ж.р., но "el" перед ударной "a".' },
          { q: 'Completa: "___ cancion" (песня)', options: ['el', 'la', 'un', 'los'], answer: 1, explain: 'la cancion — ж.р. (-cion).' },
          { q: 'Plural de "el libro":', options: ['la libro', 'los libros', 'las libros', 'el libros'], answer: 1, explain: 'los libros — мн.ч. м.р.' },
          { q: 'Completa: "___ ciudad" (город)', options: ['el', 'la', 'un', 'los'], answer: 1, explain: 'la ciudad — ж.р. (-dad).' },
          { q: 'Completa: "___ perro" (собака, м.р.)', options: ['la', 'el', 'una', 'las'], answer: 1, explain: 'el perro — мужской род.' },
          { q: 'Que genero tiene "mapa"?', options: ['Masculino', 'Femenino', 'Neutro', 'Ambos'], answer: 0, explain: 'el mapa — м.р. (исключение, -pa griego).' },
          { q: 'Completa: "___ mesa" (стол)', options: ['el', 'la', 'un', 'los'], answer: 1, explain: 'la mesa — ж.р. (-a).' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "___ problema es grande."', answer: 'el', explain: 'el problema — м.р. (исключение).' },
          { type: 'fill-blank', question: 'Completa: "___ mano esta cansada."', answer: 'la', explain: 'la mano — ж.р. (исключение).' },
          { type: 'choice', question: 'Que genero tiene "ciudad"?', options: ['Masculino', 'Femenino', 'Neutro', 'Ambos'], answer: 1, explain: 'la ciudad — ж.р. (-dad).' },
          { type: 'translate', question: 'Переведите: "Книга" (с артиклем).', answer: 'el libro', explain: 'libro — м.р., артикль el.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['libros', 'los', 'son', 'caros'], answer: 'los libros son caros', explain: 'los libros — мн.ч. м.р.' },
          { type: 'correct', question: 'Encuentra y corrige: "la problema es serio."', answer: 'el problema es serio', explain: 'el problema — м.р. (исключение).' }
        ]}
      },
      {
        id: 'esf-l4', topic: 'Ser and Estar verbs',
        objective: 'Diferenciar y usar correctamente los verbos "ser" y "estar" en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Ser y Estar: Los Dos Verbos "Ser" en Espanol',
          text: 'En espanol, hay dos verbos que equivalen al verbo "to be" del ingles: "ser" y "estar". Esto puede parecer dificil al principio, pero con practica se vuelve natural.\n\n**Verbo SER** — para caracteristicas permanentes, identidad, origen, profesion, hora:\n- Identidad: "Yo soy Maria" (я — Мария)\n- Origen: "Soy de Espana" (я из Испании)\n- Profesion: "Soy profesor" (я учитель)\n- Caracteristicas: "El libro es rojo" (книга красная)\n- Hora: "Son las tres" (сейчас три часа)\n- Nacionalidad: "Somos mexicanos" (мы мексиканцы)\n\n**Conjugacion de SER:**\nyo soy, tu eres, el/ella/usted es, nosotros somos, vosotros sois, ellos/ellas/ustedes son.\n\n**Verbo ESTAR** — para estados temporales, ubicacion, emociones:\n- Ubicacion: "Madrid esta en Espana" (Мадрид в Испании)\n- Emociones: "Estoy feliz" (я счастлив)\n- Estado temporal: "Estoy cansado" (я устал)\n- Clima: "Esta lloviendo" (идет дождь)\n- Accion progresiva: "Estoy comiendo" (я ем сейчас)\n\n**Conjugacion de ESTAR:**\nyo estoy, tu estas, el/ella/usted esta, nosotros estamos, vosotros estais, ellos/ellas/ustedes estan.\n\n**Como elegir entre SER y ESTAR?**\nPregunta: "Es permanente o temporal?"\n- Permanente (identidad, origen, profesion) -> SER\n- Temporal (estado, emocion, ubicacion) -> ESTAR\n\n**Ejemplos comparativos:**\n- "El cafe es frio" (кофе — холодный напиток por naturaleza -> SER)\n- "El cafe esta frio" (кофе остыл -> ESTAR)\n- "Ella es guapa" (она красивая от природы -> SER)\n- "Ella esta guapa hoy" (сегодня она хорошо выглядит -> ESTAR)\n- "El abuelo esta muerto" (дедушка умер -> ESTAR, excepcion!)\n\n**Errores comunes:**\n- "Yo estoy profesor" WRONG! -> "Yo soy profesor"\n- "Madrid es en Espana" WRONG! -> "Madrid esta en Espana"\n- "Estoy de Mexico" WRONG! -> "Soy de Mexico"\n\nLa clave es practicar. Con el tiempo, elegir entre "ser" y "estar" se vuelve natural!',
          textRu: 'В испанском есть два глагола, соответствующих английскому "to be": "ser" и "estar". Это может показаться сложным сначала, но с практикой станет естественным.\n\n**Глагол SER** — для постоянных характеристик, идентичности, происхождения, профессии, времени:\n- Идентичность: "Yo soy Maria" (я — Мария)\n- Происхождение: "Soy de Espana" (я из Испании)\n- Профессия: "Soy profesor" (я учитель)\n- Характеристики: "El libro es rojo" (книга красная)\n- Время: "Son las tres" (сейчас три часа)\n- Национальность: "Somos mexicanos" (мы мексиканцы)\n\n**Спряжение SER:**\nyo soy, tu eres, el/ella/usted es, nosotros somos, vosotros sois, ellos/ellas/ustedes son.\n\n**Глагол ESTAR** — для временных состояний, местонахождения, эмоций:\n- Местонахождение: "Madrid esta en Espana" (Мадрид в Испании)\n- Эмоции: "Estoy feliz" (я счастлив)\n- Временное состояние: "Estoy cansado" (я устал)\n- Погода: "Esta lloviendo" (идёт дождь)\n- Прогрессивное действие: "Estoy comiendo" (я ем сейчас)\n\n**Спряжение ESTAR:**\nyo estoy, tu estas, el/ella/usted esta, nosotros estamos, vosotros estais, ellos/ellas/ustedes estan.\n\n**Как выбрать между SER и ESTAR?**\nСпросите: "Это постоянное или временное?"\n- Постоянное (идентичность, происхождение, профессия) -> SER\n- Временное (состояние, эмоция, местонахождение) -> ESTAR\n\n**Сравнительные примеры:**\n- "El cafe es frio" (кофе — холодный напиток по природе -> SER)\n- "El cafe esta frio" (кофе остыл -> ESTAR)\n- "Ella es guapa" (она красивая от природы -> SER)\n- "Ella esta guapa hoy" (сегодня она хорошо выглядит -> ESTAR)\n- "El abuelo esta muerto" (дедушка умер -> ESTAR, исключение!)\n\n**Частые ошибки:**\n- "Yo estoy profesor" НЕПРАВИЛЬНО! -> "Yo soy profesor"\n- "Madrid es en Espana" НЕПРАВИЛЬНО! -> "Madrid esta en Espana"\n- "Estoy de Mexico" НЕПРАВИЛЬНО! -> "Soy de Mexico"\n\nКлюч — практика. Со временем выбор между "ser" и "estar" станет естественным!',
          vocab: [
            { word: 'ser (soy, eres, es...)', trans: 'Быть (постоянное)' },
            { word: 'estar (estoy, estas, esta...)', trans: 'Быть (временное/место)' },
            { word: 'Yo soy profesor', trans: 'Я учитель (профессия)' },
            { word: 'Estoy cansado', trans: 'Я устал (состояние)' },
            { word: 'Soy de Espana', trans: 'Я из Испании (происхождение)' },
            { word: 'Madrid esta en Espana', trans: 'Мадрид в Испании (место)' },
            { word: 'Son las tres', trans: 'Сейчас три часа (время)' },
            { word: 'Estoy comiendo', trans: 'Я ем сейчас (действие)' }
          ]
        },
        video: { slides: [
          { emoji: ' ser', title: 'SER', text: 'Характеристики постоянные: идентичность, происхождение, профессия.' },
          { emoji: ' estar', title: 'ESTAR', text: 'Состояния временные: эмоции, местонахождение, действие.' },
          { emoji: ' soy', title: 'soy / estoy', text: 'soy = я есть (постоянно). estoy = я (временно).' },
          { emoji: ' eres', title: 'eres / estas', text: 'eres = ты есть. estas = ты (временно).' },
          { emoji: ' lugar', title: 'Ubicacion = estar', text: 'Madrid esta en Espana. Местонахождение — всегда estar.' },
          { emoji: ' profesion', title: 'Profesion = ser', text: 'Soy profesor. Профессия — всегда ser.' },
          { emoji: ' hora', title: 'Hora = ser', text: 'Son las tres. Время — всегда ser.' },
          { emoji: ' accion', title: 'Accion = estar', text: 'Estoy comiendo. Прогрессивное действие — estar + -iendo.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Yo ___ de Mexico." (происхождение)', options: ['estoy', 'soy', 'es', 'esta'], answer: 1, explain: 'Происхождение — ser. "Soy de Mexico".' },
          { q: 'Completa: "Madrid ___ en Espana." (место)', options: ['es', 'esta', 'soy', 'estoy'], answer: 1, explain: 'Местонахождение — estar. "Madrid esta en Espana".' },
          { q: 'Completa: "Yo ___ profesor." (профессия)', options: ['estoy', 'soy', 'estas', 'eres'], answer: 1, explain: 'Профессия — ser. "Soy profesor".' },
          { q: 'Completa: "Yo ___ cansado." (состояние)', options: ['soy', 'estoy', 'somos', 'estan'], answer: 1, explain: 'Состояние — estar. "Estoy cansado".' },
          { q: 'Completa: "Son ___ tres." (время)', options: ['las', 'los', 'esta', 'estan'], answer: 0, explain: 'Время — ser. "Son las tres".' },
          { q: 'Completa: "Tu ___ Maria." (идентичность)', options: ['estas', 'eres', 'esta', 'es'], answer: 1, explain: 'Идентичность — ser. "Tu eres Maria".' },
          { q: 'Completa: "Estoy ___." (я ем сейчас)', options: ['como', 'comiendo', 'comer', 'comido'], answer: 1, explain: 'estar + -iendo = прогресс. "Estoy comiendo".' },
          { q: 'Cual es correcto?', options: ['Yo estoy profesor', 'Yo soy profesor', 'Ambas', 'Ninguna'], answer: 1, explain: 'Профессия — ser, не estar.' },
          { q: 'Cual es correcto?', options: ['Madrid es en Espana', 'Madrid esta en Espana', 'Ambas', 'Ninguna'], answer: 1, explain: 'Местонахождение — estar.' },
          { q: 'Completa: "Nosotros ___ felices." (мы счастливы)', options: ['somos', 'estamos', 'es', 'esta'], answer: 1, explain: 'Эмоция — estar. "Estamos felices".' },
          { q: 'Completa: "Ellos ___ de Cuba." (происхождение)', options: ['estan', 'son', 'esta', 'es'], answer: 1, explain: 'Происхождение — ser. "Son de Cuba".' },
          { q: 'Completa: "___ lloviendo." (идет дождь)', options: ['Es', 'Esta', 'Son', 'Estan'], answer: 1, explain: 'Погода/действие — estar. "Esta lloviendo".' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Yo ___ de Argentina." (я из Аргентины)', answer: 'soy', explain: 'Происхождение — ser.' },
          { type: 'fill-blank', question: 'Completa: "___ las diez." (сейчас 10 часов)', answer: 'Son', explain: 'Время — ser.' },
          { type: 'choice', question: 'Cual es correcto?', options: ['Estoy profesor', 'Soy profesor', 'Soy cansado', 'Estoy de Espana'], answer: 1, explain: 'Профессия — ser.' },
          { type: 'translate', question: 'Переведите: "Я устал."', answer: 'Estoy cansado', explain: 'Состояние — estar.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['Madrid', 'Espana', 'en', 'esta'], answer: 'Madrid esta en Espana', explain: 'Местонахождение — estar.' },
          { type: 'correct', question: 'Encuentra y corrige: "Yo estoy de Mexico."', answer: 'Yo soy de Mexico', explain: 'Происхождение — ser, не estar.' }
        ]}
      },
      {
        id: 'esf-l5', topic: 'Days, months and dates in Spanish',
        objective: 'Aprender los dias de la semana, los meses y como decir la fecha en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Dias, Meses y Fechas en Espanol',
          text: 'Hablar de fechas y dias es esencial para hacer citas, planificar viajes y organizar tu vida. En espanol, los dias y meses no se escriben con mayuscula inicial (a diferencia del ingles).\n\n**Dias de la semana:**\nlunes (понедельник), martes (вторник), miercoles (среда), jueves (четверг), viernes (пятница), sabado (суббота), domingo (воскресенье).\n\nNota: en espanol, la semana empieza con el lunes. Todos los dias terminan en "-es" excepto "sabado" y "domingo".\n\n**Meses del ano:**\nenero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.\n\n**Como decir la fecha:**\nEn espanol, el formato es: el + dia + de + mes + de + ano.\n- "el quince de marzo" (15 марта)\n- "el primero de enero" (1 января)\n- "el veinticinco de diciembre de dos mil veinticuatro" (25 декабря 2024)\n\nNota: el dia 1 se dice "el primero" (не "el uno").\n\n**Numeros ordinales (1-10):**\nprimero (1), segundo (2), tercero (3), cuarto (4), quinto (5), sexto (6), septimo (7), octavo (8), noveno (9), decimo (10).\nPara fechas, solo se usa "primero" para el dia 1. Los demas dias usan numeros cardinales: "el dos de mayo", "el quince de marzo".\n\n**Preposiciones de tiempo:**\n- "en" + mes/ano: "en mayo", "en 2024"\n- "el" + dia de la semana: "el lunes", "el viernes"\n- "el" + fecha: "el quince de marzo"\n- "a las" + hora: "a las tres"\n\n**Preguntas utiles:**\n- "Que dia es hoy?" (какой сегодня день?)\n- "Cual es la fecha?" (какая дата?)\n- "Cuando es tu cumpleanos?" (когда твой день рождения?)\n- "Que dia es manana?" (какой день завтра?)\n\n**Estaciones del ano:**\nla primavera (весна), el verano (лето), el otono (осень), el invierno (зима).\n\nPractica diciendo la fecha de hoy y tu cumpleanos en espanol. Los dias y meses son vocabulario esencial que usaras todos los dias!',
          textRu: 'Говорить о датах и днях необходимо для встреч, планирования путешествий и организации жизни. В испанском дни и месяцы не пишутся с большой буквы (в отличие от английского).\n\n**Дни недели:**\nlunes (понедельник), martes (вторник), miercoles (среда), jueves (четверг), viernes (пятница), sabado (суббота), domingo (воскресенье).\n\nПримечание: в испанском неделя начинается с понедельника. Все дни заканчиваются на "-es", кроме "sabado" и "domingo".\n\n**Месяцы:**\nenero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.\n\n**Как назвать дату:**\nВ испанском формат: el + день + de + месяц + de + год.\n- "el quince de marzo" (15 марта)\n- "el primero de enero" (1 января)\n- "el veinticinco de diciembre de dos mil veinticuatro" (25 декабря 2024)\n\nПримечание: день 1 называется "el primero" (не "el uno").\n\n**Порядковые числительные (1-10):**\nprimero (1), segundo (2), tercero (3), cuarto (4), quinto (5), sexto (6), septimo (7), octavo (8), noveno (9), decimo (10).\nДля дат "primero" используется только для дня 1. Остальные дни используют количественные числительные: "el dos de mayo", "el quince de marzo".\n\n**Предлоги времени:**\n- "en" + месяц/год: "en mayo", "en 2024"\n- "el" + день недели: "el lunes", "el viernes"\n- "el" + дата: "el quince de marzo"\n- "a las" + время: "a las tres"\n\n**Полезные вопросы:**\n- "Que dia es hoy?" (какой сегодня день?)\n- "Cual es la fecha?" (какая дата?)\n- "Cuando es tu cumpleanos?" (когда твой день рождения?)\n- "Que dia es manana?" (какой день завтра?)\n\n**Времена года:**\nla primavera (весна), el verano (лето), el otono (осень), el invierno (зима).\n\nПрактикуйтесь, называя сегодняшнюю дату и свой день рождения на испанском. Дни и месяцы — необходимый словарный запас, который вы будете использовать каждый день!',
          vocab: [
            { word: 'lunes, martes, miercoles', trans: 'Понедельник, вторник, среда' },
            { word: 'jueves, viernes', trans: 'Четверг, пятница' },
            { word: 'sabado, domingo', trans: 'Суббота, воскресенье' },
            { word: 'enero, febrero, marzo', trans: 'Январь, февраль, март' },
            { word: 'el quince de marzo', trans: '15 марта (формат даты)' },
            { word: 'Que dia es hoy?', trans: 'Какой сегодня день?' },
            { word: 'en mayo / el lunes', trans: 'В мае / в понедельник' },
            { word: 'primavera, verano, otono, invierno', trans: 'Весна, лето, осень, зима' }
          ]
        },
        video: { slides: [
          { emoji: ' lun', title: 'Lunes a viernes', text: 'lunes, martes, miercoles, jueves, viernes. Дни недели.' },
          { emoji: ' fin', title: 'Sabado y domingo', text: 'sabado, domingo. Выходные.' },
          { emoji: ' meses', title: 'Meses', text: 'enero, febrero... diciembre. 12 месяцев. Без заглавной буквы.' },
          { emoji: ' fecha', title: 'La fecha', text: 'el + dia + de + mes + de + ano. el 15 de marzo.' },
          { emoji: ' 1', title: 'el primero', text: 'День 1: "el primero" (не "el uno").' },
          { emoji: ' en', title: 'en + mes', text: 'en mayo, en 2024. Месяцы и годы — "en".' },
          { emoji: ' el', title: 'el + dia', text: 'el lunes, el viernes. Дни недели — "el".' },
          { emoji: ' est', title: 'Estaciones', text: 'primavera, verano, otono, invierno.' }
        ]},
        quiz: { pool: [
          { q: 'Como se dice "Monday" en espanol?', options: ['martes', 'lunes', 'domingo', 'viernes'], answer: 1, explain: 'lunes = понедельник.' },
          { q: 'Como se dice "Friday" en espanol?', options: ['jueves', 'lunes', 'viernes', 'miercoles'], answer: 2, explain: 'viernes = пятница.' },
          { q: 'Como se dice "January" en espanol?', options: ['febrero', 'enero', 'marzo', 'abril'], answer: 1, explain: 'enero = январь.' },
          { q: 'Completa: "el ___ de marzo" (15 марта)', options: ['quince', 'cinco', 'cincuenta', 'quinto'], answer: 0, explain: 'quince = 15. el quince de marzo.' },
          { q: 'Como se dice "1 de enero"?', options: ['el uno de enero', 'el primero de enero', 'el primer de enero', 'el enero uno'], answer: 1, explain: 'День 1: "el primero".' },
          { q: 'Completa: "Nacio ___ 1990." (в 1990)', options: ['el', 'en', 'a', 'por'], answer: 1, explain: 'Год: "en 1990".' },
          { q: 'Completa: "Tengo clase ___ lunes." (в понедельник)', options: ['en', 'el', 'a', 'por'], answer: 1, explain: 'День недели: "el lunes".' },
          { q: 'Que dia viene despues de martes?', options: ['lunes', 'miercoles', 'jueves', 'viernes'], answer: 1, explain: 'Despues de martes: miercoles.' },
          { q: 'Completa: "Vivo aqui ___ mayo." (в мае)', options: ['el', 'en', 'a', 'los'], answer: 1, explain: 'Месяц: "en mayo".' },
          { q: 'Como se dice "spring" en espanol?', options: ['verano', 'primavera', 'otono', 'invierno'], answer: 1, explain: 'primavera = весна.' },
          { q: 'Cuantos meses tiene un ano?', options: ['diez', 'once', 'doce', 'trece'], answer: 2, explain: 'doce (12) meses.' },
          { q: 'Como se dice "Saturday" en espanol?', options: ['domingo', 'sabado', 'viernes', 'jueves'], answer: 1, explain: 'sabado = суббота.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Hoy es ___." (понедельник)', answer: 'lunes', explain: 'lunes = понедельник.' },
          { type: 'fill-blank', question: 'Completa: "Mi cumpleanos es el ___ de junio." (1 июня)', answer: 'primero', explain: 'День 1: "el primero".' },
          { type: 'choice', question: 'Como se dice "March" en espanol?', options: ['marzo', 'mayo', 'marzo', 'abril'], answer: 0, explain: 'marzo = март.' },
          { type: 'translate', question: 'Переведите: "15 марта".', answer: 'el quince de marzo', explain: 'Формат: el + dia + de + mes.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['de', 'el', 'marzo', 'quince'], answer: 'el quince de marzo', explain: 'el + dia + de + mes.' },
          { type: 'correct', question: 'Encuentra y corrige: "Mi cumpleanos es el uno de enero."', answer: 'Mi cumpleanos es el primero de enero', explain: 'День 1: "primero", no "uno".' }
        ]}
      },
      {
        id: 'esf-l6', topic: 'Food and ordering in a restaurant in Spanish',
        objective: 'Aprender vocabulario de comida y como pedir en un restaurante en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Comida y Restaurante en Espanol',
          text: 'Pedir comida en un restaurante es una de las situaciones mas utiles cuando viajas a un pais hispanohablante. Con unas pocas frases, puedes disfrutar de la gastronomia local con confianza.\n\n**Vocabulario basico de comida:**\n- el desayuno (завтрак), el almuerzo (обед), la cena (ужин)\n- el pan (хлеб), el agua (вода), el cafe (кофе), la leche (молоко)\n- la carne (мясо), el pescado (рыба), el pollo (курица)\n- la ensalada (салат), la sopa (суп), el arroz (рис)\n- la fruta (фрукт), las verduras (овощи)\n- el postre (десерт), la cuenta (счёт)\n\n**Frases para pedir:**\n- "Quiero..." (я хочу...) — "Quiero un cafe, por favor"\n- "Me gustaria..." (я бы хотел...) — mas formal: "Me gustaria la sopa"\n- "Para mi..." (для меня...) — "Para mi, el pollo"\n- "Que recomienda?" (что вы порекомендуете?)\n- "La carta, por favor" (меню, пожалуйста)\n\n**Llegar al restaurante:**\n- "Una mesa para dos, por favor" (столик на двоих)\n- "Tienen mesa libre?" (есть свободный столик?)\n- "Puedo ver la carta?" (можно посмотреть меню?)\n\n**Preguntar sobre la comida:**\n- "Que lleva este plato?" (что в этом блюде?)\n- "Tiene...?" (здесь есть...?) — "Tiene opciones vegetarianas?"\n- "Esta picante?" (это острое?)\n- "Esta frio / caliente" (холодный / горячий)\n\n**Pagar:**\n- "La cuenta, por favor" (счёт, пожалуйста)\n- "Cuanto cuesta?" (сколько стоит?)\n- "Puedo pagar con tarjeta?" (можно оплатить картой?)\n- "Esta incluido el servicio?" (сервис включен?)\n\n**Propina:**\nEn Espana, la propina no es obligatoria, pero es apreciada (5-10%). En Latinoamerica, la propina suele ser del 10-15%.\n\n**Errores comunes:**\n- Confundir "la carta" (меню) con "el menu" (меню del dia / комплексный обед)\n- "Quiero una carta" = хочу письмо. "Quiero la carta" = хочу меню.\n\n**Conversacion ejemplo:**\nCamarero: "Buenas tardes, que desea?"\nTu: "Buenas tardes. Una mesa para dos, por favor."\nCamarero: "Claro, por aqui. Que quieren tomar?"\nTu: "Para mi, un agua y un cafe. Y la carta, por favor."\n\nPractica estas frases antes de viajar. La comida espanola y latinoamericana es deliciosa y merece ser disfrutada en su idioma!',
          textRu: 'Заказывать еду в ресторане — одна из самых полезных ситуаций при поездке в испаноязычную страну. С несколькими фразами вы можете уверенно наслаждаться местной гастрономией.\n\n**Базовый словарь еды:**\n- el desayuno (завтрак), el almuerzo (обед), la cena (ужин)\n- el pan (хлеб), el agua (вода), el cafe (кофе), la leche (молоко)\n- la carne (мясо), el pescado (рыба), el pollo (курица)\n- la ensalada (салат), la sopa (суп), el arroz (рис)\n- la fruta (фрукт), las verduras (овощи)\n- el postre (десерт), la cuenta (счёт)\n\n**Фразы для заказа:**\n- "Quiero..." (я хочу...) — "Quiero un cafe, por favor"\n- "Me gustaria..." (я бы хотел...) — более формально: "Me gustaria la sopa"\n- "Para mi..." (для меня...) — "Para mi, el pollo"\n- "Que recomienda?" (что вы порекомендуете?)\n- "La carta, por favor" (меню, пожалуйста)\n\n**Прийти в ресторан:**\n- "Una mesa para dos, por favor" (столик на двоих)\n- "Tienen mesa libre?" (есть свободный столик?)\n- "Puedo ver la carta?" (можно посмотреть меню?)\n\n**Спросить о еде:**\n- "Que lleva este plato?" (что в этом блюде?)\n- "Tiene...?" (здесь есть...?) — "Tiene opciones vegetarianas?"\n- "Esta picante?" (это острое?)\n- "Esta frio / caliente" (холодный / горячий)\n\n**Оплата:**\n- "La cuenta, por favor" (счёт, пожалуйста)\n- "Cuanto cuesta?" (сколько стоит?)\n- "Puedo pagar con tarjeta?" (можно оплатить картой?)\n- "Esta incluido el servicio?" (сервис включен?)\n\n**Чаевые:**\nВ Испании чаевые не обязательны, но ценятся (5-10%). В Латинской Америке чаевые обычно 10-15%.\n\n**Частые ошибки:**\n- Путать "la carta" (меню) с "el menu" (меню дня / комплексный обед)\n- "Quiero una carta" = хочу письмо. "Quiero la carta" = хочу меню.\n\n**Пример разговора:**\nОфициант: "Buenas tardes, que desea?"\nВы: "Buenas tardes. Una mesa para dos, por favor."\nОфициант: "Claro, por aqui. Que quieren tomar?"\nВы: "Para mi, un agua y un cafe. Y la carta, por favor."\n\nПотренируйте эти фразы перед поездкой. Испанская и латиноамериканская кухня восхитительна и заслуживает того, чтобы наслаждаться ей на её родном языке!',
          vocab: [
            { word: 'el desayuno / almuerzo / cena', trans: 'Завтрак / обед / ужин' },
            { word: 'la carta', trans: 'Меню' },
            { word: 'Quiero... / Me gustaria...', trans: 'Я хочу... / Я бы хотел...' },
            { word: 'Que recomienda?', trans: 'Что порекомендуете?' },
            { word: 'la cuenta, por favor', trans: 'Счёт, пожалуйста' },
            { word: 'el pollo / pescado / carne', trans: 'Курица / рыба / мясо' },
            { word: 'Una mesa para dos', trans: 'Столик на двоих' },
            { word: 'Puedo pagar con tarjeta?', trans: 'Можно картой?' }
          ]
        },
        video: { slides: [
          { emoji: ' comida', title: 'Comidas', text: 'desayuno (утро), almuerzo (день), cena (вечер). Три приёма пищи.' },
          { emoji: ' carta', title: 'La carta', text: 'Меню. "La carta, por favor." Не "el menu" (комплексный обед).' },
          { emoji: ' quiero', title: 'Quiero / Me gustaria', text: 'Quiero = хочу. Me gustaria = хотел бы (вежливее).' },
          { emoji: ' mesa', title: 'Una mesa para...', text: '"Una mesa para dos, por favor." Столик на двоих.' },
          { emoji: ' rec', title: 'Que recomienda?', text: 'Что порекомендуете? Полезная фраза в ресторане.' },
          { emoji: ' cuenta', title: 'La cuenta', text: 'Счёт. "La cuenta, por favor."' },
          { emoji: ' tarjeta', title: 'Pagar con tarjeta', text: 'Оплатить картой. "Puedo pagar con tarjeta?"' },
          { emoji: ' propina', title: 'Propina', text: 'Чаевые: 5-10% в Испании, 10-15% в Латинской Америке.' }
        ]},
        quiz: { pool: [
          { q: 'Como se dice "menu" en espanol?', options: ['el menu', 'la carta', 'la cuenta', 'el plato'], answer: 1, explain: 'la carta = меню (список блюд).' },
          { q: 'Como pides "столик на двоих"?', options: ['Una mesa para dos', 'Dos mesas, por favor', 'La carta para dos', 'Dos sillas'], answer: 0, explain: '"Una mesa para dos, por favor."' },
          { q: 'Como se dice "счёт" en espanol?', options: ['la carta', 'la cuenta', 'el menu', 'la propina'], answer: 1, explain: 'la cuenta = счёт.' },
          { q: 'Completa: "___ un cafe, por favor."', options: ['Quiero', 'Cuesta', 'Tiene', 'Soy'], answer: 0, explain: '"Quiero un cafe" = хочу кофе.' },
          { q: 'Como preguntas "что порекомендуете?"', options: ['Que es esto?', 'Que recomienda?', 'Cuanto cuesta?', 'Donde esta?'], answer: 1, explain: '"Que recomienda?" = что порекомендуете?' },
          { q: 'Como se dice "breakfast" en espanol?', options: ['la cena', 'el almuerzo', 'el desayuno', 'la comida'], answer: 2, explain: 'el desayuno = завтрак.' },
          { q: 'Completa: "Puedo pagar ___ tarjeta?"', options: ['con', 'en', 'de', 'por'], answer: 0, explain: '"con tarjeta" = картой.' },
          { q: 'Como pides "я бы хотел суп"?', options: ['Quiero la sopa', 'Me gustaria la sopa', 'Tengo la sopa', 'Es la sopa'], answer: 1, explain: '"Me gustaria la sopa" = хотел бы суп (вежливо).' },
          { q: 'Que es "el pollo"?', options: ['Рыба', 'Курица', 'Мясо', 'Хлеб'], answer: 1, explain: 'el pollo = курица.' },
          { q: 'Completa: "Que ___ este plato?" (что в этом блюде?)', options: ['lleva', 'cuesta', 'tiene', 'es'], answer: 0, explain: '"Que lleva este plato?" = что в этом блюде?' },
          { q: 'Como se dice "fish" en espanol?', options: ['el pollo', 'la carne', 'el pescado', 'el arroz'], answer: 2, explain: 'el pescado = рыба.' },
          { q: 'Que es "la propina"?', options: ['Меню', 'Счёт', 'Чаевые', 'Заказ'], answer: 2, explain: 'la propina = чаевые.' }
        ], showCount: 10, passThreshold: 0.5 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "La ___, por favor." (счёт)', answer: 'cuenta', explain: 'la cuenta = счёт.' },
          { type: 'fill-blank', question: 'Completa: "Quiero un ___, por favor." (кофе)', answer: 'cafe', explain: 'un cafe = кофе.' },
          { type: 'choice', question: 'Como pides "столик на двоих"?', options: ['Dos mesas', 'Una mesa para dos', 'La carta para dos', 'Dos sillas'], answer: 1, explain: '"Una mesa para dos, por favor."' },
          { type: 'translate', question: 'Переведите: "Я бы хотел курицу."', answer: 'Me gustaria el pollo', explain: 'Me gustaria + sustantivo.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['cuenta', 'la', 'favor', 'por'], answer: 'la cuenta por favor', explain: 'la cuenta, por favor.' },
          { type: 'correct', question: 'Encuentra y corrige: "Quiero una carta de cafe."', answer: 'Quiero un cafe', explain: 'carta = меню. Просто "Quiero un cafe".' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._spanish_course_1 = COURSE;
})(window);
