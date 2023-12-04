import React from 'react';
import s from './About.module.scss';
import {Title} from 'common/components/title/Title';


export const About = () => {
  return (<div id="about" className={s.aboutBlock}>
      <div className={s.container}>
        <Title title={'Know Me More'}/>
        <div className={s.aboutMe}>
          <div className={s.aboutMeSummary}>
            <h2 className={s.aboutMeTitle}>I'm <span
              className={s.aboutMeName}> Aleksei Tarelko </span> a
              Frontend
              Developer</h2>
            <p className={s.aboutMeText}>I'm a frontend-developer of experience
              with specializing in building a web applications and interfaces
              using <b> React, Redux (RTK, RTK Query), TypeScript, JavaScript,
                HTML&CSS, and SCSS.</b>
              With
              a strong understanding of web development principles and best
              practices, I prioritize writing efficient and scalable code.</p>
            <p className={s.aboutMeText}>Continuously expanding my knowledge
              and skills is a top priority for me as I
              strive for continuous growth in my career.
              <b> I am always eager to
                take on new challenges and contribute to
                innovative projects in the front-end development field. </b> I
              have a keen interest in mastering <b>Node.js and Next.js.</b>
            </p>
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
          </div>
        </div>
      </div>
    </div>
  )
};
