import React from 'react'

export const NameBanner = ({ className,id, text }) => {
  return (
    <div id={id} className={className}>
        {text}
    </div>
  )
}
