import { React } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function Movies() {
  return (
    <div className="movies">
      <Header type={'profile'} />
      <SearchForm />
      <div className="movies__border" />
      <Preloader />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
