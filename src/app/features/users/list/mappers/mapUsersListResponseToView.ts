

import type { UserListResponseDTO } from "../types/UserListResponseDTO.types";
import type { UserListViewModel } from "../types/UserListViewModel";
import { mapUsersToViewModel } from "./mapUsersToViewModel";

export function mapUsersListResponseToView(
    response: UserListResponseDTO[]
): UserListViewModel {
    return { data: response.map(mapUsersToViewModel) };
}