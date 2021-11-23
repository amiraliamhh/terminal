import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Terminal } from '../Terminal'

describe('components - terminal - Terminal', () => {
  test('Clicking anywhere in the terminal should focus on InputLine', () => {
    const { container } = render(<Terminal />)
    fireEvent.click(
      container
    )
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  test('Should be focused on InputLine by default', () => {
    render(<Terminal />)
    expect(screen.getByRole('textbox')).toHaveFocus()
  })
})
