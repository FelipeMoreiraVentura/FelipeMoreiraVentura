// src/pages/Home.tsx (ou onde estiver seu componente)
import { BriefcaseBusiness, Code, Github, GraduationCap, Instagram, Linkedin, Mail, Wrench } from 'lucide-react';
import { useState } from 'react';

import Felipe from '../../assets/felipe.jpeg';
import eletronicainterlagos from '../../assets/eletronicaInterlagos.jpg';
import genesis from '../../assets/genesis.jpg';
import ideia from '../../assets/ideia.jpg';

import { CardMeansOfCommunications } from './components/cardMeansOfCommunications';
import { CardImage } from './components/cardImage';
import { NavButton } from './components/navButton';
import { CardInfo } from './components/cardInfo';

import { languages, frameworksByStack, tools, type StackKey } from '../../common/info';
import { ToolCarouselCard } from './components/toolCarouselCard';

export function Home() {
    const [selectedFramework, setSelectedFramework] = useState<StackKey>('node');
    const [view, setView] = useState('TypeScript');
    const [index, setIndex] = useState(0);

    const allCardItems = [
        ...Object.values(languages),
        ...Object.values(frameworksByStack).flat(),
    ];

    const currentCardItems = allCardItems.find((item) => item.title === view);


    const calcAge = () => {
        const now = new Date();
        const year = now.getFullYear();
        const alreadyHadBirthday = Number(new Date() < new Date(year, 8, 12));
        return year - 2007 - alreadyHadBirthday;
    };

    return (
        <>
            <header className=" flex flex-col md:flex-row w-full p-5 items-center bg-gradient-to-r from-purple-950 to-blue-900 text-white">
                <img className="rounded-full w-[330px] h-[330px] md:w-[350px] md:h-[350px] mr-4" src={Felipe} />
                <div className="md:w-full">
                    <h1 className="text-4xl md:text-7xl font-bold">Felipe Moreira Ventura</h1>
                    <h2 className="text-2xl">{calcAge()} Anos</h2>
                    <h2 className="text-2xl">Desenvolvedor Full Stack</h2>
                </div>
                <div className="flex flex-row mt-3 md:mt-0 md:flex-col justify-between md:justify-center gap-5 md:gap-4 w-full md:w-20 py-2 px-3 items-center md:items-end">
                    <CardMeansOfCommunications title="Github" href="https://github.com/FelipeMoreiraVentura" icon={<Github size={30} />} />
                    <CardMeansOfCommunications title="Instagram" href="https://www.instagram.com/felipem.ventura/" icon={<Instagram size={30} />} />
                    <CardMeansOfCommunications title="LinkedIn" href="https://www.linkedin.com/in/felipe-moreira-ventura-ab40b430a" icon={<Linkedin size={30} />} />
                    <CardMeansOfCommunications title="Email" href="mailto:felipemoreiraventura@gmail.com" icon={<Mail size={30} />} />
                </div>
            </header>

            <nav className="flex justify-between bg-gradient-to-r from-purple-600 to-blue-500 text-xs md:text-xl text-white drop-shadow-2xl rounded-b-2xl px-5 py-2">
                <NavButton icon={<Code />} title="Linguagens" href="#linguagens-e-frameworks" />
                <NavButton icon={<Wrench />} title="Ferramentas" href="#ferramentas" />
                <NavButton icon={<GraduationCap />} title="Formação" href="#formacao" />
                <NavButton icon={<BriefcaseBusiness />} title="Carreira" href="#carreira" />
            </nav>

            <main className="text-white">
                {/* LINGUAGENS e FRAMEWORKS */}
                <section id="linguagens-e-frameworks" className='flex flex-col md:flex-row p-5 gap-6 bg-gradient-to-r from-[#2e1065] to-[#020617]'>
                    <div className="space-y-5 lg:w-1/2">
                        <h1 className="text-3xl font-bold">Linguagens</h1>
                        <div className="flex flex-wrap gap-5 lg:gap-8">
                            {Object.values(languages).map((lang) => (
                                <CardImage active={view === lang.title} key={lang.title} src={lang.src} title={lang.title} onClick={() => setView(lang.title)} />
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row md:gap-5 items-justify-center">
                            <h1 className="text-3xl font-bold">Frameworks e Libs</h1>
                            <select
                                className="bg-gradient-to-tl to-blue-500 from-purple-600 rounded-lg text-black p-2"
                                value={selectedFramework}
                                onChange={(e) => setSelectedFramework(e.target.value as StackKey)}
                            >
                                <option value="node">NodeJs</option>
                                <option value="python">Python</option>
                                <option value="dart">Dart</option>
                            </select>
                        </div>

                        <div className="flex flex-wrap gap-5 lg:gap-8">
                            {frameworksByStack[selectedFramework].map((fw) => (
                                <CardImage active={view === fw.title} key={fw.title} src={fw.src} title={fw.title} onClick={() => setView(fw.title)} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 px-5 md:w-1/2 justify-center">
                        <h1 className="text-3xl font-bold text-center">{currentCardItems?.title}</h1>
                        <img className='h-40 w-40 md:h-70 md:w-70 mx-auto' src={currentCardItems?.src} alt="" />
                        <p className="text-justify text-sm md:text-2xl">{currentCardItems?.text}</p>
                    </div>
                </section>

                <section className="bg-gradient-to-b from-blue-950 to-purple-950 py-14">
                    <div className="space-y-8 px-5">
                        <h1 id="ferramentas" className="text-3xl font-bold text-white">
                            Ferramentas
                        </h1>
                        <div className="relative flex items-center justify-center md:hidden">
                            <button
                                onClick={() =>
                                    setIndex((prev) => (prev - 1 + tools.length) % tools.length)
                                }
                                className="absolute left-2 md:left-10 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
                            >
                                ◀
                            </button>
                            <ToolCarouselCard
                                src={tools[index].src}
                                title={tools[index].title}
                                text={tools[index].text}
                            />
                            <button
                                onClick={() =>
                                    setIndex((prev) => (prev + 1) % tools.length)
                                }
                                className="absolute right-2 md:right-10 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
                            >
                                ▶
                            </button>
                        </div>

                        <div className="hidden md:grid grid-cols-2 gap-5">                            {tools.map((tool) => (
                            <ToolCarouselCard key={tool.title} src={tool.src} title={tool.title} text={tool.text} />
                        ))}
                        </div>
                    </div>
                </section>


                <div className="space-y-5 p-5 mt-10">
                    <h1 id="formacao" className="text-3xl font-bold">Formação:</h1>
                    <CardInfo
                        src={ideia}
                        title="IDEIA"
                        info={
                            <div className="space-y-1 text-lg">
                                <p className="font-medium">Ensino Médio Técnico</p>
                                <p><span className="font-semibold">Período:</span> Jan/2023 – Dez/2025</p>
                                <p><span className="font-semibold">Status:</span> Em andamento</p>
                            </div>
                        }
                    />
                </div>

                <div className="space-y-5 p-5 mt-10">
                    <h1 id="carreira" className="text-3xl font-bold">Carreira:</h1>
                    <div className="flex flex-col md:flex-row gap-5 justify-center">
                        <CardInfo
                            src={eletronicainterlagos}
                            title="Eletrônica Interlagos"
                            info={
                                <div className="space-y-1 text-lg">
                                    <p className="font-medium">Atendimento ao cliente e manutenção de aparelhos celulares</p>
                                    <p><span className="font-semibold">Período:</span> Mai/2022 - Ago/2023</p>
                                </div>
                            }
                        />
                        <CardInfo
                            src={genesis}
                            title="Genesis"
                            info={
                                <div className="text-lg">
                                    <p className="font-medium">Estagiário em Desenvolvimento de Software</p>
                                    <p><span className="font-semibold">Período:</span> Mai/2024 – jan/2026</p>
                                    <p className="font-medium mt-2">Prestador de Serviços Como Desenvolvedor Full Stack</p>
                                    <p><span className="font-semibold">Período:</span> Jan/2026 – Atualmente</p>
                                </div>
                            }
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
