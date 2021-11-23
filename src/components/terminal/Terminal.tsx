import { useRef, useEffect } from 'react'
import { InputLine, InputLineRef } from './commander'
import { TopBar } from './top-bar'

import './Terminal.scss'

export const Terminal = () => {
  const lastCommander = useRef<InputLineRef>(null)

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const focusOnLastCommand = () => {
    lastCommander?.current?.focusInput()
  }

  useEffect(() => {
    focusOnLastCommand()
  }, [])

  return (
    <div className='terminal' onClick={focusOnLastCommand}>
      <div onClick={stopPropagation}>
        <TopBar />
        <InputLine ref={lastCommander} acceptsInput content='a.heidari@aheidaris-MacBook-Pro me %' />
      </div>
    </div>
  )
}
