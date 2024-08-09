import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="mb-4 bg-white border shadow-lg border-gray-200 rounded-lg flex flex-row justify-around">
        <div className="inline-flex mr-auto">
          <img
            className="m-2 inline w-8 h-8 rounded-lg"
            src="https://picsum.photos/200"
          />
        </div>
        <div className=" text-xs text-gray-500 font-medium inline-flex items-center divide-x-2 divide-gray-400">
          <NavLink className="p-2">Home</NavLink>
          <NavLink className="p-2">Cards</NavLink>
          <NavLink className="p-2">Grid Thingy</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}
