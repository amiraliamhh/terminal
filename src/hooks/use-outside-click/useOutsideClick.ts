import { useEffect, useCallback, RefObject } from 'react'

interface UseOutsideClickParams<T> {
  onOutsideClick: () => void
  containerRef: RefObject<T>
}

export const useOutsideClick = <T extends HTMLElement>({
  onOutsideClick,
  containerRef,
}: UseOutsideClickParams<T>) => {
  const outsideClickHandler = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onOutsideClick()
    }
  }, [onOutsideClick, containerRef])

  useEffect(() => {
    window.addEventListener('click', outsideClickHandler)
    return () => {
      window.removeEventListener('click', outsideClickHandler)
    }
  }, [outsideClickHandler])
}
