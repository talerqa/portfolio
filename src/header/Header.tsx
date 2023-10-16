import React, {useState} from 'react';
import s from './Header.module.scss'
import {Nav} from './nav/Nav';
import {SvgSelector} from 'common/components/svgSelector/SvgSelector';
import {NavLinksType, SocialLinksType} from 'app/state';
import {BurgerNav} from './burgerNav/BurgerNav';

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
        <BurgerNav navLinks={props.navLinks} openBurgerMenu={openBurgerMenu}
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
              ? <svg className={s.svgItem} width="45px" height="45px"
                     viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" strokeWidth="2"
                      strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" strokeWidth="2"
                      strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2"
                      strokeLinecap="round"/>
              </svg>
              : <svg className={s.svgItem} width="45px" height="45px"
                     viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                   strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M5 5L19 19M5 19L19 5" stroke="#000000"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </g>
              </svg>}
          </a>
        </button>
      </div>
    </div>
  );
};
