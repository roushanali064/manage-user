import { Link } from "react-router-dom";
import { TUser } from "../type/user";

const Card = ({ user }: { user: TUser }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-rose-600">
      <figure className="px-10 pt-10 ">
        <div className="avatar border p-2 rounded bg-green-500">
          <div className="w-24 mask mask-squircle">
            <img src={user?.image} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name:
          <Link
          className="text-green-500"
            to={`/user-details/${user?.id}`}
          >{`${user?.firstName} ${user?.maidenName} ${user?.lastName}`}</Link>
        </h2>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p>
          <span className="font-semibold">Company:</span> {user?.company?.name}
        </p>
        <p>
          <span className="font-semibold">Address:</span>
          {`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
