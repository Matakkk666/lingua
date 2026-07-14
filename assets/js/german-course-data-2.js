/* ============================================================
   AES Paid German Course 2: Deutsch fur die Beruf (B1-B2)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'de-business',
    title: 'Deutsch fur die Beruf Pro',
    price: 1500, oldPrice: 2990,
    level: 'B1-B2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'dustyPink',
    art: ['#F2DCDC', '#E9C4C4'],
    tagline: 'Business German: emails, meetings, presentations. 6 modules.',
    lessons: [
      {
        id: 'deb-l1', topic: 'Geschaftsemails',
        objective: 'Professionelle Emails auf Deutsch mit dem richtigen Ton und der richtigen Struktur schreiben.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Professionelle Emails auf Deutsch',
          text: 'Die Email ist das wichtigste Kommunikationsmittel im beruflichen Alltag. Im deutschsprachigen Raum ist der Ton in geschäftlichen Emails oft formeller als im Englischen, besonders beim ersten Kontakt.\n\n**Struktur einer professionellen Email:**\n1. Betreff (тема): klar und prazise — Besprechung Budget - 15. Marz\n2. Anrede (обращение): Sehr geehrte(r) Frau/Herr [Name] (формально) oder Liebe(r) Frau/Herr [Name] (weniger formell)\n3. Text: in kurzen Absatzen gegliedert\n4. Schlussformel: Mit freundlichen Gruben, Herzliche Grube\n5. Signatur: Name, Position, Firma, Kontaktdaten\n\n**Formelle Anreden:**\n- Sehr geehrte Frau Muller, (очень формально)\n- Sehr geehrter Herr Schmidt, (очень формально)\n- Liebe Frau Muller, (менее формально)\n- Hallo Herr Schmidt, (informell, wenn man sich kennt)\n\n**Opening Phrasen:**\n- Ich schreibe Ihnen bezuglich... (Я пишу относительно...)\n- Bezugnehmend auf unser Telefonat... (Ссылаясь на наш разговор...)\n- Ich mochte Sie informieren uber... (Я хотел бы сообщить о...)\n- In Antwort auf Ihre Email... (В ответ на ваше письмо...)\n\n**Informationen anfordern:**\n- Konnten Sie mir bitte ... zusenden? (Не могли бы вы прислать...?)\n- Ich wurde mich uber ... freuen. (Я был бы рад получить...)\n- Darf ich um ... bitten? (Могу ли я попросить...?)\n\n**Dateien anhangen:**\n- Im Anhang finden Sie... (Во вложении вы найдете...)\n- Anbei sende ich Ihnen... (При сем отправляю вам...)\n- Das angeforderte Dokument liegt bei. (Запрошенный документ прилагается.)\n\n**Schlussformeln:**\n- Mit freundlichen Gruben, (С уважением — стандартно)\n- Herzliche Grube, (С наилучшими пожеланиями)\n- Mit besten Gruben, (С наилучшими пожеланиями — более формально)\n\n**Tipps:**\n- Immer die formelle Anrede beim ersten Kontakt verwenden\n- Nicht zu umgangssprachlich werden\n- Kurz und prazise bleiben\n- Vor dem Senden Korrektur lesen\n\nIm deutschsprachigen Geschaftsleben ist Punktlichkeit und Klarheit sehr wichtig. Eine gut strukturierte Email zeigt Professionalitat.',
          textRu: 'Электронная почта — важнейшее средство общения в профессиональной повседневности. В немецкоязычном пространстве тон в деловых письмах часто более формальный, чем в английском, особенно при первом контакте.\n\n**Структура профессионального письма:**\n1. Тема (Betreff): ясная и точная — Besprechung Budget - 15. Marz\n2. Обращение (Anrede): Sehr geehrte(r) Frau/Herr [Name] (формально) или Liebe(r) Frau/Herr [Name] (менее формально)\n3. Текст: разделённый на короткие абзацы\n4. Заключительная формула: Mit freundlichen Gruben, Herzliche Grube\n5. Подпись: имя, должность, фирма, контактные данные\n\n**Формальные обращения:**\n- Sehr geehrte Frau Muller, (очень формально)\n- Sehr geehrter Herr Schmidt, (очень формально)\n- Liebe Frau Muller, (менее формально)\n- Hallo Herr Schmidt, (неформально, когда знакомы)\n\n**Фразы открытия:**\n- Ich schreibe Ihnen bezuglich... (Я пишу относительно...)\n- Bezugnehmend auf unser Telefonat... (Ссылаясь на наш разговор...)\n- Ich mochte Sie informieren uber... (Я хотел бы сообщить о...)\n- In Antwort auf Ihre Email... (В ответ на ваше письмо...)\n\n**Запрос информации:**\n- Konnten Sie mir bitte ... zusenden? (Не могли бы вы прислать...?)\n- Ich wurde mich uber ... freuen. (Я был бы рад получить...)\n- Darf ich um ... bitten? (Могу ли я попросить...?)\n\n**Прикрепление файлов:**\n- Im Anhang finden Sie... (Во вложении вы найдете...)\n- Anbei sende ich Ihnen... (При сем отправляю вам...)\n- Das angeforderte Dokument liegt bei. (Запрошенный документ прилагается.)\n\n**Заключительные формулы:**\n- Mit freundlichen Gruben, (С уважением — стандартно)\n- Herzliche Grube, (С наилучшими пожеланиями)\n- Mit besten Gruben, (С наилучшими пожеланиями — более формально)\n\n**Советы:**\n- Всегда используйте формальное обращение при первом контакте\n- Не быть слишком разговорным\n- Оставаться кратким и точным\n- Перед отправкой проверять на ошибки\n\nВ немецкоязычной деловой жизни пунктуальность и ясность очень важны. Хорошо структурированное письмо показывает профессионализм.',
          vocab: [
            { word: 'Sehr geehrte(r) Frau/Herr', trans: 'Уважаемая(ый) госпожа/господин (формально)' },
            { word: 'Ich schreibe Ihnen bezuglich...', trans: 'Я пишу вам относительно...' },
            { word: 'Im Anhang finden Sie...', trans: 'Во вложении вы найдете...' },
            { word: 'Konnten Sie mir bitte... zusenden?', trans: 'Не могли бы вы прислать мне...?' },
            { word: 'Mit freundlichen Gruben', trans: 'С уважением (стандартное завершение)' },
            { word: 'Bezugnehmend auf...', trans: 'Ссылаясь на...' },
            { word: 'In Antwort auf Ihre Email', trans: 'В ответ на ваше письмо' },
            { word: 'Herzliche Grube', trans: 'С наилучшими пожеланиями' }
          ]
        },
        video: { slides: [
          { emoji: 'betreff', title: 'Betreff', text: 'Тема: ясная и точная. "Besprechung Budget - 15. Marz".' },
          { emoji: 'anrede', title: 'Anrede', text: 'Sehr geehrte Frau Muller: — формально. Hallo Frau Muller: — менее формально.' },
          { emoji: 'bezug', title: 'Bezugnehmend', text: 'Ich schreibe Ihnen bezuglich... — стандартное начало.' },
          { emoji: 'anfrage', title: 'Anfragen', text: 'Konnten Sie mir bitte... zusenden? — вежливый запрос.' },
          { emoji: 'anhang', title: 'Anhang', text: 'Im Anhang finden Sie... — о вложении.' },
          { emoji: 'schluss', title: 'Schlussformel', text: 'Mit freundlichen Gruben, — стандартное завершение.' },
          { emoji: 'grube', title: 'Herzliche Grube', text: 'Менее формально, но профессионально.' },
          { emoji: 'sie', title: 'Sie vs du', text: 'Sie в первом контакте. du — после установления отношений.' }
        ]},
        quiz: { pool: [
          { q: 'Wie ist die formelle Anrede in einer Email?', options: ['Hallo!', 'Sehr geehrter Herr Schmidt:', 'Hi!', 'Tag!'], answer: 1, explain: 'Sehr geehrte(r) — формальное обращение.' },
          { q: 'Erganze: Ich schreibe Ihnen ___ dem Projekt.', options: ['uber', 'bezuglich', 'mit', 'von'], answer: 1, explain: 'bezuglich = относительно/по поводу.' },
          { q: 'Wie hangt man eine Datei an?', options: ['Ich habe eine Datei', 'Im Anhang finden Sie das Dokument', 'Die Datei ist hier', 'Siehe Datei'], answer: 1, explain: 'Im Anhang finden Sie... — стандартная фраза.' },
          { q: 'Erganze: Bezugnehmend ___ unser Telefonat...', options: ['auf', 'uber', 'mit', 'von'], answer: 0, explain: 'Bezugnehmend auf = ссылаясь на.' },
          { q: 'Welche Schlussformel ist formell?', options: ['Tschuss', 'Mit freundlichen Gruben', 'Bis bald', 'Hallo'], answer: 1, explain: 'Mit freundlichen Gruben — формальное завершение.' },
          { q: 'Erganze: ___ Sie mir bitte die Unterlagen zusenden?', options: ['Sollen', 'Konnten', 'Wollen', 'Mussen'], answer: 1, explain: 'Konnten Sie... = не могли бы вы...' },
          { q: 'Wie bittet man um eine Klarstellung?', options: ['Ich verstehe nicht', 'Konnten Sie das bitte erklaren?', 'Was?', 'Nochmal'], answer: 1, explain: 'Konnten Sie das bitte erklaren? — вежливо.' },
          { q: 'Erganze: In ___ auf Ihre Email...', options: ['Antwort', 'Folge', 'Ruckblick', 'Bezug'], answer: 0, explain: 'In Antwort auf = в ответ на.' },
          { q: 'Was ist der beste Betreff?', options: ['Hallo', 'Besprechung Budget - 15. Marz', 'Email', 'Wichtig'], answer: 1, explain: 'Тема должна быть ясной и конкретной.' },
          { q: 'Erganze: ___ Sie bitte, mich zu kontaktieren bei Fragen.', options: ['Zogern', 'Wollen', 'Mussen', 'Sollen'], answer: 0, explain: 'Zogern Sie bitte = не стесняйтесь.' },
          { q: 'Wann verwendet man "Sie" statt "du"?', options: ['Mit Freunden', 'Beim ersten formellen Kontakt', 'Nie', 'Immer'], answer: 1, explain: 'Sie — в формальном первом контакте.' },
          { q: 'Erganze: Anbei ___ ich Ihnen das Dokument.', options: ['gehe', 'sende', 'habe', 'gebe'], answer: 1, explain: 'Anbei sende ich = при сем отправляю.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: ___ Herr Schmidt, ich schreibe Ihnen bezuglich des Projekts.', answer: 'Sehr geehrter', explain: 'Sehr geehrter = формальное обращение (м.р.).' },
          { type: 'fill-blank', question: 'Erganze: Im ___ finden Sie das Dokument.', answer: 'Anhang', explain: 'Im Anhang = во вложении.' },
          { type: 'choice', question: 'Welche Schlussformel ist professionell?', options: ['Tschuss', 'Mit freundlichen Gruben', 'Bis bald', 'Hallo'], answer: 1, explain: 'Mit freundlichen Gruben = с уважением.' },
          { type: 'translate', question: 'Переведите: "Пожалуйста, найдите во вложении запрошенный документ."', answer: 'Im Anhang finden Sie das angeforderte Dokument', explain: 'Im Anhang = во вложении.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Ihnen', 'schreibe', 'bezglich', 'Ich', 'Projekts', 'des'], answer: 'Ich schreibe Ihnen bezglich des Projekts', explain: 'Стандартная формула.' },
          { type: 'correct', question: 'Finde und korrigiere: "Hallo Herr, ich will Info."', answer: 'Sehr geehrter Herr, ich schreibe Ihnen bezuglich der Informationen', explain: 'Формальный тон + вежливый запрос.' }
        ]}
      },
      {
        id: 'deb-l2', topic: 'Besprechungen (Meetings)',
        objective: 'An Besprechungen teilnehmen und diese leiten auf Deutsch.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Besprechungen auf Deutsch',
          text: 'Besprechungen sind ein wesentlicher Bestandteil des Berufslebens. Im deutschsprachigen Raum beginnen Meetings oft punktlich und folgen einer klaren Agenda.\n\n**Vor der Besprechung:**\n- Ich bestatige meine Teilnahme. (подтверждаю участие)\n- Ich kann leider nicht teilnehmen. (к сожалению, не могу участвовать)\n- Konnen wir die Besprechung verschieben? (можем перенести?)\n- Was steht auf der Tagesordnung? (какая повестка?)\n\n**Die Besprechung eroffnen:**\n- Danke, dass Sie alle gekommen sind. (спасибо всем за приход)\n- Ich mochte die Besprechung eroffnen. (объявляю собрание открытым)\n- Das Ziel dieser Besprechung ist... (цель этой встречи...)\n- Die Tagesordnung hat drei Punkte. (повестка включает три пункта)\n\n**Die Diskussion leiten:**\n- Wer mochte beginnen? (кто хочет начать?)\n- Ich gebe Frau Muller das Wort. (слово предоставляется госпоже Мюллер)\n- Was ist Ihre Meinung zu diesem Thema? (каково ваше мнение?)\n- Konnen wir zum Hauptthema zuruckkommen? (можем вернуться к главной теме?)\n\n**An der Diskussion teilnehmen:**\n- Darf ich etwas hinzufugen? (могу ли я добавить?)\n- Ich stimme... zu. (я согласен с...)\n- Ich bin nicht ganz Ihrer Meinung. (я не совсем согласен)\n- Aus meiner Sicht... (с моей точки зрения...)\n- Um das Gesagte zu erganzen... (чтобы дополнить сказанное...)\n\n**Entscheidungen treffen:**\n- Sind wir uns alle einig? (мы все согласны?)\n- Wer ist fur diesen Vorschlag? (кто за это предложение?)\n- Es wurde beschlossen, dass... (было решено, что...)\n\n**Aufgaben verteilen:**\n- Frau Muller, konnten Sie sich um... kummern? (не могли бы вы взять на себя...?)\n- Wer ist fur diese Aufgabe verantwortlich? (кто отвечает за эту задачу?)\n\n**Die Besprechung beenden:**\n- Zusammenfassend haben wir beschlossen, dass... (подводя итог, мы решили...)\n- Die nachste Besprechung findet am... statt. (следующая встреча...)\n- Ich sende Ihnen ein Protokoll. (отправлю вам протокол)\n- Ich schliesse die Besprechung. (закрываю собрание)\n\nIm deutschsprachigen Raum ist Zeitmanagement in Besprechungen wichtig. Man halt sich an die Tagesordnung.',
          textRu: 'Совещания — неотъемлемая часть профессиональной жизни. В немецкоязычном пространстве собрания часто начинаются пунктуально и следуют чёткой повестке.\n\n**Перед совещанием:**\n- Ich bestatige meine Teilnahme. (подтверждаю участие)\n- Ich kann leider nicht teilnehmen. (к сожалению, не могу участвовать)\n- Konnen wir die Besprechung verschieben? (можем перенести?)\n- Was steht auf der Tagesordnung? (какая повестка?)\n\n**Открытие совещания:**\n- Danke, dass Sie alle gekommen sind. (спасибо всем за приход)\n- Ich mochte die Besprechung eroffnen. (объявляю собрание открытым)\n- Das Ziel dieser Besprechung ist... (цель этой встречи...)\n- Die Tagesordnung hat drei Punkte. (повестка включает три пункта)\n\n**Ведение обсуждения:**\n- Wer mochte beginnen? (кто хочет начать?)\n- Ich gebe Frau Muller das Wort. (слово предоставляется госпоже Мюллер)\n- Was ist Ihre Meinung zu diesem Thema? (каково ваше мнение?)\n- Konnen wir zum Hauptthema zuruckkommen? (можем вернуться к главной теме?)\n\n**Участие в обсуждении:**\n- Darf ich etwas hinzufugen? (могу ли я добавить?)\n- Ich stimme... zu. (я согласен с...)\n- Ich bin nicht ganz Ihrer Meinung. (я не совсем согласен)\n- Aus meiner Sicht... (с моей точки зрения...)\n- Um das Gesagte zu erganzen... (чтобы дополнить сказанное...)\n\n**Принятие решений:**\n- Sind wir uns alle einig? (мы все согласны?)\n- Wer ist fur diesen Vorschlag? (кто за это предложение?)\n- Es wurde beschlossen, dass... (было решено, что...)\n\n**Распределение задач:**\n- Frau Muller, konnten Sie sich um... kummern? (не могли бы вы взять на себя...?)\n- Wer ist fur diese Aufgabe verantwortlich? (кто отвечает за эту задачу?)\n\n**Завершение совещания:**\n- Zusammenfassend haben wir beschlossen, dass... (подводя итог, мы решили...)\n- Die nachste Besprechung findet am... statt. (следующая встреча...)\n- Ich sende Ihnen ein Protokoll. (отправлю вам протокол)\n- Ich schliesse die Besprechung. (закрываю собрание)\n\nВ немецкоязычном пространстве управление временем на совещаниях важно. Придерживаются повестки дня.',
          vocab: [
            { word: 'Ich mochte die Besprechung eroffnen', trans: 'Объявляю собрание открытым' },
            { word: 'Die Tagesordnung', trans: 'Повестка дня' },
            { word: 'Ich gebe Ihnen das Wort', trans: 'Слово предоставляется вам' },
            { word: 'Ich stimme zu / Ich bin nicht einverstanden', trans: 'Я согласен / Я не согласен' },
            { word: 'Aus meiner Sicht', trans: 'С моей точки зрения' },
            { word: 'Es wurde beschlossen, dass...', trans: 'Было решено, что...' },
            { word: 'Zusammenfassend', trans: 'Подводя итог' },
            { word: 'Ich schliesse die Besprechung', trans: 'Закрываю собрание' }
          ]
        },
        video: { slides: [
          { emoji: 'eroeffnen', title: 'Eroffnen', text: 'Ich mochte die Besprechung eroffnen. — открытие.' },
          { emoji: 'ziel', title: 'Ziel', text: 'Das Ziel dieser Besprechung ist... — цель встречи.' },
          { emoji: 'agenda', title: 'Tagesordnung', text: 'Die Tagesordnung hat drei Punkte. — повестка.' },
          { emoji: 'wort', title: 'Das Wort geben', text: 'Ich gebe Frau Muller das Wort. — слово предоставляется.' },
          { emoji: 'zustimmen', title: 'Zustimmen', text: 'Ich stimme zu / Ich bin nicht einverstanden. — согласие/несогласие.' },
          { emoji: 'sicht', title: 'Aus meiner Sicht', text: 'Aus meiner Sicht... — с моей точки зрения.' },
          { emoji: 'aufgabe', title: 'Aufgabe', text: 'Kommen Sie sich um... kummern? — поручить задачу.' },
          { emoji: 'schluss', title: 'Beenden', text: 'Zusammenfassend... / Ich schliesse die Besprechung.' }
        ]},
        quiz: { pool: [
          { q: 'Wie eroffnet man eine Besprechung formell?', options: ['Hallo alle', 'Ich mochte die Besprechung eroffnen', 'Wir starten', 'Los'], answer: 1, explain: 'Ich mochte die Besprechung eroffnen — формально.' },
          { q: 'Erganze: Das ___ dieser Besprechung ist das Budget.', options: ['Thema', 'Ziel', 'Punkt', 'Agenda'], answer: 1, explain: 'Ziel = цель.' },
          { q: 'Wie gibt man jemandem das Wort?', options: ['Sprich', 'Ich gebe Ihnen das Wort', 'Jetzt Sie', 'Sag mal'], answer: 1, explain: 'Ich gebe Ihnen das Wort = слово предоставляется.' },
          { q: 'Erganze: Ich ___ dem Vorschlag zu.', options: ['gebe', 'stimme', 'habe', 'gehe'], answer: 1, explain: 'zustimmen: Ich stimme zu = согласен.' },
          { q: 'Wie druckt man "с моей точки зрения" aus?', options: ['Aus meiner Sicht', 'In meiner Meinung', 'Beides', 'Keines'], answer: 0, explain: 'Aus meiner Sicht = с моей точки зрения.' },
          { q: 'Erganze: ___ zum nachsten Punkt der Tagesordnung.', options: ['Gehen', 'Kommen', 'Machen', 'Sein'], answer: 1, explain: 'Wir kommen zum nachsten Punkt = переходим.' },
          { q: 'Wie verteilt man eine Aufgabe?', options: ['Mach das', 'Kommen Sie sich um dies kummern?', 'Sie mussen', 'Das ist fur Sie'], answer: 1, explain: 'Kommen Sie sich um... kummern? — вежливо.' },
          { q: 'Erganze: Es ___ beschlossen, dass das Projekt akzeptiert wird.', options: ['wurde', 'ist', 'hat', 'wird'], answer: 0, explain: 'Es wurde beschlossen = было решено.' },
          { q: 'Wie beendet man eine Besprechung?', options: ['Tschuss', 'Ich schliesse die Besprechung', 'Ich gehe', 'Ende'], answer: 1, explain: 'Ich schliesse die Besprechung = закрываю собрание.' },
          { q: 'Erganze: ___ haben wir beschlossen, dass...', options: ['Zusammenfassend', 'Am Ende', 'Schliesslich', 'Danach'], answer: 0, explain: 'Zusammenfassend = подводя итог.' },
          { q: 'Wie fragt man nach der Meinung?', options: ['Was?', 'Was ist Ihre Meinung zu diesem Thema?', 'Denken?', 'Meinung?'], answer: 1, explain: 'Was ist Ihre Meinung? = каково ваше мнение?' },
          { q: 'Erganze: Danke, dass Sie alle ___ sind.', options: ['hier', 'gekommen', 'da', 'anwesend'], answer: 1, explain: 'gekommen = пришли.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich mochte die Besprechung ___.', answer: 'eroeffnen', explain: 'eroeffnen = открыть.' },
          { type: 'fill-blank', question: 'Erganze: Ich ___ dem Vorschlag zu.', answer: 'stimme', explain: 'zustimmen: Ich stimme zu.' },
          { type: 'choice', question: 'Wie beendet man formell?', options: ['Ich gehe', 'Ich schliesse die Besprechung', 'Tschuss alle', 'Ende'], answer: 1, explain: 'Ich schliesse die Besprechung = закрываю.' },
          { type: 'translate', question: 'Переведите: "Слово предоставляется госпоже Мюллер."', answer: 'Ich gebe Frau Muller das Wort', explain: 'das Wort geben = предоставить слово.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['eroeffnen', 'Besprechung', 'Ich', 'die', 'mochte'], answer: 'Ich mochte die Besprechung eroeffnen', explain: 'Открытие собрания.' },
          { type: 'correct', question: 'Finde und korrigiere: "Muller, sprich jetzt."', answer: 'Frau Muller, ich gebe Ihnen das Wort', explain: 'Формально: das Wort geben.' }
        ]}
      },
      {
        id: 'deb-l3', topic: 'Prasentationen',
        objective: 'Professionelle Prasentationen auf Deutsch erstellen und halten.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Professionelle Prasentationen auf Deutsch',
          text: 'Eine gute Prasentation verbindet klaren Inhalt, logische Struktur und sichere Sprache. Im deutschsprachigen Geschaftsleben kann eine effektive Prasentation den Unterschied machen.\n\n**Struktur einer Prasentation:**\n1. Einleitung (Aufmerksamkeit wecken und Thema vorstellen)\n2. Hauptteil (Hauptpunkte mit Daten)\n3. Schluss (Zusammenfassung und Handlungsaufforderung)\n4. Fragen und Antworten\n\n**Die Prasentation beginnen:**\n- Guten Tag allerseits. Danke fur Ihr Kommen. (добрый день всем, спасибо за приход)\n- Ich mochte mit dem Dank beginnen fur... (хотел бы начать с благодарности...)\n- Das Thema von heute ist... (тема сегодняшнего дня...)\n- Heute mochte ich Ihnen uber... berichten. (сегодня я расскажу вам о...)\n\n**Die Struktur vorstellen:**\n- Meine Prasentation besteht aus drei Teilen. (моя презентация состоит из трех частей)\n- Zunachst werden wir... betrachten. (сначала мы рассмотрим...)\n- Danach werden wir zu... ubergehen. (затем перейдем к...)\n- Zum Schluss werden wir... zusammenfassen. (в заключение мы подытожим...)\n\n**Daten und Grafiken prasentieren:**\n- Wie Sie auf dieser Grafik sehen konnen... (как вы можете видеть на этом графике...)\n- Die Daten zeigen, dass... (данные показывают, что...)\n- Diese Zahl stellt eine Steigerung von 20% dar. (эта цифра представляет рост на 20%)\n\n**Wichtiges betonen:**\n- Es ist wichtig hervorzuheben, dass... (важно отметить, что...)\n- Es sollte beachtet werden, dass... (следует учесть, что...)\n- Was man sich merken sollte, ist... (что нужно запомнить, так это...)\n\n**Beenden:**\n- Zum Abschluss... (в заключение...)\n- Zusammenfassend... (подводя итог...)\n- Ich danke Ihnen fur Ihre Aufmerksamkeit. (благодарю за внимание)\n- Ich stehe fur Fragen zur Verfugung. (готов ответить на вопросы)\n\nTipp: Schauen Sie Ihr Publikum an, sprechen Sie langsam und deutlich, und lesen Sie nicht Ihre Folien Wort fur Wort vor.',
          textRu: 'Хорошая презентация сочетает ясное содержание, логичную структуру и уверенную речь. В немецкоязычной деловой жизни эффективная презентация может иметь решающее значение.\n\n**Структура презентации:**\n1. Введение (привлечь внимание и представить тему)\n2. Основная часть (главные пункты с данными)\n3. Заключение (резюме и призыв к действию)\n4. Вопросы и ответы\n\n**Начало презентации:**\n- Guten Tag allerseits. Danke fur Ihr Kommen. (добрый день всем, спасибо за приход)\n- Ich mochte mit dem Dank beginnen fur... (хотел бы начать с благодарности...)\n- Das Thema von heute ist... (тема сегодняшнего дня...)\n- Heute mochte ich Ihnen uber... berichten. (сегодня я расскажу вам о...)\n\n**Представление структуры:**\n- Meine Prasentation besteht aus drei Teilen. (моя презентация состоит из трех частей)\n- Zunachst werden wir... betrachten. (сначала мы рассмотрим...)\n- Danach werden wir zu... ubergehen. (затем перейдем к...)\n- Zum Schluss werden wir... zusammenfassen. (в заключение мы подытожим...)\n\n**Презентация данных и графиков:**\n- Wie Sie auf dieser Grafik sehen konnen... (как вы можете видеть на этом графике...)\n- Die Daten zeigen, dass... (данные показывают, что...)\n- Diese Zahl stellt eine Steigerung von 20% dar. (эта цифра представляет рост на 20%)\n\n**Подчёркивание важного:**\n- Es ist wichtig hervorzuheben, dass... (важно отметить, что...)\n- Es sollte beachtet werden, dass... (следует учесть, что...)\n- Was man sich merken sollte, ist... (что нужно запомнить, так это...)\n\n**Завершение:**\n- Zum Abschluss... (в заключение...)\n- Zusammenfassend... (подводя итог...)\n- Ich danke Ihnen fur Ihre Aufmerksamkeit. (благодарю за внимание)\n- Ich stehe fur Fragen zur Verfugung. (готов ответить на вопросы)\n\nСовет: смотрите на аудиторию, говорите медленно и отчётливо, не читайте слайды слово в слово.',
          vocab: [
            { word: 'Heute mochte ich Ihnen uber... berichten', trans: 'Сегодня расскажу вам о...' },
            { word: 'Wie Sie auf dieser Grafik sehen konnen', trans: 'Как видите на этом графике' },
            { word: 'Es ist wichtig hervorzuheben, dass...', trans: 'Важно отметить, что...' },
            { word: 'Danach werden wir zu... ubergehen', trans: 'Затем перейдем к...' },
            { word: 'Zum Abschluss / Zusammenfassend', trans: 'В заключение / Подводя итог' },
            { word: 'Ich stehe fur Fragen zur Verfugung', trans: 'Готов ответить на вопросы' },
            { word: 'Die Daten zeigen, dass...', trans: 'Данные показывают, что...' },
            { word: 'Ich danke Ihnen fur Ihre Aufmerksamkeit', trans: 'Благодарю за внимание' }
          ]
        },
        video: { slides: [
          { emoji: 'beginn', title: 'Beginnen', text: 'Guten Tag allerseits. Heute mochte ich Ihnen uber... berichten.' },
          { emoji: 'struktur', title: 'Struktur', text: 'Meine Prasentation besteht aus drei Teilen. — план.' },
          { emoji: 'zunachst', title: 'Zunachst', text: 'Zunachst werden wir... betrachten. — во-первых.' },
          { emoji: 'grafik', title: 'Grafiken', text: 'Wie Sie auf dieser Grafik sehen konnen... — ссылки на данные.' },
          { emoji: 'betonen', title: 'Betonen', text: 'Es ist wichtig hervorzuheben, dass... — подчеркнуть.' },
          { emoji: 'schluss', title: 'Schluss', text: 'Zum Abschluss... / Zusammenfassend... — заключение.' },
          { emoji: 'fragen', title: 'Fragen', text: 'Ich stehe fur Fragen zur Verfugung. — Q&A.' },
          { emoji: 'tipps', title: 'Tipps', text: 'Контакт глаз, говорить медленно, не читать слайды.' }
        ]},
        quiz: { pool: [
          { q: 'Wie beginnt man eine Prasentation?', options: ['Hallo', 'Guten Tag allerseits. Heute mochte ich Ihnen uber... berichten.', 'Ich starte', 'Los'], answer: 1, explain: 'Формальное начало с приветствием и темой.' },
          { q: 'Erganze: Meine Prasentation ___ aus drei Teilen.', options: ['besteht', 'hat', 'ist', 'geht'], answer: 0, explain: 'besteht aus = состоит из.' },
          { q: 'Wie prasentiert man eine Grafik?', options: ['Schau', 'Wie Sie auf dieser Grafik sehen konnen...', 'Das ist eine Grafik', 'Grafik'], answer: 1, explain: 'Стандартная фраза для данных.' },
          { q: 'Erganze: Es ist wichtig ___, dass...', options: ['sagen', 'hervorzuheben', 'sehen', 'wissen'], answer: 1, explain: 'hervorzuheben = отметить/подчеркнуть.' },
          { q: 'Wie ubergeht man zum nachsten Teil?', options: ['Nachste', 'Danach werden wir zu... ubergehen', 'Jetzt', 'Wir gehen'], answer: 1, explain: 'Danach werden wir zu... ubergehen — переход.' },
          { q: 'Erganze: Zum ___ mochte ich danken.', options: ['Abschluss', 'Ende', 'Schluss', 'Fazit'], answer: 0, explain: 'Zum Abschluss = в заключение.' },
          { q: 'Wie ladet man zu Fragen ein?', options: ['Fragen?', 'Ich stehe fur Fragen zur Verfugung', 'Willst du fragen?', 'Was?'], answer: 1, explain: 'Ich stehe fur Fragen zur Verfugung — профессионально.' },
          { q: 'Erganze: Die Daten ___, dass die Verkaufe gestiegen sind.', options: ['zeigen', 'sagen', 'haben', 'machen'], answer: 0, explain: 'zeigen = показывают.' },
          { q: 'Wie druckt man "во-первых" aus?', options: ['Erstens', 'Zunachst', 'Nummer eins', 'Das Erste'], answer: 1, explain: 'Zunachst = во-первых/сначала.' },
          { q: 'Erganze: Es ___ beachtet werden, dass die Frist kurz ist.', options: ['sollte', 'muss', 'ist', 'wird'], answer: 0, explain: 'Es sollte beachtet werden = следует учесть.' },
          { q: 'Wie fasst man am Ende zusammen?', options: ['Zusammenfassend', 'Am Ende', 'Insgesamt', 'Fertig'], answer: 0, explain: 'Zusammenfassend = подводя итог.' },
          { q: 'Erganze: Diese Zahl stellt eine ___ von 20% dar.', options: ['Steigerung', 'Erhohung', 'mehr', 'Wachstum'], answer: 0, explain: 'eine Steigerung = рост/увеличение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Heute mochte ich Ihnen uber das Projekt ___.', answer: 'berichten', explain: 'berichten uber = рассказать о.' },
          { type: 'fill-blank', question: 'Erganze: Zum ___ mochte ich Ihnen danken.', answer: 'Abschluss', explain: 'Zum Abschluss = в заключение.' },
          { type: 'choice', question: 'Wie prasentiert man eine Grafik?', options: ['Schau', 'Wie Sie auf dieser Grafik sehen konnen', 'Die Grafik', 'Grafik hier'], answer: 1, explain: 'Стандартная фраза для данных.' },
          { type: 'translate', question: 'Переведите: "Данные показывают рост на 20%."', answer: 'Die Daten zeigen eine Steigerung von 20%', explain: 'Daten zeigen + Steigerung.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Verfugung', 'zur', 'Fragen', 'stehe', 'Ich', 'fur'], answer: 'Ich stehe fur Fragen zur Verfugung', explain: 'Готов к вопросам.' },
          { type: 'correct', question: 'Finde und korrigiere: "Meine Prasentation hat drei Teile."', answer: 'Meine Prasentation besteht aus drei Teilen', explain: 'besteht aus = состоит из.' }
        ]}
      },
      {
        id: 'deb-l4', topic: 'Telefonieren im Beruf',
        objective: 'Professionelle Telefonate auf Deutsch fuehren und entgegennehmen.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Telefonieren im Beruf auf Deutsch',
          text: 'Berufliche Telefonate in einer Fremdsprache konnen einschuchternd sein, aber mit den richtigen Phrasen und etwas Ubung werden sie handhabbar. Der Schlussel ist, Strukturen fur jede Situation vorzubereiten.\n\n**Das Telefon entgegennehmen:**\n- Guten Tag, Firma [Name], am Apparat [Ihr Name]. (официально)\n- [Firma], Guten Tag. (kurz)\n- Hallo, hier spricht [Name]. (weniger formell)\n\n**Nach jemandem fragen:**\n- Konnte ich bitte Herrn Schmidt sprechen? (могу я поговорить с господином Шмидтом?)\n- Ich wurde gern mit Frau Muller sprechen. (хотел бы поговорить с госпожой Мюллер)\n- Konnten Sie mich mit dem Verkauf verbinden? (соедините с отделом продаж?)\n- Ist Herr Schmidt verfugbar? (доступен ли господин Шмидт?)\n\n**Um Geduld bitten:**\n- Einen Moment, bitte. (один момент, пожалуйста)\n- Ich stelle Sie in die Warteschleife. (ставлю вас на удержание)\n- Bitte haben Sie einen Moment Geduld. (подождите секунду)\n- Ich verbinde Sie. (соединяю)\n\n**Die Person ist nicht verfugbar:**\n- Es tut mir leid, Herr Schmidt ist momentan nicht erreichbar. (к сожалению, недоступен)\n- Er ist in einer Besprechung. (на совещании)\n- Er ist nicht im Buro. (нет в офисе)\n- Er ist in der Mittagspause. (ушел на обед)\n\n**Eine Nachricht hinterlassen:**\n- Konnte ich eine Nachricht hinterlassen? (могу оставить сообщение?)\n- Konnten Sie ihm ausrichten, dass Frau Muller angerufen hat? (передайте, что звонила...)\n- Meine Telefonnummer ist... (мой номер телефона...)\n- Konnten Sie ihn bitten, mich zuruckzurufen? (не могли бы попросить перезвонить?)\n\n**Um Wiederholung bitten:**\n- Verzeihung, ich habe nicht gut gehort. (извините, не расслышал)\n- Konnten Sie das bitte wiederholen? (не могли бы повторить?)\n- Ich habe nicht verstanden. Konnten Sie das wiederholen? (не понял. Повторить?)\n- Konnten Sie bitte langsamer sprechen? (можете говорить медленнее?)\n\n**Den Grund des Anrufs nennen:**\n- Ich rufe an wegen... (звоню по поводу...)\n- Der Grund meines Anrufs ist... (причина моего звонка...)\n- Ich melde mich bei Ihnen wegen... (связываюсь с вами по поводу...)\n\n**Das Telefonat beenden:**\n- Ich danke Ihnen fur Ihre Zeit. (благодарю за ваше время)\n- Auf Wiederhoren. (до свидания — по телефону)\n- Ich werde Ihnen eine Bestatigung per Email schicken. (отправлю подтверждающее письмо)\n\nAuf Deutsch sagt man am Telefon "Auf Wiederhoren" (не "Auf Wiedersehen"), da man sich nicht sieht.',
          textRu: 'Деловые телефонные звонки на иностранном языке могут пугать, но с правильными фразами и небольшой практикой они становятся выполнимыми. Ключ — заранее подготовить структуры для каждой ситуации.\n\n**Снятие трубки:**\n- Guten Tag, Firma [Name], am Apparat [Ihr Name]. (официально)\n- [Firma], Guten Tag. (кратко)\n- Hallo, hier spricht [Name]. (менее формально)\n\n**Спросить кого-то к телефону:**\n- Konnte ich bitte Herrn Schmidt sprechen? (могу я поговорить с господином Шмидтом?)\n- Ich wurde gern mit Frau Muller sprechen. (хотел бы поговорить с госпожой Мюллер)\n- Konnten Sie mich mit dem Verkauf verbinden? (соедините с отделом продаж?)\n- Ist Herr Schmidt verfugbar? (доступен ли господин Шмидт?)\n\n**Попросить подождать:**\n- Einen Moment, bitte. (один момент, пожалуйста)\n- Ich stelle Sie in die Warteschleife. (ставлю вас на удержание)\n- Bitte haben Sie einen Moment Geduld. (подождите секунду)\n- Ich verbinde Sie. (соединяю)\n\n**Человек недоступен:**\n- Es tut mir leid, Herr Schmidt ist momentan nicht erreichbar. (к сожалению, недоступен)\n- Er ist in einer Besprechung. (на совещании)\n- Er ist nicht im Buro. (нет в офисе)\n- Er ist in der Mittagspause. (ушел на обед)\n\n**Оставить сообщение:**\n- Konnte ich eine Nachricht hinterlassen? (могу оставить сообщение?)\n- Konnten Sie ihm ausrichten, dass Frau Muller angerufen hat? (передайте, что звонила...)\n- Meine Telefonnummer ist... (мой номер телефона...)\n- Konnten Sie ihn bitten, mich zuruckzurufen? (не могли бы попросить перезвонить?)\n\n**Попросить повторить:**\n- Verzeihung, ich habe nicht gut gehort. (извините, не расслышал)\n- Konnten Sie das bitte wiederholen? (не могли бы повторить?)\n- Ich habe nicht verstanden. Konnten Sie das wiederholen? (не понял. Повторить?)\n- Konnten Sie bitte langsamer sprechen? (можете говорить медленнее?)\n\n**Назвать причину звонка:**\n- Ich rufe an wegen... (звоню по поводу...)\n- Der Grund meines Anrufs ist... (причина моего звонка...)\n- Ich melde mich bei Ihnen wegen... (связываюсь с вами по поводу...)\n\n**Завершение звонка:**\n- Ich danke Ihnen fur Ihre Zeit. (благодарю за ваше время)\n- Auf Wiederhoren. (до свидания — по телефону)\n- Ich werde Ihnen eine Bestatigung per Email schicken. (отправлю подтверждающее письмо)\n\nПо-немецки по телефону говорят "Auf Wiederhoren" (не "Auf Wiedersehen"), так как собеседники не видят друг друга.',
          vocab: [
            { word: 'Konnte ich bitte Herrn Schmidt sprechen?', trans: 'Могу я поговорить с господином Шмидтом?' },
            { word: 'Ich stelle Sie in die Warteschleife', trans: 'Ставлю вас на удержание' },
            { word: 'Er ist nicht erreichbar', trans: 'Он недоступен (нет на месте)' },
            { word: 'Konnte ich eine Nachricht hinterlassen?', trans: 'Могу оставить сообщение?' },
            { word: 'Konnten Sie das bitte wiederholen?', trans: 'Не могли бы повторить?' },
            { word: 'Ich rufe an wegen...', trans: 'Звоню по поводу...' },
            { word: 'Zur Bestatigung...', trans: 'Для подтверждения...' },
            { word: 'Auf Wiederhoren', trans: 'До свидания (по телефону)' }
          ]
        },
        video: { slides: [
          { emoji: 'annehmen', title: 'Entgegennehmen', text: 'Guten Tag, [Firma], am Apparat [Name]. — как отвечать.' },
          { emoji: 'fragen', title: 'Nach jemandem fragen', text: 'Konnte ich bitte Herrn Schmidt sprechen? — попросить к телефону.' },
          { emoji: 'warten', title: 'Warteschleife', text: 'Ich stelle Sie in die Warteschleife. / Einen Moment, bitte.' },
          { emoji: 'nichtda', title: 'Nicht erreichbar', text: 'Er ist nicht erreichbar. / Er ist in einer Besprechung.' },
          { emoji: 'nachricht', title: 'Nachricht', text: 'Konnte ich eine Nachricht hinterlassen? — оставить сообщение.' },
          { emoji: 'wiederholen', title: 'Wiederholen', text: 'Konnten Sie das bitte wiederholen? — попросить повторить.' },
          { emoji: 'grund', title: 'Grund', text: 'Ich rufe an wegen... — цель звонка.' },
          { emoji: 'beenden', title: 'Beenden', text: 'Ich danke Ihnen fur Ihre Zeit. / Auf Wiederhoren. — завершение.' }
        ]},
        quiz: { pool: [
          { q: 'Wie fragt man nach jemandem?', options: ['Schmidt, jetzt', 'Konnte ich bitte Herrn Schmidt sprechen?', 'Ich will Schmidt', 'Gib mir Schmidt'], answer: 1, explain: 'Konnte ich bitte... sprechen? — вежливо.' },
          { q: 'Erganze: Ich stelle Sie in die ___.', options: ['Warteschleife', 'Leitung', 'Telefon', 'Wartezimmer'], answer: 0, explain: 'Warteschleife = удержание.' },
          { q: 'Was sagt man, wenn die Person nicht da ist?', options: ['Er ist weg', 'Er ist momentan nicht erreichbar', 'Ich weiss nicht', 'Er ist fort'], answer: 1, explain: 'nicht erreichbar — профессионально.' },
          { q: 'Wie bittet man um eine Nachricht?', options: ['Nachricht', 'Konnte ich eine Nachricht hinterlassen?', 'Ich will sagen', 'Sag ihm'], answer: 1, explain: 'Konnte ich eine Nachricht hinterlassen? — вежливо.' },
          { q: 'Man versteht nicht. Was sagt man?', options: ['Was?', 'Ich verstehe nicht', 'Konnten Sie das bitte wiederholen?', 'Nochmal'], answer: 2, explain: 'Konnten Sie das bitte wiederholen? — профессионально.' },
          { q: 'Erganze: Ich rufe ___ des Vertrags an.', options: ['wegen', 'uber', 'fur', 'von'], answer: 0, explain: 'wegen = по поводу.' },
          { q: 'Wie bittet man, langsamer zu sprechen?', options: ['Langsamer', 'Konnten Sie bitte langsamer sprechen?', 'Langsam', 'Ruhig'], answer: 1, explain: 'Konnten Sie bitte langsamer sprechen? — вежливо.' },
          { q: 'Erganze: ___ Bestatigung ist die Nummer 555-1234.', options: ['Zur', 'Fur', 'In', 'Mit'], answer: 0, explain: 'Zur Bestatigung = для подтверждения.' },
          { q: 'Wie beendet man ein Telefonat?', options: ['Tschuss', 'Ich danke Ihnen fur Ihre Zeit', 'Ciao', 'OK'], answer: 1, explain: 'Ich danke Ihnen fur Ihre Zeit — профессионально.' },
          { q: 'Erganze: Ich ___ mich bei Ihnen wegen des Projekts.', options: ['melde', 'rufe', 'habe', 'gehe'], answer: 0, explain: 'Ich melde mich bei Ihnen = связываюсь с вами.' },
          { q: 'Wie fragt man nach Verfugbarkeit?', options: ['Da?', 'Ist Herr Schmidt verfugbar?', 'Schmidt?', 'Haben Sie Schmidt?'], answer: 1, explain: 'Ist Herr Schmidt verfugbar? — правильно.' },
          { q: 'Erganze: Also, wenn ich richtig ___ habe...', options: ['gesehen', 'gehort', 'verstanden', 'gesprochen'], answer: 2, explain: 'Wenn ich richtig verstanden habe = если правильно понял.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Konnte ich bitte Herrn Schmidt ___?', answer: 'sprechen', explain: 'sprechen mit = говорить с.' },
          { type: 'fill-blank', question: 'Erganze: Ich stelle Sie in die ___.', answer: 'Warteschleife', explain: 'Warteschleife = на удержании.' },
          { type: 'choice', question: 'Man versteht nicht. Was sagt man?', options: ['Was?', 'Ich weiss nicht', 'Konnten Sie das bitte wiederholen?', 'Nochmal'], answer: 2, explain: 'Вежливо попросить повторить.' },
          { type: 'translate', question: 'Переведите: "Звоню по поводу контракта."', answer: 'Ich rufe wegen des Vertrags an', explain: 'wegen = по поводу.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Ihre', 'Ihnen', 'Ich', 'danke', 'Zeit', 'fur'], answer: 'Ich danke Ihnen fur Ihre Zeit', explain: 'Завершение звонка.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich will Schmidt sprechen."', answer: 'Konnte ich bitte Herrn Schmidt sprechen', explain: 'Вежливый тон + bitte.' }
        ]}
      },
      {
        id: 'deb-l5', topic: 'Bewerbungen (Job applications)',
        objective: 'Eine Bewerbung auf Deutsch vorbereiten und ein Vorstellungsgesprach fuehren.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Bewerbung und Vorstellungsgesprach auf Deutsch',
          text: 'Das Vorstellungsgesprach ist der entscheidende Moment bei der Jobsuche. Im deutschsprachigen Raum verbinden Vorstellungsgesprache professionelle Formalitat mit einer gewissen personlichen Warme. Die Vorbereitung ist der Schlussel zum Erfolg.\n\n**Der deutsche Lebenslauf:**\nDer deutsche Lebenslauf ist tabellarisch (in Tabellenform) und enthalt:\n- Personliche Daten (Name, Adresse, Telefon, Email)\n- Berufserfahrung (anti-chronologisch)\n- Ausbildung (Schule, Studium)\n- Kenntnisse (Sprachen, EDV)\n- Eventuell: Hobbys, Ehramtliches Engagement\n\nAufmerksamkeit: In Deutschland ist ein Bewerbungsfoto nicht mehr obligatorisch (aufer wenn ausdrucklich gefordert).\n\n**Vor dem Gesprach:**\n- Informieren Sie sich uber die Firma: Ich kenne Ihre Firma, weil...\n- Bereiten Sie Antworten auf haufige Fragen vor\n- Bringen Sie Kopien Ihres Lebenslaufs mit\n- Kommen Sie 10-15 Minuten zu fruh an\n\n**Die Begrunung:**\n- Guten Tag, freut mich, Sie kennenzulernen. (добрый день, рад знакомству)\n- Danke, dass Sie mich empfangen. (спасибо, что приняли)\n- Es ist mir eine Freude, hier zu sein. (для меня удовольствие быть здесь)\n\n**Sich vorstellen:**\n- Ich heisse [Name] und bin [Beruf].\n- Ich habe funf Jahre Erfahrung in... (у меня 5 лет опыта в...)\n- Ich habe bei [Firma] als [Position] gearbeitet. (работал в... как...)\n- Meine Spezialitat ist... (моя специализация...)\n\n**Haufige Fragen und Antworten:**\n1. Erzahlen Sie etwas uber sich. (расскажите о себе)\nAntwort: Ich bin [Beruf] mit Erfahrung in [Bereich]. In meiner letzten Position war ich verantwortlich fur...\n\n2. Warum mochten Sie bei uns arbeiten? (почему хотите работать у нас?)\nAntwort: Ich schatze Ihre Arbeit in [Bereich] und mochte mit meiner Erfahrung beitragen...\n\n3. Was sind Ihre Starken? (ваши сильные стороны?)\nAntwort: Ich bin organisiert, proaktiv und ein Teamplayer.\n\n4. Was sind Ihre Schwachen? (ваши слабые стороны?)\nAntwort: Ich neige manchmal zum Perfektionismus, aber ich lerne zu delegieren.\n\n5. Wo sehen Sie sich in funf Jahren? (где видите себя через 5 лет?)\nAntwort: Ich mochte mich innerhalb der Firma weiterentwickeln und mehr Verantwortung ubernehmen.\n\n**Erfahrung besprechen:**\n- In meiner vorigen Position war ich verantwortlich fur... (на прежней должности отвечал за...)\n- Ich habe die Verkaufe um 30% gesteigert. (увеличил продажи на 30%)\n- Ich habe ein Team von zehn Personen geleitet. (руководил командой из 10 человек)\n\n**Fragen stellen:**\n- Welche Entwicklungsmoglichkeiten gibt es? (какие возможности роста?)\n- Wie ist das Team organisiert? (как организована команда?)\n\n**Beenden:**\n- Vielen Dank fur Ihre Zeit und Ihr Interesse. (благодарю за время и интерес)\n- Ich stehe fur weitere Informationen zur Verfugung. (к вашим услугам для доп. информации)',
          textRu: 'Собеседование при приеме на работу — решающий момент в поиске работы. В немецкоязычном пространстве собеседования сочетают профессиональную формальность с определённым личным теплом. Подготовка — ключ к успеху.\n\n**Немецкое резюме (Lebenslauf):**\nНемецкое резюме представлено в виде таблицы и содержит:\n- Личные данные (имя, адрес, телефон, email)\n- Опыт работы (в обратном хронологическом порядке)\n- Образование (школа, учёба)\n- Знания (языки, ИТ)\n- При желании: хобби, волонтёрская деятельность\n\nВнимание: в Германии фото для резюме больше не обязательно (если прямо не запрошено).\n\n**Перед собеседованием:**\n- Изучите компанию: Ich kenne Ihre Firma, weil...\n- Подготовьте ответы на частые вопросы\n- Возьмите копии резюме\n- Приходите на 10-15 минут раньше\n\n**Приветствие:**\n- Guten Tag, freut mich, Sie kennenzulernen. (добрый день, рад знакомству)\n- Danke, dass Sie mich empfangen. (спасибо, что приняли)\n- Es ist mir eine Freude, hier zu sein. (для меня удовольствие быть здесь)\n\n**Представление себя:**\n- Ich heisse [Name] und bin [Beruf].\n- Ich habe funf Jahre Erfahrung in... (у меня 5 лет опыта в...)\n- Ich habe bei [Firma] als [Position] gearbeitet. (работал в... как...)\n- Meine Spezialitat ist... (моя специализация...)\n\n**Частые вопросы и ответы:**\n1. Erzahlen Sie etwas uber sich. (расскажите о себе)\nОтвет: Ich bin [Beruf] mit Erfahrung in [Bereich]. In meiner letzten Position war ich verantwortlich fur...\n\n2. Warum mochten Sie bei uns arbeiten? (почему хотите работать у нас?)\nОтвет: Ich schatze Ihre Arbeit in [Bereich] und mochte mit meiner Erfahrung beitragen...\n\n3. Was sind Ihre Starken? (ваши сильные стороны?)\nОтвет: Ich bin organisiert, proaktiv und ein Teamplayer.\n\n4. Was sind Ihre Schwachen? (ваши слабые стороны?)\nОтвет: Ich neige manchmal zum Perfektionismus, aber ich lerne zu delegieren.\n\n5. Wo sehen Sie sich in funf Jahren? (где видите себя через 5 лет?)\nОтвет: Ich mochte mich innerhalb der Firma weiterentwickeln und mehr Verantwortung ubernehmen.\n\n**Обсуждение опыта:**\n- In meiner vorigen Position war ich verantwortlich fur... (на прежней должности отвечал за...)\n- Ich habe die Verkaufe um 30% gesteigert. (увеличил продажи на 30%)\n- Ich habe ein Team von zehn Personen geleitet. (руководил командой из 10 человек)\n\n**Задавание вопросов:**\n- Welche Entwicklungsmoglichkeiten gibt es? (какие возможности роста?)\n- Wie ist das Team organisiert? (как организована команда?)\n\n**Завершение:**\n- Vielen Dank fur Ihre Zeit und Ihr Interesse. (благодарю за время и интерес)\n- Ich stehe fur weitere Informationen zur Verfugung. (к вашим услугам для доп. информации)',
          vocab: [
            { word: 'Erzahlen Sie etwas uber sich', trans: 'Расскажите о себе' },
            { word: 'Ich habe ... Jahre Erfahrung', trans: 'У меня ... лет опыта' },
            { word: 'Starken / Schwachen', trans: 'Сильные стороны / слабости' },
            { word: 'verantwortlich fur...', trans: 'отвечал за...' },
            { word: 'Warum mochten Sie bei uns arbeiten?', trans: 'Почему хотите работать у нас?' },
            { word: 'Diese Position interessiert mich, weil...', trans: 'Эта должность меня интересует, потому что...' },
            { word: 'Welche Entwicklungsmoglichkeiten gibt es?', trans: 'Какие возможности роста?' },
            { word: 'Ich stehe zur Verfugung', trans: 'Я к вашим услугам' }
          ]
        },
        video: { slides: [
          { emoji: 'begr', title: 'Begrunung', text: 'Guten Tag, freut mich, Sie kennenzulernen.' },
          { emoji: 'ueber', title: 'Uber sich', text: 'Ich bin [Beruf] mit Erfahrung in...' },
          { emoji: 'erfahrung', title: 'Erfahrung', text: 'Ich habe funf Jahre Erfahrung in...' },
          { emoji: 'staerken', title: 'Starken', text: 'Ich bin organisiert, proaktiv und ein Teamplayer.' },
          { emoji: 'schwaechen', title: 'Schwachen', text: 'Ich neige zum Perfektionismus. — честно, но с решением.' },
          { emoji: 'motiv', title: 'Motivation', text: 'Diese Position interessiert mich, weil...' },
          { emoji: 'fragen', title: 'Ihre Fragen', text: 'Welche Entwicklungsmoglichkeiten gibt es in der Firma?' },
          { emoji: 'schluss', title: 'Schluss', text: 'Vielen Dank fur Ihre Zeit und Ihr Interesse.' }
        ]},
        quiz: { pool: [
          { q: 'Wie stellt man sich im Gesprach vor?', options: ['Hallo', 'Guten Tag, freut mich, Sie kennenzulernen', 'Na, wie gehts?', 'Hier bin ich'], answer: 1, explain: 'Формальное приветствие с благодарностью.' },
          { q: 'Erganze: Ich habe funf ___ Erfahrung.', options: ['Jahre', 'Zeit', 'Mal', 'Tage'], answer: 0, explain: 'Jahre Erfahrung = лет опыта.' },
          { q: 'Wie spricht man uber vergangene Verantwortung?', options: ['Ich habe gemacht', 'Ich war verantwortlich fur', 'Ich hatte', 'Ich war da'], answer: 1, explain: 'Ich war verantwortlich fur = отвечал за.' },
          { q: 'Erganze: Was sind Ihre ___? (силы)', options: ['guten', 'Starken', 'hohen', 'grossen'], answer: 1, explain: 'Starken = сильные стороны.' },
          { q: 'Wie antwortet man auf "Warum bei uns?"', options: ['Wegen Geld', 'Diese Position interessiert mich, weil...', 'Ich weiss nicht', 'Warum nicht'], answer: 1, explain: 'Diese Position interessiert mich, weil... — профессионально.' },
          { q: 'Erganze: ___ Sie etwas uber sich.', options: ['Sagen', 'Erzahlen', 'Erzahlen', 'Sprechen'], answer: 2, explain: 'Erzahlen Sie etwas uber sich = расскажите о себе.' },
          { q: 'Wie fragt man nach Entwicklungsmoglichkeiten?', options: ['Aufstieg?', 'Welche Entwicklungsmoglichkeiten gibt es?', 'Karriere?', 'Gibt es was?'], answer: 1, explain: 'Welche Entwicklungsmoglichkeiten gibt es? — профессионально.' },
          { q: 'Erganze: Ich stehe ___ Verfugung fur weitere Informationen.', options: ['zur', 'fur', 'in', 'bei'], answer: 0, explain: 'zur Verfugung stehen = быть к услугам.' },
          { q: 'Wie beendet man das Gesprach?', options: ['Tschuss', 'Vielen Dank fur Ihre Zeit und Ihr Interesse', 'Bis bald', 'OK'], answer: 1, explain: 'Формальное завершение с благодарностью.' },
          { q: 'Erganze: In meiner ___ Position war ich verantwortlich fur...', options: ['neuen', 'vorigen', 'aktuellen', 'zukunftigen'], answer: 1, explain: 'vorigen = предыдущий.' },
          { q: 'Wie spricht man uber einen Erfolg?', options: ['Ich habe gut gemacht', 'Ich habe die Verkaufe um 30% gesteigert', 'Es war gut', 'Ich habe gewonnen'], answer: 1, explain: 'Ich habe... gesteigert — конкретно.' },
          { q: 'Erganze: Wo sehen Sie sich in funf ___?', options: ['Tagen', 'Jahren', 'Monaten', 'Wochen'], answer: 1, explain: 'funf Jahren — стандартный вопрос.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Ich habe drei Jahre ___ im Marketing.', answer: 'Erfahrung', explain: 'Erfahrung = опыт.' },
          { type: 'fill-blank', question: 'Erganze: Ich stehe ___ Verfugung fur weitere Informationen.', answer: 'zur', explain: 'zur Verfugung stehen = быть к услугам.' },
          { type: 'choice', question: 'Wie fragt man nach Entwicklungsmoglichkeiten?', options: ['Gibt es Arbeit?', 'Welche Entwicklungsmoglichkeiten gibt es?', 'Kann ich aufsteigen?', 'Karriere?'], answer: 1, explain: 'Профессиональная формулировка.' },
          { type: 'translate', question: 'Переведите: "Я отвечал за команду из 10 человек."', answer: 'Ich war fur ein Team von zehn Personen verantwortlich', explain: 'verantwortlich fur + Team.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Zeit', 'Ihre', 'Vielen', 'Dank', 'fur'], answer: 'Vielen Dank fur Ihre Zeit', explain: 'Благодарность за время.' },
          { type: 'correct', question: 'Finde und korrigiere: "Meine Schwachen sind keine."', answer: 'Ich neige zum Perfektionismus, aber ich lerne zu delegieren', explain: 'Позитивный ответ с планом улучшения.' }
        ]}
      },
      {
        id: 'deb-l6', topic: 'Verhandlungen',
        objective: 'Geschaftliche Verhandlungen auf Deutsch mit Taktgefuhl und Effektivitaet fuehren.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Geschaftliche Verhandlungen auf Deutsch',
          text: 'Die Verhandlung ist eine Kunst, die Strategie, Kommunikation und zwischenmenschliche Beziehungen verbindet. Im deutschsprachigen Raum werden in Verhandlungen sowohl Ergebnisse als auch personliche Beziehungen geschatzt. Es geht nicht nur ums Gewinnen, sondern um nachhaltige Abkommen.\n\n**Prinzipien der Verhandlung:**\n1. Vorbereitung: kennen Sie Ihre Ziele und Grenzen\n2. Aktives Zuhoren: verstehen Sie die Bedurfnisse des anderen\n3. Flexibilitat: seien Sie offen fur Alternativen\n4. Durchsetzungsvermogen: vertreten Sie Ihre Interessen mit Respekt\n5. Suche nach Win-Win-Losungen\n\n**Die Verhandlung eroffnen:**\n- Bevor wir beginnen, mochte ich Ihnen fur Ihre Zeit danken. (перед началом благодарю за время)\n- Mein Ziel heute ist es, eine Vereinbarung zu treffen, die fur beide Seiten vorteilhaft ist. (моя цель — достичь выгодного обеим сторонам соглашения)\n- Ich hoffe, dass wir eine beiderseits zufriedenstellende Losung finden konnen. (надеюсь найти взаимовыгодное решение)\n\n**Ihren Vorschlag prasentieren:**\n- Unser Vorschlag lautet wie folgt... (наше предложение следующее...)\n- Wir wurden vorschlagen... (мы хотели бы предложить...)\n- Auf der Grundlage unserer Analyse schlagen wir vor... (на основе анализа предлагаем...)\n- Die Bedingungen, die wir anbieten, sind... (предлагаемые условия...)\n\n**Teilzustimmung ausdrucken:**\n- Wir sind teilweise einverstanden, aber... (частично согласны, но...)\n- Dieser Punkt erscheint uns vernunftig, jedoch... (этот пункт кажется разумным, однако...)\n- Wir teilen Ihre Meinung bezuglich... (разделяем ваше мнение относительно...)\n- Ich verstehe Ihre Position, aber aus unserer Sicht... (понимаю вашу позицию, но с нашей точки зрения...)\n\n**Zugestandnisse machen:**\n- Wir waren bereit zu... (мы были бы готовы...)\n- Wenn Sie..., konnten wir... (если вы..., мы могли бы...)\n- Als Gegenleistung fordern wir... (в качестве встречного шага просим...)\n- Wir konnten bei... entgegenkommen im Austausch fur... (могли бы уступить в... взамен на...)\n\n**Ein Angebot ablehnen:**\n- Leider konnen wir diese Bedingung nicht akzeptieren. (к сожалению, не можем принять это условие)\n- Dieser Vorschlag passt nicht zu uns. (это предложение нам не подходит)\n- Das ubersteigt unser Budget. (это превышает наш бюджет)\n\n**Gegenangebot machen:**\n- Weren Sie einverstanden, wenn...? (что если...?)\n- Als Alternative schlagen wir vor... (в качестве альтернативы предлагаем...)\n\n**Abschlieben:**\n- Wir haben eine Einigung erzielt. (мы достигли соглашения)\n- Sollen wir den Vertrag aufsetzen? (перейдем к составлению контракта?)\n- Ich werde Ihnen eine Bestatigung per Email schicken. (отправлю подтверждение по почте)\n\nIm deutschsprachigen Raum sind Vertrauen und Verlasslichkeit wichtig. Ubersturzen Sie nichts.',
          textRu: 'Переговоры — это искусство, сочетающее стратегию, общение и межличностные отношения. В немецкоязычном пространстве на переговорах ценят как результаты, так и личные отношения. Речь идёт не только о победе, но и о построении прочных соглашений.\n\n**Принципы переговоров:**\n1. Подготовка: знайте свои цели и пределы\n2. Активное слушание: понимайте потребности другой стороны\n3. Гибкость: будьте открыты к альтернативам\n4. Настойчивость: отстаивайте свои интересы с уважением\n5. Поиск решений типа выигрыш-выигрыш\n\n**Открытие переговоров:**\n- Bevor wir beginnen, mochte ich Ihnen fur Ihre Zeit danken. (перед началом благодарю за время)\n- Mein Ziel heute ist es, eine Vereinbarung zu treffen, die fur beide Seiten vorteilhaft ist. (моя цель — достичь выгодного обеим сторонам соглашения)\n- Ich hoffe, dass wir eine beiderseits zufriedenstellende Losung finden konnen. (надеюсь найти взаимовыгодное решение)\n\n**Представление предложения:**\n- Unser Vorschlag lautet wie folgt... (наше предложение следующее...)\n- Wir wurden vorschlagen... (мы хотели бы предложить...)\n- Auf der Grundlage unserer Analyse schlagen wir vor... (на основе анализа предлагаем...)\n- Die Bedingungen, die wir anbieten, sind... (предлагаемые условия...)\n\n**Выражение частичного согласия:**\n- Wir sind teilweise einverstanden, aber... (частично согласны, но...)\n- Dieser Punkt erscheint uns vernunftig, jedoch... (этот пункт кажется разумным, однако...)\n- Wir teilen Ihre Meinung bezuglich... (разделяем ваше мнение относительно...)\n- Ich verstehe Ihre Position, aber aus unserer Sicht... (понимаю вашу позицию, но с нашей точки зрения...)\n\n**Уступки:**\n- Wir waren bereit zu... (мы были бы готовы...)\n- Wenn Sie..., konnten wir... (если вы..., мы могли бы...)\n- Als Gegenleistung fordern wir... (в качестве встречного шага просим...)\n- Wir konnten bei... entgegenkommen im Austausch fur... (могли бы уступить в... взамен на...)\n\n**Отказ от предложения:**\n- Leider konnen wir diese Bedingung nicht akzeptieren. (к сожалению, не можем принять это условие)\n- Dieser Vorschlag passt nicht zu uns. (это предложение нам не подходит)\n- Das ubersteigt unser Budget. (это превышает наш бюджет)\n\n**Встречное предложение:**\n- Weren Sie einverstanden, wenn...? (что если...?)\n- Als Alternative schlagen wir vor... (в качестве альтернативы предлагаем...)\n\n**Заключение:**\n- Wir haben eine Einigung erzielt. (мы достигли соглашения)\n- Sollen wir den Vertrag aufsetzen? (перейдем к составлению контракта?)\n- Ich werde Ihnen eine Bestatigung per Email schicken. (отправлю подтверждение по почте)\n\nВ немецкоязычном пространстве важны доверие и надёжность. Не торопите события.',
          vocab: [
            { word: 'vorteilhaft fur beide Seiten', trans: 'Выгодно обеим сторонам' },
            { word: 'Wir wurden vorschlagen...', trans: 'Мы хотели бы предложить...' },
            { word: 'Wir waren bereit zu...', trans: 'Мы были бы готовы...' },
            { word: 'Als Gegenleistung fordern wir...', trans: 'Встречным шагом просим...' },
            { word: 'Leider konnen wir nicht akzeptieren', trans: 'К сожалению, не можем принять' },
            { word: 'Waren Sie einverstanden, wenn...?', trans: 'Что если...?' },
            { word: 'Wir haben eine Einigung erzielt', trans: 'Мы достигли соглашения' },
            { word: 'Sollen wir den Vertrag aufsetzen?', trans: 'Перейдем к составлению контракта?' }
          ]
        },
        video: { slides: [
          { emoji: 'eroeffnen', title: 'Eroffnen', text: 'Mein Ziel ist eine Vereinbarung, die fur beide Seiten vorteilhaft ist.' },
          { emoji: 'vorschlagen', title: 'Vorschlagen', text: 'Unser Vorschlag lautet wie folgt... / Wir wurden vorschlagen...' },
          { emoji: 'teil', title: 'Teilzustimmung', text: 'Wir sind teilweise einverstanden, aber... — частичное согласие.' },
          { emoji: 'zugest', title: 'Zugestandnisse', text: 'Wir waren bereit zu... im Austausch fur... — уступить.' },
          { emoji: 'ablehnen', title: 'Ablehnen', text: 'Leider konnen wir diese Bedingung nicht akzeptieren.' },
          { emoji: 'gegen', title: 'Gegenangebot', text: 'Waren Sie einverstanden, wenn...? / Als Alternative...' },
          { emoji: 'abschluss', title: 'Abschluss', text: 'Wir haben eine Einigung erzielt. / Sollen wir den Vertrag aufsetzen?' },
          { emoji: 'vertrauen', title: 'Vertrauen', text: 'В немецкой культуре доверие и надёжность важнее спешки.' }
        ]},
        quiz: { pool: [
          { q: 'Wie eroffnet man eine Verhandlung?', options: ['Los gehts', 'Mein Ziel ist eine Vereinbarung, die fur beide Seiten vorteilhaft ist', 'Ich will gewinnen', 'Gib mir'], answer: 1, explain: 'Формальное открытие с акцентом на обоюдную выгоду.' },
          { q: 'Erganze: Wir wurden ___ eine Alternative vorschlagen.', options: ['geben', 'vorschlagen', 'haben', 'machen'], answer: 1, explain: 'vorschlagen = предложить.' },
          { q: 'Wie druckt man Teilzustimmung aus?', options: ['Ja', 'Nein', 'Wir sind teilweise einverstanden, aber...', 'Vielleicht'], answer: 2, explain: 'teilweise einverstanden, aber... — частичное согласие.' },
          { q: 'Erganze: Wir waren ___ zu verhandeln.', options: ['bereit', 'einverstanden', 'gut', 'froh'], answer: 0, explain: 'bereit zu = готовы к.' },
          { q: 'Wie lehnt man ein Angebot ab?', options: ['Nein', 'Leider konnen wir diese Bedingung nicht akzeptieren', 'Unmoglich', 'Nie'], answer: 1, explain: 'Вежливый, но твёрдый отказ.' },
          { q: 'Erganze: Als ___ fordern wir kurzere Fristen.', options: ['Gegenleistung', 'Anfrage', 'Angebot', 'Antwort'], answer: 0, explain: 'Als Gegenleistung = встречным шагом.' },
          { q: 'Wie macht man ein Gegenangebot?', options: ['Etwas anderes', 'Waren Sie einverstanden, wenn...?', 'Ich mag nicht', 'Anders'], answer: 1, explain: 'Waren Sie einverstanden, wenn...? — вежливая альтернатива.' },
          { q: 'Erganze: Wir haben eine Einigung ___.', options: ['erreicht', 'erzielt', 'gemacht', 'gehabt'], answer: 1, explain: 'Eine Einigung erzielen = достичь соглашения.' },
          { q: 'Wie schliet man den Vertrag ab?', options: ['Gut', 'Sollen wir den Vertrag aufsetzen?', 'Tschuss', 'OK'], answer: 1, explain: 'Sollen wir den Vertrag aufsetzen? — переход к контракту.' },
          { q: 'Erganze: Dieser Vorschlag ist nicht ___ fur uns.', options: ['gut', 'realisierbar', 'moglich', 'echt'], answer: 1, explain: 'nicht realisierbar = неосуществимо.' },
          { q: 'Wie fordert man etwas als Gegenleistung?', options: ['Ich will mehr', 'Als Gegenleistung fordern wir...', 'Gib mir', 'Mehr'], answer: 1, explain: 'Als Gegenleistung fordern wir... — встречное условие.' },
          { q: 'Erganze: Das erscheint mir ein ___ Abkommen fur beide Seiten.', options: ['Preis', 'Abkommen', 'Geschaeft', 'Vertrag'], answer: 1, explain: 'ein Abkommen = соглашение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Erganze: Wir wurden ___ eine alternative Losung vorschlagen.', answer: 'vorschlagen', explain: 'vorschlagen = предложить.' },
          { type: 'fill-blank', question: 'Erganze: Wir haben eine Einigung ___.', answer: 'erzielt', explain: 'Eine Einigung erzielen = достичь соглашения.' },
          { type: 'choice', question: 'Wie lehnt man hoeflich ab?', options: ['Nein', 'Unmoglich', 'Leider konnen wir nicht akzeptieren', 'Nie'], answer: 2, explain: 'Вежливый, но твёрдый отказ.' },
          { type: 'translate', question: 'Переведите: "Мы были бы готовы уступить в цене."', answer: 'Wir waren bereit, beim Preis entgegenzukommen', explain: 'bereit entgegenzukommen = готовы уступить.' },
          { type: 'order', question: 'Ordne die Worter:', words: ['Einigung', 'eine', 'haben', 'Wir', 'erzielt'], answer: 'Wir haben eine Einigung erzielt', explain: 'Достигли соглашения.' },
          { type: 'correct', question: 'Finde und korrigiere: "Ich will gewinnen."', answer: 'Mein Ziel ist eine Vereinbarung, die fur beide Seiten vorteilhaft ist', explain: 'Акцент на обоюдную выгоду.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._german_course_2 = COURSE;
})(window);
