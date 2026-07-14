/* ============================================================
   AES Paid French Course 2: Francais des Affaires (B1-B2)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'fr-business',
    title: 'Francais des Affaires Pro',
    price: 1500, oldPrice: 2990,
    level: 'B1-B2',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'dustyPink',
    art: ['#F2DCDC', '#E9C4C4'],
    tagline: 'Business French: emails, meetings, presentations. 6 modules.',
    lessons: [
      {
        id: 'frb-l1', topic: 'Courriels professionnels',
        objective: 'Rediger des emails professionnels en francais avec le ton et la structure adequats.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Courriels Professionnels en Francais',
          text: 'L\'email professionnel est l\'outil de communication le plus utilise dans le monde des affaires francophone. Un email bien redige peut faire la difference entre une reponse rapide et un message ignore.\n\nLa structure d\'un email professionnel francais comprend plusieurs elements essentiels. L\'objet doit etre clair et precis. La formule d\'appelation depend du destinataire et du niveau de formalite.\n\nPour un email formel, on utilise Madame ou Monsieur, ou Madame, Monsieur si on ne connait pas le destinataire. Si on connait le nom de la personne, on ecrit Cher Monsieur Dupont ou Chere Madame Martin. Avec un collegue proche, Bonjour Marie suffit.\n\n**Formules d\'ouverture:**\n- Je vous ecris concernant... (пишу относительно...)\n- Suite a notre conversation... (в продолжение нашего разговора...)\n- Je me permets de vous contacter pour... (позволяю себе связаться с вами...)\n- En reponse a votre email... (в ответ на ваше письмо...)\n\n**Demander des informations:**\n- Pourriez-vous me faire parvenir... (не могли бы вы прислать мне...)\n- Je souhaiterais obtenir des renseignements sur... (хотел бы получить информацию о...)\n- Pourriez-vous me preciser...? (не могли бы уточнить...?)\n\n**Joindre des documents:**\n- Veuillez trouver ci-joint... (пожалуйста, найдите во вложении...)\n- Vous trouverez en piece jointe... (вы найдете во вложении...)\n- Je vous joins le document demande. (прилагаю запрошенный документ)\n\n**Formules de cloture:**\n- Cordialement, (с уважением)\n- Bien cordialement, (с наилучшими пожеланиями)\n- Sinceres salutations, (искренние приветствия)\n- Je vous prie d\'agreer, Madame, Monsieur, l\'expression de mes salutations distinguees. (очень формально)\n\nLa regle d\'or: adaptez le ton au destinataire. Avec un nouveau client, restez formel. Avec un collegue proche, un ton plus detendu est acceptable. Un bon email est concis: ne depassez pas trois paragraphes.',
          vocab: [
            { word: 'Je vous ecris concernant...', trans: 'Я пишу вам по поводу...' },
            { word: 'Suite a notre conversation', trans: 'В продолжение нашей беседы' },
            { word: 'Veuillez trouver ci-joint', trans: 'Пожалуйста, найдите во вложении' },
            { word: 'Pourriez-vous me faire parvenir...', trans: 'Не могли бы вы прислать мне...' },
            { word: 'Cordialement,', trans: 'С уважением,' },
            { word: 'Je me permets de vous contacter', trans: 'Позволяю себе связаться с вами' },
            { word: 'En reponse a votre email', trans: 'В ответ на ваше письмо' },
            { word: 'Sinceres salutations', trans: 'Искренние приветствия' }
          ]
        },
        video: { slides: [
          { emoji: 'objet', title: 'L\'objet', text: 'Тема письма: ясная и точная.' },
          { emoji: 'appel', title: 'Formule d\'appel', text: 'Cher Monsieur Dupont: — формально. Bonjour Marie: — менее формально.' },
          { emoji: 'ouverture', title: 'Ouverture', text: 'Je vous ecris concernant... — стандартное начало.' },
          { emoji: 'info', title: 'Demander info', text: 'Pourriez-vous me faire parvenir... — вежливый запрос.' },
          { emoji: 'joint', title: 'Piece jointe', text: 'Veuillez trouver ci-joint... — о вложении.' },
          { emoji: 'cloture', title: 'Cloture', text: 'Cordialement, / Bien cordialement, — формальное завершение.' },
          { emoji: 'formule', title: 'Formules', text: 'Sinceres salutations, — очень формально.' },
          { emoji: 'ton', title: 'Ton adapte', text: 'Vous для нового клиента. Tu — после установления отношений.' }
        ]},
        quiz: { pool: [
          { q: 'Quel est un salut formel dans un email?', options: ['Salut!', 'Cher Monsieur Dupont:', 'Coucou!', 'Bonjour!'], answer: 1, explain: 'Cher Monsieur — формальное обращение.' },
          { q: 'Complete: Je vous ecris ___ le projet.', options: ['concernant', 'avec', 'pour', 'de'], answer: 0, explain: 'concernant = относительно/по поводу.' },
          { q: 'Comment joindre un fichier?', options: ['J\'ai un fichier', 'Veuillez trouver ci-joint le document', 'Le fichier est la', 'Regarde le fichier'], answer: 1, explain: 'Veuillez trouver ci-joint... — стандартная фраза.' },
          { q: 'Complete: Suite ___ notre conversation...', options: ['a', 'de', 'pour', 'avec'], answer: 0, explain: 'Suite a = в продолжение.' },
          { q: 'Quelle est une formule de cloture?', options: ['Adieu', 'Cordialement,', 'Salut', 'A bientot'], answer: 1, explain: 'Cordialement, — формальное завершение.' },
          { q: 'Complete: Pourriez-vous me faire ___ le document?', options: ['parvenir', 'voir', 'savoir', 'entendre'], answer: 0, explain: 'faire parvenir = передать/прислать.' },
          { q: 'Comment demandes-tu une information?', options: ['Je veux', 'Pourriez-vous me renseigner sur...?', 'Donne-moi', 'Quoi?'], answer: 1, explain: 'Pourriez-vous me renseigner? — вежливый запрос.' },
          { q: 'Complete: En ___ a votre email...', options: ['reponse', 'suite', 'retour', 'vue'], answer: 0, explain: 'En reponse a = в ответ на.' },
          { q: 'Quel est le meilleur objet?', options: ['Bonjour', 'Reunion budget - 15 mars', 'Email', 'Important'], answer: 1, explain: 'Объект должен быть ясным и конкретным.' },
          { q: 'Complete: Je me ___ de vous contacter pour...', options: ['permets', 'veux', 'dois', 'peux'], answer: 0, explain: 'Je me permets de = позволяю себе.' },
          { q: 'Quand utiliser vous au lieu de tu?', options: ['Avec des amis', 'Au premier contact formel', 'Jamais', 'Toujours'], answer: 1, explain: 'Vous — в формальном первом контакте.' },
          { q: 'Complete: Je vous prie d\'___ mes salutations distinguees.', options: ['agreer', 'avoir', 'voir', 'faire'], answer: 0, explain: 'agreer = принять (очень формально).' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: ___ Monsieur Dupont, je vous ecris concernant le projet.', answer: 'Cher', explain: 'Cher = формальное обращение.' },
          { type: 'fill-blank', question: 'Complete: Veuillez trouver ci-___ le document demande.', answer: 'joint', explain: 'ci-joint = во вложении.' },
          { type: 'choice', question: 'Quelle est une cloture professionnelle?', options: ['Salut', 'Cordialement,', 'Adieu', 'Ciao'], answer: 1, explain: 'Cordialement = с уважением.' },
          { type: 'translate', question: 'Переведите: "Пожалуйста, найдите во вложении запрошенный документ."', answer: 'Veuillez trouver ci-joint le document demande', explain: 'ci-joint = во вложении.' },
          { type: 'order', question: 'Mets en ordre:', words: ['concernant', 'ecris', 'vous', 'Je', 'projet', 'le'], answer: 'Je vous ecris concernant le projet', explain: 'Стандартная формула открытия.' },
          { type: 'correct', question: 'Trouve et corrige: Salut Monsieur, je veux info.', answer: 'Cher Monsieur, je vous ecris concernant les informations', explain: 'Формальный тон: Cher + вежливый запрос.' }
        ]}
      },
      {
        id: 'frb-l2', topic: 'Reunions professionnelles',
        objective: 'Participer et animer des reunions professionnelles en francais.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Reunions Professionnelles en Francais',
          text: 'Les reunions professionnelles sont une partie essentielle de la vie en entreprise. Dans le monde francophone, les reunions commencent souvent par quelques minutes de conversation informelle avant de passer aux sujets de travail.\n\n**Avant la reunion:**\n- Je confirme ma presence a la reunion. (подтверждаю участие)\n- Je ne pourrai pas assister a la reunion. (не смогу присутствовать)\n- Pouvons-nous reprogrammer la reunion? (можем перенести?)\n- Quel est l\'ordre du jour? (какая повестка?)\n\n**Ouvrir la reunion:**\n- Merci a tous d\'etre presents. (спасибо всем за присутствие)\n- Je declare la reunion ouverte. (объявляю собрание открытым)\n- L\'objectif de cette reunion est... (цель этой встречи...)\n- L\'ordre du jour comprend trois points. (повестка включает три пункта)\n\n**Animer la discussion:**\n- Qui souhaite commencer? (кто хочет начать?)\n- Je donne la parole a Marie. (слово предоставляется Мари)\n- Quel est votre avis sur ce sujet? (каково ваше мнение?)\n- Pouvons-nous revenir au sujet principal? (можем вернуться к главной теме?)\n\n**Participer a la discussion:**\n- Si vous le permettez, j\'aimerais ajouter... (если позволите, хотел бы добавить...)\n- Je suis d\'accord avec... (я согласен с...)\n- Je ne suis pas tout a fait d\'accord. (я не совсем согласен)\n- De mon point de vue... (с моей точки зрения...)\n- Pour completer ce qui a ete dit... (чтобы дополнить сказанное...)\n\n**Prendre des decisions:**\n- Sommes-nous tous d\'accord? (мы все согласны?)\n- Qui est pour cette proposition? (кто за это предложение?)\n- Il est decide que... (решено, что...)\n\n**Conclure la reunion:**\n- Pour resumer, nous avons decide de... (подводя итог, мы решили...)\n- La prochaine reunion est prevue le... (следующая встреча запланирована на...)\n- Je vous envoie un compte-rendu. (отправлю вам протокол)\n- Je leve la seance. (закрываю собрание)\n\nLa gestion du temps est importante. Dans la culture francophone, on respecte l\'ordre du jour, mais les discussions peuvent s\'etendre.',
          vocab: [
            { word: 'Je declare la reunion ouverte', trans: 'Объявляю собрание открытым' },
            { word: 'L\'ordre du jour', trans: 'Повестка дня' },
            { word: 'Je donne la parole a...', trans: 'Слово предоставляется...' },
            { word: 'Je suis d\'accord', trans: 'Я согласен' },
            { word: 'De mon point de vue', trans: 'С моей точки зрения' },
            { word: 'Il est decide que...', trans: 'Решено, что...' },
            { word: 'Pour resumer', trans: 'Подводя итог' },
            { word: 'Je leve la seance', trans: 'Закрываю собрание' }
          ]
        },
        video: { slides: [
          { emoji: 'ouvrir', title: 'Ouvrir', text: 'Merci a tous d\'etre presents. / Je declare la reunion ouverte.' },
          { emoji: 'objectif', title: 'Objectif', text: 'L\'objectif de cette reunion est... — цель встречи.' },
          { emoji: 'ordre', title: 'Ordre du jour', text: 'L\'ordre du jour comprend trois points. — повестка.' },
          { emoji: 'parole', title: 'Donner la parole', text: 'Je donne la parole a Marie. — слово предоставляется.' },
          { emoji: 'accord', title: 'Accord', text: 'Je suis d\'accord / Je ne suis pas d\'accord. — согласие/несогласие.' },
          { emoji: 'vue', title: 'Point de vue', text: 'De mon point de vue... — с моей точки зрения.' },
          { emoji: 'tache', title: 'Assigner', text: 'Marie, pourriez-vous vous charger de...? — поручить задачу.' },
          { emoji: 'conclure', title: 'Conclure', text: 'Pour resumer... / Je leve la seance. — итог и закрытие.' }
        ]},
        quiz: { pool: [
          { q: 'Comment ouvres-tu une reunion formellement?', options: ['Bonjour tous', 'Je declare la reunion ouverte', 'On commence', 'Allez'], answer: 1, explain: 'Je declare la reunion ouverte — формально.' },
          { q: 'Complete: L\'___ de cette reunion est discuter le budget.', options: ['sujet', 'objectif', 'point', 'ordre'], answer: 1, explain: 'objectif = цель.' },
          { q: 'Comment donnes-tu la parole a quelqu\'un?', options: ['Parle', 'Je donne la parole a Marie', 'Marie parle', 'Dis-moi Marie'], answer: 1, explain: 'Je donne la parole a... = слово предоставляется.' },
          { q: 'Complete: Je suis d\'___ avec la proposition.', options: ['accord', 'cercle', 'cort', 'acuerda'], answer: 0, explain: 'd\'accord = согласен.' },
          { q: 'Comment exprimes-tu ton point de vue?', options: ['De mon point de vue', 'En mon opinion', 'Les deux', 'Aucune'], answer: 0, explain: 'De mon point de vue = с моей точки зрения.' },
          { q: 'Complete: ___ au point suivant de l\'ordre du jour.', options: ['Allons', 'Passons', 'Venons', 'Sommes'], answer: 1, explain: 'Passons au point suivant = переходим.' },
          { q: 'Comment assignes-tu une tache?', options: ['Marie, fais ca', 'Marie, pourriez-vous vous charger de ceci?', 'Marie doit', 'Marie, ca'], answer: 1, explain: 'pourriez-vous vous charger de...? — вежливо.' },
          { q: 'Complete: Il est ___ que le projet est accepte.', options: ['decide', 'dit', 'vu', 'fait'], answer: 0, explain: 'Il est decide que = решено, что.' },
          { q: 'Comment conclues-tu une reunion?', options: ['Adieu', 'Je leve la seance', 'Je pars', 'Termine'], answer: 1, explain: 'Je leve la seance = закрываю собрание.' },
          { q: 'Complete: Pour ___ , nous avons decide de...', options: ['resumer', 'dire', 'parler', 'voir'], answer: 0, explain: 'Pour resumer = подводя итог.' },
          { q: 'Comment demandes-tu l\'avis de quelqu\'un?', options: ['Quoi?', 'Quel est votre avis sur ce sujet?', 'Pense?', 'Avis?'], answer: 1, explain: 'Quel est votre avis? = каково ваше мнение?' },
          { q: 'Complete: Merci a tous d\'___ presents.', options: ['etre', 'avoir', 'faire', 'aller'], answer: 0, explain: 'd\'etre presents = за присутствие.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Je declare la reunion ___ .', answer: 'ouverte', explain: 'ouverte — собрание открыто.' },
          { type: 'fill-blank', question: 'Complete: Je suis d\'___ avec la proposition.', answer: 'accord', explain: 'd\'accord = согласен.' },
          { type: 'choice', question: 'Comment conclues-tu formellement?', options: ['Je pars', 'Je leve la seance', 'Adieu a tous', 'Termine'], answer: 1, explain: 'Je leve la seance = закрываю.' },
          { type: 'translate', question: 'Переведите: "Слово предоставляется Мари."', answer: 'Je donne la parole a Marie', explain: 'donner la parole = предоставить слово.' },
          { type: 'order', question: 'Mets en ordre:', words: ['ouverte', 'reunion', 'declare', 'Je', 'la'], answer: 'Je declare la reunion ouverte', explain: 'Открытие собрания.' },
          { type: 'correct', question: 'Trouve et corrige: Marie, parle maintenant.', answer: 'Marie, je vous donne la parole', explain: 'Формально: je vous donne la parole.' }
        ]}
      },
      {
        id: 'frb-l3', topic: 'Presentations professionnelles',
        objective: 'Creer et presenter des presentations professionnelles en francais avec confiance.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Presentations Professionnelles en Francais',
          text: 'Une bonne presentation combine un contenu clair, une structure logique et un langage assure. Dans le milieu professionnel francophone, une presentation efficace peut faire la difference entre convaincre ou non ses interlocuteurs.\n\n**Structure d\'une presentation:**\n1. Introduction (capter l\'attention et presenter le sujet)\n2. Developpement (points principaux avec donnees)\n3. Conclusion (resume et appel a l\'action)\n4. Questions et reponses\n\n**Demarrer la presentation:**\n- Bonjour a tous. Merci de votre presence. (доброе утро всем, спасибо за присутствие)\n- J\'aimerais commencer par remercier... (хотел бы начать, поблагодарив...)\n- Le sujet d\'aujourd\'hui est... (тема сегодняшнего дня...)\n- Aujourd\'hui, je vais vous parler de... (сегодня я расскажу вам о...)\n\n**Presenter la structure:**\n- Ma presentation se divise en trois parties. (моя презентация делится на три части)\n- Tout d\'abord, nous aborderons... (во-первых, рассмотрим...)\n- Ensuite, nous passerons a... (затем перейдем к...)\n- Pour finir, nous conclurons sur... (наконец, закончим на...)\n\n**Presenter des donnees et des graphiques:**\n- Comme vous pouvez le voir sur ce graphique... (как видно на этом графике...)\n- Les donnees montrent que... (данные показывают, что...)\n- Ce chiffre represente une augmentation de 20%. (эта цифра представляет рост на 20%)\n\n**Souligner l\'importance:**\n- Il est important de souligner que... (важно отметить, что...)\n- Il convient de noter que... (следует отметить, что...)\n- Ce qu\'il faut retenir, c\'est... (что нужно запомнить, так это...)\n\n**Conclure:**\n- Pour conclure... (в заключение...)\n- En resume... (вкратце...)\n- Je vous remercie de votre attention. (благодарю за внимание)\n- Je reste a votre disposition pour vos questions. (готов ответить на вопросы)\n\nConseil: regardez votre public, parlez lentement et distinctement, et ne lisez pas vos diapositives mot a mot.',
          vocab: [
            { word: 'Aujourd\'hui, je vais vous parler de...', trans: 'Сегодня расскажу вам о...' },
            { word: 'Comme vous pouvez le voir sur ce graphique', trans: 'Как видите на этом графике' },
            { word: 'Il est important de souligner que...', trans: 'Важно отметить, что...' },
            { word: 'Ensuite, nous passerons a...', trans: 'Затем перейдем к...' },
            { word: 'Pour conclure / En resume', trans: 'В заключение / Вкратце' },
            { word: 'Je reste a votre disposition', trans: 'Я к вашим услугам (для вопросов)' },
            { word: 'Les donnees montrent que...', trans: 'Данные показывают, что...' },
            { word: 'Il convient de noter que...', trans: 'Следует отметить, что...' }
          ]
        },
        video: { slides: [
          { emoji: 'demarrer', title: 'Demarrer', text: 'Bonjour a tous. Aujourd\'hui, je vais vous parler de...' },
          { emoji: 'structure', title: 'Structure', text: 'Ma presentation se divise en trois parties. — план.' },
          { emoji: 'abord', title: 'Tout d\'abord', text: 'Tout d\'abord, nous aborderons... — во-первых.' },
          { emoji: 'graphique', title: 'Graphiques', text: 'Comme vous pouvez le voir sur ce graphique... — ссылки на данные.' },
          { emoji: 'souligner', title: 'Souligner', text: 'Il est important de souligner que... — подчеркнуть.' },
          { emoji: 'conclure', title: 'Conclure', text: 'Pour conclure... / En resume... — заключение.' },
          { emoji: 'questions', title: 'Questions', text: 'Je reste a votre disposition pour vos questions. — Q&A.' },
          { emoji: 'conseils', title: 'Conseils', text: 'Контакт глаз, говорить медленно, не читать слайды.' }
        ]},
        quiz: { pool: [
          { q: 'Comment demarres-tu une presentation?', options: ['Salut', 'Bonjour a tous. Aujourd\'hui, je vais vous parler de...', 'Je commence', 'On y va'], answer: 1, explain: 'Формальное начало с приветствием и темой.' },
          { q: 'Complete: Ma presentation se ___ en trois parties.', options: ['divise', 'fait', 'a', 'va'], answer: 0, explain: 'se divise en = делится на.' },
          { q: 'Comment presentes-tu un graphique?', options: ['Regarde', 'Comme vous pouvez le voir sur ce graphique...', 'C\'est un graphique', 'Graphique'], answer: 1, explain: 'Стандартная фраза для данных.' },
          { q: 'Complete: Il est important de ___ que...', options: ['dire', 'souligner', 'voir', 'savoir'], answer: 1, explain: 'souligner = отметить/подчеркнуть.' },
          { q: 'Comment passes-tu a la partie suivante?', options: ['Suivant', 'Ensuite, nous passerons a...', 'Maintenant', 'On va'], answer: 1, explain: 'Ensuite, nous passerons a... — переход.' },
          { q: 'Complete: Pour ___ , je voudrais remercier.', options: ['conclure', 'finir', 'dire', 'voir'], answer: 0, explain: 'Pour conclure = в заключение.' },
          { q: 'Comment invites-tu aux questions?', options: ['Questions?', 'Je reste a votre disposition pour vos questions', 'Tu veux demander?', 'Quoi?'], answer: 1, explain: 'Je reste a votre disposition... — профессионально.' },
          { q: 'Complete: Les donnees ___ que les ventes ont augmente.', options: ['montrent', 'disent', 'ont', 'font'], answer: 0, explain: 'montrent = показывают.' },
          { q: 'Comment exprimes-tu "во-первых"?', options: ['Premier', 'Tout d\'abord', 'Numero un', 'Le premier'], answer: 1, explain: 'Tout d\'abord = во-первых.' },
          { q: 'Complete: Il ___ de noter que le delai est court.', options: ['convient', 'faut', 'est', 'doit'], answer: 0, explain: 'Il convient de noter = следует отметить.' },
          { q: 'Comment resumes-tu a la fin?', options: ['En resume', 'Enfin', 'Total', 'Fin'], answer: 0, explain: 'En resume = вкратце.' },
          { q: 'Complete: Ce chiffre represente une ___ de 20%.', options: ['hausse', 'augmentation', 'montee', 'plus'], answer: 1, explain: 'une augmentation = рост/увеличение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Aujourd\'hui, je vais vous ___ du projet.', answer: 'parler', explain: 'parler de = рассказать о.' },
          { type: 'fill-blank', question: 'Complete: Pour ___ , je voudrais vous remercier.', answer: 'conclure', explain: 'Pour conclure = в заключение.' },
          { type: 'choice', question: 'Comment presentes-tu un graphique?', options: ['Regarde', 'Comme vous pouvez le voir sur ce graphique', 'Le graphique', 'Graphique ici'], answer: 1, explain: 'Стандартная фраза для данных.' },
          { type: 'translate', question: 'Переведите: "Данные показывают рост на 20%."', answer: 'Les donnees montrent une augmentation de 20%', explain: 'donnees montrent + augmentation.' },
          { type: 'order', question: 'Mets en ordre:', words: ['disposition', 'votre', 'Je', 'reste', 'a'], answer: 'Je reste a votre disposition', explain: 'Готов к вопросам.' },
          { type: 'correct', question: 'Trouve et corrige: Ma presentation a trois parties.', answer: 'Ma presentation se divise en trois parties', explain: 'se divise en = делится на.' }
        ]}
      },
      {
        id: 'frb-l4', topic: 'Appels telephoniques professionnels',
        objective: 'Realiser et recevoir des appels telephoniques professionnels en francais.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Appels Telephoniques Professionnels en Francais',
          text: 'Les appels telephoniques professionnels dans une langue etrangere peuvent etre intimidants, mais avec les phrases adequates et de la pratique, ils deviennent gerables. La cle est d\'avoir des structures preparees pour chaque situation.\n\n**Decrocher le telephone:**\n- Bonjour, entreprise [Nom], a l\'appareil [Votre nom]. (официально)\n- [Entreprise], bonjour. (bref)\n- Bonjour, ici [Nom]. (moins formel)\n\n**Demander a parler a quelqu\'un:**\n- Pourrais-je parler a Monsieur Garcia? (могу я поговорить с...?)\n- Je voudrais parler a Marie Lopez. (хотел бы поговорить с...)\n- Pourriez-vous me passer le service commercial? (соедините с отделом продаж?)\n- Monsieur Perez est-il disponible? (доступен ли господин Перес?)\n\n**Demander de patienter:**\n- Un instant, s\'il vous plait. (один момент, пожалуйста)\n- Je vous mets en attente. (ставлю вас на удержание)\n- Veuillez patienter un instant. (подождите секунду)\n- Je vous le passe. (соединяю)\n\n**La personne n\'est pas disponible:**\n- Je suis desole, Monsieur Garcia n\'est pas disponible en ce moment. (к сожалению, недоступен)\n- Il est en reunion. (на совещании)\n- Il n\'est pas au bureau. (нет в офисе)\n- Il est parti dejeuner. (ушел на обед)\n\n**Laisser un message:**\n- Pourrais-je lui laisser un message? (могу оставить сообщение?)\n- Pouvez-vous lui dire que Marie Lopez a appele? (передайте, что звонила...)\n- Mon numero de telephone est... (мой номер телефона...)\n- Pourriez-vous lui demander de me rappeler? (не могли бы попросить перезвонить?)\n\n**Demander de repeter ou d\'eclaircir:**\n- Pardon, je n\'ai pas bien entendu. (извините, не расслышал)\n- Pourriez-vous repeter, s\'il vous plait? (не могли бы повторить?)\n- Je n\'ai pas compris. Pourriez-vous repeter? (не понял. Повторить?)\n- Pouvez-vous parler plus lentement, s\'il vous plait? (можете говорить медленнее?)\n\n**Terminer l\'appel:**\n- Je vous remercie de votre temps. (благодарю за ваше время)\n- Au revoir et bonne journee. (до свидания и хорошего дня)\n- Je vous enverrai un email de confirmation. (отправлю подтверждающее письмо)',
          vocab: [
            { word: 'Pourrais-je parler a...?', trans: 'Могу я поговорить с...?' },
            { word: 'Je vous mets en attente', trans: 'Ставлю вас на удержание' },
            { word: 'Il n\'est pas disponible', trans: 'Он недоступен (нет на месте)' },
            { word: 'Pourrais-je lui laisser un message?', trans: 'Могу оставить ему сообщение?' },
            { word: 'Pourriez-vous repeter, s\'il vous plait?', trans: 'Не могли бы повторить, пожалуйста?' },
            { word: 'Je vous appelle au sujet de...', trans: 'Звоню по поводу...' },
            { word: 'Pour confirmer...', trans: 'Для подтверждения...' },
            { word: 'Je vous remercie de votre temps', trans: 'Благодарю за ваше время' }
          ]
        },
        video: { slides: [
          { emoji: 'decrocher', title: 'Decrocher', text: 'Bonjour, [Entreprise], a l\'appareil [Nom]. — как отвечать.' },
          { emoji: 'demander', title: 'Demander', text: 'Pourrais-je parler a Monsieur Garcia? — попросить к телефону.' },
          { emoji: 'attente', title: 'En attente', text: 'Je vous mets en attente. / Un instant, s\'il vous plait. — удержание.' },
          { emoji: 'indispo', title: 'Indisponible', text: 'Il n\'est pas disponible. / Il est en reunion. — человека нет.' },
          { emoji: 'message', title: 'Message', text: 'Pourrais-je lui laisser un message? — оставить сообщение.' },
          { emoji: 'repeter', title: 'Repeter', text: 'Pourriez-vous repeter, s\'il vous plait? — попросить повторить.' },
          { emoji: 'motif', title: 'Motif', text: 'Je vous appelle au sujet de... — цель звонка.' },
          { emoji: 'terminer', title: 'Terminer', text: 'Je vous remercie de votre temps. — завершение.' }
        ]},
        quiz: { pool: [
          { q: 'Comment demandes-tu a parler a quelqu\'un?', options: ['Marie, maintenant', 'Pourrais-je parler a Monsieur Garcia?', 'Je veux Marie', 'Donne-moi Marie'], answer: 1, explain: 'Pourrais-je parler a...? — вежливо.' },
          { q: 'Complete: Je vous mets en ___.', options: ['attente', 'ligne', 'telephone', 'voie'], answer: 0, explain: 'en attente = на удержании.' },
          { q: 'Que dis-tu si la personne n\'est pas la?', options: ['Il n\'est pas la', 'Il n\'est pas disponible en ce moment', 'Je ne sais pas', 'Il est parti'], answer: 1, explain: 'n\'est pas disponible — профессионально.' },
          { q: 'Comment demandes-tu a laisser un message?', options: ['Message', 'Pourrais-je lui laisser un message?', 'Je veux dire quelque chose', 'Dis-lui'], answer: 1, explain: 'Pourrais-je lui laisser un message? — вежливо.' },
          { q: 'Tu ne comprends pas. Que dis-tu?', options: ['Quoi?', 'Je ne comprends pas', 'Pourriez-vous repeter, s\'il vous plait?', 'Encore'], answer: 2, explain: 'Pourriez-vous repeter? — профессионально.' },
          { q: 'Complete: Je vous appelle ___ sujet du contrat.', options: ['au', 'du', 'pour', 'de'], answer: 0, explain: 'au sujet de = по поводу.' },
          { q: 'Comment demandes-tu de parler plus lentement?', options: ['Plus lentement', 'Pouvez-vous parler plus lentement, s\'il vous plait?', 'Lent', 'Doucement'], answer: 1, explain: 'Pouvez-vous parler plus lentement? — вежливо.' },
          { q: 'Complete: ___ confirmer, le numero est le 555-1234.', options: ['Pour', 'Par', 'En', 'Avec'], answer: 0, explain: 'Pour confirmer = для подтверждения.' },
          { q: 'Comment termines-tu l\'appel?', options: ['Adieu', 'Je vous remercie de votre temps', 'Salut', 'OK'], answer: 1, explain: 'Je vous remercie de votre temps — профессионально.' },
          { q: 'Complete: Je me ___ de vous appeler pour vous informer.', options: ['permets', 'dois', 'veux', 'peux'], answer: 0, explain: 'Je me permets de = позволяю себе.' },
          { q: 'Comment demandes-tu si quelqu\'un est disponible?', options: ['Il est la?', 'Monsieur Perez est-il disponible?', 'Perez?', 'Vous avez Perez?'], answer: 1, explain: 'est-il disponible? — правильно.' },
          { q: 'Complete: Alors, si j\'ai bien ___ , vous souhaitez...', options: ['vu', 'entendu', 'compris', 'parle'], answer: 2, explain: 'si j\'ai bien compris = если правильно понял.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Pourrais-je parler ___ Monsieur Garcia?', answer: 'a', explain: 'parler a = говорить с.' },
          { type: 'fill-blank', question: 'Complete: Je vous mets en ___.', answer: 'attente', explain: 'en attente = на удержании.' },
          { type: 'choice', question: 'Tu ne comprends pas. Que dis-tu?', options: ['Quoi?', 'Je ne sais pas', 'Pourriez-vous repeter, s\'il vous plait?', 'Encore'], answer: 2, explain: 'Вежливо попросить повторить.' },
          { type: 'translate', question: 'Переведите: "Звоню по поводу контракта."', answer: 'Je vous appelle au sujet du contrat', explain: 'au sujet de = по поводу.' },
          { type: 'order', question: 'Mets en ordre:', words: ['temps', 'votre', 'remercie', 'Je', 'de', 'vous'], answer: 'Je vous remercie de votre temps', explain: 'Завершение звонка.' },
          { type: 'correct', question: 'Trouve et corrige: Je veux parler Garcia.', answer: 'Pourrais-je parler a Monsieur Garcia', explain: 'Вежливый тон + a + титул.' }
        ]}
      },
      {
        id: 'frb-l5', topic: 'Negociations commerciales',
        objective: 'Negocier des accords commerciaux en francais avec tact et efficacite.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Negociations Commerciales en Francais',
          text: 'La negociation est un art qui combine strategie, communication et relation interpersonnelle. Dans le monde francophone, les negociations valorisent autant les resultats que la relation personnelle. Il ne s\'agit pas seulement de gagner, mais de construire des accords durables.\n\n**Principes de la negociation:**\n1. Preparation: connaissez vos objectifs et vos limites\n2. Ecoute active: comprenez les besoins de l\'autre\n3. Flexibilite: soyez ouvert aux alternatives\n4. Assertivite: defendez vos interets avec respect\n5. Recherche de solutions gagnant-gagnant\n\n**Ouvrir la negociation:**\n- Avant de commencer, je tiens a vous remercier de votre temps. (перед началом благодарю за время)\n- Mon objectif aujourd\'hui est de parvenir a un accord benefique pour les deux parties. (моя цель — достичь выгодного обеим сторонам соглашения)\n- J\'espere que nous pourrons trouver une solution mutuellement satisfaisante. (надеюсь найти взаимовыгодное решение)\n\n**Presenter votre proposition:**\n- Notre proposition est la suivante... (наше предложение следующее...)\n- Nous souhaiterions proposer... (мы хотели бы предложить...)\n- Sur la base de notre analyse, nous suggerons... (на основе анализа предлагаем...)\n- Les conditions que nous offrons sont... (предлагаемые условия...)\n\n**Exprimer un accord partiel:**\n- Nous sommes d\'accord en partie, mais... (частично согласны, но...)\n- Ce point nous semble raisonnable, cependant... (этот пункт кажется разумным, однако...)\n- Nous partageons votre avis sur... (разделяем ваше мнение о...)\n- Je comprends votre position, mais de notre point de vue... (понимаю вашу позицию, но с нашей точки зрения...)\n\n**Faire des concessions:**\n- Nous serions disposes a... (мы были бы готовы...)\n- Si vous pouvez..., nous pourrions... (если вы сможете..., мы могли бы...)\n- En contrepartie, nous demandons... (в качестве встречного шага просим...)\n- Nous pourrions ceder sur... en echange de... (могли бы уступить в... взамен на...)\n\n**Refuser une offre:**\n- Malheureusement, nous ne pouvons pas accepter cette condition. (к сожалению, не можем принять это условие)\n- Cette proposition ne nous convient pas. (это предложение нам не подходит)\n- Cela ne rentre pas dans notre budget. (это не вписывается в наш бюджет)\n\n**Faire une contre-proposition:**\n- Que diriez-vous si...? (что если...?)\n- En alternative, nous proposons... (в качестве альтернативы предлагаем...)\n\n**Conclure:**\n- Nous sommes parvenus a un accord. (мы достигли соглашения)\n- Passons a la redaction du contrat? (перейдем к составлению контракта?)\n- Je vous enverrai une confirmation par email. (отправлю подтверждение по почте)\n\nDans la culture francophone, la confiance et la relation sont importantes. Ne precipitez pas les choses.',
          vocab: [
            { word: 'benefique pour les deux parties', trans: 'Выгодно обеим сторонам' },
            { word: 'Nous souhaiterions proposer...', trans: 'Мы хотели бы предложить...' },
            { word: 'Nous serions disposes a...', trans: 'Мы были бы готовы...' },
            { word: 'En contrepartie, nous demandons...', trans: 'Встречным шагом просим...' },
            { word: 'Malheureusement, nous ne pouvons pas accepter', trans: 'К сожалению, не можем принять' },
            { word: 'Que diriez-vous si...?', trans: 'Что если...?' },
            { word: 'Nous sommes parvenus a un accord', trans: 'Мы достигли соглашения' },
            { word: 'Passons a la redaction du contrat?', trans: 'Перейдем к составлению контракта?' }
          ]
        },
        video: { slides: [
          { emoji: 'ouvrir', title: 'Ouvrir', text: 'Mon objectif est de parvenir a un accord benefique pour les deux parties.' },
          { emoji: 'proposer', title: 'Proposer', text: 'Notre proposition est la suivante... / Nous souhaiterions proposer...' },
          { emoji: 'partiel', title: 'Accord partiel', text: 'Nous sommes d\'accord en partie, mais... — частичное согласие.' },
          { emoji: 'ceder', title: 'Conceder', text: 'Nous serions disposes a... en echange de... — уступить.' },
          { emoji: 'refuser', title: 'Refuser', text: 'Malheureusement, nous ne pouvons pas accepter cette condition.' },
          { emoji: 'contre', title: 'Contre-proposition', text: 'Que diriez-vous si...? / En alternative, nous proposons...' },
          { emoji: 'conclure', title: 'Conclure', text: 'Nous sommes parvenus a un accord. / Passons a la redaction du contrat?' },
          { emoji: 'confiance', title: 'Confiance', text: 'Во франкоязычной культуре доверие важнее спешки. Не торопись.' }
        ]},
        quiz: { pool: [
          { q: 'Comment ouvres-tu une negociation?', options: ['On y va', 'Mon objectif est de parvenir a un accord benefique pour les deux parties', 'Je veux gagner', 'Donne-moi'], answer: 1, explain: 'Формальное открытие с акцентом на обоюдную выгоду.' },
          { q: 'Complete: Nous souhaiterions ___ une alternative.', options: ['donner', 'proposer', 'avoir', 'faire'], answer: 1, explain: 'proposer = предложить.' },
          { q: 'Comment exprimes-tu un accord partiel?', options: ['Oui', 'Non', 'Nous sommes d\'accord en partie, mais...', 'Peut-etre'], answer: 2, explain: 'd\'accord en partie, mais... — частичное согласие.' },
          { q: 'Complete: Nous serions ___ a negocier le prix.', options: ['prets', 'disposes', 'd\'accord', 'contents'], answer: 1, explain: 'disposes a = готовы к.' },
          { q: 'Comment refuses-tu une offre?', options: ['Non', 'Malheureusement, nous ne pouvons pas accepter cette condition', 'Impossible', 'Jamais'], answer: 1, explain: 'Вежливый, но твёрдый отказ.' },
          { q: 'Complete: En ___, nous demandons des delais plus courts.', options: ['contrepartie', 'demande', 'offre', 'reponse'], answer: 0, explain: 'En contrepartie = встречным шагом.' },
          { q: 'Comment fais-tu une contre-proposition?', options: ['Autre chose', 'Que diriez-vous si...?', 'Je n\'aime pas', 'Change'], answer: 1, explain: 'Que diriez-vous si...? — вежливая альтернатива.' },
          { q: 'Complete: Nous sommes ___ a un accord.', options: ['arrives', 'parvenus', 'venus', 'alles'], answer: 1, explain: 'parvenus a un accord = достигли соглашения.' },
          { q: 'Comment conclus-tu l\'accord?', options: ['C\'est bon', 'Passons a la redaction du contrat?', 'Adieu', 'OK'], answer: 1, explain: 'Passons a la redaction du contrat? — переход к контракту.' },
          { q: 'Complete: Cette proposition n\'est pas ___ pour nous.', options: ['bonne', 'viable', 'possible', 'reelle'], answer: 1, explain: 'pas viable = неосуществимо.' },
          { q: 'Comment demandes-tu quelque chose en retour?', options: ['Je veux plus', 'En echange de..., nous demandons...', 'Donne-moi', 'Plus'], answer: 1, explain: 'En echange de... nous demandons... — встречное условие.' },
          { q: 'Complete: Cela me semble un ___ equitable pour les deux parties.', options: ['prix', 'accord', 'marche', 'contrat'], answer: 1, explain: 'un accord = соглашение.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Nous souhaiterions ___ une solution alternative.', answer: 'proposer', explain: 'proposer = предложить.' },
          { type: 'fill-blank', question: 'Complete: Nous sommes ___ a un accord.', answer: 'parvenus', explain: 'parvenir a un accord = достичь соглашения.' },
          { type: 'choice', question: 'Comment refuses-tu poliment?', options: ['Non', 'Impossible', 'Malheureusement, nous ne pouvons pas accepter', 'Jamais'], answer: 2, explain: 'Вежливый, но твёрдый отказ.' },
          { type: 'translate', question: 'Переведите: "Мы были бы готовы уступить в цене."', answer: 'Nous serions disposes a ceder sur le prix', explain: 'disposes a ceder = готовы уступить.' },
          { type: 'order', question: 'Mets en ordre:', words: ['un', 'parvenus', 'sommes', 'Nous', 'accord', 'a'], answer: 'Nous sommes parvenus a un accord', explain: 'Достигли соглашения.' },
          { type: 'correct', question: 'Trouve et corrige: Je veux gagner.', answer: 'Mon objectif est de parvenir a un accord benefique pour les deux parties', explain: 'Акцент на обоюдную выгоду.' }
        ]}
      },
      {
        id: 'frb-l6', topic: 'CV et entretien d\'embauche',
        objective: 'Preparer un CV et reussir un entretien d\'embauche en francais.',
        estimatedTime: '55 минут',
        reading: {
          title: 'CV et Entretien d\'Embauche en Francais',
          text: 'L\'entretien d\'embauche est le moment decisif dans la recherche d\'emploi. Dans le monde francophone, les entretiens combinent formalite professionnelle et une certaine chaleur personnelle. La preparation est la cle du succes.\n\n**Le CV francais:**\nLe CV francais est concis: une page idealement, deux au maximum. Il comprend:\n- L\'etat civil (nom, adresse, telephone, email)\n- Le titre professionnel (ex: Chef de projet marketing)\n- L\'experience professionnelle (anti-chronologique)\n- La formation\n- Les competences (langues, informatique)\n- Eventuellement: centres d\'interet\n\nAttention: pas de photo obligatoire en France (sauf si demandee), pas d\'age, pas de situation familiale.\n\n**Avant l\'entretien:**\n- Renseignez-vous sur l\'entreprise: Je connais votre entreprise car...\n- Preparez des reponses aux questions courantes\n- Apportez des copies de votre CV\n- Arrivez 10-15 minutes en avance\n\n**Le salut initial:**\n- Bonjour, enchante. (добрый день, приятно познакомиться)\n- Merci de me recevoir. (спасибо, что приняли)\n- C\'est un plaisir d\'etre ici. (для меня удовольствие быть здесь)\n\n**Se presenter:**\n- Je m\'appelle [Nom] et je suis [profession].\n- J\'ai cinq ans d\'experience dans... (у меня 5 лет опыта в...)\n- J\'ai travaille chez [entreprise] en tant que [poste]. (работал в... как...)\n- Ma specialite est... (моя специализация...)\n\n**Questions courantes et reponses:**\n1. Parlez-moi de vous. (расскажите о себе)\nReponse: Je suis [profession] avec une experience dans [domaine]. Dans mon dernier poste, j\'etais responsable de...\n\n2. Pourquoi voulez-vous travailler chez nous? (почему хотите работать у нас?)\nReponse: J\'apprecie votre approche dans [domaine] et je souhaite contribuer avec mon experience en...\n\n3. Quelles sont vos forces? (ваши сильные стороны?)\nReponse: Je suis organise, proactif et je travaille bien en equipe.\n\n4. Quelles sont vos faiblesses? (ваши слабые стороны?)\nReponse: Je tends a etre trop perfectionniste, mais j\'apprends a deleguer davantage.\n\n5. Ou vous voyez-vous dans cinq ans? (где видите себя через 5 ans?)\nReponse: J\'aimerais evoluer au sein de l\'entreprise et prendre plus de responsabilites.\n\n**Parler d\'experience:**\n- Dans mon poste precedent, j\'etais responsable de... (на прежней должности отвечал за...)\n- J\'ai reussi a augmenter les ventes de 30%. (смог увеличить продажи на 30%)\n- J\'ai dirige une equipe de dix personnes. (руководил командой из 10 человек)\n\n**Poser des questions:**\n- Quelles sont les opportunites d\'evolution? (какие возможности роста?)\n- Comment est organise l\'equipe? (как организована команда?)\n\n**Conclure:**\n- Merci beaucoup pour votre temps et votre consideration. (благодарю за время и внимание)\n- Je reste a votre disposition pour toute information complementaire. (к вашим услугам для доп. информации)',
          vocab: [
            { word: 'Parlez-moi de vous', trans: 'Расскажите о себе' },
            { word: 'J\'ai ... ans d\'experience', trans: 'У меня ... лет опыта' },
            { word: 'forces / faiblesses', trans: 'Сильные стороны / слабости' },
            { word: 'j\'etais responsable de...', trans: 'я отвечал за...' },
            { word: 'Pourquoi voulez-vous travailler chez nous?', trans: 'Почему хотите работать у нас?' },
            { word: 'Ce poste m\'interesse parce que...', trans: 'Эта должность меня интересует, потому что...' },
            { word: 'Quelles sont les opportunites d\'evolution?', trans: 'Какие возможности роста?' },
            { word: 'Je reste a votre disposition', trans: 'Я к вашим услугам' }
          ]
        },
        video: { slides: [
          { emoji: 'salut', title: 'Salut initial', text: 'Bonjour, enchante. Merci de me recevoir.' },
          { emoji: 'vous', title: 'Parlez-moi de vous', text: 'Je suis [profession] avec une experience dans...' },
          { emoji: 'experience', title: 'Experience', text: 'J\'ai cinq ans d\'experience dans...' },
          { emoji: 'forces', title: 'Forces', text: 'Je suis organise, proactif et je travaille bien en equipe.' },
          { emoji: 'faiblesses', title: 'Faiblesses', text: 'Je tends a etre trop perfectionniste. — честно, но с решением.' },
          { emoji: 'motivation', title: 'Motivation', text: 'Ce poste m\'interesse parce que...' },
          { emoji: 'questions', title: 'Vos questions', text: 'Quelles sont les opportunites d\'evolution dans l\'entreprise?' },
          { emoji: 'conclure', title: 'Conclure', text: 'Merci beaucoup pour votre temps et votre consideration.' }
        ]},
        quiz: { pool: [
          { q: 'Comment te presentes-tu a l\'entretien?', options: ['Salut', 'Bonjour, enchante. Merci de me recevoir', 'Ca va?', 'Je suis la'], answer: 1, explain: 'Формальное приветствие с благодарностью.' },
          { q: 'Complete: J\'ai cinq ___ d\'experience.', options: ['ans', 'temps', 'fois', 'jours'], answer: 0, explain: 'ans d\'experience = лет опыта.' },
          { q: 'Comment parles-tu de ta responsabilite passee?', options: ['J\'ai fait', 'J\'etais responsable de', 'J\'avais', 'J\'ai travaille'], answer: 1, explain: 'J\'etais responsable de = отвечал за.' },
          { q: 'Complete: Quelles sont vos ___? (силы)', options: ['bonnes', 'forces', 'hautes', 'grandes'], answer: 1, explain: 'forces = сильные стороны.' },
          { q: 'Comment reponds-tu a "Pourquoi chez nous?"', options: ['Pour l\'argent', 'Ce poste m\'interesse parce que...', 'Je ne sais pas', 'Parce que'], answer: 1, explain: 'Ce poste m\'interesse parce que... — профессионально.' },
          { q: 'Complete: ___ de vous. (расскажите о себе)', options: ['Parlez', 'Parlez-moi', 'Dites', 'Parle'], answer: 1, explain: 'Parlez-moi de vous = расскажите о себе.' },
          { q: 'Comment demandes-tu sur les opportunites?', options: ['Evolution?', 'Quelles sont les opportunites d\'evolution?', 'Il y a de l\'evolution?', 'Promotion?'], answer: 1, explain: 'Quelles sont les opportunites d\'evolution? — профессионально.' },
          { q: 'Complete: Je reste a votre ___ pour toute information.', options: ['service', 'disposition', 'bureau', 'temps'], answer: 1, explain: 'a votre disposition = к вашим услугам.' },
          { q: 'Comment conclues-tu l\'entretien?', options: ['Adieu', 'Merci beaucoup pour votre temps et votre consideration', 'Salut', 'OK'], answer: 1, explain: 'Формальное завершение с благодарностью.' },
          { q: 'Complete: Dans mon poste ___ , j\'etais responsable de...', options: ['nouveau', 'precedent', 'actuel', 'futur'], answer: 1, explain: 'precedent = предыдущий.' },
          { q: 'Comment parles-tu d\'un succes?', options: ['J\'ai bien fait', 'J\'ai reussi a augmenter les ventes de 30%', 'C\'etait bien', 'J\'ai gagne'], answer: 1, explain: 'J\'ai reussi a + resultat — конкретно.' },
          { q: 'Complete: Ou vous voyez-vous dans cinq ___?', options: ['jours', 'ans', 'mois', 'semaines'], answer: 1, explain: 'cinq ans — стандартный вопрос.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: J\'ai trois ans d\'___ en marketing.', answer: 'experience', explain: 'experience = опыт.' },
          { type: 'fill-blank', question: 'Complete: Je reste a votre ___ pour toute information.', answer: 'disposition', explain: 'a votre disposition = к вашим услугам.' },
          { type: 'choice', question: 'Comment demandes-tu sur les opportunites?', options: ['Il y a du travail?', 'Quelles sont les opportunites d\'evolution?', 'Je peux evoluer?', 'Promotion?'], answer: 1, explain: 'Профессиональная формулировка.' },
          { type: 'translate', question: 'Переведите: "Я отвечал за команду из 10 человек."', answer: 'J\'etais responsable d\'une equipe de dix personnes', explain: 'etre responsable de + equipe.' },
          { type: 'order', question: 'Mets en ordre:', words: ['votre', 'temps', 'Merci', 'de', 'beaucoup', 'vous'], answer: 'Merci beaucoup de votre temps', explain: 'Благодарность за время.' },
          { type: 'correct', question: 'Trouve et corrige: Mes faiblesses sont rien.', answer: 'Je tends a etre trop perfectionniste, mais j\'apprends a deleguer', explain: 'Позитивный ответ с планом улучшения.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._french_course_2 = COURSE;
})(window);
