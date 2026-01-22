import Html from '../assets/Html.png';
import JavaScript from '../assets/JavaScript-logo.png';
import Typescript from '../assets/typesript.png';
import Python from '../assets/python.png';
import Css from '../assets/Css.png';
import Dart from '../assets/dart.png';

import ReactLogo from '../assets/react.png';
import NextJs from '../assets/nextjs.png';
import ChakraUI from '../assets/chakraui.png';
import ExpressJS from '../assets/expressjs.png';
import Nodemailer from '../assets/nodemailer.png';
import Twilio from '../assets/twilio.png';
import TailwindCSS from '../assets/tailwindCSS.png';

import Pandas from '../assets/pandas.png';
import Numpy from '../assets/numpy.png';
import OpenAI from '../assets/openai.png';
import FastAPI from '../assets/fastapi.png';
import Streamlit from '../assets/streamlit.svg';
import SQLAlchemy from '../assets/sqlalchemy.png';

import Flutter from '../assets/flutter.png';

import Firebase from '../assets/firebase.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import Docker from '../assets/docker.png';
import Stripe from '../assets/stripe.png';
import postgresql from '../assets/Postgresql.svg';

export type CardItem = {
    title: string;
    src: string;
    text?: string;
};

export type CarouselCard = {
    title: string;
    src: string;
    text: string
}


export type LanguageKey =
    | 'html'
    | 'javascript'
    | 'typescript'
    | 'css'
    | 'python'
    | 'dart';

export const languages: Record<LanguageKey, CardItem> = {
    html: {
        title: 'HTML',
        src: Html,
        text: "Meu aprendizado em HTML teve início em 2023, durante o curso técnico em TI que realizei junto ao ensino médio. Ao longo das atividades acadêmicas e, principalmente, dos estudos pessoais, adquiri um sólido conhecimento na linguagem."
    },
    javascript: {
        title: 'JavaScript',
        src: JavaScript,
        text: "Meu aprendizado em JavaScript começou em 2023, durante o curso técnico em TI. No entanto, a maior parte do conhecimento que adquiri veio de estudos pessoais e cursos online, com o objetivo de ampliar minhas oportunidades no mercado de trabalho."
    },
    typescript: {
        title: 'TypeScript',
        src: Typescript,
        text: "Atualmente, é a linguagem que mais utilizo no dia a dia. Tive meu primeiro contato no meu primeiro emprego, onde uni meu conhecimento em JavaScript ao aprendizado gradual de tipagem conforme entregava as demandas. Hoje, utilizo TypeScript na maioria dos meus projetos pessoais e profissionais."
    },
    css: {
        title: 'CSS',
        src: Css,
        text: "Aprendi CSS de forma autodidata, antes mesmo de o curso técnico abordar o conteúdo. Sempre senti a necessidade de dar um acabamento visual melhor aos projetos. Atualmente, possuo bom domínio da linguagem e dos frameworks que a utilizam como base."
    },
    python: {
        title: 'Python',
        src: Python,
        text: "Meu primeiro contato com Python ocorreu no segundo ano do curso técnico. Desde então, desenvolvi um bom domínio das principais bibliotecas, tendo criado diversos scripts e APIs em projetos pessoais e demandas profissionais."
    },
    dart: {
        title: 'Dart',
        src: Dart,
        text: "Aprendi Dart durante o desenvolvimento do meu TCC. Embora tenha sido a última linguagem apresentada no curso técnico, estudei alguns meses antes por conta própria para desenvolver um trabalho de conclusão mais robusto e interessante."
    },
};

export type StackKey = 'node' | 'python' | 'dart';

export const frameworksByStack: Record<StackKey, CardItem[]> = {
    node: [
        {
            title: 'React',
            src: ReactLogo,
            text: "No meu primeiro emprego, antes mesmo de atuar oficialmente como desenvolvedor, percebi que o React era a principal tecnologia utilizada pela equipe. Decidi estudá-lo por conta própria e obtive rápida adaptação, adquirindo familiaridade com hooks, contextos e padrões comuns da biblioteca."
        },
        {
            title: 'NextJs',
            src: NextJs,
            text: "Conheci o Next.js quando um desenvolvedor da minha equipe decidiu refatorar um projeto do zero, adotando essa tecnologia como base da nova arquitetura."
        },
        {
            title: 'Tailwind',
            src: TailwindCSS,
            text: "Aprendi Tailwind CSS em diversos projetos desenvolvidos no ambiente de trabalho. Possuo bastante afinidade com a ferramenta e a utilizo com frequência no desenvolvimento de interfaces."
        },
        {
            title: "ChakraUI",
            src: ChakraUI,
            text: "Tive contato com o Chakra UI ao assumir a manutenção de um projeto já existente. Estudei seus componentes e gostei da agilidade e praticidade no desenvolvimento de interfaces. Ainda assim, atualmente prefiro utilizar Tailwind CSS."
        },
        {
            title: "ExpressJS",
            src: ExpressJS,
            text: "Aprendi Express.js em demandas de backend e é o framework que mais utilizo atualmente. Possuo bom domínio da estrutura de organização, incluindo services, controllers e rotas."
        },
        {
            title: 'Nodemailer',
            src: Nodemailer,
            text: "Utilizei o Nodemailer em uma demanda específica para envio de e-mails em massa."
        },
        {
            title: 'Twilio',
            src: Twilio,
            text: "Utilizei o Twilio em uma demanda de envio de mensagens em massa, onde aprendi a estrutura e o funcionamento dos templates utilizados pelo WhatsApp."
        },
    ],
    python: [
        {
            title: 'Pandas',
            src: Pandas,
            text: "Aprendi Pandas em um curso online de Python e posteriormente aprofundei o conhecimento durante o curso técnico no ensino médio."
        },
        {
            title: 'Numpy',
            src: Numpy,
            text: "Aprendi NumPy por meio de um curso online de Python, utilizando a biblioteca em conjunto com outras ferramentas de análise de dados."
        },
        {
            title: 'OpenAI',
            src: OpenAI,
            text: "Utilizei a API da OpenAI em diversos projetos, incluindo a criação de um chatbot para resumo de transcrições de aulas, geração de informações de ativos para um site de investimentos e também no desenvolvimento do meu TCC."
        },
        {
            title: 'Whisper',
            src: OpenAI,
            text: "Desenvolvi um transcritor de vídeos utilizando o Whisper em conjunto com Streamlit."
        },
        {
            title: 'FastAPI',
            src: FastAPI,
            text: "É meu framework favorito para desenvolvimento de APIs em Python, possuindo grande afinidade com sua estrutura e desempenho."
        },
        {
            title: 'Streamlit',
            src: Streamlit,
            text: "Utilizo Streamlit principalmente em projetos pessoais para criação rápida de interfaces, sem a necessidade de desenvolver uma API separada. Apesar disso, para projetos mais estruturados, prefiro utilizar React."
        },
        {
            title: "SQLAlchemy",
            src: SQLAlchemy,
            text: "Considero o SQLAlchemy uma ferramenta prática para manipulação de banco de dados. Como meu domínio em Python é maior do que em SQL puro, sinto-me mais seguro ao realizar alterações grandes e críticas utilizando essa biblioteca."
        }
    ],
    dart: [
        {
            title: 'Flutter',
            src: Flutter,
            text: "Aprendi Flutter durante o desenvolvimento do meu TCC. Apesar de ter sido o último conteúdo apresentado no curso técnico, estudei antecipadamente para criar um projeto mais completo e bem estruturado."
        },
    ],
};

export const tools: CarouselCard[] = [
    {
        title: 'Firebase',
        src: Firebase,
        text: "Utilizo Firebase tanto no ambiente de trabalho quanto em projetos pessoais, com bom domínio dos serviços de Database, Storage e Authentication."
    },
    {
        title: "Stripe",
        src: Stripe,
        text: "Desenvolvi diversas aplicações utilizando o Stripe, incluindo fluxos automáticos baseados em eventos da API, que auxiliaram equipes de marketing no uso de dados. Também possuo bom domínio dos objetos de pagamento e já desenvolvi dashboards de faturamento."
    },
    {
        title: "PostgressSQL",
        src: postgresql,
        text: "Aprendi PostgreSQL no meu primeiro emprego e atualmente é o banco de dados que mais utilizo."
    },
    {
        title: 'Git',
        src: Git,
        text: "Utilizo Git diariamente no trabalho e em projetos pessoais, criando branches organizadas e seguindo boas práticas de versionamento e commits."
    },
    {
        title: 'GitHub',
        src: GitHub,
        text: "No ambiente de trabalho, utilizamos GitHub Projects, o que me proporcionou domínio das práticas de Pull Requests, Issues e organização de projetos."
    },
    {
        title: 'Docker',
        src: Docker,
        text: "Ainda não utilizei Docker de forma extensiva, mas já configurei e subi containers para bancos de dados como PostgreSQL."
    },
];

