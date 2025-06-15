const questions = [
  {
    section: "Listening",
    time: 3600,
    questions: [
      { text: "questions 1", options: ["He knew that cherries were pricier than.", "He bought cherries and grapes because of not knowing their prices.", "He didn't know that cherries were pricier than grapes.", "He didn't buy either grapes or cherries because both were pricy."] },
      { text: "questions 2", options: ["She felt it wasn't fair.", "She was in rage.", "She felt inferior.", "She wasn't furious."] },
      { text: "questions 3", options: ["He is unhappy at the thought of retiring.", "He hates to leave his job soon.", "He is retiring too fast.", "He is eager to leave his job"] },
      { text: "questions 4", options: ["The rent was given by her for Tom.", "She was asked money for paying the rent.", "Tom gave her money for the rent.", "The money was lent by Tom early this month."] },
      { text: "questions 5", options: ["She shouldn't leave her purse here.", "She's probably in the apartment.", "Her purse must not be in the apartment.", "She left the apartment without taking her purse."] },
    ]
  },
  {
    section: "Structure",
    time: 3600,
    questions: [
      { text: "The professor along with his students ___ at the conference yesterday.", options: ["were", "was", "have been", "are"] },
      { text: "Neither the teacher nor the students ___ able to solve the problem.", options: ["is", "was", "are", "has"] },
      { text: "Each of the books on the shelf ___ a different story.", options: ["have", "are", "has", "were"] },
      { text: "The committee ___ not yet reached a decision.", options: ["has", "have", "is", "are"] },
      { text: "If he ___ more time, he would finish the project.", options: ["has", "had", "have", "having"] },
      { text: "The research paper must be submitted ___ Friday.", options: ["in", "on", "at", "by"] },
      { text: "Each of the students in the class ___ responsible for doing their own work.", options: ["are", "is", "ware", "be"] },
      { text: "It is important that he ___ to the meeting on time.", options: ["come", "comes", "came", "had come"] },
      { text: "She has not eaten anything ___ yesterday.", options: ["since", "for", "until", "by"] },
      { text: "The giant ragweed, or buffalo weed, grows ___", options: ["18 feet up to high", "to high 18 feet up", "up to 18 feet high", "18 feet high up to"] },
      { text: "Neptune is ___ any planet except Pluto.", options: ["to be far from the Sun", "far from the Sun being", "farther than the Sun is", "farther from the Sun than"] },
      { text: "Since prehistoric times, artists have arranged paint on surfaces in ways ___ their ideas about people and the world.", options: ["express", "that their expression of", "which, expressing", "that express"] },
      { text: "Except for certain microorganisms, ___need oxygen to survive.", options: ["of all living things", "all living things", "all are living things", "are all living things"] },
      { text: "Dubbing is used in filmmaking ___ a new sound track to a motion picture.", options: ["which to add", "to add", "is adding that", "to add while"] },
      { text: "The importance of the hand, and more generally of the body, in children's acquisition of arithmetic ___", options: ["can hardly be exaggerated", "can be exaggerate hardly", "hardly exaggerated can be", "exaggerated can be hardly"] },
      { text: "___ is present in the body in greater amounts than any other mineral.", options: ["Calcium", "There is calcium", "Calcium, which", "It is calcium"] },
      { text: "Mike is the only one of those students who ___ passed the exam.", options: ["have", "has", "are", "is"] },
      { text: "John, along with his friends, ___ going to the party.", options: ["are", "is", "have", "has"] },
      { text: "She ___ a letter when I came.", options: ["wrote", "was writing", "has written", "writes"] },
      { text: "If it ___, we will stay at home.", options: ["rains", "will rain", "rained", "rain"] },
      { text: "They ___ TV when the phone rang.", options: ["watched", "were watching", "are watching", "watch"] },
      { text: "Despite of ___, he managed to finish his homework on time.", options: ["tired", "tiredness", "tiring", "to tire"] },
      { text: "_, she could not answer the question.", options: ["As much as she tried", "As she much tried", "As tried she much", "As much tried she"] },
      { text: "The pie, ____ was very delicious, was made by Grandma.", options: ["which", "who", "where", "whose"] },
      { text: "The book ____ Mary was reading is very interesting.", options: ["who", "whom", "where", "that"] },
      { text: "The man ____ lives next door is very friendly.", options: ["who", "which", "where", "whom"] },
      { text: "The teacher, along with her students, ___ going to the museum.", options: ["are", "were", "is", "have been"] },
      { text: "Neither the director nor the actors ___ happy with the final scene.", options: ["was", "is", "are", "being"] },
      { text: "Each of the applicants ___ a resume with their application.", options: ["submit", "submitting", "submitted", "submits"] },
      { text: "There ___ a lot of noise in the hallway during the test.", options: ["was", "were", "are", "is"] }, 
      { text: "If he ___ earlier, he would have caught the bus.", options: ["left", "had left", "leaves", "was leaving"] }, 
      { text: "The manager demanded that the report ___ immediately.", options: ["is completed", "completes", "be completed", "will be completed"] }, 
      { text: "Not only the students but also the teacher ___ excited about the trip.", options: ["are", "were", "is", "have"] }, 
      { text: "The book ___ she borrowed from the library is very interesting.", options: ["which", "whom", "who", "what"] }, 
      { text: "By the time we arrived, the play ___.", options: ["had begun", "have begun", "begun", "begins"] }, 
      { text: "She would have passed the exam if she ___ harder.", options: ["studied", "had studied", "has studied", "would study"] },
      { text: "The committee suggested that he ___ the proposal before the meeting.", options: ["reviews", "reviewed", "review", "will review"] },
      { text: "The more you practice, ___ you will become.", options: ["the more skillful", "more skillful", "skillful", "most skillful"] },
      { text: "It was not until the lights went out ___ I realized how dark it was.", options: ["then", "that", "when", "so"] }, 
      { text: "The painting, along with the sculptures, ___ on display until next month.", options: ["is", "are", "were", "be"] }
    ]
  },
  {
    section: "Reading",
    time: 3600,
    questions: [
      {
        passage: "Once upon a time, there was a small village where people lived happily and helped each other...",
        text: "What is the main idea of the story?",
        options: [
          "The traveler forgot about the village.",
          "The villagers were selfish and unkind.",
          "Kindness leads to good things in return.",
          "The tree was magical and gave fortune."
        ]
      },
      {
        passage: "Dina was a student who loved to read books...",
        text: "Why did the story in the book seem to change every time Dina read it?",
        options: [
          "The book was broken.",
          "The library staff changed the story.",
          "The book responded to her emotions.",
          "The book was written in many languages."
        ]
      },
      {
        passage: "Tommy was late for school again...",
        text: "What lesson did Tommy learn from the incident?",
        options: [
          "It's okay to lie if you're in trouble.",
          "Being honest can lead to understanding.",
          "Homework is not important.",
          "Teachers don’t care about rules."
        ]
      },
      {
        passage: "Nina always wanted to be a doctor...",
        text: "What does the story tell us about Nina?",
        options: [
          "She gave up on her dream due to money.",
          "She wanted to be a teacher in her village.",
          "She worked hard to achieve her dream.",
          "She never liked helping people."
        ]
      },
      {
        passage: "During a school trip to the mountains...",
        text: "What is the main lesson from the story?",
        options: [
          "Getting lost in the mountains is fun.",
          "School trips are always dangerous.",
          "Friends should always bring snacks.",
          "Staying calm helps in difficult situations."
        ]
      }
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

  let passageHtml = "";
  if (currentQ.passage) {
    passageHtml = `
      <div id="passage" style="background-color: #f0f8ff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
        <strong>Reading Passage:</strong><br>${currentQ.passage}
      </div>
    `;
  }
}
function renderQuestion() {
  const currentQ = questions[sectionIndex].questions[questionIndex];

  const audioContainer = document.getElementById("audio-container");
  if (questions[sectionIndex].section === "Listening") {
    audioContainer.innerHTML = `
      <audio id="audio-question" controls>
        <source src="audio lat.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
  } else {
    audioContainer.innerHTML = ""; 
  }

  const passageContainer = document.getElementById("passage-container");
  if (currentQ.passage) {
    passageContainer.innerHTML = `
      <div style="background-color: #f0f8ff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
        <strong>Reading Passage:</strong><br>${currentQ.passage}
      </div>
    `;
  } else {
    passageContainer.innerHTML = "";
  }

  document.getElementById("question-text").textContent = currentQ.text;

  const name = `q-${sectionIndex}-${questionIndex}`;
  const optionsHtml = currentQ.options.map((opt) => {
    return `<label><input type="radio" name="${name}" value="${opt}" 
      ${userAnswers[name] === opt ? 'checked' : ''}> ${opt}</label><br>`;
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
    alert("Next Exercises: " + questions[sectionIndex + 1].section);
    startSection(sectionIndex + 1);
  } else {
    saveAnswer();
    alert("Test completed!");
    calculateScore();
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

const answerKey = {
  Listening: [
    "He didn't know that cherries were pricier than grapes.",
    "She wasn't furious.",
    "He is unhappy at the thought of retiring.",
    "Tom gave her money for the rent.",
    "She's probably in the apartment."
  ],
  Structure: [
    "was",
    "are",
    "has",
    "has",
    "had",
    "by",
    "is",
    "come",
    "since",
    "up to 18 feet high",
    "farther from the Sun than",
    "that express",
    "all living things",
    "to add",
    "has",
    "can hardly be exaggerated",
    "Calcium",
    "has",
    "is",
    "was writing",
    "rains",
    "were watching",
    "tiredness",
    "As much as she tried",
    "which",
    "that",
    "who",
    "is",          
    "are",          
    "submits",      
    "was",          
    "had left",     
    "be completed", 
    "is",           
    "which",        
    "had begun",    
    "had studied",  
    "review",       
    "the more skillful", 
    "that",        
    "is"
  ],
  Reading: [
    "Kindness leads to good things in return.",
    "The book responded to her emotions.",
    "Being honest can lead to understanding.",
    "She worked hard to achieve her dream.",
    "Staying calm helps in difficult situations."
  ]
};

function calculateScore() {
  let totalScore = 0;
  let totalQuestions = 0;
  let sectionScores = {};

  questions.forEach((section, sIndex) => {
    let correct = 0;
    section.questions.forEach((question, qIndex) => {
      const key = `q-${sIndex}-${qIndex}`;
      const userAnswer = userAnswers[key];
      const correctAnswer = answerKey[section.section][qIndex];

      if (userAnswer === correctAnswer) {
        correct++;
      }
    });

    sectionScores[section.section] = {
      correct,
      total: section.questions.length,
    };

    totalScore += correct;
    totalQuestions += section.questions.length;
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  sectionScores.totalScore = totalScore;

  const testResult = {
    date: formattedDate,
    listening: sectionScores.Listening.correct,
    structure: sectionScores.Structure.correct,
    reading: sectionScores.Reading.correct,
    total: totalScore
  };
  saveTestResult(testResult);

  document.querySelector("#main-test-content").style.display = "none";
  document.querySelector("#result-page").style.display = "block";
  document.getElementById("score-display").textContent = `Skor Anda: ${totalScore} dari ${totalQuestions}`;
}
function saveTestResult(result) {
  let history = JSON.parse(localStorage.getItem("testHistory")) || [];
  history.push(result);
  localStorage.setItem("testHistory", JSON.stringify(history));
}