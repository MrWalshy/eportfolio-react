import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

// const Name = props => {props.name};
// const Description = props => {props.description};

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        // Initial state
        this.state = {
            expandClicked: false
        }
        // Binding functions to the rendered component
        this.onClickCardExpand = this.onClickCardExpand.bind(this);
    }

    onClickCardExpand(event) {
        // When a new state update depends on the previous state, use the functional form of setState
        this.setState(previousState => ({
            expandClicked: !previousState.expandClicked
        }));
    }

    render() {
        return (
                // <Col className="card col-12 col-md-5 px-0 my-3 mx-xl-3 project-card">
                <Col className={this.state.expandClicked ? 
                    "card col-12 px-0 my-0 mx-xl-3 project-card" : 
                    "card col-12 col-md-5 px-0 my-0 mx-xl-3 project-card"
                }>
                    <img className="card-img-top h-40" src="http://via.placeholder.com/800x400.png" alt="First Image"/>
                    <button className="expand-btn btn btn-light text-center d-none d-md-block" onClick={this.onClickCardExpand}>
                        <span className={this.state.expandClicked ? "d-none" : "expand-btn-text"}>&#10094;Expand&#10095;</span>
                        <span className={this.state.expandClicked ? "shrink-btn-text" : "d-none"}>&#10095;Shrink&#10094;</span>
                    </button>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{this.props.info.name}</h5>
                        <p className="card-text">{this.props.info.description}</p>
                        <a href="https://github.com/MrWalshy/e-portfolio-main" target="_blank" className="btn btn-outline-primary"><i className="fab fa-github"></i> Repository</a>
                    </div>
                </Col>
        );
    }
}