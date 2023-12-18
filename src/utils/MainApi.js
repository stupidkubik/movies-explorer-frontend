class MainApi {
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

  async signUp(username, email, password) {
    const regData = await this._request(
      '/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      },
    );
    return regData;
  }

  async signIn(password, email) {
    const token = await this._request(
      '/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
    return token;
  }

  async getUserInfo(token) {
    const tokenData = await this._request(
      '/users/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return tokenData;
  }

  async updateProfile(username, email, token) {
    const newProfileData = await this._request(
      '/users/me',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
        }),
      },
    );
    return newProfileData;
  }

  async getMovies(token) {
    const moviesData = await this._request(
      '/movies',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return moviesData;
  }

  async addMovie(movieData, token) {
    const movie = await this._request(
      '/movies',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          country: movieData.country,
          director: movieData.director,
          duration: movieData.duration,
          year: movieData.year,
          description: movieData.description,
          image: `https://api.nomoreparties.co${movieData.image.url}`,
          trailerLink: movieData.trailerLink,
          thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
          movieId: movieData.movieId,
          nameRU: movieData.nameRU,
          nameEN: movieData.nameEN,
        }),
      },
    );
    return movie;
  }

  async deleteMovie(movieId, token) {
    const movieDelete = await this._request(
      `/movies${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return movieDelete;
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  // baseUrl: 'api.mydomain.nomoredomainsrocks.ru',
});

export default mainApi;
