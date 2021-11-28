import { CommandLine } from 'src/hooks/use-cli/useCli'
import { CommandAction } from '../commands'
import { insertNewLine } from './utils'

export const conAction: CommandAction<CommandLine[]> = (setLines, args, helpers) => {
  try {
    setLines(prev => [
      ...prev,
      {
        content: 
        <>
          <table>
            <tbody>
              <tr>
                <td className='pr-2'>Email:</td>
                <td>amiraliamhh@gmail.com</td>
              </tr>
              <tr>
                <td className='pr-2'>Phone:</td>
                <td>+98 919 0912 275</td>
              </tr>
              <tr>
                <td className='pr-2'>LinkedIn:</td>
                <td>
                  <a target='_blank' href="https://www.linkedin.com/in/amiraliameri" rel="noreferrer">
                    linkedin.com/in/amiraliameri
                  </a>
                </td>
              </tr>
              <tr>
                <td className='pr-2'>Github:</td>
                <td>
                  <a target='_blank' href="https://github.com/amiraliamhh" rel="noreferrer">github.com/amiraliamhh</a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
        ,
        type: 'info',
      },
    ])
  } finally {
    insertNewLine(setLines, helpers?.fs)
  }
}
