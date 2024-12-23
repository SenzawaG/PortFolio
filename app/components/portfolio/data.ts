export interface _links { 
    name:string, 
    icon:string, 
    desc:string, 
    link:string, 
    year?:number,
    imageUrl?:string[],
}
export const beenMade:_links[] = [
    {
        name: 'Quizsense',
        icon: 'https://img.icons8.com/color/48/000000/python.png',
        desc: 'Learning platform for students with visual impairments. Using text-to-speech technology to read the questions and answers.',
        link: 'https://netradapt.com',
    },
    {
        name: 'Traffic Sign Detection',
        icon: 'https://img.icons8.com/color/48/000000/python.png',
        desc: 'Multi labels machine learning model that can detect different traffic route signs. Made with Roboflow and YOLOv8.',
        link: 'https://demo.roboflow.com/pendeteksi-rambu-handal/2?publishable_key=rf_n3cdmhH7RsfO40uOeaqpv3mfM5e2',
    },
    {
        name: 'Teknik Komputer',
        icon: 'https://img.icons8.com/color/48/000000/php.png',
        desc: 'Official website of Computer Engineering Department, Universitas Pendidikan Indonesia.',
        link: 'https://tekkom.upi.edu',
    },
    {
        name: 'Quizsense Hub API',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Control and program setup area for Quizsense. This hub provides API for quiz and text-to-speech assets to be used in Quizsense.',
        link: 'https://quizsense.netradapt.com',
    },
    {
        name: 'Kencana Seni',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Product of Devotion. An inclusive Education Platform for Disaster Mitigation, made for students with special needs.',
        link: 'https://kencanaseni.com',
    },
    {
        name: 'Priangan WiFi',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Automated MAC Filtering on WiFi management system for people lived in Kos Priangan.',
        link: 'https://wifi.salamp.id',
    },
    {
        name: 'SPOT UPI 2.0',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Serve enchanted visual aesthetics and features of the SPOT UPI. Also provide task list notifications.',
        link: 'https://chromewebstore.google.com/detail/spot-upi-20/fccldipdnhfhfdnbifompbaddhaifoen',
    },
    {
        name: 'TekkomFiber',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Learning platform to learn about parts of a computer. Made for Computer Engineering Department, Universitas Pendidikan Indonesia.',
        link: 'https://tfiber.salamp.id',
    },
    {
        name: 'CEPATga',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Excel-like mobile application for PLN employees to record detailed status and specifications of the power grid in the field.',
        link: 'https://kencanaseni.com',
    },
    {
        name: 'PWA Dashboard',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'A Progressive Web App Dashboard for public that served task list, SPOT task notifications, and adzan schedule.',
        link: 'https://lamptest.vercel.app/',
    },
    {
        name: 'Integral Solver',
        icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
        desc: 'Solving integral problems even with multiple variables. Made with Native C++',
        link: 'https://github.com/SalamPS/Calculus-Calculator',
    },
    {
        name: 'DIY Math Functions',
        icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
        desc: 'For those who want to know how to code math logics instead of using libraries. Made with Native C++',
        link: 'https://github.com/SalamPS/CPP-DIY-Function',
    },
]
export const beenPartOf:_links[] = [
    {
        name: 'Netradapt',
        icon: '/assets/portfolio/netradapt.png',
        desc: 'The CEO and CTO at of Netradapt. Great startup company focuses on innovating technology to help students with visual impairments.',
        link: 'https://netradapt.com',
        year: 2024,
    },
    {
        name: 'Kencana Seni',
        icon: '/assets/portfolio/kencana-seni.png',
        desc: 'Full stack, developed the disaster mitigation educational inclusive website using NextJS and Gamepad API.',
        link: 'https://kencanaseni.com',
        year: 2024,
    },
    {
        name: 'Robotics Lab',
        icon: '/assets/portfolio/lab-robot.png',
        desc: 'Provided service for lecture classes that held in the Teknik Komputer UPI, also maintained and staff-guarded items belonging to the Robotic Lab. ',
        link: 'https://tekkom.upi.edu/laboratorium-robotika-pendidikan/',
        year: 2024,
    },
    {
        name: 'Kompetegram',
        icon: '/assets/portfolio/kompetegram.png',
        desc: 'Developed SPOT UPI 2.0 chrome extension and led the way of our other community projects. Also taught our members to learn about web programming.',
        link: 'https://www.instagram.com/kompetegram/',
        year: 2024,
    },
    {
        name: 'PLN',
        icon: '/assets/portfolio/pln.png',
        desc: 'Built an excel-type mobile monitoring application for Electrical Data Control of PLN in Riau Islands Province using React Native. Not accesible for public.',
        link: 'https://web.pln.co.id/',
        year: 2024,
    },
    {
        name: 'SMP Santa Ursula',
        icon: '/assets/portfolio/serviam.png',
        desc: 'Taught robotics theories and materials to their students for a full semester. Successfully led them to finish a robotic project.',
        link: 'https://lms.santaursula-bdg.sch.id/smp/',
        year: 2024,
    },
    {
        name: 'Teknik Komputer',
        icon: '/assets/portfolio/tekkom.png',
        desc: 'Upgraded, monitored, and maintained the official website of Teknik Komputer UPI Cibiru. Also wrote content for the website and social media posts. Accessible via tekkom.upi.edu and Instagram @teknikkomputer.upi',
        link: 'https://tekkom.upi.edu/',
        year: 2024,
    },
    {
        name: 'BEM UPI Cibiru',
        icon: '/assets/portfolio/bem.png',
        desc: 'Head of Operator Division at "MOKAKU UPI Cibiru 2024" and "Kajian dan Lomba 2023". Led and organized all electronical and sound system requirements for the event.',
        link: 'https://www.instagram.com/bemupicibiru/',
        year: 2024,
    },
    {
        name: 'HIMA TEKKOM',
        icon: '/assets/portfolio/hima-tekkom.png',
        desc: 'Member of Commision III, Member of Operator Division at ODWH TEKKOM 2023, Member of Design and Decoration Division at MABIM TEKKOM 2023.',
        link: 'https://www.instagram.com/hima.tekkom/',
        year: 2023,
    },
    {
        name: 'GDSC',
        icon: '/assets/portfolio/gdsc.png',
        desc: 'Member of Google Developer Student Club Batch 2022. Spoke about "Basics of Web Programming" at a Study Jam session.',
        link: 'https://developers.google.com/community/',
        year: 2023,
    },
    {
        name: 'GitHub Developer',
        icon: '/assets/portfolio/github.png',
        desc: 'Verified and active member of GitHub Campus Expert.',
        link: 'https://developers.google.com/community/',
    },
    {
        name: 'Discord Developer',
        icon: '/assets/portfolio/discord.png',
        desc: 'Verified member of Discord Developer Community.',
        link: 'https://developers.google.com/community/',
    },
]