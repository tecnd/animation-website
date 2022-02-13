import './App.css'

import planets1 from './videos/planets1.mp4'

function App() {
  return (
    <div className="text-center bg-zinc-800 h-screen flex flex-col justify-center items-center text-white text-3xl gap-2">
      <p>Hello Vite + React + Tailwind!</p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <video controls src={planets1}/>
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
