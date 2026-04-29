import { createBrowserRouter } from "react-router";
import { AppLayout } from "../app/layouts/AppLayout";
import { ListUsers } from "../app/features/users/list";
import { RegisterUser } from "../app/features/users/register";
import { UpdateUser } from "../app/features/users/update";
import { NotFound } from "../shared/components/not-found";




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
                path: "/editar-usuario/:userId",
                element: <UpdateUser />,
            },
            {
                path: "*",
                element: <NotFound />,
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