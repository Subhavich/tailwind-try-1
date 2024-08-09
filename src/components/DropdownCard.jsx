export default function DropdownCard() {
  return (
    <div className=" w-full max-w-sm border border-gray-200 rounded-lg shadow">
      {/* dropdown btn and  */}
      <div className=" flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          className="inline-block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-400 focus:ring-4 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 16 3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* dropdown menu */}
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100"
        >
          <ul className="py-2">
            <li>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-600 ">
                Edit
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-600 ">
                Edit
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-600">
                Edit
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* card content */}
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 rounded-full mb-3 shadow-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Banan.jpg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Banana Orange
        </h5>
        <span className="text-sm text-gray-500">Tropical Fruit</span>
        <div className="flex mt-4 md:mt-6">
          <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-500">
            Add Friend
          </a>
        </div>
      </div>
    </div>
  );
}
