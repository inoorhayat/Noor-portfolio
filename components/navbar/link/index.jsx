"use client";
import Link from "next/link";
import stylesLINK from "./stylelink.module.scss";
import { menuSlider, sldier } from "../anima";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Index = ({ data, onClick }) => {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault(); // prevent default navigation
    if (onClick) onClick(); // close the menu
    await new Promise((resolve) => setTimeout(resolve, 400)); // wait for menu animation
    router.push(data.href); // then navigate
  };

  return (
    <motion.div
      custom={data.index}
      variants={sldier}
      animate="enter"
      exit="exit"
      initial="initial"
      className={stylesLINK.link}
    >
      <a href={data.href} onClick={handleClick}>
        {data.title}
      </a>
    </motion.div>
  );
};

export default Index;
