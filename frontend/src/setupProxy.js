const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000", //url
      changeOrigin: true,
    })
  );
};

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:4000",
//       changeOrigin: true,
//       onError: function (err, req, res) {
//         console.error(err);
//         res.status(500).send("Proxy Error");
//       },
//     })
//   );
// };
