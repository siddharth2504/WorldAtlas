import { useRouteError,Link } from "react-router-dom";


export const ErrorPage = () =>{

    const error = useRouteError();
    // console.log(error);

    return (

        <div>
            <h3>Oops! An error occured.</h3>
            {error && <p>{error.data}</p>}

          <Link to ="/"> <button>Go back to HomePage</button> </Link>

        </div>
    )
}