import styles from './style.module.scss'

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImg} src="https://github.com/viniciusfaitao.png" alt="Vinicius Faitão" />
      <div className={styles.profileInfo}>
        <strong>Vinicius Faitão</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}