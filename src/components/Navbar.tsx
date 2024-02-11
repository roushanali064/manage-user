import Container from "./Container";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <h1 className="text-black text-2xl font-bold"><span className="text-rose-600">Manage</span> User</h1>
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
