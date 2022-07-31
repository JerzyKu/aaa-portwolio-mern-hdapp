import React from 'react'
import './style.css'
import age from '../../utilities/age'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css'

export default function TaskCard(props) {
    return (
        <Card className='mt-1'>
            <Card.Header className='fw-bold'>{props.data.title}</Card.Header>
            <Card.Body>
                <Card.Text >
                    {props.data.description}
                </Card.Text>
                <Card.Text>
                    State: {props.data.state}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <span className='mr-auto'>Age: {age(props.data.createdAt)}</span>
                <Button variant="primary" type="submit" onClick={() => props.handleClose(props.data._id)}>Close</Button>
            </Card.Footer>
        </Card>
    )
}
