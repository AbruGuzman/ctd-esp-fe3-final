import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const initialState = { color: 'light' };

export const ContextGlobal = createContext(undefined);

const reducerTheme = (state, action) => {
  switch (action.type) {
    case 'SET_LIGHT':
      return { ...state.theme = "" };
    case 'SET_DARK':
      return { ...state.theme = 'dark'};
    default: {
      throw new Error();
    }
  }};

const initialFavState = []

const  favsReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV': {
      return[...state, action.payload];
  }
  case 'REMOVE_FAV': {
      return state.filter((i) => i.id !== action.payload);
}
}};


export const ContextProvider = ({ children }) => {
  const [dents, setDents] = useState([])
  const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState)
  const [stateFavs, dispatchFav]= useReducer(favsReducer, initialFavState, initFav)

    function initFav(initialFavState) {
      return localStorage.getItem("favs")
        ? JSON.parse(localStorage.getItem("favs")) 
        : initialFavState;
    }

  useEffect(()=> {
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => setDents(res.data));
  });
    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])
    
    return (
      <ContextGlobal.Provider 
        value={{
          dents,
          setDents,
          stateTheme,
          dispatchTheme,
          stateFavs,
          dispatchFav
        }}>
          {children}
        </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () =>{
  return useContext(ContextGlobal)
}