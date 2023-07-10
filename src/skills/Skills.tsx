import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={s.skillsContainer + ' ' + styleContainer.container}>
        <Title title={'Skills'}/>
        <div className={s.skills}>
          <Skill title={'JS'}
                 description={'Descrsdfksmdflk lksdmflsdfmlksdf mskdlsmdkfiptio nDescrsdfk smdflklksdmf lsdfmlksdfms kdlsmdkfiption'}/>
          <Skill title={'JS'}
                 description={'Descrsdfksmdflk lksdmflsdfmlksdf mskdlsmdkfiptio nDescrsdfk smdflklksdmf lsdfmlksdfms kdlsmdkfiption'}/>
          <Skill title={'JS'}
                 description={'Descrsdfksmdflk lksdmflsdfmlksdf mskdlsmdkfiptio nDescrsdfk smdflklksdmf lsdfmlksdfms kdlsmdkfiption'}/>
          <Skill title={'JS'}
                 description={'Descrsdfksmdflk lksdmflsdfmlksdf mskdlsmdkfiptio nDescrsdfk smdflklksdmf lsdfmlksdfms kdlsmdkfiption'}/>
          <Skill title={'CSS'} description={'Descrsdf ksmdflklksdmf lsdfmlksdfmsk dlsmdkfiption'}/>
          <Skill title={'REACT'}
                 description={'Descrsdfksmdflk lksdmflsdfmlks dfmskdlsmd kfiption Descrsdfksmdfl klksdmflsd fmlksdfm skdlsmdkf iption'}/>
        </div>
      </div>
    </div>
  );
};

