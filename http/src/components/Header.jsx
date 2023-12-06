import { Link } from "react-router-dom"
import { useThemeContext } from "../contexts/ThemeContext"

 const Header = () => {
    const {theme, toggleTheme} = useThemeContext()

    return (
        <header>
            <button onClick={toggleTheme}>current Theme is {theme}</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/create'}>Create Page</Link>
        </header>
    )
 }

 export default Header