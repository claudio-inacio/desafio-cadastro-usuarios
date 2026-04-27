
import { api } from "../../../../shared/lib/axios";

export async function getUsers() {
    const { data } = await api.get("users");
    return data;
}