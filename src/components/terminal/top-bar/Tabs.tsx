import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'
import { Icon } from 'src/components/shared/icon/Icon'

export const Tabs = () => {
  return (
    <div className="top-bar__tabs">
      <Icon color='#339af0' width='.75rem' icon={faFolder} />
      <span className="top-bar__tabs--path">~/ —</span>
      <span> -zsh</span>
      <button className='top-bar__tabs--add'>
        <Icon color='#fafafa' width='.75rem' icon={faPlus} />
      </button>
    </div>
  )
}
