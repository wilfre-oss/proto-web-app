import { Link, Outlet } from "react-router-dom"

export default function Navbar(){
  return(
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="home">Home</Link>
          </li>
          <li>
            <Link>Nothing</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}