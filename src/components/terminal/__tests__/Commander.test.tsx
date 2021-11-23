import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { InputLine } from '../commander'

describe('components - terminal - InputLine', () => {
  test('should show content prop in cli-content', () => {
    const content = 'message'
    render(<InputLine content={content} />)
    expect(screen.getByTestId('cli-content')).toHaveTextContent(content)
  })
})
