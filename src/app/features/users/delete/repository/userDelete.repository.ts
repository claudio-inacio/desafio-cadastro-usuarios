import { deleteUser } from "../../api/users.api";

export const userDeleteRepository = {
    async delete(userId: number) {
        const response = await deleteUser(userId);
        return response;
    },
};