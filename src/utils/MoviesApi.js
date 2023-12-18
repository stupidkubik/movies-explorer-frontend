class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options)
      .then(this._checkResponse);
  }

  async getMovies() {
    const moviesData = await this._request('/', 'GET');
    return moviesData;
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
