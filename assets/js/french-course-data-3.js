/* ============================================================
   AES Paid French Course 3: Grammaire Francaise Pro (A2-B1)
   6 lessons x 55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'fr-grammar',
    title: 'Grammaire Francaise Pro',
    price: 1000, oldPrice: 1990,
    level: 'A2-B1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'mint',
    art: ['#D6EBDC', '#BFE3CE'],
    tagline: 'Master French grammar. 6 modules with exercises.',
    lessons: [
      {
        id: 'frg-l1', topic: 'Pronoms personnels',
        objective: 'Maitriser les pronoms personnels en francais: sujets, toniques et disjoints.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Les Pronoms Personnels en Francais',
          text: 'Les pronoms personnels sont essentiels en francais. Il existe plusieurs types de pronoms: sujets, toniques, et les pronoms y et en.\n\n**Pronoms sujets:**\nje (я), tu (ты), il/elle (он/она), nous (мы), vous (вы), ils/elles (они).\n\nOn utilise "je" devant une consonne et "j\'" devant une voyelle: j\'ai, j\'ecris.\n\n**Pronoms toniques (disjoints):**\nmoi (я), toi (ты), lui (он), elle (она), nous (мы), vous (вы), eux (они м.), elles (они ж.).\n\nLes pronoms toniques s\'utilisent:\n- Apres une preposition: chez moi, avec toi, pour lui.\n- Apres c\'est: C\'est moi. C\'est lui. Ce sont eux.\n- Pour insister: Moi, je suis d\'accord.\n- Dans les comparaisons: Il est plus grand que moi.\n- Seul ou en complement: Qui est la? Moi.\n\n**Pronoms complement d\'objet direct (COD):**\nme (me), te (te), le/la (его/её), nous (нас), vous (вас), les (их).\n- Je le vois. (Я его вижу.)\n- Elle me regarde. (Она меня смотрит.)\n- Nous les aimons. (Мы их любим.)\n\n**Pronoms complement d\'objet indirect (COI):**\nme (мне), te (тебе), lui (ему/ей), nous (нам), vous (вам), leur (им).\n- Je lui parle. (Я ему говорю.)\n- Elle me donne un livre. (Она мне даёт книгу.)\n- Nous leur ecrivons. (Мы им пишем.)\n\nAttention: "lui" sert pour masculin ET feminin (a lui = ему, a elle = ей -> lui).\n\n**Le pronom "y":**\n"y" remplace un lieu ou une chose introduite par "a".\n- Tu vas a Paris? -> Tu y vas.\n- Je pense a mon travail -> J\'y pense.\n- Il est a l\'ecole -> Il y est.\n\n**Le pronom "en":**\n"en" remplace un nom introduit par "de", ou une quantite.\n- J\'ai du pain -> J\'en ai.\n- Je veux trois pommes -> J\'en veux trois.\n- Je parle de Marie -> J\'en parle.\n\n**Ordre des pronoms:**\nQuand il y a deux pronoms dans la meme phrase:\n- me/te/nous/vous + le/la/les: Je le lui donne. (не "je lui le donne")\n- me/te/nous/vous + lui/leur: Je te le dis.\n- le/la/les + lui/leur: Je le lui donne.\n- y et en vont a la fin: J\'y vais. J\'en ai. J\'y en ai (rare).\n\nLa regle generale: me, te, nous, vous + le, la, les + lui, leur + y + en.',
          vocab: [
            { word: 'je / tu / il / elle', trans: 'я / ты / он / она (субъектные)' },
            { word: 'nous / vous / ils / elles', trans: 'мы / вы / они м. / они ж.' },
            { word: 'moi / toi / lui / elle', trans: 'я / ты / он / она (ударные)' },
            { word: 'le / la / les (COD)', trans: 'его / её / их (прямое дополнение)' },
            { word: 'lui / leur (COI)', trans: 'ему-ей / им (косвенное дополнение)' },
            { word: 'me / te / nous / vous', trans: 'мне / тебе / нам / вам' },
            { word: 'y', trans: 'там (заменяет "a + место/вещь)"' },
            { word: 'en', trans: 'оттуда / из (заменяет "de + существительное")' }
          ]
        },
        video: { slides: [
          { emoji: 'sujets', title: 'Pronoms sujets', text: 'je, tu, il/elle, nous, vous, ils/elles. j\' перед гласной.' },
          { emoji: 'toniques', title: 'Pronoms toniques', text: 'moi, toi, lui, elle, nous, vous, eux, elles. После предлогов и c\'est.' },
          { emoji: 'cod', title: 'COD', text: 'le, la, les. Je le vois. = Я его вижу.' },
          { emoji: 'coi', title: 'COI', text: 'lui, leur. Je lui parle. = Я ему говорю.' },
          { emoji: 'lui', title: 'lui (m.+f.)', text: 'lui = ему И ей (косвенное). Не различает род.' },
          { emoji: 'y', title: 'Le pronom y', text: 'Заменяет "a + место". Tu vas a Paris? -> Tu y vas.' },
          { emoji: 'en', title: 'Le pronom en', text: 'Заменяет "de + существительное" или количество. J\'en ai.' },
          { emoji: 'ordre', title: 'Ordre', text: 'me/te + le/la + lui/leur + y + en. Je le lui donne.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: Je ___ vois. (Я его вижу)', options: ['le', 'lui', 'en', 'y'], answer: 0, explain: 'COD masculin = le.' },
          { q: 'Complete: Je ___ parle. (Я ему говорю)', options: ['le', 'lui', 'en', 'la'], answer: 1, explain: 'COI = lui (ему).' },
          { q: 'Complete: Tu vas a Paris? -> Tu ___ vas.', options: ['le', 'en', 'y', 'lui'], answer: 2, explain: 'y заменяет "a + место".' },
          { q: 'Complete: J\'ai du pain. -> J\'___ ai.', options: ['le', 'y', 'lui', 'en'], answer: 3, explain: 'en заменяет "de + существительное".' },
          { q: 'Complete: C\'est ___. (Это я)', options: ['je', 'moi', 'lui', 'me'], answer: 1, explain: 'После c\'est — ударный pronoun: moi.' },
          { q: 'Complete: Je ___ le dis. (Я тебе это говорю)', options: ['te', 'lui', 'vous', 'leur'], answer: 0, explain: 'te (тебе) + le (это).' },
          { q: 'Complete: ___ est la? - ___. (Кто там? - Я)', options: ['Qui / je', 'Qui / moi', 'Que / je', 'Ou / moi'], answer: 1, explain: 'В ответе — ударный pronoun: moi.' },
          { q: 'Complete: Il est plus grand que ___. (чем я)', options: ['je', 'moi', 'me', 'lui'], answer: 1, explain: 'После "que" — ударный pronoun: moi.' },
          { q: 'Complete: Nous ___ donnons un livre. (Мы им даём)', options: ['les', 'leur', 'lui', 'en'], answer: 1, explain: 'COI мн.ч. = leur (им).' },
          { q: 'Complete: Je pense a mon travail. -> J\'___ pense.', options: ['le', 'en', 'y', 'lui'], answer: 2, explain: 'y заменяет "a + существительное".' },
          { q: 'Complete: Je veux trois pommes. -> J\'___ veux trois.', options: ['le', 'en', 'y', 'les'], answer: 1, explain: 'en заменяет существительное с количеством.' },
          { q: 'Complete: Je ___ le lui donne. (Я это ему даю)', options: ['le', 'la', 'les', 'lui'], answer: 0, explain: 'Порядок: le + lui. Je le lui donne.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Je ___ vois. (Я его вижу)', answer: 'le', explain: 'COD = le.' },
          { type: 'fill-blank', question: 'Complete: Je ___ parle. (Я ей говорю)', answer: 'lui', explain: 'COI = lui (ему/ей).' },
          { type: 'choice', question: 'Complete: Tu vas a Paris? -> Tu ___ vas.', options: ['le', 'en', 'y', 'lui'], answer: 2, explain: 'y заменяет место.' },
          { type: 'translate', question: 'Переведите: "Я ему это даю."', answer: 'Je le lui donne', explain: 'le + lui. Порядок: COD + COI.' },
          { type: 'order', question: 'Mets en ordre:', words: ['le', 'lui', 'Je', 'donne'], answer: 'Je le lui donne', explain: 'Порядок двух местоимений.' },
          { type: 'correct', question: 'Trouve et corrige: Je lui le donne.', answer: 'Je le lui donne', explain: 'Порядок: le (COD) avant lui (COI).' }
        ]}
      },
      {
        id: 'frg-l2', topic: 'Passes composes et imparfait',
        objective: 'Differencier et utiliser le passe compose et l\'imparfait en francais.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Passe Compose et Imparfait',
          text: 'Le passe compose et l\'imparfait sont les deux temps du passe les plus utilises en francais francais. Comprendre la difference entre eux est essentiel pour raconter une histoire.\n\n**Passe compose:**\nLe passe compose exprime une action achevee dans le passe, avec un debut et une fin definis.\n\nFormation: auxiliaire (avoir/etre) + participe passe.\n- J\'ai parle (я поговорил)\n- Elle a mange (она поела)\n- Nous sommes arrives (мы прибыли)\n- Ils sont partis (они ушли)\n\n**Participes passes regululiers:**\n- -er -> -e: parler -> parle, manger -> mange\n- -ir -> -i: finir -> fini, choisir -> choisi\n- -re -> -u: vendre -> vendu, attendre -> attendu\n\n**Participes passes irreguliers:**\n- avoir -> eu, etre -> ete, faire -> fait, dire -> dit, voir -> vu, prendre -> pris, boire -> bu, savoir -> su, vouloir -> voulu, pouvoir -> pu, devoir -> du.\n\n**Auxiliaire etre:**\nLes verbes pronominaux (se lever, se laver) et les verbes de mouvement (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naitre, mourir, rester, tomber) utilisent "etre" comme auxiliaire.\n\nAvec etre, le participe passe s\'accorde en genre et en nombre: Elle est partie. Ils sont arrives.\n\n**Imparfait:**\nL\'imparfait decrit une action continue, habituelle ou descriptive dans le passe.\n\nFormation: radical du nous (present) + -ais, -ais, -ait, -ions, -iez, -aient.\n- parler -> nous parlons -> je parlais, tu parlais, il parlait...\n- finir -> nous finissons -> je finissais...\n- etre -> nous sommes -> j\'etais, tu etais, il etait...\n\n**Quand utiliser quoi?**\n- Passe compose: action achevee, ponctuelle, sequence d\'evenements.\n  Hier, j\'ai rencontre Marie. (вчера я встретил Мари)\n- Imparfait: description, habitude, action en cours dans le passe.\n  Quand j\'etais petit, je jouais au foot. (когда я был маленьким, я играл в футбол)\n\n**Combinaison des deux:**\nL\'imparfait donne le decor (description, action en cours) et le passe compose marque l\'evenement ponctuel.\n- Je dormais (imparfait) quand le telephone a sonne (passe compose).\n  (Я спал, когда телефон зазвонил.)\n- Il pleuvait (imparfait) et je suis rentre (passe compose).\n  (Шёл дождь, и я пошёл домой.)\n\n**Mots-cles:**\n- Imparfait: avant, toujours, souvent, tous les jours, quand j\'etais...\n- Passe compose: hier, soudain, un jour, alors, ensuite, enfin.',
          vocab: [
            { word: 'j\'ai parle / je parlais', trans: 'я поговорил / я говорил (был в процессе)' },
            { word: 'elle est partie / elle partait', trans: 'она ушла / она уходила (регулярно)' },
            { word: 'avoir / etre + participe', trans: 'Вспомогательный глагол (образование passe compose)' },
            { word: 'participe passe', trans: 'Причастие прошедшего времени' },
            { word: 'se lever (etre)', trans: 'Возвратный глагол -> вспом. etre' },
            { word: 'je dormais quand... a sonne', trans: 'Я спал, когда зазвонил (imp + pc)' },
            { word: 'tous les jours / souvent', trans: 'каждый день / часто (маркеры imparfait)' },
            { word: 'hier / soudain / un jour', trans: 'вчера / вдруг / однажды (маркеры passe compose)' }
          ]
        },
        video: { slides: [
          { emoji: 'pc', title: 'Passe compose', text: 'avoir/etre + participe passe. Action achevee.' },
          { emoji: 'imp', title: 'Imparfait', text: 'radical nous + -ais/-ait. Description, habitude.' },
          { emoji: 'part', title: 'Participes', text: 'parle, fini, vendu. Irreg: eu, ete, fait, dit, vu, pris.' },
          { emoji: 'etre', title: 'Auxiliaire etre', text: 'Движение + возвратные: aller, venir, se lever. Согласование.' },
          { emoji: 'marqueurs', title: 'Marqueurs', text: 'PC: hier, soudain. Imp: tous les jours, toujours.' },
          { emoji: 'combi', title: 'Combinaison', text: 'Imparfait = фон. PC = событие. Je dormais quand ca a sonne.' },
          { emoji: 'acc', title: 'Accord (etre)', text: 'Avec etre: Elle est partie. Ils sont arrives. Согласование.' },
          { emoji: 'pratique', title: 'Pratique', text: 'Imparfait = декорации. PC = действие. Важно практиковать.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: Hier, je ___ au cinema. (пошёл)', options: ['allais', 'suis alle', 'vais', 'irai'], answer: 1, explain: 'Завершённое действие вчера = passe compose.' },
          { q: 'Complete: Quand j\'etais petit, je ___ au foot. (играл регулярно)', options: ['ai joue', 'jouais', 'jeu', 'jouerai'], answer: 1, explain: 'Привычка в прошлом = imparfait.' },
          { q: 'Complete: Il ___ quand le telephone a sonne. (спал)', options: ['a dormi', 'dormait', 'dort', 'dormira'], answer: 1, explain: 'Действие в процессе = imparfait.' },
          { q: 'Complete: Hier, je ___ toute la pizza. (съел полностью)', options: ['mangeais', 'ai mange', 'mange', 'mangerai'], answer: 1, explain: 'Завершённое действие = passe compose.' },
          { q: 'Complete: Elle ___ partie. (ушла, с etre)', options: ['a', 'est', 'etait', 'avait'], answer: 1, explain: 'Partir -> etre. Elle est partie.' },
          { q: 'Quel est le participe passe de "voir"?', options: ['vu', 'vi', 'voud', 'vait'], answer: 0, explain: 'voir -> vu (irregulier).' },
          { q: 'Complete: Nous ___ arrives hier. (муж., мн.ч.)', options: ['avons', 'sommes', 'etions', 'avons ete'], answer: 1, explain: 'Arriver -> etre. Nous sommes arrives.' },
          { q: 'Complete: Tous les jours, il ___ du cafe. (пил регулярно)', options: ['a bu', 'buvait', 'boit', 'boira'], answer: 1, explain: 'Привычка = imparfait. buvait.' },
          { q: 'Complete: Il ___ quand je suis arrive. (читал)', options: ['a lu', 'lisait', 'lit', 'lira'], answer: 1, explain: 'Действие в процессе = imparfait. lisait.' },
          { q: 'Quel auxiliaire pour "se lever"?', options: ['avoir', 'etre', 'les deux', 'aucun'], answer: 1, explain: 'Возвратный глагол -> etre.' },
          { q: 'Complete: Soudain, elle ___ partir. (вдруг решила)', options: ['voulait', 'a voulu', 'veut', 'voudra'], answer: 1, explain: 'Soudain = внезапное действие = passe compose.' },
          { q: 'Complete: Avant, il ___ a Paris. (жил раньше)', options: ['a habite', 'habitait', 'habite', 'habitera'], answer: 1, explain: 'Avant = описание в прошлом = imparfait.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Hier, je ___ (manger) une pizza. (завершил)', answer: 'ai mange', explain: 'Завершённое действие = passe compose.' },
          { type: 'fill-blank', question: 'Complete: Toujours, il ___ (parler) francais. (привычка)', answer: 'parlait', explain: 'Привычка = imparfait.' },
          { type: 'choice', question: 'Complete: Hier, je ___ au cinema.', options: ['allais', 'suis alle', 'vais', 'irai'], answer: 1, explain: 'Разовое завершённое = passe compose.' },
          { type: 'translate', question: 'Переведите: "Когда я был ребёнком, я жил в Париже."', answer: 'Quand j\'etais petit, j\'habitais a Paris', explain: 'Описание/привычка = imparfait.' },
          { type: 'order', question: 'Mets en ordre:', words: ['alle', 'Hier', 'suis', 'je', 'cinema', 'au'], answer: 'Hier je suis alle au cinema', explain: 'Прошедшее завершённое.' },
          { type: 'correct', question: 'Trouve et corrige: Hier, je mangeais toute la pizza.', answer: 'Hier, j\'ai mange toute la pizza', explain: 'Завершённое действие = passe compose.' }
        ]}
      },
      {
        id: 'frg-l3', topic: 'Le subjonctif present',
        objective: 'Comprendre et utiliser le subjonctif present pour exprimer volonte, emotion et doute.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Le Subjonctif Present en Francais',
          text: 'Le subjonctif est un mode qui exprime la volonte, l\'emotion, le doute, la necessite ou l\'incertitude. Il s\'utilise principalement dans des propositions subordonnees (apres "que").\n\n**Quand utiliser le subjonctif?**\n\n1. Volonte et volonte: vouloir que, souhaiter que, aimer que.\n   - Je veux que tu viennes. (Я хочу, чтобы ты пришёл.)\n   - Je souhaite qu\'il reussisse. (Я желаю ему успеха.)\n\n2. Emotions: etre content que, etre triste que, avoir peur que.\n   - Je suis content que tu sois la. (Я рад, что ты здесь.)\n   - J\'ai peur qu\'il pleuve. (Я боюсь, что пойдёт дождь.)\n\n3. Doute et incertitude: douter que, il est possible que, peut-etre que.\n   - Je doute qu\'il vienne. (Я сомневаюсь, что он придёт.)\n   - Il est possible qu\'elle soit malade. (Возможно, она больна.)\n\n4. Necessite: il faut que, il est necessaire que.\n   - Il faut que tu partes. (Нужно, чтобы ты ушёл.)\n   - Il est necessaire que nous parlions. (Необходимо, чтобы мы поговорили.)\n\n5. Apres certaines conjonctions: avant que, pour que, bien que, sans que.\n   - Je partirai avant qu\'il arrive. (Я уйду до того, как он придёт.)\n   - Je t\'aide pour que tu reussisses. (Я помогаю тебе, чтобы ты succeeded.)\n\n**Formation du subjonctif present:**\nPrendre la 3e personne du present (ils/elles), enlever la terminaison "-ent", et ajouter:\n- -e, -es, -e, -ions, -iez, -ent.\n\n- parler -> ils parlent -> que je parle, que tu parles, qu\'il parle, que nous parlions, que vous parliez, qu\'ils parlent.\n- finir -> ils finissent -> que je finisse, que tu finisses...\n- attendre -> ils attendent -> que j\'attende, que tu attendes...\n\n**Verbes irreguliers au subjonctif:**\n- etre -> que je sois, que tu sois, qu\'il soit, que nous soyons, que vous soyez, qu\'ils soient.\n- avoir -> que j\'aie, que tu aies, qu\'il ait, que nous ayons, que vous ayez, qu\'ils aient.\n- aller -> que j\'aille, que tu ailles, qu\'il aille...\n- faire -> que je fasse, que tu fasses...\n- pouvoir -> que je puisse, que tu puisses...\n- vouloir -> que je veuille, que tu veuilles...\n- savoir -> que je sache, que tu saches...\n\n**Indicatif vs subjonctif:**\n- Je crois qu\'il est la. (indicatif: certitude)\n- Je ne crois pas qu\'il soit la. (subjonctif: doute)\n- Je suis sur qu\'il vient. (indicatif: certitude)\n- Je doute qu\'il vienne. (subjonctif: doute)\n\nLa regle: la certite -> indicatif. Le doute, l\'emotion, la volonte -> subjonctif.',
          vocab: [
            { word: 'Je veux que + subj.', trans: 'Я хочу, чтобы... (воля)' },
            { word: 'Il faut que + subj.', trans: 'Нужно, чтобы... (необходимость)' },
            { word: 'Je doute que + subj.', trans: 'Я сомневаюсь, что... (сомнение)' },
            { word: 'Je suis content que + subj.', trans: 'Я рад, что... (эмоция)' },
            { word: 'avant que / pour que + subj.', trans: 'до того как / чтобы (союз + subj.)' },
            { word: 'que je sois (etre)', trans: 'чтобы я был (etre, неправ.)' },
            { word: 'que j\'aie (avoir)', trans: 'чтобы я имел (avoir, неправ.)' },
            { word: 'que je fasse (faire)', trans: 'чтобы я делал (faire, неправ.)' }
          ]
        },
        video: { slides: [
          { emoji: 'subj', title: 'Subjonctif', text: 'Воля, эмоции, сомнения, необходимость. После "que".' },
          { emoji: 'vouloir', title: 'Volonte', text: 'Je veux que tu viennes. — хочу, чтобы пришёл.' },
          { emoji: 'emotion', title: 'Emotions', text: 'Je suis content que tu sois la. — эмоция + subjonctif.' },
          { emoji: 'doute', title: 'Doute', text: 'Je doute qu\'il vienne. — сомнение + subjonctif.' },
          { emoji: 'falloir', title: 'Il faut que', text: 'Il faut que tu partes. — необходимость + subjonctif.' },
          { emoji: 'formation', title: 'Formation', text: '3 л. мн.ч. настоящего -> убрать -ent -> + -e/-es/-ions/-iez/-ent.' },
          { emoji: 'irreg', title: 'Irreguliers', text: 'etre->sois, avoir->aie, faire->fasse, aller->aille, pouvoir->puisse.' },
          { emoji: 'vs', title: 'Ind. vs Subj.', text: 'Je crois qu\'il est la (ind). Je doute qu\'il soit la (subj).' }
        ]},
        quiz: { pool: [
          { q: 'Complete: Il faut que tu ___ (partir).', options: ['pars', 'partes', 'partira', 'partait'], answer: 1, explain: 'Il faut que + subjonctif. partes.' },
          { q: 'Complete: Je veux que tu ___ (venir).', options: ['viens', 'viennes', 'viendra', 'venait'], answer: 1, explain: 'Vouloir que + subjonctif. viennes.' },
          { q: 'Complete: Je doute qu\'il ___ (etre) la.', options: ['est', 'soit', 'sera', 'etait'], answer: 1, explain: 'Douter que + subjonctif. soit (irreg.).' },
          { q: 'Complete: Je suis content que tu ___ (etre) ici.', options: ['es', 'sois', 'seras', 'etais'], answer: 1, explain: 'Emotion + subjonctif. sois.' },
          { q: 'Complete: Il est possible qu\'elle ___ (etre) malade.', options: ['est', 'soit', 'sera', 'etait'], answer: 1, explain: 'Possible que + subjonctif. soit.' },
          { q: 'Complete: Je partirai avant qu\'il ___ (arriver).', options: ['arrive', 'arrives', 'arrivera', 'arrivait'], answer: 0, explain: 'Avant que + subjonctif. arrive (il).' },
          { q: 'Complete: Il faut que nous ___ (parler).', options: ['parlons', 'parlions', 'parlerons', 'parlions'], answer: 1, explain: 'Subjonctif nous: parlions.' },
          { q: 'Quel est le subjonctif de "faire" (je)?', options: ['fais', 'fasse', 'ferai', 'faisais'], answer: 1, explain: 'faire -> que je fasse (irreg.).' },
          { q: 'Complete: Je ne crois pas qu\'il ___ (venir).', options: ['vient', 'vienne', 'viendra', 'venait'], answer: 1, explain: 'Negation de certitude -> subjonctif. vienne.' },
          { q: 'Complete: Je veux que vous ___ (faire) attention.', options: ['faites', 'fassiez', 'ferez', 'faisiez'], answer: 1, explain: 'Vouloir que + subjonctif. fassiez.' },
          { q: 'Quel est le subjonctif de "pouvoir" (je)?', options: ['peux', 'puisse', 'pourrai', 'pouvais'], answer: 1, explain: 'pouvoir -> que je puisse (irreg.).' },
          { q: 'Complete: Je suis sur qu\'il ___ (venir). (certitude)', options: ['vienne', 'vient', 'viendra', 'venait'], answer: 1, explain: 'Etre sur que + indicatif. vient.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Il faut que tu ___ (parler) avec lui.', answer: 'parles', explain: 'Il faut que + subjonctif.' },
          { type: 'fill-blank', question: 'Complete: Je doute qu\'elle ___ (venir).', answer: 'vienne', explain: 'Douter que + subjonctif.' },
          { type: 'choice', question: 'Quel verbe utilise le subjonctif?', options: ['Je crois qu\'il vient', 'Je doute qu\'il vienne', 'Je sais qu\'il est la', 'Je suis sur qu\'il arrive'], answer: 1, explain: 'Doute -> subjonctif.' },
          { type: 'translate', question: 'Переведите: "Я хочу, чтобы ты пришёл."', answer: 'Je veux que tu viennes', explain: 'Vouloir que + subjonctif.' },
          { type: 'order', question: 'Mets en ordre:', words: ['que', 'viennes', 'Je', 'tu', 'veux'], answer: 'Je veux que tu viennes', explain: 'Vouloir que + subjonctif.' },
          { type: 'correct', question: 'Trouve et corrige: Je doute qu\'il vient.', answer: 'Je doute qu\'il vienne', explain: 'Douter que + subjonctif "vienne".' }
        ]}
      },
      {
        id: 'frg-l4', topic: 'Articles et prepositions',
        objective: 'Maitriser les articles (definis, indefinis, partitifs) et les prepositions de lieu.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Articles et Prepositions en Francais',
          text: 'Les articles et les prepositions sont fondamentaux en francais. Les articles indiquent le genre et le nombre, tandis que les prepositions indiquent les relations de lieu, de temps et de direction.\n\n**Articles definis (the):**\n- le (м.р. ед.ч.): le livre, le garcon\n- la (ж.р. ед.ч.): la table, la fille\n- l\' (перед гласной): l\'ami, l\'eau, l\'homme\n- les (мн.ч.): les livres, les tables\n\n**Articles indefinis (a/an):**\n- un (м.р.): un livre, un chien\n- une (ж.р.): une table, une fille\n- des (мн.ч.): des livres, des tables\n\n**Articles partitifs (some):**\n- du (м.р.): du pain, du cafe\n- de la (ж.р.): de la eau, de la viande\n- de l\' (перед гласной): de l\'argent, de l\'eau\n- des (мн.ч.): des fruits\n\nLe partitif exprime une quantite indeterminee (невычислимое количество).\n\n**Cas particulier: negation**\nApres une negation, les articles deviennent "de":\n- J\'ai du pain. -> Je n\'ai pas de pain.\n- J\'ai un livre. -> Je n\'ai pas de livre.\n- J\'ai des amis. -> Je n\'ai pas d\'amis.\n\n**Contractions des articles:**\n- a + le = au: Je vais au cinema.\n- a + les = aux: Je parle aux amis.\n- de + le = du: Le livre du professeur.\n- de + les = des: Les amis des enfants.\n\n**Prepositions de lieu (место):**\n- a: a Paris, a l\'ecole, a la maison (в, на)\n- en: en France, en ville (в - страны жен.рода, города)\n- dans: dans la chambre, dans le tiroir (в - внутри)\n- sur: sur la table, sur le mur (на)\n- sous: sous la table, sous le lit (под)\n- devant: devant la maison (перед)\n- derriere: derriere l\'arbre (за, позади)\n- chez: chez moi, chez le docteur (у - дома, у врача)\n- entre: entre la table et la chaise (между)\n- a cote de: a cote de la banque (рядом с)\n\n**Prepositions de temps (время):**\n- a: a trois heures, a midi (в - время)\n- en: en mars, en 2024, en ete (в - месяц, год, сезон)\n- le: le lundi, le matin (в - день недели)\n- pendant: pendant deux heures (в течение)\n- depuis: depuis lundi (с - отправная точка)\n- pour: pour trois jours (на - длительность будущего)\n\nLa difference entre "a" et "en" pour les pays:\n- en: pays feminin ou commenacant par voyelle (en France, en Italie, en Allemagne)\n- au: pays masculin (au Japon, au Canada, au Portugal)\n- aux: pays masculin pluriel (aux Etats-Unis, aux Pays-Bas)',
          vocab: [
            { word: 'le / la / les', trans: 'Определённый артикль м. / ж. / мн.ч.' },
            { word: 'un / une / des', trans: 'Неопределённый артикль м. / ж. / мн.ч.' },
            { word: 'du / de la / de l\'', trans: 'Частичный артикль (некоторое количество)' },
            { word: 'pas de / pas d\'', trans: 'Отрицание: не (артикль de после negation)' },
            { word: 'a + le = au / a + les = aux', trans: 'Слияние: au (к м.р.) / aux (к мн.ч.)' },
            { word: 'dans / sur / sous', trans: 'в (внутри) / на / под' },
            { word: 'chez moi / chez le docteur', trans: 'у меня дома / у врача' },
            { word: 'en France / au Japon', trans: 'во Франции (ж.р.) / в Японии (м.р.)' }
          ]
        },
        video: { slides: [
          { emoji: 'def', title: 'Articles definis', text: 'le, la, l\', les. l\' перед гласной.' },
          { emoji: 'indef', title: 'Articles indefinis', text: 'un, une, des. Неопределённые.' },
          { emoji: 'part', title: 'Articles partitifs', text: 'du, de la, de l\'. Невычислимое количество.' },
          { emoji: 'neg', title: 'Negation = de', text: 'Je n\'ai pas de pain. После negation -> de.' },
          { emoji: 'contr', title: 'Contractions', text: 'a+le=au, a+les=aux, de+le=du, de+les=des.' },
          { emoji: 'lieu', title: 'Prepositions de lieu', text: 'a, en, dans, sur, sous, chez, devant, derriere.' },
          { emoji: 'temps', title: 'Prepositions de temps', text: 'a (heure), en (mois/an), le (jour), pendant, depuis.' },
          { emoji: 'pays', title: 'Pays', text: 'en France (ж.р.), au Japon (м.р.), aux Etats-Unis (мн.ч.).' }
        ]},
        quiz: { pool: [
          { q: 'Complete: ___ livre est sur la table. (м.р.)', options: ['La', 'Le', 'Un', 'Les'], answer: 1, explain: 'le livre — мужской род.' },
          { q: 'Complete: J\'ai ___ pain.', options: ['le', 'un', 'du', 'des'], answer: 2, explain: 'du pain — частичный артикль.' },
          { q: 'Complete: Je n\'ai pas ___ pain.', options: ['du', 'de', 'le', 'un'], answer: 1, explain: 'После negation -> de.' },
          { q: 'Complete: Je vais ___ cinema.', options: ['a le', 'au', 'en', 'dans'], answer: 1, explain: 'a + le = au.' },
          { q: 'Complete: Le livre ___ professeur.', options: ['a le', 'au', 'du', 'de le'], answer: 2, explain: 'de + le = du.' },
          { q: 'Complete: Le stylo est ___ la table. (на)', options: ['dans', 'sur', 'sous', 'a'], answer: 1, explain: 'sur = на.' },
          { q: 'Complete: Je suis ___ moi. (дома)', options: ['a', 'en', 'chez', 'dans'], answer: 2, explain: 'chez moi = у меня дома.' },
          { q: 'Complete: Je vais ___ France.', options: ['au', 'en', 'dans', 'a'], answer: 1, explain: 'en France (ж.р.).' },
          { q: 'Complete: Je vais ___ Japon.', options: ['au', 'en', 'dans', 'a'], answer: 0, explain: 'au Japon (м.р.).' },
          { q: 'Complete: l\'eau est ___ la bouteille. (в)', options: ['sur', 'dans', 'chez', 'a'], answer: 1, explain: 'dans = внутри.' },
          { q: 'Complete: Je partirai ___ trois heures.', options: ['en', 'le', 'a', 'pendant'], answer: 2, explain: 'a + время = в.' },
          { q: 'Complete: Je n\'ai pas ___ amis.', options: ['des', 'd\'', 'les', 'des'], answer: 1, explain: 'После negation -> d\' (перед гласной).' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: J\'ai ___ cafe. (немного)', answer: 'du', explain: 'du cafe — частичный артикль.' },
          { type: 'fill-blank', question: 'Complete: Je vais ___ cinema. (a + le)', answer: 'au', explain: 'a + le = au.' },
          { type: 'choice', question: 'Complete: Je n\'ai pas ___ pain.', options: ['du', 'de', 'le', 'un'], answer: 1, explain: 'После negation -> de.' },
          { type: 'translate', question: 'Переведите: "Я дома."', answer: 'Je suis chez moi', explain: 'chez moi = у себя дома.' },
          { type: 'order', question: 'Mets en ordre:', words: ['au', 'vais', 'Je', 'cinema'], answer: 'Je vais au cinema', explain: 'a + le = au.' },
          { type: 'correct', question: 'Trouve et corrige: Je n\'ai pas du pain.', answer: 'Je n\'ai pas de pain', explain: 'После negation -> de, не du.' }
        ]}
      },
      {
        id: 'frg-l5', topic: 'Le conditionnel',
        objective: 'Utiliser le conditionnel present et passe pour exprimer la politesse, l\'hypothese et le conseil.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Le Conditionnel en Francais',
          text: 'Le conditionnel est un mode qui exprime l\'hypothese, la politesse, le conseil, le souhait ou le futur dans le passe.\n\n**Formation du conditionnel present:**\nRadical du futur + terminaisons de l\'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).\n\n- parler -> je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient.\n- finir -> je finirais, tu finirais...\n- avoir -> j\'aurais, tu aurais, il aurait...\n- etre -> je serais, tu serais, il serait...\n- aller -> j\'irais, tu irais...\n- faire -> je ferais, tu ferais...\n- pouvoir -> je pourrais, tu pourrais...\n- vouloir -> je voudrais, tu voudrais...\n- savoir -> je saurais, tu saurais...\n\n**Usages du conditionnel present:**\n\n1. Politesse:\n- Je voudrais un cafe. (Я хотел бы кофе.)\n- Pourriez-vous m\'aider? (Не могли бы вы помочь?)\n- Je serais interesse par... (Я был бы заинтересован...)\n\n2. Conseil:\n- Tu devrais te reposer. (Тебе следует отдохнуть.)\n- Vous feriez mieux de partir. (Вам лучше уйти.)\n- A ta place, je prendrais le train. (На твоём месте я бы взял поезд.)\n\n3. Hypothese (avec "si"):\n- Si j\'etais riche, j\'acheterais une maison. (Если бы я был богат, я бы купил дом.)\n- Si tu etudiais plus, tu reussirais. (Если бы ты учился больше, ты бы succeeded.)\n\nStructure: si + imparfait, conditionnel present.\n\n4. Souhait:\n- J\'aimerais voyager. (Я хотел бы путешествовать.)\n- Ce serait bien. (Это было бы хорошо.)\n\n5. Futur dans le passe:\n- Il a dit qu\'il viendrait. (Он сказал, что придёт.)\n- Je pensais que tu serais la. (Я думал, что ты будешь там.)\n\n**Conditionnel passe:**\nFormation: auxiliaire au conditionnel + participe passe.\n- J\'aurais parle. (Я бы поговорил.)\n- J\'aurais fini. (Я бы закончил.)\n- Je serais alle. (Я бы пошёл.)\n\nUsage: hypothese sur le passe.\n- Si j\'avais su, je ne serais pas venu. (Если бы я знал, я бы не пришёл.)\n- Tu aurais du me prevenir. (Тебе следовало предупредить.)\n\n**Les trois types de phrase avec "si":**\n1. Si + present, futur: Si tu viens, je serai content. (реальное условие)\n2. Si + imparfait, conditionnel: Si tu venais, je serais content. (нереальное условие настоящего)\n3. Si + plus-que-parfait, conditionnel passe: Si tu etais venu, j\'aurais ete content. (нереальное условие прошлого)',
          vocab: [
            { word: 'je parlerais / je finirais', trans: 'я говорил бы / я закончил бы' },
            { word: 'Je voudrais...', trans: 'Я хотел бы... (вежливость)' },
            { word: 'Tu devrais...', trans: 'Тебе следует... (совет)' },
            { word: 'Si j\'etais riche, j\'acheterais...', trans: 'Если бы я был богат, я бы купил...' },
            { word: 'J\'aimerais voyager', trans: 'Я хотел бы путешествовать (желание)' },
            { word: 'Il a dit qu\'il viendrait', trans: 'Он сказал, что придёт (будущее в прошедшем)' },
            { word: 'J\'aurais parle', trans: 'Я бы поговорил (условное прошедшее)' },
            { word: 'Si + imparfait, conditionnel', trans: 'Если бы + условное (нереальное условие)' }
          ]
        },
        video: { slides: [
          { emoji: 'cond', title: 'Conditionnel', text: 'Радикал фут. + -ais/-ait/-ions. parler -> parlerais.' },
          { emoji: 'politesse', title: 'Politesse', text: 'Je voudrais un cafe. — вежливая просьба.' },
          { emoji: 'conseil', title: 'Conseil', text: 'Tu devrais te reposer. — совет.' },
          { emoji: 'hypothese', title: 'Hypothese', text: 'Si j\'etais riche, j\'acheterais... — нереальное условие.' },
          { emoji: 'irreg', title: 'Irreguliers', text: 'etre->serais, avoir->aurais, aller->irais, faire->ferais.' },
          { emoji: 'passe', title: 'Cond. passe', text: 'J\'aurais parle. / Je serais alle. — гипотеза о прошлом.' },
          { emoji: 'si', title: 'Les trois "si"', text: 'Si+pres/fut, si+imp/cond, si+pqp/cond passe.' },
          { emoji: 'futpasse', title: 'Futur dans passe', text: 'Il a dit qu\'il viendrait. — будущее в прошедшем.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: Je ___ un cafe, s\'il vous plait. (хотел бы)', options: ['veux', 'voudrais', 'voulais', 'voudrai'], answer: 1, explain: 'Вежливость = conditionnel. voudrais.' },
          { q: 'Complete: Tu ___ te reposer. (следует)', options: ['dois', 'devrais', 'devais', 'devras'], answer: 1, explain: 'Совет = conditionnel. devrais.' },
          { q: 'Complete: Si j\'etais riche, je ___ une maison.', options: ['achete', 'achetais', 'acheterais', 'acheterai'], answer: 2, explain: 'Si + imparfait, conditionnel. acheterais.' },
          { q: 'Quel est le conditionnel de "etre" (je)?', options: ['suis', 'serais', 'serai', 'etais'], answer: 1, explain: 'etre -> je serais (irreg.).' },
          { q: 'Quel est le conditionnel de "avoir" (je)?', options: ['ai', 'aurais', 'aurai', 'avais'], answer: 1, explain: 'avoir -> j\'aurais (irreg.).' },
          { q: 'Complete: Il a dit qu\'il ___ demain. (придёт)', options: ['vient', 'viendra', 'viendrait', 'venait'], answer: 2, explain: 'Футur dans passe = conditionnel. viendrait.' },
          { q: 'Complete: ___ a ta place, je partirais.', options: ['Si je', 'Je si', 'Que je', 'Si'], answer: 0, explain: 'Si je + imparfait, conditionnel.' },
          { q: 'Complete: J\'___ voyage si j\'avais eu le temps. (passe)', options: ['aurais', 'ai', 'avais', 'aurai'], answer: 0, explain: 'Cond. passe: j\'aurais voyage.' },
          { q: 'Complete: Vous ___ mieux de partir. (лучше бы)', options: ['feriez', 'faites', 'faisiez', 'ferai'], answer: 0, explain: 'Conseil: vous feriez mieux de.' },
          { q: 'Quel est le conditionnel de "pouvoir" (je)?', options: ['peux', 'pourrais', 'pourrai', 'pouvais'], answer: 1, explain: 'pouvoir -> je pourrais (irreg.).' },
          { q: 'Complete: Si tu ___ plus, tu reussirais.', options: ['etudiais', 'etudies', 'etudieras', 'etudiais'], answer: 0, explain: 'Si + imparfait: etudiais.' },
          { q: 'Complete: J\'aimerais ___ le monde. (путешествовать)', options: ['voyager', 'voyage', 'voyagerai', 'voyageais'], answer: 0, explain: 'Apres conditionnel + infinitif: voyager.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: Je ___ un cafe. (хотел бы)', answer: 'voudrais', explain: 'Вежливость = conditionnel.' },
          { type: 'fill-blank', question: 'Complete: Tu ___ te reposer. (следует)', answer: 'devrais', explain: 'Совет = conditionnel.' },
          { type: 'choice', question: 'Quel est le conditionnel de "etre" (je)?', options: ['suis', 'serais', 'serai', 'etais'], answer: 1, explain: 'etre -> je serais.' },
          { type: 'translate', question: 'Переведите: "Я хотел бы путешествовать."', answer: 'J\'aimerais voyager', explain: 'Желание = conditionnel.' },
          { type: 'order', question: 'Mets en ordre:', words: ['maison', 'acheterais', 'Je', 'une'], answer: 'J\'acheterais une maison', explain: 'Conditionnel: acheterais.' },
          { type: 'correct', question: 'Trouve et corrige: Si je suis riche, j\'acheterais une maison.', answer: 'Si j\'etais riche, j\'acheterais une maison', explain: 'Si + imparfait, conditionnel.' }
        ]}
      },
      {
        id: 'frg-l6', topic: 'Pronoms relatifs',
        objective: 'Utiliser les pronoms relatifs qui, que, ou, dont et lequel pour relier des propositions.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Les Pronoms Relatifs en Francais',
          text: 'Les pronoms relatifs servent a relier deux propositions en evitant la repetition. Ils introduisent une proposition subordonnee relative.\n\n**Les principaux pronoms relatifs:**\n\n1. **QUI** (который — субъект)\nRemplace un sujet (personne ou chose).\n- L\'homme qui parle est mon pere. (Человек, который говорит, — мой отец.)\n- Le livre qui est sur la table est a moi. (Книга, которая на столе, — моя.)\n\n2. **QUE** (который — прямое дополнение)\nRemplace un complement d\'objet direct (COD).\n- L\'homme que je vois est mon pere. (Человек, которого я вижу, — мой отец.)\n- Le livre que je lis est interessant. (Книга, которую я читаю, интересная.)\n\nAttention: "que" peut faire l\'elision: "qu\'" devant une voyelle.\n- L\'homme qu\'il voit.\n\n3. **OU** (где, куда)\nRemplace un lieu ou un temps.\n- La ville ou j\'habite est belle. (Город, где я живу, красивый.)\n- Le jour ou je suis ne. (День, когда я родился.)\n\n4. **DONT** (которого, о котором)\nRemplace un complement introduit par "de".\n- L\'homme dont je parle est mon pere. (Человек, о котором я говорю, — мой отец.)\n- Le livre dont j\'ai besoin. (Книга, которая мне нужна.)\n- Les amis dont je suis fier. (Друзья, которыми я горжусь.)\n\nDont s\'utilise apres les expressions avec "de": avoir besoin de, parler de, etre fier de, se souvenir de.\n\n5. **LEQUEL / LAQUELLE / LESQUELS / LESQUELLES**\nS\'utilise apres une preposition (a, de, avec, pour, sur, etc.).\n- La fille avec laquelle je travaille. (Девушка, с которой я работаю.)\n- Le projet sur lequel je reflechis. (Проект, над которым я размышляю.)\n- Les amis chez lesquels je vais. (Друзья, к которым я хожу.)\n\nAttention aux contractions:\n- a + lequel = auquel\n- a + lesquels = auxquels\n- de + lequel = duquel\n- de + lesquels = desquels\n\n**Quand utiliser lequel vs qui?**\nApres une preposition, on utilise "lequel" (pour les choses) ou "qui" (pour les personnes).\n- L\'homme avec qui je travaille. (человек)\n- Le projet sur lequel je travaille. (вещь)\n\n**AUQUEL / DUQUEL**\nOn les utilise particulierement apres "a" et "de" pour eviter l\'ambiguite.\n- La solution a laquelle je pense. (Решение, о котором я думаю.)\n- Le sujet duquel on parle. (Тема, о которой говорят.)\n\n**Tableau recapitulatif:**\n- qui = sujet (qui fait l\'action)\n- que = COD (directement affecte)\n- ou = lieu ou temps\n- dont = complement avec "de"\n- lequel = apres preposition (chose)',
          vocab: [
            { word: 'qui', trans: 'который (субъект: который делает действие)' },
            { word: 'que / qu\'', trans: 'которого (прямое дополнение)' },
            { word: 'ou', trans: 'где / куда (место или время)' },
            { word: 'dont', trans: 'которого / о котором (после "de")' },
            { word: 'lequel / laquelle', trans: 'который (после предлога)' },
            { word: 'auquel / auxquels', trans: 'к которому (a + lequel)' },
          { word: 'duquel / desquels', trans: 'о котором (de + lequel)' },
            { word: 'avec qui / sur lequel', trans: 'с которым (чел.) / над которым (вещь)' }
          ]
        },
        video: { slides: [
          { emoji: 'qui', title: 'qui', text: 'Субъект. L\'homme qui parle = человек, который говорит.' },
          { emoji: 'que', title: 'que / qu\'', text: 'COD. L\'homme que je vois = человек, которого я вижу.' },
          { emoji: 'ou', title: 'ou', text: 'Место/время. La ville ou j\'habite = где я живу.' },
          { emoji: 'dont', title: 'dont', text: 'Дополнение с "de". L\'homme dont je parle = о котором говорю.' },
          { emoji: 'lequel', title: 'lequel', text: 'После предлога. La fille avec laquelle... = с которой.' },
          { emoji: 'auquel', title: 'auquel', text: 'a + lequel. La solution a laquelle je pense.' },
          { emoji: 'qui-vs-leq', title: 'qui vs lequel', text: 'После предлога: qui (люди), lequel (вещи).' },
          { emoji: 'recap', title: 'Recap', text: 'qui=субъект, que=COD, ou=место, dont="de", lequel=после предлога.' }
        ]},
        quiz: { pool: [
          { q: 'Complete: L\'homme ___ parle est mon pere. (субъект)', options: ['que', 'qui', 'ou', 'dont'], answer: 1, explain: 'qui = субъект (делает действие).' },
          { q: 'Complete: L\'homme ___ je vois est mon pere. (COD)', options: ['qui', 'que', 'ou', 'dont'], answer: 1, explain: 'que = COD (прямое дополнение).' },
          { q: 'Complete: La ville ___ j\'habite est belle. (где)', options: ['qui', 'que', 'ou', 'dont'], answer: 2, explain: 'ou = место.' },
          { q: 'Complete: L\'homme ___ je parle est mon pere. (о котором)', options: ['qui', 'que', 'ou', 'dont'], answer: 3, explain: 'dont = дополнение с "de".' },
          { q: 'Complete: Le livre ___ je lis est interessant.', options: ['qui', 'que', 'ou', 'dont'], answer: 1, explain: 'que = COD.' },
          { q: 'Complete: Le projet sur ___ je travaille.', options: ['qui', 'que', 'lequel', 'dont'], answer: 2, explain: 'После предлога sur -> lequel.' },
          { q: 'Complete: La solution a ___ je pense.', options: ['qui', 'lequel', 'auquel', 'dont'], answer: 2, explain: 'a + lequel = auquel.' },
          { q: 'Complete: Le jour ___ je suis ne.', options: ['qui', 'que', 'ou', 'dont'], answer: 2, explain: 'ou = время.' },
          { q: 'Complete: Le livre ___ j\'ai besoin.', options: ['qui', 'que', 'ou', 'dont'], answer: 3, explain: 'dont = дополнение с "de" (avoir besoin de).' },
          { q: 'Complete: La fille avec ___ je travaille. (человек)', options: ['laquelle', 'qui', 'dont', 'ou'], answer: 1, explain: 'После предлога + человек -> qui.' },
          { q: 'Complete: L\'homme ___ je suis fier.', options: ['qui', 'que', 'ou', 'dont'], answer: 3, explain: 'dont = etre fier de.' },
          { q: 'Complete: La maison dans ___ j\'habite.', options: ['qui', 'que', 'laquelle', 'dont'], answer: 2, explain: 'После предлога dans -> laquelle.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: L\'homme ___ parle est mon pere. (субъект)', answer: 'qui', explain: 'qui = субъект.' },
          { type: 'fill-blank', question: 'Complete: La ville ___ j\'habite est belle. (где)', answer: 'ou', explain: 'ou = место.' },
          { type: 'choice', question: 'Complete: L\'homme ___ je parle est mon pere.', options: ['qui', 'que', 'ou', 'dont'], answer: 3, explain: 'dont = дополнение с "de" (parler de).' },
          { type: 'translate', question: 'Переведите: "Книга, которую я читаю, интересная."', answer: 'Le livre que je lis est interessant', explain: 'que = COD (которую).' },
          { type: 'order', question: 'Mets en ordre:', words: ['pere', 'mon', 'est', 'parle', 'L\'homme', 'qui'], answer: 'L\'homme qui parle est mon pere', explain: 'qui = субъект.' },
          { type: 'correct', question: 'Trouve et corrige: L\'homme que parle est mon pere.', answer: 'L\'homme qui parle est mon pere', explain: 'Субъект -> qui, не que.' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._french_course_3 = COURSE;
})(window);
