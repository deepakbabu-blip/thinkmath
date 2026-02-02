/**
 * ThinkMath — Two experiences: Quiz (with scoring) and Q&A (tutor guides, no answers).
 */

(function () {
  const homeScreen = document.getElementById('homeScreen');
  const topicScreen = document.getElementById('topicScreen');
  const quizScreen = document.getElementById('quizScreen');
  const doneScreen = document.getElementById('doneScreen');
  const qnaScreen = document.getElementById('qnaScreen');
  const topicGrid = document.getElementById('topicGrid');
  const btnBack = document.getElementById('btnBack');
  const btnContinue = document.getElementById('btnContinue');
  const btnNextHint = document.getElementById('btnNextHint');
  const btnTryAgain = document.getElementById('btnTryAgain');
  const questionText = document.getElementById('questionText');
  const answerArea = document.getElementById('answerArea');
  const hintArea = document.getElementById('hintArea');
  const hintText = document.getElementById('hintText');
  const feedbackArea = document.getElementById('feedbackArea');
  const feedbackText = document.getElementById('feedbackText');
  const progressText = document.getElementById('progressText');
  const topicBadge = document.getElementById('topicBadge');
  const quizScoreEl = document.getElementById('quizScore');
  const encouragementEl = document.getElementById('encouragement');
  const streakCountEl = document.getElementById('streakCount');
  const streakBar = document.getElementById('streakBar');
  const doneMessage = document.getElementById('doneMessage');
  const doneScoreEl = document.getElementById('doneScore');
  const btnQuizExperience = document.getElementById('btnQuizExperience');
  const btnQnAExperience = document.getElementById('btnQnAExperience');
  const btnQnaBack = document.getElementById('btnQnaBack');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const btnSend = document.getElementById('btnSend');

  const ENCOURAGEMENTS = [
    "You're doing great—thinking it through is exactly how you learn.",
    "Using hints when you need them is what strong mathematicians do. Keep going!",
    "No rush at all. If you're stuck, try the next hint—I'm here to help.",
    "Your reasoning matters more than one 'right' path. Trust your thinking.",
    "Take your time. Understanding beats speed every time.",
    "Every attempt is a step forward. You've got this.",
  ];

  let state = {
    topicId: null,
    problemIndex: 0,
    hintIndex: 0,
    hintsUsedThisProblem: 0,
    totalHintsUsed: 0,
    questionsSeen: 0,
    score: 0,
    totalScored: 0, // only multiple choice count toward score
    qnaMessages: [], // conversation for LLM tutor
  };

  const ALL_SCREENS = [homeScreen, topicScreen, quizScreen, doneScreen, qnaScreen];

  function showScreen(screen) {
    ALL_SCREENS.forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
    if (screen === quizScreen || screen === topicScreen) {
      streakBar.style.display = '';
    } else {
      streakBar.style.display = 'none';
    }
  }

  function pickEncouragement() {
    return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
  }

  // ---- Home ----
  function initHome() {
    btnQuizExperience.addEventListener('click', () => {
      showScreen(topicScreen);
    });
    btnQnAExperience.addEventListener('click', () => {
      showScreen(qnaScreen);
      chatMessages.innerHTML = '';
      state.qnaMessages = [];
      state.sessionEnded = false;
      chatInput.disabled = false;
      btnSend.disabled = false;
      const sessionBanner = document.getElementById('qnaSessionBanner');
      if (sessionBanner) sessionBanner.remove();
      const welcome = document.createElement('div');
      welcome.className = 'msg msg-tutor';
      welcome.innerHTML = '<p>Hi! I\'m here to help you think through your math—not to give answers, but to guide you with hints and questions. What would you like to work on?</p>';
      chatMessages.appendChild(welcome);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  // ---- Topic selection (Quiz) ----
  function renderTopics() {
    topicGrid.innerHTML = '';
    Object.values(MATH_TOPICS).forEach(topic => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'topic-card';
      card.setAttribute('data-topic-id', topic.id);
      card.innerHTML = `
        <span class="topic-name">${topic.name}</span>
        <span class="topic-level">${topic.level}</span>
        <span class="topic-desc">${topic.description}</span>
      `;
      card.addEventListener('click', () => startQuiz(topic.id));
      topicGrid.appendChild(card);
    });
  }

  // ---- Quiz with scoring ----
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startQuiz(topicId) {
    const topic = MATH_TOPICS[topicId];
    if (!topic || !topic.problems.length) return;
    state.topicId = topicId;
    state.sessionProblems = shuffle([...topic.problems]);
    state.problemIndex = 0;
    state.hintIndex = 0;
    state.hintsUsedThisProblem = 0;
    state.totalHintsUsed = 0;
    state.questionsSeen = 0;
    state.score = 0;
    state.totalScored = 0;
    topicBadge.textContent = topic.name;
    updateQuizScoreDisplay();
    showScreen(quizScreen);
    showProblem();
    encouragementEl.textContent = pickEncouragement();
  }

  function getCurrentProblem() {
    if (!state.sessionProblems) return null;
    return state.sessionProblems[state.problemIndex] || null;
  }

  function updateQuizScoreDisplay() {
    quizScoreEl.textContent = `Score: ${state.score} / ${state.totalScored}`;
  }

  function showProblem() {
    const problem = getCurrentProblem();
    if (!problem) {
      finishSession();
      return;
    }

    state.hintIndex = 0;
    state.hintsUsedThisProblem = 0;
    state.questionsSeen += 1;
    streakCountEl.textContent = state.questionsSeen;

    const total = state.sessionProblems.length;
    progressText.textContent = `Question ${state.problemIndex + 1} of ${total}`;
    updateQuizScoreDisplay();

    questionText.textContent = problem.question;
    hintArea.classList.add('hidden');
    feedbackArea.classList.add('hidden');
    answerArea.innerHTML = '';

    if (problem.type === 'multiple_choice' && problem.choices) {
      state.totalScored += 1;
      updateQuizScoreDisplay();
      problem.choices.forEach((choice, i) => {
        const label = document.createElement('label');
        label.className = 'choice-label';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = String(i);
        const span = document.createElement('span');
        span.className = 'choice-text';
        span.textContent = choice;
        label.appendChild(radio);
        label.appendChild(span);
        answerArea.appendChild(label);
      });
      const hintBtn = document.createElement('button');
      hintBtn.type = 'button';
      hintBtn.className = 'btn-hint first-hint';
      hintBtn.textContent = 'I need a hint';
      hintBtn.addEventListener('click', showFirstHint);
      answerArea.appendChild(hintBtn);
      const checkBtn = document.createElement('button');
      checkBtn.type = 'button';
      checkBtn.className = 'btn-continue';
      checkBtn.textContent = 'Check my answer';
      checkBtn.addEventListener('click', submitQuizAnswer);
      answerArea.appendChild(checkBtn);
    } else {
      const hintBtn = document.createElement('button');
      hintBtn.type = 'button';
      hintBtn.className = 'btn-hint first-hint';
      hintBtn.textContent = 'I need a hint';
      hintBtn.addEventListener('click', showFirstHint);
      answerArea.appendChild(hintBtn);
      const continueBtn = document.createElement('button');
      continueBtn.type = 'button';
      continueBtn.className = 'btn-continue';
      continueBtn.textContent = "I've thought about it — next question";
      continueBtn.addEventListener('click', nextProblem);
      answerArea.appendChild(continueBtn);
    }
  }

  function submitQuizAnswer() {
    const problem = getCurrentProblem();
    if (!problem || problem.type !== 'multiple_choice' || problem.correctChoiceIndex === undefined) return;
    const selected = document.querySelector('input[name="answer"]:checked');
    const selectedIndex = selected ? parseInt(selected.value, 10) : -1;
    const correct = selectedIndex === problem.correctChoiceIndex;

    if (correct) {
      state.score += 1;
      updateQuizScoreDisplay();
      feedbackText.textContent = "That's the idea! Nice work—you've got it.";
      feedbackArea.classList.remove('hidden');
      answerArea.querySelectorAll('input').forEach(i => { i.disabled = true; });
      const checkBtn = answerArea.querySelector('.btn-continue');
      if (checkBtn) {
        checkBtn.textContent = 'Next question';
        checkBtn.onclick = nextProblem;
      }
    } else {
      feedbackText.textContent = "Not quite—try another option! You can pick a different answer and check again.";
      feedbackArea.classList.remove('hidden');
      // Keep choices enabled so they can try again; don't change the button
    }
    encouragementEl.textContent = pickEncouragement();
  }

  function showFirstHint() {
    hintArea.classList.remove('hidden');
    hintText.textContent = '';
    state.hintIndex = 0;
    showNextHint();
    const firstBtn = answerArea.querySelector('.first-hint');
    if (firstBtn) firstBtn.remove();
  }

  function showNextHint() {
    const problem = getCurrentProblem();
    if (!problem || !problem.hints || !problem.hints.length) return;
    if (state.hintIndex >= problem.hints.length) {
      hintText.textContent = "You've seen all the hints for this one. Use them to guide your reasoning—then move on when you're ready. You're doing great!";
      btnNextHint.textContent = 'Done with hints';
      btnNextHint.onclick = () => { hintArea.classList.add('hidden'); };
      return;
    }
    hintText.textContent = problem.hints[state.hintIndex];
    state.hintIndex += 1;
    state.hintsUsedThisProblem += 1;
    state.totalHintsUsed += 1;
    if (state.hintIndex >= problem.hints.length) {
      btnNextHint.textContent = "That's all the hints — use them and then go to next";
      btnNextHint.onclick = () => {
        hintArea.classList.add('hidden');
        if (problem.type === 'multiple_choice') {
          const checkBtn = answerArea.querySelector('.btn-continue');
          if (checkBtn && checkBtn.textContent === 'Check my answer') {
            // They didn't check yet; we don't auto-show feedback, just hide hints
          }
        } else {
          showFeedback();
        }
      };
    } else {
      btnNextHint.textContent = 'I need another nudge';
      btnNextHint.onclick = showNextHint;
    }
    encouragementEl.textContent = pickEncouragement();
  }

  function showFeedback() {
    const problem = getCurrentProblem();
    const used = state.hintsUsedThisProblem;
    let message = used === 0
      ? "You thought it through—nice! Ready for the next one when you are."
      : `You used ${used} hint${used === 1 ? '' : 's'} when you needed them. That's exactly how mathematicians work. Ready for the next?`;
    feedbackText.textContent = message;
    feedbackArea.classList.remove('hidden');
    btnContinue.onclick = nextProblem;
  }

  function nextProblem() {
    state.problemIndex += 1;
    if (state.problemIndex >= state.sessionProblems.length) {
      finishSession();
      return;
    }
    showProblem();
    encouragementEl.textContent = pickEncouragement();
  }

  function finishSession() {
    const topic = MATH_TOPICS[state.topicId];
    const total = state.sessionProblems.length;
    let msg = `You worked through ${total} question${total === 1 ? '' : 's'} in ${topic.name}. `;
    if (state.totalHintsUsed > 0) {
      msg += `Using hints when you need them is great practice—well done. `;
    }
    msg += "Come back anytime you'd like to practice more.";
    doneMessage.textContent = msg;
    if (state.totalScored > 0) {
      doneScoreEl.textContent = `Score: ${state.score} out of ${state.totalScored} scored questions.`;
      doneScoreEl.style.display = '';
    } else {
      doneScoreEl.style.display = 'none';
    }
    showScreen(doneScreen);
  }

  // ---- Q&A tutor (LLM-powered, guiding only, no answers) ----
  const API_BASE = window.MATH_TUTOR_API || '';

  function appendMessage(role, text, isPlaceholder) {
    const div = document.createElement('div');
    div.className = role === 'user' ? 'msg msg-user' : 'msg msg-tutor';
    if (isPlaceholder) div.classList.add('msg-loading');
    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  function removeMessage(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  async function sendQnaMessage() {
    if (state.sessionEnded) return;
    const text = (chatInput.value || '').trim();
    if (!text) return;
    chatInput.value = '';
    appendMessage('user', text);
    state.qnaMessages = state.qnaMessages || [];
    state.qnaMessages.push({ role: 'user', content: text });

    const loadingEl = appendMessage('tutor', 'Thinking…', true);

    try {
      const res = await fetch(API_BASE + '/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: state.qnaMessages }),
      });
      const data = await res.json().catch(() => ({}));

      removeMessage(loadingEl);

      if (!res.ok) {
        const msg = data.message || data.error || 'The tutor is unavailable.';
        appendMessage('tutor', 'Sorry—' + msg + (res.status === 503 ? ' Set GROQ_API_KEY in .env and restart the server (see README).' : ''));
        state.qnaMessages.pop();
        return;
      }

      const reply = (data.reply || '').trim() || "I'm not sure how to respond—try asking in another way.";
      state.qnaMessages.push({ role: 'assistant', content: reply });
      appendMessage('tutor', reply);

      if (data.sessionEnded) {
        state.sessionEnded = true;
        chatInput.disabled = true;
        btnSend.disabled = true;
        chatInput.placeholder = 'This session has ended.';
        const banner = document.createElement('div');
        banner.id = 'qnaSessionBanner';
        banner.className = 'qna-session-banner';
        banner.setAttribute('role', 'alert');
        banner.textContent = 'This session has ended. Go back to start a new one when you\'re ready.';
        const wrap = chatMessages.parentNode && chatMessages.parentNode.querySelector('.chat-input-wrap');
        if (wrap) chatMessages.parentNode.insertBefore(banner, wrap);
        else chatMessages.parentNode.appendChild(banner);
      }
    } catch (err) {
      removeMessage(loadingEl);
      appendMessage('tutor', "Couldn't reach the tutor. Make sure the server is running (npm start) and GROQ_API_KEY is set in .env.");
      state.qnaMessages.pop();
    }
  }

  // ---- Init ----
  function init() {
    renderTopics();
    initHome();
    btnBack.addEventListener('click', () => showScreen(topicScreen));
    btnTryAgain.addEventListener('click', () => showScreen(topicScreen));
    btnQnaBack.addEventListener('click', () => showScreen(homeScreen));
    document.getElementById('btnTopicBack').addEventListener('click', () => showScreen(homeScreen));
    btnSend.addEventListener('click', sendQnaMessage);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendQnaMessage();
      }
    });
    showScreen(homeScreen);
  }

  init();
})();
