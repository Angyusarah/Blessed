import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Index";
import Wishes from "./pages/wishes/Wishes";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import "./App.css";
import AdminLayout from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard/Dasboard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/wishes", element: <Wishes /> },
  { path: "/gallery", element: <Gallery /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
