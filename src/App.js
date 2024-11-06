import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import JoinUs from "./pages/Join/Join";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/join",
          element: <JoinUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
