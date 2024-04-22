"use client"; // This is a client component 👈🏽

import { FormEvent } from 'react'
import { useState } from 'react'

import { UserFormDataSchema } from '@/app/schemas/userSchema';
import { z } from 'zod'

// https://react-hook-form.com/docs/useform#resolver
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm, FormProvider, useFormContext, SubmitHandler } from "react-hook-form"

import BasicSignUpInfo from './basicSignUp';
import AddressForm from './addressForm'
import SportSignUp from './sports/sportInfo';
import { Single_Day } from 'next/font/google';

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations
// https://react.dev/learn/choosing-the-state-structure#principles-for-structuring-state
// https://react.dev/learn/typescript

// https://nextjs.org/docs/app/building-your-application/rendering

// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp


// Ideally, we also style these forms a bit more.
// This should join everything together, 
// Player ( User ) consists of:
// Part 1 - Basic Information
type BasicInformation = {
  player_first_name: string;
  player_last_name: string;
  player_phone: string;
  player_email: string;
  player_password: string;
  player_dob: string;
  player_address: string;
  player_apartment: string;
  player_city: string;
  player_state: string;
  player_postal_code: string;
  player_country: string;
  parent_first_name: string;
  parent_last_name: string;
  parent_email: string;
  parent_phone: string;
};

// Part 2 - Sports
// Need to include sport played silly
type SportInformation = {
  organization_name: string;
  position_one: string;
  position_two?: string;
};

// Part 3 - Academics
type SchoolInformation = {
  graduation_date: string;
  player_school_year: number;
  player_act_score: number;
  player_sat_score: number;
};



export interface UserPlayerInformation  {
  player_basic_info: BasicInformation;
  player_school_info: SchoolInformation;
  player_sport_info: SportInformation;
}

type Inputs = z.infer<typeof UserFormDataSchema>


export default function PlayerSignUpForm() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep
  const methods = useForm()

  
  const onSubmit = (data) => {

  // On the bright side, I managed to get the data and set everything up today, now it will just be adding it to the state object.
  console.log("LOOK FOR THIS DATA:", data)
  //   setUserPlayerInfo(
  //     {...userPlayerInfo,
  //     player_basic_info: {
  //             ...userPlayerInfo.player_basic_info,
  //             ...updates,
  //     },
  // })
  
  }

  // https://stackoverflow.com/questions/71324797/react-typescript-what-does-dispatchsetstateactionboolean-stand-for
  // Pretty good, talks about hovering over the state to see the <Dispatch> stuff 

  const [userPlayerInfo, setUserPlayerInfo] = useState<UserPlayerInformation>({
    player_basic_info: {
      player_first_name: '',
      player_last_name: '',
      player_phone: '', 
      player_email: '',
      player_password: '',
      player_dob: '',

      player_address: '',
      player_apartment: '',
      player_city: '',
      player_state: '',
      player_postal_code: '',
      player_country: '',

      parent_first_name: '',
      parent_last_name: '',
      parent_email: '',
      parent_phone: ''
    },
    player_school_info: {
      graduation_date: '', 
      player_school_year: 0,
      player_act_score: 0,
      player_sat_score: 0
    },
    player_sport_info: {
      organization_name: '',
      position_one: '',
      position_two: ''
    }
  });

  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault()
    
  //     const formData = new FormData(event.currentTarget)
  //     const response = await fetch('/api/submit', {
  //       method: 'POST',
  //       body: formData,
  //     })
    
  //     // Handle response if necessary
  //     const data = await response.json()
  //     // ...
  //   }


  const steps = [
    {
      id: 'Step 1',
      name: 'Personal Information',
      fields: ['player_first_name', 'player_last_name', 'player_phone']
    },
    {
      id: 'Step 2',
      name: 'Address',
      fields: ['country', 'state', 'city', 'street', 'zip']
    },
    { id: 'Step 3', name: 'Complete' }
  ]


    // Some things to consider, if linking a parents mobile and email, should we also take their name down?

    // Thinking of breaking this down into 3 parts?

    // Part 1 - Basic Information
    // Name, Email, Parents Info.

    // Part 2- Sports
    // Should include club team option, school team, travel team, academy team?
    // In this part, one may get away with having them write positions and such, but maybe it's better to have our own on hand? 
    // Sport
    // Player position
    // Secondary Position
    // Coaches 

    // Part 3 - Academics
    // GPA
    // ACT / SAT
    // Current School Year
    // Graduation date, 
    // College Major?
    // Middle - College ? 

    // Option to include their accolades

    // Need to have state object to be sent in, with types declared
    // Will include all of the above.

    // Way to authenticate user will be done after / authenticate / cache/ cookies? 
 
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/


    // https://www.reddit.com/r/nextjs/comments/1ah721o/what_is_everyones_favorite_tool_for_creating/
    // https://react-hook-form.com/get-started#ReactWebVideoTutorial
    // https://react-hook-form.com/advanced-usage 



    console.log( " Player signing up : ", userPlayerInfo)

    //https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content



    // Everything should rest a the top level, 
    // The idea here is to use form provider to have the form context and props available in the children components

    // https://react-hook-form.com/docs/formprovider




    // First choice presented for a user : 
    // Are you 18+ / Parent sign up
    // coaches / other portion too 

    //  Present Info
    // basic / parent / etc
    // address
      // sports 
      // soccer, etc, 
      // teams
      // sort by area and such?
      // Position -- Extra details?
    
    // Current school standing / etc
    
    const {
      register,
      handleSubmit,
      watch,
      reset,
      trigger,
      formState: { errors }
    } = useForm<Inputs>({
      resolver: zodResolver(UserFormDataSchema)
    })
    console.log("The Errors:",errors);

    const processForm: SubmitHandler<Inputs> = data => {
      console.log("CHECK THIS DATA:", data)
      reset()
    }
  
    type FieldName = keyof Inputs

    const next = async () => {
      const fields = steps[currentStep].fields
      const output = await trigger(fields as FieldName[], { shouldFocus: true })
  
      if (!output) return
  
      if (currentStep < steps.length - 1) {
        if (currentStep === steps.length - 2) {
          await handleSubmit(processForm)()
        }
        setPreviousStep(currentStep)
        setCurrentStep(step => step + 1)
      }
    }
  
    const prev = () => {
      if (currentStep > 0) {
        setPreviousStep(currentStep)
        setCurrentStep(step => step - 1)
      }
    }

    
    // const goToPreviousPage = () => {
    //   setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectDisplayComponents.length - 1));
    // }
    
    //   const goToNextPage = () => {
    //     setSelectedIndex((prevIndex) => (prevIndex + 1) % projectDisplayComponents.length);
    // }


    // Steps included, tomorrow will connect route and button!

    // Gray working on having the designs come in before I continue heavily css.

    // Currently working on the excaldraw also to properly set everything up, 


    return (
    <FormProvider {...methods}>
      <div> 
       {/* Sections provide pre-selection, this page will allow flow of sign up */}
       <section className='relative z-10 flex flex-col justify-center p-8 bg-white shadow-md'>

        {/* Steps */}
        <nav aria-label='Progress'>
          <ol className='flex justify-center space-x-4 md:space-x-6'>
            {steps.map((step, index) => (
              <li key={step.name} className='flex-1'>
                <div className={`group flex w-full flex-col items-center transition-colors duration-200 ease-in-out ${
                  currentStep > index ? 'border-b-4 border-sky-600' : currentStep === index ? 'border-b-4 border-sky-600' : 'border-b-4 border-gray-200'
                }`}>
                  <span className={`text-sm font-medium ${
                    currentStep >= index ? 'text-sky-600' : 'text-gray-500'
                  } transition-colors duration-200 ease-in-out`}>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>
                    {step.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </section>


      {/* pass all methods into the context */}
      <form onSubmit={handleSubmit(processForm)}>
      {currentStep === 0 && (
          // <motion.div
          //   initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.3, ease: 'easeInOut' }}
          // >

          // </motion.div>
          <div>
        <BasicSignUpInfo 
        userPlayerInfo={userPlayerInfo}
        setUserPlayerInfo={setUserPlayerInfo} 
        basicErrors={errors}
      />
          </div>
        )}

      
    {currentStep === 1 && (
          <AddressForm
          userPlayerInfo={userPlayerInfo}
          setUserPlayerInfo={setUserPlayerInfo} 
          />
        )}

      {/* <SportSignUp/> */}


        <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
            <input type="checkbox" name="checkbox" className="float-left -ml-[20px] mt-1" />
            <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
            </span>
        </label>

        <input type="submit" value="Join SportPal" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />


         {/* Navigation */}
      <div className='mt-8 pt-5'>

        <div className='flex justify-between'>
          <button
            type='button'
            onClick={prev}
            disabled={currentStep === 0}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>

          {/* Right arrow button 
          
          Can add a order around the button with an arrow > but im just going to skip all styling for now lol

          */}
          <button
            type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='black'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>

        </div>
      </div>

      </form>

        
        </div>
    </FormProvider>
    
    )
  }