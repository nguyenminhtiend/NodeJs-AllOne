const asyncRoute = (asyncRouteHandler) => {
  return (req, res, next) => {
    return Promise.resolve(asyncRouteHandler(req, res, next))
      .then(() => next())
      .catch(next)
  }
}

module.exports = {
  asyncRoute
}