const randomErrorResponse = () => {
  const errors = [400, 401, 403, 404, 500];
  return errors[Math.floor(Math.random() * errors.length)];
};

module.exports = async (req, res) => {
  const shouldTimeout = Math.random() < 0.2;
  const shouldFail = Math.random() < 0.4;

  if (shouldTimeout) {
    await new Promise((resolve) => setTimeout(resolve, 11000));
  }

  if (shouldFail) {
    res.status(randomErrorResponse()).json({ message: 'An error occurred.' });
  } else {
    res.status(200).json({ message: 'Success!' });
  }
};
