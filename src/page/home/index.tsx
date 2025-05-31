    import { BriefcaseBusiness, Code, Github, GraduationCap, Instagram, Linkedin, Mail, SquareLibrary, Wrench } from 'lucide-react';

    import Felipe from '../../assets/felipe.jpeg';
    import Html from '../../assets/Html.png';
    import JavaScript from '../../assets/JavaScript-logo.png';
    import Typescript from '../../assets/typesript.png';
    import python from '../../assets/python.png';
    import Css from '../../assets/Css.png';
    import dart from '../../assets/dart.png';
    import reactLogo from '../../assets/react.png';
    import nextjs from '../../assets/nextjs.png';
    import nodemailer from '../../assets/nodemailer.png';
    import twilio from '../../assets/twilio.png';
    import tailwindCSS from '../../assets/tailwindCSS.png';
    import pandas from '../../assets/pandas.png';
    import numpy from '../../assets/numpy.png';
    import openai from '../../assets/openai.png';
    import Tensorflow from '../../assets/Tensorflow.png';
    import langchan from '../../assets/langchan.png';
    import flutter from '../../assets/flutter.png';
    import eletronicainterlagos from '../../assets/eletronicaInterlagos.jpg';
    import genesis from '../../assets/genesis.jpg';
    import ideia from '../../assets/ideia.jpg';
    import firebase from '../../assets/firebase.png';
    import git from '../../assets/git.png';
    import github from '../../assets/github.png';
    import docker from '../../assets/docker.png';
    import fastapi from '../../assets/fastapi.png';

    import { CardMeansOfCommunications } from './components/cardMeansOfCommunications';
    import { CardImage } from './components/cardImage';
    import { useState } from 'react';
    import { NavButton } from './components/navButton';
    import { CardInfo } from './components/cardInfo';

    export function Home() {
        const [selectedFramework, setSelectedFramework] = useState('node');


        return (
            <div className='bg-gradient-to-r from-purple-950 to-blue-950'>
                <header className=" flex flex-col md:flex-row w-full p-5 items-center bg-gradient-to-r from-purple-950 to-blue-900 text-white">
                    <img className="rounded-full w-[330px] h-[330px] md:w-[350px] md:h-[350px] mr-4" src={Felipe} />
                    <div className='md:w-full'>
                        <h1 className='text-4xl md:text-7xl font-bold'>Felipe Moreira Ventura</h1>
                        <h2 className='text-2xl'>17 Anos</h2>
                        <h2 className='text-2xl'>Desenvolvedor de Software</h2>
                    </div>
                    <div className='flex flex-row mt-3 md:mt-0 md:flex-col justify-between md:justify-center gap-5 md:gap-4 w-full md:w-20 py-2 px-3 items-center md:items-end'>
                        <CardMeansOfCommunications title='Github' href="https://github.com/FelipeMoreiraVentura" icon={<Github size={30} />} />
                        <CardMeansOfCommunications title='Instagram' href="https://www.instagram.com/felipe.gamet/" icon={<Instagram size={30} />} />
                        <CardMeansOfCommunications title='LinkedIn' href="https://www.linkedin.com/in/felipe-moreira-ventura-ab40b430a" icon={<Linkedin size={30} />} />
                        <CardMeansOfCommunications title='Email' href="mailto:felipemoreiraventura@gmail.com" icon={<Mail size={30} />} />
                    </div>
                </header>
                <nav className="flex justify-between bg-gradient-to-r from-purple-600 to-blue-500 text-xs md:text-xl text-white drop-shadow-2xl rounded-b-2xl px-5 py-2">
                    <NavButton icon={<Code />} title='Linguagens' href="#linguagens"/>
                    <NavButton icon={<SquareLibrary />} title='Frameworks' href="#frameworks"/>
                    <NavButton icon={<Wrench />} title='Ferramentas' href="#ferramentas"/>
                    <NavButton icon={<GraduationCap />} title='Formação' href="#formacao"/>
                    <NavButton icon={<BriefcaseBusiness />} title='Carreira' href="#carreira"/>
                </nav>
                <div className="text-white">
                    <div className='space-y-5 p-5'>
                        <h1 id='linguagens' className='text-3xl font-bold'>Linguagens:</h1>
                        <div className='flex flex-wrap gap-5 justify-center'>
                            <CardImage src={Html} className='text-[#fc4703]' title='HTML' />
                            <CardImage src={JavaScript} className='text-[#f0db4f]' title='JavaScript' />
                            <CardImage src={Typescript} className='text-[#423dd5]' title='TypeScript' />
                            <CardImage src={Css} className='text-[#2196f3]' title='CSS' />
                            <CardImage src={python} className='bg-gradient-to-tl from-[#ffd43a] to-[#599fd3] bg-clip-text text-transparent' title='Python' />
                            <CardImage src={dart} className='bg-gradient-to-tl from-[#0081c6] to-[#55ddca] bg-clip-text text-transparent' title='Dart' />
                        </div>
                    </div>

                    <div className='space-y-5 p-5 mt-10'>
                        <div className='flex justify-between items-center'>
                            <h1 id='frameworks' className='text-3xl font-bold'>Frameworks:</h1>
                            <select className='bg-gradient-to-tl to-blue-500 from-purple-600 rounded-lg text-black p-2' value={selectedFramework} onChange={(e) => setSelectedFramework(e.target.value)}>
                                <option value="node">NodeJs</option>
                                <option value="python">Python</option>
                                <option value="dart">Dart</option>
                            </select>
                        </div>

                        <div className='flex flex-wrap gap-5 justify-center '>
                            {selectedFramework === 'node' ? 
                                <>
                                    <CardImage src={reactLogo} className='text-[#65d8fd]' title='React' /> 
                                    <CardImage src={nextjs} className='text-black' title='NextJs' /> 
                                    <CardImage src={nodemailer} className='bg-gradient-to-tl from-[#23b574] to-[#0f9dcd] bg-clip-text text-transparent' title='Nodemailer' /> 
                                    <CardImage src={twilio} className='text-[#d02229]' title='Twilio' /> 
                                    <CardImage src={tailwindCSS} className='bg-gradient-to-tl from-[#50d2be] to-[#1aa4bb] bg-clip-text text-transparent' title='Tailwind' /> 
                                </>
                                : selectedFramework === 'python' ? 
                                <>
                                    <CardImage src={pandas} className='text-[#130754]' title='Pandas' /> 
                                    <CardImage src={numpy} className='bg-gradient-to-tl from-[#00acc1] to-[#00acc1] bg-clip-text text-transparent' title='Numpy' /> 
                                    <CardImage src={openai} className='text-black' title='OpenAi' /> 
                                    <CardImage src={openai} className='text-black' title='Whisper' /> 
                                    <CardImage src={Tensorflow} className='bg-gradient-to-tl from-[#f8c039] to-[#e65b29] bg-clip-text text-transparent' title='TensorFlow' /> 
                                    <CardImage src={langchan} className='text-[#1c3c3c]' title='LangChan' /> 
                                    <CardImage src={fastapi} className='text-[#05998b]' title='FastAPI' /> 
                                </>
                                : selectedFramework === 'dart' ? 
                                    <CardImage src={flutter} className='bg-gradient-to-tl from-[#00569e] to-[#47c5fb] bg-clip-text text-transparent' title='Flutter' /> 
                                : null
                            }
                        </div>
                    </div>

                    <div className='space-y-5 p-5'>
                        <h1 id='ferramentas' className='text-3xl font-bold'>Ferramentas:</h1>
                        <div className='flex flex-wrap gap-5 justify-center'>
                            <CardImage src={firebase} className='bg-gradient-to-tl from-[#dd2c00] to-[#fec400] bg-clip-text text-transparent' title='Firebase' />
                            <CardImage src={git} className='text-[#f4511e]' title='Git' />
                            <CardImage src={github} className='text-black' title='GitHub' />
                            <CardImage src={docker} className='text-[#099cec]' title='Docker' />

                        </div>
                    </div>

                    <div className='space-y-5 p-5 mt-10'>
                        <h1 id='formacao' className='text-3xl font-bold'>Formação:</h1>
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
                    <div className='space-y-5 p-5 mt-10'>
                        <h1 id='carreira' className='text-3xl font-bold'>Carreira:</h1>
                        <div className='flex flex-col md:flex-row gap-5 justify-center'>
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
                                <div className="space-y-1 text-lg">
                                    <p className="font-medium">Estagiário em Desenvolvimento de Software</p>
                                    <p><span className="font-semibold">Período:</span> Mai/2024 – Atualmente</p>
                                </div>
                            }
                        />
                        </div>
                    </div>
                </div>
            </div>

        );

    }
