import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <input
                      type="text"
                      placeholder="Search"
                      className="rounded-full input  w-full md:w-auto"
                    />
                  <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18} />
                  </div>
                </div>
              </div>
    );
};

export default Search;