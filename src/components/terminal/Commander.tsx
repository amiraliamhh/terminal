export interface CommanderProps {
  content: string
  acceptsInput?: boolean
}

export const Commander = (
  {
    content,
    acceptsInput = false,
  }: CommanderProps
) => {
  return (
    <div className='terminal__command'>
      <p data-testid='cli-content'>{content}</p>
      {
        acceptsInput && <p role='textbox' contentEditable spellCheck={false} />
      }
    </div>
  )
}