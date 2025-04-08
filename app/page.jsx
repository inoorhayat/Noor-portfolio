'use client'
import Hero from "@/components/hero/Hero";
import Project from "@/components/project";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Decs from "@/components/descripction/Decs";
import SliderImages from "@/components/sliderImages/SliderImages";
import Contact from "@/components/contact/Contact";
import Preloader from "@/components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import Link from "next/link"; // Added Link import

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Link href="/work"></Link>

        {/* Wrap Preloader inside AnimatePresence */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader setIsLoading={setIsLoading} />}
        </AnimatePresence>

        {/* Main Content */}
        {!isLoading && (
          <>
            <Hero />
            <Decs />
            <Project />
            <SliderImages />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}
