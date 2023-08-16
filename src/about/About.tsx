import React from 'react';
import s from './About.module.scss';
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';
import {Fade} from 'react-awesome-reveal';

const About = () => {
  return (

      <Fade>
        <div id="about" className={s.aboutBlock}>
          <div  className={s.container}>
            <Title title={'Know Me More'}/>
            <div className={s.aboutMe}>
              <div className={s.aboutMeSummary}>
                <h2 className={s.aboutMeTitle}>I'm <span className={s.aboutMeName}> Aleksei Tarelko </span> a
                  Frontend
                  Developer</h2>
                <p className={s.aboutMeText}>I'm a developer with specializing in building attractive and user-friendly
                  web
                  applications using React, Redux, TypeScript, JavaScript, HTML&CSS, and SCSS. With a strong understanding
                  of web development principles and best practices, I prioritize writing efficient and scalable code.</p>
                <p className={s.aboutMeText}>Continuously expanding my knowledge and skills is a top priority for me as I
                  strive for continuous growth in my career. I am always eager to take on new challenges and contribute to
                  innovative projects in the front-end development field. I spend my free time reading educational
                  literature, as well as improving my English</p>
              </div>
              <div className={s.aboutMeInfo}>
                <ul className={s.infoList}>
                  <li className={s.infoItem}>
                    <span className={s.infoText}>Name: </span>
                    Aleksei Tarelko
                  </li>
                  <li className={s.infoItem}>
                    <span className={s.infoText}>Email: </span>
                    <a href="mailto:talerqa@gmail.com" className={s.infoEmail}>
                      talerqa@gmail.com
                    </a>
                  </li>
                  <li className={s.infoItem}>
                    <span className={s.infoText}>Age: </span>
                    27
                  </li>
                  <li className={s.infoItem}>
                    <span className={s.infoText}>From: </span>
                    Minsk, Belarus
                  </li>
                </ul>
                <Button title={'Download CV'} href={'#'}/>
              </div>
            </div>
          </div>
        </div>
      </Fade>

  )
    ;
};

export default About;