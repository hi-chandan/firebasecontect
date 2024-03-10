import React from "react";

const AddFrom = () => {
  return (
    <div className="  rounded-lg bg-white ">
      <h1 className="p-2 text-2xl font-bold text-black">X</h1>
      <form
        action=""
        className=" flex w-full flex-col items-center justify-center space-y-3 p-3 font-bold text-black"
      >
        <input
          type="text"
          className=" w-10/12  rounded-lg border-2 border-gray p-2"
          placeholder="enter name"
        />
        <input
          type="text"
          className="w-10/12 rounded-lg border-2 border-gray p-2"
          placeholder="enter email"
        />
        <input type="submit" className="w-6/12 rounded-lg bg-green-600 p-2" />
      </form>
    </div>
  );
};

export default AddFrom;
