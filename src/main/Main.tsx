import React from 'react';
import s from './Main.module.scss'
import {Button} from '../common/components/button/Button';
import {Fade} from 'react-awesome-reveal';
import {TypeAnimation} from 'react-type-animation';

export const Main = () => {
  return (
    <Fade>
      <div id="main" className={s.mainBlock}>
        <div className={s.mainContainer}>
          <div className={s.textBlock}>
            <p className={s.greeting}>Hi There</p>
            <h1 className={s.title}>I'am Aleksei Tarelko</h1>
            <TypeAnimation
              sequence={['a Frontend Developer', 2000, 'JavaScript', 1500, 'React', 1500, 'TypeScript', 1500, 'Redux / Redux Toolkit', 1500, 'Material-UI', 1500, 'Storybook', 1500, 'Node JS', 1500]}
              className={s.skills}
              repeat={Infinity}
            />
            <p className={s.based}>based in Minsk, Belarus</p>
            <button className={s.button}>
              <Button title={'View My Work'} href={'projects'}/>
            </button>
          </div>
          <div className={s.photo}>
            <img className={s.image} alt=""/>
          </div>

        </div>
      </div>
    </Fade>
  );
};

