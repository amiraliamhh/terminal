import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const eduAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    setLines(prev => [
      ...prev,
      {
        content: 
        <p>
          About my education! (TODO)  
        </p>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
