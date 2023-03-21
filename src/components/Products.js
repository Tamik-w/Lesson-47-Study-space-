import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const sugar = useSelector((state) => state.sugar)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatchFunc = useDispatch();

  const INCREMENT_COFFEE = () => {
    dispatchFunc({ type: 'INCREMENT_COFFEE' })
  }
  const DECREMENT_COFFEE = () => {
    dispatchFunc({ type: 'DECREMENT_COFFEE' })
  }
  const INCREASE_COFFEE = () => {
    dispatchFunc({ type: 'INCREASE_COFFEE', number: 10 })
  }

  const INCREMENT_SUGAR = () => {
    dispatchFunc({ type: 'INCREMENT_SUGAR' })
  }
  const DECREMENT_SUGAR = () => {
    dispatchFunc({ type: 'DECREMENT_SUGAR' })
  }
  const INCREASE_SUGAR = () => {
    dispatchFunc({ type: 'INCREASE_SUGAR', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={INCREMENT_COFFEE}>+</button>
        <button onClick={DECREMENT_COFFEE}>-</button>
        {isLoggedIn && <button onClick={INCREASE_COFFEE}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={INCREMENT_SUGAR}>+</button>
        <button onClick={DECREMENT_SUGAR}>-</button>
        {isLoggedIn && <button onClick={INCREASE_SUGAR}>+10</button>}
      </div>
    </>
  )
}

export default Products