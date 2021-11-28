import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const whoamiAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    setLines(prev => [
      ...prev,
      {
        content: 
        <p>
          I'm a framework-agnostic full-stack Javascript developer with more focus on the front-end.
          I have over 4 years of experience working in cross- functional and agile teams. I'm focused
          on the entire pipeline of developing a web application, from collaboration with product
          managers and working on new ideas to deployment.
          <br />
          Code reviews and improving the existing code base are part of my daily routine.
        </p>,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
