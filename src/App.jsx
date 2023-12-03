import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const a = async() => {
    const b = () => console.log("test")
    const PromiseB = new Promise(()=>{ console.log("test") })
    await b() // await x
    const user = await PromiseB
    // await PromiseC
    console.log(user)
    // PromiseB.then(
    //   (user) => 
    //   console.log(user)
    // ).then().then()

    //await이란 

  }

  const fetchTodo = async() => {
    const resulut = await axios.get("https://topdragon.co.kr/todo")
    setTodoList(resulut) //Promise<Pending> --> result
    console.log(resulut)
  }
  // setTodoList([...todoList, todo])
  // 낙관적업데이트 -> 성공할거야라는 기준하에 state를 변경하여 UI를 미리바꾸는 것
  // 하지만, 원래라면 백엔드와의 데이터가 일치 fetchTodo를 다시하는게 맞음

  useEffect(()=>{
    // axios.get("https://topdragon.co.kr/todo").then((result) => console.log(result))
    fetchTodo()

    // 익명함수를 통해 async를 붙임 -> useEffect에 async를 붙일수가 없기 떄문에
    // useEffect가 실행되었을 떄 즉시실행하기위해서 즉시 실행
    (async ()=> {
    })()
    
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

"["
"("