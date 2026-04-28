
import type { UserViewModel } from "../../list/types/UserViewModel";
import type { CreateUserPayload } from "../types/CreateUserPayload.type";


export function mapCreateUserToViewModel(
    payload: CreateUserPayload
): UserViewModel {
    return {
        id: Math.floor(Math.random() * 100) + 1,
        name: payload.name,
        user_name: payload.username,
        email: payload.email,
        phone_number: payload.phone,
        city: payload.address.city,
        zip_code: '',
    }
}