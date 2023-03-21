import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const coffee = useSelector((state) => state.coffee)
    const sugar = useSelector((state) => state.sugar)
    const dispatchFunc = useDispatch();

    const SAVE_LIST = 'SAVE_LIST';

    const CLEAR_LIST = () => {
        dispatchFunc({ type: 'CLEAR_LIST'})

    }
    const saveList = (coffee, sugar) => {
        localStorage.setItem('coffee', coffee);
        localStorage.setItem('sugar', sugar);
        return {
          type: SAVE_LIST,
          payload: { coffee, sugar },
        };
      };

      const handleSave = () => {
        dispatchFunc(saveList(coffee, sugar));
      };

    const buttonsFunc = (valid) => {
        if(valid) {
            return (
                <div className='save'>
                    <button onClick={handleSave}>SAVE</button>
                    <button onClick={CLEAR_LIST}>CLEAR</button>
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