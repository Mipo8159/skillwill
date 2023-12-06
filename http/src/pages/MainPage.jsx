import { Link } from "react-router-dom"
import { useUsersContext } from "../contexts/UsersContext"
import { themeOptions, useThemeContext } from "../contexts/ThemeContext"

const MainPage = () => {
    const {theme} = useThemeContext()
    const {userList, dataLoading, deleteLoading, onDelete} = useUsersContext()

    if(dataLoading || deleteLoading) return <p>Loading . . . </p>    
    return (
      <div className="App">
         {userList.map((user) => <div key={user.id} style={{border: '1px solid gray'}}>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <Link to={`/update/${user.id}`}>Edit</Link>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>)}

          <p>{themeOptions[theme]}</p>
      </div>
    )
}

export default MainPage