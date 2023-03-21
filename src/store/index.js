import { legacy_createStore } from 'redux'
import { useEffect } from 'react';

const initialState = {
    coffee: 0 + +localStorage.getItem('coffee'), 
    sugar: 0 + +localStorage.getItem('sugar'),
    isLoggedIn: false,
}

const INCREMENT_COFFEE = 'INCREMENT_COFFEE';
const DECREMENT_COFFEE = 'DECREMENT_COFFEE';
const INCREASE_COFFEE = 'INCREASE_COFFEE';
const INCREMENT_SUGAR = 'INCREMENT_SUGAR';
const DECREMENT_SUGAR = 'DECREMENT_SUGAR';
const INCREASE_SUGAR = 'INCREASE_SUGAR';
const CLEAR_LIST = 'CLEAR_LIST';

const couterReducer = (state = initialState, action) => {
    if(action.type === CLEAR_LIST) {
        localStorage.removeItem('coffee')
        localStorage.removeItem('sugar')
        return {
            coffee: 0,
            sugar: 0,
        }

    }
    switch(action.type) {
        case INCREMENT_COFFEE:
            return {
                coffee: state.coffee + 1,
                sugar: state.sugar,
                isLoggedIn: state.isLoggedIn,
             } 
        case DECREMENT_COFFEE:
            return {
                coffee: state.coffee - 1,
                sugar: state.sugar,
                isLoggedIn: state.isLoggedIn,
             }
        case INCREASE_COFFEE:
            return {
                coffee: state.coffee + action.number,
                sugar: state.sugar,
                isLoggedIn: state.isLoggedIn,
             }
        case INCREMENT_SUGAR:
            return {
                coffee: state.coffee,
                sugar: state.sugar + 1,
                isLoggedIn: state.isLoggedIn,
            }
        case DECREMENT_SUGAR:
            return {
                coffee: state.coffee,
                sugar: state.sugar - 1,
                isLoggedIn: state.isLoggedIn,
            }
        case INCREASE_SUGAR:
            return {
                coffee: state.coffee,
                sugar: state.sugar + 10,
                isLoggedIn: state.isLoggedIn,
            }
    }

    if(action.type === 'LOGIN'){
        return {
            ...state,
            isLoggedIn: true,
         }
    }
    return state
}

const store = legacy_createStore(couterReducer); 

export default store;