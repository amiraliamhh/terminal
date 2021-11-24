import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCli, commands } from './useCli'

describe('hooks - useCli', () => {
  test('Lines object should have at least one default value', () => {
    const { result } = renderHook(() => useCli())

    expect(Array.isArray(result.current.lines)).toBeTruthy()
    expect(result.current.lines.length).toBeGreaterThanOrEqual(1)
  })

  test('Each exec with empty command should add one default command at the end', () => {
    const { result } = renderHook(() => useCli())

    const linesLen = result.current.lines.length

    act(() => {
      result.current.exec('')
      result.current.exec('')
    })

    expect(result.current.lines.length).toBe(linesLen + 2)
  })

  test('Executing a command should trigger the action method of that command', () => {
    const key = Object.keys(commands).find(Boolean) as string
    const command = commands[key]
    const spy = jest.spyOn(command, 'action')

    const { result } = renderHook(() => useCli())

    result.current.exec(key)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
