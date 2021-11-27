import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { findAbsolutePath, insertNewLine } from './utils'

export const cdAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  const cwd = helpers?.fs?.currentDir
  const absolutePath = findAbsolutePath(cwd || '/', args.value || '/')
  helpers?.fs?.setNextDir(absolutePath)
  insertNewLine(setLines, helpers?.fs)
}
