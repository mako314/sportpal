import React from 'react';
import { UserPlayerInformation } from './playerSignUpForm'
import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations


interface BasicSignUpInfoProps {
    userPlayerInfo: UserPlayerInformation;
    setUserPlayerInfo: (info: UserPlayerInformation) => void;
  }

const BasicSignUpInfo: React.FC<BasicSignUpInfoProps> = ({ setUserPlayerInfo, userPlayerInfo }) => {

    // Part 1 - Basic Information
    // Name, Email, Parents Info. DOB, email, phone, password

    const handleChange = (e) => {
        const {name, value} = e.target
        // const bookToAdd = 
        setUserPlayerInfo(
            {...userPlayerInfo,
            [name]: value}
        )
        // return null;
    }

    return (
        <>
        <div className="sm:col-span-2">
            <label htmlFor="first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First Name</label>
            <input 
            type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="First Name" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Name</label>
            <input type="text"
            name="last_name" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Last Name" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="date_of_birth" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Birth</label>
            <input type="date" 
            name="date_of_birth" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="email_address" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email Address</label>
            <input type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Email Address" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="mobile_number" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Mobile Number</label>
            <input type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Mobile Number" />
        </div>
        
        <div className="sm:col-span-2">
            <label htmlFor="parents_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Email</label>
            <input type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Email" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parents_mobile" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Mobile Number</label>
            <input type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Mobile Number" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input type="password" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Password (min 8 characters)" />
        </div>
        </>
    )
  }

export default BasicSignUpInfo;
