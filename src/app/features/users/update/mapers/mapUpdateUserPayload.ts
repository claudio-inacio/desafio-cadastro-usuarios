
import type { createUserFormOutput } from "../schemas/create-user-form.schema";
import type { UpdateUserPayload } from "../types/UpdateUserPayload.type";

type UpdateUserFormData = createUserFormOutput & {
    id: number;
};

export function mapUpdateUserPayload(
    formData: UpdateUserFormData
): UpdateUserPayload {
    return {
        id: formData.id,
        name: formData.name,
        username: formData.user_name,
        email: formData.email,
        phone: formData.phone,
        address: {
            city: formData.city,
        },
    };
}