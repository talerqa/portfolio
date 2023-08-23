import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll';
import {NavLinksType} from 'app/state';

type PropsType = {
  navLinks: Array<NavLinksType>
}

export const Nav = (props: PropsType) => {
  return (<nav className={s.nav}>
    {props.navLinks.map((link, index) => {
      return (
        <li className={s.item} key={index}>
          <Link
            to={`${link.navHref}`}
            activeClass={s.active}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={s.link}>
            {link.navTitle}
          </Link>
        </li>)
    })}
  </nav>);
};

