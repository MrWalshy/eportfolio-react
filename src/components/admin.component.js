import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import MessageTableRow from './adminComponents/message-table-row.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './adminComponents/login.component';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: [],
        };
    }
    
    // Runs after all elements of the page rendered correctly,
    // useful for api & network requests 'componentDidMount()'
    componentDidMount() {
        axios.get('http://localhost:4000/admin/')
        .then(response => {
            this.setState({
                messages: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
    
    // Handles the data in messages state
    messageTable() {
        return this.state.messages.map((response, index) => {
            return <MessageTableRow obj={response} key={index} />;
        });
    }

    buildMessageTable() {
        return (
        <Container className="mt-5 pt-5" fluid={true}>
            <Row>
                <Col>
                    <Table variant="dark" size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.messageTable()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

    checkLoginStatus() {
        if (!this.props.isAuthorised) {
            return <Login isAuthorised={this.props.isAuthorised} loginHandler={this.props.loginHandler} />;
        } else {
            return this.buildMessageTable();
        }
    }

    render() {
        return (
            <Router>
                {this.checkLoginStatus()}
            </Router>
            
        )
    }
}