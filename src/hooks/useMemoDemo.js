import React, { useState , useMemo} from "react";

export const UseMemoDemo = () => {

    const [n, setn] = useState(0);
    
    const squaredNum = useMemo(() => {
        return findans(n);
    }, [n]);

    
    const onChangeHandler = (e) => {
        setn(e.target.value);
    };


    return (
        <>
            <h1>UseMemoDemo</h1>
            <input
                value={n}
                onChange={onChangeHandler}>
            </input>

            <div>{squaredNum}</div>
        </>
    );
}


function findans(n) {
    return Math.pow(n, 3);
}
