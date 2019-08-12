const asyncRoute = asyncRouteHandler => (req, res, next) => Promise.resolve(asyncRouteHandler(req, res, next))
  .then(() => next())
  .catch(next);

module.exports = {
  asyncRoute
};
