import React, {createContext, ReactNode, useContext, useState} from 'react';

export const AuthContext = createContext([]);

interface AuthProvidersProps {
  children: ReactNode;
}

function AuthProvider({children}: AuthProvidersProps) {
  const [user, setUser] = useState({});

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
