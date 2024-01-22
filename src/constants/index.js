//2:43:00 modifying
import { DonBosco, nils, harvard, covid } from "../assets/images";
import {
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Ich bin auf der Suche nach:",
        company_name: "Festanstellung",
        icon: covid,
        iconBg: "#accbe1",
        date: "Ab dem 01.03.2024",
        points: [
            "Festanstellung mit Arbeitszeiten im Umfang von 14 bis maximal 30 Stunden pro Woche" 
        ],
    },
    {
        title: "Was ich zu bieten habe:",
        company_name: "Motivation und Durchhaltevermögen",
        icon: covid,
        iconBg: "#accbe1",
        date: "Ab dem 01.03.2024",
        points: [
            "Ich bin ehrgeizig, zielstrebig und eigentlich immer gut gelaunt",
            "Dazu empfinde ich viel Spaß beim Lernen und bin motiviert darin, neue, als unüberwindbar wirkende Herausforderungen anzunehmen!",
        ],
    },
    {
        title: "Meine Pläne:",
        company_name: "Psychologie | Psychotherapie | you!",
        icon: covid,
        iconBg: "#accbe1",
        date: "Ab dem 01.03.2024",
        points: [
            "M.Sc.Psychologie Studium in Regelstudienzeit abschließen",
            "Im Anschluss: Psychotherapeutenausbildung, die voraussichtlich 3-4 Jahre in Teilzeit dauern und in Chemnitz stattfinden wird (meist Abends) absolvieren",
            "Über die gesamte Dauer: Den Beruf bei Ihnen ausführen und ggf. ein Jahr ans Studium und 1 bis 2 Jahre an die Ausbildung anzuhängen."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/LolFred5',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: harvard,
        theme: 'btn-back-red',
        name: 'CS50x at Harvard',
        description: 'Im Fokus des Projekts lagen algorithmisches Denken, Abstraktion, Datenstrukturen und verschiedene Programmiersprachen wie C, Python, SQL, HTML, CSS und JavaScript. Das abschließende Projekt stellt diese Website dar, bei der ich node.js und react verwendet habe.',
        link: 'https://cs50.harvard.edu/x/2023/',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-yellow',
        name: 'This Website',
        description: 'Mithilfe von zahlreichen Tutorials wurde diese Website erstellt.',
        link: "nils-paweldyk.de",//github''
    },
];

export const notfinprojects = [
    {
        iconUrl: harvard,
        theme: 'btn-back-green',
        name: 'CS50w at Harvard',
        description: 'CS50w ist der nächste Schritt und der direkte Anschlusskurs an CS50x. Hierbei werden Python, JavaScript und SQL sowie die frameworks Django, React und Bootstap behandelt.',
        link: 'https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript',
    },
];

export const personalInfo = [
    {
        Überschrift: "Persönliche Daten",
        Infos: "",
        icon: nils,
        iconBg: "#accbe1",
        date: "",
        points: [
            "Name: Nils Paweldyk",
            "Anschrift: Feldsiefer Weg 26 | Vettersstraße 52 Zimmer 229",
            "Geburtsdatum und -ort: 10.12.2001, Leverkusen",
            "Staatsangehörigkeit: deutsch",
            "Telefon: +4915782941387",
            "E-Mail: nils.paweldyk@gmail.com",
        ],
    },
];

export const ausbildung = [
    {
        Überschrift: "Ausbildung",
        Infos: "",
        iconBg: "#accbe1",
        date: "",
        points: [
            "08/2008 Grundschule Don-Bosco-Schule",
            "08/2012 Werner-Heisenberg-Gymnasium",
            "02/2018 Wechsel Klasse 10, 2. Halbjahr zu Landrat-Lucas-Gymnasium",
            "Abschluss Abitur",
            "09/2020 B.Sc.Psychologie an HSD Hochschule Döpfer",
            "07/2023 Abschluss des Bachelors",
            "09/2023 M.Sc.Psychologie an TU Chemnitz"
        ],
    }
];

export const praktischeErfahrungen = [
    {
        Überschrift: "Praktische Erfahrungen",
        Infos: "",
        iconBg: "#accbe1",
        date: "",
        points: [
            "28.11.2016 - 06.12.2016: Sozialpraktikum im Physio-Centrum MEDI LEV",
            "04.08.2017 - 22.08.2017: Schülerpraktikum bei Wiener-Power-Electronics",
            "Oktober 2019: 2 Tage Kurz-Praktikum im Fassbacher Hof",
            "01.08.2021: Werksstudent bei Ford",
            "01.09.2022 - 28.02.2023: 540 Stunden Praktikum MVZ Odendahl und Kollegen",
            "01.06.2023 - 31.12.2023: CS50x Harvard"
        ],
    }
];

export const itkenntnisse = [
    {
        Überschrift:"IT-Kenntnisse",
        Infos: "",
        iconBg: "#accbe1",
        date: "",
        points: [
            "MS-Oﬃce Sehr gut",
            "JASP Sehr gut",
            "Datev Sehr gut",
            "Smarty Sehr gut",
            "C# gut",
            "Python gut",
            "Java / JavaScript gut",
            "CSS gut",
            "React gut",
            "Python gut",
        ],
    }
];