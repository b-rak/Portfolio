export default {
  layouts_title: "Burak Tas - {title}",
  nav: {
    landing: "Startseite",
    experience: "Berufserfahrung",
    projects: "Coding Projekte",
    aboutme: "About Me",
    langSwitcher: "Sprache wechseln zu: Englisch",
  },
  footer: "Entwickelt mit Nuxt.js und Tailwind CSS, deployt auf Netlify.",
  carousel: {
    ariaNextSlide: "Zur nächsten Slide",
    ariaPreviousSlide: "Zur vorherigen Slide",
    ariaNavigateToSlide: "Springe zu Slide {slideNumber}",
    ariaGallery: "Galerie",
    itemXofY: "Slide {currentSlide} von {slidesCount}",
    iconArrowUp: "Pfeil nach oben",
    iconArrowDown: "Pfeil nach unten",
    iconArrowRight: "Pfeil nach rechts",
    iconArrowLeft: "Pfeil nach links",
  },
  error: {
    backTo: "Zurück zur",
    button: "Startseite",
    pageNotFound: "Hey wohin gehst du? Diese Seite existiert nicht!",
    somethingBroke: "Es sieht so aus als wäre etwas kaputt gegangen.",
    sorry: "Das tut mir leid.",
  },
  landing:
    "Mit umfassender Erfahrung in manuellem und automatisiertem Testing bin ich aktuell als Innovation Engineer tätig. Mein Ziel ist es, diese fundierte Expertise in die Welt des Frontend Developments einzubringen, um herausragende Benutzererlebnisse zu gestalten.",
  projects: {
    title: "Projekte",
    backButton: "Zurück zu Projekte",
    techAriaLabel: "Liste eingesetzter Technologien",
    currentInfo: "Aktuelle Info: ",
    naehrstoffe: {
      title: "Nährstoff Rechner",
      overviewDescription:
        "Ein Nährstoffrechner mit welchem Produkte durch eine FoodData API gesucht und einer Liste hinzugefügt werden können. Es kann die Menge der Produkte angegeben werden und die Liste berechnet die Summe der Nährwerte aller Produkte auf der Liste.",
      github: "https://github.com/b-rak/NaehrstoffApi",
      tech: ["Vanilla JS", "Bootstrap", "Webpack", "Node.JS", "Jest"],
      webpage: "",
      text: [
        "In dem Udemy Kurs 'Die komplette JavaScript Masterclass: Vom Anfänger zum Profi' von Jannis Seemann wurden zunächst Grundlagen von JavaScript wie Datentypen, Arrays, Funktionen und Objekte behandelt. Anschließend wurden fortgeschrittenere Konzepte wie Prototypen-Vererbung, asynchrones JavaScript und JavaScript im Browser thematisiert.",
        "Um dieses ganze Wissen zu festigen wurde ein Nährstoffrechner als Projekt umgesetzt. Die HTML-Struktur und das CSS waren dabei vorgegeben. Im ersten Schritt wurden die einzelnen Komponenten 'Produktsuche', 'Produktliste' und 'Nährwerte' als Klassen (Konstruktorfunktionen) angelegt. Um Produkte suchen zu können wurde die 'FoodData Central API' genutzt. Zum Ansteuern der API wurde ein Node.JS Server erstellt. Mit Hilfe der API können Produkte gesucht und deren Nährstoffwerte abgefragt werden. Die gesuchten Produkte können dann der Produktliste hinzugefügt und die Menge des Produkts (in g) eingestellt werden. Die Summe der Nährwerte aller Produkte (inkl. Menge) auf der Liste wird unterhalb der Liste angezeigt. Um die einzelnen Komponenten sicher zu gestalten, wurde noch simples Unittesting mit Jest eingebaut.",
      ],
      info: "",
      images: {
        numberOfImages: "4",
        folder: "naehrstoffrechner",
      },
    },
    jsChallenges: {
      title: "JS Challenges: Advent of JavaScript 2021/22",
      overviewDescription:
        "Ein Adventskalender voller Javascript Challenges. Jeder Tag beinhaltet eine andere Challenge und es sind unter anderem Challenges wie ein Timer, eine Kostenteiler App oder eine Wetter App dabei.",
      github: "https://github.com/b-rak/AdventOfJS",
      tech: ["Vanilla JS", "HTML", "CSS"],
      webpage: "https://www.adventofjs.com/",
      text: [
        "Ein Adventskalender voller JavaScript Challenges kreiert von Amy Dutton und James Q Quick. Jede Challenge gibt die HTML Struktur und das CSS vor, so dass sich voll und ganz auf den JavaScript Code konzentriert werden kann.",
        "Unter den Challenges befinden sich viele nützliche Komponenten wie z.B. eine Kostenteiler App oder eine Wetter App. Des Weiteren gibt es auch einen Timer, eine Videoplay Liste, einen Passwort Generator und noch vieles mehr.",
      ],
      info: "Von Amy Dutton gibt es auch einen Advent of JS 2023, bei welchem anstatt der mini Challenges ein fortlaufendes Projekt gebaut wird: die Secret Santa App. Hier hat man unter anderem auch ein Figma File mit dem Design bekommen, so dass das Projekt komplett von null aufgebaut werden kann. An diesem Projekt arbeite ich derzeit, habe aus zeitlichen Gründen jedoch bisher nur den Login geschafft (s. letzter Screenshot).",
      images: {
        numberOfImages: "8",
        folder: "adventofjs",
      },
    },
    masteringNuxt: {
      title: "Mastering Nuxt 3",
      overviewDescription:
        "Eine Online Kurs Plattform, dessen erstes Kapitel frei verfügbar ist. Der Kurs kann gekauft und somit der Zugriff auf alle Inhalte erworben werden. Einzelne Kapitel können abgeschlossen werden und der Kurs Fortschritt wird gespeichert.",
      github: "https://github.com/b-rak/Mastering-Nuxt-3",
      tech: ["Nuxt3", "Typescript", "Supabase", "Prisma", "Tailwind", "Stripe"],
      webpage: "https://mas-ter-ing-nuxt-3.netlify.app",
      text: [
        'In dem Kurs "Mastering Nuxt 3" mit Michael Thiessen wurde als Projekt eine Online Kurs Plattform umgesetzt. Zu Beginn wurde schnell das Frontend gebaut, wobei die wichtigsten Konzepte wie filea-based Routing, Komponenten, Layouts, Composables und Error Handling erklärt wurden.',
        "Im nächsten Schritt sollte sichergestellt werden, dass nur das erste Kapitel des Online Kurses frei verfügbar ist. Dazu sollte mit Hilfe von Middlewarefunktionen ein Prozess zur Authentifizierung integriert werden. Genutzt wurde Supabase um einen Social Login durch Github zu ermöglichen.",
        "Des Weiteren wurde in Supabase eine Postgres Datenbank angelegt in welcher sich die Kurs Daten wie die Kursinhalte oder der Kursfortschritt der einzelnen Nutzer befinden. Um auf die Daten typensicher zuzugreifen wurde Prisma eingesetzt und eine API geschrieben.",
        "Zuletzt wurde noch eine Landing Page erstellt, auf welcher Besucher die Möglichkeit haben den Kurs zu kaufen und somit Zugriff auf alle Kapitel zu erhalten. Der Kaufprozess wurde mittels Webhooks von Stripe simuliert und erfolgreiche Kaufabschlüsse wurden in der Datenbank gespeichert.",
        "Das gesamte Projekt wurde mittels Netlify deployed, wobei auch auf Environment Variables und Branch Deploys eingegangen wurde.",
      ],
      info: "Leider funktioniert die Authentifizierung mittels Github aktuell nicht richtig, da es Ende letzten Jahres Updates von Supabase gab.",
      images: {
        numberOfImages: "3",
        folder: "masteringnuxt",
      },
    },
    newDashboard: {
      title: "End-to-End Monitoring Dashboard",
      overviewDescription:
        "Ein neues Frontend für ein Dashboard. Kunden können ihre Software monitoren und ihre Testergebnisse auf dem Dashboard einsehen. Dabei gibt es verschiedene Charts, die die Ergebnisse zusammenfassen. Des Weiteren können sie Details wie Screenshots oder Videos einsehen.",
      github: "",
      tech: ["Nuxt3", "Typescript", "Tailwind", "Springboot"],
      webpage: "",
      text: [
        "Dieses Projekt ist ein internes Projekt bei meinem jetzigen Arbeitgeber. Dabei geht es um die Entwicklung eines neuen Dashboards für einen Service von uns. Das Team bestand im Wesentlichen aus zwei Designerinnen, einem Backendler und mir, wobei ich neben der Frontend Entwicklung auch noch das Projekt leite. Projekt Kick-Off war im April 2023 und zu Beginn wurde das Projekt auf Jira geplant: Stories wurden geschrieben und zeitlich geschätzt. Somit wurde das Projekt sowohl zeitlich als auch ressourcentechnisch geplant. Es gab einen regelmäßigen Austausch mit den operativ Beteiligten und monatliche Updates an Vorgesetzte und das Produktmanagement.",
        "Das Frontend habe ich in Nuxt3 mit Typescript und Tailwind entwickelt. Dabei habe ich die Designs aus Figma umgesetzt. Für alle Charts habe ich die Library Chartjs verwendet. Das Backend wurde mit Springboot zusammen mit einer MariaDB entwickelt.",
        "Die Nutzer können sich einloggen und sehen auf der Startseite Zusammenfassungen der Testergebnisse des letzten Monats. Zudem werden die aktuellsten Testergebnisse angezeigt, so dass schnell eine Beurteilung des aktuellen Zustands des Systems getroffen werden kann. Auf der Testfallübersichtsseite sehen die einzelnen Testcases je Gruppe mit den letzten Testergebnissen angezeit in einem Säulendiagramm. Durch Klicken eines Testcases gelangen sie zu der Detailseite, auf welcher die einzelnen Testmethoden mit den letzten Testergebnissen aufgelistet werden. Hier sind genaue Details zu den Testruns, wie warum der Test fehlgeschlagen ist oder Screenshots und Videos, einsehbar. Des Weiteren kann der Nutzer seine Testergebnisse als csv-Datei exportieren und für interne Auswertungen verwenden.",
        "Aktuell im Fokus ist es die Kunden langsam onzuboarden und den MVP zu vertesten. Es soll Feedback per Fragebogen und vereinzelten Interviews eingeholt werden. Nach Auswertung des Feedbacks soll der MVP entsprechend weiterentwickelt werden.",
        "Neben dem Feedback fehlt noch die Entwicklung des Profilbereichs, in welchem die Nutzer Daten wie Passwort ändern oder Benachrichtigungseinstellungen vornehmen können.",
      ],
      info: "Leider kann ich aktuell keinen Link zum Github Code oder einer deployten Version des Dashboards teilen, da dies mit meinem jetzigen Arbeitgeber noch nicht geklärt ist.",
      images: {
        numberOfImages: "6",
        folder: "dashboard",
      },
    },
  },
  experience: {
    title: "Erfahrung",
    tester: {
      time: "04/2019 - 12/2020 bei ",
      tasks: [
        "Testing von Software verschiedenster Branchen z.B. e-Commerce, Tourismus und Banking",
        "Überwiegend in agilen Entwicklungsteams mitgearbeitet",
        "Leitung manueller Testläufe mit bis zu 15 Testern",
        "Erstellung von Testfällen und Testplänen in Testrail",
      ],
    },
    automation: {
      time: "01/2021 - 07/2022 bei ",
      tasks: [
        "Erstellung und Automatisierung von Testfällen für Webseiten (Desktop) und mobile Apps (iOS/Android)",
        "Betreuung von Werkstudenten inkl. CodeReview",
        "Betreuung Kundenprojekte verschiedenster Branchen z.B. Rundfunk, Verkehr, e-Commerce",
        "Erfahrung mit diversen Frameworks/Tools gesammelt, z.B. Selenium, Appium, Playwright, TestNG, ExtentReport, Gitlab, Jenkins",
      ],
    },
    seniorAutomation: {
      time: "08/2022 - 02/2023 bei ",
      tasks: [
        "Umsetzung eines Projektes mit einem Unternehmen mit Softwarelösungen für den Einzelhandel",
        "Team bestand aus sieben Leuten: sechs von Kundenseite, wobei drei (QA Manager und Tester) in DE und drei (Test Automation Engineers) in CZ sitzen, und ich als externer",
        "Zusammenarbeit lief agil und aufgrund der verschiedenen Nationalitäten auf Englisch ab",
        "Meine Aufgaben: Aufziehen eines Automation Frameworks in Python mit Appium/Selenium, Robot und Allure; Betreuung der CZ Automation Engineers inkl. CodeReview; Framework maintainen und weiterentwickeln",
      ],
    },
    innovation: {
      time: "03/2023 - heute bei ",
      tasks: [
        "Entwicklung neuer und Weiterentwicklung bestehender Services mit Fokus auf Automatisierung",
        "Durchführung Interviews zur Problemidentifikation unserer Kunden",
        "Problemlösung durch Entwerfung Prototyp und konkreter Umsetzung",
        "Projekte: Automatische Erstellung einer Testautomatisierungsinfrastruktur (verworfen), Automatisiertes Accessiblity Testing, Neues Frontend für ein Dashboard eines internen Services",
      ],
    },
  },
  aboutme: {
    title: "Über Mich",
    general: {
      title: "Allgemeines",
      text: [
        "Geboren am 05.11.1993 in Mönchengladbach",
        "Seit 2013 wohnhaft in Köln",
        "Freizeit: Lesen, Unterwegs, analoge Fotografie, Nintendo Switch",
        "Haustiere: bald eine Wasserschildkröte :)",
        'Random Info: bei "Schere, Stein oder Papier" nehme ich immer zuerst Stein. Lust auf ein ',
      ],
    },
    skills: [
      "Programmiersprachen: JS/TS, Python, Java",
      "Frontend: HTML, CSS, Tailwind, Nuxt3, Svelte (Basics), Netlify, Unittesting mit Jest (Basics)",
      "Git",
      "Grundkenntnisse Accessibilty im Rahmen der AxeCore Library",
      "QA Testing (Jira, Confluence, Testrail)",
      "Test Automation (Selenium, Appium, TestNG, ExtentReport, Playwright/Puppeteer, Robot, Allure)",
      "Postman: Erstellung automatisierter API Tests",
      "Docker (Basics)",
      "Linux/Shell: Standard Linux Commands und Basic Shellscripting",
    ],
    education: {
      title: "Ausbildung",
      text: [
        "Studium B.Sc. Mathematik (2013-2017) und B.Sc. Chemie (2013-2017) an der Universität zu Köln -> Ja, ich habe 2 Vollzeitstudiengänge parallel studiert (empfehle ich nicht weiter :D)",
        "Studium M.Sc. Mathematik (2017-2020) an der Universität zu Köln",
        "Erasmus Auslandssemester im Jahre 2018 in Budapest",
      ],
    },
    certificates: {
      title: "Zertifikate",
      text: [
        "Mastering Nuxt 3 Course (2023)",
        "Complete Javascript Masterclass (2022)",
        "ISTQB Certified Tester Foundation Level (CT-FL) (2020)",
      ],
    },
    rps: {
      backButton: "Zurück zu Über Mich",
      selectHeading: "Wähle ein Symbol aus",
      rock: "Stein",
      paper: "Papier",
      scissors: "Schere",
      winner: "Der Gewinner ist:",
      draw: "Unentschieden. Niemand gewinnt.",
      mySelection: "Burak's Auwahl",
      yourSelection: "Deine Auswahl",
      score: "Aktueller Punktestand",
      playAgain: "Noch einmal spielen?",
    },
  },
};
