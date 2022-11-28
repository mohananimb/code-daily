import React from 'react'
import styles from '../../styles/Home.module.css'
import { useTimer } from './hooks'
const Timer = () => {
  const {
    handlePause,
    displayData,
    timer,
    handleReset,
    handleStart,
    hour,
    min,
    sec,
    handleChange
  } = useTimer()
  return (
    <div className={styles.parent}>
      <h1>Countdown</h1>

      <h1>{displayData(timer)}</h1>
      <div className={styles.countdown}>
        <div className='countdown__hour'>
          <input
            value={hour}
            onChange={handleChange}
            type='number'
            name='hour'
            placeholder='Hour'
          />
        </div>
        <div className='countdown__hour'>
          <input
            value={min}
            onChange={handleChange}
            type='number'
            name='min'
            placeholder='Minutes'
          />
        </div>
        <div className='countdown__hour'>
          <input
            value={sec}
            onChange={handleChange}
            type='number'
            name='seconds'
            placeholder='Seconds'
          />
        </div>
      </div>

      <div className={styles.button__container}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )
}

export default Timer
