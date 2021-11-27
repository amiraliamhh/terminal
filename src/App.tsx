import { Terminal } from 'src/components/terminal'
import { Router, Route } from 'src/components/router'

export const App = () => {
  return (
    <>
      <Router>
        <Route path='/'>
          <Terminal />
        </Route>
      </Router>
    </>
  )
}
