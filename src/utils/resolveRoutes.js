// Funcion que va a resolver las routes
const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validateRoute = route === '/' ? route : '/:id';
    return validateRoute;
  }

  return route;
};

export { resolveRoutes };
