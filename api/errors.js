const { errorDescriptions } = require('./errorCodes');

const getErrorInfo = (code) => {
  const error = errorDescriptions.find((err) => err.code === code);
  return error || { code: 404, description: 'Error not found' };
};

const generateHTML = (error) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error ${error.code}</title>
</head>
<body>
  <h1>Error ${error.code}</h1>
  <p>${error.description}</p>
  <a href="/">Back to Error List</a>
</body>
</html>
`;

module.exports = (req, res, code) => {
  const errorCode = parseInt(code, 10);
  const error = getErrorInfo(errorCode);
  res.setHeader('Content-Type', 'text/html');
  if (errorCode === 408 || errorCode === 504) {
    const timeout = 30000; // 30 seconds
    setTimeout(() => {
      res.statusCode = error.code;
      res.end(generateHTML(error));
    }, timeout);
  } else {
    res.statusCode = error.code;
    res.end(generateHTML(error));
  }
};
