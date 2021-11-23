import { ToolBar } from './ToolBar'
import { Tabs } from './Tabs'

import './TopBar.scss'

export const TopBar = () => {
  return (
    <>
      <header className='top-bar' role='toolbar'>
        <ToolBar />
        <Tabs />
      </header>
    </>
  )
}