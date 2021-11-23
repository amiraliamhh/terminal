import { useState } from 'react'
import './Dropdown.scss'

interface DropdownItem {
  text: string
  action: () => void
}

export interface DropdownProps {
  title: string
  items?: DropdownItem[]
}

export const Dropdown = (
  {
    title,
    items = [],
  }: DropdownProps
) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <div className='dropdown'>
        <button className='dropdown__title-btn' onClick={toggleDropdown}>
          {title}
        </button>
        {
          open &&
          <div className='dropdown__menu' role='menu'>
            {
              items.map(({ text, action = () => { /* */ } }, index) => 
                <div
                  className='dropdown__menu--item'
                  role='menuitem'
                  key={`m-item-${text}-${index}`}
                  onClick={action}
                >
                  {text}
                </div>
              )
            }
          </div>
        }
      </div>
    </>
  )
}
