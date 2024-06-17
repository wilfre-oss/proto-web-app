import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
