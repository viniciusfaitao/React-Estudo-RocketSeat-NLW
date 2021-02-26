import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './style.module.scss'

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountDown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeBoxFailedButton}
              type="button"
              onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button
              className={styles.challengeBoxSuccededButton}
              type="button"
              onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
          </div>
        )}
    </div>
  )
}