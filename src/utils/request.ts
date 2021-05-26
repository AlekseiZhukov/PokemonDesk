import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object, id?: number | string): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  if (id) {
    const resultFetch = await fetch(`${uri}${id}`).then((res) => res.json());
    return resultFetch;
  }

  const resultFetch = await fetch(uri).then((res) => res.json());
  return resultFetch;
}

export default req;
