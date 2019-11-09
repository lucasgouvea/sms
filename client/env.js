const envFactory = (window) => {
  window.env = window.env || {};
  window.env.PORT = 80;
};

envFactory(this);
