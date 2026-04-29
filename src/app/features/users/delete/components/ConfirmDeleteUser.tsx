import { Error } from "../../../../../shared/components/error/Error";
import { Button } from "../../../../../shared/components/button/Button";

type ConfirmDeleteUserProps = {
    isError: boolean;
    title: string;
    message: string;
    isLoading?: boolean;
    onConfirm: () => void;
    onClose: () => void;
};

export function ConfirmDeleteUser({
    title,
    message,
    isError,
    isLoading = false,
    onConfirm,
    onClose,
}: ConfirmDeleteUserProps) {    

    if(isError){
        return (
            <Error handleCancel={() => onClose()} actionMessage="OK, Tentar Novamente" handleAction={onConfirm} message="Não foi possivel excluir o usuário... O sistema pode estar indisponivel no momento!" title="Erro ao excluir usuário" />
        )
    }
    return (
        <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{message}</p>
            <div className="mt-6 flex justify-end gap-3">
                <Button
                    handleClick={onClose}
                    disabled={isLoading}
                    label="Canelar"
                    variant={`${isLoading ? 'disabled' : 'error'}`}
                />

                <Button
                    label={isLoading ? "Removendo..." : "Remover"}
                    handleClick={onConfirm}
                    variant={`${isLoading ? 'disabled' : 'default'}`}
                    disabled={isLoading}
                />
            </div>
        </div>
    );
}