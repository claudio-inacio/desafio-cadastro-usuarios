
import type { UserViewModel } from "../../list/types/UserViewModel";
import type { createUserFormInput } from "../../register/schemas/create-user-form.schema";



export function mapUpdateUserToForm(
    payload: UserViewModel
): createUserFormInput {
    return {
        name: payload.name,
        user_name: payload.user_name,
        email: payload.email,
        phone: payload.phone_number,
        city: payload.city,

    }
}