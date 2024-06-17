import "./styles/App.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./presenters/FrontPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import AppLayout from "./components/AppLayout.jsx";
import Category from "./presenters/Category.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} /> 
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
};

export default App;
