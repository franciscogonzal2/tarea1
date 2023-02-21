import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import "./User.css"

const User = ({ username }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    };
    fetchUserData();
  }, [username]);

  return (
    <Card style={{ width: '18rem' }} className="container2">
      <Card.Img variant="top" src={userData.avatar_url} className="imgprofile"/>
      <Card.Body>
        <Card.Title>{userData.name}</Card.Title>
        <Card.Text>{userData.bio}</Card.Text>
        <Card.Link href={userData.html_url}>Github profile</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default User;
