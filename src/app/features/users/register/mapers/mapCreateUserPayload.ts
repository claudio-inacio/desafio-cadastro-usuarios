
import type { createUserFormOutput } from "../schemas/create-user-form.schema";
import type { CreateUserPayload } from "../types/CreateUserPayload.type";

export function mapCreateUserPayload(
    formData: createUserFormOutput
): CreateUserPayload {
    return {
        name: formData.name,
        username: formData.user_name,
        email: formData.email,
        phone: formData.phone,
        address: {
            city: formData.city,
        },
    };
}