interface OverlayProps {
    children: React.ReactNode
    subtitle: string
    className?: string
}

export const Overlay = ({ children, subtitle, className }: OverlayProps) => {
    return (
        <div
            className={`absolute w-full px-6 md:px-24 flex text-center ${className ?? ''}`}
        >
            <div className="max-w-md flex flex-col items-center gap-2 md:mt-15 md
        xl:mt-0 xl:mb-5 ">
                <h2 className="text-white text-xl font-medium leading-normal tracking-wider ">
                    Krypton One
                </h2>
                <h1 className="w-full text-white text-2xl leading-9 tracking-widest mb-2">
                    {subtitle}
                </h1>
                <div className="flex gap-3.5">{children}</div>
            </div>
        </div>
    )
}
