import { createContext, useEffect, useState } from "react";
import React, { ReactNode } from "react";
export interface Drink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strInstructions: string;
  strInstructionsIT: string;
}
export interface MyContextValue {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  list: Drink[];
  search: string;
}
export const ThemeContext = createContext<MyContextValue | undefined>(
  undefined
);
interface ContextProps {
  children: ReactNode;
}
const Context: React.FC<ContextProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data.drinks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, [search]);

  const value: MyContextValue = {
    loading,
    setLoading,
    setSearch,
    list,
    search,
  };
  console.log("value of context", value);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default Context;
