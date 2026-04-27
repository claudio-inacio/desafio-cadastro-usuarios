import { Navigate } from "react-router";

export function PublicRoute() {
    //FEAT: PODERIAMOS TER UM SESSION STORE QUE SERIA RESPONSAVEL POR VALIDAR SE O USUARIO ESTA LOGADO 
    // E SE É UM USUÁRIO VALIDO PARA DIRECIONARMOS PARA O DASHBOARD

    return <Navigate to="/" replace />;


}