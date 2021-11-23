import { Commander } from './Commander'
import { TopBar } from './TopBar'

import './Terminal.scss'

export const Terminal = () => {
  return (
    <div className='terminal'>
      <TopBar />
      <Commander content='a.heidari@aheidaris-MacBook-Pro me %' />
      <Commander acceptsInput content='a.heidari@aheidaris-MacBook-Pro me %' />
    </div>
  )
}
