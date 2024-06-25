import SideBar from "./components/SideBar";
import ChatSection from "./components/ChatSection";
import { useState } from "react";

const App = () => {
  const [ifMobile, setIfMobile] = useState(false);
  const handleMobileSideBar = () => setIfMobile(!ifMobile);
  return (
    <div className="flex w-screen font-Inter">
      <SideBar ifMobile={ifMobile} setIfMobile={setIfMobile} />
      <ChatSection handleMobileSideBar={handleMobileSideBar} />
    </div>
  );
};

export default App;
