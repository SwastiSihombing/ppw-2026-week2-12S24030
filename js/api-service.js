const DATA_PATH = "./data/";
const DEMO_ORDER_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const ApiService = {
    async getJSON(fileName) {
        const response = await fetch(`${DATA_PATH}${fileName}`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response.json();
    },

    async getProfile() {
        return this.getJSON("profile.json");
    },

    async getProjects() {
        return this.getJSON("projects.json");
    },

    async getServices() {
        return this.getJSON("services.json");
    },

    async submitServiceOrder(payload) {
        const response = await fetch(DEMO_ORDER_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response.json();
    }
};
