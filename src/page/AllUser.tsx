import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TUser } from "../type/user";
import Search from "../components/Search";
import { FieldValues } from "react-hook-form";
import {
  sortUserByCompanyName,
  sortUserByEmail,
  sortUserByName,
} from "../utils/sortUser";
import Sort from "../components/Sort";

const AllUser = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sorted, setSorted] = useState(false);
  const [skip, setSkip] = useState(0);

  const searchUrl = searchValue.length ? `${`/search?q=${searchValue}`}` : "";
  const url = `https://dummyjson.com/users${
    searchUrl.length
      ? searchUrl + "&limit=9" + "&skip=" + skip
      : "?limit=9" + "&skip=" + skip
  }`;

  console.log(url);

  // get user side effect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [searchValue, skip]);

  //   handle pagination
  const handlePagination = (status: boolean) => {
    if (status) {
      setSkip(skip + 9);
    }

    if (!status && skip > 0) {
      setSkip(skip - 9);
    }
  };

  // handle search
  const handleSearch = (data: FieldValues) => {
    setSkip(0);
    setSearchValue(data.search);
  };

  //   handle name sorting
  const handleNameSorting = () => {
    const sortedUser = sortUserByName(users);
    setUsers(sortedUser);
    setSorted(!sorted);
  };

  //   handle email sorting
  const handleEmailSorting = () => {
    const sortedUser = sortUserByEmail(users);
    setUsers(sortedUser);
    setSorted(!sorted);
  };

  //   handle company name sorting
  const handleCompanyNameSorting = () => {
    const sortedUser = sortUserByCompanyName(users);
    setUsers(sortedUser);
    setSorted(!sorted);
  };

  useEffect(() => {
    if (sorted) {
      setSorted(!sorted);
    }
  }, [sorted]);

  return (
    <div className="mt-5 w-full flex flex-col justify-center items-center">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        {/* sorting */}
        <Sort
          handleNameSorting={handleNameSorting}
          handleEmailSorting={handleEmailSorting}
          handleCompanyNameSorting={handleCompanyNameSorting}
        />

        {/* search */}
        <Search handleSearch={handleSearch} />
      </div>

      {/* show card */}
      {users.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
          {users.map((user: TUser) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center font-semibold text-xl">
          No Data Found
        </p>
      )}

      {/* pagination */}
      <div className="flex justify-center md:justify-end mt-5">
        <div className="join grid grid-cols-2">
          <button
            disabled={skip == 0}
            onClick={() => handlePagination(false)}
            className="join-item btn btn-outline"
          >
            Previous page
          </button>
          <button
            disabled={!users.length}
            onClick={() => handlePagination(true)}
            className="join-item btn btn-outline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
