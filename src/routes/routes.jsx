import { Navigate, createBrowserRouter, redirect } from "react-router-dom"
import { NavBar } from "../components"
import { Chat } from "../pages"

const guards = () => {
    const data = JSON.parse(sessionStorage.getItem("user"))
    return data?.displayName ? data?.displayName : redirect("")
}

const route = createBrowserRouter([
    {
        path:"",
        element:<NavBar />,
        children:[
            {
                path:"/chat",
                element:<Chat />,
                loader:() => guards()
            }
        ]
    },
    {
        path:"*",
        element:<Navigate to={""} />
    }
])

export default route