
import { api } from "../../../../../shared/lib/axios";
import type { UserDTO } from "../types/getUsersResponseDTO.types";

export async function getUsers() {
    const { data } = await api.get<UserDTO[]>("users");
    return data;
}