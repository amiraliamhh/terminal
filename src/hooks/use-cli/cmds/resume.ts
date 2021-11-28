import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const resumeAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    window.open('#/resume')
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
