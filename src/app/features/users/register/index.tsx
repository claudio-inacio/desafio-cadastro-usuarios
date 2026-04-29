import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { CreateUserForm } from "./components/CreateUserForm";
import { useCreateUser } from "./hooks/useCreateUser";
import { mapCreateUserPayload } from "./mapers/mapCreateUserPayload";
import type { createUserFormOutput } from "./schemas/create-user-form.schema";
import { DefaultModal } from "../../../../shared/components/modal/DefaultModal";
import { Error } from "../../../../shared/components/error/Error";


export function RegisterUser() {
    const [resetForm, setResetForm] = useState(false);
    const [hasClosedErrorModal, setHasClosedErrorModal] = useState(false);
    const [canAccess] = useState(() => {
        return sessionStorage.getItem("canAccessCreateUser") === "true";
    });
    const {
        isPending,
        isError,
        mutateAsync,
    } = useCreateUser();
    const isErrorModalOpen = isError && !hasClosedErrorModal;


    const handleCreateUser = async (formData: createUserFormOutput) => {
        setResetForm(true);
        if (!formData) return;
        const payloadMaped = mapCreateUserPayload(formData)
        await mutateAsync(payloadMaped, {
            onSuccess: () => {
                setResetForm(true);
            },
        });
    }

    useEffect(() => {
        sessionStorage.removeItem("canAccessCreateUser");
    }, []);
    if (!canAccess) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            <CreateUserForm resetForm={resetForm} handleFormSubmit={handleCreateUser} isPending={isPending} />
            <DefaultModal isOpen={isErrorModalOpen} onClose={() => setHasClosedErrorModal(true)}>
                <Error handleCancel={() => setHasClosedErrorModal(true)}
                    message="Não foi possível cadastrar o usuário... Confira as informações, ou tente novamente mais tarde!"
                    title="Erro de cadastro" />
            </DefaultModal>
        </>
    )
}