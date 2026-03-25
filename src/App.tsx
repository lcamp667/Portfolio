import './App.css'
import './components/Container.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import headshot from './assets/headshot.png'
import { Stack } from 'react-bootstrap'
import InAction from './components/InAction'
import Contact from './components/Contact'
import Nav from './components/Navbar'
import { useRef } from 'react'

function App() {
  
  const targetRef = {
    about: useRef<HTMLDivElement>(null),
    works: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollIntoView = {
    about: () => {
      targetRef.about.current?.scrollIntoView({behavior:'smooth'});
    },
    works: () => {
      targetRef.works.current?.scrollIntoView({behavior:'smooth'});
    },
    contact: () => {
      targetRef.contact.current?.scrollIntoView({behavior:'smooth'});
    }
  }

  return (
    <>
      <div className="root">
          <Stack gap={5}>
            <Nav scrollFunc={scrollIntoView}/>
            <section
              ref={targetRef.about}
            >
              <About image={headshot} />
            </section>
            <Skills />
            <section
              ref={targetRef.works}
            >
              <Projects />
            </section>
            <InAction />
            <section
              ref={targetRef.contact}
            >
              <Contact />
            </section>
          </Stack>
      </div>
    </>
  )
}

export default App