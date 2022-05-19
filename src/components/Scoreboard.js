import React from 'react'
import { NameBanner } from './NameBanner'

export const Scoreboard = () => {
    return (
        <div className='scoreboard'>
            <NameBanner id='user-banner' text="you" className="name-banner " />
            <NameBanner id='computer-banner' text="computer" className='name-banner' />
            <div>0:0</div>
        </div>
    )
}
