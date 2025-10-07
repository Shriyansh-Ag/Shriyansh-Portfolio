import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`relative z-10 w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 h-auto md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`relative mx-auto mt-6 w-[90%] sm:w-[85%] md:absolute md:-bottom-2 md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "md:right-0" : "md:left-0"
        }`}
      />
      <div
        className={`text-[#0E1016] mt-6 flex items-center justify-center gap-4 lg:mt-10 px-6 md:px-0 md:absolute md:top-0 ${
          id % 2 === 0 ? "md:left-0 md:ml-8 lg:ml-14" : "md:right-0 md:mr-8 lg:mr-14"
        }`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="trues"
              />
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`text-white mt-8 px-6 md:px-0 md:absolute ${
          !(id % 2 === 0)
            ? "md:right-0 md:top-32 md:mr-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
            : "md:left-10 md:top-32 md:ml-0 md:mr-12 lg:top-52 lg:ml-4"
        } mb-10  md:mb-16 lg:mb-14 `}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[90%] text-[32px] leading-none text-white md:text-[36px] md:leading-none lg:max-w-[450px] lg:text-[40px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-[#95979D] "
          }
        />
        <div className="mt-9 flex gap-4">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[12px] font-bold uppercase md:text-[14px] lg:text-[16px] "
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
