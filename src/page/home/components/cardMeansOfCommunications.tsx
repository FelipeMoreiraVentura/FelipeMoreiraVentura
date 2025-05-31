interface CardMeansOfCommunicationsProps {
    href: string;
    icon: React.ReactNode;
    title?: string;
}

export function CardMeansOfCommunications({ href, icon, title }: CardMeansOfCommunicationsProps) {
    return (
        <a title={title} className='p-3 hover:scale-110 transition-all rounded-full bg-gradient-to-tl to-blue-500 from-purple-600  text-black' href={href} target="_blank">
            {icon}
        </a>
    )
}