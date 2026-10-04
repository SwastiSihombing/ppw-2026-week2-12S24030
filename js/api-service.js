const DATA_PATH = 'data/';
const DEMO_ORDER_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

async function getJSON(fileName) {
  const response = await fetch(`${DATA_PATH}${fileName}`);

  if (!response.ok) {
    throw new Error(`Gagal memuat ${fileName}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getProfile() {
  return getJSON('profile.json');
}

async function getProjects() {
  return getJSON('projects.json');
}

async function getServices() {
  return getJSON('services.json');
}

async function submitServiceOrder(order) {
  const response = await fetch(DEMO_ORDER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });

  if (!response.ok) {
    throw new Error(`Gagal mengirim order: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
