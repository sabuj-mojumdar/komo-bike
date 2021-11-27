import React, { useReducer } from 'react';

const initialState = 0;
const initialState2 = 10;

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

const Counter3 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);
    return (
        <div>
            <div>
                <div>Count: {count}</div>
                <button onClick={() => dispatch('plus')}>increment</button>
                <button onClick={() => dispatch('minus')}>decrement</button>
            </div>
            <div>
                <div>Count: {count2}</div>
                <button onClick={() => dispatch2('plus')}>increment</button>
                <button onClick={() => dispatch2('minus')}>decrement</button>
            </div>
        </div>
    );
};

export default Counter3;