import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: 'flex-end'}}>
      <button onClick={() => this.logout()}>
        Logout
      </button>
      </div>
      <header className="App-header">
        The Web Testament
      </header>
    </div>
  )
}

export default App
