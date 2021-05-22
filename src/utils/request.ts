import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import config from '../config';

async function req(endpoint: keyof typeof config.client.endpoint) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const resultFetch = await fetch(uri).then((res) => res.json());
  return resultFetch;
}

export default req;
