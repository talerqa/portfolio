import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
  return (
    <div className={s.nav}>
      <a className={s.link} href="src/header/nav/Nav">Home</a>
      <a className={s.link} href="src/header/nav/Nav">About</a>
      <a className={s.link} href="src/header/nav/Nav">Skills</a>
      <a className={s.link} href="src/header/nav/Nav">Projects</a>
      <a className={s.link} href="src/header/nav/Nav">Contact</a>
    </div>
  );
};

