import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hewvqhaokvcaxemogoeq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3ZxaGFva3ZjYXhlbW9nb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNjEwMDIsImV4cCI6MjAzODkzNzAwMn0.d9R8Yz8IT_YjcfUPyefRzhdat6RUn01u8zicDmJq8Vw'; 

const supabase = createClient(supabaseUrl, supabaseKey);

function EventDetails(eventid) {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
  
    useEffect(() => {
      const fetchEvent = async () => {
        const { data, error } = await supabase.from('events').select('*').eq('id', eventId);
        if (error) {
          console.error('Error fetching event:', error);
        } else {
          setEvent(data[0]);
        }
      };
      fetchEvent();
    }, [eventId]);
  
    return (
      <div>
        {event && (
          <>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            {/* Render other event details */}
          </>
        )}
      </div>
    );
  }
 
export default EventDetails