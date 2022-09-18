import { createContext, useState, useEffect } from 'react';

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    fetch('/api/auth/session')
      .then((response) => response.json())
      .then((sessionData) => {
        setSession(sessionData);
      });
  }, []);

  return (
    <SessionContext.Provider
      value={{ session: session, setSession: setSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
