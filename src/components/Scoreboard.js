import React from 'react'
import { NameBanner } from './NameBanner'
import { useSelector } from 'react-redux'

export const Scoreboard = () => {

    const {user, computer} = useSelector(state=>state.game);

    return (
        <div className='scoreboard'>
            <NameBanner id='user-banner' text="you" className="name-banner " />
            <NameBanner id='computer-banner' text="computer" className='name-banner' />
            <div>{user}:{computer}</div>
        </div>
    )
}
