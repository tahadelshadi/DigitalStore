import { CiSearch } from "react-icons/ci";

const NavSearchForm = () => {
  return (
    <form className="flex items-center md:min-w-[550px] w-full">
      <div className="relative w-full">
        <button
          type="submit"
          className="absolute z-10 inset-y-0 start-0 flex items-center ps-3 ms-1 text-sm font-medium text-white">
          <CiSearch className="w-5 h-5 text-gray-400" />
        </button>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-100 w-full  text-gray-900 text-sm rounded-lg block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Type to search..."
          required
        />
      </div>
    </form>
  );
};

export default NavSearchForm;
