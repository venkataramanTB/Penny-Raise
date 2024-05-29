import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BadgesPage = () => {
  return (
    <Container>
      <h2>Badges</h2>
      <p>No badges earned yet.</p>
      {/* Add badge logic and display here */}
    </Container>
  );
};

export default BadgesPage;
