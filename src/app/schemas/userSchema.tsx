import { z } from 'zod'

export const BasicFormDataSchema = z.object({
player_first_name: z.string().min(1, 'First name is required'),
player_last_name: z.string().min(1, 'First name is required'),
player_phone: z.string().min(1, 'First name is required'),
player_email: z.string().min(1, 'First name is required'),
player_password: z.string().min(1, 'First name is required'),
player_dob: z.string().min(1, 'First name is required'),
player_address: z.string().min(1, 'First name is required'),
player_apartment: z.string().min(1, 'First name is required'),
player_city: z.string().min(1, 'First name is required'),
player_state: z.string().min(1, 'First name is required'),
player_postal_code: z.string().min(1, 'First name is required'),
player_country: z.string().min(1, 'First name is required'),
parent_first_name: z.string().min(1, 'First name is required'),
parent_last_name: z.string().min(1, 'First name is required'),
parent_email: z.string().min(1, 'First name is required'),
parent_phone: z.string().min(1, 'First name is required'),
})


// type BasicInformation = {
//     player_first_name: string;
//     player_last_name: string;
//     player_phone: string;
//     player_email: string;
//     player_password: string;
//     player_dob: string;
//     player_address: string;
//     player_apartment: string;
//     player_city: string;
//     player_state: string;
//     player_postal_code: string;
//     player_country: string;
//     parent_first_name: string;
//     parent_last_name: string;
//     parent_email: string;
//     parent_phone: string;
//   };