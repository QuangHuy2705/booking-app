import React from 'react'
import Loader from '../resources/images/loader.gif'

const Loading = () => {
    return (
        <img src={Loader} alt='loader' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
    )
}

export default Loading