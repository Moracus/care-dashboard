import {
  createContext,
  useContext,
  useState,
} from "react";

const AppContext = createContext<any>(null);

export const AppProvider = ({children}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState([]);

  const [formSubmissions, setFormSubmissions] =
    useState([]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        formSubmissions,
        setFormSubmissions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () =>
  useContext(AppContext);