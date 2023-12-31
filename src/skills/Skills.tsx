import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from 'common/components/title/Title';
import {SkillsType} from 'app/state';

type SkillsPropsType = {
  state: Array<SkillsType>
}

export const Skills = (props: SkillsPropsType) => {
  return (
    <div id="skills" className={s.skillsBlock}>
      <div className={s.skillsContainer}>
        <Title title={'Skills'}/>
        <div className={s.skills}>
          {props.state.map((skill, index) => {
            return <Skill
              key={index}
              title={skill.title}
              svgName={skill.svgName}
              description={skill.description}/>
          })}
        </div>
      </div>
    </div>
  );
};

