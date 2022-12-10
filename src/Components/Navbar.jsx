import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const TYPES = {
  THEME_LIGHT: "SET_LIGHT",
  THEME_DARK: "SET_DARK",
}; 

const Navbar = () => {
    const {stateTheme, dispatchTheme}= useContextGlobal();
    const handleChangeTheme = () => {
      stateTheme.theme === (stateTheme.theme = '')
      ? dispatchTheme({ type: TYPES.SET_DARK})
      : dispatchTheme({ type: TYPES.SET_LIGHT})
    };

  return (
    <nav className={stateTheme.theme}>
      <Link to='/'>Home</Link>
      <Link to='/contacto'>Contacto</Link>
      <Link to='/favs'>Favs</Link>

      <>
        {stateTheme.theme === "" ? (
          <button onClick={handleChangeTheme}>TEMA OSCURO</button>
        ) : (
          <button onClick={handleChangeTheme}>TEMA CLARO</button>
        )}
      </>
    </nav>
  )
}

export default Navbar