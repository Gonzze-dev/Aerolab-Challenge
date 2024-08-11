const token = import.meta.env.VITE_TOKEN || '';
const API_START = import.meta.env.VITE_API;

const API_GET_PRODUCTS = API_START + `products?token=${token}`;
const API_GET_USER = API_START + 'user/me'
const API_ADD_POINTS = API_START + 'user/points'
const API_GET_HISTORY = API_START + 'user/history'
const API_REEDEM = API_START + '/redeem'

const productsPerPage = 10

export {API_GET_PRODUCTS, API_GET_USER, API_ADD_POINTS, API_GET_HISTORY, API_REEDEM, productsPerPage}
