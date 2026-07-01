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

  // WhatsApp zweefknop (op elke pagina). Vooringevuld bericht = invulsjabloon dat meteen de vragen stelt.
  const waMsg = encodeURIComponent(
    'Hallo SterkerVerf! Ik heb interesse in schilderwerk.\n\n' +
    'Wat ik wil laten doen: \n' +
    'Plaats: \n' +
    'Gewenste periode: '
  );
  const wa = document.createElement('a');
  wa.className = 'wa-fab';
  wa.href = 'https://wa.me/31687979346?text=' + waMsg;
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Stel uw vraag via WhatsApp');
  wa.innerHTML =
    '<span class="wa-ic"><svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>' +
    '</svg></span><span class="wa-txt">Stel uw vraag</span>';
  document.body.appendChild(wa);
})();
