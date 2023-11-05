import { React, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  // useNavigate,
} from 'react-router';
// import AppContext from '../contexts/AppContext.js';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
import LoginUserContext from '../../contexts/LoginUserContext';
// import ProtectedRoute from './ProtectedRoute.jsx';
import { Paths } from '../../utils/constants';
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const navigate = useNavigate();
  function handleCardSave(MovieData) {
    console.log(MovieData);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <LoginUserContext.Provider value={{ isLoggedIn }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={Paths.SignUp} element={<Register handleLogin={handleLogin} />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Profile} element={<Profile name={'Виталий'} email={'pochta@yandex.ru'} />} />
          <Route path={Paths.NotFound} element={<NotFound />} />
          <Route path={Paths.Movies} element={<Movies handleCardSave={handleCardSave} />} />
          <Route path={Paths.SavedMovies} element={<SavedMovies />} />
          <Route path="*" element={<Navigate to={Paths.NotFound} />} />
        </Routes>
      </LoginUserContext.Provider>
    </div>
  );
}

export default App;
