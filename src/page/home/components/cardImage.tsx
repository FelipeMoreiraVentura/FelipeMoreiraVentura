interface CardMeansOfCommunicationsProps {
    src: string;
    title: string;
    onClick?: () => void
    active?: boolean
}

export function CardImage({ src, title, onClick, active }: CardMeansOfCommunicationsProps) {
    return (
        <div
            onClick={onClick}
            className={`${active ? "scale-[1.1] shadow-[0_0_25px_rgba(99,102,241,0.9)] bg-gradient-to-tl from-purple-700 to-blue-600 outline outline-2 outline-blue-300/70 " : ""} bg-gradient-to-tl from-purple-800 to-blue-800 h-24 w-20 md:w-30 md:h-36 flex flex-col items-center justify-evenly rounded-lg p-5 hover:cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300`}
        >
            <img className="h-16 w-16 md:w-24 md:h-24 rounded-lg " src={src} alt={title} />
            <h1 className={`font-bold text-sm md:text-xl text-white`}>{title}</h1>
        </div>
    );
}
