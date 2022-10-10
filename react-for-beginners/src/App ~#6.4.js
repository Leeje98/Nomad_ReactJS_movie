import React, { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("나는 한번만 실행되요");
  }, []);             // 두번째인자로 빈 배열을 넣으면 로드할때 딱 한번만 함수가 실행됨
  useEffect(() => {
    console.log('나는 키워드가 변화할 때 실행되요')
  }, [keyword]);      // 두번째인자로 배열안에 무언가 존재하면 두번째 인자에 변화가 있으때 실행됨 
  useEffect(() => {
    console.log('나는 카운터가 변화할 때 실행되요')
  }, [counter]); 
  useEffect(() => {
    console.log('keyword & counter change');
  }, [keyword, counter]);   // 두번째인자는 배열이기 때문에 배열안에 두가지 이상을 넣을 수 있다 

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
