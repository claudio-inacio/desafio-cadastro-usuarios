import type { UserViewModel } from "../types/UserViewModel"
import { useNavigate } from "react-router";
import { UserItemDetails } from "./UserItemDetails";
import { UserItemActions } from "./UserItemActions";
import type { SelectedUser } from "..";


type UserItemProps = {
    user: UserViewModel
    handleOpenDeleteModal: (user: SelectedUser) => void;
}

export function UserItem({ user, handleOpenDeleteModal }: UserItemProps) {
    const navigate = useNavigate();

    function handleEdit(data: UserViewModel) {
        if(data.id > 10){return alert('Infelizmente a API ainda não permite editar os usuários que inserimos... tente editar um usuário pré-existente')}
        sessionStorage.setItem("canAccessUpdateUser", "true");
        navigate(`/editar-usuario/${data.id}`);
    }
    return (
        <div className="flex  items-start lg:items-center justify-between rounded-2xl border border-border/60  p-4 transition-all hover:shadow-sm">
            <UserItemDetails user={user} />
            <UserItemActions user={user} handleDelete={handleOpenDeleteModal} handleEdit={handleEdit} />
        </div>
    )
}