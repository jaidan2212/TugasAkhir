const questions = [
  {
    section: "Listening",
    time: 600, 
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
    time: 600,
    questions: [
      { text: "The professor along with his students ___ at the conference yesterday.", options: ["were", "was", "have been", "are"] },
      { text: "Neither the teacher nor the students ___ able to solve the problem.", options: ["is", "was", "are", "has"] },
      { text: "Each of the books on the shelf ___ a different story.", options: ["have", "are", "has", "were"] },
      { text: "The committee ___ not yet reached a decision.", options: ["has", "have", "is", "are"] },
      { text: "If he ___ more time, he would finish the project.", options: ["has", "had", "have", "having"] },      
    ]
  },
  {
  section: "Reading",
  time: 600,
  questions: [
    {
      passage: "Once upon a time, there was a small village where people lived happily and helped each other. In the center of the village, there was a big tree that gave shade to children playing around. One day, a traveler came to the village. He was tired and hungry. The villagers welcomed him, gave him food, and let him rest under the big tree. The traveler was so touched that he promised to return and help the village someday. Years passed, and one day, a large truck came to the village. The traveler had become a rich man. He built a school and a clinic for the villagers, fulfilling his promise.",
      text: "What is the main idea of the story?",
      options: [
        "The traveler forgot about the village.",
        "The villagers were selfish and unkind.",
        "Kindness leads to good things in return.",
        "The tree was magical and gave fortune."
      ]
    },
    {

      passage: "Dina was a student who loved to read books, especially mystery novels. One day, while reading at the library, she noticed a small, dusty book with no title. Curious, she opened it and found that the story inside seemed to change every time she read it. The characters would speak differently, and the ending was never the same. Dina was fascinated and spent days trying to understand it. In the end, she realized the book reflected her own thoughts and feelings.",
      text: "Why did the story in the book seem to change every time Dina read it?",
      options: [
        "The book was broken.",
        "The library staff changed the story.",
        "The book responded to her emotions.",
        "The book was written in many languages."
      ]
    },
    {
    
      passage: "Tommy was late for school again. He had forgotten to set his alarm. As he rushed to get ready, he realized he also forgot to finish his homework. When he arrived at school, his teacher was angry, but Tommy explained what happened honestly. Surprisingly, the teacher smiled and said, 'Everyone makes mistakes. Just try to do better next time.' Tommy felt relieved and promised to be more responsible in the future.",
      text: "What lesson did Tommy learn from the incident?",
      options: [
        "It's okay to lie if you're in trouble.",
        "Being honest can lead to understanding.",
        "Homework is not important.",
        "Teachers don’t care about rules."
      ]
    },
    {

      passage: "Nina always wanted to be a doctor. Since she was a child, she loved helping others. Her parents were farmers, and they couldn’t afford expensive education, but Nina studied hard and got a scholarship to a medical school. At university, she faced many challenges, but she never gave up. After years of study, she finally became a doctor and returned to her village to open a small clinic, helping people who once helped her.",
      text: "What does the story tell us about Nina?",
      options: [
        "She gave up on her dream due to money.",
        "She wanted to be a teacher in her village.",
        "She worked hard to achieve her dream.",
        "She never liked helping people."
      ]
    },
    {

      passage: "During a school trip to the mountains, Ardi and his friends got separated from the group. They didn’t panic, but they tried to remember what the guide had told them. Using a compass and a map, they found a way back to the camp after three hours. Everyone was worried, but also proud of them for staying calm and working together.",
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

  if (currentQ.passage) {
    document.getElementById("passage-container").innerHTML = `
      <div style="background-color: #f0f8ff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
        <strong>Reading Passage:</strong><br>${currentQ.passage}
      </div>
    `;
  } else {
    document.getElementById("passage-container").innerHTML = "";
  }

  document.getElementById("question-text").textContent = currentQ.text;

  const name = 'q-${sectionIndex}-${questionIndex}';
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
