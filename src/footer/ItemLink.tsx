import React from 'react';
import s from './ItemLink.module.css';
import {SocialSvgLinkType, SvgSelector} from '../common/components/SvgSelector/SvgSelector';

type ItemLinkPropsType = {
  svgName: SocialSvgLinkType
  link: string
}

export const ItemLink = (props: ItemLinkPropsType) => {
  return (
    <a className={s.item} href={props.link}  target="_blank" >
      <SvgSelector svgName={props.svgName}/>
    </a>

  );
};
