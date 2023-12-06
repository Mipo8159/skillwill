import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { counterSelector, decrement, increment } from "../store/counter/counter.slice"

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo)
    const count = useSelector(counterSelector)
    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch(increment())
    }

    const decrementCount = () => {
        dispatch(decrement())
    }


    return <div>
        <h2>Todo List</h2>
        {todoList.map((item) =>  <div key={item}> {item} </div>)}
        <Link to={'/create'}>To Create Page</Link>

        <div>
            <h3>{count}</h3>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    </div>
}

export default TodoListPage