/* ═══════════════════════════════════════════
   KiranDev Studio — script.js
═══════════════════════════════════════════ */

/* ── NAV SCROLL ─────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 32);
}, { passive: true });

/* ── BURGER ─────────────────────────────── */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  const [s1, s2] = burger.querySelectorAll('span');
  if (open) {
    s1.style.transform = 'translateY(6.5px) rotate(45deg)';
    s2.style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    s1.style.transform = '';
    s2.style.transform = '';
  }
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => s.style.transform = '');
  });
});

/* ── INTERSECTION OBSERVER — FADE UP ────── */
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => io.observe(el));

// Trigger on load for above-fold
window.addEventListener('load', () => {
  fadeEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

/* ── SMOOTH SCROLL ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 64,
      behavior: 'smooth'
    });
  });
});

/* ── PLAY BUTTON ────────────────────────── */
const playBtn = document.getElementById('playBtn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    playBtn.innerHTML = `
      <div class="play-circle" style="background:var(--accent);">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </div>
      <span>Video Coming Soon</span>
    `;
    setTimeout(() => {
      playBtn.innerHTML = `
        <div class="play-circle">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span>Watch Our Process</span>
      `;
    }, 2500);
  });
}

/* ── CURSOR GLOW (desktop) ───────────────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  Object.assign(glow.style, {
    position: 'fixed',
    width: '320px', height: '320px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    transition: 'left 0.12s ease, top 0.12s ease',
  });
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── CARD TILT ──────────────────────────── */
document.querySelectorAll('.proc-step, .pillar, .bento-sm').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    card.style.transition = 'transform 0.1s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});

/* ── MARQUEE PAUSE ──────────────────────── */
const track = document.querySelector('.marquee-track');
if (track) {
  track.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
  track.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
}

/* ── ACTIVE NAV SECTION HIGHLIGHT ───────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
const sio = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = '#fff';
        }
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sio.observe(s));

/* ── STATS COUNTER ──────────────────────── */
function countUp(el, target, suffix, dur = 1400) {
  let start = null;
  const run = ts => {
    if (!start) start = ts;
    const p  = Math.min((ts - start) / dur, 1);
    const ep = 1 - Math.pow(1 - p, 3);
    el.innerHTML = Math.floor(ep * target) + `<span>${suffix}</span>`;
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const nums = statsSection.querySelectorAll('.hs strong');
  const data = [{ v: 40, s: '+' }, { v: 98, s: '%' }, { v: 3, s: '' }];
  let counted = false;
  const scio = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      nums.forEach((el, i) => { if (data[i]) countUp(el, data[i].v, data[i].s); });
    }
  }, { threshold: 0.8 });
  scio.observe(statsSection);
}

/* ── BENTO FEATURED ENTRANCE ─────────────── */
const featured = document.querySelector('.bento-featured');
if (featured) {
  const laptopIo = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      featured.style.opacity = '1';
      featured.style.transform = 'translateY(0)';
      laptopIo.disconnect();
    }
  }, { threshold: 0.15 });
  featured.style.opacity = '0';
  featured.style.transform = 'translateY(40px)';
  featured.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  laptopIo.observe(featured);
}
