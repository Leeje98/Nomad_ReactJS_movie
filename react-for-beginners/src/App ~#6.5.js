import React, { useEffect, useState } from "react";

function Hello() {
  function byFn() {
    console.log('bye :(')
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }


  useEffect(() => {                    // 1. 화살표 함수를 이용한 방법 
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);

  useEffect(function(){                // 2. function을 이용한 방법
    console.log('hi :)');
    return function(){
      console.log('bye :(');
    }
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false); 
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}



export default App;
