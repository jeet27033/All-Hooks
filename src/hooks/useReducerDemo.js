import { useReducer } from "react";

export const UseReducerDemo = () => {
    const initState = {
        name: "jeet",
        age: 20,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "age inc":
                return { ...state, age: state.age + 1 };
            default:
                return state;
        }
    };

    const [data, dispatch] = useReducer(reducer, initState);

    const incrementAge = () => {
        dispatch({ type: "age inc" });
    };

    return (
        <>
            <h1>UseReducer Demo</h1>
            <h3>{data.name}, {data.age}</h3>
            <button onClick={incrementAge}>Increment Age</button>
        </>
    );
};
