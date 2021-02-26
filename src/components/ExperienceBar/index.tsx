import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './style.module.scss'

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);


  return (
    <header className={styles.experienceBarContainer}>
      <span>0 xp</span>
      <div className={styles.experienceBar}>
        <div className={styles.experienceBarLine} style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.experienceBarCurrent} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} px</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}