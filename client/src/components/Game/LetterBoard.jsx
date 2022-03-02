
//need to use {} for boardData to destructure boardData from props
export default function LetterBoard({boardData}) {
  return (
      <div className='game-cube'>
              {[0,1,2,3,4,5].map((row,rowIndex)=>(
                <div className={'letter-row'} key={rowIndex}>
                    {
                      [0,1,2,3,4].map((column,letterIndex)=>(
                        <div key={letterIndex} className={`letter ${boardData.boardRowStatus[row] ? boardData.boardRowStatus[row][column]:""}`}>
                          {boardData.boardWords[row] && boardData.boardWords[row][column]}
                        </div>
                      ))
                    }
                </div>
              ))}
        </div>
  )
}
