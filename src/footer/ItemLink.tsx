import React from 'react';
import s from './ItemLink.module.css';
import {SocialSvgLinkType, SvgSelector} from '../common/components/SvgSelector/SvgSelector';

type ItemLinkPropsType = {
  svgName: SocialSvgLinkType
  link: string
}

export const ItemLink = (props: ItemLinkPropsType) => {
  return (
    <div className={s.item}>
      <SvgSelector svgName={props.svgName}/>
    </div>

  );
};
