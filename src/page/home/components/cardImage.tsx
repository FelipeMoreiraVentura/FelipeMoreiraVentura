// import { useNavigate } from "react-router-dom";

interface CardMeansOfCommunicationsProps {
    src: string;
    title: string;
}

export function CardImage({ src, title }: CardMeansOfCommunicationsProps) {
    // const navigate = useNavigate()

    return (
        <div
            // onClick={() => navigate(title)}
            className='bg-gradient-to-tl from-purple-800 to-blue-800 h-48 w-40 md:w-60 md:h-72 flex flex-col items-center justify-evenly rounded-lg p-5 hover:cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300'
        >
            <img className="h-32 w-32 md:w-48 md:h-48 rounded-lg " src={src} alt={title} />
            <h1 className={`font-bold text-xl text-white`}>{title}</h1>
        </div>
    );
}
