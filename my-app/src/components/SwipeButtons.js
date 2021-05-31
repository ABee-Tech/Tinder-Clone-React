import React from 'react'
import '../styles/swipebuttons.css'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <Replay fontSize="large" className="swipeButtons__repeat" />
            </IconButton>
            <IconButton>
                <Close fontSize="large" className="swipeButtons__left" />
            </IconButton>
            <IconButton>
                <StarRate fontSize="large" className="swipeButtons__star" />
            </IconButton>
            <IconButton>
                <Favorite fontSize="large" className="swipeButtons__right" />
            </IconButton>
            <IconButton>
                <FlashOn fontSize="large" className="swipeButtons__lightning" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
