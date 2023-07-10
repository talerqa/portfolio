import React from 'react';
import s from './Title.module.scss'

type TitleProps = {
  title: string
}

export const Title = (props: TitleProps) => {
  return (
    <div className={s.projectsTitle}>
      <h2 className={s.title}>
        {props.title}
        <span className={s.separatorLine}></span>
      </h2>
    </div>
  )
}