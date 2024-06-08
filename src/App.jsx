import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './presenters/Home.jsx'
import NotFound from './views/NotFound.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />}>
        {/** App Routes goes here */}
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)


function App() {
  const [count, setCount] = useState(Number(sessionStorage.getItem("count")))

  useEffect(() => {
    sessionStorage.setItem("count", count)
  }, [count])

  return (
    <RouterProvider 
      router={router}
      fallbackElement={<h1>Loading...</h1>}
    />
  )
}

export default App
