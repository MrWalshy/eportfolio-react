import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        // Bind methods to the component instance
        // Allows passing methods as a callback without losing context of 'this'
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        // Initial state
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    // Helpers
    onChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const messageObject = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        // POST Request here
        axios.post('http://localhost:4000/contact/send-message', messageObject)
        .then(response => console.log(response.data));

        // Reset the state
        this.setState({email: '', subject: '', message: ''});
    }

    render() {
        return (
            <Container className="pt-5 mt-5">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>* Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <Form.Label>* Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" value={this.state.subject} onChange={this.onChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="message">
                        <Form.Label>* Message</Form.Label>
                        <Form.Control 
                            as="textarea" cols="30" rows="10" placeholder="Message Here..." 
                            value={this.state.message} onChange={this.onChange} required
                        ></Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mb-5">Submit</Button>
                </Form>
            </Container>
        );
    }
}