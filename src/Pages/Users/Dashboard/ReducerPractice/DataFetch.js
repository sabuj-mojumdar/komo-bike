import React, { useReducer, useEffect } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
};
const reducer = (state, action) => {
    switch (action.type) {
        case ('success'):
            return {
                loading: false,
                post: action.result,
                error: ''
            };
        case ('error'):
            return {
                loading: false,
                post: {},
                error: 'There waw a problem fetching'
            };
        default:
            return state;
    }
};
const DataFetch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'success', result: data })
            })
            .catch(() => {
                dispatch({ type: 'error' });
            })
    }, []);
    return (
        <div>
            <h3>hello</h3>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error || null}
        </div>
    );
};

export default DataFetch;