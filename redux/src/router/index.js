import CreateTodoPage from "../pages/CreateTodo";
import TodoListPage from "../pages/TodoList";
import UsersPage from "../pages/UsersPage";

const routes = [
    {
        element: <CreateTodoPage/>,
        path: '/create' 
    },
    {
        element: <TodoListPage/>,
        path: '/'
    },
    {
        element: <UsersPage/>,
        path: '/users'
    }
]

export default routes