import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const pwdAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    const cwd = helpers?.fs?.currentDir
    
    setLines(prev => [
      ...prev,
      {
        content: cwd || '/',
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
