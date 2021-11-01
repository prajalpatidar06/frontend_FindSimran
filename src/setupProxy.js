const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
    createProxyMiddleware("/api/*", {
      target: "https://asia-east1-findcodingpartner.cloudfunctions.net",
      "changeOrigin": true,
      "secure": false,
      "Accept": "application/json",
      "Content-Type": "application/json",
    })
  );
};
