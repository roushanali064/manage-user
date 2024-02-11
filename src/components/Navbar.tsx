import { Link } from "react-router-dom";
import Container from "./Container";
import Theme from "./Theme";
import { ChangeEvent, useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // handle theme color change
  const handleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme as string)
    const savedTheme = localStorage.getItem('theme');
    document.querySelector('html')!.setAttribute('data-theme', savedTheme as string)
}, [theme])


  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center">
            <Link to={"/"} className="text-black text-2xl font-bold">
              <span className="text-rose-600">Manage</span> User
            </Link>

            <Link className="text-black text-xl font-semibold" to={"/add-user"}>
              Add User
            </Link>

            <Theme 
            handleTheme={handleTheme}
            theme={theme as 'light' | 'dark'}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
