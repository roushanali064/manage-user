import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
