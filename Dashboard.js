document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-edit form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameDisplay = document.querySelector('.profile-box p:nth-child(2)');
  const emailDisplay = document.querySelector('.profile-box p:nth-child(3)');
  const idDisplay = document.querySelector('.profile-box p:nth-child(4)');
  const dateDisplay = document.querySelector('.profile-box p:nth-child(5)');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newName = nameInput.value;
    const newEmail = emailInput.value;
    const newPassword = passwordInput.value;

    nameDisplay.innerHTML = `<strong>Nama:</strong> ${newName}`;
    emailDisplay.innerHTML = `<strong>Email:</strong> ${newEmail}`;
    if (newPassword.trim() !== "") {
      const randomId = "TOEFL" + Math.floor(100000 + Math.random() * 900000);
      const today = new Date();
      const formattedDate = today.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });

      idDisplay.innerHTML = `<strong>ID Peserta:</strong> ${randomId}`;
      dateDisplay.innerHTML = `<strong>Tanggal Daftar:</strong> ${formattedDate}`;
    // ✅ SIMPAN KE LOCALSTORAGE
    localStorage.setItem("userId", randomId);
    localStorage.setItem("userDate", formattedDate);
}


    passwordInput.value = "";
  });
});

function addResultToTable(dateStr, scores) {
  const tbody = document.getElementById("test-history-body");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${dateStr}</td>
    <td>${scores.Listening.correct}</td>
    <td>${scores.Structure.correct}</td>
    <td>${scores.Reading.correct}</td>
    <td>${scores.totalScore}</td>
  `;

  tbody.appendChild(row);
}

document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("test-history-body");
  const history = JSON.parse(localStorage.getItem("testHistory")) || [];

  history.forEach(result => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.date}</td>
      <td>${result.listening}</td>
      <td>${result.structure}</td>
      <td>${result.reading}</td>
      <td>${result.total}</td>
    `;
    tbody.appendChild(row);
  });
});

function resetHistory() {
  localStorage.removeItem("testHistory");
  document.getElementById("test-history-body").innerHTML = ""; // Kosongkan tampilan tabel
  alert("Riwayat tes berhasil dihapus.");
}