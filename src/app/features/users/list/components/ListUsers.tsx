
import type { SelectedUser } from ".."
import { DontResultset } from "../../../../../shared/components/dont-resultset/DontResultset"
import LoaderComponent from "../../../../../shared/components/loader/LoaderComponent"
import type { UserListViewModel } from "../types/UserListViewModel"
import type { UserViewModel } from "../types/UserViewModel"
import { UserItem } from "./UserItem"

type UsersListProps = {
    usersList: UserListViewModel | undefined
    isLoading: boolean
    handleOpenDeleteModal: (user: SelectedUser) => void;
}


export function UsersList({ usersList, isLoading, handleOpenDeleteModal }: UsersListProps) {
    

    if (isLoading) {
        return <LoaderComponent messageLoader="Carregando lista..." title="Usuários" />
    }

    if (!usersList || !usersList.data.length) {
        return <DontResultset title="Usuários não encontrados" description="Não encontramos nenhum usário para a listagem informada!" />
    }

    return (
        <div className="space-y-3 p-2  overflow-auto" style={{ maxHeight: '700px' }}>
            {usersList.data.map((user: UserViewModel) => (
                <UserItem
                    handleOpenDeleteModal={handleOpenDeleteModal}
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    )
}