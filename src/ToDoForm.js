import {useState} from 'react'

function ToDoForm ({addTask}) {
    const [userInput, setUserInput] = useState ('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    
    const hadleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    return (
        <form onClick={handleSubmit}>
            <button>+</button>
            <input
                value={userInput}
                type='text'
                onChange={hadleChange}
                placeholder='Новая задача'
            />
            
        </form>
    )
}

export default ToDoForm;