import React from 'react'
import { Header, Image } from 'semantic-ui-react';
import '../../styles.css';

const AppHeader = () => (
  <Header as='div' className="main-header">
    <Header as='h2'>
      <Image circular src='https://cdn.iconosquare.com/themes/2018-logged/img/icono-logo-white.svg?v=0.1.014' /> <span className="header-text">iconosquare</span>
    </Header>
  </Header>
)

export default AppHeader