/**
 * Interactive Electrical Circuit / BIM Coordinate Lattice Canvas
 * High performance, 60fps, subtle, respects prefers-reduced-motion
 * Palette: Grey (#808080) + Electric Lime (#C0FF6B) + Architectural Cyan (#6DB5CA)
 */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Particle network parameters
  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 19000), 50);
  const connectionDistance = 135;
  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    if (!canvas || !canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Safe touch listeners (passive, never blocks scroll)
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.42;
      this.vy = (Math.random() - 0.5) * 0.42;
      this.radius = Math.random() * 1.5 + 1.0;
      this.isNode = Math.random() > 0.68; // special BIM node
      this.pulse = Math.random() * Math.PI;
    }

    update() {
      this.pulse += 0.025;
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse gentle interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.3;
          this.y -= Math.sin(angle) * force * 1.3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      const currentRadius = this.isNode ? this.radius + Math.sin(this.pulse) * 0.45 : this.radius;
      ctx.arc(this.x, this.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = this.isNode ? 'rgba(192, 255, 107, 0.85)' : 'rgba(109, 181, 202, 0.65)';
      ctx.fill();

      // Glow ring on special BIM nodes
      if (this.isNode) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 2.6, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(192, 255, 107, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(109, 181, 202, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.38;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(192, 255, 107, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    if (!isReducedMotion) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    }

    drawConnections();

    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
    }

    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
})();
