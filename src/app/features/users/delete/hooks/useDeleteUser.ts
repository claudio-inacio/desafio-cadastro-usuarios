import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userDeleteRepository } from "../repository/userDelete.repository";
import type { UserListViewModel } from "../../list/types/UserListViewModel";
import { toast } from "react-toastify";

export function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userId: number) => userDeleteRepository.delete(userId),

        onSuccess: (_, userId) => {
            queryClient.setQueryData<UserListViewModel>(
                ["users", "list"],
                (oldUsers) => {
                    if (!oldUsers) return oldUsers;
                    toast.success("Usuário excluido com sucesso!");
                    const listRemoved = oldUsers.data.filter((user) => user.id !== userId);
                    return { data: listRemoved };
                }
            );
        },        
    });
} 