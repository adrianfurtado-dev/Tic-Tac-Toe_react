import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

function ResetButton({ reset }) {
  return (
    <button className="reset" onClick={reset}>
      <FontAwesomeIcon icon={faRotateRight} />
    </button>
  )
}

export default ResetButton