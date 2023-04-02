const { errorDescriptions } = require('../errorCodes');

const generateHTML = (errors) => {
  const items = errors
    .map(
      (error) => `
    <li>
      <a href="/errors?code=${error.code}">${error.code}</a> - ${error.description}
    </li>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error List</title>
</head>
<body>
  <h1>Error List</h1>
  <ul>${items}</ul>
</body>
</html>`;
};

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(generateHTML(errorDescriptions));
};
