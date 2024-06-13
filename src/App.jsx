import { useEffect, useState } from 'react'
import './styles/App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './presenters/FrontPage.jsx'
import Navbar from './components/Navbar.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />}>
        {/** App Routes goes here */}
      </Route>
    <Route path="*" element={<NotFoundPage />} />
    </Route>
    </>
  )
)


const App = () => {
  
  return (
    <RouterProvider 
      router={router}
      fallbackElement={<h1>Loading...</h1>}
    />
  )
}

export default App
