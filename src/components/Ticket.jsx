import React from "react";
//import { ProgressPlugin } from "webpack";
import PropTypes from "prop-types";

function Ticket(props){
    var ticketStyles = {
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '50px'
      }
    return (
        <div style={ticketStyles}>
            <h3>{props.location} - {props.names}</h3>
            <p><em>{props.issue}</em></p>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;