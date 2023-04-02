const { errorDescriptions } = require('../errorCodes');

module.exports = (req, res) => {
  res.status(200).json(errorDescriptions);
};
