
import type { UserListViewModel } from "../types/UserListViewModel"
import type { UserViewModel } from "../types/UserViewModel"
import { UserItem } from "./UserItem"

type UsersListProps = {
    usersList: UserListViewModel
}

export function UsersList({ usersList }: UsersListProps) {
    if (!usersList.data.length) {
        // return <DontResultSetTransactions />
        return <>SEM PRODUTO POR ENQUANTO</>
    }

    return (
        <div className="space-y-3 p-2  overflow-auto" style={{maxHeight: '700px'}}>
            {usersList.data.map((user: UserViewModel) => (
                <UserItem
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    )
}