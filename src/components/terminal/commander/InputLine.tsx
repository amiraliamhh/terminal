import { useImperativeHandle, forwardRef, ForwardedRef, useRef } from 'react'

export interface InputLineProps {
  content: string
  acceptsInput?: boolean
  onSubmit?: (command: string) => void
  onProcessTerminated?: () => void
}

export interface InputLineRef {
  focusInput: () => void
}

export const InputLine = forwardRef(function Commander (
  {
    content,
    acceptsInput = false,
    onSubmit,
  }: InputLineProps, ref: ForwardedRef<InputLineRef>
) {
  const inputRef = useRef<HTMLParagraphElement>(null)

  useImperativeHandle(ref, () => ({
    focusInput () {
      if (acceptsInput && inputRef.current) {
        inputRef.current.focus()
      }
    },
  }))

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit?.(inputRef.current?.textContent || '')
    }
  }

  return (
    <div className='terminal__command'>
      <p data-testid='cli-content'>{content}</p>
      {
        acceptsInput &&
        <p
          ref={inputRef}
          onKeyDown={handleKeyDown}
          role='textbox'
          contentEditable
          spellCheck={false}
        />
      }
    </div>
  )
})