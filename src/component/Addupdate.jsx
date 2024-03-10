import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import Datacard from "./Datacard";
import AddFrom from "./AddFrom";
const Addupdate = () => {
  const [contacts, setContacts] = useState([]);
  const [addcontact, setaddcontact] = useState();
  const contactsRef = collection(db, "contects");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const dbval = await getDocs(contactsRef);
        const contactList = dbval.docs.map((doc) => {
          // Corrected variable name
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("This is list", contactList);
        setContacts(contactList); // Updated state variable
      } catch (error) {
        console.log("Database error:", error); // Improved error handling
      }
    };

    getContacts();
  }, []);

  return (
    <section className="mt-30 container mt-10 flex flex-col items-center justify-center ">
      <div className="w-full max-w-[370px] space-y-4 px-4">
        <Navbar />
        <div className="relative flex items-center gap-4">
          <CiSearch className="absolute left-2 text-3xl" />
          <input
            type="text"
            className="h-10 flex-grow rounded-lg border-2 border-white bg-transparent pl-10 text-lg font-semibold outline-none"
            placeholder="search contact"
          />
          <FaCirclePlus className="text-5xl" />
        </div>
        <div className="absolute  bg-red-400">
          <AddFrom />
        </div>
        <Datacard data={contacts} />
      </div>
    </section>
  );
};

export default Addupdate;
