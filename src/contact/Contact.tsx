import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Contact.module.scss'
import {Title} from '../common/components/title/Title';
import {ItemLink} from '../footer/ItemLink';
import {SocialLinksType} from '../app/state';
import {useForm} from 'react-hook-form';
import {Button} from '../common/components/Button/Button';

type ContactPropsType = {
  state: Array<SocialLinksType>
}

type FormData = {
  name: string
  email: string
  message: string
};

export const Contact = (props: ContactPropsType) => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={s.contactBlock}>
      <div className={styleContainer.container + ' ' + s.container}>
        <Title title={'Get In Touch'}/>
        <div className={s.contactInfo}>
          <div className={s.contactFollow}>
            <p className={s.followHire}>
              Hire me, I will be glad to work with you if my skills and experience suit you. Share as much info, as
              possible so we can get the most out of our first catch-up.Willing to talk over the phone or in person.
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
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.inputName}>
                <input className={s.input}
                       type="text"
                       placeholder={'Name'}
                       {...register('name', {required: true, minLength: 2, maxLength: 20})}
                />
                <input className={s.input}
                       type="text"
                       placeholder={'Email'}
                       {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
              </div>
              {errors.name?.type === 'required' || errors.name?.type === 'maxLength' || errors.name?.type === 'minLength' &&
                <p role="alert">Name is required</p>}
              {errors.email?.type === 'required' || errors.email?.type === 'pattern' &&
                <p role="alert">Email is required</p>}
              <textarea className={s.textarea} required
                        placeholder={'Tell us more about your needs........'}
                        {...register('message', {required: true})}>
              </textarea>
              {errors.message?.type === 'required' && <p role="alert">Please, enter your message</p>}
              <button type="submit" className={s.buttonSend}>
                <Button title={'Send'}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

