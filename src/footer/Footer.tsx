import React from 'react';
import s from './Footer.module.scss'
import {Fade} from 'react-awesome-reveal';


export const Footer = () => {
  return (
    <Fade>
      <div className={s.footerBlock}>
        <div className={s.footerСontainer}>
          <div className={s.information}>
            <p className={s.copyright}>Copyright © 2023. All Rights Reserved.</p>
            <p className={s.developed}>Developed by Aleksei Tarelko</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

