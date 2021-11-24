import React, { useRef, useEffect } from 'react'
import { Cli, InputLineRef } from './commander'
import { TopBar } from './top-bar'

import './Terminal.scss'

export const Terminal = () => {
  const cliRef = useRef<InputLineRef>(null)
  const topBarRef = useRef<HTMLDivElement>(null)

  const focusOnLastCommand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      !topBarRef.current ||
      !topBarRef.current?.contains(e.target as Node)
    ) {
      cliRef?.current?.focusInput()
    }
  }

  useEffect(() => {
    cliRef?.current?.focusInput()
  }, [])

  return (
    <>
      <div className='terminal' onClick={focusOnLastCommand}>
        <div ref={topBarRef}>
          <TopBar />
        </div>
        <Cli ref={cliRef} />
      </div>
    </>
  )
}
