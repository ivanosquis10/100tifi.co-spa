import { Header } from '../template/Header';
import { Home } from '../pages/Home';
import { Character } from '../pages/Character';
import { Error404 } from '../pages/Error404';
import { getHash } from '../utils/getHash';
import { resolveRoutes } from '../utils/resolveRoutes';

// Rutas del projecto
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

// Manejador de las rutas
const router = async () => {
  // Referencias del html
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export { router };
