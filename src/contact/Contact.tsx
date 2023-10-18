import React, {useState} from 'react';
import s from './Contact.module.scss'
import {Title} from 'common/components/title/Title';
import {ItemLink} from 'footer/ItemLink';
import {SocialLinksType} from 'app/state';
import {useForm} from 'react-hook-form';
import {Button} from 'common/components/button/Button';
import emailjs from '@emailjs/browser';

type ContactPropsType = {
  state: Array<SocialLinksType>
}

type FormData = {
  name: string
  email: string
  message: string
};

export const Contact = (props: ContactPropsType) => {
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState<'sending' | 'send' | 'has-been-sent'>('sending');

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    emailjs.init('Zau9eVPlrX4LfuA0X')
    const serviceId = 'service_r86uw7m';
    const templateId = 'template_67a8rxf';
    setSending('sending')
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        message: data.message,
      })

      setSending('send')
      new Promise(() => setTimeout(() => {
        setSending('has-been-sent')
      }, 1700));
    } catch (e: any) {
      throw new Error(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="contact" className={s.contactBlock}>
      <div className={s.container}>
        <Title title={'Get In Touch'}/>
        <div className={s.contactInfo}>
          <div className={s.contactFollow}>
            <p className={s.followHire}>
              Hire me, I will be glad to work with you if my skills and
              experience suit you. Share as much info, as
              possible so we can get the most out of our first catch-up.Willing
              to talk over the phone or in person.
            </p>
            <h3 className={s.followTitle}>FOLLOW ME:</h3>
            <a href="tel:+375297540087"
               className={s.followPhone}>+375-29-754-00-87</a>
            <a href="mailto:talerqa@gmail.com"
               className={s.followEmail}>talerqa@gmail.com</a>
            <div className={s.items}>
              {
                props.state.map((itemLink, index) => {
                  return <ItemLink
                    key={index}
                    svgName={itemLink.svgName}
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
                       {...register('name', {
                         required: true,
                         minLength: 2,
                         maxLength: 40,
                       },)}
                />
                <input className={s.input}
                       type="text"
                       placeholder={'Email'}
                       {...register('email', {
                         required: true,
                         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                       })}/>
              </div>
              <div className={s.error}>
                {errors.name?.type === 'required' || errors.name?.type === 'maxLength' || errors.name?.type === 'minLength' || errors.name?.type === 'pattern' ?
                  <span role="alert"
                        className={s.errorName}>Name is required</span> : null}

                {errors.email?.type === 'required' || errors.email?.type === 'pattern' ?
                  <span role="alert"
                        className={s.errorEmail}>Email is required</span> : null}
              </div>
              <textarea className={s.textarea}
                        placeholder={'Tell us more about your needs........'}
                        {...register('message', {
                          required: true,
                          minLength: 10
                        })}>
                  </textarea>
              <Button title={'Send'} type={'submit'}
                      disabled={loading}></Button>
            </form>
            {sending === 'send' &&
                <div className={s.sendingMail}>Your message has been sent</div>}
            {sending === 'has-been-sent' && <></>}
            {errors.message?.type === 'required' || errors.message?.type === 'minLength' ?
              <p role="alert" className={s.errorMessage}>
                Please, enter your message at least 10 characters
                long</p> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

