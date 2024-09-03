import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import EventCard from './EventCard'

const supabaseUrl = 'https://hewvqhaokvcaxemogoeq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3ZxaGFva3ZjYXhlbW9nb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNjEwMDIsImV4cCI6MjAzODkzNzAwMn0.d9R8Yz8IT_YjcfUPyefRzhdat6RUn01u8zicDmJq8Vw'; 

const supabase = createClient(supabaseUrl, supabaseKey);

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select('*');
      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventPage

