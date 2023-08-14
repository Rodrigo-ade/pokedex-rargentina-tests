import { manejarCambioPagina, mostrarPaginador } from '../paginador.js';

test('Se agrega el paginador', () => {
  const mockPaginaSeleccionada = jest.fn();
  const TOTAL_POKEMONES = 100;
  const POKEMONES_POR_PAGINA = 20;
  const PAGINA_ACTUAL = 1;
  const URL_SIGUIENTE = 'www.siguientetest.com';
  const URL_ANTERIOR = '';
  document.body.innerHTML = '<ul id="paginador"></ul>';

  mostrarPaginador(
    TOTAL_POKEMONES,
    PAGINA_ACTUAL,
    URL_SIGUIENTE,
    URL_ANTERIOR,
    mockPaginaSeleccionada,
  );
  const $itemAnterior = document.querySelector('#paginador li');
  const $itemspaginas = document.querySelectorAll('#paginador li');
  const $itemPaginaDos = $itemspaginas[2];

  expect($itemAnterior.classList)
    .toContain('disabled');

  expect($itemspaginas.length)
    .toBe(TOTAL_POKEMONES / POKEMONES_POR_PAGINA + 2);

  $itemPaginaDos.click();
  expect(mockPaginaSeleccionada)
    .toBeCalledTimes(1);
});

test('Se cambia a una pagina numérica', () => {
  const NUMERO_PAGINA_EVENTO = 5;

  const eventoMock = {
    preventDefault: jest.fn(),
    target: {
      getAttribute: jest.fn(() => '#'),
      dataset: {
        pagina: NUMERO_PAGINA_EVENTO,
      },
    },
  };

  const callbackMock = jest.fn();

  manejarCambioPagina(eventoMock, callbackMock);
  expect(callbackMock)
    .toBeCalledWith(NUMERO_PAGINA_EVENTO);

  expect(callbackMock)
    .toBeCalledTimes(1);
});
