import { Router, Route } from 'src/components/router'
import { Terminal } from 'src/components/terminal'
import { Resume } from 'src/components/resume'

export const App = () => {
  return (
    <>
      <Router>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Terminal />
        </Route>
      </Router>
    </>
  )
}
