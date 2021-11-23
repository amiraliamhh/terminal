import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder } from '@fortawesome/free-solid-svg-icons'

export const Tabs = () => {
  return (
    <div className="top-bar__tabs">
      <FontAwesomeIcon color='#339af0' icon={faFolder} />
      <span className="top-bar__tabs--path">~/ —</span>
      <span> -zsh</span>
      <button className='top-bar__tabs--add'>
        <FontAwesomeIcon color='#fafafa' icon={faPlus} />
      </button>
    </div>
  )
}
