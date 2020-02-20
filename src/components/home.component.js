import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default class Home extends Component {
    render() {
        return (
            <Container className="mt-5 pt-5 px-0" fluid={true}>
                <Row className="justify-content-center text-center mx-0">
                    {/* <Col sm={12}>
                        <div id="mainImage" className="p-3"></div>
                    </Col> */}

                    <Col>
                        <h1 id="title">Morgan Walsh</h1>
                        <p className="lead">Full-Stack Developer</p>
                    </Col>
                </Row>
                <hr/>
                {/* mx-0 is preventing horizontal scroll overflow */}
                <Row className="mx-0 justify-content-around">
                    <Col lg={5} md={6}>
                        <h3>Some Heading</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                    </Col>

                    <Col lg={5} md={6}>
                        <h3>Some Heading</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni ad eum quidem exercitationem, fugit quibusdam officia asperiores quos ipsum!</p>
                    </Col>
                </Row>
                <hr className="mb-0"/>
                <Row className="mx-0 mb-4 pb-2">
                    <Col className="px-0">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://via.placeholder.com/800x400.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://via.placeholder.com/800x400.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://via.placeholder.com/800x400.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}