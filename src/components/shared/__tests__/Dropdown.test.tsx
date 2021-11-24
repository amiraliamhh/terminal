import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
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
    const { getByRole, getAllByRole } = render(<Dropdown {...dropdownOptions} />)
    fireEvent.click(getByRole('menu'))
    expect(getAllByRole('menuitem')).toHaveLength(dropdownOptions.items.length)
  })
})
