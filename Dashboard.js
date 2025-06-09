document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-edit form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameDisplay = document.querySelector('.profile-box p:nth-child(2)');
  const emailDisplay = document.querySelector('.profile-box p:nth-child(3)');
  const idDisplay = document.querySelector('.profile-box p:nth-child(4)');
  const dateDisplay = document.querySelector('.profile-box p:nth-child(5)');

  form.addEventListener('submit', function(e) {
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
    }

    passwordInput.value = "";
  });
});