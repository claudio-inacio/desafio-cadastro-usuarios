import { Button } from "../../../app/features/components/button";

type ErrorProps = {
    title: string;
    message: string;
    handleCancel?: () => void;
    handleAction?: () => void;
    actionMessage?: string;
    cancelMessage?: string;
};

export function Error({
    title,
    message,
    handleCancel,
    handleAction,
    actionMessage,
    cancelMessage = 'Fechar'
}: ErrorProps) {

    return (
        <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-red-600">
                    {title}
                </h2>

                <p className="text-sm text-zinc-600">
                    {message}
                </p>
                <div className="flex justify-end space-x-2 mt-10">
                    {handleCancel && (

                        <Button
                            type="button"
                            handleClick={() => handleCancel()}
                            variant="error"
                            label={cancelMessage}
                        />
                    )}
                    {handleAction && (
                        <Button
                            type="button"
                            handleClick={() => handleAction()}
                            variant="default"
                            label={actionMessage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}