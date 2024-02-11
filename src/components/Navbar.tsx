import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Link to={"/"} className="text-black text-2xl font-bold">
                <span className="text-rose-600">Manage</span> User
              </Link>
            </div>
            <Link className="text-black text-xl font-semibold" to={"/add-user"}>
              Add User
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
