const errorList = [
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

module.exports = (req, res) => {
  res.status(200).json(errorList);
};
