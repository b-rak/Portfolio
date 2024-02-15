export default {
  layouts_title: "Burak Tas - {title}",
  nav: {
    landing: "Home",
    experience: "Experience",
    projects: "Coding Projects",
    aboutme: "About Me",
    langSwitcher: "Change language to: German",
  },
  footer: "Built with Nuxt.js and Tailwind CSS, deployed with Netlify.",
  carousel: {
    ariaNextSlide: "Navigate to next slide",
    ariaPreviousSlide: "Navigate to previous slide",
    ariaNavigateToSlide: "Navigate to slide {slideNumber}",
    ariaGallery: "Gallery",
    itemXofY: "Item {currentSlide} of {slidesCount}",
    iconArrowUp: "Arrow pointing upwards",
    iconArrowDown: "Arrow pointing downwards",
    iconArrowRight: "Arrow pointing to the right",
    iconArrowLeft: "Arrow pointing to the left",
  },
  error: {
    backTo: "Back to",
    button: "Homepage",
    pageNotFound: "Hey where are you heading? This page does not exist!",
    somethingBroke: "It seems that something might have broke.",
    sorry: "I am sorry for that.",
  },
  landing:
    "With broad experience in manual and automated testing, I am currently working as an Innovation Engineer. My goal is to bring this in-depth expertise to the world of frontend development to create outstanding user experiences.",
  projects: {
    title: "Projects",
    backButton: "Back to Projects",
    techAriaLabel: "List of used technologies",
    currentInfo: "Current information: ",
    naehrstoffe: {
      title: "Nutrient Calculator",
      overviewDescription:
        "A nutrient calculator with which products can be searched through a FoodData API and added to a list. The quantity of products can be specified and the list calculates the sum of the nutritional values of all products on the list.",
      github: "https://github.com/b-rak/NaehrstoffApi",
      tech: ["Vanilla JS", "Bootstrap", "Webpack", "Node.JS", "Jest"],
      webpage: "",
      text: [
        "In the Udemy course 'Die komplette JavaScript Masterclass: Vom Anfänger zum Profi' by Jannis Seemann, the basics of JavaScript such as data types, arrays, functions and objects were covered first. More advanced concepts such as prototype inheritance, asynchronous JavaScript and JavaScript in the browser were covered afterwards.",
        "To strengthen the aquired knowledge, a nutrient calculator was implemented as a project. The HTML structure and CSS were predefined. In the first step, the components 'product search', 'product list' and 'nutritional values' were created as classes (constructor functions). The 'FoodData Central API' was used to search for products. A Node.JS server was created to access through the API information about products such as nutritional values. The searched products can be added to the product list and the quantity of the product (in g) can be set. The sum of the nutritional values of all products (incl. quantity) on the list is displayed below the list. In order to make the individual components safe, simple unit testing with Jest has been integrated.",
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
        "An advent calendar full of Javascript challenges. Each day contains a different challenge, including challenges such as a timer, a cost-sharing app and a weather app.",
      github: "https://github.com/b-rak/AdventOfJS",
      tech: ["Vanilla JS", "HTML", "CSS"],
      webpage: "https://www.adventofjs.com/",
      text: [
        "An advent calendar full of JavaScript challenges created by Amy Dutton and James Q Quick. Each challenge provides the HTML structure and CSS so that you can concentrate fully on the JavaScript code.",
        "Among the challenges there are many useful components such as a cost divider app or a weather app. There is also a timer, a video play list, a password generator and many more.",
      ],
      info: "There is also an Advent of JS 2023 from Amy Dutton, in which an ongoing project is built instead of the mini challenges: the Secret Santa app. At the beginning of the challenge one receives a Figma file with the design, so that the project can be built completely from scratch. I'm currently working on this project, but due to time constraints I've only managed to build the login page so far (see last screenshot).",
      images: {
        numberOfImages: "8",
        folder: "adventofjs",
      },
    },
    masteringNuxt: {
      title: "Mastering Nuxt 3",
      overviewDescription:
        "An online course platform, of which the first chapter is freely available. The course can be purchased and thus access to all content can be acquired. Individual chapters can be completed and the course progress is saved.",
      github: "https://github.com/b-rak/Mastering-Nuxt-3",
      tech: ["Nuxt3", "Typescript", "Supabase", "Prisma", "Tailwind", "Stripe"],
      webpage: "https://mas-ter-ing-nuxt-3.netlify.app",
      text: [
        'In the course "Mastering Nuxt 3" with Michael Thiessen, an online course platform was implemented as a project. At the beginning, the frontend was quickly built, explaining the most important concepts such as file-based routing, components, layouts, composables and error handling.',
        "The next step was to ensure that only the first chapter of the online course was freely available. To do this, a process for authentication was to be integrated with the help of middleware functions. In addition Supabase was used to enable a social login through Github.",
        "Furthermore, a Postgres database was created in Supabase in which the course data such as the course content or the course progress of the individual users is stored. Prisma was used to access the data in a type-safe manner and an API was written.",
        "Finally, a landing page was created on which visitors have the opportunity to buy the course and thus gain access to all chapters. The purchase process was simulated using webhooks from Stripe and successful purchases were saved in the database.",
        "The entire project was deployed using Netlify, where also  environment variables and branch deploys were covered.",
      ],
      info: "Unfortunately, authentication via Github is currently not working properly, as there were updates to Supabase at the end of last year.",
      images: {
        numberOfImages: "3",
        folder: "masteringnuxt",
      },
    },
    newDashboard: {
      title: "End-to-End Monitoring Dashboard",
      overviewDescription:
        "A new front end for a dashboard. Customers can monitor their software and view their test results on the dashboard. There are various charts that summarize the results. They can also view details such as screenshots or videos.",
      github: "https://github.com/b-rak/e2e_dashboard",
      tech: ["Nuxt3", "Typescript", "Tailwind", "Springboot"],
      webpage: "https://e2e-dashboard.netlify.app",
      text: [
        "This project is an internal project at my current employer. It involves the development of a new dashboard for one of our services. The team essentially consisted of two designers, a backend developer and myself, whereby I also managed the project in addition to front-end development. Project kick-off was in April 2023 and at the beginning the project was planned on Jira: Stories were written and estimated in terms of time. This meant that the project was planned both in terms of time and resources. There was a regular exchange with the operational team members and monthly updates to superiors and the product management team.",
        "I developed the frontend in Nuxt3 with Typescript and Tailwind, whereby I implemented the designs from Figma. I used the Chartjs library for all the charts. The backend was developed with Springboot together with a MariaDB.",
        "Users can log in and see summaries of the last month's test results on the dashboard page. In addition, the most recent test results are displayed so that an evaluation of the current state of the system can be made quickly. On the test case overview page, you can see the individual test cases per group with the latest test results displayed in a bar chart. Clicking on a test case takes you to the details page, where the individual test methods are listed with the latest test results. Here you can see exact details of the test runs, such as why the test failed or screenshots and videos. Users can also export their test results as a csv file and use them for internal evaluations.",
        "The current focus is on slowly onboarding customers and testing the MVP. Feedback is to be obtained via questionnaires and several individual interviews. After evaluating the feedback, the MVP will be further developed accordingly.",
        "In addition to the feedback, the development of the profile area, in which users can change data such as passwords or notification settings, is still missing.",
      ],
      info: "Linked is a demo version of the dashboard. The 'Dashboard', 'Testfälle' and 'Testfalldetails' areas are currently ready, although there is an error in the backend which causes that test results are no longer displayed. The error will be fixed on Friday 16.02. The login details are as follows: Mail: demo%40mail.de; PW: JZecn%40ug$K",
      images: {
        numberOfImages: "6",
        folder: "dashboard",
      },
    },
  },
  experience: {
    title: "Experience",
    tester: {
      time: "04/2019 - 12/2020 at ",
      tasks: [
        "Testing of software from a wide range of industries, e.g. e-commerce, tourism and banking",
        "Mainly worked in agile development teams",
        "Management of manual test runs with up to 15 testers",
        "Creation of test cases and test plans in Testrail",
      ],
    },
    automation: {
      time: "01/2021 - 07/2022 at ",
      tasks: [
        "Creation and automation of test cases for websites (desktop) and mobile apps (iOS/Android)",
        "Supervision of working students incl. code review",
        "Management of customer projects from a wide range of sectors, e.g. broadcasting, transport, e-commerce",
        "Gained experience with various frameworks/tools, e.g. Selenium, Appium, Playwright, TestNG, ExtentReport, Gitlab, Jenkins",
      ],
    },
    seniorAutomation: {
      time: "08/2022 - 02/2023 at ",
      tasks: [
        "Implementation of a project with a company with software solutions for the retail sector",
        "Team consisted of seven people: six from the customer side, with three (QA managers and testers) in DE and three (test automation engineers) in CZ, and me as an external",
        "Collaboration was agile and in English due to the different nationalities",
        "My tasks: Setting up an automation framework in Python with Appium/Selenium, Robot and Allure; supporting the CZ Automation Engineers incl. code review; maintaining and further developing the framework",
      ],
    },
    innovation: {
      time: "03/2023 - present at ",
      tasks: [
        "Development of new and further development of existing services with a focus on automation",
        "Conducting interviews to identify our customers' problems",
        "Problem solving through prototype design and concrete implementation",
        "Projects: Automatic creation of a test automation infrastructure (rejected), Automated accessibility testing, New front end for a dashboard of an internal service (see coding projects)",
      ],
    },
  },
  aboutme: {
    title: "About Me",
    general: {
      title: "General",
      text: [
        "Born on 05.11.1993 in Mönchengladbach",
        "Resident in Cologne since 2013",
        "Free time: reading, being outdoors, analog photography, Nintendo Switch",
        "Pets: soon an aquatic turtle :)",
        'Random info: when it comes to "rock, paper or scissors", I always go for rock first. Fancy a ',
      ],
    },
    skills: [
      "Programming languages: JS/TS, Python, Java",
      "Frontend: HTML, CSS, Tailwind, Nuxt3, Svelte (Basics), Netlify, Unittesting with Jest (Basics)",
      "Git",
      "Basic knowledge of accessibility in the context of the AxeCore Library",
      "QA Testing (Jira, Confluence, Testrail)",
      "Test Automation (Selenium, Appium, TestNG, ExtentReport, Playwright/Puppeteer, Robot, Allure)",
      "Postman: Creation of automated API tests",
      "Docker (Basics)",
      "Linux/Shell: Standard Linux Commands and Basic Shellscripting",
    ],
    education: {
      title: "Education",
      text: [
        "Studied B.Sc. Mathematics (2013-2017) and B.Sc. Chemistry (2013-2017) at the University of Cologne -> Yes, I studied 2 full-time degree programs in parallel (I do not recommend it :D)",
        "Studied M.Sc. Mathematics (2017-2020) at the University of Cologne",
        "Erasmus semester abroad in Budapest in 2018",
      ],
    },
    certificates: {
      title: "Certificates",
      text: [
        "Mastering Nuxt 3 Course (2023)",
        "Complete Javascript Masterclass (2022)",
        "ISTQB Certified Tester Foundation Level (CT-FL) (2020)",
      ],
    },
    rps: {
      backButton: "Back to About Me",
      selectHeading: "Select a symbol",
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors",
      winner: "The winner is:",
      draw: "Draw. No one wins.",
      mySelection: "Burak's selection",
      yourSelection: "Your selection",
      score: "Current score",
      playAgain: "Play again?",
    },
  },
};
