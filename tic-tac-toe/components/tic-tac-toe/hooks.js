import { useState } from 'react'
import { players } from './constant'

export const useTicTacToe = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])
  const [isCpuNext, setIsCpuNext] = useState(false)
  const [isPlaye2Next, setIsPlaye2Next] = useState(false)

  const [winner, setWinner] = useState('')
  const [singlePlayer, setSinglePlayer] = useState(true)
  const [play, setPlay] = useState(false)

  const handleSinglePlayer = e => {
    const { value } = e.target.value
    value === 'single' ? setSinglePlayer(true) : setSinglePlayer(false)
  }

  const handlePlay = (arrI, i) => {
    if (isCpuNext) return
    if (winner) return
    if (board[arrI][i]) {
      alert('Place is already taken')
    } else {
      board[arrI][i] = isPlaye2Next ? players.HUMAN2.sym : players.HUMAN.sym
      setBoard(prev => [...board])
      handleCheckWinner()
      singlePlayer && setIsCpuNext(true)
      singlePlayer && handleCpuMove()

        !singlePlayer && !isPlaye2Next && setIsPlaye2Next(true);
        !singlePlayer && isPlaye2Next && setIsPlaye2Next(false)
    }
  }

  const handleCpuMove = () => {
    if (winner) return
    const emptyBoxes = []
    board.forEach((b, i) => {
      b.forEach((it, ix) => {
        if (it === '') {
          emptyBoxes.push({ arrI: i, indx: ix })
        }
      })
    })

    if (emptyBoxes.length) {
      const idx = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]

      board[idx.arrI][idx.indx] = players.CPU.sym
    }

    setIsCpuNext(false)
    handleCheckWinner()
  }

  const handleCheckWinner = () => {
    //row;
    for (let i = 0; i < board.length; i++) {
      const row = board[i]
      const isHuman = row.every(cell => cell === players.HUMAN.sym)
      if (isHuman) {
        setWinner('Player 1')
        return
      }

      const isCPU = row.every(cell => cell === players.CPU.sym)
      if (isCPU) {
        setWinner(singlePlayer ? 'CPU': "Player 2")
        return
      }
    }

    //column
    for (let i = 0; i < board.length; i++) {
      const column = board.map(row => row[i])
      const isHuman = column.every(cell => cell === players.HUMAN.sym)
      if (isHuman) {
        setWinner('Player 1')
        return
      }

      const isCPU = column.every(cell => cell === players.CPU.sym)
      if (isCPU) {
        setWinner(singlePlayer ? 'CPU': "Player 2")
        return
      }
    }

    //diagonal
    let diagonal1 = [],
      diagonal2 = []
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        // Condition for diagonal1 diagonal
        if (i === j) diagonal1.push(board[i][j])

        // Condition for diagonal2 diagonal
        if (i + j === board.length - 1) diagonal2.push(board[i][j])
      }
    }
    const isHuman1 = diagonal1.every(cell => cell === players.HUMAN.sym)
    const isHuman2 = diagonal2.every(cell => cell === players.HUMAN.sym)

    if (isHuman1 || isHuman2) {
      setWinner('Player 1')
      return
    }

    const isCPU1 = diagonal1.every(cell => cell === players.CPU.sym)
    const isCPU2 = diagonal2.every(cell => cell === players.CPU.sym)

    if (isCPU1 || isCPU2) {
      setWinner(singlePlayer ? 'CPU': "Player 2")
      return
    }
  }

  const handlePlayAgain = () => {
    setWinner('')
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
    handleSetPlay()
    setIsPlaye2Next(false)
  }

  const handleSetPlay = () => {
    setPlay(!play)
  }
  return {
    board,
    isCpuNext,
    handlePlay,
    winner,
    handlePlayAgain,
    handleSinglePlayer,
    singlePlayer,
    handleSetPlay,
    play
  }
}
