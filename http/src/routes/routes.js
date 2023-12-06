import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UsersContextProvider from "../contexts/UsersContext";
import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";
import ThemeContextProvider from "../contexts/ThemeContext";

const routes = [
 {
    element: (
        <div>
            <ThemeContextProvider>
                <Header/>
                <Outlet/>
            </ThemeContextProvider>
        </div>
    ),
    path: '/',
    children: [
        {
            element: (
              <div>
                <UsersContextProvider>
                    <MainPage />
                        <p> this is a divider </p>
                    <MainPage />
                </UsersContextProvider>
              </div>
            ),
            index: true
        },
        {
            element: <CreatePage/>,
            path: 'create'
        },
        {
            element: <UpdatePage/>,
            path: 'update/:userId'
        },
    ]
 }
]

export default routes