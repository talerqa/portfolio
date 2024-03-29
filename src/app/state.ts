import {SocialSvgLinkType, SvgNameSkillsType} from '../common/components/svgSelector/SvgSelector';
import todoImg from './../assets/img/todolist.png'
import shopListImg from './../assets/img/shopList.png'
import flashCard from './../assets/img/flash-cards.png'
import crypto from './../assets/img/crypto.png'

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
      title: 'Material-UI / Radix-UI',
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
      title: 'Next JS',
      svgName: 'nextJs',
      description: 'The React Framework for the Web.'
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

  projects: [
    {
      title: 'Card',
      description: 'An application for working with flashcards that help you learn and remember information. You can create your own cards or choose ready-made ones.',
      href: 'https://project-card-ruddy.vercel.app',
      backgroundImage: {backgroundImage: `url(${flashCard})`},
      hrefLinkToCode: 'https://github.com/talerqa/project-card',
      stack: 'TypeScript, React, RTK Query'
    },
    {
      title: 'Shopping list',
      description: 'A platform for managing your shopping list, allowing you to add and interact with products and your cart',
      href: 'https://shop-kappa-vert.vercel.app/',
      backgroundImage: {backgroundImage: `url(${shopListImg})`},
      hrefLinkToCode: 'https://github.com/talerqa/shop',
      stack: 'TypeScript, React, Redux Toolkit, Node Js (Express Js)'
    },
    {
      title: 'Crypto store',
      description: 'An application for obtaining current data and analyzing the cryptocurrency market.',
      href: 'https://crypto-blue-nu.vercel.app/',
      backgroundImage: {backgroundImage: `url(${crypto})`},
      hrefLinkToCode: 'https://github.com/talerqa/crypto',
      stack: 'TypeScript, React, RTK Query'
    },
    {
      title: 'Task tracker',
      description: 'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list',
      href: 'https://talerqa.github.io/tasktracker/',
      backgroundImage: {backgroundImage: `url(${todoImg})`},
      hrefLinkToCode: 'https://github.com/talerqa/tasktracker',
      stack: 'TypeScript, React, Redux Toolkit'
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
  | 'Material-UI / Radix-UI'
  | 'Postman'
  | 'Storybook'
  | 'Unit Testing'
  | 'Formik / React Hook Form'
  | 'Node JS'
  | 'Next JS'


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
  hrefLinkToCode: string
  stack: string
}
