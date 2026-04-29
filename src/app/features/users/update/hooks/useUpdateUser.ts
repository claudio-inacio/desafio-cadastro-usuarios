import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { UserListViewModel } from "../../list/types/UserListViewModel";
import type { UpdateUserPayload } from "../types/UpdateUserPayload.type";
import { userUpdateRepository } from "../repository/userUpdate.repository";
import { mapUpdateUserToViewModel } from "../mapers/mapUpdateUserToViewModel";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userData: UpdateUserPayload) =>
            userUpdateRepository.update(userData),

        onSuccess: (_, userData) => {
            queryClient.setQueryData<UserListViewModel>(
                ["users", "list"],
                (oldUsers) => {
                    if (!oldUsers) return oldUsers;

                    const updatedUser = mapUpdateUserToViewModel(userData);

                    return {
                        ...oldUsers,
                        data: oldUsers.data.map((user) =>
                            user.id === updatedUser.id ? updatedUser : user
                        ),
                    };
                }
            );

            toast.success("Usuário atualizado com sucesso!");
        },
    });
}