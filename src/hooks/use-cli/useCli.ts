import { useState } from 'react'
import { CommandParser, ParsedCommand } from 'src/components/terminal/commander'

type CommandLineType = 'info'

interface CommandLine {
  content: string
  type?: CommandLineType
}

interface Command {
  name: string
  action: (
    setState: React.Dispatch<React.SetStateAction<CommandLine[]>>,
    commandOptions: ParsedCommand,
  ) => void
}

interface CommandsList {
  [command: string]: Command
}

interface UseCliHook {
  exec: (cmd: string) => void,
  lines: CommandLine[]
}

export const commands: CommandsList = {
  clear: {
    name: 'clear',
    action: () => { /* */ },
  },
}

const lastInputLineFactory = (): CommandLine => ({
  content: 'a.heidari@aheidaris-MacBook-Pro me %',
})

const commandParser = new CommandParser({
  validCommands: Object.keys(commands),
})

export const useCli = (): UseCliHook => {
  const [lines, setLines] = useState<CommandLine[]>([
    lastInputLineFactory(),
  ])

  const exec = (cmd: string) => {
    if (!cmd) {
      setLines(prev => [
        ...prev,
        lastInputLineFactory(),
      ])
      return
    }
    const parsed = commandParser.parse(cmd)
    commands[parsed.name]?.action?.(setLines, parsed)
  }
  
  return {
    exec,
    lines,
  }
}
