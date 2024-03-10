import React from "react";

const Navbar = () => {
  return (
    <div className=" flex h-[60px] items-center justify-center gap-4 rounded-lg bg-white ">
      <img src="/firebase.svg" alt="" />
      <h1 className="text-lg font-bold text-black">Firebase Contect App</h1>
    </div>
  );
};

export default Navbar;
