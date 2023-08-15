import React from 'react';
import s from './Footer.module.scss'
import stylesContainer from '../common/styles/Container.module.css';


export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerСontainer}>
        <div className={s.information}>
          <p className={s.copyright}>Copyright © 2023. All Rights Reserved.</p>
          <p className={s.developed}>Developed by Aleksei Tarelko</p>
        </div>
      </div>
    </div>
  );
};

