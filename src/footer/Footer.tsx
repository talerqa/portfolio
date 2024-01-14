import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {
  return (<div className={s.footerBlock}>
    <div className={s.footerContainer}>
      <div className={s.information}>
        <p className={s.developed}>Developed by Aleksei Tarelko</p>
      </div>
    </div>
  </div>);
};

