import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const backToTheHome = () =>{
        navigate('/')
    }
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{
                error.statusText || error.massage
            }</p>
            <button onClick={backToTheHome}>Go back Home</button>
        </div>
    );
};

export default Error;