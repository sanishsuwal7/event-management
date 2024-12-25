import { Outlet } from "react-router-dom"
import EventNavigation from "../components/EventsNavigation.js"

export default function EventsRoute() {
    return (
        <>
            <EventNavigation />
            <Outlet />
        </>
    )
}