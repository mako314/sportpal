// https://developers.google.com/maps/documentation/javascript/using-typescript
// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-typescript
// https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/places-autocomplete-addressform/jsfiddle


// Calling .envs in Next.js : https://refine.dev/blog/next-js-environment-variables/#using-environment-variables-in-the-browser
// https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
// '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}'

import React, { useEffect } from 'react';

export default function AddressForm() {

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
  let address1 = "";
  let postcode = "";

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.short_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }
      case "locality":
        document.querySelector("#locality").value = component.long_name;
        break;
      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.short_name;
        break;
      }
      case "country":
        document.querySelector("#country").value = component.long_name;
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}

window.initAutocomplete = initAutocomplete;

return (
  <div className="h-full bg-white p-5 font-roboto text-gray-600">
    <form className="flex flex-wrap items-center max-w-md mx-auto my-10 p-5" autoComplete="off">
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
    </form>
  </div>
);
  }