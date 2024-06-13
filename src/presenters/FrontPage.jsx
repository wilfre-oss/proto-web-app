import React, { useState, useEffect } from "react";
import HomeView from "../components/FrontPageView.jsx";

const Home = () => {
  const [count, setCount] = useState(Number(sessionStorage.getItem("count")) || 0)

  useEffect(() => {
    sessionStorage.setItem("count", count)
  }, [count])

  return (
    <HomeView 
      count={count}
      setCount={setCount}
    /> 
  )
}

export default Home