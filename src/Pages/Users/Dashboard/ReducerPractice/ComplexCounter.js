import React, { useReducer } from 'react';
const initialState = {
    counter: 0,
    counter2: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case ('plus'):
            return { ...state, counter: state.counter + action.value };
        case ('minus'):
            return { ...state, counter: state.counter - action.value };
        case ('plus2'):
            return { ...state, counter2: state.counter2 + action.value };
        case ('minus2'):
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                count {count.counter}
            </div>

            <button onClick={() => dispatch({ type: 'plus', value: 1 })}>+</button>
            <button onClick={() => dispatch({ type: 'minus', value: 1 })}>-</button>
            <div> count2 {count.counter2} </div>
            <button onClick={() => dispatch({ type: 'plus2', value: 1 })}>+</button>
            <button onClick={() => dispatch({ type: 'minus2', value: 1 })}>-</button>

        </>
    );
};

export default ComplexCounter;