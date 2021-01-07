import fetch from 'isomorphic-unfetch'

const baseURL = process.env.REACT_APP_API_URL

const fetchAuthWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`

  if (method === 'GET') {
    return fetch(url)
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json, text/plain, */*',
    },
    body: JSON.stringify(data),
  })
}

export { fetchAuthWithoutToken }
