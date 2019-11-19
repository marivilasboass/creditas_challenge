const handleResponse = async response => {
  if (response.status) {
    const data = await response.json();

    if (response.status !== 200) {
      return Promise.reject(data);
    }
    return Promise.resolve(data);
  }
  return Promise.reject(response);
};

const fetchUser = ({email, password, credential}) => {
  return fetch(`${'https://api.github.com'}/user`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Basic ${credential}`,
    },
  }).then(handleResponse);
};

const fetchDynamic = ({url, credential}) => {
  const normalizedUrl = String(url).replace('{/sha}', '');
  return fetch(normalizedUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Basic ${credential}`,
    },
  }).then(handleResponse);
};

export default {
  fetchUser,
  fetchDynamic,
};
