interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      getPokemons: {
        method: string;
        uri: {
          pathname: string;
          query: {
            limit?: number;
          };
        };
      };
    };
  };
}

const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
          query: {
            limit: 100,
          },
        },
      },
    },
  },
};

export default config;
