import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Allow GSAP to control opacity/transform by adding class to body
document.body.classList.add('gsap-animating');

// ============================================================
// NAVIGATION
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navLinks?.classList.remove('open');
  });
});

// Active nav highlighting
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActiveNav(section.id),
    onEnterBack: () => setActiveNav(section.id),
  });
});

function setActiveNav(id) {
  navLinkEls.forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });
}

// ============================================================
// HERO ANIMATIONS
// ============================================================
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('.hero-greeting', { y: 30, opacity: 0, duration: 0.8 }, 0.2)
  .from('.hero-name', { y: 50, opacity: 0, duration: 1 }, 0.4)
  .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, 0.7)
  .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8 }, 0.9)
  .from('.hero-socials', { y: 20, opacity: 0, duration: 0.6 }, 1.0)
  .from('.hero-image', { scale: 0.85, opacity: 0, duration: 1.2, ease: 'power2.out' }, 0.3)
  .from('.hero-float-1', { x: 60, opacity: 0, duration: 0.8 }, 0.8)
  .from('.hero-float-2', { x: -60, opacity: 0, duration: 0.8 }, 1.0)
  .from('.hero-float-3', { x: 60, opacity: 0, duration: 0.8 }, 1.2)
  .from('.scroll-indicator', { opacity: 0, y: 20, duration: 0.6 }, 1.4);

// ============================================================
// SCROLL-TRIGGERED SECTION ANIMATIONS
// ============================================================
function createSectionAnim(trigger, elements) {
  const tl = gsap.timeline({ scrollTrigger: { trigger, start: 'top 70%', once: true } });
  elements.forEach(([sel, props, pos]) => tl.from(sel, props, pos));
  return tl;
}

// Data Science
createSectionAnim('#datascience', [
  ['.ds-text-block .section-label', { y: 30, opacity: 0, duration: 0.6 }, 0],
  ['.ds-heading', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3'],
  ['.ds-description', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4'],
  ['.ds-tag', { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3'],
]);

gsap.to('.ds-bg-img', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '#datascience', start: 'top bottom', end: 'bottom top', scrub: true } });

// BT
createSectionAnim('#bt', [
  ['.bt-image-frame', { x: -80, opacity: 0, duration: 1, ease: 'power2.out' }, 0],
  ['.bt-label', { y: 20, opacity: 0, duration: 0.5 }, '-=0.5'],
  ['.bt-heading', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3'],
  ['.bt-description', { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.3'],
]);

// Frisbee
createSectionAnim('#frisbee', [
  ['.frisbee-label', { y: 20, opacity: 0, duration: 0.5 }, 0],
  ['.frisbee-heading', { y: 40, opacity: 0, duration: 0.8 }, '-=0.2'],
  ['.frisbee-description', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3'],
  ['.frisbee-tag', { y: 20, opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.2'],
]);

gsap.to('.frisbee-bg-img', { yPercent: 15, ease: 'none', scrollTrigger: { trigger: '#frisbee', start: 'top bottom', end: 'bottom top', scrub: true } });

// Education
createSectionAnim('#education', [
  ['.edu-label', { y: 20, opacity: 0, duration: 0.5 }, 0],
  ['.edu-heading', { y: 30, opacity: 0, duration: 0.7 }, '-=0.2'],
  ['.edu-item', { x: -40, opacity: 0, duration: 0.7, stagger: 0.2 }, '-=0.3'],
  ['.edu-certs', { y: 30, opacity: 0, duration: 0.7 }, '-=0.2'],
]);

gsap.to('.edu-bg-img', { yPercent: 15, ease: 'none', scrollTrigger: { trigger: '#education', start: 'top bottom', end: 'bottom top', scrub: true } });

// Projects
gsap.from('.project-card', { y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#projects', start: 'top 70%', once: true } });

// Skills
gsap.from('.skill-category', { y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#skills', start: 'top 75%', once: true } });
gsap.from('.skill-badge', { scale: 0.8, opacity: 0, duration: 0.3, stagger: 0.03, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.skill-badges', start: 'top 80%', once: true } });

// Contact
createSectionAnim('#contact', [
  ['.contact-label', { y: 20, opacity: 0, duration: 0.5 }, 0],
  ['.contact-heading', { y: 30, opacity: 0, duration: 0.7 }, '-=0.2'],
  ['.contact-description', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3'],
  ['.contact-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.2'],
]);

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth' });
    }
  });
});

// ============================================================
// PROJECT MODAL SYSTEM
// ============================================================
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalType = document.getElementById('modalType');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBody = document.getElementById('modalBody');
const modalControls = document.getElementById('modalControls');
const canvas = document.getElementById('demoCanvas');
const ctx = canvas.getContext('2d');

let currentDemo = null;
let animFrame = null;

function openModal(projectId) {
  const demo = projectDemos[projectId];
  if (!demo) return;
  modalType.textContent = demo.type;
  modalTitle.textContent = demo.title;
  modalDesc.textContent = demo.desc;
  modalControls.innerHTML = demo.controls || '';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Resize canvas for retina
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = (rect.width * 0.5625) * dpr; // 16:9
  canvas.style.height = (rect.width * 0.5625) + 'px';
  ctx.scale(dpr, dpr);
  currentDemo = demo;
  setTimeout(() => demo.init(canvas, ctx, modalControls), 100);
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  if (animFrame) cancelAnimationFrame(animFrame);
  currentDemo = null;
}

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ============================================================
// HELPER DRAWING FUNCTIONS
// ============================================================
const W = () => canvas.width / (window.devicePixelRatio || 1);
const H = () => canvas.height / (window.devicePixelRatio || 1);
const CYAN = '#00e5ff';
const PURPLE = '#7c6aff';
const PINK = '#ff6b9d';
const GREEN = '#4caf50';
const GRID_COLOR = 'rgba(255,255,255,0.04)';
const AXIS_COLOR = 'rgba(255,255,255,0.15)';
const BG = '#0a0f1e';

function clearCanvas() {
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, W(), H());
}

function drawGrid(pad = 60) {
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 1;
  for (let x = pad; x < W() - 20; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, pad - 20); ctx.lineTo(x, H() - pad + 20); ctx.stroke();
  }
  for (let y = pad - 20; y < H() - pad + 20; y += 40) {
    ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W() - 20, y); ctx.stroke();
  }
}

function drawAxes(pad = 60, xLabel = 'X', yLabel = 'Y') {
  ctx.strokeStyle = AXIS_COLOR;
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(pad, pad - 20); ctx.lineTo(pad, H() - pad); ctx.lineTo(W() - 20, H() - pad); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '12px DM Sans';
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, W() / 2, H() - pad + 35);
  ctx.save();
  ctx.translate(18, H() / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
}

// ============================================================
// PROJECT DEMOS
// ============================================================
const projectDemos = {

  // --- 1. PRICE ELASTICITY SIMULATOR ---
  pricing: {
    type: 'Graduate Capstone',
    title: 'Price Elasticity Simulator',
    desc: 'Drag the price slider to see how demand shifts on a nested logit demand curve. The optimal price point (max revenue) is highlighted. Based on real econometric modeling from the Rithum capstone.',
    controls: `
      <div class="control-group"><label>Price ($):</label><input type="range" id="priceSlider" min="5" max="100" value="35" step="1"><span class="stat-box" id="priceVal">$35</span></div>
      <div class="control-group"><label>Elasticity:</label><input type="range" id="elastSlider" min="-4" max="-0.5" value="-1.8" step="0.1"><span class="stat-box" id="elastVal">-1.8</span></div>
      <span class="stat-box" id="revenueVal">Revenue: --</span>
    `,
    init(c, ctx, controls) {
      const priceSlider = controls.querySelector('#priceSlider');
      const elastSlider = controls.querySelector('#elastSlider');
      const priceVal = controls.querySelector('#priceVal');
      const elastVal = controls.querySelector('#elastVal');
      const revenueVal = controls.querySelector('#revenueVal');

      function draw() {
        const price = +priceSlider.value;
        const elast = +elastSlider.value;
        priceVal.textContent = `$${price}`;
        elastVal.textContent = elast.toFixed(1);

        clearCanvas();
        drawGrid();
        drawAxes(60, 'Price ($)', 'Quantity Demanded');

        const pad = 60, w = W() - pad - 20, h = H() - 2 * pad + 20;
        const demandAtPrice = (p) => 1000 * Math.exp(elast * (p / 50));
        const maxQ = demandAtPrice(5), minQ = demandAtPrice(100);

        // Draw demand curve
        ctx.beginPath();
        ctx.strokeStyle = CYAN;
        ctx.lineWidth = 3;
        let optPrice = 5, maxRev = 0;
        for (let p = 5; p <= 100; p++) {
          const q = demandAtPrice(p);
          const x = pad + ((p - 5) / 95) * w;
          const y = pad - 20 + (1 - (q - minQ) / (maxQ - minQ)) * h;
          if (p === 5) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          if (p * q > maxRev) { maxRev = p * q; optPrice = p; }
        }
        ctx.stroke();

        // Revenue area under price point
        ctx.fillStyle = 'rgba(0, 229, 255, 0.06)';
        ctx.beginPath();
        const qAtPrice = demandAtPrice(price);
        const px = pad + ((price - 5) / 95) * w;
        const py = pad - 20 + (1 - (qAtPrice - minQ) / (maxQ - minQ)) * h;
        ctx.moveTo(pad, H() - pad);
        ctx.lineTo(pad, py);
        ctx.lineTo(px, py);
        ctx.lineTo(px, H() - pad);
        ctx.closePath();
        ctx.fill();

        // Revenue rectangle outline
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(pad, py, px - pad, H() - pad - py);

        // Current price marker
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = CYAN;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Optimal price marker
        const oq = demandAtPrice(optPrice);
        const ox = pad + ((optPrice - 5) / 95) * w;
        const oy = pad - 20 + (1 - (oq - minQ) / (maxQ - minQ)) * h;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = GREEN;
        ctx.lineWidth = 1;
        ctx.moveTo(ox, H() - pad); ctx.lineTo(ox, oy);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px DM Sans';
        ctx.textAlign = 'left';
        ctx.fillText(`Q = ${qAtPrice.toFixed(0)}`, px + 14, py - 4);
        ctx.fillStyle = GREEN;
        ctx.font = '11px DM Sans';
        ctx.fillText(`Optimal: $${optPrice}`, ox + 8, oy - 8);

        const rev = price * qAtPrice;
        revenueVal.textContent = `Revenue: $${rev.toFixed(0)}`;
      }

      priceSlider.addEventListener('input', draw);
      elastSlider.addEventListener('input', draw);
      draw();
    }
  },

  // --- 2. GAMING ECONOMICS ANALYZER ---
  gaming: {
    type: 'Undergraduate Thesis',
    title: 'Gaming Economics Analyzer',
    desc: 'Animated comparison of loot box vs battle pass revenue models. Loot boxes exploit loss aversion with variable rewards; battle passes offer predictable value. Watch the cumulative revenue diverge over a simulated player base.',
    controls: `
      <button class="btn btn-primary" id="gamingRun">Run Simulation</button>
      <span class="stat-box" id="lootRev">Loot Box: $0</span>
      <span class="stat-box" id="passRev">Battle Pass: $0</span>
      <span class="stat-box" id="gamingMonth">Month: 0</span>
    `,
    init(c, ctx, controls) {
      const runBtn = controls.querySelector('#gamingRun');
      const lootRev = controls.querySelector('#lootRev');
      const passRev = controls.querySelector('#passRev');
      const monthEl = controls.querySelector('#gamingMonth');

      let lootData = [], passData = [], month = 0, running = false;

      function draw() {
        clearCanvas();
        drawGrid();
        drawAxes(60, 'Months', 'Cumulative Revenue ($K)');

        const pad = 60, w = W() - pad - 20, h = H() - 2 * pad + 20;
        const maxMonth = 24, maxRev = Math.max(200, ...lootData, ...passData) * 1.2;

        // Draw both lines
        function drawLine(data, color) {
          if (data.length < 2) return;
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          data.forEach((v, i) => {
            const x = pad + (i / maxMonth) * w;
            const y = pad - 20 + (1 - v / maxRev) * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.stroke();

          // Glow
          ctx.strokeStyle = color;
          ctx.lineWidth = 8;
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          data.forEach((v, i) => {
            const x = pad + (i / maxMonth) * w;
            const y = pad - 20 + (1 - v / maxRev) * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        drawLine(lootData, PINK);
        drawLine(passData, CYAN);

        // Legend
        ctx.font = 'bold 12px DM Sans';
        ctx.fillStyle = PINK; ctx.fillRect(W() - 180, 20, 12, 12);
        ctx.fillStyle = '#fff'; ctx.fillText('Loot Boxes', W() - 162, 31);
        ctx.fillStyle = CYAN; ctx.fillRect(W() - 180, 40, 12, 12);
        ctx.fillStyle = '#fff'; ctx.fillText('Battle Pass', W() - 162, 51);

        // X axis labels
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '10px DM Sans';
        ctx.textAlign = 'center';
        for (let m = 0; m <= maxMonth; m += 6) {
          ctx.fillText(m, pad + (m / maxMonth) * w, H() - pad + 18);
        }
      }

      function simulate() {
        if (month >= 24) { running = false; return; }
        month++;
        const lootSpend = (80 + Math.random() * 60) * (1 + 0.03 * month) * (Math.random() > 0.3 ? 1 : 0.2);
        const passSpend = 10 + Math.random() * 5;
        const prevLoot = lootData.length > 0 ? lootData[lootData.length - 1] : 0;
        const prevPass = passData.length > 0 ? passData[passData.length - 1] : 0;
        lootData.push(prevLoot + lootSpend);
        passData.push(prevPass + passSpend * 12);
        lootRev.textContent = `Loot Box: $${(lootData[lootData.length - 1]).toFixed(0)}K`;
        passRev.textContent = `Battle Pass: $${(passData[passData.length - 1]).toFixed(0)}K`;
        monthEl.textContent = `Month: ${month}`;
        draw();
        if (running) animFrame = requestAnimationFrame(() => setTimeout(simulate, 120));
      }

      runBtn.addEventListener('click', () => {
        lootData = [0]; passData = [0]; month = 0; running = true;
        simulate();
      });

      draw();
    }
  },

  // --- 3. PORTFOLIO TRACKER ---
  portfolio: {
    type: 'Investment Club',
    title: 'Portfolio Performance Tracker',
    desc: 'Simulated performance of the $150K Reed College S&P 100-constrained portfolio vs the benchmark index over two years. The portfolio was overweight in tech sector picks.',
    controls: `
      <button class="btn btn-primary" id="portRun">Simulate Returns</button>
      <span class="stat-box" id="portReturn">Portfolio: --</span>
      <span class="stat-box" id="benchReturn">S&P 100: --</span>
      <span class="stat-box" id="alphaVal">Alpha: --</span>
    `,
    init(c, ctx, controls) {
      const runBtn = controls.querySelector('#portRun');
      const portRet = controls.querySelector('#portReturn');
      const benchRet = controls.querySelector('#benchReturn');
      const alphaEl = controls.querySelector('#alphaVal');
      let portData = [150], benchData = [150], day = 0, running = false;

      function draw() {
        clearCanvas(); drawGrid();
        drawAxes(60, 'Trading Days', 'Portfolio Value ($K)');
        const pad = 60, w = W() - pad - 20, h = H() - 2 * pad + 20;
        const maxDay = 500;
        const allVals = [...portData, ...benchData];
        const maxVal = Math.max(...allVals) * 1.05;
        const minVal = Math.min(...allVals) * 0.95;

        function drawLine(data, color) {
          if (data.length < 2) return;
          ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2.5;
          data.forEach((v, i) => {
            const x = pad + (i / maxDay) * w;
            const y = pad - 20 + (1 - (v - minVal) / (maxVal - minVal)) * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.stroke();
        }

        // Fill area between lines
        if (portData.length > 1) {
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0, 229, 255, 0.04)';
          portData.forEach((v, i) => {
            const x = pad + (i / maxDay) * w;
            const y = pad - 20 + (1 - (v - minVal) / (maxVal - minVal)) * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          for (let i = benchData.length - 1; i >= 0; i--) {
            const x = pad + (i / maxDay) * w;
            const y = pad - 20 + (1 - (benchData[i] - minVal) / (maxVal - minVal)) * h;
            ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }

        drawLine(benchData, 'rgba(255,255,255,0.35)');
        drawLine(portData, CYAN);

        ctx.font = 'bold 12px DM Sans';
        ctx.fillStyle = CYAN; ctx.fillRect(W() - 180, 20, 12, 12);
        ctx.fillStyle = '#fff'; ctx.fillText('Portfolio', W() - 162, 31);
        ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(W() - 180, 40, 12, 12);
        ctx.fillStyle = '#fff'; ctx.fillText('S&P 100', W() - 162, 51);
      }

      function simulate() {
        if (day >= 500) { running = false; return; }
        day++;
        const benchReturn = 0.0003 + (Math.random() - 0.5) * 0.02;
        const portReturn = 0.0005 + (Math.random() - 0.5) * 0.025;
        benchData.push(benchData[benchData.length - 1] * (1 + benchReturn));
        portData.push(portData[portData.length - 1] * (1 + portReturn));

        const pRet = ((portData[portData.length - 1] - 150) / 150 * 100).toFixed(1);
        const bRet = ((benchData[benchData.length - 1] - 150) / 150 * 100).toFixed(1);
        portRet.textContent = `Portfolio: ${pRet > 0 ? '+' : ''}${pRet}%`;
        benchRet.textContent = `S&P 100: ${bRet > 0 ? '+' : ''}${bRet}%`;
        alphaEl.textContent = `Alpha: ${(pRet - bRet) > 0 ? '+' : ''}${(pRet - bRet).toFixed(1)}%`;
        draw();
        if (running) animFrame = requestAnimationFrame(() => setTimeout(simulate, 8));
      }

      runBtn.addEventListener('click', () => {
        portData = [150]; benchData = [150]; day = 0; running = true;
        simulate();
      });
      draw();
    }
  },

  // --- 4. REGRESSION PLAYGROUND ---
  regression: {
    type: 'Data Science Tool',
    title: 'Regression Playground',
    desc: 'Click anywhere on the canvas to place data points. The OLS regression line, R² value, and 95% confidence band update instantly. Right-click or press the button to clear.',
    controls: `
      <button class="btn btn-primary" id="regClear">Clear Points</button>
      <span class="stat-box" id="regR2">R² = --</span>
      <span class="stat-box" id="regEq">y = --</span>
      <span class="stat-box" id="regN">n = 0</span>
    `,
    init(c, ctx, controls) {
      const clearBtn = controls.querySelector('#regClear');
      const r2El = controls.querySelector('#regR2');
      const eqEl = controls.querySelector('#regEq');
      const nEl = controls.querySelector('#regN');
      let points = [];
      const pad = 60;

      function draw() {
        clearCanvas(); drawGrid(); drawAxes(pad, 'X', 'Y');
        const w = W() - pad - 20, h = H() - 2 * pad + 20;
        nEl.textContent = `n = ${points.length}`;

        if (points.length >= 2) {
          // OLS
          const n = points.length;
          const sumX = points.reduce((s, p) => s + p[0], 0);
          const sumY = points.reduce((s, p) => s + p[1], 0);
          const meanX = sumX / n, meanY = sumY / n;
          let ssXY = 0, ssXX = 0, ssYY = 0;
          points.forEach(([x, y]) => {
            ssXY += (x - meanX) * (y - meanY);
            ssXX += (x - meanX) ** 2;
            ssYY += (y - meanY) ** 2;
          });
          const b1 = ssXX > 0 ? ssXY / ssXX : 0;
          const b0 = meanY - b1 * meanX;
          const ssTot = ssYY;
          const ssRes = points.reduce((s, [x, y]) => s + (y - (b0 + b1 * x)) ** 2, 0);
          const r2 = ssTot > 0 ? 1 - ssRes / ssTot : 0;
          const se = Math.sqrt(ssRes / Math.max(n - 2, 1));

          r2El.textContent = `R² = ${r2.toFixed(3)}`;
          eqEl.textContent = `y = ${b1.toFixed(2)}x + ${b0.toFixed(2)}`;

          // Confidence band
          ctx.fillStyle = 'rgba(0, 229, 255, 0.06)';
          ctx.beginPath();
          for (let px = 0; px <= 1; px += 0.01) {
            const predY = b0 + b1 * px;
            const ciW = 1.96 * se * Math.sqrt(1/n + (px - meanX)**2 / Math.max(ssXX, 0.001));
            const upper = predY + ciW;
            const sx = pad + px * w;
            const sy = pad - 20 + (1 - upper) * h;
            if (px === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
          }
          for (let px = 1; px >= 0; px -= 0.01) {
            const predY = b0 + b1 * px;
            const ciW = 1.96 * se * Math.sqrt(1/n + (px - meanX)**2 / Math.max(ssXX, 0.001));
            const lower = predY - ciW;
            const sx = pad + px * w;
            const sy = pad - 20 + (1 - lower) * h;
            ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fill();

          // Regression line
          ctx.beginPath();
          ctx.strokeStyle = CYAN;
          ctx.lineWidth = 2.5;
          const y0 = b0, y1 = b0 + b1;
          ctx.moveTo(pad, pad - 20 + (1 - y0) * h);
          ctx.lineTo(pad + w, pad - 20 + (1 - y1) * h);
          ctx.stroke();
        } else {
          r2El.textContent = 'R² = --';
          eqEl.textContent = 'y = --';
        }

        // Draw points
        points.forEach(([x, y]) => {
          const sx = pad + x * w;
          const sy = pad - 20 + (1 - y) * h;
          ctx.beginPath();
          ctx.arc(sx, sy, 6, 0, Math.PI * 2);
          ctx.fillStyle = CYAN;
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      c.addEventListener('click', (e) => {
        const rect = c.getBoundingClientRect();
        const w = W() - pad - 20, h = H() - 2 * pad + 20;
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        const x = (sx - pad) / w;
        const y = 1 - (sy - (pad - 20)) / h;
        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
          points.push([x, y]);
          draw();
        }
      });

      c.addEventListener('contextmenu', (e) => { e.preventDefault(); points = []; draw(); });
      clearBtn.addEventListener('click', () => { points = []; draw(); });
      draw();
    }
  },

  // --- 5. A/B TEST CALCULATOR ---
  abtest: {
    type: 'Analytics Tool',
    title: 'A/B Test Calculator',
    desc: 'Enter visitors and conversions for control and treatment groups. See if your result is statistically significant with a live z-test, p-value, and confidence interval visualization.',
    controls: `
      <div class="control-group"><label>Control visitors:</label><input type="number" id="abNA" value="5000" min="10"></div>
      <div class="control-group"><label>Control conv:</label><input type="number" id="abCA" value="200" min="0"></div>
      <div class="control-group"><label>Treatment visitors:</label><input type="number" id="abNB" value="5000" min="10"></div>
      <div class="control-group"><label>Treatment conv:</label><input type="number" id="abCB" value="245" min="0"></div>
      <button class="btn btn-primary" id="abCalc">Calculate</button>
    `,
    init(c, ctx, controls) {
      const calcBtn = controls.querySelector('#abCalc');
      const nA = controls.querySelector('#abNA');
      const cA = controls.querySelector('#abCA');
      const nB = controls.querySelector('#abNB');
      const cB = controls.querySelector('#abCB');

      function normalCDF(z) {
        const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
        const sign = z < 0 ? -1 : 1;
        z = Math.abs(z) / Math.sqrt(2);
        const t = 1 / (1 + p * z);
        const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
        return 0.5 * (1 + sign * y);
      }

      function draw() {
        const na = +nA.value, ca = +cA.value, nb = +nB.value, cb = +cB.value;
        const pA = ca / na, pB = cb / nb;
        const se = Math.sqrt(pA * (1 - pA) / na + pB * (1 - pB) / nb);
        const z = se > 0 ? (pB - pA) / se : 0;
        const pVal = 2 * (1 - normalCDF(Math.abs(z)));
        const sig = pVal < 0.05;
        const lift = pA > 0 ? ((pB - pA) / pA * 100) : 0;
        const ciLow = (pB - pA) - 1.96 * se;
        const ciHigh = (pB - pA) + 1.96 * se;

        clearCanvas();
        const pad = 60, w = W() - 2 * pad, h = H() - 2 * pad;

        // Title
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px Syne';
        ctx.textAlign = 'center';
        ctx.fillText('A/B Test Results', W() / 2, 35);

        // Bar chart
        const barW = 120, barGap = 80;
        const maxRate = Math.max(pA, pB) * 1.3;
        const barY = pad + 30;
        const barH = h - 80;

        // Control bar
        const barAH = (pA / maxRate) * barH;
        const barAX = W() / 2 - barGap - barW;
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.roundRect(barAX, barY + barH - barAH, barW, barAH, 8);
        ctx.fill();
        ctx.fillStyle = 'rgba(124, 106, 255, 0.6)';
        ctx.beginPath();
        ctx.roundRect(barAX, barY + barH - barAH, barW, barAH, 8);
        ctx.fill();

        // Treatment bar
        const barBH = (pB / maxRate) * barH;
        const barBX = W() / 2 + barGap;
        ctx.fillStyle = sig ? 'rgba(0, 229, 255, 0.6)' : 'rgba(255, 107, 157, 0.6)';
        ctx.beginPath();
        ctx.roundRect(barBX, barY + barH - barBH, barW, barBH, 8);
        ctx.fill();

        // Labels
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px DM Sans';
        ctx.textAlign = 'center';
        ctx.fillText(`${(pA * 100).toFixed(2)}%`, barAX + barW / 2, barY + barH - barAH - 12);
        ctx.fillText(`${(pB * 100).toFixed(2)}%`, barBX + barW / 2, barY + barH - barBH - 12);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '12px DM Sans';
        ctx.fillText('Control (A)', barAX + barW / 2, barY + barH + 20);
        ctx.fillText('Treatment (B)', barBX + barW / 2, barY + barH + 20);

        // Stats panel
        const panelX = W() / 2, panelY = barY + barH + 45;
        ctx.fillStyle = sig ? CYAN : PINK;
        ctx.font = 'bold 16px Syne';
        ctx.fillText(sig ? 'STATISTICALLY SIGNIFICANT' : 'NOT SIGNIFICANT', panelX, panelY);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '12px DM Sans';
        ctx.fillText(`z = ${z.toFixed(3)}  |  p = ${pVal.toFixed(4)}  |  Lift = ${lift > 0 ? '+' : ''}${lift.toFixed(1)}%  |  95% CI: [${(ciLow*100).toFixed(2)}%, ${(ciHigh*100).toFixed(2)}%]`, panelX, panelY + 22);
      }

      calcBtn.addEventListener('click', draw);
      [nA, cA, nB, cB].forEach(el => el.addEventListener('change', draw));
      draw();
    }
  },

  // --- 6. K-MEANS CLUSTERING ---
  clustering: {
    type: 'ML Visualization',
    title: 'K-Means Clustering',
    desc: 'Click "Generate Data" to create random clusters, then "Run K-Means" to watch the algorithm iterate. Centroids move and data points re-color each step until convergence.',
    controls: `
      <div class="control-group"><label>K:</label><input type="range" id="kSlider" min="2" max="6" value="3" step="1"><span class="stat-box" id="kVal">3</span></div>
      <button class="btn btn-primary" id="kmGen">Generate Data</button>
      <button class="btn btn-outline" id="kmRun">Run K-Means</button>
      <span class="stat-box" id="kmIter">Iteration: 0</span>
    `,
    init(c, ctx, controls) {
      const kSlider = controls.querySelector('#kSlider');
      const kVal = controls.querySelector('#kVal');
      const genBtn = controls.querySelector('#kmGen');
      const runBtn = controls.querySelector('#kmRun');
      const iterEl = controls.querySelector('#kmIter');

      const colors = [CYAN, PINK, PURPLE, GREEN, '#ff9800', '#e91e63'];
      let points = [], centroids = [], assignments = [], k = 3, iter = 0, running = false;

      kSlider.addEventListener('input', () => { k = +kSlider.value; kVal.textContent = k; });

      function generateData() {
        points = [];
        const nPerCluster = 40;
        for (let i = 0; i < k; i++) {
          const cx = 0.15 + Math.random() * 0.7;
          const cy = 0.15 + Math.random() * 0.7;
          for (let j = 0; j < nPerCluster; j++) {
            points.push([cx + (Math.random() - 0.5) * 0.2, cy + (Math.random() - 0.5) * 0.2]);
          }
        }
        centroids = [];
        assignments = new Array(points.length).fill(-1);
        iter = 0;
        iterEl.textContent = 'Iteration: 0';
        draw();
      }

      function initCentroids() {
        centroids = [];
        for (let i = 0; i < k; i++) {
          centroids.push([0.15 + Math.random() * 0.7, 0.15 + Math.random() * 0.7]);
        }
      }

      function assignPoints() {
        let changed = false;
        points.forEach((p, i) => {
          let minD = Infinity, best = 0;
          centroids.forEach((c, j) => {
            const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2;
            if (d < minD) { minD = d; best = j; }
          });
          if (assignments[i] !== best) changed = true;
          assignments[i] = best;
        });
        return changed;
      }

      function updateCentroids() {
        centroids = centroids.map((_, j) => {
          const members = points.filter((_, i) => assignments[i] === j);
          if (members.length === 0) return centroids[j];
          return [
            members.reduce((s, p) => s + p[0], 0) / members.length,
            members.reduce((s, p) => s + p[1], 0) / members.length,
          ];
        });
      }

      function draw() {
        clearCanvas();
        const pad = 40, w = W() - 2 * pad, h = H() - 2 * pad;

        // Grid
        ctx.strokeStyle = GRID_COLOR;
        ctx.lineWidth = 1;
        for (let x = pad; x <= W() - pad; x += 40) { ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, H() - pad); ctx.stroke(); }
        for (let y = pad; y <= H() - pad; y += 40) { ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W() - pad, y); ctx.stroke(); }

        // Points
        points.forEach((p, i) => {
          const sx = pad + p[0] * w, sy = pad + p[1] * h;
          const color = assignments[i] >= 0 ? colors[assignments[i] % colors.length] : 'rgba(255,255,255,0.3)';
          ctx.beginPath();
          ctx.arc(sx, sy, 4, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.7;
          ctx.fill();
          ctx.globalAlpha = 1;
        });

        // Centroids
        centroids.forEach((c, j) => {
          const sx = pad + c[0] * w, sy = pad + c[1] * h;
          // Glow
          ctx.beginPath();
          ctx.arc(sx, sy, 18, 0, Math.PI * 2);
          ctx.fillStyle = colors[j % colors.length];
          ctx.globalAlpha = 0.15;
          ctx.fill();
          ctx.globalAlpha = 1;
          // Diamond marker
          ctx.beginPath();
          ctx.moveTo(sx, sy - 10);
          ctx.lineTo(sx + 8, sy);
          ctx.lineTo(sx, sy + 10);
          ctx.lineTo(sx - 8, sy);
          ctx.closePath();
          ctx.fillStyle = colors[j % colors.length];
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      function runStep() {
        if (!running) return;
        const changed = assignPoints();
        updateCentroids();
        iter++;
        iterEl.textContent = `Iteration: ${iter}`;
        draw();
        if (changed && iter < 50) {
          animFrame = requestAnimationFrame(() => setTimeout(runStep, 400));
        } else {
          running = false;
          iterEl.textContent = `Converged at ${iter}`;
        }
      }

      genBtn.addEventListener('click', generateData);
      runBtn.addEventListener('click', () => {
        if (points.length === 0) return;
        if (centroids.length === 0) initCentroids();
        running = true;
        iter = 0;
        runStep();
      });

      generateData();
    }
  },
};
