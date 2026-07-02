import { IProject } from "../enum";

export const projects: IProject[] = [
    {
        image: "/img/projects/ogarent.png",
        title: "OgaRent",
        description: "Architected and led development of OgaRent, a scalable property rental and short-let platform connecting home seekers with verified home owners across Nigeria. Focused on trust, seamless payments, and an intuitive booking experience.",
        features: [
            "Designed a modular, service-oriented architecture supporting property search, booking, wallet funding, and revenue reconciliation.",
            "Implemented advanced search and filtering (location, property type, pricing, amenities) optimized for performance and scalability.",
            "Built a secure wallet and payment flow with Paystack integration, real-time webhook handling, and automated refund/settlement logic.",
            "Engineered admin and landlord dashboards with role-based access control for efficient property, booking, and revenue management.",
            "Integrated notification channels (email, SMS, in-app) for real-time user engagement.",
            "Established CI/CD pipelines with GitHub Actions and cloud deployment for reliable, zero-downtime releases.",
            "Applied best practices in security, data validation, and user verification to build trust between home seekers and home owners."
        ],
        technologies: "NestJS (backend), Next.js/React (frontend), MongoDB, Redis (caching/queue), Paystack API, DigitalOcean, GitHub Actions (CI/CD), TailwindCSS.",
        site: "https://www.ogarent.com",
        github: ""
    },
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
        image: "/img/projects/cevenapp.png",
        title: "CEven",
        description: "Built a childcare communication platform that gives parents timely visibility into their child's day while helping crèches keep care updates organized and easy to share.",
        features: [
            "Keeps parents informed with real-time updates from their child's crèche.",
            "Organizes daily care records including meals, naps, diapers, temperature, and medication.",
            "Creates a clear communication channel between families and professional caregivers.",
            "Reduces the mental load of tracking a child's routine through one dependable experience."
        ],
        technologies: "Web Platform, Real-time Updates, Secure Cloud",
        site: "https://cevenapp.com/",
        github: ""
    },
    {
        image: "/img/projects/succeedquiz.jpg",
        title: "SucceedQuiz",
        description: "Developed an interactive learning platform that helps students, educators, teams, and lifelong learners build knowledge through engaging quizzes, immediate feedback, and clear progress insights.",
        features: [
            "Delivers instant answer feedback so learners can identify and improve weak areas.",
            "Supports customizable quizzes and a broad question catalog across multiple subjects.",
            "Provides detailed analytics that make learning progress easy to understand.",
            "Encourages collaborative learning through study groups, quiz sharing, achievements, and rewards."
        ],
        technologies: "Web Platform, Learning Analytics, Responsive Design",
        site: "https://succeedquiz.com/",
        github: ""
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
    }
    
]
