import { FormEvent } from 'react'
import { useState } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

// This should join everything together, 

type SportInformation = {
  organization_name: string;
  position_one: string;
  position_two?: string;
};


export default function PlayerSignUpForm() {

  const [newUser, setNewUser] = useState()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
    
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
    
      // Handle response if necessary
      const data = await response.json()
      // ...
    }


    // Some things to consider, if linking a parents mobile and email, should we also take their name down?

    // Thinking of breaking this down into 3 parts?

    // Part 1 - Basic Information
    // Name, Email, Parents Info.

    // Part 2 - Academics
    // GPA
    // ACT / SAT
    // Current School Year
    // Graduation date, 
    // College Major?
    // Middle - College ? 

    // Part 3 - Sports
    // Should include club team option, school team, travel team, academy team?
    // In this part, one may get away with having them write positions and such, but maybe it's better to have our own on hand? 
    // Sport
    // Player position
    // Secondary Position
    // Coaches 
    

    // Option to include their accolades

    // Need to have state object to be sent in, with types declared
    // Will include all of the above.

    // Way to authenticate user will be done after / authenticate / cache/ cookies? 

    // 



    return (
    <form name="wf-form-player-signup" method="post">


        <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
            <input type="checkbox" name="checkbox" className="float-left -ml-[20px] mt-1" />
            <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
            </span>
        </label>
        <input type="submit" value="Join SportPal" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
    </form>
    )
  }