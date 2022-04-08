import React, { useCallback, useState } from 'react';

import {
  Eventcalendar,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarToday,
  CalendarNext,
  MbscEventcalendarView,
  MbscCalendarEvent,
} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

const MainCalendar = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [view, setView] = useState('week');
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    schedule: { type: 'week' },
  });

  // const createEvent = useCallback((event) => {
  //   setEvents([...event.event]);
  //   console.log(event.event);
  // }, []);

  const onEventClick = useCallback((event) => {
    // setEvents([...event.event]);
    // console.log(event.event);
  }, []);

  const changeView = (event: any) => {
    let calView: MbscEventcalendarView;

    switch (event.target.value) {
      case 'month':
      default:
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
        calView = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        calView = {
          schedule: { type: 'day' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const customWithNavButtons = () => {
    return (
      <>
        <CalendarPrev className='google-cal-header-prev' />
        <CalendarToday className='google-cal-header-today' />
        <CalendarNext className='google-cal-header-next' />
        <CalendarNav className='google-cal-header-nav' />
        <SegmentedGroup value={view} onChange={changeView}>
          <SegmentedItem value='month'>Month</SegmentedItem>
          <SegmentedItem value='week'>Week</SegmentedItem>
          <SegmentedItem value='day'>Day</SegmentedItem>
        </SegmentedGroup>
      </>
    );
  };

  return (
    <Eventcalendar
      theme='ios'
      themeVariant='dark'
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      className={'md-google-calendar '}
      exclusiveEndDates={true}
      view={calView}
      onEventClick={onEventClick}
      data={events}
      renderHeader={customWithNavButtons}
    />
  );
};

export default MainCalendar;
