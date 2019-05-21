const Storage = {
    set(name, value) {
        if (!name) return;
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(name, value);
    },

    remove(name) {
        if (!name) return;
        return localStorage.removeItem(name);
    },

    get(name) {
        if (!name) return;
        return localStorage.getItem(name);
    },

    getJson(name){
        if (!name) return;
        let data = localStorage.getItem(name);
        if (data) return JSON.parse(data);
        else return false;
    }
};

export default Storage;
