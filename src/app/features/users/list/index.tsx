
import { useState } from "react";
import { ErrorModal } from "../../../../shared/components/error/ErrorModal";
import { UsersList } from "./components/ListUsers";
import { useGetUsers } from "./hooks/useGetUsers"

export function ListUsers() {
    const {
        isPending,
        isError,
        refetch,
        isRefetching,
        data: dashboardData,
    } = useGetUsers();
    const [hasClosedErrorModal, setHasClosedErrorModal] = useState(false);
    const isErrorModalOpen = isError && !hasClosedErrorModal;

    const handleRefreshList = () => {
        setHasClosedErrorModal(false);
        refetch();
    }


    return (
        <div className="flex flex-col space-y-7">
            <UsersList isLoading={isPending || isRefetching} usersList={dashboardData} />
            <ErrorModal actionMessage="OK, Tentar Novamente" handleAction={handleRefreshList} isOpen={isErrorModalOpen} message="Não foi possível listar os usuários... tente novamente mais tarde!" title="Usuários" onClose={() => setHasClosedErrorModal(true)} />
        </div>
    )
}