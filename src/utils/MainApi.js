import { BASE_URL } from './constants';

export async function signIn(email, password) {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function signUp(name, email, password) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function getUserInfo(token) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function updateProfile(name, email, token) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function getMovies(token) {
  const res = await fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function addMovie(movieData, token) {
  const res = await fetch(`${BASE_URL}/movies`, {
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
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function deleteMovie(movieId, token) {
  const res = await fetch(`${BASE_URL}/movies${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
