
import { useLoaderData, Await} from 'react-router-dom';
import EventsList from '../components/EventsList.js';
import { Suspense } from 'react';

function EventsPage() {
    // const data = useLoaderData();
    const {events} = useLoaderData();

    // const events = data.events;
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
        {/* <EventsList events={events} /> */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}

        </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
      // return {isError: true, message: 'Data cannot be fetched'}
      // throw {message: 'Data cannot be fetched'};
      throw new Response(JSON.stringify({message: 'Data cannot be fetched'}), {status: 500});

  } else {
    const resData = await response.json();
    return resData.events;
  // return response;
  }
}

export function loader() {
   return {
    events: loadEvents()
   }
}