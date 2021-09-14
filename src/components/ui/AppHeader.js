import React from 'react'
import { Header } from 'semantic-ui-react';
import '../../styles.css';
import logo from '../../icono-logo-white.svg'
const AppHeader = () => (
  <>
    <Header as='h2' image={logo} content='iconosquare' />
  </>
)

export default AppHeader