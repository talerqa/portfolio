import React from 'react';
import s from './Header.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={+s.headerBlock + ' ' + stylesContainer.container}>
        <Nav/>
      </div>
    </div>
  );
};

export default Header;