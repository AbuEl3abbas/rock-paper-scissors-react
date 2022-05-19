import rock from '../images/hand-rock.png';
import paper from '../images/hand-paper.png';
import scissors from '../images/hand-scissors.png';
import React from 'react'

export const Buttons = () => {
  return (
      <div className="buttons">
          <img src={rock}  />
          <img src={paper} />
          <img src={scissors} />
      </div>
  )
}
