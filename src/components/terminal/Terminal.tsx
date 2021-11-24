import React, { useRef, useEffect } from 'react'
import { InputLine, InputLineRef } from './commander'
import { TopBar } from './top-bar'

import './Terminal.scss'

export const Terminal = () => {
  const lastCommander = useRef<InputLineRef>(null)
  const topBarRef = useRef<HTMLDivElement>(null)

  const focusOnLastCommand = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (
      e &&
      (!topBarRef.current ||
      !topBarRef.current?.contains(e.target as Node))
    ) {
      lastCommander?.current?.focusInput()
    }
  }

  useEffect(() => {
    focusOnLastCommand()
  }, [])

  return (
    <>
      <div className='terminal' onClick={focusOnLastCommand}>
        <div ref={topBarRef}>
          <TopBar />
        </div>
        <InputLine ref={lastCommander} acceptsInput content='a.heidari@aheidaris-MacBook-Pro me %' />
      </div>
    </>
  )
}
