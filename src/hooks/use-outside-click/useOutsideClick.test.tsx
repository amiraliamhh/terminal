import { useRef } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useOutsideClick } from './useOutsideClick'

interface TestClickBoxProps {
  outsideClickHandler: () => void
}

const TestClickBox = ({ outsideClickHandler }: TestClickBoxProps) => {
  const elRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    onOutsideClick: outsideClickHandler,
    containerRef: elRef,
  })

  return (
    <div
      ref={elRef}
      data-testid='click-box'
      style={{ width: '200px', height: '200px' }}
    />
  )
}

describe('useOutsideClick hook', () => {
  test('Outside click should trigger onOutsideClick', () => {
    const clickBoxProps: TestClickBoxProps = {
      outsideClickHandler: () => { /* */ },
    }
    const spy = jest.spyOn(clickBoxProps, 'outsideClickHandler')
    render(
      <div>
        <TestClickBox {...clickBoxProps} />
        <div data-testid='outside-box' style={{ width: '200px', height: '200px' }} />
      </div>
    )
    fireEvent.click(screen.getByTestId('outside-box'))
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
