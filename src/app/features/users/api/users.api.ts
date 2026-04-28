
import { api } from "../../../../shared/lib/axios";
import type { CreateUserPayload } from "../register/types/CreateUserPayload.type";

export async function getUsers() {
    const { data } = await api.get("users");
    return data;
}
export async function deleteUser(userId: number) {
    const { data } = await api.delete(`users/${userId}`);
    return data;
}
export async function createUser(payload: CreateUserPayload) {
    const { data } = await api.post("users", payload);
    return data;
}