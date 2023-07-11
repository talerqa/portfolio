import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <li className={s.item}><a className={s.link + ' ' + s.active} href="#">Home</a>
      </li>
      <li className={s.item}><a className={s.link} href="#">About</a>
      </li>
      <li className={s.item}><a className={s.link} href="#">Skills</a>
      </li>
      <li className={s.item}><a className={s.link} href="#">Projects</a>
      </li>
      <li className={s.item}><a className={s.link} href="#">Contact</a>
      </li>
    </nav>
  );
};

