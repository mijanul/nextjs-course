import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
