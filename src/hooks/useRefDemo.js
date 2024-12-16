import { useRef } from "react";

export const UseRefDemo = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <h1>UseRef Demo</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>click</button>
    </div>
  );
};
