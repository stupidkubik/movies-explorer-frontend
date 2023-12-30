import {
  React,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import LoadMore from '../LoadMore/LoadMore.jsx';

import AppContext from '../../contexts/AppContext';
import { getMoviesList } from '../../utils/MoviesApi';

function Movies() {
  const { setIsLoading, allMovies, setAllMovies } = useContext(AppContext);

  const [filterMovies, setFilterMovies] = useState([]);
  const [searchMovieString, setSearchMoviesString] = useState('');
  const [isShort, setIsShort] = useState(false);

  const [arrayLength, setArrayLength] = useState('');
  const arrayForRender = filterMovies.slice(0, arrayLength);

  const handleFilter = useCallback((searchReq, checkShort, StoredMovies) => {
    setSearchMoviesString(searchReq);

    localStorage.setItem('movieSearch', JSON.stringify(searchReq));
    localStorage.setItem('shorts', JSON.stringify(checkShort));
    localStorage.setItem('allMovies', JSON.stringify(StoredMovies));

    return setFilterMovies(StoredMovies.filter((movie) => movie.nameRU.toLowerCase()
      .includes(searchReq.toLowerCase()) && (checkShort ? movie.duration <= 40 : true)));
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
      setSearchMoviesString(movieSearch);
      setIsShort(shorts);
      setAllMovies(moviesArray);
      handleFilter(movieSearch, shorts, moviesArray);
    }
  }, [handleFilter, setSearchMoviesString, setIsShort, setAllMovies]);

  function handleShort() {
    if (isShort) {
      setIsShort(false);
      handleFilter(searchMovieString, false, allMovies);
    } else {
      setIsShort(true);
      handleFilter(searchMovieString, true, allMovies);
    }
  }

  function renderMovies() {
    const count = { cards: 12, rows: 3 };
    if (window.innerWidth < 1140) {
      count.cards = 8;
      count.rows = 2;
    }
    if (window.innerWidth < 710) {
      count.cards = 5;
      count.rows = 2;
    }
    return count;
  }

  useEffect(() => {
    setArrayLength(renderMovies().cards);
    function renderMoviesCards() {
      if (window.innerWidth < 1140) {
        setArrayLength(renderMovies().cards);
      }
      if (window.innerWidth < 710) {
        setArrayLength(renderMovies().cards);
      }
    }
    window.addEventListener('resize', renderMoviesCards);
    return () => window.removeEventListener('resize', renderMoviesCards);
  }, []);

  function loadMore() {
    setArrayLength(arrayLength + renderMovies().rows);
  }

  return (
    <>
      <Header type={'movies'} />
      <main className="movies">
        <SearchForm
          handleSearch={handleSearch}
          handleShort={handleShort}
          isShort={isShort}
          searchMovieString={searchMovieString}
        />
        <div className="movies__border" />
        <MoviesCardList
          isSavedMovies={false}
          arrayForRender={arrayForRender}
        />
        <LoadMore loadMore={loadMore} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
