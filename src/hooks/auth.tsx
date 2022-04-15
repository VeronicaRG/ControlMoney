import React, {createContext, ReactNode, useContext, useState} from 'react';

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

export const AuthContext = createContext<AuthContextProps>({setUser: () => {}});

function AuthProvider({children}: AuthProvidersProps) {
  const [user, setUser] = useState<User>();

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
