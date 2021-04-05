export const settingsService = {
  getAll: settingsGetAll,
  update: settingsUpdate
};

function settingsGetAll() {
  const requestOptions = {
      method: 'GET'
  };

  let url = `http://${process.env.REACT_APP_API_URL}/settings`;
  
  return fetch(url, requestOptions).then(handleResponse);
}

function settingsUpdate(key, value) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'value': value})
  };

  let url = `http://${process.env.REACT_APP_API_URL}/settings/${key}`;
  
  return fetch(url, requestOptions).then(handleResponse);
}

// stocks services
export const stocksService = {
  getAll: stocksGetAll,
  create: stocksCreate
};

function stocksGetAll() {
  const requestOptions = {
      method: 'GET'
  };

  let url = `http://${process.env.REACT_APP_API_URL}/stocks`;
  
  return fetch(url, requestOptions).then(handleResponse);
}

function stocksCreate(data) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  let url = `http://${process.env.REACT_APP_API_URL}/stocks`;
  
  return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (response.error) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}