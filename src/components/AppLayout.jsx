import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
