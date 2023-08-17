import React, {useState} from 'react';
import s from './Contact.module.scss'
import {Title} from '../common/components/title/Title';
import {ItemLink} from '../footer/ItemLink';
import {SocialLinksType} from '../app/state';
import {useForm} from 'react-hook-form';
import {Button} from '../common/components/button/Button';
import {Fade} from 'react-awesome-reveal';
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
  const [sending, setSending] = useState('');


  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    emailjs.init('Zau9eVPlrX4LfuA0X')
    const serviceId = 'service_r86uw7m';
    const templateId = 'template_67a8rxf';
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      setSending('sended')
      new Promise(resolve => setTimeout((resolve)=>{
        setSending('succeeded')
      }, 1700));
    } catch (e: any) {
      throw new Error(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fade>
      <div id="contact" className={s.contactBlock}>
        <div className={s.container}>
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
                           {...register('email', {
                             required: true,
                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                           })}/>
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
                  <Button title={'Send'} type={'submit'}></Button>
                </form>
                {sending === 'sended' && <div style={{background: 'red'}}>Отправлено</div>}
                <div className={s.sendingMail}>Your message has been sent</div>
                {sending === 'succeeded' && <></>}
              </div>
          </div>
          </div>
        </div>
      </Fade>
  );
};

