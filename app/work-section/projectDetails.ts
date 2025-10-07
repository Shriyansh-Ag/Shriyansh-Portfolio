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
    id: 0,
    name: "Splitr",
    description:
      "A unique AI powered web app focusing on managing expenses amongst friends and family without any fuss.",
    technologies: ["NextJS", "Tailwind CSS", "ShadcnUI" , "Convex"],
    github: "https://github.com/Shriyansh-Ag/Splitrr",
    demo: "https://splitrr-murex.vercel.app/",
    image: require(".//../../public/projects/1st.jpg"),
    available: true,
  },
  {
    id: 1,
    name: "Concisio",
    description:
      "Fine-tuned transformer models for abstractive and extractive text summarization.Implemented CI/CD workflows via GitHub Actions; containerized pipeline with Docker.",
    technologies: ["Hugging Face", "Transformers", "MLflow", "Docker"],
    github: "",
    demo: "",
    image: "",
    available: true,
  },
  {
    id: 0,
    name: "ETLGuard",
    description:
      "Built automated MLOps pipeline for network security system (validation, drift management).Designed scalable solutions on AWS with CI/CD, improving reliability and deployment speed.",
    technologies: ["NumPy", "Scikit-learn", "AWS", "MongoDB"],
    github: "",
    demo: "",
    image: "",
    available: true,
  },
];


