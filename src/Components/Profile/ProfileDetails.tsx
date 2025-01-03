import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Common/Button/Button";
import { useUserDetailsQuery } from "@/Redux/Api/userApi";

interface FormData {
  firstName: string;
  lastName: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  address: string;
  socialMedia: string;
  socialHandle: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfileDetails: React.FC = () => {


  const { result } = useUserDetailsQuery({}, {
    selectFromResult: ({ data }) => ({
        result: data?.result,
    }),
})

console.log(result);

  const [formData, setFormData] = useState<FormData>({
    firstName: "Lordjohnny",
    lastName: "Ace",
    nickname: "Lordjohnny ace",
    phoneNumber: "8454238355",
    email: "smansion45@yahoo.com",
    address: "72 pleasant view",
    socialMedia: "Instagram",
    socialHandle: "@lordjohnnyace",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data before submission
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="p-6 bg-white  shadow-lg rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              defaultValue={result?.firstName}
              readOnly
        
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              readOnly
              defaultValue={result?.lastName}
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nickname</label>
          <input
            type="text"
            name="nickname"
            readOnly
            defaultValue={result?.nickName}
         
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            readOnly
            defaultValue={result?.phone}
        
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={result?.email}
      
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            defaultValue={formData.address}
            readOnly
           
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Social Media</label>
            <select
              name="socialMedia"
              value={result?.customer.socialMedia}
           
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            >
              <option value={`Instagram`}>Instagram</option>
              <option value={`Facebook`}>Facebook</option>
              <option value={`Twitter`}>Twitter</option>
              <option value={`LinkedIn`}>LinkedIn</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Social Handle</label>
            <input
              type="text"
              name="socialHandle"
              readOnly
              defaultValue={result?.customer.socialMediaName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-red-600 text-sm font-medium underline"
          >
            DELETE ACCOUNT
          </button>
        </div>
        <div>
          <p className="text-green-600 text-sm font-medium">Your password has been updated.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color focus:border-color sm:text-sm"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          UPDATE
        </Button>
      </form>
    </div>
  );
};

export default ProfileDetails;
