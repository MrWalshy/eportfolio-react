import React, { Component } from 'react';

export default class MessageTableRow extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.subject}</td>
                <td>{this.props.obj.message}</td>
            </tr>
        );
    }
}