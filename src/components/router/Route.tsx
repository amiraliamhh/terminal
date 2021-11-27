import { PropsWithChildren } from 'react'

export interface RouteProps {
  path: string
}

export const Route = (props: PropsWithChildren<RouteProps>) => {
  return (
    <>
      {props.children}
    </>
  )
}