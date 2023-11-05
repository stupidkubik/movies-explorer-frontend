import { React } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
// import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import LoadMore from '../LoadMore/LoadMore.jsx';

function Movies(handleCardSave) {
  return (
    <div className="movies">
      <Header type={'profile'} />
      <SearchForm />
      <div className="movies__border" />
      <MoviesCardList handleCardSave={handleCardSave} />
      <LoadMore />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;
