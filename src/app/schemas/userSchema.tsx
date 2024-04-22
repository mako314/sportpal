import { z } from 'zod'

// This needs to be changed to basic user form or something of the sorts.
// Should look into the date time https://zod.dev/?id=datetimes for this DOB stuff. Not sure if it'll be necessary though.
// https://github.com/colinhacks/zod/discussions/938

export const UserFormDataSchema = z.object({
player_first_name: z.string().min(1, 'First name is required'),
player_last_name: z.string().min(1, 'Last name is required'),
player_phone: z.string().min(10, 'Phone Required'),
player_email: z.string().email({ message: "Email address required" }),
player_password: z.string().min(1, 'Password is required'),
player_dob: z.string().min(1, 'Date of Birth is required'),
player_address: z.string().min(1, 'Address is required'),
// player_apartment: z.string().min(1, ' is required'),
player_city: z.string().min(1, 'City is required'),
player_state: z.string().min(1, 'State is required'),
player_postal_code: z.string().min(1, 'Postal Code is required'),
player_country: z.string().min(1, 'Country is required'),
parent_first_name: z.string().min(1, 'Parent first name is required'),
parent_last_name: z.string().min(1, 'Parent last name is required'),
parent_email: z.string().min(1, 'Parent email is required'),
parent_phone: z.string().min(1, 'Parent phone is required'),
// Sport Portion
organization_name: z.string().min(1, 'Organization Name is required'),
position_one: z.string().min(1, 'Parent email is required'),
// Academics Portion
graduation_date: z.string().min(1, 'Graduation date or expected graduation date is required'),
player_school_year: z.string().min(1, 'Player school year is required'),
player_act_score: z.string().min(1, 'ACT score required'),
player_sat_score: z.string().min(1, 'SAT score required'),
})




// const registrationFormSchema = z.object({
//     firstName: firstNameValidator,
//     lastName: lastNameValidator,
//     email: z.string().optional(), // Keeping both email and phone optional on base schema and validating values inside `superRefine`
//     phone: z.string().optional(),
//     postalCode: canadianPostalCodeValidator,
//     specificGroupServices: z.string().optional(),
//     isOntarioResident: booleanRadioGroupValidator,
//     isAllowedToWorkInCanada: booleanRadioGroupValidator,
//     isStudent: booleanRadioGroupValidator,
//     hasAgreedToTermsAndPolicies: z.boolean(),
//   })
//   // Perform conditional validation to ensure either a valid email or phone number is provided.
//   .superRefine(({ email, phone }, refinementContext) => {
//     if (email === '' && phone !== '' && !getIsValidMobilePhone(phone ?? '')) {
//       return refinementContext.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: i18n.t('forms.validations.invalid.phone'),
//         path: ['phone'],
//       });
//     }

//     if (email !== '' && phone === '' && !getIsValidEmail(email ?? '')) {
//       return refinementContext.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: i18n.t('forms.validations.invalid.email'),
//         path: ['email'],
//       });
//     }
//   });
