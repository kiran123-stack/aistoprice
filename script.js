/* ─────────────────────────────────────────
   ItzFizz Digital — script.js
   ───────────────────────────────────────── */

/* ── NAV SCROLL EFFECT ─────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE BURGER MENU ────────────────── */
const burger      = document.getElementById('burger');
const mobileMenu  = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  // animate spans
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  });
});

/* ── INTERSECTION OBSERVER — FADE UP ───── */
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

fadeEls.forEach(el => observer.observe(el));

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 68; // nav height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── VIDEO PLAY PLACEHOLDER ─────────────── */
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    // Replace with actual video modal or lightbox logic
    alert('Video coming soon — our workspace tour is being recorded!');
  });
}

/* ── SUBTLE PARALLAX ON HERO GRID ───────── */
const heroGrid = document.querySelector('.hero__grid');
if (heroGrid) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroGrid.style.transform = `translateY(${y * 0.15}px)`;
  }, { passive: true });
}

/* ── STATS COUNTER ANIMATION ────────────── */
function animateCounter(el, target, suffix, duration = 1400) {
  let start = null;
  const isDecimal = String(target).includes('.');
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current = eased * target;
    el.textContent = (isDecimal ? current.toFixed(0) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Observe stats section
const statsSection = document.querySelector('.about__stats');
if (statsSection) {
  const statNums = statsSection.querySelectorAll('.stat__num');
  const statsData = [
    { value: 40, suffix: '+' },
    { value: 3,  suffix: '' },
    { value: 98, suffix: '%' },
  ];

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNums.forEach((el, i) => {
          if (statsData[i]) {
            animateCounter(el, statsData[i].value, statsData[i].suffix);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsObserver.observe(statsSection);
}

/* ── CURSOR GLOW EFFECT (desktop) ───────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,241,53,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);

  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── SERVICE CARD TILT (subtle) ─────────── */
document.querySelectorAll('.service-card, .team-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => { card.style.transition = ''; }, 500);
  });
});

/* ── PROJECT CARD HOVER LINE ─────────────── */
document.querySelectorAll('.project-card').forEach(card => {
  const img = card.querySelector('.project-card__img');
  if (!img) return;
  card.addEventListener('mouseenter', () => {
    img.style.transition = 'filter 0.4s ease';
    img.style.filter = 'brightness(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    img.style.filter = '';
  });
});

/* ── MARQUEE PAUSE ON HOVER ──────────────── */
const marqueeTrack = document.querySelector('.marquee__track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

/* ── ACTIVE NAV HIGHLIGHT ────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--white)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── INIT ───────────────────────────────── */
// Trigger visible for elements already in viewport on load
window.addEventListener('load', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
