import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { Dropdown, DropdownProps } from 'src/components/shared'

describe('Components - shared - dropdown - Dropdown', () => {
  test('Should contain title', () => {
    const title = 'title'
    const { container } = render(<Dropdown title={title} />)
    expect(container).toHaveTextContent(title)
  })

  test('Should open dropdown on click', () => {
    const noop = () => { /* */ }
    const dropdownOptions: Required<DropdownProps> = {
      title: 'title',
      items: [
        {
          text: 'text1',
          action: noop,
        },
        {
          text: 'text2',
          action: noop,
        },
        {
          text: 'text3',
          action: noop,
        },
      ],
    }
    const { container } = render(<Dropdown {...dropdownOptions} />)
    fireEvent.click(container)
    expect(screen.getAllByRole('menuitem')).toHaveLength(dropdownOptions.items.length)
  })
})
