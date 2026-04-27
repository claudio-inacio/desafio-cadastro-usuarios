import { useNavigate } from "react-router-dom";
import { useGetUsers } from "./hooks/useGetUsers";

export function ListUsers() {
    const {
        isPending,
        data: dashboardData,
    } = useGetUsers();
    const navigate = useNavigate();

    console.log({ dashboardData })

    return (
        <div className=" ">
            {isPending ? 'CARREGANDO...' : (
                <div className="flex flex-col space-y-7">
                    LISTA DE USUÁRIOS DENTRO DE PAGES
                    <button className="p-6 w-1/4 bg-amber-400 text-black rounded-lg" onClick={() => navigate('novo-usuario')}>NOVO USUÁRIO</button>
                </div>
            )}
        </div>
    )
}