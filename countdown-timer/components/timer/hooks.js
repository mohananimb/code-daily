import { useEffect, useRef, useState } from 'react'

export const useTimer = () => {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [timer, setTimer] = useState()
  const [start, setStart] = useState(false)
  const counter = useRef(null)

  useEffect(() => {
    if (start) {
      counter.current = setInterval(() => {
        setTimer(prev => (prev === 0 ? 0 : prev - 1))
      }, 1000)
    }
    return () => {
      clearInterval(counter.current)
    }
  }, [start])
  const handleChange = e => {
    const { name, value } = e.target

    switch (name) {
      case 'hour':
        setHour(parseInt(value))
        break
      case 'min':
        setMin(parseInt(value))
        break
      case 'seconds':
        setSec(parseInt(value))
        break
      default:
        break
    }
  }

  const handleStart = () => {
    let data =
      (hour ? parseInt(hour) * 3600 : 0) +
      (min ? parseInt(min) * 60 : 0) +
      (parseInt(sec) || 0)

    setTimer(data)
    !start && setStart(true)
  }

  const displayData = secs => {
    let hours = Math.floor(parseInt(secs || 0) / (60 * 60))

    let divisor_for_minutes = parseInt(secs || 0) % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    return `${hours
      .toString()
      .padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} `
  }

  const handleReset = () => {
    clearInterval(counter.current)
    setStart(false)
    setHour('')
    setMin('')
    setSec('')
    setTimer(0)
  }

  const handlePause = () => {
    setStart(!start)
  }

  return {
    handlePause,
    displayData,
    timer,
    handleReset,
    handleStart,
    hour,
    min,
    sec,
    handleChange
  }
}
