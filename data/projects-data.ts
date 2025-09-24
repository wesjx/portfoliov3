export const projectsData = [
    {
        id: 'project_devtoolpack',
        title: 'DevToolPack',
        subtitle: 'Your tool box dev!',
        texts: {
            introduction: 'DevToolsPack was born from a personal need to organize and save the various developer tools I use daily. I realized that by building a dedicated platform, I could easily catalog these tools and share access with other developers, streamlining both my workflow and community collaboration.',
            objective: 'The project’s primary objective is to help myself and other developers efficiently organize, manage, and share essential tools in one centralized space.',
            requirements: 'The main requirements were: an intuitive page displaying tools as stylish cards (including title, category, and a brief description); two action buttons (read more and visit tool website); and an admin page with a form to add new tools—including name, subtitles, descriptions in both Portuguese and English, AI-assisted translation, and image upload via Google Cloud. The public site, available at devtoolspack.tech, lists all the tools for easy browsing and sharing.',
            technologies: `type Technologies = {
      NextJs: "framework",
      TypeScript: "for type safety",
      Zod: "validation",
      ShadcnUI: "user interface",
      Neon: "database",
      Clerk: "authentication",
      Google Cloud: "image storage",
      Drizzle ORM: "data handling",
      ChatGPT: "generating translations and descriptions",
    };`,
            technologies_badge: ['NextJS', 'Typescript', 'Zod', 'ShadcnUI', 'Neon - Data-base', 'Clerk' ,'Google cloud', 'Drizzle ORM', 'OpenAI API' ],
            challenges: 'The greatest challenge was selecting the right database solution for image storage. Having never worked with this requirement before, I researched and chose Google Cloud for its robust free tier, extensive documentation, and helpful AI tools.',
            conclusion: 'Throughout the development of DevToolsPack, I greatly expanded my knowledge of database integration using Neon and Drizzle ORM, and honed my skills in automating translations and descriptions. The platform consists of two main areas: the admin page, where new tools are registered and managed, and the public listing at devtoolspack.tech, where developers can explore and discover them. The project has improved my own workflow and created opportunities for other developers to discover and share useful tools. I believe DevToolsPack can grow with community suggestions for new tools or use cases, making it an ever-more valuable resource.'
        },
        images: {
            image1: { link: '/project-devtools.png', alt: 'DevToolsPack: list of tools' },
            image2: { link: '/project-devtools-admin.png', alt: 'DevToolsPack: admin page' },
            image3: { link: '/project-devtools-list.png', alt: 'DevToolsPack: admin page list of tools' }
        },
        linkProject: 'https://devtoolspack.tech',
        linkGitHub: 'https://github.com/wesjx/devtoolbox'
    },

    {
        id: 'project_dashcash',
        title: 'DashCashApp',
        subtitle: 'Manage better your finance!',
        texts: {
            introduction: 'This project began as a learning exercise from a Udemy course helping me organize my financials.',
            objective: 'The aim of the project is to provide users with a tool to manage their finances more efficiently by tracking incomes and expenses, including unpaid transactions.',
            requirements: 'Features include tracking future incomes and expenses, and a table to display paid and unpaid transactions separately, with automatic updates to financial charts.',
            technologies: `type Technologies = {
      NextJs: "framework",
      TypeScript: "for type safety",
      Neon: "database",
      Clerk: "authentication",
      Drizzle ORM: "data handling",
      ShadcnUI: "user interface",
      Zod: "validation",
    };`,
    technologies_badge: ['NextJS', 'Typescript', 'Zod', 'ShadcnUI', 'Neon - Data-base', 'Clerk' ,'Google cloud', 'Drizzle ORM', 'OpenAI API' ],
            challenges: 'The biggest challenge was modifying the database schema to create new cells and managing live data updates, especially since the project was already in production.',
            conclusion: 'Starting as a learning project, it greatly improved my skills and better suited my needs. I learned important lessons in state management, complex UI updates, and designing user-friendly interfaces. I hope it also helps others organize their finances more efficiently.'
        },
        images: {
            image1: { link: '/project-dash-cash.png', alt: 'DashCashApp: Dashboard'},
            image2: { link: '/project-dash-cash-form.png', alt: 'DashCashApp: Form for financials' },
            image3: { link: '/project-dash-cash-login.png', alt: 'DashCashApp: login page' }
        },
        linkProject: 'https://www.dashcashapp.site/',
        linkGitHub: 'https://github.com/wesjx/DashCashApp'
    },

    {
        id: 'project_dashcryptocoins',
        title: 'DashCryptoCoins',
        subtitle: 'A way to see easy the crypto coins.',
        texts: {
            introduction: 'This project began by an idea of my friend to create a simple and easy way to see the price of cryptos. Faced with this challenge, I decided to challenge myself because I had never done a project with real-time updates.',
            objective: 'The app provides real-time price updates of selected cryptocurrencies through a single-page application fetching data from a cryptocurrency API.',
            requirements: 'Main features include real-time updates every 60 seconds, a price trend chart, and pagination to load data efficiently in small chunks.',
            technologies: `type Technologies = {
      NextJs: "framework",
      TypeScript: "for type safety",
      Chakra: "user interface",
      API: "CryptoAPI",
    };`,
            technologies_badge: ['NextJS', 'Typescript', 'Zod', 'ChakraUI','Crypto API' ],
            challenges: 'I had never done a project with real-time updates or worked with large data requests such as a list of cryptocurrencies. I solved these problems by setting an update every 60 seconds for the database and avoiding large data returns by implementing pagination, splitting the request into pages of 10 items.',
            conclusion: 'This project started from a friend’s idea to easily see crypto prices, and I took the challenge to build it with real-time updates, something new for me. I used an API that updates every 60 seconds and added pagination to limit data requests and improve performance. The chart helps visualize price trends, making the app useful and efficient for tracking cryptocurrencies.'
        },
        images: {
            image1: {link: '/project-dash-crypto.png', alt: 'DashCrypto: principal page'},
            image2: { link: '', alt: '' },
            image3: { link: '', alt: '' }
        },
        linkProject: 'https://dash-cryptocoin.vercel.app/',
        linkGitHub: 'https://github.com/wesjx/dash-cryptocoin'
    }

    // {
    //     id: 'project_bappoint',
    //     title: 'bAppoint',
    //     subtitle: 'Manange your appointments with security!',
    //     texts:
    //     {
    //         text1: '',
    //         text2: '',
    //         text3: ''
    //     },
    //     images:
    //     {
    //         image1: '',
    //         image2: '',
    //         image3: ''
    //     }
    //     ,
    //     linkProject: '',
    //     linkGitHub: ''
    // },


]