import React from 'react';
import s from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {SkillsType} from '../app/state';

type SkillsPropsType = {
  state: Array<SkillsType>
}

export const Skills = (props: SkillsPropsType) => {
  return (
    <div className={s.skillsBlock}>
      <div className={s.skillsContainer + ' ' + styleContainer.container}>
        <Title title={'Skills'}/>
        <div className={s.skills}>
          {
            props.state.map(skill => {
              return <Skill title={skill.title}
                            svgName={skill.svgName}
                            description={skill.description}/>
            })
          }


        </div>
      </div>
    </div>
  );
};

