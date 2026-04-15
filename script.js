/* ═══════════════════════════════════════════
   KiranDev Studio — style.css
   Color: #0F172A bg · #6366F1 primary · #22C55E accent
═══════════════════════════════════════════ */

:root {
  --bg:         #0F172A;
  --bg-2:       #131d35;
  --bg-card:    rgba(255,255,255,0.03);
  --bg-card-h:  rgba(255,255,255,0.06);
  --primary:    #6366F1;
  --primary-dim: rgba(99,102,241,0.15);
  --primary-glow: rgba(99,102,241,0.3);
  --accent:     #22C55E;
  --accent-dim: rgba(34,197,94,0.15);
  --text:       #E5E7EB;
  --text-muted: #6B7280;
  --text-dim:   #9CA3AF;
  --border:     rgba(255,255,255,0.07);
  --border-h:   rgba(255,255,255,0.14);
  --font:       'Plus Jakarta Sans', sans-serif;
  --mono:       'JetBrains Mono', monospace;
  --r:          12px;
  --r-lg:       20px;
  --shadow:     0 4px 32px rgba(0,0,0,0.4);
  --shadow-lg:  0 8px 64px rgba(0,0,0,0.5);
  --ease:       cubic-bezier(0.4,0,0.2,1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-weight: 400;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
p { color: var(--text-dim); line-height: 1.75; }

/* ── LAYOUT ─────────────────────────── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.section { padding: 96px 0; }

/* ── TYPE ───────────────────────────── */
.label {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.section-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text);
}
.section-sub {
  margin-top: 16px;
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 500px;
}
.mono-sm {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-muted);
}

/* ── ANIMATIONS ─────────────────────── */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
}
.fade-up.visible { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.08s; }
.delay-2 { transition-delay: 0.16s; }
.delay-3 { transition-delay: 0.24s; }
.delay-4 { transition-delay: 0.32s; }

/* ── BUTTONS ────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s var(--ease);
  white-space: nowrap;
}
.btn-primary {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 0 var(--primary-glow);
}
.btn-primary:hover {
  background: #4f52e8;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px var(--primary-glow);
}
.btn-ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border-h);
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.05);
  transform: translateY(-2px);
}
.btn-lg { padding: 16px 32px; font-size: 15px; }

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  transition: background 0.4s ease, border-color 0.4s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(15,23,42,0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
}
.nav-logo em { color: var(--primary); font-style: normal; }
.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }
.nav-cta {
  background: var(--primary) !important;
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 13px !important;
  font-weight: 600 !important;
  transition: all 0.25s var(--ease) !important;
}
.nav-cta:hover { background: #4f52e8 !important; transform: translateY(-1px); }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(15,23,42,0.98);
  backdrop-filter: blur(20px);
  padding: 16px 24px 24px;
  border-bottom: 1px solid var(--border);
}
.mobile-menu a {
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}
.mobile-menu a:last-child { border: none; color: var(--primary); margin-top: 8px; }
.mobile-menu.open { display: flex; }

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  width: 100%;
}

/* orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.orb-1 {
  width: 500px; height: 500px;
  background: rgba(99,102,241,0.12);
  top: -100px; left: -100px;
}
.orb-2 {
  width: 400px; height: 400px;
  background: rgba(34,197,94,0.06);
  bottom: 0; right: -50px;
}
.orb-3 {
  width: 300px; height: 300px;
  background: rgba(99,102,241,0.08);
  top: 40%; right: 30%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 24px;
}
.badge-pulse {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: badgePulse 2s ease-in-out infinite;
}
@keyframes badgePulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-h1 {
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: var(--text);
  margin-bottom: 24px;
}
.h1-accent {
  background: linear-gradient(135deg, var(--primary) 0%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 460px;
  margin-bottom: 32px;
  line-height: 1.75;
}
.hero-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}
.hs strong {
  display: block;
  font-family: var(--font);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: var(--text);
  letter-spacing: -0.03em;
}
.hs strong span { color: var(--primary); }
.hs > span {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}
.hs-div {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* Browser shell */
.hero-right { position: relative; }
.browser-shell {
  border-radius: 14px;
  border: 1px solid var(--border);
  overflow: hidden;
  background: var(--bg-2);
  position: relative;
  z-index: 1;
}
.browser-bar {
  height: 40px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
}
.browser-dots { display: flex; gap: 6px; }
.bd {
  width: 10px; height: 10px;
  border-radius: 50%;
}
.bd.r { background: #ff5f57; }
.bd.y { background: #febc2e; }
.bd.g { background: #28c840; }
.browser-url {
  flex: 1;
  height: 24px;
  background: rgba(255,255,255,0.04);
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
}
.browser-body { padding: 0; }
.video-area {
  height: 280px;
  background: #0a1020;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.va-backdrop {
  position: absolute;
  inset: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  opacity: 0.4;
}
.code-lines { display: flex; flex-direction: column; gap: 10px; }
.cl {
  font-family: var(--mono);
  font-size: 13px;
  color: #4a5568;
  white-space: nowrap;
}
.ck { color: #818cf8; }
.cf { color: #34d399; }
.cc { color: #4a5568; }
.cn { color: #f59e0b; }
.play-overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  z-index: 5;
}
.play-circle {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 0 8px var(--primary-dim);
}
.play-overlay:hover .play-circle {
  transform: scale(1.08);
  box-shadow: 0 0 0 16px var(--primary-dim);
}
.play-overlay > span {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.browser-glow {
  position: absolute;
  width: 100%; height: 200px;
  background: radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 70%);
  bottom: -100px; left: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* Hero scroll */
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-scroll span {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.scroll-bar {
  width: 1px;
  height: 40px;
  background: var(--border);
  border-radius: 1px;
  overflow: hidden;
}
.scroll-fill {
  width: 100%;
  height: 40%;
  background: var(--primary);
  border-radius: 1px;
  animation: scrollFill 2.5s ease-in-out infinite;
}
@keyframes scrollFill {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(250%); }
}

/* ══════════════════════════════════════
   MARQUEE
══════════════════════════════════════ */
.marquee-strip {
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
  background: rgba(255,255,255,0.01);
}
.marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: marqueeRun 24s linear infinite;
}
.marquee-track span {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}
.marquee-track .mx { color: var(--primary); }
@keyframes marqueeRun {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ══════════════════════════════════════
   ABOUT
══════════════════════════════════════ */
.about-wrap {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 80px;
  align-items: start;
}
.photo-card {
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
}
.photo-img-wrap {
  position: relative;
  overflow: hidden;
  height: 320px;
}
.photo-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s var(--ease);
}
.photo-card:hover .photo-img-wrap img { transform: scale(1.04); }
.photo-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(34,197,94,0.06);
  border-top: 1px solid rgba(34,197,94,0.12);
}
.ps-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: badgePulse 2s ease-in-out infinite;
}
.about-meta {
  margin-top: 16px;
  border-radius: var(--r);
  border: 1px solid var(--border);
  overflow: hidden;
}
.am-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
.am-row:last-child { border: none; }
.am-row span:first-child { color: var(--text-muted); }
.am-row span:last-child { color: var(--text); font-weight: 500; }
.am-accent { color: var(--accent) !important; }

.about-text-col p {
  margin-bottom: 16px;
  font-size: 1rem;
}
.about-text-col .section-title { margin-bottom: 24px; }

.pillars { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
.pillar {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 16px 20px;
  transition: border-color 0.25s, background 0.25s;
}
.pillar:hover {
  border-color: var(--border-h);
  background: var(--bg-card-h);
}
.pi { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.pillar strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.pillar p { font-size: 13px; margin: 0; line-height: 1.6; }

/* ══════════════════════════════════════
   WORK — BENTO
══════════════════════════════════════ */
.work { background: rgba(255,255,255,0.01); }
.section-header { margin-bottom: 48px; }

.bento { display: flex; flex-direction: column; gap: 16px; }

/* ── FEATURED CARD ── */
.bento-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  min-height: 480px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.bento-featured:hover {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary), var(--shadow-lg);
}

/* laptop */
.bento-left {
  background: #080e1f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  position: relative;
}
.bento-left::after {
  content: '';
  position: absolute;
  right: 0; top: 20%; bottom: 20%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--border), transparent);
}

.laptop {
  width: 100%;
  max-width: 340px;
  perspective: 1000px;
}
.laptop-lid {
  background: #1a1f2e;
  border-radius: 10px 10px 4px 4px;
  padding: 8px;
  border: 1px solid #2a3050;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
}
.laptop-screen-bezel {
  border-radius: 6px;
  overflow: hidden;
  background: #000;
  position: relative;
}
.laptop-screen {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}
.screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s var(--ease);
}
.bento-featured:hover .screen-img { transform: scale(1.04); }
.screen-hover {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s;
}
.laptop-screen:hover .screen-hover { opacity: 1; }
.sh-btn {
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  background: var(--primary);
  color: #fff;
  border: 1px solid var(--primary);
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
}
.sh-btn:hover { background: #4f52e8; }
.sh-btn.ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border-h);
}
.sh-btn.ghost:hover { background: rgba(255,255,255,0.08); }

.laptop-hinge {
  height: 6px;
  background: linear-gradient(to bottom, #1a1f2e, #0f1525);
  border-radius: 0 0 4px 4px;
  border: 1px solid #2a3050;
  border-top: none;
}
.laptop-base-wrap {
  display: flex;
  justify-content: center;
}
.laptop-base {
  width: 90%;
  height: 18px;
  background: linear-gradient(to bottom, #1e2438, #141926);
  border-radius: 0 0 8px 8px;
  border: 1px solid #2a3050;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 4px;
}
.laptop-trackpad {
  width: 50px; height: 6px;
  background: #2a3050;
  border-radius: 3px;
}

/* right side of featured */
.bento-right { padding: 40px 40px 40px 40px; display: flex; flex-direction: column; gap: 0; }
.proj-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.proj-cat {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  background: var(--primary-dim);
  padding: 3px 10px;
  border-radius: 100px;
}
.proj-cat.tiny { font-size: 10px; padding: 2px 8px; }
.proj-badge {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.2);
  color: var(--text-muted);
}
.proj-badge.enc { background: rgba(34,197,94,0.08); border-color: rgba(34,197,94,0.2); color: var(--accent); }

.proj-title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 24px;
  line-height: 1.1;
}

/* case study blocks */
.case-study { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
.cs-block {
  padding: 14px 16px;
  border-radius: var(--r);
  border-left: 2px solid transparent;
}
.cs-block.challenge {
  background: rgba(239,68,68,0.05);
  border-left-color: rgba(239,68,68,0.4);
}
.cs-block.solution {
  background: rgba(99,102,241,0.06);
  border-left-color: var(--primary);
}
.cs-block.outcome {
  background: rgba(34,197,94,0.06);
  border-left-color: var(--accent);
}
.cs-tag {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 6px;
  color: var(--text-muted);
}
.cs-block.challenge .cs-tag { color: rgba(239,68,68,0.8); }
.cs-block.solution .cs-tag { color: var(--primary); }
.cs-block.outcome .cs-tag { color: var(--accent); }
.cs-block p {
  font-size: 13px;
  line-height: 1.65;
  margin: 0;
  color: var(--text-dim);
}
.cs-block p strong { color: var(--text); }

.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.proj-tech span {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 3px 10px;
  border-radius: 6px;
}
.proj-tech.tiny span { font-size: 10px; padding: 2px 8px; }
.proj-links { display: flex; gap: 12px; }
.pl-link {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--primary-dim);
  border: 1px solid rgba(99,102,241,0.2);
  transition: all 0.2s;
}
.pl-link:hover { background: rgba(99,102,241,0.25); transform: translateY(-1px); }
.pl-link.ghost {
  color: var(--text-muted);
  background: transparent;
  border-color: var(--border);
}
.pl-link.ghost:hover { color: var(--text); border-color: var(--border-h); }

/* ── ROW 2: two small cards ── */
.bento-row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.bento-sm {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
}
.bento-sm:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.sm-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.sm-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--ease);
}
.bento-sm:hover .sm-img img { transform: scale(1.06); }
.sm-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9,15,32,0.92);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  overflow-y: auto;
}
.bento-sm:hover .sm-overlay { opacity: 1; }
.sm-overlay h4 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text);
  margin: 4px 0 8px;
}
.sm-overlay p {
  font-size: 12px;
  line-height: 1.6;
  margin: 0 0 6px;
}
.sm-links {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.sm-links a {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-dim);
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid rgba(99,102,241,0.2);
  transition: all 0.2s;
}
.sm-links a:hover { background: rgba(99,102,241,0.25); }
.sm-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 14px 16px 8px;
}
.sm-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-top: 4px;
  line-height: 1.2;
}
.sm-stat {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: var(--primary-dim);
  color: var(--primary);
  white-space: nowrap;
}
.sm-stat.green { background: var(--accent-dim); color: var(--accent); }
.sm-stat.purple { background: rgba(139,92,246,0.15); color: #a78bfa; }

/* ── WIDE: oggy ── */
.bento-wide {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: border-color 0.3s;
}
.bento-wide:hover { border-color: var(--primary); }
.wide-img {
  position: relative;
  height: 280px;
  overflow: hidden;
}
.wide-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.4s var(--ease);
}
.bento-wide:hover .wide-img img { transform: scale(1.03); }
.wide-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9,15,32,0.94);
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}
.bento-wide:hover .wide-overlay { opacity: 1; }
.wide-left h4 {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text);
  margin: 8px 0 16px;
}
.wide-cs { display: flex; flex-direction: column; gap: 10px; }
.wcs { display: flex; flex-direction: column; gap: 4px; }
.wcs .cs-tag { font-size: 9px; }
.wcs p {
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
}
.perf-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.perf-box {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.15);
  border-radius: 10px;
  padding: 14px 20px;
  text-align: center;
  min-width: 120px;
}
.pb-num {
  display: block;
  font-family: var(--mono);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}
.pb-label {
  display: block;
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 4px;
}
.wide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px 14px;
}
.wide-footer-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* ══════════════════════════════════════
   PROCESS
══════════════════════════════════════ */
.proc-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: start;
  gap: 16px;
}
.proc-step {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 32px 24px;
  transition: border-color 0.25s, transform 0.25s;
}
.proc-step:hover {
  border-color: rgba(99,102,241,0.3);
  transform: translateY(-4px);
}
.ps-num {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--primary);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.ps-ico { font-size: 1.6rem; margin-bottom: 14px; line-height: 1; }
.proc-step h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 10px;
}
.proc-step p { font-size: 13px; line-height: 1.7; margin-bottom: 16px; }
.ps-out {
  font-size: 12px;
  color: var(--text-muted);
  padding: 8px 12px;
  background: rgba(255,255,255,0.03);
  border-radius: 6px;
  border: 1px solid var(--border);
}
.proc-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  padding-top: 48px;
  flex-shrink: 0;
}

/* ══════════════════════════════════════
   CTA
══════════════════════════════════════ */
.cta-wrap {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
.cta-orb {
  position: absolute;
  width: 600px; height: 300px;
  background: radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 70%);
  top: -100px; left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  opacity: 0.5;
}
.cta-h2 {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  margin-bottom: 16px;
}
.cta-h2 em {
  font-style: italic;
  background: linear-gradient(135deg, var(--primary), #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-p { font-size: 1rem; color: var(--text-muted); margin-bottom: 32px; }
.cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
.cta-contacts {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  font-size: 13px;
  color: var(--text-muted);
  flex-wrap: wrap;
}
.cta-contacts a { transition: color 0.2s; }
.cta-contacts a:hover { color: var(--primary); }

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
.footer {
  border-top: 1px solid var(--border);
  padding: 64px 0 32px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}
.footer-brand p {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 16px;
  max-width: 260px;
  line-height: 1.7;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-col h6 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 4px;
}
.footer-col a {
  font-size: 13px;
  color: var(--text-muted);
  transition: color 0.2s;
}
.footer-col a:hover { color: var(--primary); }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-muted);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 1100px) {
  .proc-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .proc-arrow { display: none; }
  .bento-featured { grid-template-columns: 1fr; min-height: auto; }
  .bento-left::after { display: none; }
  .bento-left { padding: 32px; }
  .bento-right { padding: 32px; }
  .laptop { max-width: 280px; }
}
@media (max-width: 900px) {
  .hero-container { grid-template-columns: 1fr; gap: 48px; padding-top: 100px; }
  .hero-right { display: none; }
  .about-wrap { grid-template-columns: 1fr; gap: 40px; }
  .about-photo-col { display: flex; flex-direction: column; max-width: 400px; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .section { padding: 64px 0; }
  .nav-links { display: none; }
  .burger { display: flex; }
  .bento-row2 { grid-template-columns: 1fr; }
  .wide-overlay { grid-template-columns: 1fr; padding: 20px; }
  .wide-right { display: none; }
  .proc-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
@media (max-width: 480px) {
  .container { padding: 0 16px; }
  .hero-btns { flex-direction: column; }
  .hero-stats { gap: 20px; }
  .cta-btns { flex-direction: column; align-items: center; }
  .footer-grid { grid-template-columns: 1fr; }
}
