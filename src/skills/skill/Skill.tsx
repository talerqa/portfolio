import React from 'react';
import s from './Skill.module.css'
import {SvgNameSkillsType, SvgSelector} from '../../common/components/svgSelector/SvgSelector';
import {SkillTitleType} from '../../app/state';

type SkillPropsType = {
  title: SkillTitleType
  description: string
  svgName: SvgNameSkillsType
}

export const Skill = (props: SkillPropsType) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}>
        <SvgSelector svgName={props.svgName}/>
      </div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  );
};

