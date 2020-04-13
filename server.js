const express = require('express');

const next = require('next');

const port = process.env.PORT || 3000;

const app = next({ dev: process.env.NODE_ENV !== 'production' });

const handle = app.getRequestHandler();

const compression = require('compression');

(async () => {
  await app.prepare();

  const server = express();

  server.use(compression());

  if (process.env.NODE_ENV === 'production') {
    server.get(/^\/_next\/static\/(images|fonts)\//, (_, res, nextHandler) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      nextHandler();
    });
  }

  server.get('*', (req, res) => handle(req, res));

  server.listen(port);

  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
