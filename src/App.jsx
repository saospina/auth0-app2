import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { getAccessTokenSilently, user } = useAuth0()
  useEffect(() => {
    // debugger
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        console.log(accessToken, 'accessToken')
        console.log(user, 'user')
      } catch (error) {
        console.log(error)
      }

    }
    getUserMetadata()
  }, [getAccessTokenSilently, user])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
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
