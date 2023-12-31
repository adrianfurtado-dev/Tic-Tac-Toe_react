import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import ResetButton from './ResetButton'

function Hero({ item }) {
  return (
    <div className='hero'>
      <div>
        <span id='turn_title'>Turn</span>
      </div>
      <div className='turn_display'>
        <FontAwesomeIcon icon={item === 'x' ? faXmark : faCircle} className={item === 'x' ? 'cross_icon' : 'circle_icon'} />
      </div>
    </div>
  )
}

export default Hero