import React from 'react';
import s from './Button.module.scss'
import {Link} from 'react-scroll';

type ButtonPropsType = {
  title: string
  href?: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <Link
      activeClass={s.active} to={`${props.href}`} spy={true} smooth={true} offset={0} duration={500}
      className={s.button}>{props.title}</Link>
  );
};

