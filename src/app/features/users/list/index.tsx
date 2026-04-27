import { UsersList } from "./components/ListUsers";
import { useGetUsers } from "./hooks/useGetUsers"

export function ListUsers() {
    const {
        isPending,
        data: dashboardData,
    } = useGetUsers();


    console.log({ dashboardData })

    return (
        <div className=" ">

            {isPending ? 'CARREGANDO...' : (
                <div className="flex flex-col space-y-7">
                    <UsersList usersList={dashboardData}  />
                </div>
            )}
        </div>
    )
}