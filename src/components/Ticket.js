import React, { Component } from 'react'

export default class Ticket extends Component {
    render() {
        return  <tr>
                    <th scope="row">{this.props.ticket.id}</th>
                    <td>{this.props.ticket.status}</td>
                    <td>{this.props.ticket.subject}</td>
                    <td>{this.props.ticket.description}</td>
                </tr>
    }
}
