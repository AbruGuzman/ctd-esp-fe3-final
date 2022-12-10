import React from 'react'
import dhLogo from '../assets/DH.png'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
    const { stateTheme } = useContextGlobal();
  return (
    <footer className={stateTheme.color}>
        <p>Powered by</p>
        <img src= {dhLogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
