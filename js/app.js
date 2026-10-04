const state = {
  profile: null,
  projects: [],
  services: [],
  category: 'Semua',
  orders: []
};

const ORDER_STORAGE_KEY = 'portfolio-orders';

function createElement(tagName, className = '', text = '') {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function safeImageSource(url) {
  if (!url) return 'assets/profile.jpeg';
  return /^https?:\/\//i.test(url) || url.startsWith('assets/') ? url : 'assets/profile.jpeg';
}

function safeProjectLink(url) {
  if (!url || url === '#') return '#';
  return /^https?:\/\//i.test(url) ? url : '#';
}

function loadOrders() {
  try {
    const savedOrders = localStorage.getItem(ORDER_STORAGE_KEY);
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];
  } catch (error) {
    state.orders = [];
  }
}

function saveOrders() {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(state.orders));
}

function renderProfile(profile) {
  if (!profile) return;

  const nameNode = document.getElementById('profile-display-name');
  const headlineNode = document.getElementById('profile-headline');
  const summaryNode = document.getElementById('profile-summary');
  const photoNode = document.getElementById('profile-photo');

  if (nameNode) nameNode.textContent = profile.displayName || profile.name;
  if (headlineNode) headlineNode.textContent = profile.headline || '';
  if (summaryNode) summaryNode.textContent = profile.summary || '';
  if (photoNode) photoNode.src = safeImageSource(profile.photo);

  const metaList = document.getElementById('profile-meta');
  if (metaList) {
    metaList.innerHTML = '';

    const entries = [
      ['Nama', profile.name],
      ['NIM', profile.nim],
      ['Program Studi', profile.programStudi],
      ['Institusi', profile.institusi],
      ['Semester', profile.semester]
    ];

    entries.forEach(([label, value]) => {
      const item = createElement('p');
      const key = createElement('strong');
      key.textContent = label;
      const valueNode = createElement('span');
      valueNode.textContent = value || '-';
      item.append(key, valueNode);
      metaList.appendChild(item);
    });
  }

  const skillsContainer = document.getElementById('profile-skills');
  if (skillsContainer && Array.isArray(profile.skills)) {
    skillsContainer.innerHTML = '';

    profile.skills.forEach((skill) => {
      const card = createElement('article', 'skill-card h-100');
      const icon = createElement('div', 'skill-icon', skill.label || skill.name || 'SK');
      const title = createElement('h3', '', skill.name || 'Skill');
      const desc = createElement('p', '', skill.description || '');

      card.append(icon, title, desc);
      skillsContainer.appendChild(card);
    });
  }
}

function renderProjectFilters(projects) {
  const filterContainer = document.getElementById('project-filters');
  if (!filterContainer) return;

  const categories = ['Semua', ...new Set(projects.map((project) => project.category))];
  filterContainer.innerHTML = '';

  categories.forEach((category) => {
    const button = createElement('button', `btn ${state.category === category ? 'btn-primary' : 'btn-outline-light'}`);
    button.type = 'button';
    button.dataset.category = category;
    button.textContent = category;
    button.addEventListener('click', () => {
      state.category = category;
      renderProjectFilters(projects);
      renderProjectCards(projects);
    });
    filterContainer.appendChild(button);
  });
}

function renderProjectCards(projects) {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  const filteredProjects = state.category === 'Semua'
    ? projects
    : projects.filter((project) => project.category === state.category);

  grid.innerHTML = '';

  if (!filteredProjects.length) {
    const emptyState = createElement('div', 'col-12');
    emptyState.innerHTML = '<div class="content-panel"><p>Belum ada proyek untuk kategori ini.</p></div>';
    grid.appendChild(emptyState);
    return;
  }

  filteredProjects.forEach((project) => {
    const card = createElement('article', 'card project-card h-100');
    const banner = createElement('div', 'project-banner banner-blue');
    banner.innerHTML = '<i class="bi bi-building"></i><span>0' + (project.id || 1) + '</span>';

    const body = createElement('div', 'card-body');
    const badges = createElement('div', 'd-flex gap-2 mb-3');
    project.tags.forEach((tag) => {
      const badge = createElement('span', 'badge', tag);
      badges.appendChild(badge);
    });

    const title = createElement('h3', 'card-title', project.title);
    const description = createElement('p', 'card-text', project.description);
    const button = createElement('button', 'btn btn-sm btn-primary mt-auto', 'Lihat detail');
    button.type = 'button';
    button.addEventListener('click', () => {
      const modalTitle = document.getElementById('project-modal-title');
      const modalBody = document.getElementById('project-modal-body');
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalBody) {
        modalBody.innerHTML = `
          <span class="badge mb-3">${project.category}</span>
          <p>${project.description}</p>
          <ul class="custom-list">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
        `;
      }
      const modal = new bootstrap.Modal(document.getElementById('project-detail-modal'));
      modal.show();
    });

    body.append(badges, title, description, button);
    card.append(banner, body);
    grid.appendChild(card);
  });
}

function renderServices(services) {
  const servicesContainer = document.getElementById('services-list');
  if (!servicesContainer) return;

  servicesContainer.innerHTML = '';

  services.forEach((service) => {
    const item = createElement('article', 'content-panel h-100');
    const title = createElement('h3', '', service.name);
    const description = createElement('p', '', service.description);
    const rate = createElement('p', '', service.rate);
    const list = createElement('ul', 'custom-list');
    service.features.forEach((feature) => {
      const li = createElement('li', '', feature);
      list.appendChild(li);
    });

    item.append(title, description, rate, list);
    servicesContainer.appendChild(item);
  });
}

function renderOrders() {
  const orderContainer = document.getElementById('orders-list');
  if (!orderContainer) return;

  orderContainer.innerHTML = '';

  if (!state.orders.length) {
    orderContainer.innerHTML = '<p>Belum ada order tersimpan.</p>';
    return;
  }

  const latestOrders = state.orders.slice(-5).reverse();
  latestOrders.forEach((order) => {
    const row = createElement('div', 'd-flex justify-content-between align-items-center border-bottom py-2');
    const info = createElement('div');
    const nama = createElement('strong', '', order.name || 'Pelanggan');
    const layanan = createElement('div', '', order.serviceName || 'Layanan');
    const status = createElement('span', 'status-badge', order.status || 'Tersimpan');
    info.append(nama, layanan);
    row.append(info, status);
    orderContainer.appendChild(row);
  });
}

async function initialize() {
  loadOrders();
  renderOrders();

  try {
    const [profile, projects, services] = await Promise.all([
      getProfile(),
      getProjects(),
      getServices()
    ]);

    state.profile = profile;
    state.projects = projects;
    state.services = services;

    renderProfile(profile);
    renderProjectFilters(projects);
    renderProjectCards(projects);
    renderServices(services);
  } catch (error) {
    const errorNode = document.getElementById('app-error');
    if (errorNode) {
      errorNode.textContent = error.message || 'Data gagal dimuat.';
    }
  }
}

document.addEventListener('DOMContentLoaded', initialize);
