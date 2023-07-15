import React from 'react';
import s from './Main.module.scss'
import styleContainer  from  './../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.mainContainer + ' ' + styleContainer.container}>
        <div className={s.textBlock}>
          <p className={s.greeting}>Hi There</p>
          <h1 className={s.title}>I'am Aleksei Tarelko</h1>
          <p className={s.skills}>a Frontend Developer</p>
          <p className={s.based}>based in Minsk, Belarus</p>
        </div>
        <div className={s.photo}>
          <img className={s.image} src="" alt=""/>
        </div>
      </div>
    </div>
  );
};

