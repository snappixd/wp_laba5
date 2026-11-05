function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory ?? 'n/a',
    screen: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (navigator.userAgentData) {
    info.uaPlatform = navigator.userAgentData.platform;
    info.uaMobile = navigator.userAgentData.mobile;
    info.uaBrands = navigator.userAgentData.brands.map(b => `${b.brand} ${b.version}`).join(', ');
  }
  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, String(value));
  }
}

function renderSystemInfo() {
  const list = document.getElementById('system-info');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.textContent = `${key}: ${localStorage.getItem(key)}`;
    list.appendChild(li);
  }
}

const VARIANT = 12;

async function loadReviews() {
  const container = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();
    comments.forEach(c => {
      const card = document.createElement('article');
      card.className = 'review-card';
      const name = document.createElement('h3');
      name.textContent = c.name;
      const email = document.createElement('p');
      email.textContent = c.email;
      const body = document.createElement('p');
      body.textContent = c.body;
      card.append(name, email, body);
      container.appendChild(card);
    });
  } catch (err) {
    container.textContent = `Не вдалося завантажити відгуки: ${err.message}`;
  }
}

function initModal() {
  const modal = document.getElementById('modal');
  if (sessionStorage.getItem('feedbackClosed')) return;
  setTimeout(() => modal.classList.remove('hidden'), 5000);
  document.getElementById('modal-close').addEventListener('click', () => {
    modal.classList.add('hidden');
    sessionStorage.setItem('feedbackClosed', '1');
  });
}

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

let currentTheme = 'light';
function applyTheme(theme) {
  currentTheme = theme;
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.getElementById('theme-toggle').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

function initTheme() {
  applyTheme(getAutoTheme());
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  saveSystemInfo();
  renderSystemInfo();
  loadReviews();
  initModal();
  initTheme();
});