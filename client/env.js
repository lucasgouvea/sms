const envFactory = (window) => {
  window.env = window.env || {};
  window.env.HOST = 'http://35.203.39.237';
  window.env.PORT = 80;
};

envFactory(this);
