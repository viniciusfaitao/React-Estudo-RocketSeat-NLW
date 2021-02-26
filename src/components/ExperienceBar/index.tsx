import styles from './style.module.scss'

export const ExperienceBar = () => {
  return (
    <header className={styles.experienceBarContainer}>
      <span>0xp</span>
      <div className={styles.experienceBar}>
        <div className={styles.experienceBarLine} style={{ width: '50%' }} />
        <span className={styles.experienceBarCurrent} style={{ left: "50%" }}>300px</span>
      </div>
      <span>600xp</span>
    </header>
  )
}