import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

export default function PlayerSignUpForm() {

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

    return (
    // onSubmit={onSubmit}
    // <form>
    //   <input type="text" name="name" className='border-2 border-red-500'/>
    //   <button type="submit">Submit</button>
    // </form> 

    <form name="wf-form-password" method="get">
    <div className="relative">
        <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg" className="absolute left-[5%] top-[26%] inline-block" />
        <input type="email" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Email Address" />
    </div>
    <div className="relative mb-4">
        <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg" className="absolute left-[5%] top-[26%] inline-block" />
        <input type="password" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Password (min 8 characters)" />
    </div>
    <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
        <input type="checkbox" name="checkbox" className="float-left -ml-[20px] mt-1" />
        <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
        </span>
    </label>
    <input type="submit" value="Join Flowspark" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
    </form>
    )
  }




// <section> {/* Container */} <div className="grid gap-0 md:h-screen md:grid-cols-2"> {/* Component */} <div className="flex items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
//       <div className="max-w-md text-center">
//         <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">Start your 14-day free trial</h2> {/* Form */} <div className="mx-auto mb-4 max-w-[400px] pb-4">
//           <form name="wf-form-password" method="get">
//             <div className="relative">
//               <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg" className="absolute left-[5%] top-[26%] inline-block" />
//               <input type="email" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Email Address" />
//             </div>
//             <div className="relative mb-4">
//               <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg" className="absolute left-[5%] top-[26%] inline-block" />
//               <input type="password" className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Password (min 8 characters)" />
//             </div>
//             <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
//               <input type="checkbox" name="checkbox" className="float-left -ml-[20px] mt-1" />
//               <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
//               </span>
//             </label>
//             <input type="submit" value="Join Flowspark" className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
//           </form>
//         </div>
//         <p className="text-sm text-[#636262] sm:text-sm">Already have an account? <a href="#" className="font-bold text-[#0b0b1f]">Login now</a>
//         </p>
//       </div>
//     </div> {/* Component */} <div className="flex items-center justify-center bg-[#f2f2f7]">
//       <div className="mx-auto max-w-md px-5 py-16 md:px-10 md:py-24 lg:py-32">
//         <div className="mb-5 flex h-14 w-14 flex-col items-center justify-center bg-white md:mb-6 lg:mb-8">
//           <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg" alt="" className="inline-block" />
//         </div>
//         <p className="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.</p>
//         <p className="text-sm font-bold sm:text-base">John Robert</p>
//         <p className="text-sm sm:text-sm">Senior Webflow Developer</p>
//       </div>
//     </div>
//   </div>
// </section>