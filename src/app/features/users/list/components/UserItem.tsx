import type { UserViewModel } from "../types/UserViewModel"
import { UserItemDetails } from "./UserItemDetails";
import { UserItemActions } from "./UserItemActions";


type UserItemProps = {
    user: UserViewModel
}

export function UserItem({ user }: UserItemProps) {


    const handleEdit = (data: UserViewModel) => {
        return { data }
    }
    const handleDelet = (data: UserViewModel) => {
        return { data }
    }
    return (
        <div className="flex  items-start lg:items-center justify-between rounded-2xl border border-border/60  p-4 transition-all hover:shadow-sm">
            <UserItemDetails user={user} />
            <UserItemActions user={user} handleDelet={handleDelet} handleEdit={handleEdit} />
        </div>
    )
}