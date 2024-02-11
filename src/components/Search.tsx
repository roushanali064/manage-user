import { FieldValues, useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

type TProps = {
  handleSearch: (data: FieldValues)=>void
}

const Search = ({handleSearch}:TProps) => {
  const {handleSubmit, register} = useForm()
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <form onSubmit={handleSubmit(handleSearch)}>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search user"
            {...register('search')}
            className="rounded-full input  w-full md:w-auto"
          />
          <button type="submit" className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
