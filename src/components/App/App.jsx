import { React, useState, useEffect } from 'react';
import {
  Routes,
  Route,
  // Navigate,
  useNavigate,
} from 'react-router';
// import AppContext from '../contexts/AppContext.js';
import LoginUserContext from '../../contexts/LoginUserContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { Paths, MoviesList } from '../../utils/constants';
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      // checkToken(jwt);
    } else navigate(Paths.SignUp);
  }, []);

  // Общая функция запроса к серверу
  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeAllPopups)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function handleLogin(evt) {
    evt.preventDefault();
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    navigate(Paths.Home);
  }

  function handleMovieSave(evt) {
    const findMovie = MoviesList.find(evt.target._id);
    findMovie.isSaved = !evt.target.isSasved;
  }

  function onSubmitSearch(evt) {
    evt.preventDefault();
  }

  return (
    <div className="App">
      <LoginUserContext.Provider value={{ isLoggedIn }}>
        <CurrentUserContext.Provider value={{ isLoggedIn }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path={Paths.SignUp} element={<Register />} />
            <Route path={Paths.Login} element={<Login handleLogin={handleLogin} />} />
            <Route path={Paths.Profile} element={<Profile
              name={'Виталий'}
              email={'pochta@yandex.ru'}
              handleLogout={handleLogout}
              />} />
            <Route
              path={Paths.Movies}
              element={<Movies
                handleMovieSave={handleMovieSave}
                onSubmitSearch={onSubmitSearch}
                />}
              />
            <Route
              path={Paths.SavedMovies}
              element={<SavedMovies
                onSubmitSearch={onSubmitSearch}
                />}
              />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </LoginUserContext.Provider>
    </div>
  );
}

export default App;
