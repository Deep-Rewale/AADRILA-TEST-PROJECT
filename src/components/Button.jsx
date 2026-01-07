import React from 'react'

function Button({children , className=""}) {
  return (
    <button className={`font-raleway font-semibold rounded-full cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button;