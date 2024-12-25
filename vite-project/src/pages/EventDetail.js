import {useRouteLoaderData,  useParams, redirect } from "react-router-dom"
import EventItem from "../components/EventItem.js"

export default function EventDetail() {
    const data = useRouteLoaderData('event-detail');
    return (
        <>
            <EventItem event={data.event}/>
        </>
    )
}


export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id)

    if(!response.ok) {
        throw new Response(JSON.stringify({message: 'Data cannot be fetched'}), {status: 500});
    } else {
        return response;

    }
}

export async function action({params, request}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    })

    if(!response.ok) {
        throw new Response(JSON.stringify({message: 'Data cannot be deleted'}), {status: 500});
    } else {
        return redirect('/events');

    }
}