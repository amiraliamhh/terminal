import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { renderHook, act, RenderResult } from '@testing-library/react-hooks'
import { useCli, UseCliHook } from './useCli'
import { commands } from './commands'
import { goBack, findAbsolutePath, getLastLevelName } from './cmds/utils'
import { fs, defaultDirsFactory } from 'src/hooks/use-fs/useFs'

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

    act(() => {
      result.current.exec(key)
    })

    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe('hooks - useCli - commands -> clear', () => {
  test('Should clear the terminal', () => {
    const { result } = renderHook(() => useCli())

    const defaultLinesLen = result.current.lines.length

    act(() => {
      for (let i = 0; i < 10; i++) {
        result.current.exec('')
      }
    })

    expect(result.current.lines.length).toBe(10 + defaultLinesLen)

    act(() => {
      result.current.exec('clear')
    })

    expect(result.current.lines.length).toBe(1)
  })
})

describe('hooks - useCli - commands -> mkdir', () => {
  let result: RenderResult<UseCliHook>

  beforeEach(() => {
    fs.dirs = defaultDirsFactory()
    const hook = renderHook(() => useCli())
    result = hook.result
  })

  test('Should create a new dir in the cwd with dir name', () => {
    const cwd = result.current.currentDir
    const relativeDir = 'relative'

    act(() => {
      result.current.exec(`mkdir ${relativeDir}`)
    })

    expect(fs.dirs).toContain(`${cwd}/${relativeDir}`)
  })

  test('Should create new dir with relative path', () => {
    const cwd = result.current.currentDir
    const relativeDir = 'relative'

    act(() => {
      result.current.exec(`mkdir ./${relativeDir}`)
    })

    expect(fs.dirs.includes(`${cwd}/${relativeDir}`)).toBeTruthy()
  })

  test('Should create new dir in prev paths', () => {
    const cwd = result.current.currentDir
    const relativeDir = 'relative'

    const backDir = goBack(cwd)

    act(() => {
      result.current.exec(`mkdir ../${relativeDir}`)
    })

    expect(fs.dirs).toContain(`${backDir}/${relativeDir}`)
  })
})

describe('hooks - useCli - commands -> ls', () => {
  let result: RenderResult<UseCliHook>

  beforeEach(() => {
    fs.dirs = defaultDirsFactory()
    const hook = renderHook(() => useCli())
    result = hook.result
  })

  test('ls should return the content of cwd', () => {
    act(() => {
      result.current.exec('mkdir test1')
      result.current.exec('mkdir test2')
      result.current.exec('ls')
    })

    const { lines } = result.current
    const line = lines[lines.length - 2].content

    const { getByText } = render(typeof line === 'string' ? <p>{line}</p> : line)

    expect(getByText('test1 test2')).toBeInTheDocument()
  })
})

describe('hooks - useCli - pwd', () => {
  let result: RenderResult<UseCliHook>

  beforeEach(() => {
    fs.dirs = defaultDirsFactory()
    const hook = renderHook(() => useCli())
    result = hook.result
  })

  test('ls should return the content of cwd', () => {
    act(() => {
      result.current.exec('pwd')
    })

    const { lines } = result.current
    const { getByText } = render(lines[lines.length - 2].content as JSX.Element)
    expect(getByText(result.current.currentDir)).toBeInTheDocument()
  })
})

describe('hooks - useCli - utils', () => {
  test('findAbsolutePath', () => {
    expect(findAbsolutePath('/profile/me', './new')).toBe('/profile/me/new')
    expect(findAbsolutePath('/profile/me', '../new')).toBe('/profile/new')
    expect(findAbsolutePath('/profile', '../new')).toBe('/new')
    expect(findAbsolutePath('/profile', '/new')).toBe('/new')
    expect(findAbsolutePath('/profile', '')).toBe('/profile')
  })

  test('getLastLevelName', () => {
    expect(getLastLevelName('/test')).toBe('test')
    expect(getLastLevelName('/')).toBe('/')
  })
})
