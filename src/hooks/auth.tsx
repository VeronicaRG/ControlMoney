import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../Services';

interface AuthProvidersProps {
  children: ReactNode;
}

type AuthContextProps = {
  setUser: (user: User) => void;
  user?: User;
};

type User = {
  nickname: string;
  email: string;
  token: string;
};

// {
//   // email: 'Veronica@gmail.com',
//   // nickname: 'Vrg',
//   // token:
//   //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlZlcm9uaUBnbWFpbC5jb20iLCJpYXQiOjE2NTAwNDY2OTV9.8XxHeAb4nHtXZcgBGtdlj6bPMvD4RL83DyYnzgWTEwc',
// }

export const AuthContext = createContext<AuthContextProps>({setUser: () => {}});

function AuthProvider({children}: AuthProvidersProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api.defaults.headers.Authorization = user?.token
      ? `Bearer ${user?.token}`
      : undefined;
  }, [user]);

  return (
    <AuthContext.Provider value={{setUser, user}}>
      {children}
    </AuthContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useUserContext};
