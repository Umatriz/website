import { motion } from "framer-motion"
import styles from "./Card.module.css"

const Card = ({
  name,
  icon
} : {
  name: String,
  icon: React.ReactNode
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8,
    }
  };

  return (
    <motion.div variants={item} className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{name}</span>
    </motion.div>
  )
}

export default Card