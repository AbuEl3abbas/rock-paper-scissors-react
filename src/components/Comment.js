import React from 'react'
import { useSelector } from 'react-redux'


export const Comment = () => {

    const {comment} = useSelector(state=>state.game);

    return (
        <div id='comment'>
            {comment}
        </div>
    )
}
