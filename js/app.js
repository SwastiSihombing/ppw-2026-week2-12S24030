import { ApiService } from "./api-service.js";

const ORDER_STORAGE_KEY = "swasti-portfolio-orders";
const state = {
    profile: null,
    projects: [],
    services: [],
    category: "Semua",
    orders: loadOrders()
};

function createElement(tagName, className = "", text = "") {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

function safeImageSource(value) {
    try {
        const url = new URL(value, document.baseURI);
        if (url.protocol === "https:" || url.origin === window.location.origin) return url.href;
    } catch (error) {
        console.warn("Sumber gambar proyek tidak valid.", error);
    }
    return "";
}

function safeProjectLink(value) {
    if (typeof value === "string" && value.startsWith("#")) return value;
    try {
        const url = new URL(value, document.baseURI);
        if (url.protocol === "https:" || (url.protocol === "http:" && url.origin === window.location.origin)) {
            return url.href;
        }
    } catch (error) {
        console.warn("Tautan proyek tidak valid.", error);
    }
    return "#portfolio";
}

function showLoading(container, message = "Memuat data...") {
    container.replaceChildren();
    container.dataset.state = "loading";

    const wrapper = createElement("div", "loading-state");
    wrapper.setAttribute("role", "status");
    const spinner = createElement("span", "spinner-border spinner-border-sm");
    spinner.setAttribute("aria-hidden", "true");
    wrapper.append(spinner, createElement("span", "", message));
    container.append(wrapper);
}

function showMessage(container, message, type = "warning") {
    container.replaceChildren();
    container.dataset.state = type === "warning" ? "error" : "empty";
    const alert = createElement("div", `alert alert-${type}`, message);
    alert.setAttribute("role", type === "warning" ? "alert" : "status");
    container.append(alert);
}

function loadOrders() {
    try {
        const savedOrders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");
        return Array.isArray(savedOrders) ? savedOrders : [];
    } catch (error) {
        console.error("Riwayat order tidak dapat dibaca:", error);
        return [];
    }
}

function saveOrders() {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(state.orders));
}

function renderProfile() {
    const { profile } = state;
    document.getElementById("profile-display-name").textContent = profile.displayName;
    document.getElementById("profile-headline").textContent = profile.headline;
    document.getElementById("profile-summary").textContent = profile.summary;

    const photo = document.getElementById("profile-photo");
    photo.src = profile.photo;
    photo.alt = `Foto profil ${profile.displayName}`;

    const academic = document.getElementById("profile-academic");
    academic.replaceChildren(createElement("h3", "", "Profil Akademik"));
    const details = [
        ["Nama", profile.name],
        ["NIM", profile.nim],
        ["Program Studi", profile.programStudy],
        ["Institusi", profile.institution],
        ["Semester", String(profile.semester)]
    ];
    const detailList = createElement("div", "profile-information");
    details.forEach(([label, value]) => {
        const paragraph = createElement("p");
        const strong = createElement("strong", "", `${label}: `);
        paragraph.append(strong, document.createTextNode(value));
        detailList.append(paragraph);
    });
    academic.append(detailList);

    const biography = document.getElementById("profile-biography");
    biography.replaceChildren(createElement("h3", "", "Tentang Saya"));
    profile.biography.forEach((paragraph) => {
        biography.append(createElement("p", "", paragraph));
    });

    const skills = document.getElementById("skills-grid");
    skills.replaceChildren();
    profile.skills.forEach((skill) => {
        const card = createElement("article", "skill-card");
        card.append(
            createElement("div", "skill-icon", skill.label),
            createElement("h3", "", skill.name),
            createElement("p", "", skill.description)
        );
        skills.append(card);
    });
    skills.dataset.state = "success";

    const technologyList = document.getElementById("technology-list");
    technologyList.replaceChildren();
    profile.learningTopics.forEach((topic) => {
        technologyList.append(createElement("li", "", topic));
    });
}

function renderProjectFilters() {
    const container = document.getElementById("project-filters");
    container.replaceChildren();
    const categories = ["Semua", ...new Set(state.projects.map((project) => project.category))];

    categories.forEach((category) => {
        const button = createElement("button", "filter-button", category);
        button.type = "button";
        button.dataset.category = category;
        button.setAttribute("aria-pressed", String(category === state.category));
        container.append(button);
    });
}

function renderProjectCards() {
    const container = document.getElementById("project-cards");
    const visibleProjects = state.category === "Semua"
        ? state.projects
        : state.projects.filter((project) => project.category === state.category);

    container.replaceChildren();
    if (visibleProjects.length === 0) {
        showMessage(container, "Tidak ada proyek untuk kategori ini.", "info");
        return;
    }

    visibleProjects.forEach((project, index) => {
        const card = createElement("article", "project-card");
        const image = createElement("img", "project-image");
        const imageSource = safeImageSource(project.image);
        if (imageSource) image.src = imageSource;
        else image.hidden = true;
        image.alt = `Ilustrasi ${project.title}`;
        image.loading = "lazy";

        const number = createElement("span", "project-number", String(index + 1).padStart(2, "0"));
        const title = createElement("h3", "", project.title);
        const description = createElement("p", "", project.description);
        const tags = createElement("div", "project-tags");
        project.tags.forEach((tag) => tags.append(createElement("span", "", tag)));

        const detailsButton = createElement("button", "btn btn-primary project-detail-button", "Lihat detail");
        detailsButton.type = "button";
        detailsButton.dataset.projectId = project.id;
        detailsButton.setAttribute("aria-label", `Lihat detail ${project.title}`);

        card.append(image, number, title, description, tags, detailsButton);
        container.append(card);
    });
    container.dataset.state = "success";
}

function renderProjectTable() {
    const tableBody = document.getElementById("project-table-body");
    tableBody.replaceChildren();

    state.projects.forEach((project, index) => {
        const row = document.createElement("tr");
        row.append(
            createElement("th", "", String(index + 1)),
            createElement("td", "", project.title),
            createElement("td", "", project.tags.join(", ")),
            createElement("td", "", project.description),
            createElement("td", "", project.status)
        );
        tableBody.append(row);
    });

    document.getElementById("project-total").textContent = `Total proyek yang ditampilkan: ${state.projects.length}`;
}

function renderServices() {
    const container = document.getElementById("service-list");
    container.replaceChildren();

    state.services.forEach((service) => {
        const card = createElement("article", "service-card");
        card.append(
            createElement("h3", "", service.name),
            createElement("p", "", service.description),
            createElement("p", "service-rate", service.rate)
        );
        const features = createElement("ul", "service-features");
        service.features.forEach((feature) => features.append(createElement("li", "", feature)));
        card.append(features);
        container.append(card);
    });
    container.dataset.state = "success";

    const serviceSelect = document.getElementById("layanan");
    serviceSelect.replaceChildren(new Option("-- Pilih jenis layanan --", ""));
    state.services.forEach((service) => {
        serviceSelect.add(new Option(service.name, service.id));
    });
}

function renderProjectModal(project) {
    const modal = document.getElementById("universalProjectModal");
    document.getElementById("projectModalTitle").textContent = project.title;
    const body = document.getElementById("projectModalBody");
    body.replaceChildren();

    const image = createElement("img", "img-fluid rounded project-modal-image");
    const imageSource = safeImageSource(project.image);
    if (imageSource) image.src = imageSource;
    else image.hidden = true;
    image.alt = `Ilustrasi ${project.title}`;
    image.loading = "lazy";

    const description = createElement("p", "text-secondary", project.description);
    const category = createElement("span", "project-category", project.category);
    const metrics = createElement("dl", "project-metrics");
    project.metrics.forEach((metric) => {
        metrics.append(
            createElement("dt", "", metric.label),
            createElement("dd", "", metric.value)
        );
    });

    const tags = createElement("div", "project-tags");
    project.tags.forEach((tag) => tags.append(createElement("span", "", tag)));
    const projectLink = createElement("a", "btn btn-primary", "Lihat proyek");
    projectLink.href = safeProjectLink(project.link);
    if (/^https:\/\//i.test(projectLink.href)) {
        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";
    }

    const projectAction = /^https:\/\//i.test(projectLink.href)
        ? projectLink
        : createElement("p", "text-secondary", "Tautan eksternal proyek belum tersedia.");
    body.append(image, description, category, metrics, tags, projectAction);
    window.bootstrap.Modal.getOrCreateInstance(modal).show();
}

function renderOrders() {
    document.getElementById("order-count").textContent = String(state.orders.length);
    const list = document.getElementById("order-history-list");
    list.replaceChildren();

    if (state.orders.length === 0) {
        list.append(createElement("li", "", "Belum ada order tersimpan."));
        return;
    }

    state.orders.slice(0, 5).forEach((order) => {
        const service = state.services.find((item) => item.id === order.layanan);
        const serviceName = service ? service.name : order.layanan;
        const status = order.deliveryStatus || "Tersimpan di perangkat";
        list.append(createElement("li", "", `${order.nama} - ${serviceName} (${status})`));
    });
}

function showToast(title, message, type = "success") {
    const toastElement = document.getElementById("orderToast");
    const titleElement = document.getElementById("orderToastTitle");
    const messageElement = document.getElementById("orderToastMessage");
    titleElement.textContent = title;
    messageElement.textContent = message;
    toastElement.classList.toggle("toast-warning", type === "warning");

    if (window.bootstrap?.Toast) {
        window.bootstrap.Toast.getOrCreateInstance(toastElement).show();
    } else {
        console.warn("Bootstrap Toast tidak tersedia.", message);
    }
}

function handleFilterClick(event) {
    const button = event.target.closest("button[data-category]");
    if (!button) return;

    state.category = button.dataset.category;
    renderProjectFilters();
    renderProjectCards();
}

async function handleOrderSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector("button[type='submit']");
    const originalLabel = submitButton.textContent.trim();
    submitButton.disabled = true;
    submitButton.replaceChildren(
        createElement("span", "spinner-border spinner-border-sm"),
        document.createTextNode(" Mengirim...")
    );

    const formData = new FormData(form);
    const order = {
        ...Object.fromEntries(formData.entries()),
        tambahan: formData.getAll("tambahan"),
        orderId: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString()
    };

    try {
        const result = await ApiService.submitServiceOrder(order);
        order.remoteId = result.id;
        order.deliveryStatus = "Terkirim ke mock API";
        state.orders.unshift(order);
        saveOrders();
        renderOrders();
        form.reset();
        showToast("Permintaan tersimpan", "Mock API menerima data demo; riwayat disimpan di perangkat.");
    } catch (error) {
        console.error("Pengiriman ke mock API gagal:", error);
        order.deliveryStatus = "API gagal; tersimpan lokal";
        try {
            state.orders.unshift(order);
            saveOrders();
            renderOrders();
            form.reset();
            showToast("Tersimpan lokal", "Mock API tidak dapat dijangkau. Order tersimpan di perangkat ini.", "warning");
        } catch (storageError) {
            console.error("Order tidak dapat disimpan:", storageError);
            showToast("Penyimpanan gagal", "Browser tidak dapat menyimpan order ke localStorage.", "warning");
        }
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
    }
}

function connectEvents() {
    document.getElementById("project-filters").addEventListener("click", handleFilterClick);
    document.getElementById("project-cards").addEventListener("click", (event) => {
        const button = event.target.closest("button[data-project-id]");
        if (!button) return;
        const project = state.projects.find((item) => item.id === button.dataset.projectId);
        if (project) renderProjectModal(project);
    });
    document.getElementById("contact-form").addEventListener("submit", handleOrderSubmit);
}

async function initialize() {
    const profileContainer = document.getElementById("profile-academic");
    const biographyContainer = document.getElementById("profile-biography");
    const skillsContainer = document.getElementById("skills-grid");
    const projectContainer = document.getElementById("project-cards");
    const serviceContainer = document.getElementById("service-list");

    [profileContainer, biographyContainer, skillsContainer, projectContainer, serviceContainer]
        .forEach((container) => showLoading(container));
    connectEvents();
    renderOrders();

    const [profileResult, projectsResult, servicesResult] = await Promise.allSettled([
        ApiService.getProfile(),
        ApiService.getProjects(),
        ApiService.getServices()
    ]);

    if (profileResult.status === "fulfilled") {
        state.profile = profileResult.value;
        renderProfile();
    } else {
        console.error("Profil gagal dimuat:", profileResult.reason);
        document.getElementById("profile-headline").textContent = "PROFIL TIDAK TERSEDIA";
        document.getElementById("profile-display-name").textContent = "";
        document.getElementById("profile-summary").textContent = "Data profil gagal dimuat.";
        showMessage(profileContainer, "Profil gagal dimuat. Coba jalankan melalui Live Server dan periksa koneksi.");
        showMessage(biographyContainer, "Informasi profil tidak tersedia.");
        showMessage(skillsContainer, "Data keahlian tidak tersedia.");
    }

    if (projectsResult.status === "fulfilled") {
        state.projects = projectsResult.value;
        renderProjectFilters();
        renderProjectCards();
        renderProjectTable();
    } else {
        console.error("Proyek gagal dimuat:", projectsResult.reason);
        showMessage(projectContainer, "Proyek gagal dimuat. Periksa file projects.json dan koneksi.");
        showMessage(document.getElementById("project-filters"), "Filter belum tersedia.", "info");
        document.getElementById("project-total").textContent = "Data proyek tidak tersedia.";
    }

    if (servicesResult.status === "fulfilled") {
        state.services = servicesResult.value;
        renderServices();
        renderOrders();
    } else {
        console.error("Layanan gagal dimuat:", servicesResult.reason);
        showMessage(serviceContainer, "Layanan gagal dimuat. Periksa file services.json dan koneksi.");
        document.getElementById("layanan").disabled = true;
    }
}

initialize();
