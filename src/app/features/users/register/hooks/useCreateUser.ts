import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { UserListViewModel } from "../../list/types/UserListViewModel";
import { toast } from "react-toastify";
import type { CreateUserPayload } from "../types/CreateUserPayload.type";
import { userCreateRepository } from "../repository/userCreate.repository";
import { mapCreateUserToViewModel } from "../mapers/mapCreateUserToViewModel";

export function useCreateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userData: CreateUserPayload) => userCreateRepository.create(userData),

        onSuccess: (_, userData) => {
            queryClient.setQueryData<UserListViewModel>(
                ["users", "list"],
                (oldUsers) => {
                    if (!oldUsers) return oldUsers;
                    toast.success("Usuário cadastrado com sucesso!");
                    const newUser = mapCreateUserToViewModel(userData);
                    return {
                        ...oldUsers,
                        data: [newUser, ...oldUsers.data],
                    };
                }
            );
        },
    });
} 