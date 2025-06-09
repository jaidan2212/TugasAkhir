function submitAnswer() {
  const options = document.getElementsByName('q1');
  let selected;
  for (let opt of options) {
    if (opt.checked) {
      selected = opt.value;
      break;
    }
  }

  if (!selected) {
    document.getElementById('result').textContent = "Please choose an answer!";
    return;
  }

  // Contoh kunci jawaban
  if (selected === "a") {
    document.getElementById('result').textContent = "✅ Correct!";
  } else {
    document.getElementById('result').textContent = "❌ Wrong. Try again.";
  }
}