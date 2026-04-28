import { Outlet, useLocation, useNavigate } from "react-router";
import { ListHeader } from "../features/users/list/components/ListHeader";
import { Button } from "../features/components/button";




export function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const routeIsDefault = location.pathname === "/"

    function redirectCreateUser() {
        sessionStorage.setItem("canAccessCreateUser", "true");
        navigate("/novo-usuario");
    }
    return (
        <div style={{ minWidth: '350px' }} className="mih-h-screen bg-bakcground text-foreground">
            <ListHeader
                title={routeIsDefault ? "Lista de Usuários" : "Cadastro de Usuário"}
                description={routeIsDefault ? "Gerencie os usuários da aplicação" : "Registre novos usuários"}
                action={
                    <Button label={routeIsDefault ? 'Novo Usuário' : 'Voltar para lista'} handleClick={routeIsDefault ? () => redirectCreateUser() : () => navigate("/")} />
                }
            />
            <main className="lg:p-6 p-2">
                <Outlet />
            </main>
        </div>
    )
}