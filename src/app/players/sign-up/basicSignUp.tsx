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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        // const bookToAdd = 
        setUserPlayerInfo(
            {...userPlayerInfo,
            player_basic_info: {
                    ...userPlayerInfo.player_basic_info,
                    [name]: value,
            },
        })
        // return null;
}

    return (
        <>
        <div className="sm:col-span-2">
            <label htmlFor="player_first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First Name</label>
            <input 
            type="text" 
            name="player_first_name"
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="First Name" 
            value={userPlayerInfo.player_basic_info.player_first_name}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Name</label>
            <input 
            type="text"
            name="player_last_name" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Last Name" 
            value={userPlayerInfo.player_basic_info.player_last_name}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_dob" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Birth</label>
            <input 
            type="date" 
            name="player_dob" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            value={userPlayerInfo.player_basic_info.player_dob}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email Address</label>
            <input 
            type="text"
            name="player_email" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Email Address" 
            value={userPlayerInfo.player_basic_info.player_email}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Mobile Number</label>
            <input 
            type="text" 
            name="player_phone" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Mobile Number" 
            value={userPlayerInfo.player_basic_info.player_phone}
            onChange={handleChange}
            />
        </div>


        {/* 
        
        PARENT INFORMATION   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        
        */}

        <div className="sm:col-span-2">
            <label htmlFor="parent_first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parent First Name</label>
            <input 
            type="text" 
            name="parent_first_name"
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="First Name" 
            value={userPlayerInfo.player_basic_info.parent_first_name}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parent Last Name</label>
            <input 
            type="text"
            name="parent_last_name" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Last Name" 
            value={userPlayerInfo.player_basic_info.parent_last_name}
            onChange={handleChange}
            />
        </div>

        
        <div className="sm:col-span-2">
            <label htmlFor="parent_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Email</label>
            <input 
            type="text" 
            name="parent_email" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Email" 
            value={userPlayerInfo.player_basic_info.parent_email}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Mobile Number</label>
            <input 
            type="text" 
            name="parent_phone" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Mobile Number" 
            value={userPlayerInfo.player_basic_info.parent_phone}
            onChange={handleChange}
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input 
            type="player_password" 
            name="player_last_name" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Password (min 8 characters)" 
            value={userPlayerInfo.player_basic_info.player_password}
            onChange={handleChange}
            />
        </div>
        </>
    )
  }

export default BasicSignUpInfo;
