/* eslint-disable arrow-body-style */
module.exports = (fn) => {
  return (req, res, next) => {
    return Promise.resolve(fn(req, res, next))
      .then(() => next())
      .catch(next);
  };
};
