import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/users/users.thunks"

const UsersPage = () => {
    const dispatch = useDispatch()
    const {users, loading, error} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if(loading) return <div>Loading .. </div>
    if(error) return <div>{error}</div>
 
    return <div>
        {users.map(user => <div style={{border: '1px solid red'}} key={user._uuid}> 
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
         </div>)}
    </div>
}
export default UsersPage