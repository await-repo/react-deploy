import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaJava, FaPython, FaDatabase } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';

export const profetionalSkills = [
    {
        id : 12,
        title: "JavaScript",
        percent: 70,
        icon: SiJavascript,
        color: "text-yellow-500",
        libraries: [
            {
                id: 301,
                name: "React JS",
                related: "" 
            },
            {
                id: 302,
                name: "Express JS",
                related: "" 
            },
            {
                id: 303,
                name: "Next JS",
                related: "" 
            },
            {
                id: 304,
                name: "Angular",
                related: "" 
            },
            {
                id: 305,
                name: "Node JS",
                related: "" 
            }
        ]
    },
    {
        id : 13,
        title: "CSS",
        percent: 75,
        icon: IoLogoCss3,
        color: "text-sky-600",
        libraries: [
            {
                id: 402,
                name: "Bootstrap",
                related: "" 
            },
            {
                id: 405,
                name: "Material UI",
                related: "" 
            },
            {
                id: 406,
                name: "Chakra UI",
                related: "" 
            },
            {
                id: 403,
                name: "TailWind CSS",
                related: "" 
            }
        ]
    },
    {
        id : 14,
        title: "Java",
        percent: 60,
        icon: FaJava,
        color: "text-rose-700",
        libraries: [
            {
                id: 503,
                name: "Spring Boot",
                related: "" 
            }
        ]
    },
    {
        id : 15,
        title: "Python",
        percent: 55,
        icon: FaPython,
        color: "text-cyan-700",
        libraries: [
            {
                id: 604,
                name: "DJango",
                related: "" 
            },
            {
                id: 605,
                name: "Flask",
                related: "" 
            }
        ]
    },
    {
        id : 16,
        title: "Data Bases",
        percent: 65,
        icon: FaDatabase ,
        color: "text-stone-600",
        libraries: [
            {
                id: 704,
                name: "MongoDB",
                related: "" 
            },
            {
                id: 705,
                name: "SQL Server",
                related: "" 
            },
            {
                id: 706,
                name: "MySQL",
                related: "" 
            },
            {
                id: 707,
                name: "Postgre SQL",
                related: "" 
            }
        ]
    },
    {
        id : 17,
        title: "Version Control",
        percent: 70,
        icon: BiGitBranch,
        color: "text-orange-500",
        libraries: [
            {
                id: 804,
                name: "Git",
                related: "" 
            },
            {
                id: 805,
                name: "Git Hub",
                related: "" 
            },
            {
                id: 806,
                name: "Git Lab",
                related: "" 
            }
        ]
    },
];