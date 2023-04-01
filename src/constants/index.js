import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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
  },
];

const services = [
  {
    title: "Mern-Stack Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Web App Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material UI",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NokshiBibi",
    description:
      "A clothing service provider full-stack Web-based platform that allows users to explore authentic designs, and can give and manage review products from various catagory, providing customized embroidered work for clothing designs.",
    tags: [
      {
        name: "Client site Code",
        color: "blue-text-gradient",
        link: "https://github.com/Asadrayat/NokshiBibi",
      },
      {
        name: "Server site Code",
        color: "green-text-gradient",
        link: "https://github.com/Asadrayat/NokshiBibi-server",
      },
    ],
    image: carrent,
    source_code_link: "https://nokshi-service.web.app/",
  },
  {
    name: "ScooterResale",
    description: 
      "A full-stack resale product website with responsive design that enables users to buy or sell used scooters.Buyer can buy pre-owned furniture, Seller can add product and sell it in prefered price ,Admin can handle buyer,seller.",
    tags: [
      {
        name: "Client site Code",
        color: "blue-text-gradient",
        link: "https://github.com/Asadrayat/scooter-resale",
      },
      {
        name: "Server site Code",
        color: "green-text-gradient",
        link: "https://github.com/Asadrayat/scooter-resale-server",
      },
    ],
    image: jobit,
    source_code_link: "https://scooter-resale.web.app/",
  },
  {
    name: "DoctorsPortal",
    description:
      "A user-friendly clinic service website. Users can make appointments with the dentist if appointments are available for this particular date & slots. Admin can add or remove services and hadle users.User can manage appointment.",
    tags: [
      {
        name: "Client site Code",
        color: "blue-text-gradient",
        link: "https://github.com/Asadrayat/recycle_furniture",
      },
      {
        name: "Server site Code",
        color: "green-text-gradient",
        link: "https://github.com/Asadrayat/doctors-server",
      },
    ],
    image: tripguide,
    source_code_link: "https://doctors-portal-e8603.web.app/",
  },
];

export { services, technologies, testimonials, projects };
