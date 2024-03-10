import React, { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
const AddFrom = ({ gettoggle }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const value = collection(db, "contects");
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("This is e value", name);
    console.log("This is e value", email);
    await addDoc(value, { name: name, email: email });
  };
  return (
    <div className="  absolute w-[340px]    rounded-lg bg-white ">
      <div
        onClick={gettoggle}
        className="flex w-12 cursor-pointer items-center  justify-center p-2"
      >
        <h1 className="  text-2xl font-bold text-black hover:text-red-600">
          X
        </h1>
      </div>
      <form
        action=""
        className=" flex w-full flex-col items-center justify-center space-y-3 p-3 font-bold text-black"
      >
        <input
          type="text"
          name="name"
          className=" w-10/12  rounded-lg border-2 border-gray p-2"
          placeholder="enter name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="w-10/12 rounded-lg border-2 border-gray p-2"
          placeholder="enter email"
          onChange={(e) => setemail(e.target.value)}
        />
        <div onClick={handlesubmit} className="flex w-full justify-end">
          <button
            onClick={gettoggle}
            className="  w-6/12 rounded-lg bg-green-600 p-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFrom;
