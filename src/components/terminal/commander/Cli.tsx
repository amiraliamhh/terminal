import { forwardRef, ForwardedRef, useEffect, RefObject } from 'react'
import { InputLine, InputLineRef } from './InputLine'
import { useCli } from 'src/hooks'

export const Cli = forwardRef(function Cli (_, inputLineRef: ForwardedRef<InputLineRef>) {
  const { lines, exec } = useCli()

  const handleInputLineSubmit = (cmd: string) => {
    exec(cmd)
  }

  useEffect(() => {
    (inputLineRef as RefObject<InputLineRef>).current?.focusInput?.()
  }, [lines, inputLineRef])

  return (
    <>
    {
      lines.map(({ content }, index) => 
        <InputLine
          ref={inputLineRef}
          acceptsInput={index === lines.length - 1}
          content={content}
          key={`crow-${Math.random()}-${index}`}
          onSubmit={handleInputLineSubmit}
        />
      )
    }
    </>
  )
})
