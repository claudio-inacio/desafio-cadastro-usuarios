import type { UserViewModel } from "../types/UserViewModel"
import { UserItemDetails } from "./UserItemDetails";
import { UserItemActions } from "./UserItemActions";
import type { SelectedUser } from "..";


type UserItemProps = {
    user: UserViewModel
    handleOpenDeleteModal: (user: SelectedUser) => void;
}

export function UserItem({ user, handleOpenDeleteModal }: UserItemProps) {


    const handleEdit = (data: UserViewModel) => {
        return { data }
    }
    return (
        <div className="flex  items-start lg:items-center justify-between rounded-2xl border border-border/60  p-4 transition-all hover:shadow-sm">
            <UserItemDetails user={user} />
            <UserItemActions user={user} handleDelete={handleOpenDeleteModal} handleEdit={handleEdit} />
        </div>
    )
}