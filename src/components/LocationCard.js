import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LocationCard(props) {
    console.log(props.location)
    return (
        <Card className="text-center">
            <Card.Header> { props.location.locationName } </Card.Header>
                <Card.Body>
                    <Card.Text>
                    { props.location.locationDescription }
                    </Card.Text>
                    <Link to={ `/location-explorer/${props.location._id}`} > Details </Link> 
                </Card.Body> 
             <Card.Footer className="text-muted"> 
                Created on: 
                { 
                    ' ' + new Date(props.location.createdAt).toLocaleDateString() + '   ' +
                    new Date(props.location.createdAt).toLocaleTimeString()
                } 
                <br/>
                Updated on:
                { 
                    ' ' + new Date(props.location.updatedAt).toLocaleDateString() + '   ' +
                    new Date(props.location.updatedAt).toLocaleTimeString()
                } 
            </Card.Footer>
        </Card>
    );
}

export default LocationCard;