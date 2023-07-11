import {SocialSvgLinkType, SvgNameSkillsType} from '../common/components/SvgSelector/SvgSelector';

export const state: StateType = {
  socialLinks: [
    {
      title: 'gitHub',
      href: 'https://github.com/talerqa',
      svgName: 'gitHub'
    },
    {
      title: 'instagram',
      href: 'https://www.instagram.com/talerqa/',
      svgName: 'instagram'
    },
    {
      title: 'linkedin',
      href: 'https://www.linkedin.com/in/aleksei-tarelko-607862259/',
      svgName: 'linkedin'
    },
    {
      title: 'codeWars',
      href: 'https://www.codewars.com/users/talerqa',
      svgName: 'codeWars'
    }
  ],
  skills: [
    {
      title: 'React',
      svgName: 'react',
      description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
    },
    {
      title: 'Redux / Redux Toolkit',
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
      title: 'Formik',
      svgName: 'formik',
      description: 'A library that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more.'
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
      title: 'SASS/SCSS',
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
  ]
}
export type SkillTitleType =
  | 'HTML'
  | 'CSS'
  | 'SASS/SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Redux / Redux Toolkit'
  | 'Axios'
  | 'Git'
  | 'Material-ui'
  | 'Postman'
  | 'Storybook'
  | 'Unit Testing'
  | 'Formik'
  | 'Node JS'


export type StateType = {
  socialLinks: Array<SocialLinksType>
  skills: Array<SkillsType>
}
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