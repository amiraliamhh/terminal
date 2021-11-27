import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const helpAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    setLines(prev => [
      ...prev,
      {
        content: 
        <div>
          <p>You can use the argument "--help" to learn more about each command</p>
          <br />
          <h4>About me:</h4>
          <p className='mb-2'>whoami - about me</p>
          <p className="mb-2">xp - get a list of my previous work experiences</p>
          <p className='mb-2'>edu - my education</p>
          <p className='mb-2'>con - my contact info</p>
          <h4>Other available commands:</h4>
          <p className='mb-2'>pwd - get the current working directory</p>
          <p className='mb-2'>cd - change directory</p>
          <p className='mb-2'>ls - lists all the files and sub directories in a directory</p>
          <p className='mb-2'>clear - clears the terminal</p>
        </div>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
