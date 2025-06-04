import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  updateAvatar: (url: string) => void;
  clearUserData: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const defaultUserData: UserData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  avatarUrl: '/images/products/avatar-profile.jpg',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Загрузка данных пользователя из localStorage при инициализации
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedLoginState = localStorage.getItem('isLoggedIn');
    
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    
    if (storedLoginState) {
      setIsLoggedIn(storedLoginState === 'true');
    }
  }, []);

  // Сохранение данных пользователя в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [userData, isLoggedIn]);

  // Обновление данных пользователя
  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  // Обновление аватара пользователя
  const updateAvatar = (url: string) => {
    setUserData(prevData => ({
      ...prevData,
      avatarUrl: url,
    }));
  };

  // Очистка данных пользователя (при выходе из аккаунта)
  const clearUserData = () => {
    setUserData(defaultUserData);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider 
      value={{ 
        userData, 
        updateUserData, 
        updateAvatar, 
        clearUserData, 
        isLoggedIn, 
        setIsLoggedIn 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования контекста пользователя
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 