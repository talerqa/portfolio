import React from 'react';
import stylesContainer from './../common/styles/Container.module.css'
import s from './Header.module.scss'
import {Nav} from './nav/Nav';
import {SvgSelector} from '../common/components/SvgSelector/SvgSelector';



export const Header = () => {
  return (
    <div className={s.headerBlock}>
      <div className={s.headerСontainer + ' ' + stylesContainer.container}>
        <SvgSelector svgName={'portfolioSvg'}/>
        <Nav/>
        <div className={s.headerLinks}>
          <a href="#"  className={s.link}>
            <SvgSelector svgName={'linkedin'}/>
          </a>
          <a href="#" className={s.link}>
            <SvgSelector svgName={'git_hub'}/>
          </a>
          <a href="#" className={s.link}>
            <SvgSelector svgName={'instagram'}/>
          </a>
        </div>
      </div>
    </div>
  );
};
