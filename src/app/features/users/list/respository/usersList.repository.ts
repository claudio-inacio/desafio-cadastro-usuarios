import { getUsers } from "../../api/users.api";
import { mapUsersListResponseToView } from "../mappers/mapUsersListResponseToView";
import type { UserListViewModel } from "../types/UserListViewModel";

export const usersListRepository = {
    async list(): Promise<UserListViewModel> {
        const response = await getUsers();        
        return mapUsersListResponseToView(response);
    },
};