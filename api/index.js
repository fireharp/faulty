const { random4xxError, random5xxError } = require('./errorCodes');

module.exports = async (req, res) => {
  const shouldTimeout = Math.random() < 0.2;
  const shouldFail = Math.random() < 0.4;

  if (shouldTimeout) {
    await new Promise((resolve) => setTimeout(resolve, 11000));
  }

  if (shouldFail) {
    const randomError =
      Math.random() < 0.5 ? random4xxError() : random5xxError();
    res.status(randomError.code).json({ message: randomError.description });
  } else {
    res.status(200).json({ message: 'Success!' });
  }
};
