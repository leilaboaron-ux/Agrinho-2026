document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const messages = [
    'Cuidando do campo com tecnologia e inovação.',
    'Respeito ao meio ambiente e compromisso social.',
    'Agricultura forte e um futuro sustentável para todos.'
  ];
  let index = 0;
  const heroText = document.querySelector('.hero-text');

  function rotateMessage() {
    heroText.classList.add('fade-out');
    setTimeout(() => {
      heroText.textContent = messages[index];
      heroText.classList.remove('fade-out');
      heroText.classList.add('fade-in');
      index = (index + 1) % messages.length;
    }, 300);

    setTimeout(() => {
      heroText.classList.remove('fade-in');
    }, 800);
  }

  setInterval(rotateMessage, 6000);
});
