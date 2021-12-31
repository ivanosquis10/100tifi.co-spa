// Con esta funcion vamos a traer solo el elemento que necesito, es decir, el id
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export { getHash };
