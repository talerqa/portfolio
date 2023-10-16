import React from 'react';
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import {NavLinksType} from 'app/state';

type PropsType = {
  navLinks: Array<NavLinksType>
  openBurgerMenu: boolean
  toggleDrawer: (value: boolean) => void
}

export const BurgerNav = (props: PropsType) => {
  return (<nav className={props.openBurgerMenu ? s.nav + ' ' + s.show : s.nav}>
    {props.navLinks.map((link, index) => {
      return (<li key={index} className={s.item}>
        <Link
          to={`${link.navHref}`}
          activeClass={s.active}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={s.link}
          onClick={() => props.toggleDrawer(false)}>
          {link.navTitle}
        </Link>
      </li>)
    })}
  </nav>);
};
