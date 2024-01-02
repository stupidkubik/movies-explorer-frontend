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
  const [isFinished, setIsFinished] = useState(false);
  const arrayForRender = filterMovies.slice(0, arrayLength);

  const renderMovies = useCallback(() => {
    const count = { cards: 12, rows: 3 };
    if (window.innerWidth < 1140) {
      count.cards = 8;
      count.rows = 2;
    }
    if (window.innerWidth < 710) {
      count.cards = 5;
    }
    return count;
  }, []);

  function renderMoviesCards() {
    setArrayLength(renderMovies().cards);
    if (window.innerWidth < 1140) {
      setArrayLength(renderMovies().cards);
    }
    if (window.innerWidth < 710) {
      setArrayLength(renderMovies().cards);
    }
  }

  useEffect(() => {
    renderMoviesCards();
    window.addEventListener('resize', renderMoviesCards);
    return () => window.removeEventListener('resize', renderMoviesCards);
  }, []);

  const handleFilter = useCallback((searchReq, checkShort, StoredMovies) => {
    setSearchMoviesString(searchReq);

    localStorage.setItem('movieSearch', JSON.stringify(searchReq));
    localStorage.setItem('shorts', JSON.stringify(checkShort));
    localStorage.setItem('allMovies', JSON.stringify(StoredMovies));

    setFilterMovies(StoredMovies.filter((movie) => movie.nameRU.toLowerCase()
      .includes(searchReq.toLowerCase()) && (checkShort ? movie.duration <= 40 : true)));

    setIsFinished(false);
    setArrayLength(renderMovies().cards);
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
      setIsFinished(false);
      setArrayLength(renderMovies().cards);
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

  function loadMore() {
    if (arrayLength < filterMovies.length) {
      setArrayLength(arrayLength + renderMovies().rows);
      setIsFinished(false);
    }
  }

  useEffect(() => {
    if (arrayLength >= filterMovies.length) {
      setIsFinished(true);
      setArrayLength(renderMovies().cards);
    }
  }, [handleFilter, handleSearch]);

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
        {arrayForRender[0] && !isFinished
          ? <LoadMore loadMore={loadMore} />
          : ''}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
