import { useState } from 'react'

interface FSStructure {
  dirs: string[]
}

export const FSErrors = {
  InvalidDir (dir: string) {
    return `Directory ${dir} doesn't exist`
  },
  InvalidDirName () {
    return 'Directory name contains invalid characters'
  },
}

export const fs: FSStructure = {
  dirs: [
    '/',
    '/profile',
  ],
}

export interface UseFsHook {
  currentDir: string
  setCurrentDir: React.Dispatch<React.SetStateAction<string>>
  setNextDir: (dir: string) => void
  getCurrentDirName: () => string
  createDir: (name: string) => void
}

export const validateDirName = (name: string): boolean => {
  return /^[a-zA-Z0-9_-\s\.]+$/.test(name)
}

export function isPath (path: string): boolean {
  return path.startsWith('/') && path.split('/').filter(Boolean).every(validateDirName)
}

export const useFs = (): UseFsHook => {
  const [currentDir, setCurrentDir] = useState('/profile')

  const setNextDir = (dir: string) => {
    if (fs.dirs.includes(dir)) {
      setCurrentDir(dir)
      return
    }
    throw new Error(FSErrors.InvalidDir(dir))
  }

  const getCurrentDirName = (): string => {
    const dirLevels = currentDir.split('/')
    return dirLevels[dirLevels.length - 1]
  }

  const createDir = (name: string) => {
    if (!isPath(name)) {
      throw new Error(FSErrors.InvalidDirName())
    }
    if (fs.dirs.includes(name)) {
      throw new Error(FSErrors.InvalidDir(name))
    }
    fs.dirs.push(name)
  }

  return {
    currentDir,
    setCurrentDir,
    setNextDir,
    getCurrentDirName,
    createDir,
  }
}
