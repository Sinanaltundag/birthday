import React from 'react'

function Button({className, children, onclick}) {

  return (
      <button className={className} onClick={onclick}>{children}</button>
  )
}

export default Button