import { IProject } from "../enum";

export const projects: IProject[] = [
    {
        image: "/img/projects/reals.png",
        title: "Reals Financial Services",
        description: "Developed a scalable multi-service payment platform that allows users to seamlessly purchase digital services and utilities in Nigeria",
        features: [
            "Implemented service modules for airtime, data, electricity, cable TV, internet, and exam pins.",
            "Integrated Paystack payment gateways with webhook support for real-time transaction updates.",
            "Designed a reusable and secure wallet funding system.",
            "Implemented a robust admin dashboard for monitoring transactions and managing services.",
            "Built a robust transaction tracking and beneficiary management system using modular microservice architecture",
        ],
        technologies: "Node.js, Digital Ocean, Github Action, Nest.js, Nextjs, CSS.",
        site: "https://www.realsspv.com",
        github: ""
    },
    {
        image: "/img/projects/actors-pool.png",
        title: "Actor's Pool",
        description: "Developed a comprehensive directory platform that connects African entertainers with opportunities in the entertainment industry.",
        features: [
            "Talent listing for individuals looking to showcase their skills.",
            "Advanced talent search functionality with filters.",
            "Interactive dashboard for managing listed talents.",

        ],
        technologies: "React.js, Tailwind CSS, Node.js.",
        site: "",
        github: "https://github.com/geniusapc/actors-pool"
    },
    {
        image: "/img/projects/grant-loan.png",
        title: "Federal Government Grant and Loan",
        description: "Developed grant and loan management platform to ensure Nigerians received their grant and loans efficiently and transparently.",
        features: [
            "Integrated a secure database for managing millions of beneficiary records",
            "Implemented analytics for tracking grant disbursement and impact",
            "Leveraged scalable cloud infrastructure to handle nationwide access"

        ],
        technologies: "Node.js, React.js, Typescript, Tailwind CSS, Digital Ocean.",
        site: "https://fedgrantandloan.gov.ng",
        github: ""
    },
    {
        image: "/img/projects/wheeloflife2.png",
        title: "The wheel of life",
        description: "Built a dynamic platform revolutionizing how coaches and clients connect through personalized, AI-driven insights and seamless scheduling.",
        features: [
            "Coaches design tailored questionnaires for their clients. Once clients complete the questionnaire, AI generates customized insights and recommendations, adding immediate value to the coaching process",
            "Clients can seamlessly book appointments with their preferred coach for personalized, follow-up sessions",
            "AWS services ensures high availability, scalability, and secure data management for a superior user experience"

        ],
        technologies: "AWS, Reactjs, Nodejs, Tailwind CSS",
        site: "https://thewheeloflife.net",
        github: ""
    }
]