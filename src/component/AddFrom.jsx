import React, { useContext, useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Globalinfo } from "../App";

const AddFrom = ({ gettoggle }) => {
  const { setname, setemail, name, email, updatebutton, updateid } =
    useContext(Globalinfo);

  const value = collection(db, "contects");
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!updatebutton) {
      await addDoc(value, { name: name, email: email });
    } else {
      const updatedata = doc(db, "contects", updateid);
      await updateDoc(updatedata, { name: name, email: email });
    }
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
          value={name}
          className=" w-10/12  rounded-lg border-2 border-gray p-2"
          placeholder="enter name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          name="email"
          className="w-10/12 rounded-lg border-2 border-gray p-2"
          placeholder="enter email"
          onChange={(e) => setemail(e.target.value)}
        />
        <div onClick={handlesubmit} className="flex w-full justify-end">
          {updatebutton ? (
            <button
              onClick={gettoggle}
              className="  w-6/12 rounded-lg bg-green-600 p-2"
            >
              Update
            </button>
          ) : (
            <button
              onClick={gettoggle}
              className="  w-6/12 rounded-lg bg-green-600 p-2"
            >
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddFrom;
