import React from 'react';
import s from './Header.module.scss'
import {Nav} from './nav/Nav';
import {SvgSelector} from '../common/components/svgSelector/SvgSelector';
import {SocialLinksType} from '../app/state';

type ContactPropsType = {
  state: Array<SocialLinksType>
}


export const Header = (props: ContactPropsType) => {

  return (
    <div className={s.headerBlock}>
      <div className={s.headerСontainer}>
        <SvgSelector
          svgName={'portfolioSvg'}/>
        <Nav/>
        <div className={s.headerLinks}>
          <a href={props.state[2].href} target="_blank" className={s.link}>
            <SvgSelector svgName={props.state[2].svgName}/>
          </a>
          <a href={props.state[0].href} target="_blank" className={s.link}>
            <SvgSelector svgName={props.state[0].svgName}/>
          </a>
          <a href={props.state[4].href} target="_blank" className={s.link}>
            <SvgSelector svgName={props.state[4].svgName}/>
          </a>
        </div>
        <div className={s.burgerMenu}>
          <a href="#">
            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
