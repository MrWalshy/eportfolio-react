import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './projectComponents/projectCard.component';

const card0 = {name: "My First Project", description: "I followed mobile-first development to build my website to ensure as wide an audience is reached. I decided to use a simple, clean yet visually appealing layout."};
const card1 = {name: "My Second Project", description: "What another description!"};

export default class Projects extends Component {
    render() {
        return (
            <Container className="mt-5 pt-5 px-0" fluid={true}>
                <Row className="mx-3 mx-sm-0 mx-xl-3 text-center">
                    <Col className="px-0">
                        <h1>Projects</h1>
                        <p className="lead">View my projects here!</p>
                    </Col>
                </Row>
                <hr className="mb-0"/>
                <Row id="projects" className="mx-0 mb-4 justify-content-around">
                    <ProjectCard info={card0}></ProjectCard>
                    <ProjectCard info={card1}></ProjectCard>
                </Row>
            </Container>
        );
    }
}