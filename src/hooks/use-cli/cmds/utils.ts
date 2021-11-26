import { CommandLine } from 'src/hooks/use-cli/useCli'
import { UseFsHook } from 'src/hooks'
import { lastInputLineFactory } from '../commands'

export const insertNewLine = (setLines: React.Dispatch<React.SetStateAction<CommandLine[]>>, fs?: UseFsHook) => {
  const cwd = fs?.getCurrentDirName() || ''
  setLines(prev => [
    ...prev,
    lastInputLineFactory(cwd),
  ])
}

export const goBack = (dir: string, level = 1): string => {
  const levels = dir.split('/').filter(Boolean)
  if (levels.length < level + 1) {
    return ''
  }
  return `/${levels.slice(0, levels.length - level).join('/')}`
}

export const findAbsolutePath = (cwd: string, path: string): string => {
  if (path.startsWith('/')) {
    return path
  }
  if (!path) {
    return cwd
  }
  if (path.startsWith('./')) {
    return `${cwd}/${path.replace('./', '')}`
  }
  let backLevel = 0
  path.split('/').filter(p => p === '..').forEach(() => backLevel++)
  return `${goBack(cwd, backLevel)}/${path.replace(new RegExp('../', 'g'), '')}`
}

export function getLastLevelName (path: string): string {
  const lastSlash = path.lastIndexOf('/')
  return path.slice(lastSlash + 1) || '/'
}
