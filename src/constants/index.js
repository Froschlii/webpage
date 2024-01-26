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
            "Im Anschluss: Psychotherapeutenausbildung absolvieren, die voraussichtlich 3 bis 4 Jahre in Teilzeit dauern und in Chemnitz stattfinden wird (meist Abends)",
            "Über die gesamte Dauer: weiterhin Halbtags Berufstätig bleiben und ggf. ein Jahr ans Studium und 1 bis 2 Jahre an die Ausbildung anzuhängen."
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
        link: 'https://certificates.cs50.io/9385aeb6-91e5-48b1-b047-89088b8106b0.pdf?size=letter',
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
        anschrift: 'Feldsiefer Weg 26 | Vettersstraße 52, Zimmer 229',
        geburtsdatum: '10.12.2001',
        geburtsort: '51381 Leverkusen',
        staatsangehörigkeit: 'Deutsch',
        phone: '+4915782941387',

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

export const haftungsausschluss = {
    impressum: {
        header: 'Verantwortlich für den Inhalt dieser Website gemäß § 5 TMG:',
        steueridentifikationsnummer: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: ',
        haftungshinweis: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.'
    },
    datenschutz: {
        h1: 'Datenschutzerklärung',
        h2: 'Allgemeiner Hinweis und Pflichtinformationen',
        h3: 'Benennung der verantwortlichen Stelle',
        ID1:'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
        ID2: 'Die verantwortliche Stelle entscheidet allein über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).',
        h4: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
        ID3: 'Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
        ID4: 'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
        ID5: 'Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: https://www.bfdi.bund.de/DE/Infothek/AnschriftenLinks/anschriftenlinks-node.html.',
        h4: 'Recht auf Datenübertragbarkeit',
        ID6: 'Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
        h5: 'Recht auf Auskunft, Berichtigung, Sperrung, Löschung',
        ID7: 'Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.',
        h6: 'SSL- bzw. TLS-Verschlüsselung',
        ID8: 'Server-Log-Dateien',
        ID9: 'In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
        ID10: 'Besuchte Seite auf unserer Domain, Datum und Uhrzeit der Serveranfrage, Browsertyp und Browserversion, Verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, IP-Adresse',
        ID11: 'Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.',
        h8: 'Kontaktformular',
        ID12: 'Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.',
        ID13: 'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
        ID14: 'Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
        h9: 'Speicherdauer von Beiträgen und Kommentaren',
        ID15: 'Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie beispielsweise IP-Adressen, werden gespeichert. Der Inhalt verbleibt auf unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen Gründen gelöscht werden musste.',
        ID16: 'Die Speicherung der Beiträge und Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit bereits erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
        h10: 'Abonnieren von Kommentaren',
        ID17: 'Sie können als Nutzer unserer Website nach erfolgter Anmeldung Kommentare abonnieren. Mit einer Bestätigungs-E-Mail prüfen wir, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können die Abo-Funktion für Kommentare jederzeit über einen Link, der sich in einer Abo-Mail befindet, abbestellen. Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.',
        h11: 'Newsletter-Daten',
        ID18: 'Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.',
        ID19: 'Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den „Austragen“-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
        ID20: 'Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.',
        h12: 'YouTube',
        ID21: 'Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.',
        ID22: 'Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.',
        ID23: 'YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.',
        ID24: 'Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.',
        ID25: 'Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: https://www.google.de/intl/de/policies/privacy.',
        h13: 'Google Analytics',
        ID26: 'Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.',
        ID27: 'Google Analytics verwendet „Cookies.“ Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert. Server-Standort ist im Regelfall die USA.',
        ID28: 'Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und ggf. auch Werbung zu optimieren.',
        ID29: 'IP-Anonymisierung',
        ID30: 'Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google statt.',
        h14: 'Browser Plugin',
        ID31: 'Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.',
        h15: 'Widerspruch gegen die Datenerfassung',
        ID32: 'Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer Website verhindert: Google Analytics deaktivieren.',
        ID33: 'Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de.',
        h16: 'Auftragsverarbeitung',
        ID34: 'Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen.',
        h17: 'Demografische Merkmale bei Google Analytics',
        ID35: 'Unsere Website verwendet die Funktion “demografische Merkmale” von Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu einer bestimmten Person ist nicht möglich. Sie können diese Funktion jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten durch Google Analytics, wie im Punkt “Widerspruch gegen die Datenerfassung” erläutert, generell untersagen.',
    
    }
}
//save all