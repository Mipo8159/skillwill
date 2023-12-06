import { useNavigate } from "react-router-dom"
import UserForm from "../components/UserForm"
import useRequest from "../hooks/useRequest"
import { themeOptions, useThemeContext } from "../contexts/ThemeContext"

const CreatePage = () => {
    const {theme} = useThemeContext()
    const {sendRequest, loading} = useRequest({url: '/api/v1/users', method: 'POST'})
    const navigate = useNavigate()

    const onSubmit = (firstName, lastName) => {
        sendRequest([{firstName, lastName}])
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }
        
    if(loading) return <p>Loading ..</p>
    return (
        <div>
            <UserForm onFormSubmit={onSubmit}/>
            <p>{themeOptions[theme]}</p>
        </div>
    )
}

export default CreatePage