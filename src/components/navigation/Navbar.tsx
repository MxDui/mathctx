import React from "react";

const Navbar = () => {
  return (
    <div className="flex  flex-col">
      <div className="mb-2 md:border-b py-2">
        <div className="container mx-auto">
          <div className="flex justify-between gap-2 items-center px-2">
            <h1 className="text-2xl font-bold">MathCTX</h1>
            <ul className="hidden md:flex">
              <li className="mr-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-700 transition duration-300"
                >
                  Definiciones
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="text-sm hover:text-gray-700 transition duration-300"
                >
                  Estrategias
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
