import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE POWERFUL ML PROJECTS AND RESPONSIVE WEBSITES."
          }
          className={
            "mb-10 text-left text-[32px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-16 md:text-[48px] lg:text-[64px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[16px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[18px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[20px] ">
            <AnimatedBody
              text={
                "I specialize in crafting high-converting landing pages and websites for SaaS, Web3 & AI startups. I'm passionate about building software that makes a difference."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a ML project, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my work as a ML engineer, I'm an active leader in tech communities on campus. As the vice president of MAIT's official Data Science society Analytix, I've led workshops and mentored other students."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you can find me in the gym, or hanging out with friends."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[16px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[14px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[16px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Languages"}
                className={
                  "text-[20px] text-[#e4ded7] md:text-[24px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Python, Java, C/C++, SQL (Postgres), JavaScript, HTML/CSS"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Frameworks"}
                className={
                  "text-[20px] text-[#e4ded7] md:text-[24px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React, Node.js, Express.js, Django, Next.js, Flask"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Developer Tools"}
                className={
                  "text-[20px] text-[#e4ded7] md:text-[24px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Git, Docker, GCP, AWS (SageMaker), Vercel, MLflow, W&B, Grafana"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Libraries"}
                className={
                  "text-[20px] text-[#e4ded7] md:text-[24px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "NumPy, Pandas, Matplotlib, Seaborn, OpenCV, scikit-learn, TensorFlow, PyTorch, YOLO, LibROSA"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[12px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[14px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
