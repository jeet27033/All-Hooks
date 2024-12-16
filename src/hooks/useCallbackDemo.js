import { useState, useEffect, useCallback } from "react";

export const UseCallbackDemo = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    
    const updateTime = useCallback(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);

    
    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval); 
    }, [updateTime]); 

    return (
        <>
            <h1>useCallback Demo</h1>
            <h3>{time}</h3>
        </>
    );
};
