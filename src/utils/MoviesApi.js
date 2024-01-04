export async function getMoviesList() {
  const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');

  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export default getMoviesList;
