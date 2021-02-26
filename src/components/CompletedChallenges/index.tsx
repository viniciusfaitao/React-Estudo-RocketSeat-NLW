import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './style.module.scss'

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span className={styles.completedChallengesTitle}>Desafios completos</span>
      <span className={styles.completedChallengesQuantity}>{challengesCompleted}</span>
    </div>
  )
}