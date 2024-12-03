import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 text-lg sm:text-2xl p-6 max-w-screen-lg mx-auto rounded-md">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center sm:text-left">
          Use your own data
        </h1>
        <h5 className="text-center sm:text-left">
          You can sponsor this project (and others) on GitHub
        </h5>
        <h2 className="bg-slate-100 px-4 py-6 text-center rounded-md">
          Coded and maintained with ❤️ by Umar Hasnain © 2024
        </h2>
      </div>
    </div>
  );
};

export default Footer;
