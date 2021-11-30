import { forwardRef, ForwardedRef, useEffect, RefObject, useRef } from 'react'
import { InputLine, InputLineRef } from './InputLine'
import { useCli } from 'src/hooks'

export const Cli = forwardRef(function Cli (_, inputLineRef: ForwardedRef<InputLineRef>) {
  const cmdHistoryIndex = useRef<number | null>(null)
  const { lines, setLines, exec, history: cmdHistory } = useCli()

  const handleInputLineSubmit = (cmd: string) => {
    cmdHistoryIndex.current = null
    exec(cmd)
  }

  const handlePrevCommand = () => {
    if (cmdHistory.length && cmdHistoryIndex.current === null) {
      cmdHistoryIndex.current = cmdHistory.length - 1
      ;(inputLineRef as RefObject<InputLineRef>)?.current?.setTextContent(cmdHistory[cmdHistoryIndex.current])
    } else if (typeof cmdHistoryIndex.current === 'number' && cmdHistoryIndex.current > 0) {
      cmdHistoryIndex.current = cmdHistoryIndex.current - 1
      ;(inputLineRef as RefObject<InputLineRef>)?.current?.setTextContent(cmdHistory[cmdHistoryIndex.current])
    }
  }

  const handleNextCommand = () => {
    if (typeof cmdHistoryIndex.current === 'number' && cmdHistoryIndex.current < cmdHistory.length - 1) {
      cmdHistoryIndex.current = cmdHistoryIndex.current + 1
      ;(inputLineRef as RefObject<InputLineRef>)?.current?.setTextContent(cmdHistory[cmdHistoryIndex.current])
    } else if (typeof cmdHistoryIndex.current === 'number' && cmdHistoryIndex.current === cmdHistory.length - 1) {
      cmdHistoryIndex.current = null
      ;(inputLineRef as RefObject<InputLineRef>)?.current?.setTextContent('')
    }
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
              onPrevCommand={handlePrevCommand}
              onNextCommand={handleNextCommand}
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
