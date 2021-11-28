import { ParsedCommand } from 'src/components/terminal/commander'
import { UseFsHook } from 'src/hooks'
import { CommandLine } from './useCli'
import { 
  mkdirAction, lsAction, pwdAction, helpAction,
  whoamiAction, cdAction, eduAction, xpAction,
  resumeAction,
} from './cmds'

export type CommandAction<T> = (
  setState: React.Dispatch<React.SetStateAction<T>>,
  commandOptions: ParsedCommand,
  helpers?: {
    fs?: UseFsHook
  }
) => void

export interface Command<T> {
  name: string
  action: CommandAction<T>
}

export interface CommandsList {
  [command: string]: Command<any>
}

export const lastInputLineFactory = (currentDir: string): CommandLine => ({
  content: `amiraliamhh@amiraliamhhs-MacBook-Pro ${currentDir} %`,
  type: 'input',
})

// Commands
const clearAction: CommandAction<CommandLine[]> = (setLines, _, helpers) => {
  const cwd = helpers?.fs?.getCurrentDirName() || ''
  setLines([
    lastInputLineFactory(cwd),
  ])
}

export const commands: CommandsList = {
  clear: {
    name: 'clear',
    action: clearAction,
  },
  ls: {
    name: 'ls',
    action: lsAction,
  },
  cd: {
    name: 'cd',
    action: cdAction,
  },
  mkdir: {
    name: 'mkdir',
    action: mkdirAction,
  },
  rm: {
    name: 'rm',
    action: () => { /* */ },
  },
  curl: {
    name: 'curl',
    action: () => { /* */ },
  },
  help: {
    name: 'help',
    action: helpAction,
  },
  whoami: {
    name: 'whoami',
    action: whoamiAction,
  },
  resume: {
    name: 'resume',
    action: resumeAction,
  },
  xp: {
    name: 'xp',
    action: xpAction,
  },
  edu: {
    name: 'edu',
    action: eduAction,
  },
  skills: {
    name: 'skills',
    action: () => { /* */ },
  },
  pwd: {
    name: 'pwd',
    action: pwdAction,
  },
  touch: {
    name: 'touch',
    action: () => { /* */ },
  },
  echo: {
    name: 'echo',
    action: () => { /* */ },
  },
  cat: {
    name: 'cat',
    action: () => { /* */ },
  },
}
