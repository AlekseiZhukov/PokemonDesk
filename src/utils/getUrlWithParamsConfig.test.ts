import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями method, uri с полями pathname, protocol, host и пустой query и пустой body,', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и {name: Pikachu}, на выходе получить объект с полями method, пустым body, uri с полями pathname, protocol, host и query с полями name: Pikachu ', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  /* test('принимает аргумента объект и объект', () => {
        const url = getUrlWithParamsConfig({path: '/api/v1/pokemon/25'}, {id: 25});
        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25',
                query: {}
            },
            body: {}
        })
    }) */
});
