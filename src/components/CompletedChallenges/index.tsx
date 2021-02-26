import styles from './style.module.scss'

export const CompletedChallenges = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span className={styles.completedChallengesTitle}>Desafios completos</span>
      <span className={styles.completedChallengesQuantity}>5</span>
    </div>
  )
}