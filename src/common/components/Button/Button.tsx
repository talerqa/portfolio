import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
  title: string
  href?: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <>
      <a className={s.downloadCv}>{props.title}</a>
    </>
  );
};

