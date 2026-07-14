/* ============================================================
   AES Paid Spanish Course 3: Gramatica Espanola Pro (A2-B1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'es-grammar',
    title: 'Gramatica Espanola Pro',
    price: 1000, oldPrice: 1990,
    level: 'A2-B1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'lavender',
    art: ['#E5DAF0', '#CDBCE6'],
    tagline: 'Master Spanish grammar. 6 modules with exercises.',
    lessons: [
      {
        id: 'esg-l1', topic: 'Ser vs Estar',
        objective: 'Dominar la diferencia entre los verbos "ser" y "estar" en todos los contextos.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Ser vs Estar: Uso Avanzado',
          text: 'Los verbos "ser" y "estar" son dos de los verbos mas importantes del espanol. Ambos significan "to be" en ingles, pero se usan en contextos diferentes. Entender la diferencia es fundamental para hablar espanol con precision.\n\n**Usos de SER:**\n1. Identidad: "Soy Maria." / "Eres mi amigo."\n2. Origen y nacionalidad: "Soy de Mexico." / "Es argentina."\n3. Profesion: "Es medico." / "Somos profesores."\n4. Caracteristicas permanentes: "El cielo es azul." / "La mesa es de madera."\n5. Descripcion: "Es alto y delgado."\n6. Hora, dia, fecha: "Son las tres." / "Hoy es lunes." / "Es el 15 de marzo."\n7. Posesion: "El coche es mio."\n8. Material: "Es de plastico." / "Es de oro."\n9. Lugar de eventos: "La fiesta es en mi casa."\n\n**Usos de ESTAR:**\n1. Ubicacion fisica: "Madrid esta en Espana." / "El libro esta en la mesa."\n2. Estados temporales: "Estoy cansado." / "Esta enfermo."\n3. Emociones: "Estamos felices." / "Esta triste."\n4. Accion progresiva: "Estoy comiendo." / "Esta lloviendo."\n5. Estado civil: "Esta casado." / "Estoy soltero."\n6. Resultado de una accion: "La puerta esta abierta." / "El vaso esta roto."\n7. Clima temporal: "Esta nublado hoy."\n\n**Conjugacion de SER:**\nyo soy, tu eres, el/ella/usted es, nosotros somos, vosotros sois, ellos/ellas/ustedes son.\n\n**Conjugacion de ESTAR:**\nyo estoy, tu estas, el/ella/usted esta, nosotros estamos, vosotros estais, ellos/ellas/ustedes estan.\n\n**Casos dificiles con adjetivos:**\nAlgunos adjetivos cambian de significado segun se usen con "ser" o "estar":\n\n- "ser aburrido" = быть скучным (характер) / "estar aburrido" = скучать (состояние)\n- "ser listo" = быть умным / "estar listo" = быть готовым\n- "ser rico" = быть богатым / "estar rico" = быть вкусным\n- "ser verde" = быть зелёным (цвет/незрелый) / "estar verde" = быть незрелым\n- "ser bueno" = быть хорошим / "estar bueno" = быть вкусным/привлекательным\n\n**Regla del pretérito participio:**\nPara describir el RESULTADO de una accion, usa estar + participio:\n- "La puerta esta cerrada." (дверь закрыта — результат)\n- "El trabajo esta terminado." (работа закончена)\n- "El cafe esta frio." (кофе остыл)\n\n**Errores comunes:**\n- "Yo estoy profesor." WRONG -> "Yo soy profesor." (профессия)\n- "Madrid es en Espana." WRONG -> "Madrid esta en Espana." (место)\n- "Estoy de Mexico." WRONG -> "Soy de Mexico." (происхождение)\n- "Es lloviendo." WRONG -> "Esta lloviendo." (прогрессив)\n\n**Truco para recordar:**\nSER = DOCTOR (Description, Occupation, Characteristic, Time, Origin, Relationship)\nESTAR = PLACE (Position, Location, Action, Condition, Emotion)\n\nCon practica, la diferencia entre ser y estar se vuelve intuitiva. Lo importante es pensar: "Es permanente o temporal?" y "Es ubicacion?"',
          vocab: [
            { word: 'soy / estoy', trans: 'я есть (постоянно) / я (временно)' },
            { word: 'eres / estas', trans: 'ты есть / ты (временно)' },
            { word: 'es / esta', trans: 'он/она есть / он/она (временно)' },
            { word: 'somos / estamos', trans: 'мы есть / мы (временно)' },
            { word: 'son / estan', trans: 'они есть / они (временно)' },
            { word: 'Soy de + pais', trans: 'Я из (происхождение) = ser' },
            { word: 'Esta en + lugar', trans: 'Находится в (место) = estar' },
            { word: 'Esta + -ando/-iendo', trans: 'Делает сейчас (прогрессив) = estar' }
          ]
        },
        video: { slides: [
          { emoji: ' ser', title: 'SER', text: 'Постоянное: идентичность, происхождение, профессия, характеристики.' },
          { emoji: ' estar', title: 'ESTAR', text: 'Временное: эмоции, состояние, местонахождение, действие.' },
          { emoji: ' soy', title: 'yo soy / estoy', text: 'soy = я есть. estoy = я (временно). 1 лицо.' },
          { emoji: ' lugar', title: 'Ubicacion', text: 'Место = estar. "Madrid esta en Espana." Не ser.' },
          { emoji: ' profesion', title: 'Profesion', text: 'Профессия = ser. "Soy profesor." Не estar.' },
          { emoji: ' hora', title: 'Hora', text: 'Время = ser. "Son las tres." Не estar.' },
          { emoji: ' accion', title: 'Progresivo', text: 'Действие сейчас = estar + -ando/-iendo. "Estoy comiendo."' },
          { emoji: ' DOCTOR', title: 'Truco SER', text: 'DOCTOR: Description, Occupation, Characteristic, Time, Origin, Relationship.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Yo ___ de Argentina."', options: ['estoy', 'soy', 'es', 'esta'], answer: 1, explain: 'Происхождение = ser. "Soy de Argentina".' },
          { q: 'Completa: "Madrid ___ en Espana."', options: ['es', 'esta', 'soy', 'estoy'], answer: 1, explain: 'Местонахождение = estar.' },
          { q: 'Completa: "Yo ___ medico."', options: ['estoy', 'soy', 'estas', 'eres'], answer: 1, explain: 'Профессия = ser.' },
          { q: 'Completa: "___ las cinco." (время)', options: ['Esta', 'Es', 'Estan', 'Son'], answer: 3, explain: 'Время = ser. "Son las cinco".' },
          { q: 'Completa: "___ lloviendo."', options: ['Es', 'Esta', 'Son', 'Estan'], answer: 1, explain: 'Прогрессив = estar. "Esta lloviendo".' },
          { q: 'Completa: "Nosotros ___ cansados."', options: ['somos', 'estamos', 'es', 'esta'], answer: 1, explain: 'Состояние = estar.' },
          { q: 'Cual es correcto?', options: ['Yo estoy profesor', 'Yo soy profesor', 'Ambas', 'Ninguna'], answer: 1, explain: 'Профессия = ser.' },
          { q: 'Cual es correcto?', options: ['El libro es en la mesa', 'El libro esta en la mesa', 'Ambas', 'Ninguna'], answer: 1, explain: 'Местонахождение = estar.' },
          { q: 'Completa: "Tu ___ Maria."', options: ['estas', 'eres', 'esta', 'es'], answer: 1, explain: 'Идентичность = ser.' },
          { q: 'Completa: "Ellos ___ de Cuba."', options: ['estan', 'son', 'esta', 'es'], answer: 1, explain: 'Происхождение = ser.' },
          { q: 'Completa: "Estoy ___ ." (я ем сейчас)', options: ['comer', 'comiendo', 'como', 'comido'], answer: 1, explain: 'estar + -iendo = прогрессив.' },
          { q: 'Completa: "La puerta ___ abierta." (результат)', options: ['es', 'esta', 'somos', 'estoy'], answer: 1, explain: 'Результат действия = estar + participio.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Yo ___ de Espana."', answer: 'soy', explain: 'Происхождение = ser.' },
          { type: 'fill-blank', question: 'Completa: "___ las diez de la manana."', answer: 'Son', explain: 'Время = ser.' },
          { type: 'choice', question: 'Cual es correcto?', options: ['Estoy profesor', 'Soy profesor', 'Soy cansado', 'Estoy de Mexico'], answer: 1, explain: 'Профессия = ser.' },
          { type: 'translate', question: 'Переведите: "Я устал."', answer: 'Estoy cansado', explain: 'Состояние = estar.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['Madrid', 'Espana', 'en', 'esta'], answer: 'Madrid esta en Espana', explain: 'Местонахождение = estar.' },
          { type: 'correct', question: 'Encuentra y corrige: "Yo estoy de Mexico."', answer: 'Yo soy de Mexico', explain: 'Происхождение = ser.' }
        ]}
      },
      {
        id: 'esg-l2', topic: 'Past tenses: Preterito vs Imperfecto',
        objective: 'Diferenciar y usar correctamente el preterito indefinido y el imperfecto de indicativo.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Preterito Indefinido vs Imperfecto',
          text: 'El pasado en espanol tiene varios tiempos verbales. Los dos mas importantes para narrar son el preterito indefinido y el imperfecto de indicativo. Entender la diferencia entre ellos es uno de los mayores desafios para los estudiantes de espanol.\n\n**Preterito Indefinido:**\nSe usa para acciones completadas en el pasado, con un principio y fin claros.\n\nUsos:\n1. Acciones puntuales: "Ayer llegue a las tres." (вчера пришёл в 3)\n2. Secuencia de eventos: "Me levante, desayune y sali." (встал, позавтракал, ушёл)\n3. Acciones con duracion limitada: "Vivi en Madrid dos anos." (жил в Мадриде 2 года)\n4. Acciones que interrumpen: "Comia cuando llego Maria." (ел, когда пришла Мария — la interrupcion)\n\nConjugaciones regulares:\n- -AR: hable, hablaste, hablo, hablamos, hablasteis, hablaron\n- -ER: comi, comiste, comio, comimos, comisteis, comieron\n- -IR: vivi, viviste, vivio, vivimos, vivisteis, vivieron\n\nIrregulares comunes: fui (ser/ir), estuve (estar), tuve (tener), hice (hacer), dije (decir), vine (venir), pude (poder), quise (querer), supe (saber), puse (poner).\n\n**Imperfecto de Indicativo:**\nSe usa para describir el fondo, las costumbres y las acciones en progreso en el pasado.\n\nUsos:\n1. Descripciones en el pasado: "La casa era grande y vieja." (дом был большим и старым)\n2. Habitos y rutinas: "De nino, jugaba al futbol todos los dias." (в детстве играл каждый день)\n3. Acciones en progreso: "Estaba leyendo cuando sono el telefono." (читал, когда зазвонил телефон)\n4. Edad en el pasado: "Tenia diez anos." (мне было 10 лет)\n5. Hora en el pasado: "Eran las tres." (было 3 часа)\n6. Accion de fondo: "Llovia." (шёл дождь)\n\nConjugaciones regulares:\n- -AR: hablaba, hablabas, hablaba, hablabamos, hablabais, hablaban\n- -ER/-IR: comia, comias, comia, comiamos, comiais, comian\n\nIrregulares: era (ser), iba (ir), veia (ver).\n\n**Comparacion clave:**\n- Preterito: "Comi pizza." (съел пиццу — полностью)\n- Imperfecto: "Comia pizza." (ел пиццу — в процессе, может не закончил)\n\n- Preterito: "Llovio ayer." (вчера шёл дождь — событие)\n- Imperfecto: "Llovia cuando sali." (шёл дождь, когда я вышел — фон)\n\n- Preterito: "Fui al cine." (ходил в кино — событие)\n- Imperfecto: "Iba al cine todos los viernes." (ходил в кино каждую пятницу — привычка)\n\n**Marcadores temporales:**\n- Preterito: ayer, anoche, el lunes pasado, en 2020, hace dos anos, de repente\n- Imperfecto: antes, siempre, todos los dias, menudo, mientras, cuando era nino\n\n**Combinacion (narracion):**\n"Estaba (imp.) en casa cuando de repente sono (pret.) el telefono. Conteste (pret.) y era (imp.) mi amigo. Me dijo (pret.) que llegaba (imp.) tarde."\n\nLa regla de oro: usa el imperfecto para el escenario y el preterito para la accion principal.',
          vocab: [
            { word: 'hable / hablaba', trans: 'говорил (завершил) / говорил (был в процессе)' },
            { word: 'comi / comia', trans: 'съел / ел (в процессе)' },
            { word: 'fui / iba', trans: 'пошёл (разово) / ходил (регулярно)' },
            { word: 'era / fue', trans: 'был (описание) / был (событие)' },
            { word: 'tenia / tuve', trans: 'имел / получил' },
            { word: 'hacia / hice', trans: 'делал (процесс) / сделал (завершил)' },
            { word: 'todos los dias / siempre', trans: 'каждый день / всегда (имперфекто)' },
            { word: 'ayer / anoche / de repente', trans: 'вчера / прошлой ночью / вдруг (претерито)' }
          ]
        },
        video: { slides: [
          { emoji: ' pret', title: 'Preterito', text: 'Действие завершённое: ayer llegue, comi, sali.' },
          { emoji: ' imp', title: 'Imperfecto', text: 'Фон, описание, привычка: era, tenia, iba todos los dias.' },
          { emoji: ' -ar', title: 'Pret. -AR', text: 'hable, hablaste, hablo, hablamos, hablasteis, hablaron.' },
          { emoji: ' -er', title: 'Pret. -ER/-IR', text: 'comi, comiste, comio, comimos, comisteis, comieron.' },
          { emoji: ' imp-conj', title: 'Imp. -AR', text: 'hablaba, hablabas, hablaba, hablabamos, hablabais, hablaban.' },
          { emoji: ' irreg', title: 'Irregulares', text: 'fui, estuve, tuve, hice, dije, era, iba, veia.' },
          { emoji: ' marc', title: 'Marcadores', text: 'Pret: ayer, anoche, de repente. Imp: siempre, todos los dias, cuando era nino.' },
          { emoji: ' narr', title: 'Narracion', text: 'Imperfecto = фон. Preterito = действие. "Llovia (imp) cuando sali (pret)."' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Ayer ___ al cine." (разовое событие)', options: ['iba', 'fui', 'era', 'estaba'], answer: 1, explain: 'Разовое событие вчера = preterito. "fui".' },
          { q: 'Completa: "De nino, ___ al futbol cada dia." (привычка)', options: ['jugué', 'jugaba', 'juego', 'jugare'], answer: 1, explain: 'Привычка в детстве = imperfecto. "jugaba".' },
          { q: 'Completa: "La casa ___ grande." (описание)', options: ['fue', 'era', 'es', 'esta'], answer: 1, explain: 'Описание в прошлом = imperfecto. "era".' },
          { q: 'Completa: "Ayer ___ pizza." (съел полностью)', options: ['comia', 'comi', 'como', 'comere'], answer: 1, explain: 'Завершённое действие = preterito. "comi".' },
          { q: 'Completa: "___ las tres de la tarde." (время в прошлом)', options: ['Fue', 'Era', 'Son', 'Es'], answer: 1, explain: 'Время в прошлом = imperfecto. "Eran/Era".' },
          { q: 'Completa: "___ diez anos." (мне было 10)', options: ['Tuve', 'Tenia', 'Tengo', 'Tendre'], answer: 1, explain: 'Возраст в прошлом = imperfecto. "Tenia".' },
          { q: 'Cual es preterito de "hablar" (yo)?', options: ['hablaba', 'hable', 'hablo', 'hablare'], answer: 1, explain: 'Preterito yo: "hable".' },
          { q: 'Cual es imperfecto de "comer" (yo)?', options: ['comi', 'comia', 'como', 'comere'], answer: 1, explain: 'Imperfecto yo: "comia".' },
          { q: 'Completa: "Mientras ___ , sono el telefono." (читал)', options: ['lei', 'leia', 'leo', 'lere'], answer: 1, explain: 'Действие в процессе = imperfecto. "leia".' },
          { q: 'Cual es irregular preterito de "ir"?', options: ['iba', 'fui', 'vio', 'estuvo'], answer: 1, explain: 'Ir preterito: "fui".' },
          { q: 'Completa: "Ellos ___ a las ocho." (пришли в 8)', options: ['venian', 'vinieron', 'vienen', 'vendran'], answer: 1, explain: 'Разовое завершённое = preterito. "vinieron".' },
          { q: 'Completa: "Antes ___ aqui todos los viernes." (ходили)', options: ['vinieron', 'venian', 'vienen', 'vendran'], answer: 1, explain: 'Привычка в прошлом = imperfecto. "venian".' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Ayer ___ (comer) pizza." (завершил)', answer: 'comi', explain: 'Завершённое действие = preterito.' },
          { type: 'fill-blank', question: 'Completa: "Siempre ___ (jugar) al tenis." (привычка)', answer: 'jugaba', explain: 'Привычка = imperfecto.' },
          { type: 'choice', question: 'Cual es correcto para "вчера я пошёл"?', options: ['Ayer iba', 'Ayer fui', 'Ayer voy', 'Ayer ire'], answer: 1, explain: 'Разовое событие вчера = preterito "fui".' },
          { type: 'translate', question: 'Переведите: "Когда я был ребёнком, я жил в Мадриде."', answer: 'Cuando era nino, vivia en Madrid', explain: 'Описание/привычка = imperfecto.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['anoche', 'fui', 'cine', 'al'], answer: 'anoche fui al cine', explain: 'Прошедшее завершённое.' },
          { type: 'correct', question: 'Encuentra y corrige: "Ayer comia toda la pizza."', answer: 'Ayer comi toda la pizza', explain: 'Завершённое действие = preterito "comi".' }
        ]}
      },
      {
        id: 'esg-l3', topic: 'Subjunctive mood',
        objective: 'Comprender y usar el modo subjuntivo en espanol para expresar deseos, dudas y emociones.',
        estimatedTime: '55 минут',
        reading: {
          title: 'El Modo Subjuntivo en Espanol',
          text: 'El subjuntivo es uno de los temas mas dificiles del espanol para los hablantes de ingles, porque el ingles casi no lo usa. Sin embargo, en espanol es esencial para expresar deseos, emociones, dudas, hipotesis y recomendaciones.\n\n**Cuando se usa el subjuntivo?**\nEl subjuntivo aparece en oraciones subordinadas (despues de "que"). Las principales categorias son:\n\n1. **Deseos y voluntad:** querer, desear, esperar, ojala\n   - "Quiero que vengas." (хочу, чтобы ты пришёл)\n   - "Espero que tengas exito." (надеюсь, у тебя получится)\n   - "Ojala que llueva." (если бы пошёл дождь)\n\n2. **Emociones:** estar feliz, estar triste, gustar, sorprender\n   - "Me alegra que estes aqui." (рад, что ты здесь)\n   - "Me sorprende que digas eso." (удивляет, что ты это говоришь)\n   - "Me gusta que vengas." (нравится, что ты приходишь)\n\n3. **Dudas e incertidumbre:** dudar, no creer, no estar seguro, tal vez\n   - "Dudo que venga." (сомневаюсь, что придёт)\n   - "No creo que sea verdad." (не верю, что это правда)\n   - "Tal vez llegue manana." (может быть, приедет завтра)\n\n4. **Recomendaciones y consejos:** recomendar, sugerir, aconsejar\n   - "Te recomiendo que estudies." (рекомендую учиться)\n   - "El medico sugiere que descanse." (врач советует отдыхать)\n\n5. **Impersonales:** es importante, es necesario, es probable\n   - "Es importante que aprendas espanol." (важно, чтобы ты учил испанский)\n   - "Es necesario que vengas temprano." (необходимо прийти рано)\n\n**Conjugacion del presente de subjuntivo:**\nPara conjugar, toma la forma "yo" del presente, quita la "-o" y anade:\n- -AR: -e, -es, -e, -emos, -eis, -en (hablar -> hable, hables, hable...)\n- -ER/-IR: -a, -as, -a, -amos, -ais, -an (comer -> coma, comas, coma...)\n\nEjemplos:\n- hablar -> hable, hables, hable, hablemos, hablais, hablen\n- comer -> coma, comas, coma, comamos, comais, coman\n- vivir -> viva, vivas, viva, vivamos, vivais, vivan\n\n**Irregulares comunes:**\n- ser -> sea, seas, sea, seamos, seais, sean\n- ir -> vaya, vayas, vaya, vayamos, vayais, vayan\n- tener -> tenga, tengas, tenga, tengamos, tengais, tengan\n- hacer -> haga, hagas, haga, hagamos, hagais, hagan\n- venir -> venga, vengas, venga, vengamos, vengais, vengan\n- dar -> de, des, de, demos, deis, den\n- estar -> este, estes, este, estemos, esteis, esten\n\n**Regla de las tres pasos:**\n1. Hay dos sujetos diferentes? (yo quiero que TU vengas)\n2. Hay un verbo de deseo/emocion/duda/recomendacion?\n3. Si si a ambas -> usa subjuntivo despues de "que"\n\n**Comparacion indicativo vs subjuntivo:**\n- "Creo que viene." (верю, что придёт) -> INDICATIVO (certeza)\n- "No creo que venga." (не верю, что придёт) -> SUBJUNTIVO (duda)\n- "Es evidente que esta aqui." (очевидно, что здесь) -> INDICATIVO\n- "Es posible que este aqui." (возможно, что здесь) -> SUBJUNTIVO\n\nEl subjuntivo se aprende con practica. Empieza con las frases mas comunes y poco a poco amplía tu uso.',
          vocab: [
            { word: 'Quiero que + subj.', trans: 'Хочу, чтобы... (желание)' },
            { word: 'Espero que + subj.', trans: 'Надеюсь, что...' },
            { word: 'Ojala que + subj.', trans: 'Если бы... / Дай бог...' },
            { word: 'Dudo que + subj.', trans: 'Сомневаюсь, что...' },
            { word: 'No creo que + subj.', trans: 'Не верю, что...' },
            { word: 'Es importante que + subj.', trans: 'Важно, чтобы...' },
            { word: 'Te recomiendo que + subj.', trans: 'Рекомендую тебе...' },
            { word: 'Me alegra que + subj.', trans: 'Рад, что...' }
          ]
        },
        video: { slides: [
          { emoji: ' subj', title: 'Subjuntivo', text: 'Действия, основанные на желании, эмоциях, сомнениях, гипотезах.' },
          { emoji: ' deseo', title: 'Deseos', text: '"Quiero que vengas." / "Espero que tengas exito." — желания.' },
          { emoji: ' emoc', title: 'Emociones', text: '"Me alegra que estes aqui." — эмоции + subjuntivo.' },
          { emoji: ' duda', title: 'Dudas', text: '"Dudo que venga." / "No creo que sea verdad." — сомнения.' },
          { emoji: ' -ar', title: 'Conj. -AR', text: 'hablar -> hable, hables, hable, hablemos, hablen.' },
          { emoji: ' -er', title: 'Conj. -ER/-IR', text: 'comer -> coma, comas, coma, comamos, coman.' },
          { emoji: ' irreg', title: 'Irregulares', text: 'ser->sea, ir->vaya, tener->tenga, hacer->haga, dar->de.' },
          { emoji: ' vs', title: 'Ind. vs Subj.', text: '"Creo que viene" (ind). "No creo que venga" (subj). Certidumbre vs duda.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Quiero que tu ___." (venir, subjuntivo)', options: ['vienes', 'vengas', 'vendras', 'viniste'], answer: 1, explain: 'Querer que + subjuntivo. "vengas".' },
          { q: 'Completa: "Espero que ___ bien." (ir, subjuntivo)', options: ['vas', 'vayas', 'irás', 'fuiste'], answer: 1, explain: 'Esperar que + subjuntivo. "vayas".' },
          { q: 'Completa: "No creo que ___ verdad." (ser)', options: ['es', 'sea', 'fue', 'sera'], answer: 1, explain: 'No creer que + subjuntivo. "sea".' },
          { q: 'Completa: "Dudo que ___ a la fiesta." (venir)', options: ['viene', 'venga', 'vendrá', 'vino'], answer: 1, explain: 'Dudar que + subjuntivo. "venga".' },
          { q: 'Completa: "Es importante que ___ espanol." (aprender)', options: ['aprendes', 'aprendas', 'aprenderas', 'aprendiste'], answer: 1, explain: 'Es importante que + subjuntivo. "aprendas".' },
          { q: 'Cual es el subjuntivo de "hablar" (yo)?', options: ['hablo', 'hable', 'hablare', 'hable'], answer: 1, explain: 'hablar -> hable (yo).' },
          { q: 'Cual es el subjuntivo de "comer" (tu)?', options: ['comes', 'comas', 'comeras', 'comiste'], answer: 1, explain: 'comer -> comas (tu).' },
          { q: 'Completa: "Me alegra que ___ aqui." (estar)', options: ['estas', 'estes', 'estaras', 'estabas'], answer: 1, explain: 'Emocion + subjuntivo. "estes".' },
          { q: 'Completa: "Ojala que ___ sol." (hacer)', options: ['hace', 'haga', 'hara', 'hacia'], answer: 1, explain: 'Ojala que + subjuntivo. "haga".' },
          { q: 'Cual es el subjuntivo de "tener" (yo)?', options: ['tengo', 'tenga', 'tendré', 'tenia'], answer: 1, explain: 'tener -> tenga (irregular).' },
          { q: 'Cual usa INDICATIVO?', options: ['Creo que viene', 'No creo que venga', 'Dudo que venga', 'Espero que venga'], answer: 0, explain: '"Creo que" = certeza -> indicativo.' },
          { q: 'Completa: "Te recomiendo que ___ mas." (estudiar)', options: ['estudias', 'estudies', 'estudiaras', 'estudiabas'], answer: 1, explain: 'Recomendar que + subjuntivo. "estudies".' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Quiero que tu ___ (hablar) con el."', answer: 'hables', explain: 'Querer que + subjuntivo.' },
          { type: 'fill-blank', question: 'Completa: "No creo que ___ (ser) facil."', answer: 'sea', explain: 'No creer que + subjuntivo.' },
          { type: 'choice', question: 'Cual usa subjuntivo?', options: ['Creo que viene', 'No creo que venga', 'Es evidente que esta aqui', 'Seguro que llega'], answer: 1, explain: '"No creo que" = duda -> subjuntivo.' },
          { type: 'translate', question: 'Переведите: "Надеюсь, что у тебя всё хорошо."', answer: 'Espero que estes bien', explain: 'Esperar que + subjuntivo.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['que', 'vengas', 'Quiero', 'manana'], answer: 'Quiero que vengas manana', explain: 'Querer que + subjuntivo.' },
          { type: 'correct', question: 'Encuentra y corrige: "No creo que viene manana."', answer: 'No creo que venga manana', explain: 'No creer que + subjuntivo "venga".' }
        ]}
      },
      {
        id: 'esg-l4', topic: 'Por and Para',
        objective: 'Distinguir y usar correctamente las preposiciones "por" y "para" en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Por vs Para: Las Dos Preposiciones',
          text: '"Por" y "para" son dos preposiciones que suelen confundir a los estudiantes de espanol porque ambas pueden traducirse como "for" en ingles. Sin embargo, tienen usos muy distintos.\n\n**Usos de PARA:**\nPara se usa principalmente para indicar destino, proposito, plazo y comparacion.\n\n1. **Destinatario (para quien):** "Este regalo es para ti." (этот подарок для тебя)\n2. **Proposito (para que):** "Estudio para aprender." (учусь, чтобы научиться)\n3. **Destino fisico:** "Voy para Madrid." (еду в Мадрид)\n4. **Plazo / limite de tiempo:** "Necesito el informe para manana." (нужен отчёт к завтрашнему дню)\n5. **Comparacion:** "Para su edad, es alto." (для своего возраста он высокий)\n6. **Opinion:** "Para mi, es mejor." (по-моему, лучше)\n\n**Usos de POR:**\nPor se usa para causa, medio, intercambio, duracion y lugar.\n\n1. **Causa / razon:** "Gracias por tu ayuda." (спасибо за помощь)\n2. **Medio / instrumento:** "Llame por telefono." (позвонил по телефону)\n3. **Intercambio / precio:** "Pague diez euros por el libro." (заплатил 10 евро за книгу)\n4. **Duracion de tiempo:** "Estuve aqui por dos horas." (был здесь два часа)\n5. **Lugar (por donde):** "Pase por el parque." (прошёл через парк)\n6. **En nombre de:** "Hablo por mi equipo." (говорю от имени команды)\n7. **En lugar de:** "Trabajo por ti hoy." (работаю за тебя сегодня)\n8. **Velocidad:** "Va a cien por hora." (едет со скоростью 100 в час)\n9. **Distribucion:** "Repartieron los libros por las aulas." (распределили книги по классам)\n\n**Expresiones con POR:**\n- por la manana / tarde / noche (утром / днём / вечером)\n- por ejemplo (например)\n- por favor (пожалуйста)\n- por eso (поэтому)\n- por lo menos (по крайней мере)\n- por ahora (пока, на данный момент)\n- por supuesto (конечно)\n- por ultimo (наконец)\n\n**Expresiones con PARA:**\n- para siempre (навсегда)\n- para que (чтобы / для того чтобы)\n\n**Comparaciones clave:**\n- "Trabajo para Maria." = работаю на Марию (destinatario)\n- "Trabajo por Maria." = работаю вместо Марии (en lugar de)\n\n- "El libro es para Juan." = книга для Хуана\n- "Compre el libro por Juan." = купил книгу по случаю Хуана (para regalarle)\n\n- "Voy para Madrid." = направляюсь в Мадрид\n- "Pase por Madrid." = проехал через Мадрид\n\n- "Para manana" = к завтрашнему дню (plazo)\n- "Por la manana" = утром (tiempo habitual)\n\n**Truco para recordar:**\nPARA: destino, proposito, plazo (DPP)\nPOR: causa, medio, intercambio, duracion (CMID)\n\nSi puedes reemplazar por "para que" -> usa PARA.\nSi puedes reemplazar por "por causa de" -> usa POR.\n\nLa mejor manera de aprender es practicar con ejemplos. Con el tiempo, la eleccion entre por y para se vuelve natural!',
          vocab: [
            { word: 'para ti', trans: 'для тебя (destinatario)' },
            { word: 'para aprender', trans: 'чтобы научиться (proposito)' },
            { word: 'para manana', trans: 'к завтрашнему дню (plazo)' },
            { word: 'por tu ayuda', trans: 'за твою помощь (causa)' },
            { word: 'por telefono', trans: 'по телефону (medio)' },
            { word: 'por dos horas', trans: 'в течение двух часов (duracion)' },
            { word: 'por la manana', trans: 'утром (expresion)' },
            { word: 'por favor / por supuesto', trans: 'пожалуйста / конечно' }
          ]
        },
        video: { slides: [
          { emoji: ' para', title: 'PARA', text: 'Destino, proposito, plazo. "Para ti", "para aprender", "para manana".' },
          { emoji: ' por', title: 'POR', text: 'Causa, medio, intercambio, duracion. "Por ayuda", "por telefono".' },
          { emoji: ' dest', title: 'Destinatario', text: '"Este regalo es para ti." — para = для (кому).' },
          { emoji: ' prop', title: 'Proposito', text: '"Estudio para aprender." — para = чтобы.' },
          { emoji: ' plazo', title: 'Plazo', text: '"Lo necesito para manana." — para = к сроку.' },
          { emoji: ' causa', title: 'Causa', text: '"Gracias por tu ayuda." — por = за (причину).' },
          { emoji: ' medio', title: 'Medio', text: '"Llame por telefono." — por = через/по (средство).' },
          { emoji: ' truco', title: 'Truco', text: 'PARA = destino/proposito/plazo. POR = causa/medio/intercambio.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Este regalo es ___ ti."', options: ['por', 'para', 'con', 'de'], answer: 1, explain: 'Destinatario = para. "para ti".' },
          { q: 'Completa: "Gracias ___ tu ayuda."', options: ['para', 'por', 'con', 'a'], answer: 1, explain: 'Causa = por. "por tu ayuda".' },
          { q: 'Completa: "Estudio ___ aprender espanol."', options: ['por', 'para', 'con', 'a'], answer: 1, explain: 'Proposito = para.' },
          { q: 'Completa: "Llame ___ telefono."', options: ['para', 'por', 'con', 'en'], answer: 1, explain: 'Medio = por. "por telefono".' },
          { q: 'Completa: "Necesito el informe ___ manana."', options: ['por', 'para', 'hasta', 'en'], answer: 1, explain: 'Plazo = para. "para manana".' },
          { q: 'Completa: "Pague diez euros ___ el libro."', options: ['para', 'por', 'con', 'de'], answer: 1, explain: 'Intercambio/precio = por.' },
          { q: 'Completa: "___ la manana, siempre tomo cafe."', options: ['Para', 'Por', 'En', 'A'], answer: 1, explain: 'Expresion = por. "por la manana" = утром.' },
          { q: 'Completa: "Voy ___ Madrid." (destino)', options: ['por', 'para', 'a', 'en'], answer: 1, explain: 'Destino = para.' },
          { q: 'Completa: "Pase ___ el parque." (a traves de)', options: ['para', 'por', 'a', 'en'], answer: 1, explain: 'Lugar (por donde) = por.' },
          { q: 'Completa: "___ favor, ayudame."', options: ['Para', 'Por', 'Con', 'A'], answer: 1, explain: 'Expresion = por favor.' },
          { q: 'Cual es correcto: "Trabajo ___ Maria" (en su lugar)?', options: ['para', 'por', 'con', 'de'], answer: 1, explain: '"En lugar de" = por. Trabajo por Maria = вместо неё.' },
          { q: 'Cual es correcto: "Trabajo ___ Maria" (ella es mi jefa)?', options: ['para', 'por', 'con', 'de'], answer: 0, explain: 'Destinatario = para. Trabajo para Maria = на неё.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Este cafe es ___ ti."', answer: 'para', explain: 'Destinatario = para.' },
          { type: 'fill-blank', question: 'Completa: "Gracias ___ tu ayuda."', answer: 'por', explain: 'Causa = por.' },
          { type: 'choice', question: 'Completa: "Estudio ___ aprobar."', options: ['por', 'para', 'con', 'a'], answer: 1, explain: 'Proposito = para.' },
          { type: 'translate', question: 'Переведите: "Мне нужен отчёт к завтрашнему дню."', answer: 'Necesito el informe para manana', explain: 'Plazo = para.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['favor', 'ayudame', 'por'], answer: 'por favor ayudame', explain: 'Expresion: por favor.' },
          { type: 'correct', question: 'Encuentra y corrige: "Gracias para tu ayuda."', answer: 'Gracias por tu ayuda', explain: 'Causa = por, no para.' }
        ]}
      },
      {
        id: 'esg-l5', topic: 'Direct and indirect objects',
        objective: 'Comprender y usar los pronombres de objeto directo e indirecto en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Objetos Directos e Indirectos en Espanol',
          text: 'Los pronombres de objeto son fundamentales para hablar con fluidez en espanol. Permiten evitar repeticiones y hacer la comunicacion mas natural. Hay dos tipos principales: objetos directos (OD) y objetos indirectos (OI).\n\n**Objeto Directo (OD):**\nEl objeto directo recibe la accion del verbo directamente. Responde a la pregunta "que?" o "quien?".\n\n- "Compro el pan." -> "Lo compro." (que compro? el pan -> lo)\n- "Veo a Maria." -> "La veo." (a quien veo? a Maria -> la)\n- "Veo a Juan." -> "Lo veo." (a Juan -> lo)\n\n**Pronombres de Objeto Directo:**\nme (me), te (te), lo (его/это, м.р.), la (её/это, ж.р.), nos (нас), os (вас), los (их, м.р.), las (их, ж.р.)\n\nEjemplos:\n- "Tengo el libro." -> "Lo tengo." (у меня есть -> он у меня)\n- "Compro las manzanas." -> "Las compro."\n- "Nos ve todos los dias." (видит нас каждый день)\n\n**Objeto Indirecto (OI):**\nEl objeto indirecto indica a quien va dirigida la accion. Responde a la pregunta "a quien?" o "para quien?".\n\n- "Doy el libro a Maria." -> "Le doy el libro." (a quien? a Maria -> le)\n- "Doy el libro a Juan." -> "Le doy el libro." (a Juan -> le)\n- "Compro flores para ti." -> "Te compro flores."\n\n**Pronombres de Objeto Indirecto:**\nme (мне/мной), te (тебе/тобой), le (ему/ей), nos (нам), os (вам), les (им)\n\nNota: el OI no cambia de genero. "le" sirve para masculino y femenino.\n\n**Verbos comunes con OI:**\n- dar: "Le doy el libro." (даю ему книгу)\n- decir: "Le digo la verdad." (говорю ему правду)\n- preguntar: "Le pregunto la hora." (спрашиваю у него время)\n- enviar: "Le envio un correo." (отправляю ему письмо)\n- explicar: "Le explico el problema." (объясняю ему проблему)\n\n**Combinacion OD + OI:**\nCuando hay ambos objetos en la misma oracion:\n- me lo, te lo, le lo -> se lo, nos lo, os lo, se lo\n\nImportante: "le lo" se transforma en "se lo" por euphonia.\n\nEjemplos:\n- "Doy el libro a Maria." -> "Se lo doy." (le lo -> se lo)\n- "Doy las flores a Juan." -> "Se las doy."\n- "Explique el problema a ellos." -> "Se lo explique."\n- "Enseño la foto a mis padres." -> "Se la enseno."\n\n**Posicion de los pronombres:**\n1. Antes del verbo conjugado: "Lo veo." / "Le doy el libro."\n2. Unido al infinitivo: "Quiero verlo." / "Voy a darle el libro."\n3. Unido al gerundio: "Estoy viendolo." / "Estoy dandole el libro."\n4. Unido al imperativo afirmativo: "Compralo!" / "Dale el libro!"\n\nNota: con verbos en infinitivo o gerundio, el pronombre puede ir antes o despues:\n- "Lo quiero ver." = "Quiero verlo." (оба правильны)\n- "Le estoy dando el libro." = "Estoy dandole el libro."\n\n**La "a" personal:**\nCuando el OD es una persona especifica, se usa "a" antes del pronombre:\n- "Veo a Maria." (вижу Марию — persona)\n- "Veo el coche." (вижу машину — no persona, sin "a")\n\n**Errores comunes:**\n- "Le veo" cuando es OD: "Veo a Juan" -> "Lo veo" (no "le veo")\n- "Lo doy el libro a Maria" WRONG -> "Le doy el libro" (OI, no OD)\n- Olvidar la transformacion "le lo" -> "se lo"\n\nLa clave es preguntar: la palabra recibe la accion directamente (OD) o indirectamente (OI)?',
          vocab: [
            { word: 'lo / la', trans: 'его / её (OD, м.р. / ж.р.)' },
            { word: 'los / las', trans: 'их (OD, мн.ч.)' },
            { word: 'le', trans: 'ему / ей (OI)' },
            { word: 'les', trans: 'им (OI, мн.ч.)' },
            { word: 'me / te / nos', trans: 'мне / тебе / нам' },
            { word: 'se lo', trans: 'ему это (le lo -> se lo)' },
            { word: 'Se lo doy', trans: 'Я даю ему это' },
            { word: 'Lo veo / Le digo', trans: 'Я его вижу / Я ему говорю' }
          ]
        },
        video: { slides: [
          { emoji: ' OD', title: 'Objeto Directo', text: 'lo, la, los, las. "Lo veo." = вижу его.' },
          { emoji: ' OI', title: 'Objeto Indirecto', text: 'le, les. "Le doy el libro." = даю ему.' },
          { emoji: ' lo', title: 'lo / la', text: 'lo (м.р.), la (ж.р.). "Tengo el libro -> Lo tengo."' },
          { emoji: ' le', title: 'le', text: 'le (ему/ей). "Doy el libro a Maria -> Le doy el libro."' },
          { emoji: ' selo', title: 'se lo', text: 'le lo -> se lo. "Doy el libro a el -> Se lo doy."' },
          { emoji: ' pos', title: 'Posicion', text: 'Antes del verbo: "Lo veo." Unido: "Quiero verlo."' },
          { emoji: ' a', title: 'a personal', text: '"Veo a Maria" (persona). "Veo el coche" (cosa, sin "a").' },
          { emoji: ' truco', title: 'Truco', text: 'OD responde "que?". OI responde "a quien?".' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Tengo el libro. ___ tengo."', options: ['Le', 'Lo', 'La', 'Les'], answer: 1, explain: 'OD masculino = lo. "Lo tengo".' },
          { q: 'Completa: "Veo a Maria. ___ veo."', options: ['Lo', 'La', 'Le', 'Les'], answer: 1, explain: 'OD femenino = la. "La veo".' },
          { q: 'Completa: "Doy el libro a Juan. ___ doy el libro."', options: ['Lo', 'Le', 'La', 'Los'], answer: 1, explain: 'OI = le. "Le doy el libro".' },
          { q: 'Completa: "Doy el libro a Maria. ___ doy el libro."', options: ['La', 'Le', 'Lo', 'Las'], answer: 1, explain: 'OI = le (no cambia por genero).' },
          { q: 'Completa: "Doy el libro a el. ___ doy."', options: ['Le lo', 'Se lo', 'Lo le', 'Se la'], answer: 1, explain: 'le lo -> se lo. "Se lo doy".' },
          { q: 'Completa: "Compro las manzanas. ___ compro."', options: ['Lo', 'Los', 'Las', 'Les'], answer: 2, explain: 'OD femenino plural = las.' },
          { q: 'Completa: "Digo la verdad a Maria. ___ digo."', options: ['La le', 'Se la', 'Le la', 'Se lo'], answer: 1, explain: 'le la -> se la. "Se la digo".' },
          { q: 'Completa: "Vemos a ellos. ___ vemos."', options: ['Les', 'Los', 'Le', 'Lo'], answer: 1, explain: 'OD masculino plural = los.' },
          { q: 'Completa: "Envio un correo a ellos. ___ envio un correo."', options: ['Los', 'Les', 'Lo', 'Las'], answer: 1, explain: 'OI plural = les. "Les envio un correo".' },
          { q: 'Completa: "Quiere ver el libro. Quiere ___ ."', options: ['lo', 'le', 'la', 'les'], answer: 0, explain: 'OD = lo, unido al infinitivo. "verlo".' },
          { q: 'Completa: "Estoy dando el libro a Maria. Estoy ___ dando."', options: ['le lo', 'se lo', 'lo le', 'se la'], answer: 1, explain: 'le lo -> se lo. "Estoy selo dando" o "se lo estoy dando".' },
          { q: 'Cual es OD en "Veo a Maria"?', options: ['a Maria', 'veo', 'Maria', 'a'], answer: 0, explain: 'OD = "a Maria" (persona, con "a" personal).' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Tengo el libro. ___ tengo."', answer: 'Lo', explain: 'OD masculino = lo.' },
          { type: 'fill-blank', question: 'Completa: "Doy el libro a Maria. ___ doy el libro."', answer: 'Le', explain: 'OI = le.' },
          { type: 'choice', question: 'Completa: "Doy el libro a el. ___ doy."', options: ['Le lo', 'Se lo', 'Lo le', 'Se la'], answer: 1, explain: 'le lo -> se lo.' },
          { type: 'translate', question: 'Переведите: "Я даю ему это."', answer: 'Se lo doy', explain: 'le lo -> se lo.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['lo', 'veo', 'Yo'], answer: 'Yo lo veo', explain: 'OD antes del verbo.' },
          { type: 'correct', question: 'Encuentra y corrige: "Le veo a Juan."', answer: 'Lo veo a Juan', explain: 'OD (persona) = lo, no le.' }
        ]}
      },
      {
        id: 'esg-l6', topic: 'Conditional and future',
        objective: 'Usar correctamente el futuro simple y el condicional simple en espanol.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Futuro y Condicional en Espanol',
          text: 'El futuro y el condicional son dos tiempos verbales estrechamente relacionados. Ambos se forman anadiendo terminaciones al infinitivo, y se usan para hablar del futuro y de situaciones hipoteticas.\n\n**Futuro Simple:**\nSe usa para acciones que ocurriran en el futuro, predicciones y promesas.\n\nFormacion: infinitivo + terminaciones.\nTerminaciones: -e, -as, -a, -emos, -eis, -an (las mismas para -ar, -er, -ir)\n\n- hablar: hablare, hablaras, hablara, hablaremos, hablareis, hablaran\n- comer: comere, comeras, comera, comeremos, comereis, comeran\n- vivir: vivire, viviras, vivira, viviremos, vivireis, viviran\n\nUsos del futuro:\n1. Acciones futuras: "Manana ire al cine." (завтра пойду в кино)\n2. Predicciones: "Llovera manana." (завтра будет дождь)\n3. Promesas: "Te llamare." (позвоню тебе)\n4. Decisions espontaneas: "Vale, lo hare." (хорошо, сделаю)\n5. Probabilidad en el presente: "Sera las tres." (наверное, часа три)\n\n**Irregulares del futuro:**\nAlgunos verbos cambian el infinitivo:\n- tener -> tendre\n- haber -> habre\n- poder -> podre\n- querer -> querre\n- saber -> sabre\n- poner -> pondre\n- salir -> saldre\n- venir -> vendre\n- hacer -> hare\n- decir -> dire\n- valer -> valdre\n- venir -> vendre\n\n**Condicional Simple:**\nSe usa para expresar cortesia, deseos, consejos y situaciones hipoteticas.\n\nFormacion: infinitivo + terminaciones.\nTerminaciones: -ia, -ias, -ia, -iamos, -iais, -ian (las mismas para -ar, -er, -ir)\n\n- hablar: hablaria, hablarias, hablaria, hablariamos, hablariais, hablarian\n- comer: comeria, comerias, comeria, comeriamos, comeriais, comerian\n- vivir: vivia, vivias, vivia, viviamos, viviais, vivian\n\nUsos del condicional:\n1. Cortesia: "Me gustaria un cafe." (хотел бы кофе)\n2. Deseos: "Me gustaria viajar." (хотел бы путешествовать)\n3. Consejos: "Deberias descansar." (тебе следует отдохнуть)\n4. Hipotesis: "Si tuviera dinero, compraria un coche." (если бы были деньги, купил бы машину)\n5. Futuro en el pasado: "Dijo que vendria." (сказал, что придёт)\n6. Probabilidad en el pasado: "Seria la una." (наверное, был час)\n\n**Irregulares del condicional:**\nLos mismos que en el futuro:\n- tener -> tendria\n- poder -> podria\n- querer -> querria\n- saber -> sabria\n- poner -> pondria\n- salir -> saldria\n- venir -> vendria\n- hacer -> haria\n- decir -> diria\n\n**Comparacion futuro vs condicional:**\n- Futuro: "Ire al cine manana." (пойду завтра — seguro)\n- Condicional: "Iria al cine si tuviera tiempo." (пошёл бы, если бы было время — hipotetico)\n\n- Futuro: "Comere pizza." (буду есть пиццу)\n- Condicional: "Comeria pizza." (съел бы пиццу — deseo)\n\n- Futuro: "Llovera." (будет дождь — prediccion)\n- Condicional: "Lloveria." (был бы дождь — hipotesis)\n\n**Oraciones condicionales (si +...):**\n- Si + presente, futuro: "Si llueve, me quedare en casa." (если будет дождь, останусь)\n- Si + imperfecto subjuntivo, condicional: "Si lloviera, me quedaria en casa." (если бы был дождь, остался бы)\n\n**Errores comunes:**\n- "Voy a iré" WRONG -> "Ire" (no usar doble futuro)\n- "Yo gustaria" WRONG -> "Me gustaria" (usa pronombre OI)\n- Confundir "quiero" con "querria" (querer presente vs condicional)\n\nLa practica hace al maestro. Intenta describir tu futuro y tus deseos usando estos tiempos verbales!',
          vocab: [
            { word: 'hablare / hablaria', trans: 'я буду говорить / я говорил бы' },
            { word: 'sere / seria', trans: 'я буду / я был бы' },
            { word: 'ire / iria', trans: 'я пойду / я пошёл бы' },
            { word: 'tendre / tendria', trans: 'у меня будет / у меня было бы (irreg.)' },
            { word: 'hare / haria', trans: 'я сделаю / я сделал бы (irreg.)' },
            { word: 'podre / podria', trans: 'я смогу / я мог бы (irreg.)' },
            { word: 'Me gustaria...', trans: 'Я хотел бы... (cortesia)' },
            { word: 'Si + imp. subj., condicional', trans: 'Если бы... + условное' }
          ]
        },
        video: { slides: [
          { emoji: ' fut', title: 'Futuro', text: 'infinitivo + -e/-as/-a/-emos/-eis/-an. "hablare, hablaras..."' },
          { emoji: ' cond', title: 'Condicional', text: 'infinitivo + -ia/-ias/-ia/-iamos/-iais/-ian. "hablaria..."' },
          { emoji: ' ire', title: 'ire / iria', text: 'ire = пойду (seguro). iria = пошёл бы (hipotetico).' },
          { emoji: ' cort', title: 'Cortesia', text: '"Me gustaria un cafe." — вежливая просьба (condicional).' },
          { emoji: ' irreg', title: 'Irregulares', text: 'tendre/tendria, hare/haria, podre/podria, dire/diria.' },
          { emoji: ' pred', title: 'Prediccion', text: '"Llovera manana." (futuro). "Sera la una." (probabilidad).' },
          { emoji: ' si', title: 'Si + condicional', text: '"Si tuviera tiempo, iria." — гипотетическая ситуация.' },
          { emoji: ' vs', title: 'Futuro vs Condicional', text: 'Futuro = seguro. Condicional = hipotetico/deseo.' }
        ]},
        quiz: { pool: [
          { q: 'Completa: "Manana ___ al cine." (ir, futuro)', options: ['voy', 'ire', 'iria', 'iba'], answer: 1, explain: 'Futuro = ire. "Manana ire al cine".' },
          { q: 'Completa: "Me ___ un cafe, por favor." (gustar, condicional)', options: ['gusta', 'gustaria', 'gustare', 'gusto'], answer: 1, explain: 'Cortesia = condicional. "Me gustaria".' },
          { q: 'Cual es el futuro de "tener" (yo)?', options: ['tenere', 'tendre', 'tengo', 'tendria'], answer: 1, explain: 'Irregular: tener -> tendre.' },
          { q: 'Cual es el condicional de "hacer" (yo)?', options: ['hacia', 'hare', 'haria', 'hago'], answer: 2, explain: 'Irregular: hacer -> haria.' },
          { q: 'Completa: "Si tuviera dinero, ___ un coche." (comprar, condicional)', options: ['comprare', 'compraria', 'compro', 'compraba'], answer: 1, explain: 'Si + subjuntivo, condicional. "compraria".' },
          { q: 'Completa: "___ manana." (llover, prediccion)', options: ['Llueve', 'Llovera', 'Lloveria', 'Llovio'], answer: 1, explain: 'Prediccion = futuro. "Llovera".' },
          { q: 'Completa: "Te ___ manana." (llamar, promesa)', options: ['llamo', 'llamare', 'llamaria', 'llamaba'], answer: 1, explain: 'Promesa = futuro. "llamare".' },
          { q: 'Cual es el condicional de "poder" (yo)?', options: ['puedo', 'podre', 'podria', 'podia'], answer: 2, explain: 'Irregular: poder -> podria.' },
          { q: 'Completa: "Deberias ___ mas." (descansar, consejo)', options: ['descansas', 'descansaras', 'descansar', 'descansabas'], answer: 2, explain: 'Despues de condicional, infinitivo. "descansar".' },
          { q: 'Completa: "Dijo que ___ manana." (venir, futuro pasado)', options: ['viene', 'vendria', 'vendrá', 'vino'], answer: 1, explain: 'Futuro en pasado = condicional. "vendria".' },
          { q: 'Cual es el futuro de "decir" (yo)?', options: ['digo', 'dire', 'diria', 'decia'], answer: 1, explain: 'Irregular: decir -> dire.' },
          { q: 'Completa: "___ las tres, seguramente." (ser, probabilidad presente)', options: ['Es', 'Sera', 'Seria', 'Era'], answer: 1, explain: 'Probabilidad presente = futuro. "Sera".' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Completa: "Manana ___ (ir) al parque." (futuro)', answer: 'ire', explain: 'Futuro regular: ire.' },
          { type: 'fill-blank', question: 'Completa: "Me ___ (gustar) un cafe." (cortesia)', answer: 'gustaria', explain: 'Cortesia = condicional.' },
          { type: 'choice', question: 'Cual es el condicional de "tener" (yo)?', options: ['tenere', 'tendre', 'tendria', 'tengo'], answer: 2, explain: 'Irregular: tendria.' },
          { type: 'translate', question: 'Переведите: "Я хотел бы путешествовать."', answer: 'Me gustaria viajar', explain: 'Cortesia/deseo = condicional.' },
          { type: 'order', question: 'Ordena las palabras:', words: ['manana', 'cine', 'al', 'ire'], answer: 'ire al cine manana', explain: 'Futuro simple.' },
          { type: 'correct', question: 'Encuentra y corrige: "Yo gustaria un cafe."', answer: 'Me gustaria un cafe', explain: 'Gustar usa pronombre OI: "Me gustaria".' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._spanish_course_3 = COURSE;
})(window);
