import './styles/index.css';
import { router } from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
