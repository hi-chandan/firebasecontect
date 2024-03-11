import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import Datacard from "./Datacard";
import AddFrom from "./AddFrom";
import { FaCircleMinus } from "react-icons/fa6";

const Addupdate = () => {
  const [contacts, setContacts] = useState([]);
  const contactsRef = collection(db, "contects");
  const [close, setclose] = useState(false);
  const [filterdata, setfilterdata] = useState();
  const [refresh, setrefresh] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const gettoggle = () => {
    setclose((val) => !val);
  };

  const getserach = (e) => {
    e.preventDefault();
    const getfilterdata = e.target.value;
    console.log("this is search", getfilterdata);

    if (getfilterdata === "") {
      return setfilterdata(contacts);
    }

    const filter = contacts?.filter((val) =>
      val.name.toLowerCase().includes(getfilterdata),
    );
    setfilterdata(filter);
  };

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
        // setclose((val) => !val);
        setfilterdata(contactList);
        setContacts(contactList); // Updated state variable
      } catch (error) {
        console.log("Database error:", error); // Improved error handling
      }
    };
    getContacts();
  }, [close, refresh]);

  return (
    <section className="mt-30 container mt-10 flex flex-col items-center justify-center  ">
      <div className="w-full max-w-[370px] space-y-4 px-4">
        <Navbar />
        <div className="relative flex items-center gap-4">
          <CiSearch className="absolute left-2 text-3xl" />
          <input
            type="text"
            className="h-10 flex-grow rounded-lg border-2 border-white bg-transparent pl-10 text-lg font-semibold outline-none"
            placeholder="search contact"
            onChange={(e) => getserach(e)}
          />
          {close ? (
            <FaCircleMinus className="text-5xl" onClick={gettoggle} />
          ) : (
            <FaCirclePlus onClick={gettoggle} className="text-5xl" />
          )}
        </div>
        <div className="">
          {close ? (
            <AddFrom
              gettoggle={gettoggle}
              namevalue={name}
              emailvalue={email}
            />
          ) : (
            ""
          )}
        </div>
        {close ? "" : <Datacard data={filterdata} getrefresh={setrefresh} />}
      </div>
    </section>
  );
};

export default Addupdate;
