import React from 'react';
import s from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css';
import {ItemLink} from './ItemLink';
import {SocialLinksType} from '../app/state';

type FooterPropsType = {
  state: Array<SocialLinksType>
}

export const Footer = (props: FooterPropsType) => {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerСontainer + ' ' + stylesContainer.container}>
        <div className={s.information}>
          <span>Aleksei Tarelko</span>
          <div className={s.items}>
            {
              props.state.map(itemLink => {
                return  <ItemLink svgName={itemLink.svgName}
                link={itemLink.href}/>
              })
            }


          </div>
          <span className={s.copyright}>Copyright © 2023. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

