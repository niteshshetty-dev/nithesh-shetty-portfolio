import { useState } from "react";
import { Spiral as Hamburger, Spiral } from "hamburger-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="fixed top-0 w-full bg-white text-[#0f172a] shadow-md border-b border-blue-100 z-50">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 md:p-4 ">
            <section>
              <h1 className="text-lg md:text-xl font-bold text-[#0f172a]">
                Nithesh Shetty
              </h1>
            </section>
            <div>
              <ul className="hidden md:flex gap-6  ">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <Spiral className="w-4 h-4 text-[#0f172a]" />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div>
              <ul className="flex flex-col  md:hidden bg-white p-4 border text-sm space-y-2  border-blue-100 z-40 rounded-md shadow-lg text-[#0f172a]">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
