import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="container text-center mt-5">
      <h1 className="text-primary">Welcome to Hussain's Portfolio</h1>
      <button className="btn btn-success mt-3">Get Started</button>
    </div>
  )
}

export default App
