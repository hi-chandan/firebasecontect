import Addupdate from "./component/Addupdate";
import { createContext, useState } from "react";
export const Globalinfo = createContext();
export default function App() {
  const [name, setname] = useState("");
  const [email, setemial] = useState("");
  const [updateid, setupdateid] = useState("");
  const [updatebutton, setupdatebutton] = useState(false);

  return (
    <div className="">
      <Globalinfo.Provider
        value={{
          updatebutton: updatebutton,
          setupdatebutton: setupdatebutton,
          setupdateid: setupdateid,
          updateid: updateid,
          name: name,
          email: email,
          setname: setname,
          setemail: setemial,
        }}
      >
        <Addupdate />
      </Globalinfo.Provider>
    </div>
  );
}
