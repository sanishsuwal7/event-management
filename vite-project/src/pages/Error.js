import MainNavigation from "../components/MainNavigation.js";
import PageContent from "../components/PageContent.js";
import { useRouteError } from "react-router-dom";


export default function Error() {
    const error = useRouteError();
    let title = "An error occured";
    let message = "Something went wrong";

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404){
        title = "Page not found";
        message = "The page you are looking for does not exist";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}