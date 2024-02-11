import { useState } from "react";
import AddUserForm from "../components/AddUserForm";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  // on submit
  const onSubmit = (data: FieldValues) => {
    setIsLoading(true)
    const user = {
      address: data.address,
      age: data.age,
      city: data.city,
      phone: data.phone,
      companyAddress: data.companyAddress,
      companyName: data.companyName,
      department: data.department,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      middleName: data.middleName,
      postCode: data.postCode,
      state: data.state,
      title: data.title,
      userAgent: data.userAgent,
      userName: data.userName,
    };

    // add user
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(data=>{
        setIsLoading(false)
        toast.success('User add successFully')
      });
  };
  return <AddUserForm isLoading={isLoading} onSubmit={onSubmit} />;
};

export default AddUser;
