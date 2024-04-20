import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

export default function SchoolSignUp() {

    // Part 2 - Academics
    // Middle - College ? 

    // GPA
    // ACT / SAT
    // Current School Year
    // Graduation date, 
    // College Major?
    // Middle - College ? 

    return (
        <>
        <div className="sm:col-span-2">
            <label htmlFor="act" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">ACT</label>
            <input 
            type="number" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="ACT"/>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="sat" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">SAT</label>
            <input 
            type="number" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="SAT"/>
        </div>


        {/* I think the best option to do this would be 5-12th as options? */}
        <div className="sm:col-span-2">
            <label htmlFor="current_school_year" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Current School Year</label>
            <input 
            type="number" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            // placeholder="SAT"
            />
        </div>


        <div className="sm:col-span-2">
            <label htmlFor="email_address" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Graduation Date</label>
            <input type="number" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="Email Address" />
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="college_major" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">College Major</label>
            <input type="text" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="College Major" />
        </div>
         </>
    )
  }