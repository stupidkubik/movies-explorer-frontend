import { React } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
// import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies(handleCardDelete) {
  return (
    <div className="saved">
      <Header loggedIn={true} />
      <SearchForm />
      <div className="movies__border" />
      <MoviesCardList handleCardSave={handleCardDelete} saved={true} />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default SavedMovies;
