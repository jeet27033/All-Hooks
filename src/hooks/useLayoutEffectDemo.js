import React, { useLayoutEffect, useState } from 'react';

export const UseLayoutEffectDemo = () => {
  const [visitcount, setVisitcount] = useState(0);

  useLayoutEffect(() => {
    
    const count = parseInt(localStorage.getItem('mycount')) || 0;

    
    setVisitcount(count);

    
    localStorage.setItem('mycount', count + 1);
  }, []); 

  return (
    <div>
      <h1>use layout effect demo</h1>
      <p>you have visited this page {visitcount} times</p>
    </div>
  );
};


