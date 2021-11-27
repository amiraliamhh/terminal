import { useMemo, Component, useEffect, useState, useCallback } from 'react'
import { RouteProps } from './Route'

interface Routes {
  [key: string]: Component<RouteProps>
}

export const Router = (props: any) => {
  const [currentComponent, setCurrentComponent] = useState(null)

  const routes = useMemo(() => {
    return (Array.isArray(props.children) ? props.children : [props.children])
      .reduce((prev: Routes, child: Component<RouteProps>) => {
        prev[child.props.path] = child
        return prev
      }, {})
  }, [props.children])

  const getCurrentRouteComponent = useCallback(() => {
    return routes[window.location.hash.replace('#', '') || '/']
  }, [routes])

  useEffect(() => {
    setCurrentComponent(
      getCurrentRouteComponent()
    )

    const handleUrlChange = () => {
      setCurrentComponent(
        getCurrentRouteComponent()
      )
    }

    window.addEventListener('popstate', handleUrlChange)
    return () => {
      window.removeEventListener('popstate', handleUrlChange)
    }
  }, [getCurrentRouteComponent])

  return (
    <>
      {currentComponent}
    </>
  )
}
