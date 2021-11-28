
/* eslint-disable max-len */
import React from 'react'
import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

const Divider = () => <p className='mb-2'>----------</p>

interface XPComponentProps {
  company: string
  position: string | JSX.Element
  website?: string
  achievements: Array<JSX.Element | string>
}

const XPComponent = ({
  company,
  position,
  website,
  achievements,
}: XPComponentProps) => {
  return (
    <div className='xp'>
      <p>
        <span className='xp--title'>Company:</span> {company}
      </p>
      {
        website &&
        <p>
          <span className="xp--title">Company Website: </span>
          <a target='_blank' href={website} rel="noreferrer">{website}</a>
        </p>
      }
      <p>
        <span className="xp--title">Position:</span> {position}
      </p>
      <ul>
        <span className="xp--title">
          Achievements: 
        </span>
        {
          achievements.map((achievement, index) => <li key={index}>{achievement}</li>)
        }
      </ul>
    </div>
  )
}

const XPJabama = <XPComponent
  company='Jabama - Jabama, part of Alibaba Travels, is an online accommodation/hotel booking platform.'
  position={
    <>
      Senior Front-End Developer <small>| full-time | May 2019 - Nov 2021 (2 yrs 7 mos)</small>
    </>
  }
  website='https://www.jabama.com'
  achievements={[
    'Contributed to the development of 4 front-end applications for Jabama, using Vue, Vuex, and Nuxt.js',
    'Optimized Jabama.com for high-performance and fast response time, leading to a 116% increase in lighthouse performance score',
    'Overridden Nuxt.js internal rendering methods to implement a caching system that reduced initial server response time from 1.3s to 0.4s',
    'Designed and developed a WYSIWYG web app for the Marketing team to make the process of creating new landing pages faster and easier. Used Typescript, Vue, Nuxt.js, Nest.js, MongoDB, Elasticsearch, and Redis. The current homepage of jabama.com is one of the pages that are created and maintained using this app',
    'Implemented pixel-perfect components based on UI designs, using Storybook',
    'Mentored other front-end developers through code reviews, pair programming, and mob programming',
    'Helped other team members to get on board with front-end projects and repositories',
    'Worked with Product, UI/UX, and Back-end teams to define new collaboration methods based on a combination of Scrum and Kanban',
    'Held consistent feedback sessions with front-end team members (2- week intervals)',
    'Maintained legacy version of jabama.com and was responsible for fixing critical bugs',
  ]}
/>

const XPLegamart = <XPComponent
  company='Legamart - Legamart enables people to find the most competent Legal Service Professionals for their cases anywhere in the world'
  position={
    <>
      Senior Front-End Developer <small>| contract | Nov 2020 - Jan 2021 (3 mos)</small>
    </>
  }
  website='https://legamart.com/'
  achievements={[
    'Worked with UI/UX team to implement a pixel-perfect landing page for lawyers who want to collaborate with Legamart, using React, React- hooks, Typescript, and Next.js',
    'In collaboration with Product and UI/UX teams, developed a complete product for Legamart named Case Review that enables users to get advice on their legal cases',
    'Developed the front-end of payment system of Legamart using React, React-hooks, Typescript, and Material-UI',
  ]}
/>

const XPArta = <XPComponent
  company='Arta Sarmayeh - Arta Sarmayeh, part of Boursiran, is a stock exchange product that helps investors to find the best opportunities for investment'
  position={
    <>
      Front-End Developer <small>| full-time | Dec 2018 - Jun 2019 (7 mos)</small>
    </>
  }
  website='https://enigma.ir/'
  achievements={[
    'Collaborated with UI/UX team to develop a pixel-perfect single-page application for Enigma Investing using React, Typescript, Redux and Redux-saga',
    'Developed unit tests and E2E tests for the Enigmainvesting web app using Jest, Enzyme, and Cypress',
    'Used common practices such as code-splitting, memoization, and web- workers to make sure enigmainvesting.ir web app is as light-weight and fast as possible',
  ]}
/>

const XPBitooman = <XPComponent
  company='Bitooman is a cryptocurreny exchange that allows users to easily trade their cryptocurrency assets'
  position={
    <>
      Front-End Developer <small>| full-time | Jan 2018 - Dec 2018 (1 yr)</small>
    </>
  }
  achievements={[
    'Designed and developed front-end of Bitooman customer panel using Angular 5 and Typescript',
    'Contributed to the development of Bitooman admin panel using React and Redux',
    'Contributed to the development of back-end systems of Bitooman using Node.js, Express, Typescript, MongoDB, and Redis',
    'Took responsibility for setting up and managing production environment (VPS, Ubuntu 14)',
    'Installed and set up Gitlab CE for the company',
    'Introduced Scrum to the company and took responsibility for holding daily meetings and planning sessions',
  ]}
/>

const xps: JSX.Element[] = [
  XPJabama,
  XPLegamart,
  XPArta,
]

export const xpAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    let content: string | JSX.Element
    if (args.args.n && parseInt(args.args.n as string) < 1) {
      throw new Error('Error: argument n must be and integer larger than 0.')
    }
    if (!args.args.n) {
      content = <>{xps.map((xp, index) =>
        <React.Fragment key={index}>
          {xp}
          {
            index !== xps.length - 1 &&
            <Divider />
          }
        </React.Fragment>
      )}</>
    }
    setLines(prev => [
      ...prev,
      {
        content: 
        content ||
        <p>
          My previous work experiences! (TODO)  
        </p>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
