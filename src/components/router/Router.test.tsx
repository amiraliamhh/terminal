import { act, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router, Route } from './index'

describe('Router', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    const listeners: Array<() => void> = []
    ;(global.window as any).addEventListener = (eventName: string, handler: () => void) => {
      if (eventName === 'popstate') {
        listeners.push(handler)
      }
    }

    Object.defineProperty(global.window.location, '_hash', {
      get () {
        return global.window.location.hash
      },
      set (value) {
        global.window.location.hash = value
        listeners.forEach(listener => {
          listener()
        })
        return value
      },
      configurable: true,
    })

    renderResult = render(
      <Router>
        <Route path='/test1'>
          <div data-testid='test1'>
            test1
          </div>
        </Route>
        <Route path='/test2'>
          <div data-testid='test2'>
            test2
          </div>
        </Route>
        <Route path='/'>
          <div data-testid='default'>
            default
          </div>
        </Route>
      </Router>
    )
  })

  test('Should only render the default route', () => {
    const { getByTestId, queryByTestId } = renderResult

    expect(getByTestId('default')).toBeInTheDocument()
    expect(queryByTestId('test1')).not.toBeInTheDocument()
    expect(queryByTestId('test2')).not.toBeInTheDocument()
  })

  test('Changing hash URL should change the rendered component', () => {
    const { getByTestId, queryByTestId } = renderResult

    expect(queryByTestId('default')).toBeInTheDocument()

    act(() => {
      (global.window.location as any)._hash = '#/test1'
    })

    expect(getByTestId('test1')).toBeInTheDocument()
    expect(queryByTestId('default')).not.toBeInTheDocument()
    expect(queryByTestId('test2')).not.toBeInTheDocument()
  })
})
