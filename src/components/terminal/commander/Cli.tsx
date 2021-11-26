import { forwardRef, ForwardedRef, useEffect, RefObject } from 'react'
import { InputLine, InputLineRef } from './InputLine'
import { useCli } from 'src/hooks'

export const Cli = forwardRef(function Cli (_, inputLineRef: ForwardedRef<InputLineRef>) {
  const { lines, setLines, exec } = useCli()

  const handleInputLineSubmit = (cmd: string) => {
    exec(cmd)
  }

  const handleTextChange = (text: string, index: number) => {
    lines[index].history = text
    setLines(lines)
  }

  useEffect(() => {
    (inputLineRef as RefObject<InputLineRef>).current?.focusInput?.()
  }, [lines, inputLineRef])

  return (
    <>
    {
      lines.map(({ content, history }, index) => {
        const acceptsInput = index === lines.length - 1
        if (typeof content === 'string') {
          return (
            <InputLine
              ref={inputLineRef}
              acceptsInput={acceptsInput}
              content={content}
              history={acceptsInput ? '' : history}
              key={`crow-${Math.random()}-${index}`}
              onTextChange={(text: string) => { handleTextChange(text, index) }}
              onSubmit={handleInputLineSubmit}
            />
          )
        }
        const Content = () => content
        return (
          <Content key={`crow-${Math.random()}-${index}`} />
        )
      })
    }
    </>
  )
})
