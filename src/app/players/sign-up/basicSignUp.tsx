import React from 'react';
import { UserPlayerInformation } from './playerSignUpForm'
import { useForm } from 'react-hook-form';

import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations


interface BasicSignUpInfoProps {
    userPlayerInfo: UserPlayerInformation;
    setUserPlayerInfo: (info: UserPlayerInformation) => void;
  }

const BasicSignUpInfo: React.FC<BasicSignUpInfoProps> = ({ setUserPlayerInfo, userPlayerInfo }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // Part 1 - Basic Information
    // Name, Email, Parents Info. DOB, email, phone, password

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        
        console.log("The name attribute being changed:", name)
        console.log("The value attribute being added:", value)

        setUserPlayerInfo(
            {...userPlayerInfo,
            player_basic_info: {
                    ...userPlayerInfo.player_basic_info,
                    [name]: value,
            },
        })
        // return null;
}

// https://www.reddit.com/r/reactjs/comments/16xijqi/is_reacthookform_ideal_for_a_form_with_over_a/



    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* React Hook Forms */}
        <div className="sm:col-span-2">
            <label htmlFor="player_first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First Name</label>
            <input {...register("firstName")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="First Name" 
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Name</label>
            <input {...register("firstName")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Last Name"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_dob" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Birth</label>
            <input {...register("firstName")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"  
            type="date"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email Address</label>
            <input {...register("player_email")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Email Address"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Mobile Number</label>
            <input {...register("player_phone")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Mobile Number"
            type="text"
            />
        </div>

        {/* 
        
        PARENT INFORMATION   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        
        */}

        <div className="sm:col-span-2">
            <label htmlFor="parent_first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parent First Name</label>
            <input {...register("parent_first_name")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parent First Name"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parent Last Name</label>
            <input {...register("player_phone")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parent Last Name"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Email</label>
            <input {...register("parent_email")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Email"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Mobile Number</label>
            <input {...register("parent_phone")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Mobile Number"
            type="text"
            />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input {...register("player_password")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Password"
            type="text"
            />
        </div>
        
        </form>
    )
  }

export default BasicSignUpInfo;
