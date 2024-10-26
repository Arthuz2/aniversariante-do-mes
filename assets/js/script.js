document.addEventListener("DOMContentLoaded", () => {
  const birthdayList = document.getElementById("birthday-list");

  function loadBirthdays() {
    const today = new Date().toISOString().split('T')[0];

    birthdays.forEach(birthday => {
      if (birthday.date === today) {
        const listItem = document.createElement("li");
        listItem.textContent = birthday.name.toUpperCase();
        birthdayList.appendChild(listItem);
      }
    });

    scrollToBottom();
  }

  function scrollToBottom() {
    birthdayList.scrollTop = birthdayList.scrollHeight;
  }

  createConfetti();

  loadBirthdays();
});

function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 10}s`;
    confetti.style.setProperty("--confetti-color", getRandomColor());
    confettiContainer.appendChild(confetti);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
