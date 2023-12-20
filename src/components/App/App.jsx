import { React, useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router';
import AppContext from '../../contexts/AppContext';
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
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isProfileEdited, setIsProfileEdited] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      // checkToken(jwt);
    } else navigate(Paths.SignUp);
  }, []);

  function handleLogin(email, password) {
    mainApi.signIn(email, password)
      .then((res) => {
        console.log(res.token);
        localStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        navigate('/movies');
        return res;
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegistration(name, email, password) {
    setIsLoading(true);
    mainApi.signUp(name, email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate(Paths.Home);
  }

  function handleProfile() {
    setIsLoading(true);
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleMovieSave(evt) {
    const findMovie = MoviesList.find(evt.target._id);
    findMovie.isSaved = !evt.target.isSasved;
    setSavedMovies([]);
  }

  function onSubmitSearch(evt) {
    evt.preventDefault();
    console.log(evt.target);
  }

  return (
    <div className="App">
      <LoginUserContext.Provider value={{ isLoggedIn }}>
        <CurrentUserContext.Provider value={{ currentUser }}>
          <AppContext.Provider value={{
            isProfileEdited,
            isProfileUpdated,
            isError,
            isLoading,
            savedMovies,
            setIsError,
          }}>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route path={Paths.SignUp} element={isLoggedIn
                ? <Navigate to={Paths.Movies} replace />
                : <Register handleRegistration={handleRegistration} />}
              />

              <Route path={Paths.Login} element={isLoggedIn
                ? <Navigate to={Paths.Movies} replace />
                : <Login handleLogin={handleLogin} />}
              />

              <Route path={Paths.Profile} element={<ProtectedRoute
                element={Profile}
                name={'Виталий'}
                email={'pochta@yandex.ru'}
                handleProfile={handleProfile}
                handleLogout={handleLogout}
                setIsProfileUpdated={setIsProfileUpdated}
                setIsProfileEdited={setIsProfileEdited}
                />} />

              <Route path={Paths.Movies} element={<ProtectedRoute
                element={Movies}
                handleMovieSave={handleMovieSave}
                onSubmitSearch={onSubmitSearch}
                />} />

              <Route path={Paths.SavedMovies} element={<ProtectedRoute
                element={SavedMovies}
                onSubmitSearch={onSubmitSearch}
                />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppContext.Provider>
        </CurrentUserContext.Provider>
      </LoginUserContext.Provider>
    </div>
  );
}

export default App;
