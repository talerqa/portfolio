import React from 'react';
import s from './Project.module.scss';

type ProjectProps = {
  style: React.CSSProperties
  title: string
  description: string
}

export const Project = (props: ProjectProps) => {
  return (
    <div className={s.project}>
      <div className={s.image} style={props.style}>
        <button className={s.button}>View</button>
      </div>
      <div className={s.information}>
        <h4 className={s.title}>{props.title}</h4>
        <p className={s.description}>{props.description}</p>
      </div>
    </div> 
  );
};
