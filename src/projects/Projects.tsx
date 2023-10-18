import React from 'react';
import s from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from 'common/components/title/Title';
import {ProjectsType} from 'app/state';

type PropsType = {
  state: Array<ProjectsType>
}

export const Projects = (props: PropsType) => {
  return (<div id="projects" className={s.projectBlock}>
    <div className={s.projectContainer}>
      <Title title={'My Work'}/>
      <div className={s.projects}>
        {props.state.map((project, index) => {
          return <Project
            key={index}
            style={project.backgroundImage}
            title={project.title}
            description={project.description}
            href={project.href}
            hrefLinkToCode={project.hrefLinkToCode}/>
        })}
      </div>
    </div>
  </div>);
};

