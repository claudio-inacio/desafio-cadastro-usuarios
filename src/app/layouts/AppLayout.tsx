import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { ListHeader } from "../features/users/list/components/ListHeader";
import { Button } from "../../shared/components/button/Button";

export function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const routeIsDefault = location.pathname === "/"
    const { userId } = useParams();
    const updateOrCreateTitle = userId ? "Alteração de Usuário" : "Cadastro de Usuário"
    const updateOrCreateDescription = userId ? "Altere as informações necessarias" : "Registre novos usuários"
    const notFoundHeaderTitle = location.key === 'default' ? "Pgina Invalida" : updateOrCreateTitle;
    const notFoundHeaederDiscription = location.key === 'default' ? "Esta rota não existe ou esta em construção" : updateOrCreateDescription;
    console.log({location})
    function redirectCreateUser() {
        sessionStorage.setItem("canAccessCreateUser", "true");
        navigate("/novo-usuario");
    }
    return (
        <div style={{ minWidth: '350px' }} className="mih-h-screen px-2 lg:p-0 bg-bakcground text-foreground">
            <ListHeader
                title={routeIsDefault ? "Lista de Usuários" : notFoundHeaderTitle}
                description={routeIsDefault ? "Gerencie os usuários da aplicação" : notFoundHeaederDiscription}
                action={
                    <Button type="button" label={routeIsDefault ? 'Novo Usuário' : 'Voltar para lista'} handleClick={routeIsDefault ? () => redirectCreateUser() : () => navigate("/")} />
                }
            />
            <main className="lg:p-6 p-2">
                <Outlet />
            </main>
        </div>
    )
}