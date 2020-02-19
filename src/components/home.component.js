import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class Home extends Component {
    render() {
        return (
            <Container className="pt-5 mt-5 px-0">
                <Row className="justify-content-center text-center mx-0">
                    <Col sm={12}>
                        <div id="mainImage" className="p-3"></div>
                    </Col>

                    <Col>
                        <h1 id="title">Morgan Walsh</h1>
                        <p className="lead">Full-Stack Developer</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}