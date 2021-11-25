import React, { useImperativeHandle, forwardRef, ForwardedRef, useRef, FormEvent } from 'react'

export interface InputLineProps {
  content: string
  acceptsInput?: boolean
  history?: string
  onTextChange?: (text: string) => void
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
    history = '',
    onTextChange,
    onSubmit,
  }: InputLineProps, ref: ForwardedRef<InputLineRef>
) {
  if (history && acceptsInput) {
    throw new Error('history and acceptsInput props can not be truthy at the same time')
  }

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

  const handleInputChange = (e: FormEvent<HTMLParagraphElement>) => {
    onTextChange?.((e.target as any).textContent)
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
          onInput={handleInputChange}
        />
      }
      {
        history &&
        <p
          role='textbox'
          spellCheck={false}
        >
          {history}
        </p>
      }
    </div>
  )
})