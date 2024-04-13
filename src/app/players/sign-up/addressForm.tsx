// https://developers.google.com/maps/documentation/javascript/using-typescript
// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-typescript
// https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/places-autocomplete-addressform/jsfiddle

// https://codesandbox.io/p/sandbox/muddy-pine-88gugr?file=%2Fsrc%2Findex.ts%3A4%2C9

// Calling .envs in Next.js : https://refine.dev/blog/next-js-environment-variables/#using-environment-variables-in-the-browser
// https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
// '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}'


import React, { useEffect } from 'react';
import { UserPlayerInformation } from './playerSignUpForm'

type AdddressInformation = {
  player_address: string;
  player_apartment: string;
  player_city: string;
  player_state: string;
  player_postal_code: string;
  player_country: string;
};

interface BasicSignUpInfoProps {
  userPlayerInfo: UserPlayerInformation;
  setUserPlayerInfo: (info: UserPlayerInformation) => void;
}

const AddressForm: React.FC<BasicSignUpInfoProps> = ({ setUserPlayerInfo, userPlayerInfo }) => {

  useEffect(() => {
    // Function to dynamically load the Google Maps script
    const loadGoogleMapsScript = (callback) => {
      if (typeof google !== 'undefined') {
        // Google Maps script is already loaded
        callback();
        return;
      }
      console.log("The environment variable : ", process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY)
      const script = document.createElement('script');
      script.id = 'google-maps-script'; // Assign an ID for easy removal
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY}&libraries=places&v=weekly`;
      document.head.append(script);
      script.onload = () => {
        callback();
      };
    };

    loadGoogleMapsScript(initAutocomplete);

    // Cleanup function
    return () => {
      // Remove the script element by ID
      const script = document.getElementById('google-maps-script');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

// Address Form 

// This sample uses the Places Autocomplete widget to:
// 1. Help the user select a place
// 2. Retrieve the address components associated with that place
// 3. Populate the form fields with those address components.

let autocomplete;
let address1Field;
let address2Field;
let postalField;


function initAutocomplete() {
  address1Field = document.querySelector("#ship-address");
  address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postcode");


  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: {
      country: ["us", "ca"]
    },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field.focus();
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {

  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();

  const updates: AdddressInformation = {
    player_address: "",
    player_apartment: "",
    player_city: "",
    player_state: "",
    player_postal_code: "",
    player_country: "",
  }; // Object to hold updates

  let address1 = "";
  let postcode = "";
  let apartment = "";
  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr



  // So this is where we must considering the charging stuff, I remember google talking about being responsible for billing charges for all the things one calls. 
  // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-typescript
  // I do not call set fields, I call autocomplete.getPlace()
  // " You can specify which place data fields to return by calling Autocomplete.setFields(), and specifying one or more place data fields. Caution: If you don't call Autocomplete.setFields(), then all of the available place data fields for a place result are returned, and you are billed for all of them. "
  // https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.getPlace
  // We'll see how the billing handles this 

  // Testing stuff with console log! 
  console.log(place.address_components)

  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {

        address1 = `${component.long_name} ${address1}`;
        console.log("street #:", address1)

        updates['player_address'] = `${component.long_name} ${updates['player_address'] || ''}`;
        break;
      }

      case "route": {
        address1 += component.long_name;
        console.log("case route:", address1 )

         // Append or set the street name
         updates['player_address'] = `${updates['player_address'] || ''} ${component.long_name}`;

        break;
      }

      case "postal_code": {

        postcode = `${component.long_name}${postcode}`;
        console.log("postal_code:", postcode )

        // updates['player_postal_code'] = component.long_name; // Set Postal Code - 4 numbers
        break;
      }

      case "postal_code_suffix": {

        postcode = `${postcode}-${component.long_name}`;
        console.log("postal_code_suffix:", postcode )

        updates['player_postal_code'] = `${postcode}`; // Set Postal Code - the more than 4 number
        break;
      }
      case "locality":

        document.querySelector("#locality").value = component.long_name;
        console.log("city:", component.long_name )

        updates['player_city'] = component.long_name; // Set Postal Code - the more than 4 number
        break;
      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.long_name;
        console.log("state:", component.long_name )

        updates['player_state'] = component.long_name; // Set State - Swapped out short for long
        break;
      }
      case "country":
        document.querySelector("#country").value = component.long_name;
        console.log("country:", component.long_name)

        updates['player_country'] = component.long_name; // Set Country
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;

  // Address 2 field captures apartment, unit, suite, or floor #
  apartment = address2Field.value 
  updates['player_apartment'] = apartment; // Set Apartment

  console.log(apartment)

  console.log("THE UPDATE OBJECT:", updates)



  setUserPlayerInfo(
    {...userPlayerInfo,
    player_basic_info: {
            ...userPlayerInfo.player_basic_info,
            ...updates,
    },
})



  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}

window.initAutocomplete = initAutocomplete;



return (
  <div className="h-full bg-white p-5 font-roboto text-gray-600">



      <div className="w-full mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="ship-address">Address*</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="ship-address" name="ship-address" required />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="address2">Apartment, unit, suite, or floor #</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="address2" name="address2" />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="locality">City*</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="locality" name="locality" required />
      </div>
      <div className="w-1/2 pr-2 mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="state">State/Province*</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="state" name="state" required />
      </div>
      <div className="w-1/2 pl-2 mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="postcode">Postal code*</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="postcode" name="postcode" required />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm text-gray-800" htmlFor="country">Country/Region*</label>
        <input className="w-full p-2 border-b-2 border-gray-400 focus:outline-none" id="country" name="country" required />
      </div>

      <button type="button" className="bg-black rounded text-white px-6 py-2 hover:bg-gray-600">Save address</button>

      <input type="reset" value="Clear form" className="ml-4 bg-transparent text-gray-600 text-sm" />
 

  </div>
);
  }

export default AddressForm;