
interface NavButtonProps {
    icon: React.ReactNode;
    title: string; 
    href: string;
}

export function NavButton({icon, title, href }: NavButtonProps) {
    return(
        <>
        <a className="flex flex-col md:flex-row md:gap-2 items-center" title={title} href={href}>
            <div  className='p-3 transition-all rounded-full bg-gradient-to-tl from-purple-950 to-blue-900 text-white'>
                {icon}
            </div>
            
            <span>{title}</span>
        </a>
        </>
    )
}