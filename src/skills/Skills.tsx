import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={s.skillsContainer + ' ' + styleContainer.container}>
        <h2 className={s.title}>Skills:</h2>
        <div className={s.skills}>
          <Skill title={'JS'} description={'Descrsdfksmdflk lksdmflsdfmlksdf mskdlsmdkfiptio nDescrsdfk smdflklksdmf lsdfmlksdfms kdlsmdkfiption'}/>
          <Skill title={'CSS'} description={'Descrsdf ksmdflklksdmf lsdfmlksdfmsk dlsmdkfiption'}/>
          <Skill title={'REACT'} description={'Descrsdfksmdflk lksdmflsdfmlks dfmskdlsmd kfiption Descrsdfksmdfl klksdmflsdfmlksdfm skdlsmdkf iption'}/>
        </div>
      </div>
    </div>
  );
};

