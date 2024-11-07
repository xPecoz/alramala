import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import JoinUs from "./pages/join us/Join";
import ConactUsPage from "./pages/contact/Contact";

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
          element: <JoinUs/>,
        },
        {
          path: "/contact",
          element: <ConactUsPage/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
