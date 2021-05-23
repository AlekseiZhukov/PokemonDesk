import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const resultFetch = await fetch(uri).then((res) => res.json());
  return resultFetch;
}

export default req;
