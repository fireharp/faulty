const { random4xxError, random5xxError } = require('./errorCodes');

module.exports = (req, res) => {
  if (req.url.startsWith('/4')) {
    const error = random4xxError();
    res.status(error.code).json({ message: error.description });
  } else if (req.url.startsWith('/5')) {
    const error = random5xxError();
    res.status(error.code).json({ message: error.description });
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};
