import { useNavigate } from 'react-router-dom'; 


function EventCard({ event }) {
    const navigate =useNavigate;

    return (
      <div>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <button onClick={() => navigate(`/events/${event.id}`)}>Know More</button>
      </div>
    );
  }
  
export default EventCard