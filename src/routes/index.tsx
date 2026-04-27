import { createBrowserRouter } from "react-router";
import { AppLayout } from "../app/layouts/AppLayout";
import { ListUsers } from "../app/features/users/list";
import { RegisterUser } from "../app/features/users/register";




export const router = createBrowserRouter([
    //ROTAS PUBLICAS
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <ListUsers />,
            },
            {
                path: "/novo-usuario",
                element: <RegisterUser />,
            },
            {
                path: "*",
                element: <>PÁGINA NÃO ENCONTRADA</>,
            },
        ]
    },


    // ROTAS PRIVADAS
    //   {
    //     path: "/",
    //     element: (),
    //     children: [

    //     ],
    //   },
]);