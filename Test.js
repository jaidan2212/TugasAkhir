const questions = [
  {
    section: "Listening",
    time: 1800, 
    questions: [
      { text: "questions 1", options: ["He knew that cherries were pricier than.", "He bought cherries and grapes because of not knowing their prices.", "He didn't know that cherries were pricier than grapes.", "He didn't buy either grapes or cherries because both were pricy."] },
      { text: "questions 2", options: ["She felt it wasn't fair.", "She was in rage.", "She felt inferior.", "She wasn't furious."] },
      { text: "questions 3", options: ["He is unhappy at the thought of retiring.", "He hates to leave his job soon.", "He is retiring too fast.", "He is eager to leave his job"] },
      { text: "questions 4", options: ["The rent was given by her for Tom.", "She was asked money for paying the rent.", "Tom gave her money for the rent.", "The money was lent by Tom early this month."] },
      { text: "questions 5", options: ["She shouldn't leave her purse here.", "She's probably in the apartment.", "Her purse must not be in the apartment.", "She left the apartment without taking her purse."] },
    ]
  },
  {
    section: "Structure",
    time: 900,
    questions: [
      { text: "She _____ to the store before it closed.", options: ["go", "gone", "went", "going"] },
      { text: "If I _____ you, I would study more.", options: ["am", "was", "were", "be"] },
    ]
  }
];

let sectionIndex = 0;
let questionIndex = 0;
let userAnswers = {};
let timer;

function startSection(index) {
  clearInterval(timer);
  sectionIndex = index;
  questionIndex = 0;
  renderQuestion();
  startTimer(questions[sectionIndex].time);
  document.getElementById("section-title").textContent = "Section: " + questions[sectionIndex].section;
}

function renderQuestion() {
  const currentQ = questions[sectionIndex].questions[questionIndex];
  document.getElementById("question-text").textContent = currentQ.text;
  const optionsHtml = currentQ.options.map((opt, idx) => {
    const name = `q-${sectionIndex}-${questionIndex}`;
    return `<label><input type="radio" name="${name}" value="${opt}" 
      ${userAnswers[name] === opt ? 'checked' : ''}> ${opt}</label>`;
  }).join("");
  document.getElementById("options-container").innerHTML = optionsHtml;
}

function saveAnswer() {
  const name = `q-${sectionIndex}-${questionIndex}`;
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  if (selected) {
    userAnswers[name] = selected.value;
  }
}

function nextQuestion() {
  saveAnswer();
  if (questionIndex < questions[sectionIndex].questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else if (sectionIndex < questions.length - 1) {
    alert("Next Section: " + questions[sectionIndex + 1].section);
    startSection(sectionIndex + 1);
  } else {
    alert("Test completed!");
    console.log(userAnswers);
  }
}

function prevQuestion() {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
}

function startTimer(seconds) {
  const display = document.getElementById("time");
  let timeLeft = seconds;

  timer = setInterval(() => {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    display.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Waktu habis untuk section ini.");
      nextQuestion(); 
    }
  }, 1000);
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("prev-btn").addEventListener("click", prevQuestion);

startSection(0); 
