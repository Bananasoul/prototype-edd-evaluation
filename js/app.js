// App — Main navigation and questionnaire logic

// Anti-scraping email obfuscation
function sendMail(e) {
    e.preventDefault();
    const u = 'philippebanaszak';
    const d = 'me.com';
    const a = document.createElement('a');
    a.href = 'mai' + 'lto:' + u + '@' + d;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// State
let answers = { had: {}, odi: {}, tsk: {} };
let questionnaireOrder = ['had', 'odi', 'tsk'];
let currentQuestionnaire = 0;   // 0=HAD, 1=ODI, 2=TSK
let currentQuestionIndex = 0;

// ===== NAVIGATION =====

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function selectLanguage(lang) {
    currentLang = lang;
    applyTranslations();
    showScreen('screen-intro');
}

function startQuestionnaires() {
    currentQuestionnaire = 0;
    currentQuestionIndex = 0;
    answers = { had: {}, odi: {}, tsk: {} };
    showScreen('screen-questionnaire');
    renderCurrentQuestion();
}

function newEvaluation() {
    answers = { had: {}, odi: {}, tsk: {} };
    currentQuestionnaire = 0;
    currentQuestionIndex = 0;
    showScreen('screen-welcome');
}

// ===== PROGRESS STEPS =====

function updateGlobalProgress() {
    const steps = document.querySelectorAll('#screen-questionnaire .progress-step');
    const lines = document.querySelectorAll('#screen-questionnaire .progress-line');

    steps.forEach((step, i) => {
        step.classList.remove('active', 'done');
        if (i < currentQuestionnaire) step.classList.add('done');
        else if (i === currentQuestionnaire) step.classList.add('active');
    });

    lines.forEach((line, i) => {
        line.classList.toggle('done', i < currentQuestionnaire);
    });
}

// ===== QUESTION RENDERING =====

function getCurrentQuestions() {
    const qType = questionnaireOrder[currentQuestionnaire];
    return QUESTIONNAIRES[currentLang][qType];
}

function getTotalQuestions() {
    return getCurrentQuestions().length;
}

function renderCurrentQuestion() {
    updateGlobalProgress();

    const qType = questionnaireOrder[currentQuestionnaire];
    const questions = getCurrentQuestions();
    const total = questions.length;
    const item = questions[currentQuestionIndex];

    // Title
    document.getElementById('q-title').textContent = t(qType + '_title');
    document.getElementById('q-subtitle').textContent = t(qType + '_subtitle');

    // Progress
    const pct = ((currentQuestionIndex + 1) / total) * 100;
    document.getElementById('q-progress').style.width = pct + '%';
    document.getElementById('q-progress-text').textContent =
        t('q_of').replace('{current}', currentQuestionIndex + 1).replace('{total}', total);

    // Content
    const content = document.getElementById('q-content');

    if (qType === 'had') {
        renderHADQuestion(content, item, currentQuestionIndex);
    } else if (qType === 'odi') {
        renderODIQuestion(content, item, currentQuestionIndex);
    } else if (qType === 'tsk') {
        renderTSKQuestion(content, item, currentQuestionIndex);
    }

    // Nav buttons
    document.getElementById('btn-prev').style.visibility =
        (currentQuestionnaire === 0 && currentQuestionIndex === 0) ? 'hidden' : 'visible';

    const isLast = (currentQuestionnaire === questionnaireOrder.length - 1) &&
                   (currentQuestionIndex === total - 1);
    document.getElementById('btn-next').textContent = isLast ? (currentLang === 'fr' ? 'Terminer ✓' : 'Beenden ✓') : t('btn_next');

    updateNextButton();
}

// HAD
function renderHADQuestion(container, item, idx) {
    const catClass = item.category === 'anxiety' ? 'category-anxiety' : 'category-depression';
    const catLabel = item.category === 'anxiety' ? t('cat_anxiety') : t('cat_depression');
    const selected = answers.had[item.id];

    container.innerHTML = `
        <span class="question-category ${catClass}">${catLabel}</span>
        <p class="question-text">${idx + 1}. ${item.text}</p>
        <div class="options-list">
            ${item.options.map((opt, i) => `
                <button class="option-btn ${selected === opt.value ? 'selected' : ''}"
                        onclick="selectAnswer('had', '${item.id}', ${opt.value}, this)">
                    <span class="option-num">${i + 1}</span>
                    <span>${opt.label}</span>
                </button>
            `).join('')}
        </div>
    `;
}

// ODI
function renderODIQuestion(container, item, idx) {
    const selected = answers.odi[item.id];

    container.innerHTML = `
        <p class="question-text">${item.title}</p>
        <div class="options-list">
            ${item.options.map((opt, i) => `
                <button class="option-btn ${selected === opt.value ? 'selected' : ''}"
                        onclick="selectAnswer('odi', '${item.id}', ${opt.value}, this)">
                    <span class="option-num">${opt.value}</span>
                    <span>${opt.label}</span>
                </button>
            `).join('')}
        </div>
    `;
}

// TSK
function renderTSKQuestion(container, item, idx) {
    const selected = answers.tsk[item.id];
    const reversedHTML = item.reversed ? `<span class="reversed-tag">↺ ${t('tsk_reversed')}</span>` : '';

    container.innerHTML = `
        ${reversedHTML}
        <p class="question-text">${idx + 1}. ${item.text}</p>
        <div class="likert-options">
            ${[1,2,3,4].map(v => `
                <button class="likert-btn ${selected === v ? 'selected' : ''}"
                        onclick="selectAnswer('tsk', '${item.id}', ${v}, this)">
                    <span class="likert-num">${v}</span>
                    <span class="likert-label">${t(['', 'tsk_strongly_disagree', 'tsk_disagree', 'tsk_agree', 'tsk_strongly_agree'][v])}</span>
                </button>
            `).join('')}
        </div>
    `;
}

// ===== ANSWER HANDLING =====

function selectAnswer(qType, itemId, value, btn) {
    answers[qType][itemId] = value;

    // Visual
    btn.closest('.options-list, .likert-options')
       .querySelectorAll('.option-btn, .likert-btn')
       .forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    updateNextButton();

    // Auto-advance after small delay
    setTimeout(() => {
        if (canProceed()) {
            nextQuestion();
        }
    }, 350);
}

function canProceed() {
    const qType = questionnaireOrder[currentQuestionnaire];
    const item = getCurrentQuestions()[currentQuestionIndex];
    return answers[qType][item.id] !== undefined;
}

function updateNextButton() {
    document.getElementById('btn-next').disabled = !canProceed();
}

// ===== NAVIGATION =====

function nextQuestion() {
    const total = getTotalQuestions();

    if (currentQuestionIndex < total - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
    } else if (currentQuestionnaire < questionnaireOrder.length - 1) {
        currentQuestionnaire++;
        currentQuestionIndex = 0;
        renderCurrentQuestion();
    } else {
        // All done
        showScreen('screen-thanks');
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
    } else if (currentQuestionnaire > 0) {
        currentQuestionnaire--;
        currentQuestionIndex = getTotalQuestions() - 1;
        renderCurrentQuestion();
    }
}

// ===== SCORING =====

function calculateAllScores() {
    const lang = currentLang;
    const data = QUESTIONNAIRES[lang];

    // HAD
    let anxietyScore = 0, depressionScore = 0;
    data.had.forEach(item => {
        const val = answers.had[item.id];
        if (val !== undefined) {
            if (item.category === 'anxiety') anxietyScore += val;
            else depressionScore += val;
        }
    });

    // ODI (formule standard : si section omise, diviser par le max réel)
    let odiSum = 0;
    let odiAnswered = 0;
    data.odi.forEach(item => {
        const val = answers.odi[item.id];
        if (val !== undefined) {
            odiSum += val;
            odiAnswered++;
        }
    });
    const odiMaxPossible = odiAnswered * 5;
    const odiPercent = odiMaxPossible > 0 ? Math.round((odiSum / odiMaxPossible) * 100) : 0;

    // TSK
    let tskTotal = 0;
    data.tsk.forEach(item => {
        const val = answers.tsk[item.id];
        if (val !== undefined) {
            tskTotal += item.reversed ? (5 - val) : val;
        }
    });

    return {
        had: {
            anxiety: anxietyScore,
            depression: depressionScore,
            total: anxietyScore + depressionScore,
            anxietyLevel: getHADLevel('anxiety', anxietyScore),
            depressionLevel: getHADLevel('depression', depressionScore)
        },
        odi: {
            sum: odiSum,
            maxPossible: odiMaxPossible,
            answered: odiAnswered,
            percent: odiPercent,
            level: getODILevel(odiPercent)
        },
        tsk: {
            total: tskTotal,
            elevated: tskTotal >= 37,
            level: tskTotal >= 37 ? 'elevated' : 'normal'
        }
    };
}

function getHADLevel(type, score) {
    const prefix = type === 'anxiety' ? 'had_anx_' : 'had_dep_';
    if (score <= 7) return { key: 'normal', label: t(prefix + 'normal'), desc: t(prefix + 'normal_desc'), color: 'green' };
    if (score <= 10) return { key: 'mild', label: t(prefix + 'mild'), desc: t(prefix + 'mild_desc'), color: 'orange' };
    if (score <= 14) return { key: 'moderate', label: t(prefix + 'moderate'), desc: t(prefix + 'moderate_desc'), color: 'orange' };
    return { key: 'severe', label: t(prefix + 'severe'), desc: t(prefix + 'severe_desc'), color: 'red' };
}

function getODILevel(percent) {
    if (percent <= 20) return { key: 'minimal', label: t('odi_minimal'), desc: t('odi_minimal_desc'), color: 'green' };
    if (percent <= 40) return { key: 'moderate', label: t('odi_moderate'), desc: t('odi_moderate_desc'), color: 'orange' };
    if (percent <= 60) return { key: 'severe', label: t('odi_severe'), desc: t('odi_severe_desc'), color: 'orange' };
    return { key: 'crippled', label: t('odi_crippled'), desc: t('odi_crippled_desc'), color: 'red' };
}

// ===== DASHBOARD LINK =====

function showDashboard() {
    showScreen('screen-dashboard');
    renderDashboard();
}

function printDashboard() {
    window.print();
}
