import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={s.contactBlock}>
      <div className={styleContainer.container+ ' ' + s.container}>
          <h3 className={s.title}>Contact</h3>
          <form className={s.form}>
            <input className={s.input} type="text"/>
            <input className={s.input} type="text"/>
            <textarea className={s.textarea}>
            </textarea>
          </form>
          <button className={s.buttonSend}>
            <span>Send</span>
          </button>
        </div>
    </div>
  );
};

