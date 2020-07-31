const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : ''; // se estiver usando o HEROKU usar a url que ele fornece;

export default {
  URL_BACKEND_TOP,
};
