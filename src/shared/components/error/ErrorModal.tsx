import { Button } from "../../../app/features/components/button";

type ErrorModalProps = {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
    handleAction?: () => void;
    actionMessage?: string;
};

export function ErrorModal({
    isOpen,
    title,
    message,
    onClose,
    handleAction,
    actionMessage,
}: ErrorModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-red-600">
                        {title}
                    </h2>

                    <p className="text-sm text-zinc-600">
                        {message}
                    </p>

                    <div className="flex justify-end space-x-2 mt-10">
                        <Button
                            handleClick={() => onClose()}
                            variant="error"
                            label="Fechar"
                        />
                        {handleAction && (
                            <Button
                                handleClick={() => handleAction()}
                                variant="default"
                                label={actionMessage}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}