// ThrottleScroll.jsx
import React, { useEffect } from 'react';

function ThrottleScroll() {
  useEffect(() => {
    const throttle = (fn, delay) => {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
          lastCall = now;
          fn(...args);
        }
      };
    };

    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
    };

    const throttledScroll = throttle(handleScroll, 500); // Every 500ms
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return <div style={{ height: '200vh' }}>Scroll me!</div>;
}

export default ThrottleScroll;

//For output check console
//on window it will show as "Scroll me!"  
//After scrolling down , will will see the output on console as ,
//  Scroll position: 3.555555582046509
//  Scroll position: 834.6666870117188
//  Scroll position: 85.33333587646484
//  Scroll position: 447.1111145019531
//  Scroll position: 522.6666870117188
//  Scroll position: 96.88888549804688
//  Scroll position: 33.77777862548828
//  Scroll position: 17.77777862548828
//  Scroll position: 272.8888854980469
//  Scroll position: 425.77777099609375