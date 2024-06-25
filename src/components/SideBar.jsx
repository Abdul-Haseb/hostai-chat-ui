import { BotChatIcon, Logo } from "./icons";

const SideBar = ({ ifMobile, setIfMobile }) => {
  return (
    <>
      {ifMobile ? (
        <div className="max-w-[420px] absolute md:hidden z-10 top-0 left-0 bg-zinc-950 text-white p-8 h-screen">
          <Logo />
          <div
            onClick={() => setIfMobile(false)}
            className="absolute top-3 right-3 font-bold text-sm text-gray-600"
          >
            X
          </div>
          <div className="mt-16">
            <button className="flex items-center gap-1 bg-[#2CE15F] rounded-[57px] px-4 py-1">
              <BotChatIcon />
              <span className="whitespace-nowrap text-black font-semibold">
                Property 1
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-[420px] hidden md:block bg-zinc-950 text-white p-8 h-screen">
          <Logo />
          <div className="mt-16">
            <button className="flex items-center gap-1 bg-[#2CE15F] rounded-[57px] px-4 py-1">
              <BotChatIcon />{" "}
              <span className="whitespace-nowrap text-black font-semibold">
                Property 1
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
