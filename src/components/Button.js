import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from '../features/gameSlice';
import { CSSTransition } from 'react-transition-group';

export const Button = ({ src, shape }) => {

    const dispatch = useDispatch();
    // const {animate,animation} = useSelector(state=>state.game);
    return (
        // <CSSTransition in={animate} timeout={200} classNames={animation} >
            <button onClick={() => dispatch(game(shape))} >
                <img src={src} alt={src + ''} />
            </button>
        // </CSSTransition>
    )
}