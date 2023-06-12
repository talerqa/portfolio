import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={s.skillsContainer + ' ' + styleContainer.container}>
        <h2 className={s.title}>Skills:</h2>
        <div className={s.skills}>
          hello
        </div>
      </div>
    </div>
  );
};

