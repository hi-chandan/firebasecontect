import Addupdate from "./component/Addupdate";
import { createContext } from "react";
export const Globalinfo = createContext();
export default function App() {
  return (
    <div className="">
      <Addupdate />
    </div>
  );
}
