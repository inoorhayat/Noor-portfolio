"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/magnetic";
import Rounded from "../../common/roundedbutton";
import styles from "./stylework.module.scss";

// Custom SVG icons
const Icons = {
  ExternalLink: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  GitHub: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  Code: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Filter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  ),
};

const Work = () => {
  const container = useRef(null);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Enhanced animations with springs for smoother motion
  const springConfig = { stiffness: 100, damping: 15 };
  const ySpring = useSpring(
    useTransform(scrollYProgress, [0, 1], [-300, 0]),
    springConfig
  );
  const opacitySpring = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    springConfig
  );

  // Project categories
  const categories = ["all", "web", "mobile", "design"];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Hubb Calligraphy (E-Commerce Platform)",
      description:
        "A modern e-commerce frontend application for Hubb, providing seamless shopping, user authentication, and payment integration.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1743948085/hubb_front_hwdrmn.png",
      category: "web",
      technologies: ["React.js", "TypeScript", "Vite", "Firebase", "Stripe"],
      demoUrl: "https://hubb-calligraphy.onrender.com",
      githubUrl: "https://github.com/inoorhayat/hubb-ecommerce-frontend",
      featured: true,
    }, 
    {
      id: 2,
      title: "Chat App",
      description:
        "A real-time chat application enabling users to communicate instantly with features like authentication, authorization, and online status indicators.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1743948547/Screenshot_28_quq8ed.png",
      category: "web",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS", "Daisy UI", "Zustand"],
      demoUrl: "https://chat-app-1r0d.onrender.com/login",
      githubUrl: "https://github.com/inoorhayat/chat-app",
      featured: false,
    },
    {
      id: 3,
      title: "Blog App",
      description:
        "A full-stack blog application enabling users to create, edit, and delete posts with authentication and image upload features.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1743948887/Screenshot_29_tipiia.png",
      category: "web",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "Axios", "React Router", "Bcrypt", "jsonwebtoken", "Multer"],
      demoUrl: "https://noors-blog-app.vercel.app/",
      githubUrl: "https://github.com/inoorhayat/noors-blog-app",
      featured: false,
    },
    {
      id: 4,
      title: "Promptopia promt generator",
      description:
        "A design-focused project showcasing a prompt generator for AI applications, built with Figma and Adobe XD.",  
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1743949211/Screenshot_30_gchk50.png",
      category: "web",
      technologies: ["Figma", "Adobe XD", "CSS", "SCSS"],
      demoUrl: "https://promtopia-k9mfi5got-inoorhayats-projects.vercel.app/",
      githubUrl: "https://github.com/inoorhayat/promtopia",
      featured: true,
    },
    {
      id: 5,
      title: "PassOP",
      description:
        "Promtopia is a full-stack web application that enables users to create, share, and explore AI-generated prompts, featuring user authentication and prompt management functionalities.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1744038023/Screenshot_2025-04-07_202942_y8faen.png",
      category: "web",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
      demoUrl: "https://demo.project5.com",
      githubUrl: "https://github.com/inoorhayat/passOP?tab=readme-ov-file",
      featured: true,
    },
    {
      id: 6,
      title: "Pinterest Clone",
      description:
        "A Pinterest clone allowing users to register, upload profile pictures, create posts, and view a feed of images.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1744092256/Screenshot_31_yw8hd4.png",
      category: "web",
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB", "Mongoose", "Multer", "Bcrypt", "jsonwebtoken"],
      demoUrl: "https://pinterest-robo.onrender.com",
      githubUrl: "https://github.com/inoorhayat/pinterest",
      featured: false,
    },
    {
      id: 7,
      title: "Netflix Clone",
      description:
        "A front-end replica of Netflix's user interface, showcasing responsive design and layout.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1744092572/Screenshot_32_n06sjz.png",
      category: "design",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://ornate-tiramisu-ad89bc.netlify.app/",
      githubUrl: "https://github.com/inoorhayat/Netflix",
      featured: false,
    },
    {
      id: 8,
      title: "Two Good Co Clone",
      description:
        "A web project containing HTML, CSS, and JavaScript files, along with a video file, though specific functionality is not detailed.",
      image: "https://res.cloudinary.com/dbtpdvmm6/image/upload/v1744092911/Screenshot_33_g8nf8r.png",
      category: "design",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://two-good-company.netlify.app/",
      githubUrl: "https://github.com/inoorhayat/twogoodco-project",
      featured: false,
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Handle project click to show details
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Lock scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Close project detail modal
  const closeModal = () => {
    setSelectedProject(null);
    // Restore scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      style={{ y: ySpring, opacity: opacitySpring }}
      ref={container}
      className={styles.work}
    >
      <div className={styles.gradientOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>
            My <span>Work</span>
          </h1>
          <motion.div
            className={styles.headerUnderline}
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <p>A showcase of my projects and creative experiments</p>
        </motion.div>

        <motion.div
          className={styles.filterContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.filterIcon}>
            <Icons.Filter />
            <span>Filter:</span>
          </div>
          <div className={styles.filterOptions}>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`${styles.filterButton} ${
                  filter === category ? styles.active : ""
                }`}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className={styles.projectImageContainer}>
                <div
                  className={styles.projectImage}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.viewProject}>View Project</div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <div className={styles.projectCategory}>{project.category}</div>
                <div className={styles.technologies}>
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techBadge}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            className={styles.projectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.modalOverlay} onClick={closeModal} />
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>

              <div className={styles.modalImageContainer}>
                <div
                  className={styles.modalImage}
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
              </div>

              <div className={styles.modalDetails}>
                <h2>{selectedProject.title}</h2>
                <div className={styles.categoryBadge}>
                  {selectedProject.category}
                </div>
                <p className={styles.projectDescription}>
                  {selectedProject.description}
                </p>

                <div className={styles.techStackSection}>
                  <h4>Tech Stack</h4>
                  <div className={styles.techStack}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectLinks}>
                  <Magnetic>
                    <Rounded backgroundColor={"#334BD3"} hoverColor={"#4c68ff"}>
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <span>Live Demo</span>
                        <Icons.ExternalLink />
                      </a>
                    </Rounded>
                  </Magnetic>

                  <Magnetic>
                    <Rounded backgroundColor={"#1E1E1E"} hoverColor={"#333333"}>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <span>View Code</span>
                        <Icons.GitHub />
                      </a>
                    </Rounded>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className={styles.callToAction}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Interested in working together?</h2>
          <p>
            I'm always open to discussing new projects or partnership
            opportunities.
          </p>

          <Magnetic>
            <Rounded backgroundColor={"#334BD3"} hoverColor={"#4c68ff"}>
              <motion.a
                href="/contact"
                whileHover={{ letterSpacing: "1px" }}
                transition={{ duration: 0.3 }}
                className={styles.ctaButton}
              >
                Send Email
              </motion.a>
            </Rounded>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;