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
  test('Должна принимать два аргумента "createPokemon" и пустой объект, на выходе получить объект с полями method, объектом uri с полями pathname, protocol, host и пустым query и поле body c пустым объектом', () => {
    const url = getUrlWithParamsConfig('createPokemon', {});

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {},
    });
  });

  test("Должна принимать два аргумента \"createPokemon\" и объект c полями {name: 'Azhukoff', weight: 80}, на выходе получить объект с полями method, объектом uri с полями pathname, protocol, host и пустым query и поле body c  объектом {name: 'Azhukoff', weight: 80}", () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Azhukoff', weight: 80 });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Azhukoff',
        weight: 80,
      },
    });
  });

  test("Должна принимать два аргумента \"createPokemon\" и объект c полями {name: 'Azhukoff', weight: 80}, на выходе получить объект с полями method, объектом uri с полями pathname, protocol, host и пустым query и поле body c  объектом {name: 'Azhukoff', weight: 80}", () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Azhukoff', weight: 80 });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Azhukoff',
        weight: 80,
      },
    });
  });

  test('Должна принимать два аргумента "updatePokemon" и { id: 25}, на выходе получить объект с полями method, объектом uri с полями pathname, protocol, host и пустым query и пустым body ', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "deletePokemon" и { id: 25}, на выходе получить объект с полями method, объектом uri с полями pathname, protocol, host и пустым query и пустым body ', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
