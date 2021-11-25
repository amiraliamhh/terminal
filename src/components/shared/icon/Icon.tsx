import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IconProps {
  icon: IconDefinition
  width?: string
  color?: string
}

export const Icon = ({
  icon,
  width = '1rem',
  color = '#fafafa',
}: IconProps) => {
  return (
    <svg aria-hidden focusable={false} width={width} viewBox='0 0 512 512' color={color}>
      <path fill='currentColor' d={icon.icon[4] as string} />
    </svg>
  )
}
