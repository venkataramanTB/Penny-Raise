import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const BadgeCard = styled(Card)`
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;

const CardHeader = styled.div`
  background: ${(props) => props.color};
  padding: 10px;
  color: white;
`;

const BadgesPage = () => {
  const budget = 90000;

  const badges = [
    { name: 'Bronze Saver', threshold: 100, color: '#cd7f32', description: 'Awarded for saving $100', claimedDate: '2024-01-01' },
    { name: 'Silver Saver', threshold: 500, color: '#c0c0c0', description: 'Awarded for saving $500', claimedDate: '2024-03-01' },
    { name: 'Gold Saver', threshold: 1000, color: '#ffd700', description: 'Awarded for saving $1000', claimedDate: '2024-06-01' },
    { name: 'Platinum Saver', threshold: 5000, color: '#e5e4e2', description: 'Awarded for saving $5000', claimedDate: '2024-12-01' },
    { name: 'Diamond Saver', threshold: 10000, color: '#b9f2ff', description: 'Awarded for saving $10000', claimedDate: '2024-12-15' },
    { name: 'Ruby Saver', threshold: 15000, color: '#e0115f', description: 'Awarded for saving $15000', claimedDate: '2024-12-20' },
    { name: 'Emerald Saver', threshold: 20000, color: '#50c878', description: 'Awarded for saving $20000', claimedDate: '2024-12-25' },
    { name: 'Sapphire Saver', threshold: 25000, color: '#0f52ba', description: 'Awarded for saving $25000', claimedDate: '2024-12-30' },
    { name: 'Amethyst Saver', threshold: 30000, color: '#9966cc', description: 'Awarded for saving $30000', claimedDate: '2024-12-31' },
    { name: 'Obsidian Saver', threshold: 50000, color: '#3b3b3b', description: 'Awarded for saving $50000', claimedDate: '2025-01-01' },
  ];

  const earnedBadges = badges.filter(badge => budget >= badge.threshold);

  const handleMouseEnter = (event) => {
    anime({
      targets: event.currentTarget,
      scale: 1.1,
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
      easing: 'easeInOutQuad',
      duration: 300,
    });
  };

  const handleMouseLeave = (event) => {
    anime({
      targets: event.currentTarget,
      scale: 1,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      easing: 'easeInOutQuad',
      duration: 300,
    });
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Badges
      </Typography>
      <Grid>
        {earnedBadges.length > 0 ? (
          earnedBadges.map(badge => (
            <motion.div
              key={badge.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <BadgeCard
                component={motion.div}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardHeader color={badge.color}>
                  <Typography variant="h6" component="div">
                    {badge.name}
                  </Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {badge.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Claimed on: {badge.claimedDate}
                  </Typography>
                </CardContent>
              </BadgeCard>
            </motion.div>
          ))
        ) : (
          <Typography variant="body1">No badges earned yet.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default BadgesPage;
