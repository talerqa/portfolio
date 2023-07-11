import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Contact.module.scss'
import {Title} from '../common/components/title/Title';

export const Contact = () => {
  return (
    <div className={s.contactBlock}>
      <div className={styleContainer.container+ ' ' + s.container}>
        <Title title={'Get In Touch'}/>
        <form className={s.form}>
          <input className={s.input} type="text"/>
          <input className={s.input} type="text"/>
          <textarea className={s.textarea}>
            </textarea>
        </form>
          <button type={'submit'} className={s.buttonSend}>
            <span>Send</span>
          </button>
        </div>
    </div>
  );
};

