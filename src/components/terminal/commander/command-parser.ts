interface CommandArgs {

  [key: string]: string | boolean
}

export interface ParsedCommand {
  name: string
  value: string | null
  args: CommandArgs
}

interface CommandParserOptions {
  validCommands: string[]
}

export class CommandParser {
  private validCommands: string[] = []

  constructor (
    { validCommands }: CommandParserOptions
  ) {
    this.validCommands = validCommands
  }

  public parse (command: string): ParsedCommand | never {
    const [name, ...rest] = command.trim().split(' ')
    if (!this.validCommands.includes(name)) {
      throw new Error(`zsh: command not found: \`${name}\``)
    }
    const args = {} as CommandArgs
    let value = null
    
    let i = 0
    while (i < rest.length) {
      const arg = rest[i]
      if (arg.startsWith('--') && rest[i + 1] && !rest[i + 1].startsWith('--')) {
        args[arg.replace('--', '')] = rest[i + 1]
        i += 2
      } else if (arg.startsWith('--')) {
        args[arg.replace('--', '')] = true
        i++
      } else if (i === rest.length - 1 && !arg.startsWith('-')) {
        value = arg
        i++
      } else {
        throw new Error(`Options ${arg} is invalid. Type \`man ${name}\` to get a list of all the options.`)
      }
    }

    return {
      name,
      value,
      args,
    }
  }
}
