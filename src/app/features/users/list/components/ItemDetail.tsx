

type ItemDetailProps = {
    message: string
    icon?: React.ElementType;
}

export function ItemDetail({ message, icon: Icon }: ItemDetailProps) {
    return (
        <div className="space-x-1 flex flex-row items-center">
            {Icon && <Icon />}
            <span className="text-md  text-muted-foreground">
                {message}
            </span>
        </div>

    )
}