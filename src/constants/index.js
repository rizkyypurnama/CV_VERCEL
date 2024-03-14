import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nextjs,
    nodejs,
    republika,
    sopwer,
    bnis,

    BKPSDMD,
    frappe,
    kremlin,
    sakenah,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Dashboard",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    }
];

const technologies = [
    {
        title: "HTML",
        experience: "1 Year",
        icon: html,
    },
    {
        title: "CSS",
        experience: "1 Year",
        icon: css,
    },
    {
        title: "JavaScript",
        experience: "1 Year",
        icon: javascript,
    },
    {
        title: "Tailwind",
        experience: "8 Month",
        icon: tailwind,
    },
    {
        title: "Reactjs",
        experience: "8 Month",
        icon: reactjs,
    },
    {
        title: "Frappe Framework",
        experience: "6 Month",
        icon: frappe,
    },
];

const experiences = [

    {
        title: "Front-end Developer",
        company_name: "PT. SOPWER TEKNOLOGI INDONESIA",
        icon: sopwer,
        iconBg: "#E6DEDD",
        date: "July 2023 - Februari 2024",
        points: [
            "Developing and maintaining web applications using React-Js and other related technologies.",
            "Collaborate with teams to create high-quality products.",
            "Participating in code reviews and Report work results regularly.",
            "Make a responsive web design and ensuring browser compatibility.",
        ],
    },
    {
        title: "Human Capital Care Staff",
        company_name: "Cimahi City Government BKPSDMD",
        icon: BKPSDMD,
        iconBg: "#383E56",
        date: "July 2022 - September 2022",
        points: [
            "Responsible for processing all forms of employee leave data.",
            "Upload proof of employee performance to the database system.",
            "Handle incoming and outgoing Mail.",
            "Follow the instructions of the Head of Division in carrying out daily tasks.",
        ],
    },
];

const projects = [
    {
        name: "Kremlin Brand Program",
        description:
            "Built a program for clothing brand Kremlin to facilitate connections with many courier expeditions, checking stock items, and custom printing label.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "frappe",
                color: "orange-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: kremlin,
    },
    {
        name: "E-Commerce web Seller",
        description:
            "Created an e-commerce website for Sakeena Book Publisher to make it easier for sellers to input all transactions, make it easier to enter customer data, and others.",
        tags: [
            {
                name: "react-js",
                color: "orange-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: sakenah,
    },

];

export { technologies, experiences, projects };