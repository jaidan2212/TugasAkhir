const questions = [
  // Listening Section
  {
    section: "Listening",
    text: "What information is covered o the exam?",
    audio: "audio test ex.mp3",
    options: ["Only three chapters.", "Three chemistry books.", "Lecture notes and part of the book.", "Only class notes from the lectures."],
    correct: 2
  },
  {
    section: "Listening",
    text: "What type of questions are included on the exam?",
    audio: "audio test ex.mp3",
    options: ["Only multipe choice", "Short and long essays", "Three short essays", "Essays and multipe choice "],
    correct: 3
  },
  {
    section: "Listening",
    text: "What will the students probably do next?",
    audio: "audio test ex.mp3",
    options: ["Listen to  lecture", "Study for the exam", "Read three chapters", "Take an exam"],
    correct: 0
  },

  // Structure Section
  {
    section: "Structure",
    text: "She ______ the bus when it started to rain.",
    options: ["take", "took", "taken", "was taking"],
    correct: 3
  },
  {
    section: "Structure",
    text: "If I ______ more money, I would travel around the world.",
    options: ["have", "had", "will have", "has"],
    correct: 1
  },
  {
    section: "Structure",
    text: "This is the book ______ I told you about.",
    options: ["who", "whose", "that", "where"],
    correct: 2
  },

  // Reading Section
 {
  section: "Reading",
  passage: "Deforestation is largely caused by agricultural expansion as farmers clear land to plant crops and raise livestock.",
  text: "According to the passage, what is the main cause of deforestation?",
  options: ["Urban development", "Agricultural expansion", "Industrial waste", "Lack of rainfall"],
  correct: 1
},
{
  section: "Reading",
  passage: "Many scientists believe that renewable energy sources, such as solar and wind power, will replace fossil fuels in the near future.",
  text: "What does the author imply about renewable energy?",
  options: ["It is too expensive.", "It is the future of energy.", "It causes pollution.", "It is not yet available."],
  correct: 1
},
{
  section: "Reading",
  passage: "Water is abundant in this region, making it suitable for farming and sustaining wildlife.",
  text: "The word 'abundant' in the passage is closest in meaning to:",
  options: ["rare", "limited", "plentiful", "unknown"],
  correct: 2
}

];

let currentIndex = 0;
let score = 0;

function displayQuestion() {
  const question = questions[currentIndex];

  document.getElementById("section-title").textContent = `Section: ${question.section}`;
  document.getElementById("question-text").textContent = question.text;

  // Tampilkan passage hanya jika soal Reading
  const passageContainer = document.getElementById("passage-text");
  if (question.section === "Reading" && question.passage) {
    passageContainer.textContent = question.passage;
  } else {
    passageContainer.textContent = "";
  }

  // Audio (Listening)
  const audioContainer = document.getElementById("audio-container");
  if (question.section === "Listening" && question.audio) {
    audioContainer.innerHTML = `
      <audio controls>
        <source src="${question.audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
  } else {
    audioContainer.innerHTML = "";
  }

  // Jawaban
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.style.display = "block";
    btn.style.margin = "5px 0";
    btn.onclick = () => answerQuestion(index);
    optionsContainer.appendChild(btn);
  });
}



function answerQuestion(selectedIndex) {
  const question = questions[currentIndex];
  const isCorrect = selectedIndex === question.correct;

  alert(isCorrect ? "✅ Jawaban benar!" : `❌ Salah. Jawaban yang benar: ${question.options[question.correct]}`);

  if (isCorrect) score++;

  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  const container = document.getElementById("test-container");
  container.innerHTML = `
    <h2>Test Completed!</h2>
    <p>Skor kamu: ${score} dari ${questions.length}</p>
  `;
}

window.onload = displayQuestion;
