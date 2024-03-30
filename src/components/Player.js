/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={imageUrl || 'https://example.com/default.jpg'} alt={name || 'Player Name'} style={{ maxHeight: '250px', objectFit: 'cover' }} />
      <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
        <Card.Title style={{ color: '#333', marginBottom: '0.5rem' }}>{name || 'Unknown Player'}</Card.Title>
        <Card.Text style={{ color: '#666', fontSize: '14px' }}>
          <strong>Team:</strong> {team || 'Unknown Team'}<br />
          <strong>Nationality:</strong> {nationality || 'Unknown Nationality'}<br />
          <strong>Jersey Number:</strong> {jerseyNumber || 'Unknown Number'}<br />
          <strong>Age:</strong> {age || 'Unknown Age'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  imageUrl: 'https://example.com/default.jpg',
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 'Unknown Number',
  age: 'Unknown Age'
};

export default Player;
