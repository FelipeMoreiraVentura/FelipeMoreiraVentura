import Html from '../assets/Html.png';
import JavaScript from '../assets/JavaScript-logo.png';
import Typescript from '../assets/typesript.png';
import Python from '../assets/python.png';
import Css from '../assets/Css.png';
import Dart from '../assets/dart.png';

import ReactLogo from '../assets/react.png';
import NextJs from '../assets/nextjs.png';
import Nodemailer from '../assets/nodemailer.png';
import Twilio from '../assets/twilio.png';
import TailwindCSS from '../assets/tailwindCSS.png';

import Pandas from '../assets/pandas.png';
import Numpy from '../assets/numpy.png';
import OpenAI from '../assets/openai.png';
import FastAPI from '../assets/fastapi.png';

import Flutter from '../assets/flutter.png';

import Firebase from '../assets/firebase.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import Docker from '../assets/docker.png';

export type CardItem = {
    title: string;
    src: string;
    info?: any[]
};

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
        info: [
            ["Meu aprendizado em HTML se iniciou em 2022, ao longo do meu curso de TI que fiz juntamente com o ensino médio."]
        ]

    },
    javascript: {
        title: 'JavaScript',
        src: JavaScript,
    },
    typescript: {
        title: 'TypeScript',
        src: Typescript,
    },
    css: {
        title: 'CSS',
        src: Css,
    },
    python: {
        title: 'Python',
        src: Python,

    },
    dart: {
        title: 'Dart',
        src: Dart,
    },
};

export type StackKey = 'node' | 'python' | 'dart';

export const frameworksByStack: Record<StackKey, CardItem[]> = {
    node: [
        { title: 'React', src: ReactLogo },
        { title: 'NextJs', src: NextJs },
        {
            title: 'Nodemailer',
            src: Nodemailer,
        },
        { title: 'Twilio', src: Twilio },
        {
            title: 'Tailwind',
            src: TailwindCSS,
        },
    ],
    python: [
        { title: 'Pandas', src: Pandas, },
        {
            title: 'Numpy',
            src: Numpy,
        },
        { title: 'OpenAI', src: OpenAI },
        { title: 'Whisper', src: OpenAI },
        { title: 'FastAPI', src: FastAPI },
    ],
    dart: [
        {
            title: 'Flutter',
            src: Flutter,
        },
    ],
};

export const tools: CardItem[] = [
    {
        title: 'Firebase',
        src: Firebase,
    },
    { title: 'Git', src: Git },
    { title: 'GitHub', src: GitHub },
    { title: 'Docker', src: Docker },
];
