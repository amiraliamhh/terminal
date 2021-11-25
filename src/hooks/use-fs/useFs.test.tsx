import '@testing-library/jest-dom'
import { renderHook, act, RenderResult } from '@testing-library/react-hooks'
import { isPath, validateDirName, useFs, fs, UseFsHook } from './useFs'

describe('hooks - useFs', () => {
  let result: RenderResult<UseFsHook>

  beforeEach(() => {
    const hook = renderHook(() => useFs())
    result = hook.result
  })

  test('validDirNames should not allow invalid dir names', () => {
    expect(validateDirName('/name')).toBeFalsy()
    expect(validateDirName('.name')).toBeTruthy()
    expect(validateDirName('name')).toBeTruthy()
    expect(validateDirName('_name-.')).toBeTruthy()
    expect(validateDirName('_name/-.')).toBeFalsy()
  })

  test('getCurrentDirName should return the last level in the path', () => {
    expect(isPath(result.current.currentDir)).toBeTruthy()
  })

  test('createDir should add a new dir to the current working dir', () => {
    const newDir = '/new'

    act(() => {
      result.current.createDir(newDir)
    })

    expect(fs.dirs.includes(newDir)).toBeTruthy()
  })

  test('createDir should throw when full dir path is not provided', () => {
    const execWithInvalidArg = () => {
      result.current.createDir('dir')
    }

    expect(execWithInvalidArg).toThrowError()
  })

  test('createDir should throw when the path already exists', () => {
    const execWithInvalidArg = () => {
      result.current.createDir('/new')
      result.current.createDir('/new')
    }

    expect(execWithInvalidArg).toThrowError()
  })

  test('setNextDir should change the current dir', () => {
    const nextDir = '/next'

    act(() => {
      result.current.createDir(nextDir)
      result.current.setNextDir(nextDir)
    })

    expect(result.current.currentDir).toBe(nextDir)
  })

  test('setNextDir should throw in invalid input', () => {
    const execWithInvalidArg = () => {
      result.current.setNextDir('invalid')
    }

    expect(execWithInvalidArg).toThrowError()
  })

  test('getCurrentDirName should return only the name part of the cwd', () => {
    const dir = 'dir'

    act(() => {
      result.current.createDir(`/${dir}`)
      result.current.setNextDir(`/${dir}`)
    })

    expect(result.current.getCurrentDirName()).toBe(dir)
  })
})
