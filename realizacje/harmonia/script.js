(() => {
  const btn = document.querySelector('.nav__toggle');
  const menu = document.querySelector('#navMenu');
  if (!btn || !menu) return;

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  };

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  // Close on link click (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });
})();
