import React from 'react';
import s from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css';

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerСontainer + ' ' + stylesContainer.container}>
        <div className={s.information}>
          <span>Aleksei Tarelko</span>
          <div className={s.items}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <span className={s.copyright}>Copyright © 2023. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

