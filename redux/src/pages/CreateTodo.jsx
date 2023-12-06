import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addTodo } from "../store/todo/todo.slice"

const CreateTodoPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodo(value))
        setValue('')
    }

    return <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button>Submit</button>

        
        <Link to={'/'}>To List</Link>
    </form>
}

export default CreateTodoPage