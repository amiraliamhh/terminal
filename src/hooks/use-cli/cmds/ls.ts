import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine, findAbsolutePath, getLastLevelName } from './utils'
import { fs } from 'src/hooks/use-fs/useFs'

export const lsAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    const cwd = helpers?.fs?.currentDir
    const dir = findAbsolutePath(cwd || '', args.value || '')
    const currentDirs = fs.dirs.filter(d => {
      return new RegExp(`^${dir?.replace(/\//g, '\/')}\/[a-zA-Z0-9_-\s\.]+$`).test(d)
    })
    const resultStr = currentDirs.map(d => getLastLevelName(d)).join(' ')
    
    setLines(prev => [
      ...prev,
      {
        content: resultStr,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
