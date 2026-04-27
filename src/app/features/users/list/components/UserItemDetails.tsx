import type { UserViewModel } from "../types/UserViewModel"
import { ItemDetail } from "./ItemDetail"
import { User } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Building2 } from 'lucide-react';


type UserItemDetailsProps = {
    user: UserViewModel
}

export function UserItemDetails({ user }: UserItemDetailsProps) {
    return (
        <div className=" items-center gap-3">
            <p className="font-medium">{user.name}</p>
            <div className="mt-1 flex space-x-2 items-center gap-2">
                <ItemDetail icon={User} message={user.user_name} />
                <span className="text-muted-foreground">•</span>
                <ItemDetail icon={Smartphone} message={user.phone_number} />
                <span className="text-muted-foreground">•</span>
                <ItemDetail icon={Mail} message={user.email} />
                <ItemDetail icon={Building2} message={user.city} />
            </div>
        </div>
    )
}