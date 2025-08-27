import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('authUser');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      const u = { username };
      setUser(u);
      if (typeof window !== 'undefined') localStorage.setItem('authUser', JSON.stringify(u));
      router.push('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') localStorage.removeItem('authUser');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
