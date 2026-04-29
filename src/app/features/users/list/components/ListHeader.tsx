type ListHeaderProps = {
    title: string;
    description?: string;
    action?: React.ReactNode;
};

export function ListHeader({ title, description, action }: ListHeaderProps) {
    return (
        <header className="flex items-center py-10 justify-around border-b border-zinc-200 pb-4 mb-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-800">
                    {title}
                </h1>

                {description && (
                    <p className="text-sm text-zinc-500 mt-1">
                        {description}
                    </p>
                )}
            </div>

            {action && <nav>{action}</nav>}
        </header>
    );
}