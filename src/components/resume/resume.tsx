import './Resume.scss'

export const Resume = () => {
  return (
    <div className='resume'>
      <header>
        <h1>Amirali Ameri</h1>
        <div className="contact">
          <p className="b">
            amiraliamhh@gmail.com
          </p>
          <span>•</span>
          <p className="b">
            (+98) 919 091 2275
          </p>‍
          <span>•</span>
          <b>
            <a href="https://www.linkedin.com/in/amiraliameri">
              linkedin.com/in/amiraliameri
            </a>
          </b>
          <span>•</span>
          <p>
            Tehran, Iran
          </p>
        </div>
        <div className="contact">
          <b>
            <a href="https://github.com/amiraliamhh">
              github.com/amiraliamhh
            </a>
          </b>
        </div>
      </header>
      <hr />
      <main>
        <article>
          <section className="summary">
            <h4>ABOUT ME</h4>
            <p>
              I'm a front-end software developer with over 4 years of experience working in cross-functional and agile teams. I'm focused on the entire pipeline of developing a web application, from collaboration with product managers and working on new ideas, to testing, deployment and maintenance. Code reviews and improving the existing code base are part of my daily routine.
            </p>
          </section>
          <section className="mt-2">
            <h4>EXPERIENCE</h4>
            <div className="company">
              <div className="company__info">
                <b>Jabama,</b> <span className="company__position">Senior Front End Developer</span>
                <br />
                <span className="company__presence">
                  May 2019 - Present (2 yrs 3 mos) - Full-time
                </span>
                <p className="t-1">Jabama, part of Alibaba Travels, is an online accommodation/hotel booking platform.</p>
                <ul>
                  <li>
                    Contributed to the development of 4 front-end applications for Jabama, using Vue, Vuex, and Nuxt.js
                  </li>
                  <li>
                    Contributed to the development of a <b>completely re-designed</b> web application for Jabama using Vue, Nuxt.js, and SCSS
                  </li>
                  <li>
                    Analyzed user data and user behavior (Google Analytics/Hotjar) to make the best technical decisions that satisfy customers needs
                  </li>
                  <li>
                    Optimized Jabama.com for high-performance and fast response time, leading to a 116% increase in lighthouse performance score
                  </li>
                  <li>
                    Overridden Nuxt.js internal rendering methods to implement a caching system that reduced initial server response time from 1.3s to 0.4s
                  </li>
                  <li>
                    Implemented internal tools (a testing library from scratch) to ease the process of developing E2E tests for APIs using Typescript and Node.js
                  </li>
                  <li>
                    Designed and developed a WYSIWYG web app for the Marketing team to make the process of creating new landing pages faster and easier. Used Typescript, Vue, Nuxt.js, Nest.js, MongoDB, Elasticsearch, and Redis. The current homepage of jabama.com is one of the pages that are created and maintained using this app
                  </li>
                  <li>
                    Implemented pixel-perfect components based on UI designs, using Storybook
                  </li>
                  <li>
                    Designed, developed, and maintained the Admin Panel of Jabama using Vue, Nuxt, and <b>Bootstrap</b>
                  </li>
                  <li>
                    Contributed to the development of Seach service of jabama.com using Node.js, Nest.js, and Elasticsearch
                  </li>
                  <li>
                    Setup Sentry for error reporting
                  </li>
                  <li>
                    Mentored other front-end developers through code reviews, pair programming, and mob programming
                  </li>
                  <li>
                    Helped other team members to get on board with front-end projects and repositories
                  </li>
                  <li>
                    Worked with Product, UI/UX, and Back-end teams to define new collaboration methods based on a combination of Scrum and Kanban
                  </li>
                  <li>
                    Held consistent feedback sessions with front-end team members (2-week intervals)
                  </li>
                  <li>
                    Maintained legacy version of jabama.com and was responsible for fixing critical bugs
                  </li>
                  <li>
                    Currently working on a gateway micro-service for caching jabama.com most visited pages, using <b>Golang</b>, and <b>message queues</b> (RabbitMQ)
                  </li>
                </ul>
              </div>
            </div>
            <div className="company mt-3">
              <div className="company__info">
                <b>Legamart,</b> <span className="company__position">Front End Developer</span>
                <br />
                <span className="company__presence">
                  Nov 2020 - Jan 2021 (3 mos) - Contract
                </span>
                <p>Legamart enables people to find the most competent Legal Service Professionals for their cases anywhere in the world</p>
                <ul>
                  <li>Worked with UI/UX team to implement a pixel-perfect landing page for lawyers who want to collaborate with Legamart, using React, React-hooks, Typescript, and Next.js</li>
                  <li>In collaboration with Product and UI/UX teams, developed a complete product for Legamart named Case Review that enables users to get advice on their legal cases</li>
                  <li>Developed the front-end of payment system of Legamart using <b>React</b>, <b>React-hooks</b>, <b>Typescript</b>, and Material-UI</li>
                </ul>
              </div>
            </div>
            <div className="company mt-2">
              <div className="company__info">
                <b>Enigma Investing,</b> <span className="company__position">Front End Developer</span>
                <br />
                <span className="company__presence">
                  Dec 2018 - Jun 2019 (7 mos) - Full-time
                </span>
                <p className="t-1">Enigma Investing, part of Boursiran, is a stock exchange product that helps investors to find the best opportunities for investment</p>
                <ul>
                  <li>Collaborated with UI/UX team to develop a pixel-perfect <b>single-page application</b> for Enigma Investing using <b>React</b>, <b>Typescript</b>, <b>Redux</b> and Redux-saga</li>
                  <li>Developed unit tests and E2E tests for the Enigmainvesting web app using Jest, Enzyme, and Cypress</li>
                  <li>Used common practices such as code-splitting, memoization, and web-workers to make sure enigmainvesting.ir web app is as light-weight and fast as possible</li>
                </ul>
              </div>
            </div>
            <div className="company mt-2">
              <div className="company__info">
                <b>Bitooman,</b> <span className="company__position">Front End Developer</span>
                <br />
                <span className="company__presence">
                  Jan 2018 - Dec 2018 (1 yr) - Full-time
                </span>
                <p className="t-1">
                  Bitooman is a cryptocurreny exchange that allows users to easily trade their cryptocurrency assets
                </p>
                <ul>
                  <li>Designed and developed front-end of Bitooman customer panel using Angular 5 and <b>Typescript</b></li>
                  <li>Contributed to the development of Bitooman admin panel using <b>React</b> and <b>Redux</b></li>
                  <li>Contributed to the development of back-end systems of Bitooman using Node.js, Express, Typescript, MongoDB, and Redis</li>
                  <li>Took responsibility for setting up and managing production environment (VPS, Ubuntu 14)</li>
                  <li>Installed and set up Gitlab CE for the company</li>
                  <li>Introduced Scrum to the company and took responsibility for holding daily meetings and planning sessions</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
        <article>
          <section>
            <h4>SKILLS</h4>
            <b><em className="skills-title">Advanced</em></b>
            <hr />
            <p className="skills">
              Javascript, Typescript, React, Redux, Next.js, Vue,
              Nuxt.js, HTML, CSS 3, SASS/SCSS, Bootstrap
            </p>
            <b className="mt-1"><em className="skills-title">Intermediate</em></b>
            <hr />
            <p className="skills">
              Jest, Testing Library, Webpack, Node.js, Express.js, Nest.js, Git
            </p>
            <b className="mt-1"><em className="skills-title">Novice</em></b>
            <hr />
            <p className="skills">
              E2E Testing (Cypress),
              Functional Programming,
              <b>Next.js</b>,
              <b>Babel</b>,
              MongoDB,
              Redis,
              Golang,
              Gitlab CI/CD,
              Docker
              <b>Kubernetes</b>
            </p>
          </section>
          <section className="mt-2 open-source">
            <h4>OPEN SOURCE</h4>
            <a href="https://github.com/farnabaz/nuxt-dto">
              <b><em className="skills-title">farnabaz/nuxt-dto</em></b>
            </a>
            <hr />
            <p>A
              Nuxt.js module developed to
              ease the communication
              between front-end apps and REST APIs</p>
              
            <a className="mt-1" href="https://github.com/jabama-co/vue-carousel">
              <b><em className="skills-title">jabama-co/vue-carousel</em></b>
            </a>
            <hr />
            <p>
              Cloned from the popular
              vue-carousel repo, with
              some additional features
              such as vertical and
              nested carousels
            </p>

            <a className="mt-1" href="https://github.com/arashrasoulzadeh/GoStreestTest">
              <b><em className="skills-title">arashrasoulzadeh/GoStreestTest</em></b>
            </a>
            <hr />
            <p>A tool for
              stress testing REST
              endpoints. Written in Golang</p>
          </section>
          <section className="mt-2 langs">
            <h4>Languages</h4>
            <p>
              • English <br /> <span className="f-12">(Professional Working Proficiency)</span>
            </p>
            <p className="mt-1">
              • Persian <span className="f-12-only">(Native)</span>
            </p>
          </section>
          <section className="other">
            <h4>Other</h4>
            <p>
              In my free time, I usually:
            </p>
            <p className="free t-1">• Solve web design challenges on cssbattle.dev</p>
            <p className="free t-1">• Study books and watch video tutorials mostly about Software Architecture, DS, and Algorithms</p>
          </section>
        </article>
      </main>
    </div>
  )
}