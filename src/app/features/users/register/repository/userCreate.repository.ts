import { createUser} from "../../api/users.api";
import type { CreateUserPayload } from "../types/CreateUserPayload.type";

export const userCreateRepository = {
    async create(userData: CreateUserPayload) {
        const response = await createUser(userData);
        return response;
    },
};