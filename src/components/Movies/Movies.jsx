import {
  React,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';

import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import LoadMore from '../LoadMore/LoadMore.jsx';

import AppContext from '../../contexts/AppContext';
import { getMoviesList } from '../../utils/MoviesApi';

function Movies({ handleCardSave }) {
  const { setIsLoading, allMovies, setAllMovies } = useContext(AppContext);

  const [filterMovies, setFilterMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [isShort, setIsShort] = useState(false);

  const handleFilter = useCallback((searchReq, checkShort, StoredMovies) => {
    setSearchMovies(searchReq);

    localStorage.setItem('movieSearch', JSON.stringify(searchReq));
    localStorage.setItem('shorts', JSON.stringify(checkShort));
    localStorage.setItem('allMovies', JSON.stringify(StoredMovies));

    setFilterMovies(StoredMovies.filter((movie) => {
      const searchName = movie.nameRU
        .toLowerCase()
        .includes(searchReq.toLowerCase());
      return checkShort
        ? (searchName && movie.duration <= 40)
        : searchName;
    }));
  }, []);

  async function handleSearch(searchReq) {
    if (allMovies.length === 0) {
      try {
        setIsLoading(true);
        const res = await getMoviesList();
        setAllMovies(res);
        handleFilter(searchReq, isShort, res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      handleFilter(searchReq, isShort, allMovies);
    }
  }

  useEffect(() => {
    if (localStorage.allMovies) {
      const movieSearch = JSON.parse(localStorage.getItem('movieSearch'));
      const shorts = JSON.parse(localStorage.getItem('shorts'));
      const moviesArray = JSON.parse(localStorage.getItem('allMovies'));
      setSearchMovies(movieSearch);
      setIsShort(shorts);
      setAllMovies(moviesArray);
      handleFilter(movieSearch, shorts, moviesArray);
    }
  }, [handleFilter]);

  function handleShort() {
    if (isShort) {
      setIsShort(false);
      handleFilter(searchMovies, false, allMovies);
    } else {
      setIsShort(true);
      handleFilter(searchMovies, true, allMovies);
    }
  }

  return (
    <>
      <Header type={'movies'} />
      <main className="movies">
        <SearchForm
          handleSearch={handleSearch}
          handleShort={handleShort}
          searchMovies={searchMovies}
        />
        <div className="movies__border" />
        <MoviesCardList
          isSavedMovies={false}
          handleCardSave={handleCardSave}
          filterMovies={filterMovies}
        />
        <LoadMore />
        <Preloader />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

Movies.propTypes = {
  handleCardSave: PropTypes.func,
};
