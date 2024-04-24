import React from 'react';
import { UserPlayerInformation } from './playerSignUpForm'

import { FormEvent } from 'react'

import { useFormContext } from 'react-hook-form';
import {Inputs } from '@/app/schemas/userSchema'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations
// https://www.youtube.com/watch?v=lW_0InDuejU&t=864s
// https://github.com/HamedBahram/next-multistep-form/tree/main

interface BasicSignUpInfoProps {
    userPlayerInfo: UserPlayerInformation;
    setUserPlayerInfo: (info: UserPlayerInformation) => void;
  }



const BasicSignUpInfo: React.FC<BasicSignUpInfoProps> = ({ setUserPlayerInfo, userPlayerInfo}) => {

    const { register, formState } = useFormContext<Inputs>();
    const basicErrors = formState.errors
    console.log("errors basic sign up:", basicErrors);

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
// https://react-hook-form.com/docs/useform/register
// https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/


    return (
        
        <div>
            {/* React Hook Forms */}
        <div className="sm:col-span-2">
            <label htmlFor="player_first_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First Name</label>
            <input 
            {...register("player_first_name")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="First Name" 
            type="text"
            />
            

            {basicErrors.player_first_name?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_first_name.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Name</label>
            <input {...register("player_last_name")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Last Name"
            type="text"
            />
            {basicErrors.player_last_name?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_last_name.message}
            </p>
            )}


        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_dob" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Birth</label>
            <input {...register("player_dob")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"  
            type="date"
            />

            {basicErrors.player_dob?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_dob.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email Address</label>
            <input 
            {...register("player_email")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Email Address"
            type="text"
            />

            {basicErrors.player_email?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_email.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Mobile Number</label>
            <input {...register("player_phone")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Mobile Number"
            type="text"
            />

            {basicErrors.player_phone?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_phone.message}
            </p>
            )}

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

            {basicErrors.parent_first_name?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.parent_first_name.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_last_name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parent Last Name</label>
            <input {...register("parent_last_name")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parent Last Name"
            type="text"
            />

            {basicErrors.parent_last_name?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.parent_last_name.message}
            </p>
            )}
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Email</label>
            <input {...register("parent_email")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Email"
            type="text"
            />

            {basicErrors.parent_email?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.parent_email.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="parent_phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Parents Mobile Number</label>
            <input {...register("parent_phone")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Parents Mobile Number"
            type="text"
            />

            {basicErrors.parent_phone?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.parent_phone.message}
            </p>
            )}
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input {...register("player_password")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Password"
            type="password"
            />

            {basicErrors.player_password?.message && (
            <p className='mt-2 text-sm text-red-400'>
            {basicErrors.player_password.message}
            </p>
            )}

        </div>

        <div className="sm:col-span-2">
            <label htmlFor="player_confirm_password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input {...register("player_confirm_password")} 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Confirm Password"
            type="password"
            />


            
        </div>

        </div>
    )
  }

export default BasicSignUpInfo;
