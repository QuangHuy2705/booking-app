import React from 'react'
import { connect } from 'react-redux'
import Loader from '../resources/images/loader.gif'

class Loading extends React.Component {
    render() {
        const { isLoading } = this.props
        console.log(isLoading)
        return (
            <div className='loader'>
                {isLoading ? (<img src={Loader} alt='loader' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />) : (<React.Fragment />)}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {isLoading: state.AppReducers ? state.AppReducers.isLoading : false,}
}

export default connect(mapStateToProps, null)(Loading)