import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [categories, setCategories] = useState(['hello', 'world', 'thisisverylong'])

  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    fetch('https://dummyjson.com/products/category-list', {signal})
    .then(res => res.json())
    .then(res => setCategories(res));
    return () => controller.abort()
  }, [])

  const renderCategories = () => {
    return (
      <ul> 
      {categories.map((category) => {
        return <li key={category}><Link to={`/${category}`}>{category}</Link></li>
      })}
      </ul>  
    )
  }

  return (
  <nav className="sidebar">
    {renderCategories()}
  </nav>
  );
};

export default Sidebar;
