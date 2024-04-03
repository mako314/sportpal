// This sample uses the Places Autocomplete widget to:
// 1. Help the user select a place
// 2. Retrieve the address components associated with that place
// 3. Populate the form fields with those address components.
// This sample requires the Places library, Maps JavaScript API.
// Include the libraries=places parameter when you first load the API.
// For example: <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let autocomplete: google.maps.places.Autocomplete;
let address1Field: HTMLInputElement;
let address2Field: HTMLInputElement;
let postalField: HTMLInputElement;

function initAutocomplete() {
  address1Field = document.querySelector("#ship-address") as HTMLInputElement;
  address2Field = document.querySelector("#address2") as HTMLInputElement;
  postalField = document.querySelector("#postcode") as HTMLInputElement;

  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: { country: ["us", "ca"] },
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
  for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
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
        (document.querySelector("#locality") as HTMLInputElement).value =
          component.long_name;
        break;

      case "administrative_area_level_1": {
        (document.querySelector("#state") as HTMLInputElement).value =
          component.short_name;
        break;
      }

      case "country":
        (document.querySelector("#country") as HTMLInputElement).value =
          component.long_name;
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

declare global {
  interface Window {
    initAutocomplete: () => void;
  }
}
window.initAutocomplete = initAutocomplete;




export default function SchoolSignUp() {

    // Part 2 - Academics
    // Middle - College ? 

    return (
<div>
    {/* <!-- Note: The address components in this sample are based on North American address format. You might need to adjust them for the locations relevant to your app. For more information, see
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
    --> */}

    <form id="address-form" action="" method="get" autocomplete="off">
      <p className="title">Sample address form for North America</p>
      <p className="note"><em>* = required field</em></p>
      <label className="full-field">
        {/* <!-- Avoid the word "address" in id, name, or label text to avoid browser autofill from conflicting with Place Autocomplete. Star or comment bug https://crbug.com/587466 to request Chromium to honor autocomplete="off" attribute. --> */}
        <span className="form-label">Deliver to*</span>
        <input
          id="ship-address"
          name="ship-address"
          required
          autocomplete="off"
        />
      </label>
      <label className="full-field">
        <span className="form-label">Apartment, unit, suite, or floor #</span>
        <input id="address2" name="address2" />
      </label>
      <label className="full-field">
        <span className="form-label">City*</span>
        <input id="locality" name="locality" required />
      </label>
      <label className="slim-field-start">
        <span className="form-label">State/Province*</span>
        <input id="state" name="state" required />
      </label>
      <label className="slim-field-end" for="postal_code">
        <span className="form-label">Postal code*</span>
        <input id="postcode" name="postcode" required />
      </label>
      <label className="full-field">
        <span className="form-label">Country/Region*</span>
        <input id="country" name="country" required />
      </label>
      <button type="button" className="my-button">Save address</button>

      {/* <!-- Reset button provided for development testing convenience.
  Not recommended for user-facing forms due to risk of mis-click when aiming for Submit button. --> */}
      <input type="reset" value="Clear form" />
    </form>

    {/* <!-- 
      The `defer` attribute causes the callback to execute after the full HTML document has been parsed. For non-blocking uses, avoiding race conditions,
      and consistent behavior across browsers, consider loading using Promises.
      See https://developers.google.com/maps/documentation/javascript/load-maps-js-api
      for more information.
      --> */}
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initAutocomplete&libraries=places&v=weekly"
      defer
    ></script>
  </div>
    )
  }