 "use client";
import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";
export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp} transition={{ duration: 0.7 }} className="glass gradient-border p-8 md:p-10 lg:col-span-7">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">Who I Am</p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">{HERO_NAME} · {HERO_LOCATION}</h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        Final Year Student of Computer Science and Engineering with profound knowledge of Java, Spring Boot, REST API, modern AI and RAG systems. Built production-grade applications, including a custom Document Search Engine implemented in Java and a backend API for processing real-time queries.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Strong coding skills in Data Structures and Algorithms, OOP, and databases. Passionate about developing high-quality production-grade software, building performant backend systems and processes, and working in a fast-paced environment.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary"><span>Contact Me</span><span aria-hidden>→</span></a>
        <a href="#work" className="btn-ghost"><span>See Projects</span></a>
      </div>
    </motion.div>
  );
};
