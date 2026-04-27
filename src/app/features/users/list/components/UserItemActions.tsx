import type { UserViewModel } from "../types/UserViewModel"
import { SquarePen, Trash } from 'lucide-react';
import { Button } from "../../../components/button";






type UserItemActionsProps = {
    user: UserViewModel
    handleDelet: (data: UserViewModel) => void;
    handleEdit: (data: UserViewModel) => void;
}

export function UserItemActions({ user, handleEdit, handleDelet }: UserItemActionsProps) {

    return (
        <div className="mt-1 flex flex-wrap items-center gap-2">
            <Button variant="alert" icon={SquarePen} label="" handleClick={() => handleEdit(user)} />
            <Button variant="error" icon={Trash} label="" handleClick={() => handleDelet(user)} />
        </div>
    )
}