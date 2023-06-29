import { useState } from 'react'
import styles from './styles.module.css'

function InputSearch ({ getFinalInputValue }) {

    const [input , setInput] = useState('')

    function getInputValue (e) {
        const inputValue = e.target.value
        setInput(inputValue)
    }

    function sendInputValue() {
        getFinalInputValue(input)
    }

    

    return(
        <div className={styles.inputContainer}>
            <input 
                type="text" 
                placeholder='Procure seu Streamer favorito'
                onChange={getInputValue} 
            />
            <img 
                src={require('../../assets/img/searchIcon.png')} 
                alt="search Icon"
                onClick={sendInputValue} 
            />
        </div>
       
    )
}

export default InputSearch