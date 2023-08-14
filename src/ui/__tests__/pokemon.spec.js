import mostrarPokemon from '../pokemon.js';
import pokedexFixture from '../../__tests__/pokedex.fixture.js';
import bulbasaur from '../../../cypress/fixtures/bulbasaur.json';
import { mapearPokemon } from '../../mapeadores/pokemon.js';

describe('Muestra al pokemon elegido', () => {
  const bulbasaurMapeado = mapearPokemon(bulbasaur);
  const IMAGEN_POKEMON = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  document.body.innerHTML = pokedexFixture;
  mostrarPokemon(bulbasaurMapeado);

  it('Que el contenedor tenga el estilo correcto', () => {
    const $contenedor = document.querySelector('#pokemon-contenedor');
    const estilos = getComputedStyle($contenedor);
    expect(estilos.display)
      .toBe('block');
  });

  it('Que la imagen y su texto esten correctos', () => {
    const $imagen = document.querySelector('#pokemon-imagen');
    expect($imagen.src)
      .toBe(IMAGEN_POKEMON);
    expect($imagen.alt)
      .toBe('Imagen frontal del pokemon bulbasaur');
  });

  it('Que el nombre y su id este correcto', () => {
    const pokemonNombre = document.querySelector('#pokemon-nombre').textContent;
    const pokemonId = document.querySelector('#pokemon-id').textContent;
    expect(pokemonNombre)
      .toBe('bulbasaur');
    expect(pokemonId)
      .toBe('1');
  });

  it('Que se muestren los tipos del pokemon', () => {
    const tipos = document.querySelectorAll('#tipos span');
    expect(tipos.length)
      .toBeGreaterThan(0);
  });

  it('Que se muestren las habilidades del pokemon', () => {
    const habilidades = document.querySelectorAll('#habilidades span');
    expect(habilidades.length)
      .toBeGreaterThan(0);
  });

  it('Que se muestren los movimientos del pokemon', () => {
    const movimientos = document.querySelectorAll('#movimientos tr');
    expect(movimientos.length)
      .toBeGreaterThan(5);
  });
});
