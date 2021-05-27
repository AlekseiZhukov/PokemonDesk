import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,

    query: {
      ...query,
    },
  };

  return url;
}

export default getUrlWithParamsConfig;
