const envFactory = (window) => {
  window.env = window.env || {};
  window.env.HOST = '35.203.39.237';
  window.env.PORT = 8080;
};

envFactory(this);
