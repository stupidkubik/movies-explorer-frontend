import {
  React,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import AppContext from '../../contexts/AppContext';

function SavedMovies() {
  const { savedMovies } = useContext(AppContext);

  const [filterMovies, setFilterMovies] = useState(savedMovies);
  const [searchMovieString, setSearchMoviesString] = useState('');
  const [isShort, setIsShort] = useState(false);
  // Коллбэк-функция поиска по массиву фильмов
  const handleFilter = useCallback((searchReq, checkShort, StoredMovies) => {
    setSearchMoviesString(searchReq);
    setFilterMovies(StoredMovies.filter((movie) => {
      const searchName = movie.nameRU
        .toLowerCase()
        .includes(searchReq.toLowerCase());
      return checkShort
        ? (searchName && movie.duration <= 40)
        : searchName;
    }));
  }, []);
  // Функция сабмита формы поиска
  function handleSearch(searchReq) {
    handleFilter(searchReq, isShort, savedMovies);
  }
  // Используем фильтр при изменении стейтов
  useEffect(() => {
    handleFilter(searchMovieString, isShort, savedMovies);
  }, [handleFilter, searchMovieString, isShort, savedMovies]);
  // Меняем стейт выбора короткометражек
  function handleShort() {
    if (isShort) {
      setIsShort(false);
      handleFilter(searchMovieString, false, savedMovies);
    } else {
      setIsShort(true);
      handleFilter(searchMovieString, true, savedMovies);
    }
  }

  return (
    <>
      <Header type={'savedMovies'} />
      <main className="movies savedMovies">
        <SearchForm
          handleSearch={handleSearch}
          isShort={isShort}
          handleShort={handleShort}
          searchMovieString={searchMovieString}
        />
        <div className="movies__border" />
        <MoviesCardList
          isSavedMovies={true}
          arrayForRender={filterMovies}
          />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
