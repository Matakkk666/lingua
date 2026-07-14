/* ============================================================
   AES Paid Spanish Course 2: Espanol de Negocios (B1-B2)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'es-business',
    title: 'Espanol de Negocios Pro',
    price: 1500, oldPrice: 2990,
    level: 'B1-B2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'dustyPink',
    art: ['#F2DCDC', '#E9C4C4'],
    tagline: 'Business Spanish: emails, meetings, presentations. 6 modules.',
    lessons: [
      {
        id: 'esb-l1', topic: 'Correos electronicos de negocios',
        objective: 'Escribir correos electronicos profesionales en espanol con el tono y la estructura adecuados.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Correos Electronicos Profesionales en Espanol',
          text: 'El correo electronico es la herramienta principal de comunicacion empresarial. En el mundo hispanohablante, el tono de los correos puede ser mas formal que en ingles, especialmente en el primer contacto.\n\n**Estructura de un correo profesional:**\n1. Asunto (Subject): claro y conciso — "Reunion de presupuesto - 15 de marzo"\n2. Saludo: "Estimado/a [Nombre]" (formal) o "Hola, [Nombre]" (menos formal)\n3. Cuerpo: organizado en paragrafos cortos\n4. Cierre: "Atentamente", "Cordialmente", "Saludos cordiales"\n5. Firma: nombre, cargo, empresa, datos de contacto\n\n**Saludos formales:**\n- "Estimado senor Garcia:" (очень формально)\n- "Estimada senora Lopez:" (очень формально)\n- "Estimado/a [Nombre]:" (formal, conocido)\n- "Hola, [Nombre]:" (menos formal, ya se conocen)\n\n**Formulas de apertura:**\n- "Espero que este mensaje le encuentre bien." (стандартное начало)\n- "Le escribo en relacion con..." (я пишу по поводу...)\n- "En respuesta a su correo..." (в ответ на ваше письмо)\n- "Me pongo en contacto con usted para..." (связываюсь с вами, чтобы...)\n\n**Solicitar informacion:**\n- "Le agradeceria si pudiera enviarme..." (был бы признателен, если...)\n- "Me gustaria solicitar..." (хотел бы запросить)\n- "Podria facilitarme la informacion sobre...?" (не могли бы предоставить...?)\n\n**Pedir aclaraciones:**\n- "Podria aclarar el siguiente punto?" (не могли бы уточнить...)\n- "Tengo una duda respecto a..." (у меня есть сомнение относительно...)\n- "Para asegurar que entiendo correctamente..." (чтобы убедиться, что я правильно понимаю...)\n\n**Adjuntar archivos:**\n- "Adjunto a este correo..." (прилагаю к этому письму...)\n- "Por favor, encuentre adjunto..." (пожалуйста, найдите во вложении...)\n- "Le envio el documento solicitado." (отправляю запрошенный документ)\n\n**Cierre y despedida:**\n- "Quedo a la espera de su respuesta." (жду вашего ответа)\n- "No dude en contactarme si tiene preguntas." (не стесняйтесь обращаться)\n- "Quedo a su entera disposicion." (к вашим услугам)\n- "Atentamente," / "Cordialmente," / "Saludos cordiales,"\n\n**Errores comunes:**\n- Usar "tu" (informal) cuando se debe usar "usted" (formal) en el primer contacto\n- Olvidar el asunto del correo\n- Escribir paragrafos demasiado largos\n- No especificar claramente que se espera del destinatario\n\n**Consejo practico:** En el mundo empresarial hispanohablante, la formalidad puede variar entre paises. En Espana, el trato es a menudo mas informal ("tu"). En Mexico y Colombia, se prefiere "usted" al principio. Adapta tu tono al destinatario y al contexto cultural.',
          textRu: 'Электронная почта — главный инструмент делового общения. В испаноязычном мире тон писем может быть более формальным, чем в английском, особенно при первом контакте.\n\n**Структура делового письма:**\n1. Тема (Asunto): ясная и краткая — "Reunion de presupuesto - 15 de marzo"\n2. Приветствие: "Estimado/a [Nombre]" (формально) или "Hola, [Nombre]" (менее формально)\n3. Тело: организованное в короткие абзацы\n4. Заключение: "Atentamente", "Cordialmente", "Saludos cordiales"\n5. Подпись: имя, должность, компания, контактные данные\n\n**Формальные приветствия:**\n- "Estimado senor Garcia:" (очень формально)\n- "Estimada senora Lopez:" (очень формально)\n- "Estimado/a [Nombre]:" (формально, знакомы)\n- "Hola, [Nombre]:" (менее формально, уже знакомы)\n\n**Фразы открытия:**\n- "Espero que este mensaje le encuentre bien." (стандартное начало)\n- "Le escribo en relacion con..." (я пишу по поводу...)\n- "En respuesta a su correo..." (в ответ на ваше письмо)\n- "Me pongo en contacto con usted para..." (связываюсь с вами, чтобы...)\n\n**Запрос информации:**\n- "Le agradeceria si pudiera enviarme..." (был бы признателен, если...)\n- "Me gustaria solicitar..." (хотел бы запросить)\n- "Podria facilitarme la informacion sobre...?" (не могли бы предоставить...?)\n\n**Просьба уточнить:**\n- "Podria aclarar el siguiente punto?" (не могли бы уточнить...)\n- "Tengo una duda respecto a..." (у меня есть сомнение относительно...)\n- "Para asegurar que entiendo correctamente..." (чтобы убедиться, что я правильно понимаю...)\n\n**Прикрепление файлов:**\n- "Adjunto a este correo..." (прилагаю к этому письму...)\n- "Por favor, encuentre adjunto..." (пожалуйста, найдите во вложении...)\n- "Le envio el documento solicitado." (отправляю запрошенный документ)\n\n**Заключение и прощание:**\n- "Quedo a la espera de su respuesta." (жду вашего ответа)\n- "No dude en contactarme si tiene preguntas." (не стесняйтесь обращаться)\n- "Quedo a su entera disposicion." (к вашим услугам)\n- "Atentamente," / "Cordialmente," / "Saludos cordiales,"\n\n**Частые ошибки:**\n- Использовать "tu" (неформально) когда следует использовать "usted" (формально) при первом контакте\n- Забывать тему письма\n- Писать слишком длинные абзацы\n- Не указывать чётко, что ожидается от получателя\n\n**Практический совет:** В испаноязыыком деловом мире формальность может варьироваться между странами. В Испании обращение часто более неформальное ("tu"). В Мексике и Колумбии предпочитают "usted" в начале. Адаптируйте тон под получателя и культурный контекст.',
          vocab: [
            { word: 'Estimado/a', trans: 'Уважаемый/ая (формальное обращение)' },
            { word: 'Le escribo en relacion con...', trans: 'Пишу вам по поводу...' },
            { word: 'Adjunto a este correo', trans: 'Прилагаю к этому письму' },
            { word: 'Le agradeceria si pudiera...', trans: 'Был бы признателен, если бы вы...' },
            { word: 'Quedo a la espera de su respuesta', trans: 'Жду вашего ответа' },
            { word: 'Atentamente / Cordialmente', trans: 'С уважением / Искренне' },
            { word: 'No dude en contactarme', trans: 'Не стесняйтесь обращаться' },
            { word: 'En respuesta a su correo', trans: 'В ответ на ваше письмо' }
          ]
        },
        video: { slides: [
          { emoji: ' asunto', title: 'Asunto', text: 'Тема письма: ясная и краткая. "Reunion de presupuesto - 15 de marzo".' },
          { emoji: ' saludo', title: 'Saludo formal', text: 'Estimado/a [Nombre]: — формально. Hola, [Nombre]: — менее формально.' },
          { emoji: ' apertura', title: 'Apertura', text: '"Espero que este mensaje le encuentre bien." — стандартное начало.' },
          { emoji: ' solic', title: 'Solicitar info', text: '"Le agradeceria si pudiera enviarme..." — вежливый запрос.' },
          { emoji: ' adj', title: 'Adjuntos', text: '"Adjunto a este correo..." / "Por favor, encuentre adjunto..." — о вложениях.' },
          { emoji: ' cierre', title: 'Cierre', text: '"Quedo a la espera de su respuesta." — жду ответа.' },
          { emoji: ' desped', title: 'Despedida', text: 'Atentamente, / Cordialmente, / Saludos cordiales, — формальные прощания.' },
          { emoji: ' usted', title: 'tu vs usted', text: 'Usted в первом контакте. Tu — после установления отношений.' }
        ]},
        quiz: { pool: [
          { q: 'Cual es un saludo formal en un correo?', options: ['Hola!', 'Estimado senor Garcia:', 'Que tal?', 'Buenas!'], answer: 1, explain: '"Estimado/a" — формальное обращение.' },
          { q: 'Completa: "Le escribo ___ relacion con el proyecto."', options: ['en', 'con', 'de', 'por'], answer: 0, explain: '"en relacion con" = по поводу.' },
          { q: 'Como adjuntas un archivo?', options: ['Tengo un archivo', 'Adjunto a este correo el documento', 'El archivo esta aqui', 'Mira el archivo'], answer: 1, explain: '"Adjunto a este correo..." — стандартная фраза.' },
          { q: 'Completa: "___ a la espera de su respuesta."', options: ['Estoy', 'Quedo', 'Soy', 'Tengo'], answer: 1, explain: '"Quedo a la espera..." — жду ответа.' },
          { q: 'Cual es una despedida formal?', options: ['Adios', 'Hasta luego', 'Atentamente', 'Chao'], answer: 2, explain: '"Atentamente," — формальная подпись.' },
          { q: 'Completa: "Le ___ si pudiera enviarme la informacion."', options: ['agradeceria', 'quiero', 'tengo', 'digo'], answer: 0, explain: '"Le agradecaria si pudiera..." — вежливый запрос.' },
          { q: 'Como pides aclaracion?', options: ['No entiendo', 'Podria aclarar el siguiente punto?', 'Que es esto?', 'Otra vez'], answer: 1, explain: '"Podria aclarar...?" — вежливая просьба уточнить.' },
          { q: 'Completa: "___ respuesta a su correo..."', options: ['En', 'Con', 'Por', 'De'], answer: 0, explain: '"En respuesta a su correo..." — в ответ.' },
          { q: 'Cual es el mejor asunto?', options: ['Hola', 'Reunion de presupuesto - 15 de marzo', 'Correo', 'Importante'], answer: 1, explain: 'Asunto claro y especifico.' },
          { q: 'Completa: "No ___ en contactarme si tiene preguntas."', options: ['dude', 'piense', 'tenga', 'haga'], answer: 0, explain: '"No dude en contactarme" = не стесняйтесь обращаться.' },
          { q: 'Cuando usar "usted" en vez de "tu"?', options: ['Con amigos', 'En el primer contacto formal', 'Nunca', 'Siempre'], answer: 1, explain: 'Usted — в формальном первом контакте.' },
          { q: 'Completa: "Espero que este mensaje le ___ bien."', options: ['encuentre', 'este', 'vaya', 'tenga'], answer: 0, explain: '"le encuentre bien" — стандартное пожелание.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "___ senor Garcia, le escribo sobre el proyecto."', answer: 'Estimado', explain: 'Estimado = формальное обращение.' },
          { type: 'fill-blank', question: 'Completa: "Quedo a la ___ de su respuesta."', answer: 'espera', explain: '"Quedo a la espera..." = жду ответа.' },
          { type: 'choice', question: 'Cual es una despedida profesional?', options: ['Chao', 'Atentamente', 'Adios', 'Nos vemos'], answer: 1, explain: 'Atentamente = с уважением.' },
          { type: 'translate', question: 'Переведите: "Прилагаю к этому письму запрошенный документ."', answer: 'Adjunto a este correo el documento solicitado', explain: 'Adjunto = прилагаю.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['respuesta', 'su', 'espera', 'la', 'a', 'de', 'Quedo'], answer: 'Quedo a la espera de su respuesta', explain: 'Формула закрытия письма.' },
          { type: 'correct', question: 'Encuentra y corrige: "Hola senor Garcia, quiero informacion."', answer: 'Estimado senor Garcia, le agradeceria si pudiera enviarme la informacion', explain: 'Формальный тон: Estimado + вежливый запрос.' }
        ]}
      },
      {
        id: 'esb-l2', topic: 'Reuniones de negocios',
        objective: 'Participar en reuniones de negocios en espanol: abrir, dirigir y cerrar la reunion.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Reuniones de Negocios en Espanol',
          text: 'Las reuniones son una parte esencial de la vida empresarial. En el mundo hispanohablante, las reuniones suelen empezar con unos minutos de conversacion informal antes de pasar a los temas de trabajo. Es importante conocer las frases clave para cada etapa.\n\n**Antes de la reunion:**\n- "Confirmo mi asistencia a la reunion." (подтверждаю участие)\n- "No podre asistir a la reunion de manana." (не смогу присутствовать)\n- "Podemos reprogramar la reunion?" (можем перенести?)\n- "Cual es la agenda de la reunion?" (какая повестка?)\n\n**Abrir la reunion:**\n- "Gracias a todos por venir." (спасибо всем за приход)\n- "Damos por iniciada la reunion." (объявляю собрание открытым)\n- "El objetivo de esta reunion es..." (цель этой встречи...)\n- "Hoy vamos a hablar sobre..." (сегодня мы поговорим о...)\n\n**Presentar la agenda:**\n- "En la agenda de hoy tenemos tres puntos." (в повестке три пункта)\n- "El primer punto es..." (первый пункт...)\n- "Pasamos al siguiente punto." (переходим к следующему пункту)\n\n**Dar la palabra:**\n- "Tiene la palabra Maria." (слово предоставляется Марии)\n- "Maria, quieres explicarnos...?" (Мария, не могла бы объяснить...?)\n- "Que opinas sobre esto?" (что думаешь об этом?)\n- "Algun comentario?" (есть комментарии?)\n\n**Intervenir en la discusion:**\n- "Si me permite, me gustaria anadir..." (если позволите, хотел бы добавить...)\n- "Estoy de acuerdo con..." (согласен с...)\n- "No estoy seguro de estar de acuerdo." (не уверен, что согласен)\n- "Desde mi punto de vista..." (с моей точки зрения...)\n- "Podemos volver al tema principal?" (можем вернуться к главной теме?)\n\n**Tomar decisiones:**\n- "Estamos todos de acuerdo?" (мы все согласны?)\n- "Quien esta a favor?" (кто за?)\n- "Tomamos la decision por consenso." (принимаем решение консенсусом)\n- "Quedamos en que..." (договорились, что...)\n\n**Asignar tareas:**\n- "Maria, podrias encargarte de...?" (Мария, не могла бы взять на себя...?)\n- "Quien se responsabiliza de esta tarea?" (кто отвечает за эту задачу?)\n- "Tengo asignada la tarea de..." (мне поручена задача...)\n\n**Cerrar la reunion:**\n- "Para resumir lo acordado..." (подводя итог договоренностям...)\n- "La proxima reunion sera el..." (следующая встреча будет...)\n- "Gracias a todos por su participacion." (спасибо всем за участие)\n- "Levanto la sesion." (закрываю собрание)\n\n**Consejo cultural:** En muchos paises hispanohablantes, la puntualidad puede ser mas flexible que en culturas anglosajonas. Sin embargo, en el ambito empresarial formal, la puntualidad siempre es valorada. Llega 5 minutos antes para demostrar respeto.',
          textRu: 'Совещания — неотъемлемая часть деловой жизни. В испаноязычном мире собрания часто начинаются с нескольких минут неформальной беседы перед переходом к рабочим темам. Важно знать ключевые фразы для каждого этапа.\n\n**Перед собранием:**\n- "Confirmo mi asistencia a la reunion." (подтверждаю участие)\n- "No podre asistir a la reunion de manana." (не смогу присутствовать)\n- "Podemos reprogramar la reunion?" (можем перенести?)\n- "Cual es la agenda de la reunion?" (какая повестка?)\n\n**Открытие собрания:**\n- "Gracias a todos por venir." (спасибо всем за приход)\n- "Damos por iniciada la reunion." (объявляю собрание открытым)\n- "El objetivo de esta reunion es..." (цель этой встречи...)\n- "Hoy vamos a hablar sobre..." (сегодня мы поговорим о...)\n\n**Представление повестки:**\n- "En la agenda de hoy tenemos tres puntos." (в повестке три пункта)\n- "El primer punto es..." (первый пункт...)\n- "Pasamos al siguiente punto." (переходим к следующему пункту)\n\n**Предоставление слова:**\n- "Tiene la palabra Maria." (слово предоставляется Марии)\n- "Maria, quieres explicarnos...?" (Мария, не могла бы объяснить...?)\n- "Que opinas sobre esto?" (что думаешь об этом?)\n- "Algun comentario?" (есть комментарии?)\n\n**Участие в обсуждении:**\n- "Si me permite, me gustaria anadir..." (если позволите, хотел бы добавить...)\n- "Estoy de acuerdo con..." (согласен с...)\n- "No estoy seguro de estar de acuerdo." (не уверен, что согласен)\n- "Desde mi punto de vista..." (с моей точки зрения...)\n- "Podemos volver al tema principal?" (можем вернуться к главной теме?)\n\n**Принятие решений:**\n- "Estamos todos de acuerdo?" (мы все согласны?)\n- "Quien esta a favor?" (кто за?)\n- "Tomamos la decision por consenso." (принимаем решение консенсусом)\n- "Quedamos en que..." (договорились, что...)\n\n**Распределение задач:**\n- "Maria, podrias encargarte de...?" (Мария, не могла бы взять на себя...?)\n- "Quien se responsabiliza de esta tarea?" (кто отвечает за эту задачу?)\n- "Tengo asignada la tarea de..." (мне поручена задача...)\n\n**Завершение собрания:**\n- "Para resumir lo acordado..." (подводя итог договоренностям...)\n- "La proxima reunion sera el..." (следующая встреча будет...)\n- "Gracias a todos por su participacion." (спасибо всем за участие)\n- "Levanto la sesion." (закрываю собрание)\n\n**Культурный совет:** Во многих испаноязычных странах пунктуальность может быть более гибкой, чем в англосаксонских культурах. Однако в формальной деловой среде пунктуальность всегда ценится. Приходите за 5 минут до начала, чтобы проявить уважение.',
          vocab: [
            { word: 'Damos por iniciada la reunion', trans: 'Объявляем собрание открытым' },
            { word: 'El objetivo de esta reunion es...', trans: 'Цель этой встречи...' },
            { word: 'Tiene la palabra...', trans: 'Слово предоставляется...' },
            { word: 'Estoy de acuerdo / No estoy de acuerdo', trans: 'Я согласен / Я не согласен' },
            { word: 'Desde mi punto de vista', trans: 'С моей точки зрения' },
            { word: 'Quedamos en que...', trans: 'Договорились, что...' },
            { word: 'Para resumir lo acordado', trans: 'Подводя итог договорённостям' },
            { word: 'Levanto la sesion', trans: 'Закрываю собрание' }
          ]
        },
        video: { slides: [
          { emoji: ' abrir', title: 'Abrir', text: '"Damos por iniciada la reunion." / "Gracias a todos por venir."' },
          { emoji: ' objet', title: 'Objetivo', text: '"El objetivo de esta reunion es..." — цель встречи.' },
          { emoji: ' agenda', title: 'Agenda', text: '"El primer punto es..." / "Pasamos al siguiente punto."' },
          { emoji: ' palabra', title: 'Dar la palabra', text: '"Tiene la palabra Maria." — слово предоставляется.' },
          { emoji: ' deac', title: 'Acuerdo', text: '"Estoy de acuerdo" / "No estoy seguro" — согласие/несогласие.' },
          { emoji: ' punto', title: 'Punto de vista', text: '"Desde mi punto de vista..." — с моей точки зрения.' },
          { emoji: ' tarea', title: 'Asignar', text: '"Maria, podrias encargarte de...?" — поручить задачу.' },
          { emoji: ' cerrar', title: 'Cerrar', text: '"Para resumir lo acordado..." / "Levanto la sesion."' }
        ]},
        quiz: { pool: [
          { q: 'Como inicias una reunion formalmente?', options: ['Hola a todos', 'Damos por iniciada la reunion', 'Empezamos ya', 'Vamos'], answer: 1, explain: '"Damos por iniciada la reunion" — формально.' },
          { q: 'Completa: "El ___ de esta reunion es discutir el presupuesto."', options: ['tema', 'objetivo', 'punto', 'asunto'], answer: 1, explain: '"objetivo" = цель.' },
          { q: 'Como das la palabra a alguien?', options: ['Habla tu', 'Tiene la palabra Maria', 'Maria habla', 'Dime Maria'], answer: 1, explain: '"Tiene la palabra [Nombre]" = слово предоставляется.' },
          { q: 'Completa: "Estoy de ___ con la propuesta."', options: ['acuerdo', 'cuerdo', 'cuerdo', 'acuerda'], answer: 0, explain: '"de acuerdo" = согласен.' },
          { q: 'Como expresas "с моей точки зрения"?', options: ['En mi opinion', 'Desde mi punto de vista', 'Ambas', 'Ninguna'], answer: 2, explain: 'Обе фразы верны: "Desde mi punto de vista" и "En mi opinion".' },
          { q: 'Completa: "___ al siguiente punto de la agenda."', options: ['Vamos', 'Pasamos', 'Vienen', 'Estamos'], answer: 1, explain: '"Pasamos al siguiente punto" = переходим.' },
          { q: 'Como asignas una tarea?', options: ['Maria, haz esto', 'Maria, podrias encargarte de esto?', 'Maria tiene que', 'Maria, esto'], answer: 1, explain: '"podrias encargarte de...?" — вежливо.' },
          { q: 'Completa: "___ en que la entregaremos el viernes."', options: ['Quedamos', 'Estamos', 'Tenemos', 'Somos'], answer: 0, explain: '"Quedamos en que..." = договорились, что...' },
          { q: 'Como cierras una reunion?', options: ['Adios', 'Levanto la sesion', 'Me voy', 'Termina'], answer: 1, explain: '"Levanto la sesion" = закрываю собрание.' },
          { q: 'Completa: "Para ___ lo acordado..."', options: ['resumir', 'decir', 'hablar', 'ver'], answer: 0, explain: '"Para resumir lo acordado" = подводя итог.' },
          { q: 'Como pides la opinion de alguien?', options: ['Que opinas sobre esto?', 'Que es esto?', 'Cual es?', 'Donde?'], answer: 0, explain: '"Que opinas sobre esto?" = что думаешь?' },
          { q: 'Completa: "Gracias a todos por ___."', options: ['venir', 'ir', 'estar', 'hablar'], answer: 0, explain: '"por venir" = за приход.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Damos por ___ la reunion."', answer: 'iniciada', explain: '"iniciada" — собрание открыто.' },
          { type: 'fill-blank', question: 'Completa: "Estoy de ___ con la propuesta."', answer: 'acuerdo', explain: '"de acuerdo" = согласен.' },
          { type: 'choice', question: 'Como cierras una reunion formalmente?', options: ['Me voy', 'Levanto la sesion', 'Adios a todos', 'Termina'], answer: 1, explain: '"Levanto la sesion" = закрываю.' },
          { type: 'translate', question: 'Переведите: "Слово предоставляется Марии."', answer: 'Tiene la palabra Maria', explain: '"Tiene la palabra" = слово предоставляется.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['reunion', 'iniciada', 'Damos', 'por', 'la'], answer: 'Damos por iniciada la reunion', explain: 'Открытие собрания.' },
          { type: 'correct', question: 'Encuentra y corrige: "Maria, habla tu ahora."', answer: 'Maria, tiene la palabra', explain: 'Формально: "tiene la palabra", не "habla tu".' }
        ]}
      },
      {
        id: 'esb-l3', topic: 'Presentaciones profesionales',
        objective: 'Crear y presentar presentaciones profesionales en espanol con confianza.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Presentaciones Profesionales en Espanol',
          text: 'Una buena presentacion combina contenido claro, estructura logica y un lenguaje seguro. En el ambito empresarial hispanohablante, una presentacion efectiva puede marcar la diferencia entre conseguir o no un cliente, un proyecto o una inversion.\n\n**Estructura de una presentacion:**\n1. Introduccion (captar atencion y presentar el tema)\n2. Desarrollo (puntos principales con datos)\n3. Conclusion (resumen y llamada a la accion)\n4. Preguntas y respuestas\n\n**Iniciar la presentacion:**\n- "Buenos dias a todos. Gracias por su presencia." (доброе утро всем, спасибо за присутствие)\n- "Me gustaria empezar agradeciendo..." (хотел бы начать, поблагодарив...)\n- "El tema de hoy es..." (тема сегодняшнего дня...)\n- "Hoy les voy a hablar sobre..." (сегодня я расскажу вам о...)\n\n**Presentar la estructura:**\n- "Mi presentacion se divide en tres partes." (моя презентация делится на три части)\n- "En primer lugar, hablaremos de..." (во-первых, поговорим о...)\n- "A continuacion, pasaremos a..." (далее перейдем к...)\n- "Finalmente, llegaremos a..." (наконец, перейдем к...)\n\n**Mostrar datos y graficos:**\n- "Como pueden ver en este grafico..." (как видно на этом графике...)\n- "Los datos muestran que..." (данные показывают, что...)\n- "Si observamos esta cifra..." (если посмотрим на эту цифру...)\n- "Esto representa un aumento del 20%." (это представляет рост на 20%)\n\n**Senalar importancia:**\n- "Es importante destacar que..." (важно отметить, что...)\n- "Cabe senalar que..." (следует отметить, что...)\n- "Lo mas relevante es..." (самое важное...)\n- "Hay que tener en cuenta que..." (нужно учитывать, что...)\n\n**Mantener el interes:**\n- "Alguien sabe cuanto...?" (кто-нибудь знает, сколько...?)\n- "Imaginemos por un momento que..." (представим на минуту, что...)\n- "Esto nos lleva a la siguiente pregunta..." (это приводит нас к следующему вопросу...)\n\n**Concluir:**\n- "Para concluir..." (в заключение...)\n- "En resumen..." (вкратце...)\n- "Lo que quiero que se lleven de esta presentacion es..." (что я хочу, чтобы вы забрали из этой презентации...)\n- "Les invito a..." (приглашаю вас...)\n\n**Preguntas y respuestas:**\n- "Estoy abierto a sus preguntas." (открыт к вашим вопросам)\n- "Hay alguna pregunta?" (есть вопросы?)\n- "Buena pregunta. Lo que puedo decir es..." (хороший вопрос. Могу сказать...)\n- "No tengo esa informacion a mano, pero..." (нет этой информации под рукой, но...)\n\n**Consejos:**\n- Manten contacto visual con el publico\n- Habla despacio y con claridad\n- Usa pausas para dar enfasis\n- No leas las diapositivas — conversa con el publico\n- Practica antes para controlar el tiempo\n\nLa practica es fundamental. Cuantas mas presentaciones hagas en espanol, mas natural y seguro te sentiras!',
          textRu: 'Хорошая презентация сочетает ясное содержание, логичную структуру и уверенную речь. В испаноязычной деловой среде эффективная презентация может стать решающим фактором в получении клиента, проекта или инвестиции.\n\n**Структура презентации:**\n1. Введение (привлечь внимание и представить тему)\n2. Основная часть (главные пункты с данными)\n3. Заключение (резюме и призыв к действию)\n4. Вопросы и ответы\n\n**Начало презентации:**\n- "Buenos dias a todos. Gracias por su presencia." (доброе утро всем, спасибо за присутствие)\n- "Me gustaria empezar agradeciendo..." (хотел бы начать, поблагодарив...)\n- "El tema de hoy es..." (тема сегодняшнего дня...)\n- "Hoy les voy a hablar sobre..." (сегодня я расскажу вам о...)\n\n**Представление структуры:**\n- "Mi presentacion se divide en tres partes." (моя презентация делится на три части)\n- "En primer lugar, hablaremos de..." (во-первых, поговорим о...)\n- "A continuacion, pasaremos a..." (далее перейдем к...)\n- "Finalmente, llegaremos a..." (наконец, перейдем к...)\n\n**Демонстрация данных и графиков:**\n- "Como pueden ver en este grafico..." (как видно на этом графике...)\n- "Los datos muestran que..." (данные показывают, что...)\n- "Si observamos esta cifra..." (если посмотрим на эту цифру...)\n- "Esto representa un aumento del 20%." (это представляет рост на 20%)\n\n**Подчёркивание важности:**\n- "Es importante destacar que..." (важно отметить, что...)\n- "Cabe senalar que..." (следует отметить, что...)\n- "Lo mas relevante es..." (самое важное...)\n- "Hay que tener en cuenta que..." (нужно учитывать, что...)\n\n**Поддержание интереса:**\n- "Alguien sabe cuanto...?" (кто-нибудь знает, сколько...?)\n- "Imaginemos por un momento que..." (представим на минуту, что...)\n- "Esto nos lleva a la siguiente pregunta..." (это приводит нас к следующему вопросу...)\n\n**Заключение:**\n- "Para concluir..." (в заключение...)\n- "En resumen..." (вкратце...)\n- "Lo que quiero que se lleven de esta presentacion es..." (что я хочу, чтобы вы забрали из этой презентации...)\n- "Les invito a..." (приглашаю вас...)\n\n**Вопросы и ответы:**\n- "Estoy abierto a sus preguntas." (открыт к вашим вопросам)\n- "Hay alguna pregunta?" (есть вопросы?)\n- "Buena pregunta. Lo que puedo decir es..." (хороший вопрос. Могу сказать...)\n- "No tengo esa informacion a mano, pero..." (нет этой информации под рукой, но...)\n\n**Советы:**\n- Поддерживайте зрительный контакт с аудиторией\n- Говорите медленно и чётко\n- Используйте паузы для акцента\n- Не читайте слайды — беседуйте с аудиторией\n- Практикуйтесь заранее, чтобы контролировать время\n\nПрактика имеет основополагающее значение. Чем больше презентаций вы сделаете на испанском, тем естественнее и увереннее будете себя чувствовать!',
          vocab: [
            { word: 'Hoy les voy a hablar sobre...', trans: 'Сегодня расскажу вам о...' },
            { word: 'Como pueden ver en este grafico', trans: 'Как видите на этом графике' },
            { word: 'Es importante destacar que...', trans: 'Важно отметить, что...' },
            { word: 'A continuacion, pasaremos a...', trans: 'Далее перейдем к...' },
            { word: 'Para concluir... / En resumen...', trans: 'В заключение... / Вкратце...' },
            { word: 'Estoy abierto a sus preguntas', trans: 'Открыт к вашим вопросам' },
            { word: 'Los datos muestran que...', trans: 'Данные показывают, что...' },
            { word: 'Cabe senalar que...', trans: 'Следует отметить, что...' }
          ]
        },
        video: { slides: [
          { emoji: ' inicio', title: 'Iniciar', text: '"Buenos dias a todos. Hoy les voy a hablar sobre..."' },
          { emoji: ' estruc', title: 'Estructura', text: '"Mi presentacion se divide en tres partes." — план.' },
          { emoji: ' prim', title: 'En primer lugar', text: '"En primer lugar, hablaremos de..." — во-первых.' },
          { emoji: ' graf', title: 'Graficos', text: '"Como pueden ver en este grafico..." — ссылки на данные.' },
          { emoji: ' dest', title: 'Destacar', text: '"Es importante destacar que..." — подчеркнуть.' },
          { emoji: ' concluir', title: 'Concluir', text: '"Para concluir..." / "En resumen..." — заключение.' },
          { emoji: ' pregun', title: 'Preguntas', text: '"Estoy abierto a sus preguntas." — Q&A.' },
          { emoji: ' practica', title: 'Consejos', text: 'Контакт глаз, говорить медленно, не читать слайды.' }
        ]},
        quiz: { pool: [
          { q: 'Como inicias una presentacion?', options: ['Hola', 'Buenos dias a todos. Hoy les voy a hablar sobre...', 'Empiezo', 'Vamos'], answer: 1, explain: 'Формальное начало с приветствием и темой.' },
          { q: 'Completa: "Mi presentacion se ___ en tres partes."', options: ['divide', 'hace', 'tiene', 'va'], answer: 0, explain: '"se divide en" = делится на.' },
          { q: 'Como presentas un grafico?', options: ['Mira esto', 'Como pueden ver en este grafico...', 'Es un grafico', 'Grafico'], answer: 1, explain: '"Como pueden ver en este grafico..." — стандартная фраза.' },
          { q: 'Completa: "Es importante ___ que..."', options: ['decir', 'destacar', 'ver', 'saber'], answer: 1, explain: '"destacar" = отметить/подчеркнуть.' },
          { q: 'Como pasas a la siguiente parte?', options: ['Siguiente', 'A continuacion, pasaremos a...', 'Ahora', 'Vamos a'], answer: 1, explain: '"A continuacion, pasaremos a..." — переход.' },
          { q: 'Completa: "___ concluir..."', options: ['Para', 'Por', 'En', 'De'], answer: 0, explain: '"Para concluir" = в заключение.' },
          { q: 'Como invitas a preguntas?', options: ['Preguntas?', 'Estoy abierto a sus preguntas', 'Quiere preguntar?', 'Algo?'], answer: 1, explain: '"Estoy abierto a sus preguntas" — профессионально.' },
          { q: 'Completa: "Los datos ___ que las ventas aumentaron."', options: ['muestran', 'dicen', 'tienen', 'hacen'], answer: 0, explain: '"muestran" = показывают.' },
          { q: 'Como expresas "во-первых"?', options: ['Primero todo', 'En primer lugar', 'Numero uno', 'El primero'], answer: 1, explain: '"En primer lugar" = во-первых.' },
          { q: 'Completa: "Cabe ___ que el plazo es corto."', options: ['decir', 'senalar', 'ver', 'tener'], answer: 1, explain: '"Cabe senalar" = следует отметить.' },
          { q: 'Como resumes al final?', options: ['En resumen', 'En fin', 'Total', 'Fin'], answer: 0, explain: '"En resumen" = вкратце.' },
          { q: 'Completa: "Esto representa un ___ del 20%."', options: ['subida', 'aumento', 'mas', 'crece'], answer: 1, explain: '"un aumento" = рост/увеличение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Hoy les voy a ___ sobre el proyecto."', answer: 'hablar', explain: '"hablar sobre" = рассказать о.' },
          { type: 'fill-blank', question: 'Completa: "Para ___ , quiero agradecerles."', answer: 'concluir', explain: '"Para concluir" = в заключение.' },
          { type: 'choice', question: 'Como presentas un grafico?', options: ['Mira', 'Como pueden ver en este grafico', 'El grafico', 'Grafico aqui'], answer: 1, explain: 'Стандартная фраза для данных.' },
          { type: 'translate', question: 'Переведите: "Данные показывают рост на 20%."', answer: 'Los datos muestran un aumento del 20%', explain: 'datos muestran + aumento.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['preguntas', 'a', 'abierto', 'sus', 'Estoy'], answer: 'Estoy abierto a sus preguntas', explain: 'Открыт к вопросам.' },
          { type: 'correct', question: 'Encuentra y corrige: "Mi presentacion tiene tres partes."', answer: 'Mi presentacion se divide en tres partes', explain: '"se divide en" = делится на (лучше для презентаций).' }
        ]}
      },
      {
        id: 'esb-l4', topic: 'Llamadas telefonicas de negocios',
        objective: 'Realizar y recibir llamadas telefonicas profesionales en espanol con confianza.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Llamadas Telefonicas de Negocios en Espanol',
          text: 'Las llamadas telefonicas en un idioma extranjero pueden ser intimidantes, pero con las frases adecuadas y practica, se vuelven manejables. La clave esta en tener estructuras preparadas para cada situacion.\n\n**Contestar el telefono:**\n- "Buenos dias, empresa [Nombre], le atiende [Tu nombre]." (официально)\n- "[Empresa], buenos dias." (breve)\n- "Hola, le atiende [Nombre]." (menos formal)\n\n**Pedir hablar con alguien:**\n- "Podria hablar con el senor Garcia?" (могу я поговорить с...?)\n- "Me pone con el departamento de ventas?" (соедините с отделом продаж?)\n- "Quisiera hablar con Maria Lopez." (хотел бы поговорить с...)\n- "Esta disponible el senor Perez?" (доступен ли господин Перес?)\n\n**Pedir que espere:**\n- "Un momento, por favor." (один момент, пожалуйста)\n- "Le pongo en espera." (ставлю вас на удержание)\n- "Me permite un segundo?" (позволите секунду?)\n- "En seguida le comunico." (сейчас соединю)\n\n**La persona no esta disponible:**\n- "Lo siento, el senor Garcia no esta disponible en este momento." (к сожалению, недоступен)\n- "Esta en una reunion." (на совещании)\n- "No se encuentra en la oficina." (нет в офисе)\n- "Ha salido a comer." (ушел на обед)\n\n**Dejar un mensaje:**\n- "Podria dejarle un mensaje?" (могу оставить сообщение?)\n- "Le digo que llame Maria Lopez." (передайте, что звонила...)\n- "Mi numero de telefono es..." (мой номер телефона...)\n- "Podria pedirle que me devuelva la llamada?" (не могли бы попросить перезвонить?)\n\n**Pedir que repitan o aclaren:**\n- "Perdone, no le he oido bien." (извините, не расслышал)\n- "Podria repetir, por favor?" (не могли бы повторить?)\n- "No he entendido. Podria repetirlo?" (не понял. Повторить?)\n- "Puede hablar mas despacio, por favor?" (можете говорить медленнее?)\n\n**Llamar para un proposito especifico:**\n- "Le llamo respecto a..." (звоню по поводу...)\n- "El motivo de mi llamada es..." (причина моего звонка...)\n- "Me pongo en contacto con usted para..." (связываюсь с вами, чтобы...)\n\n**Confirmar informacion:**\n- "Entonces, si le he entendido bien..." (итак, если я правильно понял...)\n- "Para confirmar..." (для подтверждения...)\n- "Entonces quedamos en que..." (итак, договорились, что...)\n\n**Finalizar la llamada:**\n- "Muchas gracias por su tiempo." (спасибо за ваше время)\n- "Ha sido un placer hablar con usted." (было удовольствие говорить с вами)\n- "No dude en llamarme si necesita algo." (не стесняйтесь звонить)\n- "Hasta pronto." (до скорого)\n\n**Consejo:** Ten siempre a mano papel y boligrafo para anotar nombres, numeros y mensajes. Si no entiendes algo, es mejor pedir que repitan que fingir comprension. La honestidad es valorada en el ambito profesional.',
          textRu: 'Телефонные звонки на иностранном языке могут пугать, но с подходящими фразами и практикой они становятся выполнимыми. Ключ — иметь заранее подготовленные структуры для каждой ситуации.\n\n**Ответ на телефон:**\n- "Buenos dias, empresa [Nombre], le atiende [Tu nombre]." (официально)\n- "[Empresa], buenos dias." (кратко)\n- "Hola, le atiende [Nombre]." (менее формально)\n\n**Попросить позвать к телефону:**\n- "Podria hablar con el senor Garcia?" (могу я поговорить с...?)\n- "Me pone con el departamento de ventas?" (соедините с отделом продаж?)\n- "Quisiera hablar con Maria Lopez." (хотел бы поговорить с...)\n- "Esta disponible el senor Perez?" (доступен ли господин Перес?)\n\n**Попросить подождать:**\n- "Un momento, por favor." (один момент, пожалуйста)\n- "Le pongo en espera." (ставлю вас на удержание)\n- "Me permite un segundo?" (позволите секунду?)\n- "En seguida le comunico." (сейчас соединю)\n\n**Человек недоступен:**\n- "Lo siento, el senor Garcia no esta disponible en este momento." (к сожалению, недоступен)\n- "Esta en una reunion." (на совещании)\n- "No se encuentra en la oficina." (нет в офисе)\n- "Ha salido a comer." (ушел на обед)\n\n**Оставить сообщение:**\n- "Podria dejarle un mensaje?" (могу оставить сообщение?)\n- "Le digo que llame Maria Lopez." (передайте, что звонила...)\n- "Mi numero de telefono es..." (мой номер телефона...)\n- "Podria pedirle que me devuelva la llamada?" (не могли бы попросить перезвонить?)\n\n**Попросить повторить или уточнить:**\n- "Perdone, no le he oido bien." (извините, не расслышал)\n- "Podria repetir, por favor?" (не могли бы повторить?)\n- "No he entendido. Podria repetirlo?" (не понял. Повторить?)\n- "Puede hablar mas despacio, por favor?" (можете говорить медленнее?)\n\n**Позвонить по конкретному вопросу:**\n- "Le llamo respecto a..." (звоню по поводу...)\n- "El motivo de mi llamada es..." (причина моего звонка...)\n- "Me pongo en contacto con usted para..." (связываюсь с вами, чтобы...)\n\n**Подтверждение информации:**\n- "Entonces, si le he entendido bien..." (итак, если я правильно понял...)\n- "Para confirmar..." (для подтверждения...)\n- "Entonces quedamos en que..." (итак, договорились, что...)\n\n**Завершение звонка:**\n- "Muchas gracias por su tiempo." (спасибо за ваше время)\n- "Ha sido un placer hablar con usted." (было удовольствие говорить с вами)\n- "No dude en llamarme si necesita algo." (не стесняйтесь звонить)\n- "Hasta pronto." (до скорого)\n\n**Совет:** Всегда держите под рукой бумагу и ручку, чтобы записывать имена, номера и сообщения. Если что-то не поняли, лучше попросить повторить, чем делать вид, что поняли. Честность ценится в профессиональной среде.',
          vocab: [
            { word: 'Podria hablar con...?', trans: 'Могу я поговорить с...?' },
            { word: 'Le pongo en espera', trans: 'Ставлю вас на удержание' },
            { word: 'No esta disponible', trans: 'Недоступен (нет на месте)' },
            { word: 'Podria dejarle un mensaje?', trans: 'Могу оставить сообщение?' },
            { word: 'Podria repetir, por favor?', trans: 'Не могли бы повторить?' },
            { word: 'Le llamo respecto a...', trans: 'Звоню по поводу...' },
            { word: 'Para confirmar...', trans: 'Для подтверждения...' },
            { word: 'Muchas gracias por su tiempo', trans: 'Спасибо за ваше время' }
          ]
        },
        video: { slides: [
          { emoji: ' cont', title: 'Contestar', text: '"Buenos dias, [Empresa], le atiende [Nombre]." — как отвечать.' },
          { emoji: ' pedir', title: 'Pedir', text: '"Podria hablar con el senor Garcia?" — попросить к телефону.' },
          { emoji: ' espera', title: 'En espera', text: '"Le pongo en espera." / "Un momento, por favor." — удержание.' },
          { emoji: ' no', title: 'No disponible', text: '"No esta disponible." / "Esta en una reunion." — человека нет.' },
          { emoji: ' mens', title: 'Mensaje', text: '"Podria dejarle un mensaje?" — оставить сообщение.' },
          { emoji: ' rep', title: 'Repetir', text: '"Podria repetir, por favor?" — попросить повторить.' },
          { emoji: ' motivo', title: 'Motivo', text: '"Le llamo respecto a..." — цель звонка.' },
          { emoji: ' fin', title: 'Finalizar', text: '"Muchas gracias por su tiempo." — завершение.' }
        ]},
        quiz: { pool: [
          { q: 'Como pides hablar con alguien?', options: ['Maria, ahora', 'Podria hablar con el senor Garcia?', 'Quiero Maria', 'Dame Maria'], answer: 1, explain: '"Podria hablar con...?" — вежливо.' },
          { q: 'Completa: "Le pongo en ___."', options: ['espera', 'linea', 'telefono', 'casa'], answer: 0, explain: '"en espera" = на удержании.' },
          { q: 'Que dices si la persona no esta?', options: ['No esta', 'No esta disponible en este momento', 'No se', 'Se fue'], answer: 1, explain: '"No esta disponible" — профессионально.' },
          { q: 'Como pides dejar un mensaje?', options: ['Mensaje', 'Podria dejarle un mensaje?', 'Quiero decir algo', 'Dile'], answer: 1, explain: '"Podria dejarle un mensaje?" — вежливо.' },
          { q: 'No entiendes. Que dices?', options: ['Que?', 'No entiendo', 'Podria repetir, por favor?', 'Otra vez'], answer: 2, explain: '"Podria repetir, por favor?" — профессионально.' },
          { q: 'Completa: "Le ___ respecto al contrato."', options: ['llamo', 'hablo', 'digo', 'tengo'], answer: 0, explain: '"Le llamo respecto a..." = звоню по поводу.' },
          { q: 'Como pides que hablen mas lento?', options: ['Mas lento', 'Puede hablar mas despacio, por favor?', 'Despacio', 'Lento'], answer: 1, explain: '"Puede hablar mas despacio?" — вежливо.' },
          { q: 'Completa: "___ confirmar, el numero es 555-1234."', options: ['Para', 'Por', 'En', 'Con'], answer: 0, explain: '"Para confirmar" = для подтверждения.' },
          { q: 'Como finalizas la llamada?', options: ['Adios', 'Muchas gracias por su tiempo', 'Chao', 'Vale'], answer: 1, explain: '"Muchas gracias por su tiempo" — профессионально.' },
          { q: 'Completa: "Me ___ en contacto con usted para informarle."', options: ['pongo', 'tengo', 'soy', 'estoy'], answer: 0, explain: '"Me pongo en contacto" = связываюсь.' },
          { q: 'Como preguntas si alguien esta disponible?', options: ['Esta?', 'Esta disponible el senor Perez?', 'Perez?', 'Tiene a Perez?'], answer: 1, explain: '"Esta disponible...?" — правильно.' },
          { q: 'Completa: "Entonces, si le he ___ bien..."', options: ['visto', 'oido', 'entendido', 'hablado'], answer: 2, explain: '"si le he entendido bien" = если правильно понял.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Podria hablar ___ el senor Garcia?"', answer: 'con', explain: '"hablar con" = говорить с.' },
          { type: 'fill-blank', question: 'Completa: "Le pongo en ___."', answer: 'espera', explain: '"en espera" = на удержании.' },
          { type: 'choice', question: 'No entiendes algo. Que dices?', options: ['Que?', 'No se', 'Podria repetir, por favor?', 'Otra vez'], answer: 2, explain: 'Вежливо попросить повторить.' },
          { type: 'translate', question: 'Переведите: "Звоню по поводу контракта."', answer: 'Le llamo respecto al contrato', explain: '"respecto a" = по поводу.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['tiempo', 'su', 'gracias', 'Muchas', 'por'], answer: 'Muchas gracias por su tiempo', explain: 'Завершение звонка.' },
          { type: 'correct', question: 'Encuentra y corrige: "Quiero hablar Garcia."', answer: 'Quisiera hablar con el senor Garcia', explain: 'Вежливый тон + "con" + титул.' }
        ]}
      },
      {
        id: 'esb-l5', topic: 'Entrevistas de trabajo',
        objective: 'Preparar y realizar entrevistas de trabajo en espanol con confianza y profesionalismo.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Entrevistas de Trabajo en Espanol',
          text: 'La entrevista de trabajo es el momento crucial en la busqueda de empleo. En el mundo hispanohablante, las entrevistas pueden combinar formalidad profesional con cierta calidez personal. La preparacion es la clave del exito.\n\n**Antes de la entrevista:**\n- Investiga la empresa: "Conozco su empresa porque..."\n- Prepara respuestas para preguntas comunes\n- Ten copias de tu CV en espanol\n- Llega 10-15 minutos antes\n\n**Saludo inicial:**\n- "Buenos dias, mucho gusto." (доброе утро, очень приятно)\n- "Gracias por recibirme." (спасибо, что приняли)\n- "Es un placer estar aqui." (для меня удовольствие быть здесь)\n\n**Presentarte (sobre ti):**\n- "Me llamo [Nombre] y soy [profesion]."\n- "Tengo cinco anos de experiencia en..." (у меня 5 лет опыта в...)\n- "Trabe en [empresa] como [cargo]." (работал в... как...)\n- "Mi especialidad es..." (моя специализация...)\n- "Me formé en [universidad/institucion]."\n\n**Preguntas comunes y respuestas:**\n\n1. "Cuenteme sobre usted." (расскажите о себе)\nRespuesta: "Soy [profesion] con experiencia en [area]. En mi ultimo trabajo me encargaba de..."\n\n2. "Por que quiere trabajar en esta empresa?" (почему хотите работать здесь?)\nRespuesta: "Admiro su trabajo en [area] y me gustaria aportar mi experiencia en..."\n\n3. "Cuales son sus puntos fuertes?" (ваши сильные стороны?)\nRespuesta: "Soy organizado, proactivo y trabajo bien en equipo."\n\n4. "Cuales son sus debilidades?" (ваши слабые стороны?)\nRespuesta: "A veces soy demasiado perfeccionista, pero estoy trabajando en delegar mejor."\n\n5. "Donde se ve en cinco anos?" (где видите себя через 5 лет?)\nRespuesta: "Me gustaria crecer profesionalmente dentro de la empresa y asumir mas responsabilidades."\n\n**Hablar de experiencia:**\n- "En mi puesto anterior, fui responsable de..." (на прежней должности отвечал за...)\n- "Logre aumentar las ventas en un 30%." (смог увеличить продажи на 30%)\n- "Dirigi un equipo de diez personas." (руководил командой из 10 человек)\n- "Implemente un nuevo sistema que..." (внедрил новую систему, которая...)\n\n**Hablar de motivacion:**\n- "Me interesa este puesto porque..." (меня интересует эта должность, потому что...)\n- "Creo que puedo aportar valor a la empresa." (верю, что могу принести пользу)\n- "Quiero desarrollarme en el area de..." (хочу развиваться в области...)\n\n**Preguntar al final:**\n- "Que oportunidades de crecimiento ofrece la empresa?" (какие возможности роста?)\n- "Como es un dia tipico en este puesto?" (как выглядит типичный день?)\n- "Cuando podria tener una respuesta?" (когда могу получить ответ?)\n\n**Cerrar la entrevista:**\n- "Muchas gracias por su tiempo y consideracion." (спасибо за время и внимание)\n- "Quedo a su disposicion para cualquier duda." (к вашим услугам при любых вопросах)\n- "Espero tener la oportunidad de trabajar con ustedes."\n\n**Errores comunes:**\n- No investigar la empresa antes\n- Dar respuestas demasiado vagas o demasiado largas\n- Hablar negativamente de empleadores anteriores\n- No hacer preguntas al final\n\nLa confianza se nota. Prepara, practica y muestra tu mejor version profesional!',
          textRu: 'Собеседование при приеме на работу — ключевой момент в поиске работы. В испаноязычном мире собеседования могут сочетать профессиональную формальность с определённым личным теплом. Подготовка — ключ к успеху.\n\n**Перед собеседованием:**\n- Изучите компанию: "Conozco su empresa porque..."\n- Подготовьте ответы на частые вопросы\n- Имейте копии резюме на испанском\n- Приходите за 10-15 минут до начала\n\n**Начальное приветствие:**\n- "Buenos dias, mucho gusto." (доброе утро, очень приятно)\n- "Gracias por recibirme." (спасибо, что приняли)\n- "Es un placer estar aqui." (для меня удовольствие быть здесь)\n\n**Представление себя (о себе):**\n- "Me llamo [Nombre] y soy [profesion]."\n- "Tengo cinco anos de experiencia en..." (у меня 5 лет опыта в...)\n- "Trabe en [empresa] como [cargo]." (работал в... как...)\n- "Mi especialidad es..." (моя специализация...)\n- "Me forme en [universidad/institucion]."\n\n**Частые вопросы и ответы:**\n\n1. "Cuenteme sobre usted." (расскажите о себе)\nОтвет: "Soy [profesion] con experiencia en [area]. En mi ultimo trabajo me encargaba de..."\n\n2. "Por que quiere trabajar en esta empresa?" (почему хотите работать здесь?)\nОтвет: "Admiro su trabajo en [area] y me gustaria aportar mi experiencia en..."\n\n3. "Cuales son sus puntos fuertes?" (ваши сильные стороны?)\nОтвет: "Soy organizado, proactivo y trabajo bien en equipo."\n\n4. "Cuales son sus debilidades?" (ваши слабые стороны?)\nОтвет: "A veces soy demasiado perfeccionista, pero estoy trabajando en delegar mejor."\n\n5. "Donde se ve en cinco anos?" (где видите себя через 5 лет?)\nОтвет: "Me gustaria crecer profesionalmente dentro de la empresa y asumir mas responsabilidades."\n\n**Рассказ об опыте:**\n- "En mi puesto anterior, fui responsable de..." (на прежней должности отвечал за...)\n- "Logre aumentar las ventas en un 30%." (смог увеличить продажи на 30%)\n- "Dirigi un equipo de diez personas." (руководил командой из 10 человек)\n- "Implemente un nuevo sistema que..." (внедрил новую систему, которая...)\n\n**Рассказ о мотивации:**\n- "Me interesa este puesto porque..." (меня интересует эта должность, потому что...)\n- "Creo que puedo aportar valor a la empresa." (верю, что могу принести пользу)\n- "Quiero desarrollarme en el area de..." (хочу развиваться в области...)\n\n**Вопросы в конце:**\n- "Que oportunidades de crecimiento ofrece la empresa?" (какие возможности роста?)\n- "Como es un dia tipico en este puesto?" (как выглядит типичный день?)\n- "Cuando podria tener una respuesta?" (когда могу получить ответ?)\n\n**Завершение собеседования:**\n- "Muchas gracias por su tiempo y consideracion." (спасибо за время и внимание)\n- "Quedo a su disposicion para cualquier duda." (к вашим услугам при любых вопросах)\n- "Espero tener la oportunidad de trabajar con ustedes."\n\n**Частые ошибки:**\n- Не изучить компанию заранее\n- Давать слишком расплывчатые или слишком длинные ответы\n- Говорить негативно о прежних работодателях\n- Не задавать вопросы в конце\n\nУверенность заметна. Готовьтесь, практикуйтесь и покажите свою лучшую профессиональную версию!',
          vocab: [
            { word: 'Cuenteme sobre usted', trans: 'Расскажите о себе' },
            { word: 'Tengo ... anos de experiencia', trans: 'У меня ... лет опыта' },
            { word: 'puntos fuertes / debilidades', trans: 'Сильные стороны / слабости' },
            { word: 'fui responsable de...', trans: 'отвечал за...' },
            { word: 'Por que quiere trabajar aqui?', trans: 'Почему хотите работать здесь?' },
            { word: 'Me interesa este puesto porque...', trans: 'Меня интересует эта должность, потому что...' },
            { word: 'Que oportunidades de crecimiento?', trans: 'Какие возможности роста?' },
            { word: 'Quedo a su disposicion', trans: 'К вашим услугам' }
          ]
        },
        video: { slides: [
          { emoji: ' inicio', title: 'Inicio', text: '"Buenos dias, mucho gusto. Gracias por recibirme."' },
          { emoji: ' sobre', title: 'Sobre usted', text: '"Cuenteme sobre usted." — расскажите о себе.' },
          { emoji: ' exp', title: 'Experiencia', text: '"Tengo cinco anos de experiencia en..."' },
          { emoji: ' fuerte', title: 'Puntos fuertes', text: '"Soy organizado, proactivo y trabajo bien en equipo."' },
          { emoji: ' debil', title: 'Debilidades', text: '"A veces soy demasiado perfeccionista." — честно, но с решением.' },
          { emoji: ' motiv', title: 'Motivacion', text: '"Me interesa este puesto porque..."' },
          { emoji: ' pregun', title: 'Sus preguntas', text: '"Que oportunidades de crecimiento ofrece la empresa?"' },
          { emoji: ' cierre', title: 'Cierre', text: '"Muchas gracias por su tiempo y consideracion."' }
        ]},
        quiz: { pool: [
          { q: 'Como te presentas en una entrevista?', options: ['Hola', 'Buenos dias, mucho gusto. Gracias por recibirme', 'Que tal', 'Aqui estoy'], answer: 1, explain: 'Формальное приветствие с благодарностью.' },
          { q: 'Completa: "Tengo cinco ___ de experiencia."', options: ['anos', 'tiempos', 'veces', 'dias'], answer: 0, explain: '"anos de experiencia" = лет опыта.' },
          { q: 'Como hablas de tu responsabilidad pasada?', options: ['Hice', 'Fui responsable de', 'Tuve', 'Trabe'], answer: 1, explain: '"Fui responsable de" = отвечал за.' },
          { q: 'Completa: "Cuales son sus puntos ___?"', options: ['buenos', 'fuertes', 'altos', 'grandes'], answer: 1, explain: '"puntos fuertes" = сильные стороны.' },
          { q: 'Como respondes "Por que quiere trabajar aqui?"', options: ['Por dinero', 'Me interesa este puesto porque...', 'No se', 'Porque si'], answer: 1, explain: '"Me interesa este puesto porque..." — профессионально.' },
          { q: 'Completa: "___ sobre usted." (расскажите о себе)', options: ['Hable', 'Cuenteme', 'Diga', 'Cuente'], answer: 1, explain: '"Cuenteme sobre usted" = расскажите о себе.' },
          { q: 'Como preguntas sobre crecimiento?', options: ['Crecimiento?', 'Que oportunidades de crecimiento ofrece?', 'Hay crecimiento?', 'Promocion?'], answer: 1, explain: '"Que oportunidades de crecimiento ofrece?" — профессионально.' },
          { q: 'Completa: "Quedo a su ___ para cualquier duda."', options: ['servicio', 'disposicion', 'casa', 'tiempo'], answer: 1, explain: '"a su disposicion" = к вашим услугам.' },
          { q: 'Como cierras la entrevista?', options: ['Adios', 'Muchas gracias por su tiempo y consideracion', 'Hasta luego', 'Vale'], answer: 1, explain: 'Формальное завершение с благодарностью.' },
          { q: 'Completa: "En mi puesto ___, fui responsable de..."', options: ['nuevo', 'anterior', 'actual', 'futuro'], answer: 1, explain: '"anterior" = предыдущий.' },
          { q: 'Como hablas de un logro?', options: ['Hice bien', 'Logre aumentar las ventas en un 30%', 'Fue bien', 'Gane'], answer: 1, explain: '"Logre + resultado" — конкретно и профессионально.' },
          { q: 'Completa: "Donde se ve en cinco ___?"', options: ['dias', 'anos', 'meses', 'semanas'], answer: 1, explain: '"cinco anos" — стандартный вопрос.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Tengo tres anos de ___ en marketing."', answer: 'experiencia', explain: '"experiencia" = опыт.' },
          { type: 'fill-blank', question: 'Completa: "Quedo a su ___ para cualquier duda."', answer: 'disposicion', explain: '"a su disposicion" = к вашим услугам.' },
          { type: 'choice', question: 'Como preguntas sobre oportunidades?', options: ['Hay trabajo?', 'Que oportunidades de crecimiento ofrece?', 'Puedo crecer?', 'Promocion?'], answer: 1, explain: 'Профессиональная формулировка.' },
          { type: 'translate', question: 'Переведите: "Я отвечал за команду из 10 человек."', answer: 'Fui responsable de un equipo de diez personas', explain: '"fui responsable de" + equipo.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['su', 'gracias', 'tiempo', 'Muchas', 'por'], answer: 'Muchas gracias por su tiempo', explain: 'Благодарность за время.' },
          { type: 'correct', question: 'Encuentra y corrige: "Mis debilidades son nada."', answer: 'Una area de mejora es la delegacion, pero estoy trabajando en ello', explain: 'Позитивный ответ с планом улучшения.' }
        ]}
      },
      {
        id: 'esb-l6', topic: 'Negociaciones',
        objective: 'Negociar acuerdos comerciales en espanol con tacto y efectividad.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Negociaciones Comerciales en Espanol',
          text: 'La negociacion es un arte que combina estrategia, comunicacion y relacion interpersonal. En el mundo hispanohablante, las negociaciones suelen valorar tanto los resultados como la relacion personal. No se trata solo de ganar, sino de construir acuerdos sostenibles.\n\n**Principios de la negociacion:**\n1. Preparacion: conoce tus objetivos, tu limite y los del contrario\n2. Escucha activa: entiende las necesidades del otro\n3. Flexibilidad: este abierto a alternativas\n4. Asertividad: defiende tus intereses con respeto\n5. Busca ganar-ganar: acuerdos mutuamente beneficiosos\n\n**Abrir la negociacion:**\n- "Antes de empezar, me gustaria agradecer su tiempo." (перед началом, благодарю за время)\n- "Mi objetivo hoy es llegar a un acuerdo que beneficie a ambas partes." (моя цель — достичь соглашения, выгодного обеим сторонам)\n- "Espero que podamos encontrar una solucion mutuamente satisfactoria." (надеюсь найти взаимовыгодное решение)\n\n**Presentar tu propuesta:**\n- "Nuestra propuesta es la siguiente..." (наше предложение следующее...)\n- "Nos gustaria proponer..." (мы хотели бы предложить...)\n- "En base a nuestro analisis, sugerimos..." (на основе анализа предлагаем...)\n- "Las condiciones que ofrecemos son..." (предлагаемые условия...)\n\n**Expresar acuerdo parcial:**\n- "Estamos de acuerdo en parte, pero..." (частично согласны, но...)\n- "Ese punto nos parece razonable, sin embargo..." (этот пункт кажется разумным, однако...)\n- "Compartimos su opinion sobre..." (разделяем ваше мнение о...)\n- "Entiendo su posicion, pero desde nuestra perspectiva..." (понимаю вашу позицию, но с нашей точки зрения...)\n\n**Hacer concesiones:**\n- "Estaríamos dispuestos a..." (мы были бы готовы...)\n- "Si ustedes pueden..., nosotros podriamos..." (если вы сможете..., мы могли бы...)\n- "Como contrapartida, pedimos..." (в качестве встречного шага просим...)\n- "Podriamos ceder en... a cambio de..." (могли бы уступить в... взамен на...)\n\n**Rechazar una oferta:**\n- "Lamentablemente, no podemos aceptar esa condicion." (к сожалению, не можем принять)\n- "Esa propuesta no es viable para nosotros en este momento." (предложение не осуществимо для нас)\n- "Nos resulta dificil aceptar..." (нам трудно принять...)\n- "Temo que eso este fuera de nuestras posibilidades." (боюсь, это вне наших возможностей)\n\n**Contraoferta:**\n- "Que les parece si...?" (что если...?)\n- "Como alternativa, proponemos..." (как альтернатива предлагаем...)\n- "Podriamos reconsiderar si..." (могли бы пересмотреть, если...)\n\n**Cerrar el trato:**\n- "Creo que hemos llegado a un acuerdo." (думаю, мы достигли соглашения)\n- "Quedamos en que..." (договорились, что...)\n- "Procedemos a redactar el contrato?" (переходим к составлению контракта?)\n- "Me parece un acuerdo justo para ambas partes." (кажется, справедливое соглашение)\n\n**Consejo cultural:** En las culturas hispanohablantes, la confianza personal es fundamental. No tengas prisa por cerrar el trato. Dedica tiempo a conocer a tu contraparte. Una comida de negocios puede ser tan importante como una reunion formal.',
          textRu: 'Переговоры — это искусство, сочетающее стратегию, общение и межличностные отношения. В испаноязычном мире на переговорах ценят как результаты, так и личные отношения. Речь идёт не только о победе, но и о построении устойчивых соглашений.\n\n**Принципы переговоров:**\n1. Подготовка: знайте свои цели, свой предел и пределы противоположной стороны\n2. Активное слушание: понимайте потребности другой стороны\n3. Гибкость: будьте открыты к альтернативам\n4. Уверенность: отстаивайте свои интересы с уважением\n5. Поиск выигрыш-выигрыш: взаимовыгодные соглашения\n\n**Открытие переговоров:**\n- "Antes de empezar, me gustaria agradecer su tiempo." (перед началом, благодарю за время)\n- "Mi objetivo hoy es llegar a un acuerdo que beneficie a ambas partes." (моя цель — достичь соглашения, выгодного обеим сторонам)\n- "Espero que podamos encontrar una solucion mutuamente satisfactoria." (надеюсь найти взаимовыгодное решение)\n\n**Представление предложения:**\n- "Nuestra propuesta es la siguiente..." (наше предложение следующее...)\n- "Nos gustaria proponer..." (мы хотели бы предложить...)\n- "En base a nuestro analisis, sugerimos..." (на основе анализа предлагаем...)\n- "Las condiciones que ofrecemos son..." (предлагаемые условия...)\n\n**Выражение частичного согласия:**\n- "Estamos de acuerdo en parte, pero..." (частично согласны, но...)\n- "Ese punto nos parece razonable, sin embargo..." (этот пункт кажется разумным, однако...)\n- "Compartimos su opinion sobre..." (разделяем ваше мнение о...)\n- "Entiendo su posicion, pero desde nuestra perspectiva..." (понимаю вашу позицию, но с нашей точки зрения...)\n\n**Уступки:**\n- "Estaríamos dispuestos a..." (мы были бы готовы...)\n- "Si ustedes pueden..., nosotros podriamos..." (если вы сможете..., мы могли бы...)\n- "Como contrapartida, pedimos..." (в качестве встречного шага просим...)\n- "Podriamos ceder en... a cambio de..." (могли бы уступить в... взамен на...)\n\n**Отказ от предложения:**\n- "Lamentablemente, no podemos aceptar esa condicion." (к сожалению, не можем принять)\n- "Esa propuesta no es viable para nosotros en este momento." (предложение не осуществимо для нас)\n- "Nos resulta dificil aceptar..." (нам трудно принять...)\n- "Temo que eso este fuera de nuestras posibilidades." (боюсь, это вне наших возможностей)\n\n**Встречное предложение:**\n- "Que les parece si...?" (что если...?)\n- "Como alternativa, proponemos..." (как альтернатива предлагаем...)\n- "Podriamos reconsiderar si..." (могли бы пересмотреть, если...)\n\n**Заключение сделки:**\n- "Creo que hemos llegado a un acuerdo." (думаю, мы достигли соглашения)\n- "Quedamos en que..." (договорились, что...)\n- "Procedemos a redactar el contrato?" (переходим к составлению контракта?)\n- "Me parece un acuerdo justo para ambas partes." (кажется, справедливое соглашение)\n\n**Культурный совет:** В испаноязычных культурах личное доверие имеет основополагающее значение. Не торопитесь закрыть сделку. Уделите время знакомству с собеседником. Деловой обед может быть так же важен, как формальная встреча.',
          vocab: [
            { word: 'beneficie a ambas partes', trans: 'Выгодно обеим сторонам' },
            { word: 'Nos gustaria proponer...', trans: 'Мы хотели бы предложить...' },
            { word: 'Estariamos dispuestos a...', trans: 'Мы были бы готовы...' },
            { word: 'Como contrapartida, pedimos...', trans: 'Встречным шагом просим...' },
            { word: 'Lamentablemente, no podemos aceptar', trans: 'К сожалению, не можем принять' },
            { word: 'Que les parece si...?', trans: 'Что если...?' },
            { word: 'Hemos llegado a un acuerdo', trans: 'Мы достигли соглашения' },
            { word: 'Procedemos a redactar el contrato?', trans: 'Переходим к составлению контракта?' }
          ]
        },
        video: { slides: [
          { emoji: ' abrir', title: 'Abrir', text: '"Mi objetivo es llegar a un acuerdo que beneficie a ambas partes."' },
          { emoji: ' prop', title: 'Proponer', text: '"Nuestra propuesta es la siguiente..." / "Nos gustaria proponer..."' },
          { emoji: ' parcial', title: 'Acuerdo parcial', text: '"Estamos de acuerdo en parte, pero..." — частичное согласие.' },
          { emoji: ' ceder', title: 'Conceder', text: '"Estaríamos dispuestos a... a cambio de..." — уступить.' },
          { emoji: ' rech', title: 'Rechazar', text: '"Lamentablemente, no podemos aceptar esa condicion."' },
          { emoji: ' contra', title: 'Contraoferta', text: '"Que les parece si...?" / "Como alternativa, proponemos..."' },
          { emoji: ' cerrar', title: 'Cerrar', text: '"Hemos llegado a un acuerdo." / "Procedemos a redactar el contrato?"' },
          { emoji: ' conf', title: 'Confianza', text: 'В испаноязычной культуре доверие важнее спешки. Не торопись.' }
        ]},
        quiz: { pool: [
          { q: 'Como abres una negociacion?', options: ['Vamos', 'Mi objetivo es llegar a un acuerdo que beneficie a ambas partes', 'Dame', 'Quiero ganar'], answer: 1, explain: 'Формальное открытие с акцентом на обоюдную выгоду.' },
          { q: 'Completa: "Nos gustaria ___ una alternativa."', options: ['dar', 'proponer', 'tener', 'hacer'], answer: 1, explain: '"proponer" = предложить.' },
          { q: 'Como expresas acuerdo parcial?', options: ['Si', 'No', 'Estamos de acuerdo en parte, pero...', 'Tal vez'], answer: 2, explain: '"de acuerdo en parte, pero..." — частичное согласие.' },
          { q: 'Completa: "Estaríamos ___ a negociar el precio."', options: ['listo', 'dispuestos', 'de acuerdo', 'contentos'], answer: 1, explain: '"dispuestos a" = готовы к.' },
          { q: 'Como rechazas una oferta?', options: ['No', 'Lamentablemente, no podemos aceptar esa condicion', 'Imposible', 'Nunca'], answer: 1, explain: 'Вежливый, но твёрдый отказ.' },
          { q: 'Completa: "Como ___, pedimos mejoras en el plazo."', options: ['contrapartida', 'solicitud', 'oferta', 'respuesta'], answer: 0, explain: '"Como contrapartida" = встречным шагом.' },
          { q: 'Como haces una contraoferta?', options: ['Otro', 'Que les parece si...?', 'No me gusta', 'Cambialo'], answer: 1, explain: '"Que les parece si...?" — вежливая альтернатива.' },
          { q: 'Completa: "Hemos ___ a un acuerdo."', options: ['llegado', 'visto', 'hecho', 'tenido'], answer: 0, explain: '"llegado a un acuerdo" = достигли соглашения.' },
          { q: 'Como cierras el trato?', options: ['Listo', 'Procedemos a redactar el contrato?', 'Adios', 'Vale'], answer: 1, explain: '"Procedemos a redactar el contrato?" — переход к контракту.' },
          { q: 'Completa: "Esa propuesta no es ___ para nosotros."', options: ['buena', 'viable', 'posible', 'real'], answer: 1, explain: '"no es viable" = неосуществимо.' },
          { q: 'Como pides algo a cambio?', options: ['Quiero mas', 'A cambio de... pedimos...', 'Dame', 'Mas'], answer: 1, explain: '"A cambio de... pedimos..." — встречное условие.' },
          { q: 'Completa: "Me parece un ___ justo para ambas partes."', options: ['precio', 'acuerdo', 'trato', 'contrato'], answer: 1, explain: '"un acuerdo" = соглашение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Nos gustaria ___ una solucion alternativa."', answer: 'proponer', explain: '"proponer" = предложить.' },
          { type: 'fill-blank', question: 'Completa: "Hemos ___ a un acuerdo."', answer: 'llegado', explain: '"llegar a un acuerdo" = достичь соглашения.' },
          { type: 'choice', question: 'Como rechazas educadamente?', options: ['No', 'Imposible', 'Lamentablemente, no podemos aceptar', 'Nunca'], answer: 2, explain: 'Вежливый, но твёрдый отказ.' },
          { type: 'translate', question: 'Переведите: "Мы были бы готовы уступить в цене."', answer: 'Estaríamos dispuestos a ceder en el precio', explain: '"dispuestos a ceder" = готовы уступить.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['acuerdo', 'un', 'hemos', 'llegado', 'a'], answer: 'hemos llegado a un acuerdo', explain: 'Достигли соглашения.' },
          { type: 'correct', question: 'Encuentra y corrige: "No puedo aceptar, es imposible."', answer: 'Lamentablemente, no podemos aceptar esa condicion', explain: 'Вежливый и профессиональный отказ.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._spanish_course_2 = COURSE;
})(window);
