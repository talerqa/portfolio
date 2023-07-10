import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import s from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import todoImg from './../assets/img/todolist.png'
import socialImg from './../assets/img/socialNetwork.png'


export const Projects = () => {
  const todoListDiv = {
    backgroundImage: `url(${todoImg})`,
  };
  const socialNetworkDiv = {
    backgroundImage: `url(${socialImg})`,
  };

  return (
    <div className={s.projectBlock}>
      <div className={s.projectContainer + ' ' + styleContainer.container}>
        <Title title={'My Work'}/>
        <div className={s.projects}>
          <Project
            style={socialNetworkDiv}
            title={'Social network'}
            description={'An online platform that is used for communication, dating, creating social relationships between people with similar interests or offline connections, as well as for entertainment...'}/>
          <Project
            style={todoListDiv}
            title={'TodoList'}
            description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>


        </div>
      </div>
    </div>
  );
};

