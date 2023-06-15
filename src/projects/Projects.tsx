import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import s from './Projects.module.css'
import {Project} from './Project/Project';

export const Projects = () => {
  return (
    <div className={s.projectBlock}>
      <div className={s.projectContainer + ' ' + styleContainer.container}>
        <h2 className={s.title}>My projects:</h2>
        <div className={s.projects}>
          <Project title={'Social network'} description={'An online platform that is used for communication, dating, creating social relationships between people with similar interests or offline connections, as well as for entertainment...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
          <Project title={'TodoList'} description={'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...'}/>
        </div>
      </div>
    </div>
  );
};

