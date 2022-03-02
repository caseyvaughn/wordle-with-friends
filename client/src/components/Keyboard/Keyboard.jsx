import { keys } from './Keys'
import "./Keyboard.css"
import { useEffect } from 'react'

export default function Keyboard({ boardData, handleKeyboard }) {
    function handleKey(key) { 
      if (key.key === "Enter") {
        handleKeyboard("ENTER")
      }
        if (key.key === "Backspace")
            handleKeyboard("⌫")
        if (key.key.length === 1 && key.key.toLowerCase() !== key.key.toUpperCase())
            handleKeyboard(key.key.toUpperCase())
    }
  useEffect(() => {          
      //using .addEventListener to link the keyboard 
        window.addEventListener("keydown", handleKey)
        return () => { window.removeEventListener("keydown", handleKey) }
    }, [handleKeyboard])
  
 
  return (
    <div className="keyboard-container bottom">
      <div className="row">
        {keys.map((item, index) => {
          //maps over the 3 key arrays; 1 for each keyboard row!
        return <div className="keyboard-rows" key={index} >
          {item.map((key, keyIndex) => { 
            return (
              <button key={keyIndex}
                // className={"key-correct"}
                className={`key-button
                  ${boardData.correctCharArray.includes(key) ? "key-correct" :
                            (boardData.presentCharArray.includes(key) ? "key-present" :
                      boardData.absentCharArray.includes(key) ? "key-absent" : "")}`
                } 
                    onClick={()=>{handleKeyboard(key)}}>
                    {key}
                </button>
            )
            })
        }
        </div>
      })}

      </div>
      </div>
  )
}
