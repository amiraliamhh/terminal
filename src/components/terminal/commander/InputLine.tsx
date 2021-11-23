import { useImperativeHandle, forwardRef, ForwardedRef, useRef } from 'react'

export interface InputLineProps {
  content: string
  acceptsInput?: boolean
}

export interface InputLineRef {
  focusInput: () => void
}

export const InputLine = forwardRef(function Commander (
  {
    content,
    acceptsInput = false,
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

  return (
    <div className='terminal__command'>
      <p data-testid='cli-content'>{content}</p>
      {
        acceptsInput && <p ref={inputRef} role='textbox' contentEditable spellCheck={false} />
      }
    </div>
  )
})