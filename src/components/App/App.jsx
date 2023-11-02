import { React } from 'react';
import {
  Routes,
  Route,
  // Navigate,
  // useNavigate,
} from 'react-router';
// import AppContext from '../contexts/AppContext.js';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import LoginUserContext from '../contexts/LoginUserContext.js';
// import ProtectedRoute from './ProtectedRoute.jsx';
import { Paths } from '../../utils/constants';
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={Paths.SignUp} element={<Register />} />
        <Route path={Paths.Login} element={<Login />} />
        <Route path={Paths.Profile} element={<Profile name={'Виталий'} email={'pochta@yandex.ru'} />} />
        {/* <Route path={Paths.Movies} element={<Movies />} />
        <Route path={Paths.SavedMovies} element={<SavedMovies />} />
        <Route path="*" element={<Navigate to={<NotFound />} replace />} />
        <Route path="*" element={<Navigate to={Paths.NotFound} replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
