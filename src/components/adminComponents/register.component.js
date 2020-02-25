import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Register extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    onChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit(event) {
        event.preventDefault(); // prevent refresh

        // New user object
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);

        // POST Request here
        axios.post('http://localhost:4000/admin/register', newUser)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    };

    render() {
        const errors = this.state.errors;

        return (
            <Container className="mt-5 pt-5">
                <Row className="mx-0 justify-content-center">
                    <Col sm={8}>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>* Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.onChange} required></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>* Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onChange} required></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>* Password</Form.Label>
                                <Form.Control type="password" placeholder="Password Here..." 
                                    value={this.state.password} onChange={this.onChange} required
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="password2">
                                <Form.Label>* Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password Here..." 
                                    value={this.state.password2} onChange={this.onChange} required
                                ></Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mb-5" onClick={this.onSubmit}>Submit</Button>
                        </Form>
                    </Col>
                    
                    <Col sm={8} className="mb-5">
                        <Link to="/">Home</Link><br />
                        <Link to="/admin/login">Already have an account - Login</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}