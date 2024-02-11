import { FieldValues, useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";

type TProps = {
  onSubmit: (data: FieldValues) => void;
  isLoading: boolean;
};

const AddUserForm = ({ onSubmit, isLoading }: TProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50  py-5">
      <h3 className="text-xl font-bold text-rose-600 py-5">Add User</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="firstName" className="block text-gray-600">
                First Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                {...register("firstName")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="lastName" className="block text-gray-600">
                Last Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                {...register("lastName")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="age" className="block text-gray-600">
                Age
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="age"
                type="text"
                placeholder="Enter Age"
                {...register("age")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="productNAme" className="block text-gray-600">
                City
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="name"
                type="text"
                placeholder="Enter City"
                {...register("city")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="state" className="block text-gray-600">
                State
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="state"
                type="text"
                placeholder="Enter State"
                {...register("state")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="title"
                type="text"
                placeholder="Enter Title"
                {...register("title")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="companyAddress" className="block text-gray-600">
                Company Address
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="companyAddress"
                type="text"
                placeholder="Enter Company Address"
                {...register("companyAddress")}
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="userAgent" className="block text-gray-600">
                User Agent
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="userAgent"
                type="text"
                placeholder="Enter User Agent"
                {...register("userAgent")}
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="middleName" className="block text-gray-600">
                Middle Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="middleName"
                type="text"
                placeholder="Enter Middle Name"
                {...register("middleName")}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="userName" className="block text-gray-600">
                User Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="userName"
                type="text"
                placeholder="Enter User Name"
                {...register("userName")}
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="address"
                type="text"
                placeholder="Enter Address"
                {...register("address")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="postCode" className="block text-gray-600">
                Post Code
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="postCode"
                type="number"
                placeholder="Enter Post Code"
                {...register("postCode")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="companyName" className="block text-gray-600">
                Company Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="companyName"
                type="text"
                placeholder="Enter Company Name"
                {...register("companyName")}
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="department" className="block text-gray-600">
                Department
              </label>
              <input
                className="w-full px-14 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="department"
                type="text"
                placeholder="Enter department"
                {...register("department")}
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="phone" className="block text-gray-600">
                phone
              </label>
              <input
                className="w-full px-14 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                id="phone"
                type="number"
                placeholder="Enter phone number"
                {...register("phone")}
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="gender" className="block text-gray-600">
                Gender
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                {...register("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {isLoading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
