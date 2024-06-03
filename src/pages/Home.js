import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const navigateToCatalogue = () => {
    navigate('/catalogue');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary" onClick={navigateToCatalogue}>
        Catalogue
      </Button>
    </div>
  );
};

export default Home;
