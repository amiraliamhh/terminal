import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const whoamiAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    setLines(prev => [
      ...prev,
      {
        content: 
        <p>
          I'm Amirali! (TODO)  
        </p>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
