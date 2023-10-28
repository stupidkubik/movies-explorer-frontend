import { React } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router';
// import AppContext from '../contexts/AppContext.js';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import LoginUserContext from '../contexts/LoginUserContext.js';
// import ProtectedRoute from './ProtectedRoute.jsx';
// import { Paths } from '../../utils/constants';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <AppContext.Provider value={{ }}>
        <LoginUserContext.Provider value={{ }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path={Paths.Login} element={<Login />} />
            <Route path={Paths.SignUp} element={<Register />} />
            <Route path={Paths.Profile} element={<Profile />} />
            <Route path={Paths.Movies} element={<Movies />} />
            <Route path={Paths.SavedMovies} element={<SavedMovies />} />
            <Route path="*" element={<Navigate to={<NotFound />} replace />} />
            <Route path="*" element={<Navigate to={Paths.NotFound} replace />} />
          </Routes>
        </LoginUserContext.Provider>
      </AppContext.Provider> */}
    </div>
  );
}

export default App;
