// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { IUser } from '../types';

interface AuthContextProps {
  user: IUser | null;
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  setUser: (user: IUser | null) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  authToken: null,
  setAuthToken: () => {},
  setUser: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );

  useEffect(() => {
    // Optionally, fetch user data using the token
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, authToken, setAuthToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
