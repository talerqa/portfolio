import React from 'react';
import s from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css';
import {ItemLink} from './ItemLink';

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerСontainer + ' ' + stylesContainer.container}>
        <div className={s.information}>
          <span>Aleksei Tarelko</span>
          <div className={s.items}>
            <ItemLink/>
            <ItemLink/>
            <ItemLink/>
            <ItemLink/>
            <ItemLink/>
            <ItemLink/>
            <ItemLink/>
          </div>
          <span className={s.copyright}>Copyright © 2023. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

