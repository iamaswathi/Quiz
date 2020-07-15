import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const PopoverContent = () => {
    return (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Password Policy</Popover.Title>
        <Popover.Content>
            <ul>
                <li>Must contain Alpha-Numeric characters</li>
                <li>Must be 8 -15 characters in length</li>
                <li>Allowed special characters are !@#$%^&*()</li>
            </ul>
        </Popover.Content>
        </Popover>
    );
}


const Example = (props) => {
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={PopoverContent}>
            <i className="fa fa-info-circle"></i>
        </OverlayTrigger>
    );
}   
export default Example;