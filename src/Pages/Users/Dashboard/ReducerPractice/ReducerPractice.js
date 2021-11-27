import React, { useReducer } from 'react';

const initialState = 10;
const reducer = (state, action) => {
    switch (action) {
        case 'plus':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}

const ReducerPractice = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch('plus')}>increment</button>
            <button onClick={() => dispatch('minus')}>decrement</button>
        </div>
    );
};

export default ReducerPractice;