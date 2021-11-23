import { Dropdown, DropdownProps } from 'src/components/shared'

export const ToolBar = () => {
  const viewDropdownOptions: DropdownProps = {
    title: 'View',
    items: [
      {
        text: 'Bigger',
        action: () => { /* */ },
      },
      {
        text: 'Smaller',
        action: () => { /* */ },
      },
    ],
  }

  return (
    <div className="top-bar__toolbar">
      <div className='top-bar__toolbar-options'>
        <Dropdown {...viewDropdownOptions} />
        {/* <Dropdown title='Window' /> */}
      </div>
      <h5>Terminal</h5>
      <span></span>
    </div>
  )
}
