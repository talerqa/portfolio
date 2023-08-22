import React from 'react';
import s from './Main.module.scss'
import {Fade} from 'react-awesome-reveal';
import {TypeAnimation} from 'react-type-animation';
import {Link} from 'react-scroll';

export const Main = () => {
  return (

      <Fade>
        <div id="main" className={s.mainBlock}>
          <div className={s.mainContainer}>
            <div className={s.textBlock}>
              <p className={s.greeting}>Hi There</p>
              <h1 className={s.title}>I'am Aleksei Tarelko</h1>
              <TypeAnimation
                sequence={['a Frontend Developer', 2000, 'JavaScript', 1500, 'React', 1500, 'TypeScript', 1500, 'Redux / Redux Toolkit / RTK Query', 1500, 'Material-UI', 1500, 'Storybook', 1500, 'Node JS', 1500]}
                className={s.skills}
                repeat={Infinity}
              />
              <p className={s.based}>based in Minsk, Belarus</p>
              <button className={s.button}>
                <Link
                  activeClass={s.active} to='projects' spy={true} smooth={true} offset={5} duration={500}
                  className={s.buttonLink}>View My Work</Link>
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

