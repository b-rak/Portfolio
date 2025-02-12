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
      info: "Linked is a demo version of the dashboard. The 'Dashboard', 'Testfälle' and 'Testfalldetails' areas are currently ready. The login details are as follows: Mail: demo%40mail.de; PW: JZecn%40ug$K",
      images: {
        numberOfImages: "6",
        folder: "dashboard",
      },
    },
    cooksphere: {
      title: "Cooksphere",
      overviewDescription:
        "A full-stack app that offers users a platform for discovering, saving and uploading recipes.",
      github: "https://github.com/b-rak/Cooksphere",
      tech: [
        "React",
        "Javascript",
        "Tailwind",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
      webpage: "https://youtu.be/HH9oJWDL5-k",
      text: [
        "This project was created as a solo project. The idea came to me because there is no nice recipe platform for me. Instead, there are too many blogs that display recipes. Cooksphere allows you not only to share recipes, but also to save them and create your own digital recipe book.",
        "I developed the frontend with React, Javascript and Tailwind. The backend was developed with Express together with MongoDB and mongoose as an ORM. Cloudinary serves as cloud storage for recipe images.",
        "Users can view or search for recipes by category. Recipe results can be sorted and filtered. On the recipe page, users can see ingredients and instructions as well as reviews from other users. Of course, users can also write their own reviews. They can also save recipes and find them again in their profile. Finally, users can upload their own recipes via their profile and not only save them to their profile, but also share them with the community.",
      ],
      info: "There is currently no login or authentication. These are the next features to be developed.",
      images: {
        numberOfImages: "5",
        folder: "cooksphere",
      },
    },
    barSync: {
      title: "barSync",
      overviewDescription:
        "An app that allows users to manage their cocktail ingredients and discover new drinks.",
      github: "https://github.com/b-rak/barSync",
      tech: ["React", "Typescript", "Jest", "Express"],
      webpage: "",
      text: [
        "This project is an existing project that another developer and I have made improvements to.",
        "Both frontend and backend were migrated from Javascript to Typescript and tests with Jest were added to make them more robust through type safety and testing.",
        "The frontend code was refactored and global state management was introduced. Last but not least, login and authentication were added.",
      ],
      info: "",
      images: {
        numberOfImages: "4",
        folder: "barSync",
      },
    },
    uplift: {
      title: "Uplift",
      overviewDescription:
        "An app that allows users to monitor their mood and activities to gain insights into their patterns and overall wellbeing.",
      github: "https://github.com/uplift-app/uplift",
      tech: [
        "React",
        "Typescript",
        "Tailwind",
        "Vitest",
        "Express",
        "MongoDB",
        "Jest",
        "Python",
      ],
      webpage: "https://youtu.be/cIFsfbwOCHA",
      text: [
        "This project was realised as a group of 4.",
        "The frontend was developed with React and ShadCN as a component library, using Tailwind as a CSS framework. The backend was developed with Express and MongoDB with mongoose as an ORM. Both frontend and backend were written in Typescript.",
        "The data analysis was written in Python. The analysis is started via the frontend and the results are sent back to the frontend where they are used within the chart components.",
        "Authentication was implemented using Clerk.",
        "My responsibilities were in both the frontend and the backend. In the backend, I helped with the general structure and was responsible for the whole process of the Python analysis. In the frontend, I took care of state management and was responsible for the design. Using Tailwind, I was able to create a clear and consistent design within the app and make it completely responsive.",
      ],
      info: "",
      images: {
        numberOfImages: "5",
        folder: "uplift",
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
    softwareEngineer: {
      time: "06/2024 - heute ",
      tasks: [
        "Cooksphere: Built a fullstack app for discovering, saving, and sharing recipes. Developed the frontend with React and Tailwind, and the backend with Express and MongoDB using Mongoose",
        "BarSync: Upgraded in a group of two a JavaScript project by migrating it to TypeScript, implementing a Jest test suite, and introducing global state management to increase safety and efficiency of code",
        "Uplift: Worked in a team of four to build a fullstack mood-tracking app. Led design consistency, responsiveness, and data analysis setup with Python",
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
        "Free time: reading, being outdoors, analogue photography, Nintendo Switch",
        "Pets: aquatic turtle 🐢",
        'Random info: when it comes to "rock, paper or scissors", I always go for rock first. Fancy a ',
      ],
    },
    skills: [
      "Programming languages: Javascript/Typescript, Python, Java",
      "Frontend: React, Tailwind, Vue.js, Nuxt3, Svelte (Basics), Netlify, Jest",
      "Backend: Express, Node.js, Koa, Postgres, MongoDB",
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
        "Software Engineering Immersive Bootcamp of Codeworks (2024-2025)",
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
