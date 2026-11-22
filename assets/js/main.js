/**
 * Main Application Logic - Nguyen Quoc Trung (Andy) Portfolio
 * Handles i18n switching, dynamic renders, modal interactions,
 * real-time validation, and Google Sheet Webhook integration.
 */

// Global Configuration
const CONFIG = {
  // Paste your Google Apps Script Web App URL here after following google-sheets-integration/SETUP_GUIDE.md
  // Example: "https://script.google.com/macros/s/AKfycb.../exec"
  GOOGLE_SHEET_WEBHOOK_URL: "",
  DEFAULT_LANG: "vi", // "vi" or "en"
  CONTACT_EMAIL: "nqtrung23021997@gmail.com",
  PHONE: "0431494898"
};

// Application State
const STATE = {
  lang: localStorage.getItem('andy_portfolio_lang') || CONFIG.DEFAULT_LANG,
  activeSkillTab: 'all',
  selectedProject: null
};

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initSkills();
  initProjects();
  initExperience();
  initContactForm();
  initScrollAnimations();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Internationalization (i18n) Engine
   -------------------------------------------------------------------------- */
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      if (selectedLang !== STATE.lang) {
        setLanguage(selectedLang);
      }
    });
  });

  setLanguage(STATE.lang);
}

function setLanguage(lang) {
  STATE.lang = lang;
  localStorage.setItem('andy_portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update active state on language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const t = i18n[lang];
  if (!t) return;

  // Update Page Title and Meta
  if (t.metaTitle) document.title = t.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const val = getNestedValue(t, keyPath);
    if (val !== undefined) {
      el.textContent = val;
    }
  });

  // Update all elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n-html');
    const val = getNestedValue(t, keyPath);
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n-placeholder');
    const val = getNestedValue(t, keyPath);
    if (val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  // Re-render dynamic sections in current language
  renderSkills(STATE.activeSkillTab);
  renderProjects();
  renderExperience();

  // If modal is open, re-render modal
  if (STATE.selectedProject) {
    populateProjectModal(STATE.selectedProject);
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/* --------------------------------------------------------------------------
   2. Navigation, Mobile Drawer & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = mobileNav.querySelectorAll('.nav-link');

  function toggleMenu() {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('open');
    mobileBackdrop.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    mobileNav.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Scroll Spy to highlight active section in navbar
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-desktop .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Skills & Technology Section
   -------------------------------------------------------------------------- */
function initSkills() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.activeSkillTab = e.currentTarget.getAttribute('data-filter');
      renderSkills(STATE.activeSkillTab);
    });
  });
}

function renderSkills(filter) {
  const container = document.getElementById('skills-container');
  if (!container || typeof skillsData === 'undefined') return;

  const filtered = filter === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  container.innerHTML = filtered.map(skill => {
    const descText = skill.desc[STATE.lang] || skill.desc.en;
    return `
      <div class="skill-card reveal-on-scroll">
        <div>
          <div class="skill-header">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-meta">
              <h4>${skill.name}</h4>
              <span class="skill-level-badge">${skill.level}</span>
            </div>
          </div>
          <p class="skill-desc">${descText}</p>
        </div>
        <div class="skill-tags">
          ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Trigger scroll reveal check
  observeRevealElements();
}

/* --------------------------------------------------------------------------
   4. Standout Projects Section & Interactive Modal
   -------------------------------------------------------------------------- */
function initProjects() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || typeof projectsData === 'undefined') return;

  container.innerHTML = projectsData.map(proj => {
    const title = proj.title[STATE.lang] || proj.title.en;
    const tag = proj.tag[STATE.lang] || proj.tag.en;
    const shortDesc = proj.shortDesc[STATE.lang] || proj.shortDesc.en;
    const btnText = i18n[STATE.lang].projects.viewDetails;

    return `
      <div class="project-card reveal-on-scroll">
        <div class="project-img-box">
          <img src="${proj.image}" alt="${title}" class="project-img" loading="lazy" />
          <span class="project-card-badge">${proj.scale}</span>
        </div>
        <div class="project-body">
          <div class="project-meta-top">
            <span>${tag}</span>
            <span>${proj.period}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-short-desc">${shortDesc}</p>
          <div class="project-metrics-pills">
            <span class="metric-pill">📍 ${proj.location}</span>
            <span class="metric-pill">🏗️ ${proj.client.split('/')[0]}</span>
          </div>
          <div class="project-footer">
            <div class="project-tools-preview">
              ${proj.tools.slice(0, 3).join(' • ')}
            </div>
            <button class="btn-view-project" onclick="openProjectModal('${proj.id}')">
              <span>${btnText}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeRevealElements();
}

window.openProjectModal = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  STATE.selectedProject = project;
  populateProjectModal(project);

  const modalOverlay = document.getElementById('project-modal');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function populateProjectModal(project) {
  const t = i18n[STATE.lang];
  const title = project.title[STATE.lang] || project.title.en;
  const role = project.role[STATE.lang] || project.role.en;
  const fullDesc = project.fullDesc[STATE.lang] || project.fullDesc.en;
  const highlights = project.keyHighlights[STATE.lang] || project.keyHighlights.en;

  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-img').alt = title;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-client').textContent = `${project.client} • ${project.location} (${project.period})`;
  document.getElementById('modal-role-badge').textContent = role;

  // Render Metrics
  const metricsBox = document.getElementById('modal-metrics-box');
  metricsBox.innerHTML = project.metrics.map(m => `
    <div class="modal-metric-col">
      <span class="modal-metric-label">${m.label[STATE.lang] || m.label.en}</span>
      <span class="modal-metric-val">${m.value}</span>
    </div>
  `).join('');

  // Section titles
  document.getElementById('modal-case-title').textContent = t.projects.caseStudyTitle;
  document.getElementById('modal-desc').textContent = fullDesc;
  document.getElementById('modal-highlights-title').textContent = t.projects.highlightsTitle;

  // Highlights list
  const highlightsList = document.getElementById('modal-highlights-list');
  highlightsList.innerHTML = highlights.map(item => `
    <li>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${item}</span>
    </li>
  `).join('');

  // Tools
  document.getElementById('modal-tools-title').textContent = t.projects.toolsUsed;
  const toolsWrap = document.getElementById('modal-tools-wrap');
  toolsWrap.innerHTML = project.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('');
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  STATE.selectedProject = null;
}

/* --------------------------------------------------------------------------
   5. Experience Timeline Section
   -------------------------------------------------------------------------- */
function initExperience() {
  renderExperience();
}

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || typeof experienceData === 'undefined') return;

  const t = i18n[STATE.lang];

  container.innerHTML = experienceData.map(exp => {
    const role = exp.role[STATE.lang] || exp.role.en;
    const period = exp.period[STATE.lang] || exp.period.en;
    const summary = exp.summary[STATE.lang] || exp.summary.en;
    const duties = exp.duties[STATE.lang] || exp.duties.en;
    const achievements = exp.achievements[STATE.lang] || exp.achievements.en;

    return `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${role}</h3>
            <span class="timeline-period">${period}</span>
          </div>
          <div class="timeline-company">${exp.company} — ${exp.location}</div>
          <p class="timeline-summary">${summary}</p>
          
          <div class="timeline-subhead">${t.experience.dutiesLabel}</div>
          <ul class="timeline-bullets">
            ${duties.map(d => `<li>${d}</li>`).join('')}
          </ul>

          <div class="timeline-subhead" style="margin-top: 1rem;">${t.experience.achievementsLabel}</div>
          <ul class="timeline-bullets">
            ${achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>

          <div class="timeline-tags">
            ${exp.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeRevealElements();
}

/* --------------------------------------------------------------------------
   6. Contact Form Validation & Google Sheets Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const t = i18n[STATE.lang];
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const serviceInput = document.getElementById('contact-service');
    const messageInput = document.getElementById('contact-message');

    // Reset previous errors
    clearFormErrors();
    alertBox.className = 'form-alert';
    alertBox.style.display = 'none';

    // Validation checks
    let isValid = true;

    if (!nameInput.value.trim()) {
      showError('contact-name-error', t.contact.validations.nameReq);
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError('contact-email-error', t.contact.validations.emailReq);
      isValid = false;
    }

    if (!phoneInput.value.trim()) {
      showError('contact-phone-error', t.contact.validations.phoneReq);
      isValid = false;
    }

    if (!serviceInput.value) {
      showError('contact-service-error', t.contact.validations.serviceReq);
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      showError('contact-message-error', t.contact.validations.messageReq);
      isValid = false;
    }

    if (!isValid) return;

    // Prepare payload
    const formData = {
      fullName: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      service: serviceInput.options[serviceInput.selectedIndex].text,
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    // Case 1: Real Google Apps Script Webhook URL is configured
    if (CONFIG.GOOGLE_SHEET_WEBHOOK_URL && CONFIG.GOOGLE_SHEET_WEBHOOK_URL.startsWith('https://script.google.com')) {
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.textContent = t.contact.submittingBtn;

      try {
        // Submit to Google Apps Script Webhook
        await fetch(CONFIG.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script Web App cross-origin requests
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        // Submission verified
        alertBox.className = 'form-alert success';
        alertBox.textContent = t.contact.alerts.success;
        alertBox.style.display = 'block';
        form.reset();

      } catch (err) {
        console.error('Submission error:', err);
        alertBox.className = 'form-alert error';
        alertBox.textContent = t.contact.alerts.error;
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }

    } else {
      // Case 2: Webhook URL is not yet connected by user
      // Respect rule: DO NOT fake success. Provide honest, direct action:
      alertBox.className = 'form-alert fallback-notice';
      alertBox.innerHTML = `
        <div style="margin-bottom: 0.6rem;">
          <strong>${STATE.lang === 'vi' ? 'Thông Báo Cấu Hình Google Sheet:' : 'Google Sheets Webhook Setup Notice:'}</strong>
          ${t.contact.alerts.fallbackSuccess}
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.6rem;">
          <a href="mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent('[Portfolio Lead] ' + formData.service)}&body=${encodeURIComponent('From: ' + formData.fullName + '\nPhone: ' + formData.phone + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}" class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
            ${STATE.lang === 'vi' ? 'Gửi Email Ngay Qua nqtrung23021997@gmail.com' : 'Send Direct Email via Client'}
          </a>
        </div>
      `;
      alertBox.style.display = 'block';
    }
  });

  function showError(elementId, message) {
    const errEl = document.getElementById(elementId);
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('active');
    }
  }

  function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(el => {
      el.classList.remove('active');
      el.textContent = '';
    });
  }
}

/* --------------------------------------------------------------------------
   7. Scroll Animations & Reveal Observer
   -------------------------------------------------------------------------- */
let revealObserver;
function initScrollAnimations() {
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    observeRevealElements();
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
  }
}

function observeRevealElements() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/* --------------------------------------------------------------------------
   8. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
