export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Splitr",
    description:
      "A unique AI powered web app focusing on managing expenses amongst friends and family without any fuss.",
    technologies: ["NextJS", "Tailwind CSS", "ShadcnUI" , "Convex"],
    github: "https://github.com/Shriyansh-Ag/Splitr",
    demo: "",
    image: require(".//../../public/projects/1st.jpg"),
    available: true,
  },
  {
    id: 0,
    name: "Pick-Me-Please",
    description:
      "An comprehensive Full Stack web app simulating cab services with features like separate captain dashboard and microservices",
    technologies: ["React", "ExpressJs", "NodeJS" , "MongoDB"],
    github: "https://github.com/Shriyansh-Ag/Pick-Me",
    demo: "",
    image: require(".//../../public/projects/2nd.jpg"),
    available: true,
  },
];


