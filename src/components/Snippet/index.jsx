import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const tinymessage = (props) => (
    <Container id="main" className="px-5 py-4 mb-0 mt-4 mx-4">
        <Row className="justify-content-center">
            <Col sm={8}>
                {' '}
                <h2 id="title" style={{fontWeight: 900}}>{props.title}</h2>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col sm={8}>
                <p id="message">{props.message}</p>
            </Col>
        </Row>
    </Container>
);

export default tinymessage;
