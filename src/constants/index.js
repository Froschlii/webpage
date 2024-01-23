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
        link: 'https://www.linkedin.com/in/nils-paweldyk-44abaa2ab/',
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
        link: "https://github.com/Froschlii",
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

export const lebenslaufData = { 
    personalInfo: {
        name: 'Nils Paweldyk',
        email: 'nils.paweldyk@gmail.com',
        Anschrift: 'Feldsiefer Weg 26 | Vettersstraße 52 Zimmer 229',
        Geburtsdatum: '10.12.2001',
        Geburtsort: 'Leverkusen',
        Staatsangehörigkeit: 'Deutsch',
        Telefon: '+4915782941387',
        email: 'nils.paweldyk@gmail.com',
    },
    ausbildung: [
        { year: '08/2008', school: 'Grundschule Don-Bosco-Schule', degree: 'Grundschule' },
        { year: '08/2012', school: 'Werner-Heisenberg-Gymnasium', degree: '' },
        { year: '02/2018', school: 'Wechsel Klasse 10, 2. Halbjahr zu Landrat-Lucas-Gymnasium', degree: 'Abitur' },
        { year:' 09/2020', school: 'B.Sc.Psychologie an HSD Hochschule Döpfer', degree: 'Bachelor of Science' },
        { year: '09/2023', school: 'M.Sc.Psychologie an TU Chemnitz', degree: 'ongoing, then Master of Science' },
    ],
    praktischeErfahrungen: [
        { year: '28.11.2016 - 06.12.2016', what: 'Sozialpraktikum', where: 'Physio-Centrum MEDI LEV'},
        { year: '04.08.2017 - 22.08.2017', what: 'Schülerpraktikum', where: 'Wiener-Power-Electronics'},
        { year: '01.08.2021', what: 'Werksstudent', where: 'Ford'},
        { year: '01.09.2022 - 28.02.2023', what: '540 Stunden Praktikum', where: 'MVZ Odendahl und Kollegen'},   
        { year: '01.06.2023 - 31.12.2023', what: 'CS50x', where: 'Harvard'},
        { year: 'Oktober 2019', what: '2 Tage Kurz-Praktikum', where: 'Fassbacher Hof'},
    ],
    itkenntnisse: [
      {  what: 'MS-Oﬃce', how: 'Sehr gut' },
      {  what: 'JASP', how: 'Sehr gut' },
      {  what: 'Datev', how: 'Sehr gut' },
      {  what: 'Smarty', how: 'Sehr gut' },
      {  what: 'C#', how: 'gut' },
      {  what: 'Python', how: 'gut' },
      {  what: 'Java', how: 'gut' },
      {  what: 'JavaScript', how: 'gut' },
      {  what: 'CSS', how: 'gut' },
      {  what: 'React', how: 'gut' },
      {  what:'Python', how: 'gut' },
    ],
};
//save all