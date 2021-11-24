import { useState, useRef } from 'react'
import { useOutsideClick } from 'src/hooks'
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
  const dropdownContainer = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setOpen(false)
  }

  useOutsideClick({
    onOutsideClick: closeDropdown,
    containerRef: dropdownContainer,
  })

  return (
    <>
      <div ref={dropdownContainer} className='dropdown'>
        <button role='menu' className='dropdown__title-btn' onClick={toggleDropdown}>
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
