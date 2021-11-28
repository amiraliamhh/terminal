import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { InputLine, CommandParser } from '../commander'

describe('components - terminal - commander - InputLine', () => {
  test('Should show content prop in cli-content', () => {
    const content = 'message'
    render(<InputLine content={content} />)
    expect(screen.getByTestId('cli-content')).toHaveTextContent(content)
  })

  test('Should call onSubmit when Enter is pressed', () => {
    const submitSpy = jest.fn((val: string) => val)
    const { getByRole } = render(<InputLine acceptsInput content='test' onSubmit={submitSpy} />)
    const testCommand = 'test_command'
    getByRole('textbox').textContent = testCommand
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 13 })
    expect(submitSpy).toHaveBeenCalledTimes(1)
    expect(submitSpy).toHaveBeenCalledWith(testCommand)
  })
})

describe('components - terminal - commander - command-parser', () => {
  describe('command-parser - parser', () => {
    let commandParser: CommandParser

    beforeEach(() => {
      commandParser = new CommandParser({
        validCommands: ['cmd'],
      })
    })

    test('Should return proper output on a command with no options', () => {
      const commandName = 'cmd'
      const output = commandParser.parse(commandName)
      expect(output.value).toBeNull()
      expect(typeof output.args).toBe('object')
      expect(Object.keys(output.args).length).toBe(0)
      expect(output.name).toBe(commandName)
    })

    test('Should return args with proper values in the best case scenario - value should be null', () => {
      const output = commandParser.parse('cmd --option1 value1')
      expect(output.value).toBeNull()
      expect(output.name).toBe('cmd')
      expect(output.args).toHaveProperty('option1')
      expect(output.args.option1).toBe('value1')
    })

    test('Should get last non-option input as the value', () => {
      const output = commandParser.parse('cmd --option1 value1 default_value')
      expect(output.value).toBe('default_value')
    })

    test('If options is provided without any value, it\'s value should be `true`', () => {
      const output = commandParser.parse('cmd --option1 --option2')
      expect(Object.keys(output.args).length).toBe(2)
      expect(output.args).toHaveProperty('option1')
      expect(output.args).toHaveProperty('option2')
      expect(output.args.option1).toStrictEqual(true)
      expect(output.args.option2).toStrictEqual(true)
    })

    test('Should throw on invalid option', () => {
      const execWithInvalidOption2 = () => {
        commandParser.parse('cmd value --a')
      }
      expect(execWithInvalidOption2).toThrowError()
    })

    test('Should throw on invalid command', () => {
      const execWithInvalidCmd = () => {
        commandParser.parse('invalid_cmd')
      }
      expect(execWithInvalidCmd).toThrowError()
    })
  })
})
