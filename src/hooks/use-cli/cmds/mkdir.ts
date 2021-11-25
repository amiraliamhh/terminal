import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const mkdirAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    const fullPath = helpers?.fs?.currentDir
    helpers?.fs?.createDir(`${fullPath}/${args.value}`)
  } catch (err: any) {
    setLines(prev => [
      ...prev,
      {
        content: `Error: ${err.message || ''}`,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
