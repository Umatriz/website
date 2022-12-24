"use client"

import {  motion, Variants } from "framer-motion"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs } from "react-icons/si"
import Card from "./components/Card"

import styles from "./page.module.css"


const textAnimation: Variants = {
  offscreen: {
    y: -78,
    opacity: 0,
  },
  onscreen: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8,
      delay: custom * 0.2,
    }
  }),
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const page = ({} : {}) => {
  return (
    <div>
      <motion.section
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        className={`${styles.section} ${styles.main_section}`}
      >
        <motion.span custom={1} variants={textAnimation} className={styles.main_text}>Umatriz</motion.span>
        <motion.span variants={textAnimation} className={styles.sub_text}>Web Developer</motion.span>
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: 100,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1 * 0.2
          }}
        >
          <BsChevronDown size={32} />
        </motion.div>
      </motion.section>
      <motion.section
        className={`${styles.section} ${styles.tech_section}`}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.span variants={textAnimation} className={styles.stack}>Tech stack</motion.span>
        <motion.div
          className={styles.cards}
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          <Card name='HTML' icon={<SiHtml5 />}/>
          <Card name='CSS' icon={<SiCss3 />} />
          <Card name='Js' icon={<SiJavascript />}/>
          <Card name='Ts' icon={<SiTypescript />}/>
          <Card name='React' icon={<SiReact />}/>
          <Card name='Next.js' icon={<SiNextdotjs />}/>
        </motion.div>
      </motion.section>
      <motion.section
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        className={`${styles.section} ${styles.main_section}`}
      >
        <motion.div custom={1} variants={textAnimation} className={styles.quote}>"We shall meet in the place where there is no darkness."</motion.div>
        <motion.div variants={textAnimation} className={styles.button}>
          <Link className={styles.button_link} href="https://github.com/Umatriz">My GitHub</Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default page