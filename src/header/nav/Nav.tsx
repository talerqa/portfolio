import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <li className={s.item}>
        <Link
          activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}
          className={s.link + ' ' + s.active}>
          Home</Link>
      </li>
      <li className={s.item}>
        <Link
          activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
          className={s.link}>About</Link>
      </li>
      <li className={s.item}>
        <Link
          activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}
          className={s.link}>Skills</Link>
      </li>
      <li className={s.item}>
        <Link
          activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}
          className={s.link}>Projects</Link>
      </li>
      <li className={s.item}>
        <Link
          activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}
          className={s.link}>Contact</Link>
      </li>
    </nav>
  );
};

