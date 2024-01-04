import { createContext } from 'react';

const CurrentUserContext = createContext({ name: 'Виталий', email: 'mail@yandex.ru' });

export default CurrentUserContext;
