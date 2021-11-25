import React, { useState } from 'react'
import { CommandParser } from 'src/components/terminal/commander'
import { useFs } from 'src/hooks'
import { commands, lastInputLineFactory } from './commands'
import { WelcomeLine } from './welcome'

type CommandLineType = 'info' | 'input'

export interface CommandLine {
  content: string | JSX.Element
  history?: string
  type?: CommandLineType
}

export interface UseCliHook {
  exec: (cmd: string) => void,
  lines: CommandLine[]
  setLines: React.Dispatch<React.SetStateAction<CommandLine[]>>
  currentDir: string
}

const commandParser = new CommandParser({
  validCommands: Object.keys(commands),
})

export const useCli = (): UseCliHook => {
  const fs = useFs()
  const { currentDir, getCurrentDirName } = fs
  const [lines, setLines] = useState<CommandLine[]>([
    {
      content: WelcomeLine,
      type: 'info',
    },
    lastInputLineFactory(
      getCurrentDirName()
    ),
  ])

  const exec = (cmd: string) => {
    if (!cmd) {
      setLines(prev => [
        ...prev,
        lastInputLineFactory(
          getCurrentDirName()
        ),
      ])
      return
    }
    const parsed = commandParser.parse(cmd)
    commands[parsed.name].action(setLines, parsed, {
      fs,
    })
  }
  
  return {
    exec,
    lines,
    setLines,
    currentDir,
  }
}
