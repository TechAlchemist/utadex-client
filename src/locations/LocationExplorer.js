import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import LocationCard from '../components/LocationCard';

function LocationExplorer(props) {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
       fetch('http://localhost:3000/api/location/getAllLocations')
       .then(results => results.json())
       .then(data => {setLocations(data)})

    }, []);

    return (
        <Container>
            <h1> Location Explorer </h1>

            {locations && locations.map((location, idx) => 
                <LocationCard key={idx}  location={location}/>
            )}
            
        </Container>

    );
}

export default LocationExplorer;