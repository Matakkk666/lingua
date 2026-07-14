/* ============================================================
   AES Paid Course 2: Бизнес-английский Pro (B1-C1)
   6 lessons × ~55 min = 5.5+ hours
   ============================================================ */
(function (global) {
  'use strict';

  const COURSE = {
    id: 'c-business',
    title: 'Бизнес-английский Pro',
    price: 3000,
    oldPrice: 5990,
    level: 'B1–C1',
    duration: '5.5+ часов',
    totalLessons: 6,
    accent: 'dustyPink',
    art: ['#F2DCDC', '#E9C4C4'],
    tagline: 'Деловая переписка, переговоры, презентации и собеседования. 6 модулей для уверенного бизнес-английского.',
    lessons: [
      {
        id: 'pcb-l1',
        topic: 'Деловые email-письма',
        objective: 'Писать профессиональные email-письма для любой деловой ситуации.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Writing Professional Business Emails',
          text: 'Email remains the most important communication tool in business. A well-written email can open doors, build relationships, and prevent misunderstandings. A poorly written one can damage your reputation.\n\n**Structure:** Every professional email has six parts: subject line, salutation, opening, body, closing, and signature. The subject line is critical — it determines whether your email gets read. Keep it short, specific, and clear: "Q3 Sales Report — Review Needed by Friday" is far better than "Hello" or "Important."\n\n**Salutation:** "Dear Mr. Smith," (formal), "Dear Sarah," (semi-formal), or "Hi John," (informal, common among colleagues). If you don\'t know the name, use "To Whom It May Concern," or "Dear Hiring Manager."\n\n**Opening:** Get to the point quickly. "I am writing to inquire about...", "Following up on our meeting...", "Thank you for your prompt reply." Avoid long personal updates in formal emails.\n\n**Body:** Use short paragraphs — one idea per paragraph. Use bullet points for lists. Keep sentences clear and concise. Instead of "I am writing this email in order to inform you that...", simply write "I would like to inform you that..."\n\n**Formal vs. Semi-formal:** Formal emails are for clients, external partners, and senior management. Use "I would like to," "Could you please," "Kindly." Semi-formal emails are for colleagues and familiar contacts. Use "Could you," "Please," "Thanks."\n\n**Closing:** "Best regards," (versatile), "Sincerely," (formal), "Kind regards," (warm), "Thanks," (informal). Follow with your full name, job title, company, and contact details.\n\n**Common Mistakes:** Don\'t use all caps (IT LOOKS LIKE SHOUTING). Don\'t overuse "please" — it weakens your message. Always proofread before sending. Reply within 24 hours, even if just to acknowledge receipt. A good rule: if your email needs more than three paragraphs, consider a meeting instead.',
          vocab: [
            { word: 'Subject line', trans: 'Тема письма' },
            { word: 'Salutation', trans: 'Приветствие в письме' },
            { word: 'I am writing to...', trans: 'Я пишу, чтобы...' },
            { word: 'Following up on...', trans: 'В продолжение (по поводу)...' },
            { word: 'Kindly / Please', trans: 'Будьте добры / пожалуйста' },
            { word: 'I would like to', trans: 'Я бы хотел' },
            { word: 'Best regards / Sincerely', trans: 'С уважением (универсально / формально)' },
            { word: 'To Whom It May Concern', trans: 'Кому это может касаться' }
          ]
        },
        video: { slides: [
          { emoji: '📧', title: 'Subject line', text: 'Короткая, конкретная тема: "Q3 Report — Review by Friday".' },
          { emoji: '👋', title: 'Salutation', text: 'Formal: "Dear Mr. Smith," Semi-formal: "Dear Sarah," Informal: "Hi John,"' },
          { emoji: '✉️', title: 'Opening', text: '"I am writing to...", "Following up on...", "Thank you for your reply."' },
          { emoji: '📝', title: 'Body', text: 'Один абзац = одна мысль. Используйте bullet points для списков.' },
          { emoji: '👔', title: 'Formal', text: '"I would like to," "Could you please," "Kindly." Для клиентов и руководства.' },
          { emoji: '🤝', title: 'Semi-formal', text: '"Could you," "Please," "Thanks." Для коллег.' },
          { emoji: '🔚', title: 'Closing', text: '"Best regards," "Sincerely," "Kind regards," "Thanks," + имя и должность.' },
          { emoji: '⚠️', title: 'Mistakes to avoid', text: 'No ALL CAPS, не перебарщивайте с "please", всегда proofread!' }
        ]},
        quiz: { pool: [
          { q: 'Which subject line is BEST?', options: ['Hello', 'Important', 'Q3 Report — Review by Friday', 'Email'], answer: 2, explain: 'Тема должна быть конкретной и информативной.' },
          { q: 'Which is the MOST formal salutation?', options: ['Hi John', 'Dear Mr. Smith', 'Hey', 'Dear Sarah'], answer: 1, explain: '"Dear Mr. Smith" — наиболее формально.' },
          { q: 'Complete: "I am ___ to inquire about your services."', options: ['write', 'writing', 'wrote', 'written'], answer: 1, explain: '"I am writing to..." — стандартное открытие.' },
          { q: 'Which is a good opening phrase?', options: ['How are you today', 'Following up on our meeting', 'By the way', 'Anyway'], answer: 1, explain: '"Following up on..." — профессиональное открытие.' },
          { q: 'What does "To Whom It May Concern" mean?', options: ['Для коллег', 'Кому это может касаться', 'Для друзей', 'Для начальника'], answer: 1, explain: 'Используется, когда имя получателя неизвестно.' },
          { q: 'Which closing is MOST formal?', options: ['Thanks', 'Cheers', 'Sincerely', 'Bye'], answer: 2, explain: '"Sincerely" — наиболее формальное завершение.' },
          { q: 'What should you avoid in emails?', options: ['Short paragraphs', 'Clear subjects', 'ALL CAPS', 'Bullet points'], answer: 2, explain: 'ALL CAPS воспринимается как крик.' },
          { q: 'Complete: "I ___ like to schedule a meeting."', options: ['would', 'will', 'want', 'am'], answer: 0, explain: '"I would like to..." — вежливая форма.' },
          { q: 'How many ideas per paragraph in the body?', options: ['One', 'Two', 'Three', 'As many as possible'], answer: 0, explain: 'Один абзац = одна мысль.' },
          { q: 'What is a semi-formal phrase?', options: ['Kindly', 'Could you please', 'Could you', 'I beg you'], answer: 2, explain: '"Could you" — semi-formal, для коллег.' },
          { q: 'When should you reply to a business email?', options: ['Within a week', 'Within 24 hours', 'No need', 'Within a month'], answer: 1, explain: 'Желательно ответить в течение 24 часов.' },
          { q: 'Complete: "Thank you for your ___ reply."', options: ['prompt', 'fast', 'quick', 'speed'], answer: 0, explain: '"prompt reply" — стандартная фраза.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I am ___ to inquire about your services."', answer: 'writing', explain: '"I am writing to..." — стандартное открытие.' },
          { type: 'fill-blank', question: 'Complete: "Following ___ on our meeting yesterday."', answer: 'up', explain: '"Following up on..." — в продолжение.' },
          { type: 'choice', question: 'Which subject line is best?', options: ['Hi', 'Meeting', 'Project Update — Approval Needed', 'Important stuff'], answer: 2, explain: 'Конкретная тема с действием.' },
          { type: 'translate', question: 'Переведите: "Я бы хотел назначить встречу."', answer: 'I would like to schedule a meeting', explain: '"I would like to" — вежливая форма.' },
          { type: 'order', question: 'Put in order:', words: ['regards', 'Best', 'Sarah'], answer: 'Best regards Sarah', explain: 'Закрытие + имя.' },
          { type: 'correct', question: 'Find and correct: "Hi, I WANT the report now."', answer: 'I would like the report', explain: '"I want" — грубо. Используйте "I would like".' }
        ]}
      },
      {
        id: 'pcb-l2',
        topic: 'Встречи и переговоры',
        objective: 'Уверенно участвовать в деловых встречах и переговорах.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Meetings and Negotiations in Business English',
          text: 'Meetings are where decisions happen. Whether you are leading or participating, knowing the right phrases will make you sound professional and confident.\n\n**Starting a Meeting:** The chairperson opens: "Good morning, everyone. Thank you for coming. Let\'s get started." Then state the purpose: "The purpose of today\'s meeting is to discuss the new marketing strategy." Review the agenda: "We have three items on the agenda today."\n\n**Participating:** To make a point: "I\'d like to add that...", "In my opinion,", "From my perspective,". To agree: "I completely agree," "That\'s a great point," "You\'re absolutely right." To disagree politely: "I see your point, but...", "I understand what you\'re saying, however...", "With all due respect, I think..."\n\n**Making Proposals:** "I\'d like to propose that we...", "What if we...?", "How about we try...?", "I suggest we consider..."\n\n**Negotiation Phrases:** Negotiation is about finding a win-win solution. "What are your expectations?" "We\'re looking for..." "Could you go a bit lower?" "That\'s beyond our budget." "Can we meet halfway?" "Let me think about it." "I\'ll get back to you by Friday."\n\n**Active Listening:** Show you\'re engaged: "I see," "Right," "Exactly," "That makes sense." Clarify: "Could you elaborate on that?" "What exactly do you mean by...?" "Let me make sure I understand — you\'re saying that...?"\n\n**Interrupting Politely:** "Sorry to interrupt, but...", "If I could just come in here...", "Could I add something?"\n\n**Ending a Meeting:** "Let\'s summarize what we\'ve agreed." "To recap, we\'ve decided that..." "Action items: John will..., Sarah will..." "Let\'s schedule the next meeting." "Thank you all for your time."\n\n**Cultural Note:** In English-speaking business culture, directness is valued but politeness is essential. Always acknowledge others\' points before making your own. Silence is acceptable — it shows you\'re thinking, not that you agree.',
          vocab: [
            { word: 'Let\'s get started', trans: 'Давайте начнём' },
            { word: 'I\'d like to propose...', trans: 'Я бы хотел предложить...' },
            { word: 'I see your point, but...', trans: 'Я понимаю, но...' },
            { word: 'Can we meet halfway?', trans: 'Можем встретиться на полпути (компромисс)?' },
            { word: 'Could you elaborate?', trans: 'Не могли бы вы подробнее?' },
            { word: 'Sorry to interrupt', trans: 'Извините, что перебиваю' },
            { word: 'Let\'s summarize', trans: 'Давайте подведём итоги' },
            { word: 'Action items', trans: 'Задачи (после встречи)' }
          ]
        },
        video: { slides: [
          { emoji: '🪑', title: 'Starting', text: '"Good morning. Thank you for coming. Let\'s get started."' },
          { emoji: '📋', title: 'Agenda', text: '"We have three items on the agenda today." Цель встречи ясна.' },
          { emoji: '💬', title: 'Making a point', text: '"I\'d like to add that...", "In my opinion,", "From my perspective,"' },
          { emoji: '🤔', title: 'Agreeing / Disagreeing', text: '"That\'s a great point!" / "I see your point, but..."' },
          { emoji: '💡', title: 'Proposals', text: '"What if we...?", "How about we try...?", "I suggest we consider..."' },
          { emoji: '🤝', title: 'Negotiation', text: '"Can we meet halfway?", "That\'s beyond our budget.", "Let me think about it."' },
          { emoji: '👂', title: 'Active listening', text: '"Could you elaborate on that?" "Let me make sure I understand..."' },
          { emoji: '✅', title: 'Ending', text: '"Let\'s summarize. Action items: John will..., Sarah will..." Спасибо!' }
        ]},
        quiz: { pool: [
          { q: 'How does a chairperson start a meeting?', options: ['Let\'s go', 'Let\'s get started', 'Begin now', 'Start talking'], answer: 1, explain: '"Let\'s get started" — стандартное открытие.' },
          { q: 'How do you make a proposal politely?', options: ['We must do', 'I\'d like to propose that we', 'Do this', 'You should'], answer: 1, explain: '"I\'d like to propose that we..." — вежливо.' },
          { q: 'How do you disagree politely?', options: ['You\'re wrong', 'No, that\'s bad', 'I see your point, but...', 'I disagree completely'], answer: 2, explain: '"I see your point, but..." — вежливое несогласие.' },
          { q: 'What does "Can we meet halfway?" mean?', options: ['Let\'s stop', 'Let\'s compromise', 'Let\'s leave', 'Let\'s restart'], answer: 1, explain: '"Meet halfway" = прийти к компромиссу.' },
          { q: 'How do you ask for more detail?', options: ['What?', 'Explain now', 'Could you elaborate on that?', 'More!'], answer: 2, explain: '"Could you elaborate on that?" — профессионально.' },
          { q: 'How do you interrupt politely?', options: ['Stop!', 'Sorry to interrupt, but...', 'Be quiet', 'Listen to me'], answer: 1, explain: '"Sorry to interrupt, but..." — вежливо.' },
          { q: 'What are "action items"?', options: ['Problems', 'Tasks after the meeting', 'Meeting topics', 'Apologies'], answer: 1, explain: 'Action items = задачи после встречи.' },
          { q: 'Complete: "Let\'s ___ what we\'ve agreed."', options: ['summarize', 'finish', 'stop', 'change'], answer: 0, explain: '"Let\'s summarize" — подвести итоги.' },
          { q: 'How do you say you\'ll reply later?', options: ['Never', 'I\'ll get back to you by Friday', 'No comment', 'Maybe later'], answer: 1, explain: '"I\'ll get back to you by..." — обещание ответить.' },
          { q: 'How do you agree strongly?', options: ['Maybe', 'I completely agree', 'I guess so', 'Not sure'], answer: 1, explain: '"I completely agree" — полное согласие.' },
          { q: 'Complete: "What ___ we try a different approach?"', options: ['if', 'about', 'do', 'can'], answer: 0, explain: '"What if we try...?" — предложение.' },
          { q: 'What does "That\'s beyond our budget" mean?', options: ['Too cheap', 'Too expensive', 'On sale', 'Free'], answer: 1, explain: 'За пределами бюджета = слишком дорого.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Let\'s get ___ ."', answer: 'started', explain: '"Let\'s get started" — открытие встречи.' },
          { type: 'fill-blank', question: 'Complete: "I see your ___, but I disagree."', answer: 'point', explain: '"I see your point, but..." — вежливое несогласие.' },
          { type: 'choice', question: 'How to ask for elaboration?', options: ['What?', 'More!', 'Could you elaborate on that?', 'Explain now'], answer: 2, explain: '"Could you elaborate on that?" — профессионально.' },
          { type: 'translate', question: 'Переведите: "Давайте подведём итоги."', answer: 'Let\'s summarize', explain: '"Let\'s summarize" — подвести итоги.' },
          { type: 'order', question: 'Put in order:', words: ['propose', 'I\'d', 'to', 'like', 'that'], answer: "I'd like to propose that", explain: 'I\'d like to propose that we...' },
          { type: 'correct', question: 'Find and correct: "You wrong about this."', answer: "You're wrong about this", explain: 'Нужно "You\'re" = You are.' }
        ]}
      },
      {
        id: 'pcb-l3',
        topic: 'Презентации и публичные выступления',
        objective: 'Делать эффективные презентации на английском.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Delivering Effective Presentations in English',
          text: 'A great presentation can persuade, inspire, and inform. A poor one can bore your audience and damage your credibility. The key is preparation and clear structure.\n\n**Structure:** Every presentation has three parts: introduction, body, and conclusion. The introduction should grab attention and outline your talk. The body covers your main points. The conclusion summarizes and calls to action.\n\n**Opening Phrases:** "Good morning, everyone. Thank you for being here today." Then introduce your topic: "I\'m here to talk about..." or "Today, I\'d like to present..." A strong hook grabs attention: "Did you know that 80% of startups fail within five years?"\n\n**Outlining:** Tell the audience what to expect: "I\'ve divided my presentation into three parts. First, I\'ll cover... Then, I\'ll discuss... Finally, I\'ll explain..."\n\n**Transitions:** Smooth transitions guide your audience. "Moving on to my next point...", "That brings me to...", "Now let\'s look at...", "This leads me to my next topic..."\n\n**Visual Aids:** Slides should support, not replace, your speech. Keep them simple: one idea per slide, large fonts, minimal text. "As you can see on this chart...", "This graph illustrates...", "Let me draw your attention to this figure."\n\n**Engaging the Audience:** Ask rhetorical questions: "What would happen if...?" Use pauses for effect. Make eye contact. "Raise your hand if you\'ve ever..." Encourage participation.\n\n**Handling Questions:** "That\'s a great question." "I\'m glad you asked." If you don\'t know: "That\'s an interesting point. I don\'t have the exact figure right now, but I\'ll get back to you." Never lie or make up answers.\n\n**Conclusion:** "To conclude...", "In summary,", "Let me wrap up by saying..." End with a call to action: "I encourage you to...", "The next step is...", "Thank you for your attention. Are there any questions?"\n\n**Tips:** Practice out loud. Time yourself. Prepare for likely questions. Remember: the audience wants you to succeed. Nervousness is normal — channel it into energy.',
          vocab: [
            { word: 'I\'d like to present...', trans: 'Я бы хотел представить...' },
            { word: 'Moving on to...', trans: 'Переходим к...' },
            { word: 'As you can see...', trans: 'Как вы можете видеть...' },
            { word: 'Let me draw your attention to...', trans: 'Обратите внимание на...' },
            { word: 'That brings me to...', trans: 'Это подводит меня к...' },
            { word: 'To conclude...', trans: 'В заключение...' },
            { word: 'Are there any questions?', trans: 'Есть вопросы?' },
            { word: 'I\'ll get back to you', trans: 'Я вернусь к вам с ответом' }
          ]
        },
        video: { slides: [
          { emoji: '🎤', title: 'Opening', text: '"Good morning. Thank you for being here. Today I\'d like to present..."' },
          { emoji: '📊', title: 'Outline', text: '"I\'ve divided my presentation into three parts. First..., then..., finally..."' },
          { emoji: '➡️', title: 'Transitions', text: '"Moving on to...", "That brings me to...", "Now let\'s look at..."' },
          { emoji: '📈', title: 'Visual aids', text: 'Один слайд = одна идея. "As you can see on this chart..."' },
          { emoji: '🙋', title: 'Engaging', text: 'Ask questions: "What would happen if...?" Делайте паузы.' },
          { emoji: '❓', title: 'Questions', text: '"That\'s a great question." "I\'ll get back to you." Не выдумывайте!' },
          { emoji: '🔚', title: 'Conclusion', text: '"To conclude...", "In summary," Call to action.' },
          { emoji: '💪', title: 'Tips', text: 'Practice out loud. Time yourself. Аудитория хочет вашего успеха!' }
        ]},
        quiz: { pool: [
          { q: 'How should you open a presentation?', options: ['Let\'s go', 'Good morning, thank you for being here', 'Listen up', 'Be quiet'], answer: 1, explain: 'Вежливое приветствие и благодарность.' },
          { q: 'How do you introduce your topic?', options: ['I talk about', 'I\'d like to present', 'You will hear', 'Topic is'], answer: 1, explain: '"I\'d like to present..." — профессионально.' },
          { q: 'How do you transition to a new point?', options: ['Next', 'Moving on to my next point', 'Now different', 'Change topic'], answer: 1, explain: '"Moving on to..." — плавный переход.' },
          { q: 'How many ideas per slide?', options: ['Five', 'Three', 'One', 'As many as fit'], answer: 2, explain: 'Один слайд = одна идея.' },
          { q: 'How do you reference a chart?', options: ['Look there', 'As you can see on this chart', 'See it', 'Chart good'], answer: 1, explain: '"As you can see on this chart..."' },
          { q: 'What if you don\'t know the answer?', options: ['Make something up', 'Say "I don\'t know" and move on', 'I\'ll get back to you', 'Ignore the question'], answer: 2, explain: '"I\'ll get back to you" — честно и профессионально.' },
          { q: 'How do you conclude?', options: ['That\'s it', 'The end', 'To conclude...', 'I\'m done'], answer: 2, explain: '"To conclude..." — стандартное завершение.' },
          { q: 'What should slides do?', options: ['Replace your speech', 'Support your speech', 'Be text-heavy', 'Have tiny fonts'], answer: 1, explain: 'Слайды поддерживают речь, не заменяют её.' },
          { q: 'Complete: "Let me draw your ___ to this figure."', options: ['eye', 'attention', 'look', 'mind'], answer: 1, explain: '"Draw your attention to..." — обратить внимание.' },
          { q: 'How do you handle a good question?', options: ['Ignore it', 'That\'s a great question', 'No comment', 'Next'], answer: 1, explain: '"That\'s a great question" — уважительный ответ.' },
          { q: 'Complete: "That ___ me to my next point."', options: ['brings', 'takes', 'goes', 'comes'], answer: 0, explain: '"That brings me to..." — переход.' },
          { q: 'What should you do before presenting?', options: ['Wing it', 'Practice out loud', 'Skip prep', 'Read slides only'], answer: 1, explain: 'Практикуйтесь вслух и засекайте время.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Moving ___ to my next point..."', answer: 'on', explain: '"Moving on to..." — переход.' },
          { type: 'fill-blank', question: 'Complete: "To ___, let me summarize the key points."', answer: 'conclude', explain: '"To conclude..." — завершение.' },
          { type: 'choice', question: 'How to reference a visual?', options: ['Look', 'See it', 'As you can see on this chart', 'Chart there'], answer: 2, explain: '"As you can see on this chart..."' },
          { type: 'translate', question: 'Переведите: "Обратите внимание на эту цифру."', answer: 'Let me draw your attention to this figure', explain: '"Draw your attention to..." — обратить внимание.' },
          { type: 'order', question: 'Put in order:', words: ['present', 'I\'d', 'to', 'like', 'today'], answer: "I'd like to present today", explain: 'I\'d like to present today.' },
          { type: 'correct', question: 'Find and correct: "I will get back to you."', answer: "I'll get back to you", explain: 'Сокращение "I\'ll" звучит естественнее.' }
        ]}
      },
      {
        id: 'pcb-l4',
        topic: 'Отчёты и документация',
        objective: 'Писать чёткие и профессиональные деловые отчёты.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Writing Clear and Professional Business Reports',
          text: 'Reports are essential in business. They communicate findings, support decisions, and document progress. A well-structured report is clear, concise, and actionable.\n\n**Structure:** A standard business report has six sections: executive summary, introduction, methodology, findings, conclusions, and recommendations.\n\n**Executive Summary:** This is the most important part — many readers only read this. Summarize the purpose, key findings, and main recommendations in 1-2 paragraphs. Write it last, even though it appears first. "This report examines... The key findings indicate... We recommend..."\n\n**Introduction:** Explain the purpose and scope. "The purpose of this report is to analyze..." State what the report covers and any limitations.\n\n**Methodology:** Briefly explain how you gathered data. "Data was collected through..." "We surveyed 500 customers..." "The analysis covers the period from January to June."\n\n**Findings:** Present your data clearly. Use headings, bullet points, and visuals. Describe trends: "Sales increased by 15%," "There was a significant decline in..." "The figures show a steady upward trend." "Profits remained stable throughout Q2."\n\n**Conclusions:** Interpret the findings. What do they mean? "These results suggest that..." "It is clear that..." "The data indicates..."\n\n**Recommendations:** This is where you add value. Be specific and actionable. "We recommend that the company invest in..." "The marketing team should prioritize..." "Immediate action is required to..."\n\n**Writing Style:** Use formal, objective language. Avoid "I think" — use "The analysis suggests." Use passive voice for objectivity: "The data was analyzed" rather than "I analyzed the data." Keep sentences short and clear. Use consistent formatting.\n\n**Describing Trends:** Increase: "rose," "climbed," "surged." Decrease: "fell," "dropped," "declined." Stable: "remained steady," "leveled off." Sudden: "sharp," "dramatic." Gradual: "steady," "moderate."\n\nAlways proofread your report. Check for clarity, consistency, and correct data.',
          vocab: [
            { word: 'Executive summary', trans: 'Краткое резюме' },
            { word: 'Findings', trans: 'Результаты / выводы' },
            { word: 'Recommendations', trans: 'Рекомендации' },
            { word: 'Methodology', trans: 'Методология' },
            { word: 'Sales increased by 15%', trans: 'Продажи выросли на 15%' },
            { word: 'A steady upward trend', trans: 'Стабильный восходящий тренд' },
            { word: 'The data indicates...', trans: 'Данные указывают на...' },
            { word: 'We recommend that...', trans: 'Мы рекомендуем, чтобы...' }
          ]
        },
        video: { slides: [
          { emoji: '📄', title: 'Structure', text: '6 частей: exec summary, intro, methodology, findings, conclusions, recommendations.' },
          { emoji: '📋', title: 'Executive summary', text: 'Самое важное! Многие читают только это. Пишите последним.' },
          { emoji: '🎯', title: 'Introduction', text: '"The purpose of this report is to analyze..." Цель и охват.' },
          { emoji: '🔬', title: 'Methodology', text: '"Data was collected through..." Как собраны данные.' },
          { emoji: '📊', title: 'Findings', text: 'Заголовки, bullet points, графики. Описывайте тренды.' },
          { emoji: '💡', title: 'Conclusions', text: '"These results suggest that..." Что значат данные.' },
          { emoji: '✅', title: 'Recommendations', text: '"We recommend that..." Конкретные и выполнимые.' },
          { emoji: '📈', title: 'Trends', text: 'rose/climbed/surged, fell/dropped/declined, remained steady.' }
        ]},
        quiz: { pool: [
          { q: 'Which section appears first but is written last?', options: ['Introduction', 'Executive Summary', 'Findings', 'Recommendations'], answer: 1, explain: 'Executive Summary пишется последним, хотя идёт первым.' },
          { q: 'What goes in the methodology section?', options: ['Opinions', 'How data was collected', 'Recommendations', 'Conclusions'], answer: 1, explain: 'Methodology описывает, как собраны данные.' },
          { q: 'How should you describe a 15% increase?', options: ['Sales went up a bit', 'Sales increased by 15%', 'Sales are fine', 'Sales maybe up'], answer: 1, explain: 'Конкретно: "Sales increased by 15%".' },
          { q: 'Which word means a sudden increase?', options: ['Steady', 'Moderate', 'Surged', 'Stable'], answer: 2, explain: '"Surged" = резкий рост.' },
          { q: 'Which means "remained stable"?', options: ['Dropped sharply', 'Leveled off', 'Climbed', 'Declined'], answer: 1, explain: '"Leveled off" = стабилизировался.' },
          { q: 'What voice is preferred in reports?', options: ['Active voice', 'Passive voice', 'No voice', 'Informal voice'], answer: 1, explain: 'Пассивный залог для объективности.' },
          { q: 'Complete: "The data ___ that sales are declining."', options: ['indicate', 'indicates', 'indicating', 'indicated'], answer: 0, explain: '"The data indicate" (множ. число).' },
          { q: 'Complete: "We ___ that the company invest in training."', options: ['think', 'recommend', 'want', 'hope'], answer: 1, explain: '"We recommend that..." — стандартная фраза.' },
          { q: 'What should recommendations be?', options: ['Vague', 'Specific and actionable', 'Personal opinions', 'Long stories'], answer: 1, explain: 'Рекомендации должны быть конкретными.' },
          { q: 'Which is a gradual decrease?', options: ['Sharp', 'Dramatic', 'Steady decline', 'Sudden drop'], answer: 2, explain: '"Steady decline" = постепенное снижение.' },
          { q: 'Complete: "The analysis ___ a steady upward trend."', options: ['show', 'shows', 'showing', 'showed'], answer: 1, explain: '"The analysis shows" — единственное число.' },
          { q: 'What should you avoid in reports?', options: ['Bullet points', 'Headings', 'Personal opinions like "I think"', 'Clear data'], answer: 2, explain: 'Избегайте "I think" — используйте "The analysis suggests".' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Sales ___ by 15% last quarter."', answer: 'increased', explain: '"Increased by 15%" — рост.' },
          { type: 'fill-blank', question: 'Complete: "We ___ that the company invest in training."', answer: 'recommend', explain: '"We recommend that..." — рекомендация.' },
          { type: 'choice', question: 'Which means a sudden increase?', options: ['Steady', 'Moderate', 'Surged', 'Stable'], answer: 2, explain: '"Surged" = резкий рост.' },
          { type: 'translate', question: 'Переведите: "Данные указывают на восходящий тренд."', answer: 'The data indicate an upward trend', explain: '"The data indicate" — множественное число.' },
          { type: 'order', question: 'Put in order:', words: ['summary', 'Executive', 'important', 'is', 'the', 'most'], answer: 'Executive summary is the most important', explain: 'Executive summary — самое важное.' },
          { type: 'correct', question: 'Find and correct: "The data shows a trends."', answer: 'The data shows a trend', explain: '"Trend" в единственном числе.' }
        ]}
      },
      {
        id: 'pcb-l5',
        topic: 'Нетворкинг и small talk',
        objective: 'Уверенно общаться на деловых мероприятиях.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Networking and Small Talk in Business',
          text: 'Small talk is not "small" — it builds relationships, opens doors, and sets the tone for business interactions. In English-speaking cultures, small talk is an essential business skill.\n\n**Why Small Talk Matters:** It builds rapport before getting to business. People do business with people they like and trust. A few minutes of friendly conversation can make the difference between a successful deal and a cold rejection.\n\n**Good Topics:**\n- Travel: "Did you have a good trip?" "How was your flight?"\n- Weather: "It\'s a beautiful day, isn\'t it?" "The weather\'s been great this week."\n- The venue: "Great venue, isn\'t it?" "Have you been here before?"\n- The event: "Are you enjoying the conference?" "What did you think of the keynote?"\n- Hobbies: "What do you do in your free time?" "Do you follow any sports?"\n- Work (general): "What brings you to this event?" "How long have you been with the company?"\n\n**Networking Phrases:** "Hi, I don\'t think we\'ve met. I\'m [name] from [company]." "It\'s a pleasure to meet you." "May I introduce you to...?" "Could I give you my card?" "Let me scan your badge."\n\n**Exchanging Contacts:** "Can I connect with you on LinkedIn?" "Here\'s my business card." "Let\'s keep in touch." "I\'ll send you that article we talked about."\n\n**Following Up:** Within 24-48 hours, send a brief message: "Hi [name], it was great meeting you at [event]. I\'d love to continue our conversation about [topic]. Would you be available for a coffee next week?"\n\n**Topics to Avoid:** Politics, religion, personal finances, health problems, controversial issues, and deeply personal questions. When in doubt, keep it light and professional.\n\n**Tips:** Listen more than you speak. Ask open-ended questions. Smile and make eye contact. Remember names — repeat them when introduced. Don\'t check your phone during conversations.\n\nSmall talk is a skill that improves with practice. The more you do it, the more natural it becomes.',
          vocab: [
            { word: 'Did you have a good trip?', trans: 'Хорошо доехали?' },
            { word: 'What brings you to this event?', trans: 'Что привело вас на это мероприятие?' },
            { word: 'It\'s a pleasure to meet you', trans: 'Рад познакомиться' },
            { word: 'May I introduce you to...?', trans: 'Могу я вас познакомить с...?' },
            { word: 'Let\'s keep in touch', trans: 'Давайте на связи' },
            { word: 'Can I connect with you on LinkedIn?', trans: 'Можно добавить вас в LinkedIn?' },
            { word: 'It was great meeting you', trans: 'Был рад знакомству' },
            { word: 'open-ended questions', trans: 'Открытые вопросы' }
          ]
        },
        video: { slides: [
          { emoji: '💬', title: 'Why it matters', text: 'Small talk строит отношения. Люди работают с теми, кто им нравится.' },
          { emoji: '✈️', title: 'Good topics', text: 'Travel, weather, the venue, the event, hobbies, work (general).' },
          { emoji: '🤝', title: 'Networking', text: '"Hi, I don\'t think we\'ve met. I\'m [name] from [company]."' },
          { emoji: '📞', title: 'Exchanging contacts', text: '"Can I connect with you on LinkedIn?" "Here\'s my card."' },
          { emoji: '📧', title: 'Following up', text: 'Через 24-48 часов: "It was great meeting you at..."' },
          { emoji: '🚫', title: 'Topics to avoid', text: 'Politics, religion, money, health, controversial issues.' },
          { emoji: '👂', title: 'Tips', text: 'Слушайте больше, чем говорите. Задавайте открытые вопросы.' },
          { emoji: '😊', title: 'Remember', text: 'Улыбайтесь, смотрите в глаза, запоминайте имена!' }
        ]},
        quiz: { pool: [
          { q: 'Which is a good small talk topic?', options: ['Politics', 'Religion', 'Travel', 'Personal finances'], answer: 2, explain: 'Travel — безопасная тема для small talk.' },
          { q: 'How do you introduce yourself?', options: ['I am here', 'Hi, I don\'t think we\'ve met. I\'m [name]', 'Give me your name', 'Who are you'], answer: 1, explain: 'Вежливое представление.' },
          { q: 'How do you offer your contact?', options: ['Call me', 'Here\'s my business card', 'Find me', 'Google me'], answer: 1, explain: '"Here\'s my business card" — профессионально.' },
          { q: 'When should you follow up after networking?', options: ['A month later', 'Within 24-48 hours', 'Never', 'A week later'], answer: 1, explain: 'Follow up в течение 24-48 часов.' },
          { q: 'Which topic should you AVOID?', options: ['Weather', 'The venue', 'Politics', 'Travel'], answer: 2, explain: 'Politics — избегать в small talk.' },
          { q: 'Complete: "___ we\'ve met. I\'m Sarah."', options: ['I think', 'I don\'t think', 'We', 'Maybe'], answer: 1, explain: '"I don\'t think we\'ve met" — вежливое начало.' },
          { q: 'How do you ask to connect online?', options: ['Add me', 'Can I connect with you on LinkedIn?', 'Find me online', 'Social media?'], answer: 1, explain: '"Can I connect with you on LinkedIn?"' },
          { q: 'What should you do more in small talk?', options: ['Talk', 'Listen', 'Check phone', 'Interrupt'], answer: 1, explain: 'Слушайте больше, чем говорите.' },
          { q: 'Complete: "It ___ a pleasure to meet you."', options: ['is', 'was', 'be', 'were'], answer: 1, explain: '"It was a pleasure..." — после знакомства.' },
          { q: 'What type of questions are best?', options: ['Yes/No questions', 'Open-ended questions', 'Personal questions', 'No questions'], answer: 1, explain: 'Открытые вопросы стимулируют разговор.' },
          { q: 'Complete: "Let\'s keep in ___ ."', options: ['contact', 'touch', 'connection', 'reach'], answer: 1, explain: '"Let\'s keep in touch" = оставаться на связи.' },
          { q: 'What should you NOT do during small talk?', options: ['Smile', 'Make eye contact', 'Check your phone', 'Ask questions'], answer: 2, explain: 'Не проверяйте телефон во время разговора.' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "Let\'s keep in ___ ."', answer: 'touch', explain: '"Let\'s keep in touch" = на связи.' },
          { type: 'fill-blank', question: 'Complete: "Can I connect with you on ___ ?"', answer: 'LinkedIn', explain: 'LinkedIn — стандарт для делового нетворкинга.' },
          { type: 'choice', question: 'Which topic should you avoid?', options: ['Weather', 'Travel', 'Personal finances', 'The event'], answer: 2, explain: 'Личные финансы — табу в small talk.' },
          { type: 'translate', question: 'Переведите: "Рад с вами познакомиться."', answer: "It's a pleasure to meet you", explain: '"It\'s a pleasure to meet you" — вежливо.' },
          { type: 'order', question: 'Put in order:', words: ['meeting', 'great', 'It', 'was', 'you'], answer: 'It was great meeting you', explain: 'It was great meeting you.' },
          { type: 'correct', question: 'Find and correct: "What brings you at this event?"', answer: 'What brings you to this event', explain: 'Нужен предлог "to", не "at".' }
        ]}
      },
      {
        id: 'pcb-l6',
        topic: 'Собеседования и резюме',
        objective: 'Успешно проходить собеседования на английском и писать CV.',
        estimatedTime: '55 минут',
        reading: {
          title: 'Job Interviews and CV Writing in English',
          text: 'A job interview in English can be intimidating, but with preparation, you can present yourself confidently and professionally. Your CV gets you the interview; your performance gets you the job.\n\n**CV Structure:** A professional CV includes: contact information, professional summary, work experience, education, skills, and optionally references. Keep it to 1-2 pages. Use a clean, professional format.\n\n**Professional Summary:** 2-3 sentences at the top. "Marketing professional with 7 years of experience in digital campaigns. Proven track record of increasing engagement by 40%. Seeking a senior role in a dynamic company."\n\n**Work Experience:** List in reverse chronological order. "Marketing Manager, ABC Corp (2020-Present). Led a team of 8. Increased social media engagement by 40%. Launched 3 successful product campaigns."\n\n**Common Interview Questions:**\n- "Tell me about yourself." — Give a brief professional summary, not your life story.\n- "Why do you want to work here?" — Show you researched the company.\n- "What are your strengths?" — Give specific examples.\n- "What are your weaknesses?" — Be honest but show growth.\n- "Where do you see yourself in 5 years?" — Show ambition aligned with the company.\n\n**The STAR Method:** For behavioral questions, use STAR: Situation (context), Task (your responsibility), Action (what you did), Result (the outcome). "In my previous role (Situation), I was tasked with improving sales (Task). I implemented a new CRM system and trained the team (Action). Sales increased by 25% in six months (Result)."\n\n**Talking About Strengths:** "One of my key strengths is..." "I excel at..." "My colleagues would describe me as..." Always back claims with examples.\n\n**Talking About Weaknesses:** Pick a real but non-critical weakness and show improvement. "I used to struggle with public speaking, so I joined Toastmasters. Now I present confidently to large groups."\n\n**Asking Questions:** Always have questions ready: "What does a typical day look like?" "What are the biggest challenges in this role?" "How does the team measure success?"\n\n**Following Up:** Send a thank-you email within 24 hours: "Thank you for your time today. I enjoyed learning more about the role and am very interested in joining your team."\n\nBe authentic, be prepared, and show enthusiasm. Confidence comes from preparation.',
          vocab: [
            { word: 'Professional summary', trans: 'Профессиональное резюме (в CV)' },
            { word: 'Tell me about yourself', trans: 'Расскажите о себе' },
            { word: 'Why do you want to work here?', trans: 'Почему вы хотите здесь работать?' },
            { word: 'STAR method', trans: 'Метод STAR (Situation, Task, Action, Result)' },
            { word: 'Strengths and weaknesses', trans: 'Сильные и слабые стороны' },
            { word: 'Where do you see yourself in 5 years?', trans: 'Где вы видите себя через 5 лет?' },
            { word: 'Proven track record', trans: 'Доказанный опыт достижений' },
            { word: 'Thank you for your time', trans: 'Спасибо за ваше время' }
          ]
        },
        video: { slides: [
          { emoji: '📄', title: 'CV structure', text: 'Contact info, summary, work experience, education, skills. 1-2 страницы.' },
          { emoji: '✍️', title: 'Professional summary', text: '"Marketing professional with 7 years of experience..." 2-3 предложения.' },
          { emoji: '💬', title: 'Tell me about yourself', text: 'Краткое профессиональное резюме, не история жизни.' },
          { emoji: '⭐', title: 'STAR method', text: 'Situation, Task, Action, Result. Конкретные примеры!' },
          { emoji: '💪', title: 'Strengths', text: '"One of my key strengths is..." Подкрепляйте примерами!' },
          { emoji: '📈', title: 'Weaknesses', text: 'Реальная слабость + как вы над ней работаете.' },
          { emoji: '❓', title: 'Asking questions', text: '"What does a typical day look like?" "How is success measured?"' },
          { emoji: '📧', title: 'Following up', text: 'Thank-you email в течение 24 часов. Покажите интерес!' }
        ]},
        quiz: { pool: [
          { q: 'How long should a professional CV be?', options: ['5 pages', '1-2 pages', 'Half a page', 'No limit'], answer: 1, explain: 'CV должно быть 1-2 страницы.' },
          { q: 'What does STAR stand for?', options: ['Start, Think, Act, Review', 'Situation, Task, Action, Result', 'Strong, Team, Active, Ready', 'Skill, Time, Ability, Role'], answer: 1, explain: 'STAR = Situation, Task, Action, Result.' },
          { q: 'How should you answer "Tell me about yourself"?', options: ['Your life story', 'A brief professional summary', 'Your hobbies', 'Your childhood'], answer: 1, explain: 'Краткое профессиональное резюме.' },
          { q: 'How should you discuss a weakness?', options: ['Say you have none', 'Be honest and show growth', 'List many weaknesses', 'Refuse to answer'], answer: 1, explain: 'Будьте честны, покажите развитие.' },
          { q: 'When should you send a thank-you email?', options: ['A week later', 'Within 24 hours', 'Never', 'Before the interview'], answer: 1, explain: 'В течение 24 часов после собеседования.' },
          { q: 'What should work experience list be ordered by?', options: ['Alphabetically', 'Reverse chronological', 'Random', 'By importance'], answer: 1, explain: 'В обратном хронологическом порядке.' },
          { q: 'Complete: "I ___ at leading cross-functional teams."', options: ['good', 'excel', 'best', 'strong'], answer: 1, explain: '"I excel at..." = силён в...' },
          { q: 'What should you do before "Why do you want to work here?"', options: ['Nothing', 'Research the company', 'Memorize a speech', 'Bring gifts'], answer: 1, explain: 'Изучите компанию заранее.' },
          { q: 'Complete: "I have a proven track ___ of success."', options: ['record', 'history', 'list', 'file'], answer: 0, explain: '"Proven track record" = доказанный опыт.' },
          { q: 'What should you always have for an interview?', options: ['No questions', 'Questions to ask', 'A gift', 'A friend'], answer: 1, explain: 'Всегда готовьте вопросы.' },
          { q: 'Complete: "Thank you for your ___ today."', options: ['money', 'time', 'job', 'office'], answer: 1, explain: '"Thank you for your time today."' },
          { q: 'What does "I was tasked with..." mean?', options: ['I was given a task', 'I am busy', 'I like tasks', 'I am tired'], answer: 0, explain: '"I was tasked with..." = мне было поручено...' }
        ], showCount: 10, passThreshold: 0.6 },
        homework: { exercises: [
          { type: 'fill-blank', question: 'Complete: "I have a proven track ___ of success."', answer: 'record', explain: '"Proven track record" = доказанный опыт.' },
          { type: 'fill-blank', question: 'Complete: "Thank you for your ___ today."', answer: 'time', explain: '"Thank you for your time" — благодарность.' },
          { type: 'choice', question: 'What does STAR stand for?', options: ['Start, Think, Act, Review', 'Situation, Task, Action, Result', 'Strong, Team, Active, Ready', 'Skill, Time, Ability, Role'], answer: 1, explain: 'STAR = Situation, Task, Action, Result.' },
          { type: 'translate', question: 'Переведите: "Почему вы хотите здесь работать?"', answer: 'Why do you want to work here', explain: 'Стандартный вопрос на собеседовании.' },
          { type: 'order', question: 'Put in order:', words: ['track', 'proven', 'have', 'I', 'record', 'a'], answer: 'I have a proven track record', explain: 'I have a proven track record of success.' },
          { type: 'correct', question: 'Find and correct: "I excel to leading teams."', answer: 'I excel at leading teams', explain: 'Нужен предлог "at", не "to".' }
        ]}
      }
    ]
  };

  global.AESData = global.AESData || {};
  global.AESData._paid_course_2 = COURSE;
})(window);
