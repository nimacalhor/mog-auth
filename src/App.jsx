import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

/*
have to make a project with following information:

react react-router-dom 

4 pages:
  1. login page (form : username , password)
  2. home page that can be accessed by anyone
  3. dashboard page that can be accessed by `ADMIN` and `USER`
  4. settings page that cant only be accessed by `ADMIN`

Give me steps to follow to complete this task
give me steps NOT ANY CODE

before you start please ask me any questions that you need answered to help me best resolve my problem


This is a task to test front-end programmer skills
there is no backend logic and no authentication system only front-end is present
the focus of this task is to protect some routes using react-router-dom

pages are empty styling or functionality of pages is not important in this task
*/