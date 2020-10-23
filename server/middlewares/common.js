function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Resource Not Found`);
  next(error);
}

function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);  
  res.json({});
}

function additionalData(req, res, next) {
  req.body.author = {
    name: process.env.AUTHOR_FIRSTNAME,
    lastname: process.env.AUTHOR_LASTNAME,
  };

  next();
}

module.exports = {
  notFound,
  errorHandler,
  additionalData,
};
