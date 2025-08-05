document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe-form");
  const modal = document.getElementById("subscription");
  const closeBtn = document.getElementById("subscription-close-btn");
  const closeBigBtn = document.querySelector(".subscription-big-btn-close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Перевірка валідності через HTML API
    if (form.checkValidity()) {
      modal.classList.add("is-open");
    } else {
      form.reportValidity();
    }
  });

  // Закриття модалки
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  closeBigBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });
});
