import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    fetch('https://dummyjson.com/products/category-list', {signal})
    .then(res => res.json())
    .then(res => setCategories(res));
    return () => controller.abort()
  }, [])

  const renderCategories = ({categories}) => {
    return categories ? (
      <ul> 
      {categories.map(category => 
        <li key={category}>
          <Link to={`/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </li>
      )}
      </ul>  
    ) : (
      <p>Loading...</p>
    )
  }

  return (
  <nav className="sidebar">
    {renderCategories({categories})}
  </nav>
  );
};

export default Sidebar;
