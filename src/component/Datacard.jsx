import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Datacard = ({ data }) => {
  console.log("This is contacts", data);
  return (
    <div className=" space-y-4">
      {data?.map((val) => (
        <div className=" srounded-lg flex   items-center justify-between gap-2 rounded-lg bg-[#ffeaae] p-2 text-black">
          <div className="flex gap-2 p-1 leading-4">
            <FaRegUserCircle size={40} color="orange" />
            <div className="">
              <h1 className="text-lg font-semibold">{val.name}</h1>
              <p className=""> {val.email}</p>
            </div>
          </div>
          <div className=" float-end flex items-center gap-2">
            <FaRegEdit size={25} className="hover:text-blue-600" />
            <MdDelete
              size={30}
              className="text-purple-800 hover:text-red-600"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Datacard;
