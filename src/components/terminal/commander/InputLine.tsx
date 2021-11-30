import React, { useImperativeHandle, forwardRef, ForwardedRef, useRef, FormEvent } from 'react'

export interface InputLineProps {
  content: string
  acceptsInput?: boolean
  history?: string
  onTextChange?: (text: string) => void
  onSubmit?: (command: string) => void
  onPrevCommand?: () => void
  onNextCommand?: () => void
  onProcessTerminated?: () => void
}

export interface InputLineRef {
  focusInput: () => void
  setTextContent: (text: string) => void
}

export const InputLine = forwardRef(function Commander (
  {
    content,
    acceptsInput = false,
    history = '',
    onTextChange,
    onSubmit,
    onPrevCommand,
    onNextCommand,
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
    setTextContent (text: string) {
      if (inputRef.current) {
        inputRef.current.textContent = text
        const range = document.createRange()
        range.selectNodeContents(inputRef.current)
        range.collapse(false)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
        onTextChange?.(text)
      }
    },
  }))

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (['Enter', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault()
      switch (e.key) {
        case 'Enter':
          onSubmit?.(inputRef.current?.textContent || '')     
          break
      
        case 'ArrowUp':
          onPrevCommand?.()
          break

        case 'ArrowDown':
          onNextCommand?.()
          break
      }
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