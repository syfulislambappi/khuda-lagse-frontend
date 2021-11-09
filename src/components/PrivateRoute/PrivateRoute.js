import { Spinner } from "react-bootstrap"
import { Redirect, Route } from "react-router"
import useAuth from "../../hooks/useAuth"

function PrivateRoute({children, ...rest}) {
    const {user, loading} = useAuth()

    if(loading) return <Spinner className="mx-auto d-block my-5" animation="border" variant="danger" />

    return (
        <Route
            {...rest}
            render={({location}) => {
                return user.displayName ? (children) :
                (<Redirect 
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }}
                 />)
            }}
         /> 
    )
}

export default PrivateRoute