import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LOGIN = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const submitLogIn = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'LOGIN'})
  }
  const submitLogOut = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'LOGOUT'})
  }
  return (
    <div>
    {!isLoggedIn &&
    <form onSubmit={submitLogIn} >
        <label htmlFor="email">Email</label>
        <input id="email" name="email"/>
        <button type="submit">Log in</button>
    </form>}
    {isLoggedIn &&
    <form onSubmit={submitLogOut} >
        <button type="submit">LOG OUT</button>
    </form>}

    </div>

  )

}

export default LOGIN