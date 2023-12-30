import {
  React,
  useState,
  useEffect,
} from 'react';

import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router';

import AppContext from '../../contexts/AppContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { Paths } from '../../utils/constants';
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

import {
  signIn,
  signUp,
  getUserInfo,
  updateProfile,
  getMovies,
  addMovie,
  deleteMovie,
} from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToken, setIsToken] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isProfileEdited, setIsProfileEdited] = useState(false);

  const navigate = useNavigate();

  async function handleProfile(token) {
    setIsLoading(true);
    try {
      const userData = await getUserInfo(token);
      sessionStorage.setItem('name', userData.name);
      sessionStorage.setItem('email', userData.email);
      sessionStorage.setItem('_id', userData._id);
      return userData;
    } catch (err) {
      setIsError(true);
      return err;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([handleProfile(token), getMovies(token)])
        .then((userData, moviesData) => {
          setSavedMovies(moviesData.reverse());
          setCurrentUser({ name: userData.name, email: userData.email });
          setIsLoggedIn(true);
        })
        .then(() => setIsToken(false))
        .catch(() => setIsToken(false));
    } else {
      setIsToken(false);
      sessionStorage.clear();
      navigate(Paths.SignUp);
    }
  }, [isLoggedIn]);

  async function handleLogin(email, password) {
    setIsLoading(true);
    try {
      const res = await signIn(email, password);
      localStorage.setItem('token', res.token);
      const userData = await handleProfile(res.token);
      setCurrentUser({ name: userData.name, email: userData.email });
      setIsLoggedIn(true);
      navigate(Paths.Movies);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegistration(name, email, password) {
    setIsLoading(true);
    try {
      const userData = await signUp(name, email, password);
      if (userData) {
        await handleLogin(email, password);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate(Paths.Home);
  }

  async function handleMovieDelete(id) {
    setIsLoading(true);
    try {
      await deleteMovie(id, localStorage.getItem('token'));
      setSavedMovies(savedMovies.filter((movie) => movie._id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleMovieSave(movieData, isSaved) {
    if (isSaved) {
      const findMovie = savedMovies.find((item) => item.movieId === movieData.id);
      return findMovie ? handleMovieDelete(findMovie._id) : console.error('фильм не найден');
    }
    setIsLoading(true);
    try {
      const res = await addMovie(movieData, localStorage.getItem('token'));
      setSavedMovies([res, ...savedMovies]);
      console.log(savedMovies);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
    return savedMovies;
  }

  async function handleUpdateProfile(name, email) {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await updateProfile(name, email, token);
      setCurrentUser({ name: res.name, email: res.email });
      setIsProfileUpdated(true);
      setIsProfileEdited(false);
      return res;
    } catch (err) {
      setIsError(true);
      return err;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      {isToken ? <Preloader />
        : (<CurrentUserContext.Provider value={currentUser}>
          <AppContext.Provider value={{
            isLoggedIn,
            isProfileEdited,
            isProfileUpdated,
            isError,
            isLoading,
            setIsLoading,
            allMovies,
            setAllMovies,
            savedMovies,
            setSavedMovies,
            setIsError,
            handleRegistration,
            handleLogin,
            handleUpdateProfile,
            handleLogout,
            handleMovieSave,
            handleMovieDelete,
          }}>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route path={Paths.SignUp} element={isLoggedIn
                ? <Navigate to={Paths.Movies} replace />
                : <Register />}
              />

              <Route path={Paths.Login} element={isLoggedIn
                ? <Navigate to={Paths.Movies} replace />
                : <Login />}
              />

              <Route path={Paths.Profile} element={<ProtectedRoute
                element={Profile}
                handleProfile={handleProfile}
                setIsProfileUpdated={setIsProfileUpdated}
                setIsProfileEdited={setIsProfileEdited}
                />} />

              <Route path={Paths.Movies} element={<ProtectedRoute
                element={Movies}
                 />} />

              <Route path={Paths.SavedMovies} element={<ProtectedRoute
                element={SavedMovies}
                />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppContext.Provider>
        </CurrentUserContext.Provider>)
      }
    </div>
  );
}

export default App;
