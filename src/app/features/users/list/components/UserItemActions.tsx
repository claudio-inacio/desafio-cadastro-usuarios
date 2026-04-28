import type { UserViewModel } from "../types/UserViewModel"
import { SquarePen, Trash } from 'lucide-react';
import { Button } from "../../../components/button";
import type { SelectedUser } from "..";


type UserItemActionsProps = {
    user: UserViewModel
    handleDelete: (user: SelectedUser) => void;
    handleEdit: (data: UserViewModel) => void;
}

export function UserItemActions({ user, handleEdit, handleDelete }: UserItemActionsProps) {

    return (
        <div className="flex items-center gap-1 -ml-16 lg:ml-0">
            <Button variant="alert" icon={SquarePen} label="" handleClick={() => handleEdit(user)} />
            <Button variant="error" icon={Trash} label="" handleClick={() => handleDelete({ id: user.id, name: user.name })} />
        </div>
    )
}