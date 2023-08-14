import { mostrarListadoPokemones } from '../listado.js';

const NOMBRES_POKEMONES = ['Picachu', 'Bulbasaur'];

test('Muestra el listado de pokemones con callback por default', () => {
  const mock = jest.fn();
  document.body.innerHTML = '<div id="indice"></div>';
  mostrarListadoPokemones(NOMBRES_POKEMONES, mock);
  expect(document.querySelectorAll('#indice a'))
    .toHaveLength(2);

  const $contenedorPokemon = document.querySelector('#indice a');
  $contenedorPokemon.click();
  expect(mock)
    .toHaveBeenCalledTimes(1);
});
