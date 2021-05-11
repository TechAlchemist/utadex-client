import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Index(props) {
    return (
        <>
            <Jumbotron fluid id='indexJumbotron'>
                <Container>
                    <h1>Utadex</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid >
                <Container>
                    <p> Utadex is a mega powerful tool that is so easy to use a caveman could do it. </p>
                </Container>
            </Jumbotron>
        </>
    );
}

export default Index;