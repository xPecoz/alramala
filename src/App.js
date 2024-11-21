import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import JoinUs from "./pages/join us/Join";
import ConactUsPage from "./pages/contact/Contact";
import AboutPage from "./pages/AboutUsPage/About";
import Projects from "./pages/Projects/Projects";
import Production from "./pages/ProductionLines/Production";

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
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projects/:categoryParams",
          element: <Projects />,
        },
        {
          path: "/production",
          element: <Production />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
