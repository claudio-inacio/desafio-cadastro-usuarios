import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { mapUpdateUserPayload } from "./mapers/mapUpdateUserPayload";
import { DefaultModal } from "../../../../shared/components/modal/DefaultModal";
import { Error } from "../../../../shared/components/error/Error";
import { CreateUserForm } from "../register/components/CreateUserForm";
import { useUpdateUser } from "./hooks/useUpdateUser";
import { useQueryClient } from "@tanstack/react-query";
import type { UserListViewModel } from "../list/types/UserListViewModel";
import { mapUpdateUserToForm } from "./mapers/mapUpdateUserToForm";
import type { createUserFormOutput } from "../register/schemas/create-user-form.schema";


export function UpdateUser() {
    const [resetForm, setResetForm] = useState(false);
    const [hasClosedErrorModal, setHasClosedErrorModal] = useState(false);    
    const [canAccess] = useState(() => {
        return sessionStorage.getItem("canAccessUpdateUser") === "true";
    });
    const {
        isPending,
        isError,
        mutateAsync,
    } = useUpdateUser();
    const isErrorModalOpen = isError && !hasClosedErrorModal;
    const { userId } = useParams();
    const queryClient = useQueryClient();

    const user = queryClient
        .getQueryData<UserListViewModel>(["users", "list"])
        ?.data.find((u) => u.id === Number(userId));

    const handleUpdateUser = async (formData: createUserFormOutput) => {
        setResetForm(true);
        if (!formData) return;
        const payloadMaped = mapUpdateUserPayload({ ...formData, id: user.id })
        await mutateAsync(payloadMaped, {
            onSuccess: () => {
                setResetForm(true);
            },
        });
    }
    useEffect(() => {
        sessionStorage.removeItem("canAccessUpdateUser");
    }, []);
    if (!canAccess) {
        return <Navigate to="/" replace />;
    }

    if (!user?.id) {
        return (
            <div className="w-full flex justify-center">

                <Error                   
                    message="Não foi possivel encontrar o usuário informado... Volte para a lista e tente novamente!"
                    title="Usuário não encontrado!" cancelMessage="Ver Lista" />
            </div>
        )
    }
    return (
        <>
            <CreateUserForm resetForm={resetForm} defaultValues={mapUpdateUserToForm(user)} handleFormSubmit={handleUpdateUser} isPending={isPending} />
            <DefaultModal isOpen={isErrorModalOpen} onClose={() => setHasClosedErrorModal(true)}>
                <Error handleCancel={() => setHasClosedErrorModal(true)}
                    message="Não foi possível cadastrar o usuário... Confira as informações, ou tente novamente mais tarde!"
                    title="Erro de cadastro" />
            </DefaultModal>
        </>
    )
}