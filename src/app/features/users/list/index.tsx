
import { useEffect, useState } from "react";
import { UsersList } from "./components/ListUsers";
import { useGetUsers } from "./hooks/useGetUsers"
import { ConfirmDeleteUser } from "../delete/components/ConfirmDeleteUser";
import { useDeleteUser } from "../delete/hooks/useDeleteUser";
import { DefaultModal } from "../../../../shared/components/modal/DefaultModal";
import { Error } from "../../../../shared/components/error/Error";

export type SelectedUser = {
    id: number;
    name: string;
};


export function ListUsers() {
    const {
        isPending,
        isError,
        refetch,
        isRefetching,
        data: usersData,
    } = useGetUsers();
    const {
        isPending: isPendingDeleteUser,
        isError: isErrorDeletetUser,
        mutateAsync,
    } = useDeleteUser();

    const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);
    const [hasClosedErrorModal, setHasClosedErrorModal] = useState(false);
    const isErrorModalOpen = isError && !hasClosedErrorModal;

    function handleOpenDeleteModal(user: SelectedUser) {
        setSelectedUser(user);
    }
    function handleCloseDeleteModal() {
        setSelectedUser(null);
    }

    function handleConfirmDelete() {
        if (!selectedUser) return;

        mutateAsync(selectedUser.id, {
            onSuccess: () => {
                handleCloseDeleteModal();
            },
        });
    }


    const handleRefreshList = () => {
        setHasClosedErrorModal(false);
        refetch();
    }
    useEffect(() => {
        sessionStorage.removeItem("canAccessCreateUser");
    }, []);


    return (
        <div className="flex flex-col space-y-7">
            <UsersList handleOpenDeleteModal={handleOpenDeleteModal} isLoading={isPending || isRefetching} usersList={usersData} />
            <DefaultModal isOpen={isErrorModalOpen} onClose={() => setHasClosedErrorModal(true)}>
                <Error handleCancel={() => setHasClosedErrorModal(true)} actionMessage="OK, Tentar Novamente" handleAction={handleRefreshList} message="Não foi possível listar os usuários... tente novamente mais tarde!" title="Usuários" />
            </DefaultModal>
            <DefaultModal
                isOpen={!!selectedUser}
                isLoading={isPendingDeleteUser}
                onClose={handleCloseDeleteModal}
            >
                <ConfirmDeleteUser
                    isError={isErrorDeletetUser}
                    onClose={handleCloseDeleteModal}
                    onConfirm={() => handleConfirmDelete()}
                    isLoading={isPendingDeleteUser}
                    title="Exclusão de usuário"
                    message={
                        selectedUser
                            ? `Tem certeza que deseja remover o usuário "${selectedUser.name}"?`
                            : ""
                    }
                />
            </DefaultModal>
        </div>
    )
}