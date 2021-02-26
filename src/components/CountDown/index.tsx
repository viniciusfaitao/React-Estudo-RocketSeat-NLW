import { useEffect, useState } from 'react'
import styles from './style.module.scss'

let countDownTimeOut: NodeJS.Timeout;

export const CountDown = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = () => {
    setIsActive(true);
  }

  const resetCountDown = () => {
    clearTimeout(countDownTimeOut)
    setIsActive(false);
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false)
    }
  }, [isActive, time])

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