
(() => {
  'use strict';
  const boxes = [...document.querySelectorAll('[data-lesson]')];
  const key = 'encyclopedia-html-intermediate-progress-v1';
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) { saved = []; }
  boxes.forEach(box => { box.checked = saved.includes(box.dataset.lesson); });
  function updateProgress() {
    const complete = boxes.filter(box => box.checked).map(box => box.dataset.lesson);
    document.querySelector('#progressFill').style.width = `${100 * complete.length / boxes.length}%`;
    document.querySelector('#progressText').textContent = `${complete.length} of ${boxes.length} lessons complete`;
    document.querySelector('#progressTrack').setAttribute('aria-valuenow', String(complete.length));
    try { localStorage.setItem(key, JSON.stringify(complete)); } catch (_) {}
  }
  boxes.forEach(box => box.addEventListener('change', updateProgress));
  document.querySelector('#resetProgress').addEventListener('click', () => { boxes.forEach(box => box.checked = false); updateProgress(); });
  updateProgress();
  document.querySelector('#coilDemo').addEventListener('submit', event => {
    event.preventDefault();
    const id = document.querySelector('#coilIdDemo').value.trim();
    const category = document.querySelector('#standDemo').value;
    document.querySelector('#formOutput').textContent = `Looks good! Item: ${id}; category: ${category}. Nothing was sent to a server.`;
  });
  const demoTons = [0, 1, 2, 3, 4, 5];
  let refreshIndex = 0;
  document.querySelector('#refreshDemo').addEventListener('click', () => {
    refreshIndex += 1;
    document.querySelector('#liveTons').textContent = String(refreshIndex);
    document.querySelector('#refreshMessage').textContent = 'JavaScript changed the number on this page. No server was contacted.';
  });
  const answers = {q1:'b',q2:'c',q3:'a',q4:'b',q5:'b',q6:'a',q7:'b',q8:'b',q9:'c'};
  document.querySelector('#quizForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let score = 0;
    const missing = [];
    Object.entries(answers).forEach(([q,correct]) => { if (!data.has(q)) missing.push(q.slice(1)); else if (data.get(q) === correct) score++; });
    document.querySelector('#quizResult').textContent = missing.length ? `Answer all 9 questions first (missing: ${missing.join(', ')}).` : `Score: ${score}/9 (${Math.round(score/9*100)}%). ${score === 9 ? 'Excellent — all correct.' : 'Review the lessons and try again.'}`;
  });
})();
