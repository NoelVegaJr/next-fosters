class FetchWrapper {
  constructor(base_URL) {
    this.base_URL = base_URL;
  }

  async get(endpoint) {
    const response = await fetch.get(endpoint)
    return  await response.json()

  }

  async put(endpoint, body){
    return fetch(this.baseURL + endpoint, {
        method: "put",
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
}
}