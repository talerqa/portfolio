import React from 'react';
import stylesContainer from './../common/styles/Container.module.css'
import s from './Header.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerСontainer + ' ' + stylesContainer.container}>
        <Nav/>
      </div>
    </div>
  );
};
