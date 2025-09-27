document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('mob-menu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.querySelector('.mobile-close-btn');

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  mobileMenu.addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      mobileMenu.classList.remove('is-open');
      console.log(e.target);
    }
  });
});
