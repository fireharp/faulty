const errorDescriptions = [
  { code: 400, description: 'Bad Request' },
  { code: 401, description: 'Unauthorized' },
  { code: 403, description: 'Forbidden' },
  { code: 404, description: 'Not Found' },
  { code: 500, description: 'Internal Server Error' },
  { code: 501, description: 'Not Implemented' },
  { code: 502, description: 'Bad Gateway' },
  { code: 503, description: 'Service Unavailable' },
  { code: 504, description: 'Gateway Timeout' },
];

const random4xxError = () => {
  const errors = errorDescriptions.filter(
    (error) => error.code >= 400 && error.code < 500
  );
  return errors[Math.floor(Math.random() * errors.length)];
};

const random5xxError = () => {
  const errors = errorDescriptions.filter(
    (error) => error.code >= 500 && error.code < 600
  );
  return errors[Math.floor(Math.random() * errors.length)];
};

module.exports = {
  errorDescriptions,
  random4xxError,
  random5xxError,
};