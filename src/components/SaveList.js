import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const dispatchFunc = useDispatch();
    console.log(isLoggedIn)

    const isValid = () => {
        dispatchFunc({type: 'LOGIN'})
    }

    const buttonsFunc = (valid) => {
        if(valid) {
            return (
                <div className='save'>
                    <button>SAVE</button>
                    <button>CLEAR</button>
                </div>
            )
        }
        if(!valid) {
            return (
                <div className='save'>
                    <p>You must be logged in to save the list.</p>
                </div>
            )
        }
    }

  return (
    <div>
        {buttonsFunc(isLoggedIn)}
    </div>
  )
}

export default SaveList