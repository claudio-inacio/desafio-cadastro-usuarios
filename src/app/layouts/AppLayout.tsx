import { Outlet, useLocation, useNavigate } from "react-router";
import { ListHeader } from "../features/users/list/components/ListHeader";
import { Button } from "../features/components/button";




export function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const routeIsDefault = location.pathname === "/"

    return (
        <div style={{minWidth: '400px'}} className="mih-h-screen bg-bakcground text-foreground">
            <ListHeader
                title={routeIsDefault ? "Lista de Usuários" : "Cadastro de Usuário"}
                description={routeIsDefault ? "Gerencie os usuários da aplicação" : "Registre novos usuários"}
                action={
                    <Button disabled={true} label={routeIsDefault ? 'Novo Usuário' : 'Voltar para lista'} handleClick={routeIsDefault ? () => navigate("/novo-usuario") : () => navigate("/")} />
                }
            />
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    )
}