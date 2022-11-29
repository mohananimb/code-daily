import React from 'react'
import { useTicTacToe } from './hooks'

const TicTacToe = () => {
  const {
    board,
    handlePlay,
    winner,
    handlePlayAgain,
    handleSinglePlayer,
    handleSetPlay,
    play
  } = useTicTacToe()
  return (
    <div className='parent'>
      <div className='container'>
        <h1 className='container__heading'>Tic Tac Toe</h1>
        {!play && (
          <select className='container__select' onChange={handleSinglePlayer}>
            <option value='single'>Single Player</option>
            <option value='multi'>Multi Player</option>
          </select>
        )}
        {!play && (
          <button onClick={handleSetPlay} className='container__button'>
            Let's Play
          </button>
        )}
        {winner && <h1 className='container__winner'>Winner: {winner}</h1>}

        {play &&
          board.map((row, indx) => (
            <div key={Math.random() * 5 + indx} className='col'>
              {row.map((cell, ix) => (
                <div
                  key={Math.random() * 50 + indx}
                  onClick={() => handlePlay(indx, ix)}
                  className='cell'
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}

        {winner && (
          <button onClick={handlePlayAgain} className='container__button'>
            Play Again
          </button>
        )}
      </div>
    </div>
  )
}

export default TicTacToe
