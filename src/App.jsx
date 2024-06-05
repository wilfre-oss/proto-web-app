import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(Number(sessionStorage.getItem("count")) || 0)

  useEffect(() => {
    sessionStorage.setItem("count", count)
  }, [count])

  return (
    <>
      <h1>Nothing here</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
      </div>
    </>
  )
}

export default App
