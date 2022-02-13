import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center bg-zinc-800 h-screen flex flex-col justify-center items-center text-white text-3xl gap-2">
      <img src={logo} className="h-96 animate-[spin_20s_linear_infinite] pointer-events-none" alt="logo" />
      <p>Hello Vite + React + Tailwind!</p>
      <p>
        <button className="px-2 bg-gray-400 hover:bg-blue-800 text-white rounded-md" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="text-blue-400"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  )
}

export default App
