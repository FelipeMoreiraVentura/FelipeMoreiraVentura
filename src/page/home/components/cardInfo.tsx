interface NavButtonProps {
    src: string;
    title: string;
    info: React.ReactNode;
}

export function CardInfo({ src, title, info }: NavButtonProps){
    return(
        <div className='bg-gradient-to-tl from-purple-800 to-blue-800 w-full md:w-1/2 flex flex-col md:flex-row items-center justify-between gap-2 rounded-lg p-5 hover:cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300'>
            <img className="h-36 w-36 md:h-48 md:w-48" src={src} />
            <div className="w-full h-full items-start">
                <h1 className="text-2xl font-bold">{title}</h1>
                {info}
            </div>
        </div>
    )
}