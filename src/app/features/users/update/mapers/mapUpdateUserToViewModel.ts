
import type { UserViewModel } from "../../list/types/UserViewModel";
import type { UpdateUserPayload } from "../types/UpdateUserPayload.type";


export function mapUpdateUserToViewModel(
    payload: UpdateUserPayload
): UserViewModel {
    return {
        id: payload.id,
        name: payload.name,
        user_name: payload.username,
        email: payload.email,
        phone_number: payload.phone,
        city: payload.address.city,

    }
}