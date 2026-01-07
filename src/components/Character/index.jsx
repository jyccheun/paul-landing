import { useTransform, motion } from 'motion/react'

function Character({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0,1])

  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}

export default Character