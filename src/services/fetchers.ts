import axios from 'axios'

type Params = {
  [key: string]: string;
}

const urlparams  = (url: string, params: Params) => {
  const _url = new URL(url, process.env.HOST_API)
  Object.keys(params).forEach((key) => {
    _url.searchParams.append(key, params[key])
  })
  return _url.toString()
}

export const fetcherGET = <T>(params: Params) => <T>(url: string): Promise<T> => axios.get(urlparams(url, params)).then(r => r.data)