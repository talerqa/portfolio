import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
  title: string
  href?: string
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

  return (
  <button type={props.type} className={s.button} disabled={props.disabled} >
    <a className={s.buttonLink}>{props.title}</a>
  </button>
  );
};

