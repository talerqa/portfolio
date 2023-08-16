import React from 'react';
import s from './Project.module.scss';

type ProjectProps = {
  style: React.CSSProperties
  title: string
  description: string
  href: string
}

export const Project = (props: ProjectProps) => {
  return (

    <a href={props.href} target="_blank" className={s.project}>
      <div className={s.image} style={props.style}>
        <div className={s.button}>

          {/*<a href={props.href} target="_blank" className={s.link} onFocus={()=>{}}>View</a>*/}
        </div>
      </div>
      <div className={s.information}>
        <h4 className={s.title}>{props.title}</h4>
        <p className={s.description}>{props.description}</p>
      </div>
    </a>
  );
};

