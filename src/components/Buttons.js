import rock from '../images/hand-rock.png';
import paper from '../images/hand-paper.png';
import scissors from '../images/hand-scissors.png';
import React from 'react'
import { Button } from './Button'


export const Buttons = () => {
  return (
    <div className="buttons">
      <Button src={rock} shape={'rock'} />
      <Button src={paper} shape={'paper'} />
      <Button src={scissors} shape={'scissors'} />
    </div>
  )
}
