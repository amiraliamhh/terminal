import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { Commander } from '../Commander'
import { Terminal } from '../Terminal'

describe('components - terminal - Commander', () => {
  test('should show content prop in cli-content', () => {
    const content = 'message'
    render(<Commander content={content} />)
    expect(screen.getByTestId('cli-content')).toHaveTextContent(content)
  })

  test('Clicking anywhere in the terminal should focus on command', () => {
    const { container } = render(<Terminal />)
    fireEvent.click(
      container
    )
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  // test('Commander with `acceptInput` prop should be typeable', () => {
  //   const content = 'message'
  //   render(<Commander acceptsInput content={content} />)
    
  // })
})