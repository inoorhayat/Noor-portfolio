import styles from "./stylenavbar.module.scss";
import Links from "./link";
import { motion } from "framer-motion";
import { menuSlider } from "./anima";
import Curve from "./curve/Curve";
import { useEffect } from "react";
import { usePathname } from "next/navigation";






const Navbar = ({ toggleMenu }) => {

  const pathname = usePathname();

  useEffect(() => {
    toggleMenu(); // hide menu whenever route changes
  }, [pathname])

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Works",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  return (
    <motion.div
      variants={menuSlider}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation Menu</p>
            <button onClick={toggleMenu} className={styles.closeButton}>
              x
            </button>
          </div>

          {navItems.map((item, index) => {
            return (
              <Links
                key={`${item.title}_${index}`}
                data={{ ...item, index }}
                onClick={toggleMenu}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <a href="https://www.linkedin.com/in/inoorhayat/">LinkdIn</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://x.com/inoorhayat">Twitter</a>
          <a href="https://github.com/inoorhayat">Github</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navbar;
