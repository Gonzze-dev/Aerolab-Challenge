const token = import.meta.env.VITE_TOKEN || '';
const API_START = import.meta.env.VITE_API;
const API = API_START + `products?token=${token}`;

export {API}
