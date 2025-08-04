document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribe-form');
  const input = document.getElementById('subscribe-input');
  const backdrop = document.getElementById('subscription');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // зупиняємо стандартне надсилання

    const email = input.value.trim();

    // базова перевірка email (можна замінити на більш складну)
    if (email && email.includes('@')) {
      backdrop.classList.add('is-open');
      form.reset(); // очищення поля
    } else {
      alert('Введи коректну email-адресу 📨');
    }
  });
});