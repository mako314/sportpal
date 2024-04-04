import { FormEvent } from 'react'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

export default function SportSignUp() {

    // https://excalidraw.com/#json=duh3nj3TSZjOcTjmxKhxT,ll7H6l85w19xbr9eezyfFA


    // Part 3 - Sports
    // Should include club team option, school team, travel team, academy team?
    // In this part, one may get away with having them write positions and such, but maybe it's better to have our own on hand? 
    // Sport
        // Need the ability to add multiple sports... should sport just be its own table? Because a player may have multiple sports like baseball and football.
        // Sport should be a standalone... how should I do this? 

        // There'd be for example, basketball, soccer.
        // Now lets say a soccer player joins. How would this tie to this player? 
        // Soccer > Teams > Mako Sharks Florida > Individual Players > 

        // Select from sports > load team for these sports, maybe by their age bracket > req join team / pend 
        
        // Select from sports > can't find team > create team > generate invite links for rest of members to sign up 

    // Allow two player positions? per sport?
    // Player position            
    // Secondary Position

    // Coaches --- Can be tied in VIA team.

    // Most definitely need to create a sport table for sports applicable to the site, this way when a players account is created they can tie it to that sport + team.

    return (
        <>
        <div className="sm:col-span-2">
            <label htmlFor="act" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">ACT</label>
            <input 
            type="number" 
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]" 
            placeholder="ACT"/>
        </div>
         </>
    )
  }