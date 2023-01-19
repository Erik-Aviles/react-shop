import React from 'react'

const Messages = ({children, color}) => {
    const bgColor = {color: color}
    
  return (
    <div className='Messages' style={bgColor}>
        <p>{children}</p>
    </div>
  )
}

export default Messages