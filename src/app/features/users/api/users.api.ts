
import { api } from "../../../../shared/lib/axios";

export async function getUsers() {
    const { data } = await api.get("users");
    return data;
}
export async function deleteUser(userId: number) {
    const { data } = await api.delete(`users/${userId}`);
    return data;
}