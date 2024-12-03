import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex justify-evenly flex-wrap p-6 md:p-12 items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <span style={{fontFamily:"fantasy"}}>《Umar </span>Hasnain APIs》
            </span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 hover:text-gray-900">
              Guide
            </a>
            <a href="#" className="mr-5 hover:text-gray-900">
              Sponsor this project
            </a>
            <a href="#" className="mr-5 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="mr-5 hover:text-gray-900">
              My JSON Server
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
