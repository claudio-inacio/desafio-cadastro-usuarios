
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/get-users";

export function useGetUsers() {
    return useQuery({
        queryKey: ["users", "list"],
        queryFn: getUsers,
    })
}