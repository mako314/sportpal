import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

export default function SchoolSignUp() {

    // Part 2 - Academics
    // Middle - College ? 

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

        <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
            <input type="checkbox" name="checkbox" className="float-left -ml-[20px] mt-1" />
            <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
            </span>
        </label>
        <input type="submit" value="Join SportPal" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
         </>
    )
  }