import React, {useState} from 'react';
import s from './Header.module.scss'
import {Nav} from './nav/Nav';
import {SvgSelector} from 'common/components/svgSelector/SvgSelector';
import {NavLinksType, SocialLinksType} from 'app/state';
import {BurgerNav} from './burgerNav/BurgerNav';
import {OpenBurger} from "../assets/svgComponent/openBurger";
import {CloseBurger} from "../assets/svgComponent/closeBurger";

type ContactPropsType = {
  socialLinks: Array<SocialLinksType>
  navLinks: Array<NavLinksType>
}

export const Header = (props: ContactPropsType) => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  const toggleDrawer = (value: boolean) => setOpenBurgerMenu(value)

  return (
    <div className={s.headerBlock}>
      <div className={s.headerContainer}>
        <SvgSelector svgName={'portfolioSvg'}/>
        <Nav navLinks={props.navLinks}/>
        <BurgerNav navLinks={props.navLinks}
                   openBurgerMenu={openBurgerMenu}
                   toggleDrawer={toggleDrawer}/>
        <div className={s.headerLinks}>
          <a href={props.socialLinks[2].href} target="_blank"
             className={s.link}>
            <SvgSelector svgName={props.socialLinks[2].svgName}/>
          </a>
          <a href={props.socialLinks[0].href} target="_blank"
             className={s.link}>
            <SvgSelector svgName={props.socialLinks[0].svgName}/>
          </a>
          <a href={props.socialLinks[4].href} target="_blank"
             className={s.link}>
            <SvgSelector svgName={props.socialLinks[4].svgName}/>
          </a>
        </div>
        <button className={s.burgerMenu}
                onClick={() => toggleDrawer(!openBurgerMenu)}>
          <a>
            {!openBurgerMenu
              ? <OpenBurger className={s.svgItem}/>
              : <CloseBurger className={s.svgItem}/>}
          </a>
        </button>
      </div>
    </div>
  );
};
