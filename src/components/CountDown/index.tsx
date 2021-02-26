import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './style.module.scss'


export const CountDown = () => {
  const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <>
      <div className={styles.countDownContainer}>
        <div>
          <span className={styles.countDownFirstNumber}>{minuteLeft}</span>
          <span className={styles.countDownSecondNumber}>{minuteRight}</span>
        </div>
        <span className={styles.countDownPointer}>:</span>
        <div>
          <span className={styles.countDownFirstNumber}>{secondLeft}</span>
          <span className={styles.countDownSecondNumber}>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          className={styles.countDownButton}
          disabled >
          Ciclo encerrado
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountDown}
                type="button" >
                Abandonar ciclo
              </button>
            ) : (
                <button
                  className={styles.countDownButton}
                  onClick={startCountDown}
                  type="button" >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}
    </>
  )
}