import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine, findAbsolutePath } from './utils'

export const mkdirAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    if (args.value) {
      const fullPath = findAbsolutePath(helpers?.fs?.currentDir || '/', args.value)
      helpers?.fs?.createDir(fullPath)
      return
    }
    throw new Error('Error: exactly one argument must be provided to mkdir')
  } catch (err: any) {
    setLines(prev => [
      ...prev,
      {
        content: <p>Error: {err.message || ''}</p>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
