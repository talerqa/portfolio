import {SocialSvgLinkType, SvgNameSkillsType} from '../common/components/svgSelector/SvgSelector';
import todoImg from './../assets/img/todolist.png'
import socialImg from './../assets/img/socialNetwork.png'

export const state: StateType = {
  socialLinks: [
    {
      title: 'gitHub',
      href: 'https://github.com/talerqa',
      svgName: 'gitHub'
    },
    {
      title: 'codeWars',
      href: 'https://www.codewars.com/users/talerqa',
      svgName: 'codeWars'
    },
    {
      title: 'linkedin',
      href: 'https://www.linkedin.com/in/talerqa/',
      svgName: 'linkedin'
    },
    {
      title: 'gmail',
      href: 'mailto:talerqa@gmail.com',
      svgName: 'gmail'
    },

    {
      title: 'telegram',
      href: 'https://t.me/talerqa',
      svgName: 'telegram'
    }
  ],
  skills: [
    {
      title: 'React',
      svgName: 'react',
      description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
    },
    {
      title: 'Redux / Redux Toolkit / RTK Query',
      svgName: 'redux',
      description: 'An open source JavaScript library for managing application state.'
    },

    {
      title: 'JavaScript',
      svgName: 'js',
      description: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'
    },
    {
      title: 'TypeScript',
      svgName: 'ts',
      description: 'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.'
    },
    {
      title: 'Formik / React Hook Form',
      svgName: 'formik',
      description: 'A libraries that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more.'
    },
    {
      title: 'Axios',
      svgName: 'axios',
      description: 'An open source library that allows you to make HTTP requests.'
    },
    {
      title: 'Material-ui',
      svgName: 'materialUi',
      description: 'A framework that produces ready-made Google solutions for fast and fairly simple web development.'
    },
    {
      title: 'HTML',
      svgName: 'html',
      description: 'The standard markup language for documents designed to be displayed in a web browser.'
    },
    {
      title: 'CSS',
      svgName: 'css',
      description: 'A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
    },
    {
      title: 'SASS / SCSS',
      svgName: 'sass/scss',
      description: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
    },

    {
      title: 'Storybook',
      svgName: 'storybook',
      description: 'A UI library that can be used to document components. It also allows you to organize and assemble components.'
    },
    {
      title: 'Postman',
      svgName: 'postman',
      description: 'An API platform that allows developers to design, build, test, and iterate their APIs.'
    },

    {
      title: 'Unit Testing',
      svgName: 'unitTesting',
      description: 'The process of programming, checking the correctness of individual modules of the source code of programs.'
    },
    {
      title: 'Git',
      svgName: 'git',
      description: 'A free and open source distributed version control system designed to process any project quickly and efficiently.'
    },
    {
      title: 'Node JS',
      svgName: 'nodeJs',
      description: 'Node.js is an out-of-browser JavaScript runtime that allows you to write server-side code for web pages and web applications.'
    },
  ],
  navLinks: [
    {navTitle: 'Home', navHref: 'main', offset: 0},
    {navTitle: 'About', navHref: 'about', offset: 1},
    {navTitle: 'Skills', navHref: 'skills', offset: 2},
    {navTitle: 'Projects', navHref: 'projects', offset: 5},
    {navTitle: 'Contact', navHref: 'contact', offset: 5},
  ],

  projects: [{
    title: 'People Link',
    description: 'An online platform that is used for communication, dating, creating social relationships between people with similar interests or offline connections, as well as for entertainment',
    href: 'https://talerqa.github.io/peoplelink',
    backgroundImage: {backgroundImage: `url(${socialImg})`}
  },
    {
      title: 'Task tracker',
      description: 'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list',
      href: 'https://talerqa.github.io/tasktracker/',
      backgroundImage: {backgroundImage: `url(${todoImg})`}
    },
  ]
}

export type StateType = {
  socialLinks: Array<SocialLinksType>
  skills: Array<SkillsType>
  navLinks: Array<NavLinksType>
  projects: Array<ProjectsType>
}

export type SkillTitleType =
  | 'HTML'
  | 'CSS'
  | 'SASS / SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Redux / Redux Toolkit / RTK Query'
  | 'Axios'
  | 'Git'
  | 'Material-ui'
  | 'Postman'
  | 'Storybook'
  | 'Unit Testing'
  | 'Formik / React Hook Form'
  | 'Node JS'


export type SkillsType = {
  title: SkillTitleType
  svgName: SvgNameSkillsType
  description: string
}

export type SocialLinksType = {
  title: SocialSvgLinkType
  href: string
  svgName: SocialSvgLinkType
}

export type NavLinksType = {
  navTitle: string
  navHref: string
  offset: number
}

export type ProjectsType = {
  title: string
  description: string
  href: string
  backgroundImage: { backgroundImage: string }
}
