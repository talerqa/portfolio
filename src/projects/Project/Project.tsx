import React from 'react';
import s from './Project.module.css';

export const Project = (props: any) => {
  return (
    <div className={s.project}>
      <div className={s.icon}>{}</div>
      <button className={s.button}>View</button>
      <div className={s.information}>
        <h4 className={s.title}>{props.title}</h4>
        <p className={s.description}>{props.description}</p>
      </div>
    </div>
  );
};

