import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import AddFrom from "./AddFrom";

const Datacard = ({ data, getrefresh, gettoggle }) => {
  const handledelete = async (id) => {
    const deleteVal = doc(db, "contects", id);
    await deleteDoc(deleteVal);
    getrefresh((val) => !val);
  };

  const updatehandler = ({ id, name, email }) => {
    gettoggle();
    <AddFrom prename={name} preemail={email} />;
  };

  return (
    <div className=" space-y-4">
      {data?.map((val) => (
        <div
          key={val.email}
          className=" srounded-lg flex   items-center justify-between gap-2 rounded-lg bg-[#ffeaae] p-2 text-black"
        >
          <div className="flex gap-2 p-1 leading-4">
            <FaRegUserCircle size={40} color="orange" />
            <div className="">
              <h1 className="text-lg font-semibold">{val.name}</h1>
              <p className="">{val.email}</p>
            </div>
          </div>
          <div className=" float-end flex items-center gap-2">
            <FaRegEdit
              size={25}
              className="hover:text-blue-600"
              onClick={() => updatehandler(val.id, val.name, val.email)}
            />
            <MdDelete
              size={30}
              className="text-purple-800 hover:text-red-600"
              onClick={() => handledelete(val.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Datacard;
