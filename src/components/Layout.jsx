import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function Layout() {

const location = useLocation()
const isDashboard = location.pathname.startsWith("/dashboard");


  return (
    <>
      {!isDashboard && <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
