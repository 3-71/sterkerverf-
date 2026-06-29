/* ===== STERKERVERF v2 — gedeelde scripts ===== */
(function(){
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // auto-highlight current nav link
  const cur = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('#navLinks a').forEach(a => {
    if(a.getAttribute('href') === cur) a.classList.add('active');
  });

  // mobile nav
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }));
  }

  // scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold:0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
