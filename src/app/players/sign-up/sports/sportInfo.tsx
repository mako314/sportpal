import { FormEvent } from 'react'
import SportSelector from './sportSelector'

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

    // I think the best way to do this
    // 1) Create sport table < - may not be needed honestly.
    // 2) Teams should be linked to sports, create fk relationship with sport
    // 3) Create 5-10 team example for X sport, we'll do soccer

    // Process should be, individual selects sport, Team search can be based off of, name, zipcode, school > team not yet registered? > register team > team gets added to table
    // New FK should only be teams to sport, where if a team is deleted, we delete that entry also from sport.
    

    // 4/4/2024

    // Lets try this without a sports table for now, we'll pull sports by the teams sport field
    // So from this, state will be:
    // 1st position
    // 2nd position
    // Org Name

    // What would be better, the opportunity to add their achievements upon sign up, one post,
    // OR
    // After signup, allow addition of accolades

    return (
        <>


        {/* This should be a search form to search the database for the teams that currently exist */}
        {/* Position selection, will allow 2 positions to be selected. Becomes available after selecting sport? */}

        <SportSelector/>
         </>
    )
  }