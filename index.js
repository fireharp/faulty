const http = require('http');
const url = require('url');
const listHandler = require('./api/list');
const errorsHandler = require('./api/errors');

const normalizePath = (path) => {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = normalizePath(parsedUrl.pathname);

  if (path === '/') {
    await listHandler(req, res);
  } else if (path.startsWith('/errors/')) {
    const code = path.split('/')[2];
    await errorsHandler(req, res, code);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
