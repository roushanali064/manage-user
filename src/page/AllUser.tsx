import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TUser } from "../type/user";

const AllUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(  ()=>{
       fetch('https://dummyjson.com/users')
       .then(res=>res.json())
       .then(data=> setUsers(data.users))
    },[])

    return (
        <div className="mt-5 w-full">
            <div className="">
                <h3 className="text-xl font-semibold text-rose-600 text-center">See All Users</h3>
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