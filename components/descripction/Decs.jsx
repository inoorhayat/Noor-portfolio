import { motion, useInView } from "framer-motion";
import Styles from "./styledesc.module.scss";
import { opacity, sildeUp } from "./anime";
import { useRef } from "react";
import Button from "../../common/roundedbutton";
import Link from "next/link";


const Decs = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const param =
    "Results-driven Full-Stack Developer skilled in the MERN stack, Docker, AWS, and Redis, with a track record of delivering scalable applications like an e-commerce platform and real-time chat app (Socket.io, JWT). Proficient in TypeScript, RESTful APIs, and secure authentication. Recently completed Graduation in Computer Science (University of Delhi), complemented by certifications in web development and leadership experience. Adept at agile workflows, cross-functional collaboration, and high-performance solutions.";
  return (
    <div ref={container} className={Styles.dec}>
      <div className={Styles.body}>
        <p>
          {param.split(" ").map((word, index) => {
            return (
              <span key={`${word}_${index}`} className={Styles.mask}>
                <motion.span
                  variants={sildeUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  custom={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={sildeUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          // style={{ paddingBottom: "5rem" }}
        >
          The combination of my passion for desgine, code & interaction position
          me in a unique place.
        </motion.p>

        <div data-scroll data-scroll-speed={0.1}>
          <Button className={Styles.button}>
  <Link href="/about">
    <p style={{ color: "white" }}>About Me</p>
  </Link>
</Button>
        </div>
      </div>
    </div>
  );
};

export default Decs;
