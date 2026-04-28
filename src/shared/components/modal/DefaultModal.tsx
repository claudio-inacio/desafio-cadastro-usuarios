type DefaultModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
    isLoading?: boolean
};

export function DefaultModal({
    isOpen,
    children,
    onClose,
    isLoading
}: DefaultModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <button
                type="button"
                aria-label="Fechar modal"
                className="absolute inset-0 bg-black/50"
                onClick={isLoading ? () => {} : onClose}
            />

            {children}
        </div>
    );
}