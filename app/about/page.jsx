"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Image from "next/image";
import Rounded from "../../common/roundedbutton";
import Magnetic from "../../common/magnetic";
import styles from "./styleabout.module.scss";

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Enhanced animations with springs for smoother motion
  const springConfig = { stiffness: 100, damping: 15 };
  const ySpring = useSpring(useTransform(scrollYProgress, [0, 1], [-300, 0]), springConfig);
  const rotateSpring = useSpring(useTransform(scrollYProgress, [0, 1], [120, 90]), springConfig);
  const opacitySpring = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), springConfig);

  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "C++",
    "TypeScript",
    "JavaScript",
    "Docker",
    "Express js",
    "Redis",
    "PostMan",
    "SCSS",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "Postgresql", // Added more skills
    "AWS",
  ];

  const experience = [

    {
      title: "Full stack Web developer",
      company: "Composite School Pasonda Naveen",
      period: "jan 2025 - oct 2025",
      description:
   "Designed, developed, and maintained the school’s web applications and backend services. Managed backend logic, APIs, data handling, and system troubleshooting with regular deployment of
updates. Contributed to improved system stability and operational efficiency (approximately 30
• Collaborated with staff and faculty to enhance digital workflows and system efficiency, Improved the institution’s overall digital infrastructure through continuous updates and maintenance.",
      color: "#6c5ce7", // Added color for visual interest
    },
    {
      title: "Full Stack Developer Intern",
      company: "Unified Mentor",
      period: "june2024 - August2024",
      description:
        "Designed, developed, and maintained web applications leveraging React, Node.js, Express, and MongoDB, ensuring high performance and scalability. Collaborated with cross-functional teams to deliver user-centric solutions.",
      color: "#007bff", // Added color for visual interest
    },
    {
      title: "Freelance Web developer",
      company: "Fiverr, Upwork, Freelancer",
      period: "2024 - Present",
      description:
        "Developed responsive, high-performance web applications using React/Next js. Leveraged Redux for efficient state management and seamlessly integrated RESTful APIs to deliver dynamic user experiences across multiple client projects.",
      color: "#6c5ce7", // Added color for visual interest
    },
    // {
    //   title: "UI/UX Intern", // Added another experience item
    //   company: "Creative Labs",
    //   period: "2021 - 2022",
    //   description:
    //     "Collaborated with design team to create user-centered interfaces and prototypes. Assisted in user testing and implementing feedback.",
    //   color: "#00b894",
    // },
  ];

  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Delhi University",
      period: "2021 - 2024",
      achievements: "CGPA: 7.1/10, Top 10% of the class",
      color: "#0984e3", // Added color for visual interest
    },
    {
      degree: "Senior Secondary School",
      field: "Science",
      institution: "Kendriya Vidyala No.2 AFS HINDAN GZB",
      period: "2019 - 2020",
      achievements: "Percentage: 86.5/100, Top 5% of the class",
      color: "#0984e3", // Added color for visual interest
    },
  ];

  // More dynamic animations
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Custom cubic bezier for more dynamic feel
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  // Parallax scroll effect for different sections
  const parallaxOffset = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div style={{ y: ySpring }} ref={container} className={styles.about}>
      <div className={styles.gradientOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
      
      <div className={styles.body}>
        <motion.div 
          className={styles.title}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                fill={true}
                alt="profile"
                src="/images/background.jpg"
                style={{ objectFit: "cover" }}
                priority
              />
              <motion.div 
                className={styles.imageBorder}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
              <motion.div 
                className={styles.imageGlow}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About
            </motion.h2>
          </span>
          <motion.h2
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}

            
          >
            

            <span>
              
              Me
              
            </span>

            {/* <motion.div
            className={styles.headerUnderline}
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
             */}
            
          
          </motion.h2>
          
          
          <motion.svg
            style={{ rotate: rotateSpring, scale: 1.8 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="currentColor"
            />
          </motion.svg>
        </motion.div>

        <motion.div 
          className={styles.description}
          style={{ y: useTransform(parallaxOffset, v => v * -0.5) }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            I'm a <span className={styles.highlight}>passionate full-stack developer</span> based in Delhi [India], crafting digital
            experiences that combine creativity with technical excellence. With a focus
            on modern web technologies, I transform complex problems into elegant solutions.
            I strive for clean, efficient, and user-centric design.
          </p>
          <motion.div 
            className={styles.underline}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.div
          className={styles.skills}
          style={{ y: useTransform(parallaxOffset, v => v * 0.3) }}
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technologies I Work With
          </motion.h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <Magnetic key={`${skill}_${index}`}>
                <motion.div
                  className={styles.skillItem}
                  variants={{
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: index * 0.03
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: "0 10px 25px rgba(0,123,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p>{skill}</p>
                  <motion.div 
                    className={styles.skillHover}
                    whileHover={{ 
                      opacity: 1,
                      background: `linear-gradient(135deg, rgba(0,123,255,0.2) 0%, rgba(0,123,255,0) 100%)`
                    }}
                  />
                </motion.div>
              </Magnetic>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.experienceSection}
          style={{ y: useTransform(parallaxOffset, v => v * -0.2) }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h3>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.title}_${index}`}
                className={styles.timelineItem}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className={styles.timelineDot}
                  style={{ backgroundColor: exp.color }}
                  whileInView={{
                    boxShadow: [
                      `0 0 0px ${exp.color}80`,
                      `0 0 8px ${exp.color}80`,
                      `0 0 0px ${exp.color}80`,
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.2
                  }}
                />
                <motion.div 
                  className={styles.timelineContent}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <p className={styles.period}>{exp.period}</p>
                  <p>{exp.description}</p>
                  <motion.div 
                    className={styles.timelineAccent}
                    style={{ backgroundColor: exp.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.educationSection}
          style={{ y: useTransform(parallaxOffset, v => v * 0.4) }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h3>
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}_${index}`}
              className={styles.educationCard}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={styles.educationIcon}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </motion.div>
              <h4>{edu.degree}</h4>
              <h5>{edu.field}</h5>
              <p>{edu.institution}</p>
              <p className={styles.period}>{edu.period}</p>
              <p className={styles.achievements}>{edu.achievements}</p>
              <motion.div 
                className={styles.educationGlow}
                style={{ backgroundColor: edu.color }}
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.info}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.infoItem}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3>Location</h3>
              <p>
                <motion.span 
                  className={styles.locationDot}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2
                  }}
                />
                New Delhi, India
              </p>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3>Connect</h3>
              <Magnetic>
                <Rounded backgroundColor={"#334BD3"} hoverColor={"#4c68ff"}>
                  <motion.a 
                    href="mailto:hayat.noor2004@gmail.com"
                    whileHover={{ letterSpacing: "1px" }}
                    transition={{ duration: 0.3 }}
                  >
                    Send Email
                  </motion.a>
                </Rounded>
              </Magnetic>
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;