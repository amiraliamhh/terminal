import { ParsedCommand } from './command-parser'

export interface Command<T> {
  name: string
  action: (
    setState: React.Dispatch<React.SetStateAction<T[]>>,
    commandOptions: ParsedCommand,
  ) => void
}

interface CommandsList<T> {
  [command: string]: Command<T>
}

export const CommandsFactory = <T>(): CommandsList<T> => ({
  clear: {
    name: 'clear',
    action: () => { /* */ },
  },
})
