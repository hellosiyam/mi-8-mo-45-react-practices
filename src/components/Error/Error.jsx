import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{
                error.statusText || error.massage
            }</p>
        </div>
    );
};

export default Error;