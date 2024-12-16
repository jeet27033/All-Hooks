import { useEffect, useState } from "react";

export const UseEffectDemo = () => {
    const [Time, setTime] = useState(new Date().toLocaleTimeString());
    const [Data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        fetch("https://dummy-json.mock.beeceptor.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return (
        <>
            <h1>UseEffect Demo</h1>
            <h3>{Time}</h3>
            {Data.map((item, index) => (
                <h3 key={index}>{item.title}</h3> 
            ))}
        </>
    );
};
