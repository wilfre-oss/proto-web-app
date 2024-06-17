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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}>
          {/** App Routes goes here */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
};

export default App;
