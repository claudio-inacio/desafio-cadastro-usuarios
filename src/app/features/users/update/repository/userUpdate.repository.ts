import { updateUser } from "../../api/users.api";
import type { UpdateUserPayload } from "../types/UpdateUserPayload.type";


export const userUpdateRepository = {
    async update(userData: UpdateUserPayload) {
        const response = await updateUser(userData);
        return response;
    },
};