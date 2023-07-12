import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Contact.module.scss'
import {Title} from '../common/components/title/Title';
import {ItemLink} from '../footer/ItemLink';
import {SocialLinksType} from '../app/state';

type ContactPropsType = {
  state: Array<SocialLinksType>
}

export const Contact = (props: ContactPropsType) => {
  return (
    <div className={s.contactBlock}>
      <div className={styleContainer.container + ' ' + s.container}>
        <Title title={'Get In Touch'}/>
        <div className={s.contactInfo}>
          <div className={s.contactFollow}>
            <p className={s.followHire}>
              Hire me, I will be glad to work with you if my skills and experience suit you. Share as much info, as possible so we can get the most out of our first catch-up.Willing to talk over the phone or in person.
            </p>
            <h3 className={s.followTitle}>Follow me:</h3>
            <p className={s.followPhone}>+375-29-754-00-87</p>
            <p className={s.followEmail}>talerqa@gmail.com</p>
            <div className={s.items}>
              {
                props.state.map(itemLink => {
                  return <ItemLink svgName={itemLink.svgName}
                                   link={itemLink.href}/>
                })
              }
            </div>
          </div>
          <div className={s.contactForm}>
            <h3 className={s.formTitle}>Send me a note</h3>
            <form className={s.form}>
              <div className={s.inputName}>
                <input className={s.input} type="text" placeholder={'Name'}/>
                <input className={s.input} type="text" placeholder={'Email'}/>
              </div>
              <textarea className={s.textarea} required placeholder={'Tell us more about your needs........'}>
            </textarea>
            </form>
            <button type={'submit'} className={s.buttonSend}>
              <span>Send</span>
            </button>
          </div>
        </div>

      </div>
    </div>

  );
};

