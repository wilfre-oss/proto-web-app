import React, { useState, useEffect } from "react";
import HomeView from "../views/HomeView.jsx";

export default function Home(){
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