const envFactory = (window) => {
  window.env = window.env || {};
  window.env.PORT = 8080;
};

envFactory(this);
