import React from 'react';
import { useDispatch } from 'react-redux';
import { game } from '../features/gameSlice';

export const Button = ({ src, shape }) => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(game(shape)) } >
            <img src={src} alt={src + ''} />
        </button>
    )
}