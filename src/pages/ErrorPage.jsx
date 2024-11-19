import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
    
  return (
    <div>
        <h1>this is error page</h1>
        <p>ki holo home page jaw </p>
        <h2 className="text-2xl">Status: {error.status} | Massege: {error.statusText}</h2>
        <Link to="/">Go home</Link>
    </div>
  )
}
