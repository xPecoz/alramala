import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import JoinUs from "./pages/join us/Join";
import ConactUsPage from "./pages/contact/Contact";
import AboutPage from "./pages/AboutUsPage/About";
import Projects from "./pages/Projects/Projects";
import Production from "./pages/ProductionLines/Production";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";

import Login from "./pages/dashboard/login/login";
import ForgetPassword from "./pages/dashboard/forget Password/forget";
import ChangePassword from "./pages/dashboard/change Password/changePassword";
import Profile from "./pages/dashboard/profile/profile";

import DashboardHome from "./pages/dashboard/DashboardHome/DashboardHome";
import AddProject from "./pages/dashboard/add-project/addProject";
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
            element: < Projects / > ,
        },
        {
          path: "/production",
          element: <Production />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "home", 
          element: <DashboardHome />,
        },
        {
          path: "add-project",
          element: <AddProject/>,
        },
        {
          path: "projects",
          element: <AddProject />,
        },
        {
          path: "content",
          element: <AddProject/>,
        },
        {
          path: "/dashboard/login",
          element: < Login / > ,
      },
      {
          path: "/dashboard/login/forgetPassword",
          element: < ForgetPassword / > ,
      },
      {
          path: "/dashboard/login/changePassword",
          element: < ChangePassword / > ,
      },
      {
          path: "/dashboard/Profile",
          element: < Profile / > ,
      },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
