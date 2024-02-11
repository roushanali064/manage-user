import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TUser } from "../type/user";
import Search from "../components/Search";
import { FieldValues } from "react-hook-form";

const AllUser = () => {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    // fetch users
    // if(searchValue.search){
    //         fetch(`https://dummyjson.com/users/search?q=${searchValue.search}`,)
    //         .then(res=>res.json())
    //         .then(data=> setUsers(data.users))
    // }
    const url = `https://dummyjson.com/users${searchValue.length? `${`/search?q=${searchValue}`}` : ''}`;
    console.log(url);
    useEffect(  ()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=> setUsers(data.users))
    },[searchValue])

    // handle search
    const handleSearch = (data: FieldValues)=>{
        setSearchValue(data.search)
    }

    return (
        <div className="mt-5 w-full">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row">
                <div>filter</div>
                <Search handleSearch={handleSearch}/>
            </div>
            {
                users.length ? <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
                {users.map((user: TUser)=><Card
                    key={user.id}
                    user={user}
                />)}
            </div>:
            <p className="text-gray-600 text-center font-semibold text-xl">No Data Found</p>
            }
        </div>
    );
};

export default AllUser;