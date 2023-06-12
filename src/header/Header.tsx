import React from 'react';
import s from './Header.module.css'
import {Nav} from '../nav/Nav';
import {Main} from '../main/Main';

export const Header = () => {
  return (
    <div className={s.header}>
      <Nav/>
    </div>
  );
};

export default Header;