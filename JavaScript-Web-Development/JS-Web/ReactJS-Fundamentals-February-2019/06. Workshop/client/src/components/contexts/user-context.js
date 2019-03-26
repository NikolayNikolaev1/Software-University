import { createContext } from 'react';

const defaultUserState = {
  roles: [],
  username: "",
  updateUser() {},
  isLoggedIn: false
};

const { Consumer: UserConsumer, Provider: UserProvider } = createContext(defaultUserState);

export {
    UserConsumer,
    UserProvider,
    defaultUserState
};