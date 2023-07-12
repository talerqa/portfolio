import React from 'react';
import stylesContainer from './../common/styles/Container.module.css'
import s from './Header.module.scss'
import {Nav} from './nav/Nav';
import {SvgSelector} from '../common/components/SvgSelector/SvgSelector';
import {SocialLinksType} from '../app/state';

type ContactPropsType = {
  state: Array<SocialLinksType>
}


export const Header = (props: ContactPropsType) => {
  console.log(props.state[2].href)
  return (
    <div className={s.headerBlock}>
      <div className={s.headerСontainer + ' ' + stylesContainer.container}>
        <SvgSelector

          svgName={'portfolioSvg'}/>
        <Nav/>
        <div className={s.headerLinks}>
          <a href={props.state[2].href} target="_blank" className={s.link}>
            <SvgSelector svgName={props.state[2].svgName}/>
          </a>
          <a href={props.state[0].href} target="_blank" className={s.link}>
            <SvgSelector

              svgName={props.state[0].svgName}/>
          </a>
          <a href={props.state[4].href} target="_blank" className={s.link}>
            <SvgSelector svgName={props.state[4].svgName}/>
          </a>
        </div>
      </div>
    </div>
  );
};
