import { useLoaderData } from "react-router-dom";
import { MdEmail, MdFacebook, MdLocationOn, MdOutlineWork } from "react-icons/md";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaUnsplash,
  FaYoutube,
} from "react-icons/fa";
import { TUser } from "../type/user";

const UserDetails = () => {
  const user = useLoaderData() as TUser;
  console.log(user);
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      {/* Main Col */}
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          {/* Image for mobile view */}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage:  `url(${user?.image})`,
            }}
          ></div>
          {/* name */}
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{`${user?.firstName} ${user?.maidenName} ${user?.lastName}`}</h1>

          {/* company */}
          <h2 className="text-xl font-semibold pt-8 lg:pt-0">
            {user?.company?.name}
          </h2>

          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

          {/* employee position */}
          <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start space-x-4">
            <MdOutlineWork size={20} color="green" />
            <p>{user?.company?.title}</p>
          </div>

          {/* email */}
          <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start space-x-4">
            <MdEmail size={20} color="green" />
            <p>{user?.email}</p>
          </div>

          {/* Phone */}
          <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start space-x-4">
            <FaPhone size={20} color="green" />
            <p>{user?.phone}</p>
          </div>

          {/* location */}

          <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start space-x-4">
            <MdLocationOn size={20} color="green" />
            <p>{`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state}`}</p>
          </div>

          {/* social media icon */}
          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <MdFacebook size={30} />
            <FaTwitter size={30} />
            <FaGithub size={30} />
            <FaUnsplash size={30} />
            <FaDribbble size={30} />
            <FaInstagram size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </div>

      {/* side img*/}
      <div className="w-full lg:w-2/5">
        <img
          src={user?.image}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
};

export default UserDetails;
