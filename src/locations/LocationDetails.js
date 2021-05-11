import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function LocationDetails(props) {

    


    const [location, setLocation] = useState([]);

    useEffect(() => {
       fetch(`http://localhost:3000/api/location/getSpecificLocation/${props.match.params.locationId}`)
       .then(results => results.json())
       .then(data => {
           setLocation(data)
       })
    }, [props.match.params.locationId]);

    return (
        <Container>
            <Jumbotron>

            {location ? <h1> {location.locationName} </h1> : <p> Loading... </p>}
            {location ? <p> {location.locationDescription} </p> : <p> ... </p>}
            {location ? 
            <div> 
                { location.lat + ', ' + location.long }
                <a href={`https://www.google.com/search?q=${location.lat},${location.long}`}> Map </a> 
            </div> 
            : 
            <p> ... </p>} 
            {
            location ? 
            <Container>
                {
                    location.keyWords && location.keyWords.map((keyword, idx) =>
                        <Badge key={idx} pill variant='primary'> {keyword} </Badge>
                    )
                }
            </Container>
            :
            <> ... </>
            }
            

            <hr />

            <Card>
                <Card.Header> 
                    {location ? <h2> {location.associatedCompany} </h2> : <p> ... </p>} 
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {location ?  <> {location.siteContactName} </>  :  '...' }
                    </Card.Text>
                    <Card.Text>
                        {location ?  <> {location.siteContactEmail} </>  :  '...' }   
                    </Card.Text>
                    <Card.Text>
                        {location ?  <> {location.siteContactPhoneNumber} </>  :  '...' }        
                    </Card.Text>
                </Card.Body>
            </Card>
            
            </Jumbotron>
        </Container>
    );
}

export default LocationDetails;