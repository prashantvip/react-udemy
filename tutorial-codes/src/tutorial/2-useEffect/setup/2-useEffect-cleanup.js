import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log("use effect");
    window.addEventListener('resize',checkSize);
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener('resize',checkSize);
    // }
  },[])

  console.log("Render");
  return (
    <>
    <h2>Window</h2>
    <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
