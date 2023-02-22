import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Input.css'

const Input = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className='container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className='btnFindUser'>
        Submit
      </Button>
    </Form>
   </div>
  );
};

export default Input;
