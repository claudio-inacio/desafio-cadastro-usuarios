
import { useQuery } from "@tanstack/react-query";
import { usersListRepository } from "../respository/usersList.repository";

export function useGetUsers() {
    return useQuery({
        queryKey: ["users", "list"],
        queryFn: () => usersListRepository.list(),
    })
}