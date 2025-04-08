"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./stylefooter.module.scss";
import Image from "next/image";
import Rounded from "../../common/roundedbutton";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../../common/magnetic";
import Link from "next/link";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  // State to store current time
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/background.jpg`} />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <Link href={"/contact"}>Get in touch</Link>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>hayat.noor2004@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+91-8882840674</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>{new Date().getFullYear()} © Edition</p>
            </span>
            <span>
              <h3>Time</h3>
              <p>{currentTime}</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awards</p>
              </Magnetic>
            </span>
            <Magnetic key={`social_instagram`}>
              <a
                href="https://github.com/inoorhayat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Github</p>
              </a>
            </Magnetic>

            <Magnetic key={`social_dribbble`}>
              <a
                href="https://x.com/inoorhayat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Twitter</p>
              </a>
            </Magnetic>

            <Magnetic key={`social_linkedin`}>
              <a
                href="https://linkedin.com/in/inoorhayat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Linkedin</p>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
