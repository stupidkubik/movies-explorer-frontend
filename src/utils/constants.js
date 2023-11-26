import Image1 from '../images/1.jpeg';
import Image2 from '../images/2.jpeg';
import Image3 from '../images/3.jpeg';
import Image4 from '../images/4.jpeg';
import Image5 from '../images/5.jpeg';
import Image6 from '../images/6.jpeg';
import Image7 from '../images/7.jpeg';
import Image8 from '../images/8.jpeg';
import Image9 from '../images/9.jpeg';
import Image10 from '../images/10.jpg';
import Image11 from '../images/11.jpeg';
import Image12 from '../images/12.jpeg';

export const Paths = {
  Home: '/',
  Login: '/signin',
  SignUp: '/signup',
  Profile: '/profile',
  Movies: '/movies',
  SavedMovies: '/saved-movies',
  NotFound: '/404',
};

export const MoviesList = [
  {
    isSaved: false,
    _id: '1',
    duration: '1ч 47м',
    image: Image1,
    nameRU: '33 слова о дизайне',
  },
  {
    isSaved: true,
    _id: '2',
    duration: '1ч 3м',
    image: Image2,
    nameRU: 'Киноальманах «100 лет дизайна»',
  },
  {
    isSaved: false,
    _id: '3',
    duration: '1ч 42м',
    image: Image3,
    nameRU: 'В погоне за Бенкси',
  },
  {
    isSaved: false,
    _id: '4',
    duration: '1ч 21м',
    image: Image4,
    nameRU: 'Баския: Взрыв реальности',
  },
  {
    isSaved: true,
    _id: '5',
    duration: '1ч 44м',
    image: Image5,
    nameRU: 'Бег это свобода',
  },
  {
    isSaved: true,
    _id: '6',
    duration: '1ч 37м',
    image: Image6,
    nameRU: 'Книготорговцы',
  },
  {
    isSaved: false,
    _id: '7',
    duration: '1ч 56м',
    image: Image7,
    nameRU: 'Когда я думаю о Германии ночью',
  },
  {
    isSaved: false,
    _id: '8',
    duration: '1ч 59м',
    image: Image8,
    nameRU: 'Gimme Danger: История Игги и The Stooge...',
  },
  {
    isSaved: true,
    _id: '9',
    duration: '1ч 42м',
    image: Image9,
    nameRU: 'Дженис: Маленькая девочка грустит',
  },
  {
    isSaved: false,
    _id: '10',
    duration: '1ч 10м',
    image: Image10,
    nameRU: 'Соберись перед прыжком',
  },
  {
    isSaved: false,
    _id: '11',
    duration: '1ч 4м',
    image: Image11,
    nameRU: 'Пи Джей Харви: A dog called money',
  },
  {
    isSaved: true,
    _id: '12',
    duration: '1ч 7м',
    image: Image12,
    nameRU: 'По волнам: Искусство звука в кино',
  },
];
