import { useState } from "react";
import { BotChatIcon, SendeSvg } from "./icons";

const ChatSection = ({ handleMobileSideBar }) => {
  const [inputVal, setInputVal] = useState("");
  const [displayInputVal, setDisplayInputVal] = useState("");

  const handleInputChange = (e) => setInputVal(e.target.value);

  const handleButtonClick = () => {
    setDisplayInputVal(inputVal);
    setInputVal("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div className="bg-[#002423] w-full text-white h-screen px-2 md:px-14 lg:px-16 xl:px-20 py-14">
      <div
        onClick={handleMobileSideBar}
        className="absolute top-2 left-2 z-0 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
      <div
        id="chatBody"
        className="overflow-y-auto"
        style={{
          height: "calc(100vh - 150px)",
        }}
      >
        <div className="flex gap-4 overflow-x-auto box-border bg-[#aaf0ec25] mx-4 p-4 break-words  items-center rounded-lg">
          <span>
            <BotChatIcon />
          </span>
          <p className="break-words max-w-[830px]">{displayInputVal}</p>
        </div>
      </div>
      {/* Chat Footer  */}
      <div className="relative px-2 md:px-4 mt-3">
        <textarea
          id="userInput"
          className="w-full pl-4 pr-16 break-words whitespace-break-spaces py-2 outline-none bg-[#001C1B] resize-none rounded-lg"
          placeholder="Type Here..."
          style={{
            paddingTop: "18px",
            lineHeight: "80%",
          }}
          value={inputVal}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
        />
        <button onClick={handleButtonClick} className="absolute right-5 top-1">
          <SendeSvg />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
